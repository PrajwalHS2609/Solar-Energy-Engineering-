import { EstimateResult, PropertyType, SystemType } from '../types/solar';

export function calculateSolarEstimate(
  monthlyBill: number,
  propertyType: PropertyType,
  availableRoofArea: number,
  systemType: SystemType
): EstimateResult {
  // Average blended utility tariff assumption
  let tariffPerKwh = 0.16; // $0.16 per kWh residential baseline
  if (propertyType === 'commercial') tariffPerKwh = 0.18;
  if (propertyType === 'industrial') tariffPerKwh = 0.14;

  // Monthly kWh consumed
  const monthlyKwh = monthlyBill / tariffPerKwh;
  const targetMonthlyOffset = 0.85; // aim to offset 85% of monthly consumption
  const targetKwhPerMonth = monthlyKwh * targetMonthlyOffset;
  const dailyKwhNeeded = targetKwhPerMonth / 30;

  // Average peak sun hours per day ~ 4.5 hrs with 0.80 derate system factor
  const effectiveDailyGenerationPerKw = 4.5 * 0.80; // ~ 3.6 kWh/day per kWp
  let recommendedKw = Math.round((dailyKwhNeeded / effectiveDailyGenerationPerKw) * 10) / 10;

  // Enforce realistic bounds
  if (propertyType === 'residential') {
    recommendedKw = Math.max(3, Math.min(recommendedKw, 30));
  } else if (propertyType === 'commercial') {
    recommendedKw = Math.max(20, Math.min(recommendedKw, 500));
  } else {
    recommendedKw = Math.max(50, Math.min(recommendedKw, 2000));
  }

  // Calculate panel count (assuming 560W commercial/residential high-yield module)
  const wattsNeeded = recommendedKw * 1000;
  const panelWattage = 560;
  const panelsCount = Math.ceil(wattsNeeded / panelWattage);

  // Space requirement: ~ 75 sq.ft per kWp
  const requiredRoofAreaSqFt = Math.round(recommendedKw * 75);

  // If available roof area is smaller than required, adjust capacity to fit roof
  let finalCapacityKw = recommendedKw;
  if (availableRoofArea > 0 && availableRoofArea < requiredRoofAreaSqFt) {
    finalCapacityKw = Math.round((availableRoofArea / 75) * 10) / 10;
    finalCapacityKw = Math.max(2, finalCapacityKw);
  }

  // Annual Generation in kWh (approx 1,450 kWh per kWp annually)
  const annualGenerationKwh = Math.round(finalCapacityKw * 1450);

  // Annual bill savings
  const annualSavingsUsd = Math.round(annualGenerationKwh * tariffPerKwh * 0.95);
  const lifetimeSavings25Yr = Math.round(annualSavingsUsd * 25 * 0.92); // accounting for minor degradation

  // Environmental offset: ~ 0.71 kg CO2 avoided per kWh
  const co2OffsetTonnes = Math.round((annualGenerationKwh * 0.708) / 1000 * 10) / 10;
  // ~ 1 tree absorbs ~ 22 kg CO2 per year
  const treesEquivalent = Math.round((co2OffsetTonnes * 1000) / 22);

  // Indicative system cost range based on system type
  let baseCostPerWatt = 1.35; // on-grid baseline
  if (systemType === 'hybrid') baseCostPerWatt = 1.85; // with lithium storage
  if (systemType === 'off-grid') baseCostPerWatt = 2.15; // full off-grid with heavy storage

  if (propertyType === 'commercial' || propertyType === 'industrial') {
    baseCostPerWatt *= 0.82; // economies of scale
  }

  const midCost = finalCapacityKw * 1000 * baseCostPerWatt;
  const lowCost = Math.round((midCost * 0.92) / 100) * 100;
  const highCost = Math.round((midCost * 1.12) / 100) * 100;

  const indicativeCostRange = `$${lowCost.toLocaleString()} – $${highCost.toLocaleString()}`;

  // Simple payback estimation in years
  const estimatedPaybackYears = Math.round((midCost / (annualSavingsUsd || 1)) * 10) / 10;

  return {
    suggestedCapacityKw: finalCapacityKw,
    requiredRoofAreaSqFt,
    panelsCount: Math.ceil((finalCapacityKw * 1000) / panelWattage),
    annualGenerationKwh,
    annualSavingsUsd,
    lifetimeSavings25Yr,
    co2OffsetTonnes,
    treesEquivalent,
    indicativeCostRange,
    estimatedPaybackYears: Math.min(Math.max(estimatedPaybackYears, 3.2), 7.5),
  };
}
