import React, { useState } from 'react';
import { BadgePercent, Landmark, Coins, FileCheck, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface FinancingSubsidySectionProps {
  onEnquireFinancing: () => void;
}

export const FinancingSubsidySection: React.FC<FinancingSubsidySectionProps> = ({ onEnquireFinancing }) => {
  const [loanAmount, setLoanAmount] = useState<number>(12000);
  const [loanTenureMonths, setLoanTenureMonths] = useState<number>(60);
  const interestRateAnnual = 0.075; // 7.5% green solar loan

  // Calculate monthly EMI: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRateAnnual / 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenureMonths)) /
    (Math.pow(1 + monthlyRate, loanTenureMonths) - 1)
  );

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              10 · Financial Incentives & Capital
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              Explore Available Solar Support & Financing Options.
            </h2>
            <p className="text-base text-[#475569] mt-3">
              Adopt clean solar energy with low upfront capital. Leverage government capital subsidies, accelerated tax depreciation, and flexible low-interest green loans.
            </p>
          </div>

          <button
            onClick={onEnquireFinancing}
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D2818] rounded-lg hover:bg-[#153D25] transition-colors self-start md:self-auto shrink-0 shadow-sm"
          >
            <span>Discuss Solar Financing Options</span>
            <ArrowRight className="w-4 h-4 text-[#E59A18]" />
          </button>
        </div>

        {/* 3 Pillars of Financial Optimization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* Pillar 1: Residential Subsidies */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2DDD3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] flex items-center justify-center text-[#0D2818] mb-6">
                <Landmark className="w-6 h-6 text-[#0D2818]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2818] font-heading mb-3">
                Government Subsidies & Schemes
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                Direct government incentives can offset a substantial portion of residential rooftop capital expenditures.
              </p>
              <ul className="space-y-2.5 text-xs text-[#334155] mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>PM Surya Ghar Scheme:</strong> Direct DBT subsidy up to ₹78,000 for 1–3 kWp systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Federal 30% ITC:</strong> Dollar-for-dollar tax credit on residential and commercial PV equipment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Turnkey Filing:</strong> Solentra prepares and submits all portal documents on your behalf.</span>
                </li>
              </ul>
            </div>
            <span className="text-[11px] font-semibold text-[#15803D]">
              Direct Benefit Transfer (DBT) Available
            </span>
          </div>

          {/* Pillar 2: Commercial Accelerated Depreciation */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2DDD3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] flex items-center justify-center text-[#0D2818] mb-6">
                <BadgePercent className="w-6 h-6 text-[#0D2818]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2818] font-heading mb-3">
                Commercial Tax Incentives
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                Corporate entities and industrial factories can shield taxable profits through accelerated write-offs.
              </p>
              <ul className="space-y-2.5 text-xs text-[#334155] mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>40% Accelerated Depreciation:</strong> Claim significant tax shields in Year 1 of commissioning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Corporate ESG Credits:</strong> Quantified Scope 2 greenhouse gas reduction credits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Net Metering Banking:</strong> Roll forward surplus generation units to high-demand months.</span>
                </li>
              </ul>
            </div>
            <span className="text-[11px] font-semibold text-[#15803D]">
              Significant Year-1 Tax Savings
            </span>
          </div>

          {/* Pillar 3: Low-Interest Green Loans */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2DDD3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] flex items-center justify-center text-[#0D2818] mb-6">
                <Coins className="w-6 h-6 text-[#0D2818]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D2818] font-heading mb-3">
                Solar Green Loans & EMI
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                Zero or minimal down-payment financing structures where your monthly electricity savings directly service the loan.
              </p>
              <ul className="space-y-2.5 text-xs text-[#334155] mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Concessional Rates:</strong> Green banking lines from 7.0% – 8.5% annual interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Tenures up to 7 Years:</strong> Flexible repayment matching expected system generation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                  <span><strong>Instant In-Principle Approval:</strong> Streamlined paperwork with leading partner banks.</span>
                </li>
              </ul>
            </div>
            <span className="text-[11px] font-semibold text-[#15803D]">
              Cash-Flow Positive from Month 1
            </span>
          </div>

        </div>

        {/* Interactive Solar EMI Calculator Widget */}
        <div className="p-8 rounded-2xl bg-[#0D2818] text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E59A18]">
                Interactive Financing Simulator
              </span>
              <h4 className="text-2xl font-bold font-heading">
                Calculate Your Solar Loan Monthly EMI
              </h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                See how a low-interest solar equipment loan replaces your utility power bill with an asset you own outright.
              </p>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs text-white/80 mb-1">
                    <span>Financed Amount:</span>
                    <span className="font-bold text-[#E59A18] tabular-nums">${loanAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={3000}
                    max={50000}
                    step={1000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E59A18]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/80 mb-1">
                    <span>Repayment Tenure:</span>
                    <span className="font-bold text-white tabular-nums">{loanTenureMonths} Months ({loanTenureMonths / 12} Yrs)</span>
                  </div>
                  <input
                    type="range"
                    min={24}
                    max={84}
                    step={12}
                    value={loanTenureMonths}
                    onChange={(e) => setLoanTenureMonths(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E59A18]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 p-6 rounded-xl border border-white/15 text-center sm:text-left flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 block mb-1">
                  Estimated Monthly EMI
                </span>
                <span className="text-3xl sm:text-4xl font-bold font-heading tabular-nums text-[#E59A18]">
                  ${emi} <span className="text-sm font-normal text-white/70">/ month</span>
                </span>
                <p className="text-xs text-white/60 mt-2">
                  At indicative 7.5% annual rate. In most setups, your monthly electricity bill reduction exceeds this installment.
                </p>
              </div>

              <button
                onClick={onEnquireFinancing}
                className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg bg-[#E59A18] hover:bg-[#D97706] text-[#0D2818] transition-colors"
              >
                Apply for Solar Loan Pre-Approval
              </button>
            </div>

          </div>
        </div>

        {/* Mandatory Regulatory Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] text-[11px] text-[#64748B] text-center leading-relaxed">
          <strong>Mandatory Notice:</strong> Subsidy availability, eligibility thresholds, actual amounts, and approval timelines depend on current central/state government notifications and DISCOM regulatory policies. Solentra assists with documentation but final grant approval rests with statutory authorities.
        </div>

      </div>
    </section>
  );
};
