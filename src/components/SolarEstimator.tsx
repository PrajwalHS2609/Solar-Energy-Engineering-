import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Zap, Sun, DollarSign, Leaf, Battery, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { calculateSolarEstimate } from '../utils/solarCalculations';
import { PropertyType, SystemType, EstimateResult } from '../types/solar';

interface SolarEstimatorProps {
  onApplyEstimateToQuote: (estimate: {
    propertyType: PropertyType;
    systemType: SystemType;
    monthlyBill: number;
    rooftopArea: number;
    suggestedCapacity: string;
    annualSavings: string;
  }) => void;
}

export const SolarEstimator: React.FC<SolarEstimatorProps> = ({ onApplyEstimateToQuote }) => {
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [monthlyBill, setMonthlyBill] = useState<number>(380);
  const [rooftopArea, setRooftopArea] = useState<number>(1200);
  const [systemType, setSystemType] = useState<SystemType>('hybrid');
  const [locationName, setLocationName] = useState<string>('Sunnyvale, CA');

  // Synchronize defaults when switching property types
  const handlePropertyTypeChange = (type: PropertyType) => {
    setPropertyType(type);
    if (type === 'residential') {
      setMonthlyBill(350);
      setRooftopArea(1200);
    } else if (type === 'commercial') {
      setMonthlyBill(2800);
      setRooftopArea(8500);
    } else {
      setMonthlyBill(12000);
      setRooftopArea(35000);
    }
  };

  // Run calculation
  const estimate: EstimateResult = useMemo(() => {
    return calculateSolarEstimate(monthlyBill, propertyType, rooftopArea, systemType);
  }, [monthlyBill, propertyType, rooftopArea, systemType]);

  const handleRequestAssessment = () => {
    onApplyEstimateToQuote({
      propertyType,
      systemType,
      monthlyBill,
      rooftopArea,
      suggestedCapacity: `${estimate.suggestedCapacityKw} kWp`,
      annualSavings: `$${estimate.annualSavingsUsd.toLocaleString()}/yr`,
    });
  };

  return (
    <section id="solar-estimator" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            09 · Interactive Energy Modeling
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Discover the Solar Potential of Your Property.
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Simulate your rooftop solar generation capacity, estimated installation investment, and potential utility bill reduction in real-time.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2DDD3] shadow-sm space-y-6">
            
            <div className="flex items-center gap-2 pb-4 border-b border-[#E2DDD3]">
              <Calculator className="w-5 h-5 text-[#0D2818]" />
              <h3 className="text-lg font-bold text-[#0D2818] font-heading">
                System Parameters
              </h3>
            </div>

            {/* Property Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-2.5">
                Property Classification
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['residential', 'commercial', 'industrial'] as PropertyType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handlePropertyTypeChange(type)}
                    className={`py-2.5 px-3 text-xs font-bold rounded-lg border capitalize transition-all ${
                      propertyType === type
                        ? 'bg-[#0D2818] text-white border-[#0D2818]'
                        : 'bg-[#FAF9F5] text-[#475569] border-[#E2DDD3] hover:border-[#CBD5E1]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Electricity Bill Input & Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0D2818]">
                  Average Monthly Electricity Bill
                </label>
                <span className="text-sm font-bold text-[#0D2818] font-heading tabular-nums bg-[#FAF9F5] px-2.5 py-1 rounded border border-[#E2DDD3]">
                  ${monthlyBill.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min={propertyType === 'residential' ? 80 : propertyType === 'commercial' ? 500 : 2500}
                max={propertyType === 'residential' ? 1500 : propertyType === 'commercial' ? 10000 : 50000}
                step={propertyType === 'residential' ? 20 : 100}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-[#E2DDD3] rounded-lg appearance-none cursor-pointer accent-[#0D2818]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1.5">
                <span>{propertyType === 'residential' ? '$80' : propertyType === 'commercial' ? '$500' : '$2,500'}</span>
                <span>{propertyType === 'residential' ? '$1,500+' : propertyType === 'commercial' ? '$10,000+' : '$50,000+'}</span>
              </div>
            </div>

            {/* Available Rooftop Area Input & Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0D2818]">
                  Available Usable Rooftop Area
                </label>
                <span className="text-sm font-bold text-[#0D2818] font-heading tabular-nums bg-[#FAF9F5] px-2.5 py-1 rounded border border-[#E2DDD3]">
                  {rooftopArea.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={propertyType === 'residential' ? 300 : propertyType === 'commercial' ? 2000 : 8000}
                max={propertyType === 'residential' ? 4000 : propertyType === 'commercial' ? 30000 : 100000}
                step={propertyType === 'residential' ? 100 : 500}
                value={rooftopArea}
                onChange={(e) => setRooftopArea(Number(e.target.value))}
                className="w-full h-2 bg-[#E2DDD3] rounded-lg appearance-none cursor-pointer accent-[#0D2818]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1.5">
                <span>{propertyType === 'residential' ? '300 sq.ft' : '2,000 sq.ft'}</span>
                <span>{propertyType === 'residential' ? '4,000+ sq.ft' : '100,000+ sq.ft'}</span>
              </div>
            </div>

            {/* Preferred System Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-2.5">
                Preferred System Configuration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'on-grid', name: 'On-Grid', sub: 'Max Financial ROI' },
                  { id: 'hybrid', name: 'Hybrid Storage', sub: 'Blackout Security' },
                  { id: 'off-grid', name: 'Off-Grid', sub: '100% Autonomy' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSystemType(item.id as SystemType)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      systemType === item.id
                        ? 'bg-[#0D2818] text-white border-[#0D2818]'
                        : 'bg-[#FAF9F5] text-[#334155] border-[#E2DDD3] hover:border-[#CBD5E1]'
                    }`}
                  >
                    <span className="block text-xs font-bold">{item.name}</span>
                    <span className={`block text-[10px] ${systemType === item.id ? 'text-white/70' : 'text-[#64748B]'}`}>
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                Installation Location / City
              </label>
              <input
                type="text"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="e.g. Austin, TX or Bengaluru, KA"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
              />
            </div>

          </div>

          {/* Right Column: Indicative Dynamic Output & Results */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Result Hero Card */}
            <div className="bg-[#0D2818] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                  <span className="uppercase tracking-wider font-semibold">Recommended Solar Capacity</span>
                  <span className="text-[#E59A18] font-bold">~ {estimate.panelsCount} Tier-1 Modules</span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl sm:text-5xl font-bold font-heading tabular-nums text-white">
                    {estimate.suggestedCapacityKw}
                  </span>
                  <span className="text-xl font-bold text-[#E59A18] font-heading">kWp System</span>
                </div>

                {/* Core metrics grid */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/15">
                  <div>
                    <span className="block text-xs text-white/70 mb-1">Estimated Annual Savings</span>
                    <span className="text-2xl font-bold text-[#E59A18] font-heading tabular-nums">
                      ${estimate.annualSavingsUsd.toLocaleString()}
                    </span>
                    <span className="block text-[11px] text-white/50">per year on electricity</span>
                  </div>

                  <div>
                    <span className="block text-xs text-white/70 mb-1">Annual Clean Energy</span>
                    <span className="text-2xl font-bold text-white font-heading tabular-nums">
                      {estimate.annualGenerationKwh.toLocaleString()}
                    </span>
                    <span className="block text-[11px] text-white/50">kWh generated / year</span>
                  </div>
                </div>

                {/* Secondary metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/15 text-xs">
                  <div>
                    <span className="text-white/60 block text-[11px]">25-Yr Lifetime Savings</span>
                    <span className="font-bold text-white tabular-nums">${estimate.lifetimeSavings25Yr.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[11px]">CO2 Avoided</span>
                    <span className="font-bold text-[#86EFAC] tabular-nums">{estimate.co2OffsetTonnes} Tonnes/yr</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[11px]">Est. Payback</span>
                    <span className="font-bold text-white tabular-nums">~ {estimate.estimatedPaybackYears} Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Investment Range Card */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2DDD3] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                  Indicative Turnkey Cost Range (Before Subsidies)
                </span>
                <span className="text-xl font-bold text-[#0D2818] font-heading tabular-nums">
                  {estimate.indicativeCostRange}
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Includes Tier-1 modules, inverter, structure, wiring & DISCOM liaisoning.
                </span>
              </div>

              <button
                onClick={handleRequestAssessment}
                className="flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0D2818] hover:bg-[#153D25] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>Request Assessment with this Sizing</span>
                <ArrowRight className="w-4 h-4 text-[#E59A18]" />
              </button>
            </div>

            {/* Disclaimer Callout */}
            <div className="p-4 rounded-xl bg-[#F0ECE1]/70 border border-[#E2DDD3] text-[11px] text-[#64748B] leading-relaxed">
              <strong>Important Disclaimer:</strong> These figures represent indicative estimates based on typical insolation levels and standard utility rates. Final engineering recommendations depend on physical rooftop shading, roof tilt, electrical service panel capacity, and applicable local utility interconnection rules.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
