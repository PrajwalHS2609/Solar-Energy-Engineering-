import React from 'react';
import { TrendingDown, Shield, Sun, Leaf, Battery, Building, ArrowUpRight } from 'lucide-react';

interface BenefitsSectionProps {
  onOpenEstimator: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenEstimator }) => {
  const benefits = [
    {
      icon: TrendingDown,
      metric: '75%–90%',
      title: 'Substantial Bill Reduction',
      desc: 'Offset your peak daytime consumption at zero marginal cost. Net metering credits allow excess daytime generation to offset nighttime grid draws.'
    },
    {
      icon: Shield,
      metric: '25+ Years',
      title: 'Hedge Against Tariff Inflation',
      desc: 'Commercial and residential utility tariffs historically climb 3–7% annually. Locking in your self-generation cost provides predictable operational budgeting.'
    },
    {
      icon: Battery,
      metric: '< 10 ms',
      title: 'Uninterrupted Power Security',
      desc: 'Hybrid battery architectures isolate your critical circuits during blackouts, eliminating costly business disruptions and keeping home appliances running.'
    },
    {
      icon: Leaf,
      metric: '0.71 kg/kWh',
      title: 'Tangible Carbon Decarbonization',
      desc: 'Every kilowatt-hour generated cleanly offsets coal or gas grid emissions, driving your property towards verified net-zero sustainability milestones.'
    },
    {
      icon: Building,
      metric: '4.1% Avg',
      title: 'Property Asset Value Appreciation',
      desc: 'Studies demonstrate residential and commercial properties with owned high-efficiency solar infrastructure sell faster and command higher valuation premiums.'
    },
    {
      icon: Sun,
      metric: '100% Usable',
      title: 'Monetize Dead Rooftop Real Estate',
      desc: 'Transform passive roof area exposed to sunlight into an active income-generating energy harvesting asset with zero land footprint.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              07 · The Value Proposition
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              Make the Most of Every Ray of Sunshine.
            </h2>
            <p className="text-base text-[#475569] mt-3">
              Solar is one of the few infrastructural investments that pays for itself while delivering immediate operational stability and environmental leadership.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0D2818] bg-white border border-[#0D2818] rounded-lg hover:bg-[#0D2818] hover:text-white transition-colors self-start md:self-auto shrink-0 shadow-sm"
          >
            <span>Calculate Property Solar Potential</span>
            <ArrowUpRight className="w-4 h-4 text-[#E59A18]" />
          </button>
        </div>

        {/* 6-Card Editorial Asymmetric Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-[#E2DDD3] hover:border-[#D5CFC3] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] flex items-center justify-center text-[#0D2818]">
                      <Icon className="w-5 h-5 text-[#0D2818]" />
                    </div>
                    <span className="text-2xl font-bold text-[#0D2818] font-heading tabular-nums">
                      {benefit.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0D2818] font-heading mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2DDD3]/60 flex items-center text-xs font-semibold text-[#15803D]">
                  <span>Verified Operational Return</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance & Accuracy Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F0ECE1]/60 border border-[#E2DDD3] text-xs text-[#64748B] text-center max-w-4xl mx-auto">
          Notice: Financial returns and electricity generation vary depending on geographic solar insolation, tilt angle, local utility tariffs, and actual property shading. A customized site assessment is conducted prior to finalizing project specifications.
        </div>

      </div>
    </section>
  );
};
