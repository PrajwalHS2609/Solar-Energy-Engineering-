import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Building2, Shield, Wrench } from 'lucide-react';
import { RESIDENTIAL_IMAGE } from '../data/solarData';

interface CompanyIntroProps {
  onDiscoverMore: () => void;
  onRequestAssessment: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({
  onDiscoverMore,
  onRequestAssessment,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Editorial Kicker */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            01 · Our Engineering Ethos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Building a Cleaner Future Through Solar Innovation.
          </h2>
        </div>

        {/* Split Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Premium Project Photo with Subtle Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2DDD3] shadow-md bg-white">
              <img
                src={RESIDENTIAL_IMAGE}
                alt="Contemporary residence with precision rooftop solar installation"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white border-t border-[#E2DDD3]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#0D2818] text-base">
                      Engineering Rigor in Every Kilowatt
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Every rooftop is modeled in 3D CAD to evaluate irradiance patterns, micro-shading, and wind dynamics before a single bolt is torqued.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-xl font-bold text-[#0D2818] font-heading tabular-nums">100%</span>
                    <span className="text-[11px] text-[#64748B]">Permit Pass Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Company Introduction & Strategic Strengths */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg text-[#334155] leading-relaxed">
              At Solentra Energy, we view solar not merely as an electrical commodity, but as a high-precision architectural asset that safeguards your energy autonomy for the next three decades.
            </p>

            <p className="text-base text-[#475569] leading-relaxed">
              We specialize in custom turnkey solar systems for luxury residences, commercial complexes, and manufacturing hubs. Rather than one-size-fits-all contractor packages, our in-house master electrical engineers calculate precise string matches, optimal tilt angles, and battery dispatch algorithms tailored to your exact utility tariff schedule.
            </p>

            {/* Core Capability Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2DDD3]/80">
                <div className="flex items-center gap-2.5 text-[#0D2818] font-semibold text-sm mb-1.5">
                  <Shield className="w-4 h-4 text-[#15803D]" />
                  <span>Tier-1 Component Standard</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Direct partnerships with BloombergNEF Tier-1 module and inverter manufacturers with verifiable warranties.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2DDD3]/80">
                <div className="flex items-center gap-2.5 text-[#0D2818] font-semibold text-sm mb-1.5">
                  <Wrench className="w-4 h-4 text-[#E59A18]" />
                  <span>Zero-Leak Roof Mounting</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Non-penetrative clamp engineering on metal standing seam roofs and certified chemical flashings for flat tile.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2DDD3]/80">
                <div className="flex items-center gap-2.5 text-[#0D2818] font-semibold text-sm mb-1.5">
                  <Building2 className="w-4 h-4 text-[#0D2818]" />
                  <span>DISCOM & Net Metering</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  End-to-end liaisoning with local electric utilities for seamless bi-directional meter commissioning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2DDD3]/80">
                <div className="flex items-center gap-2.5 text-[#0D2818] font-semibold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#15803D]" />
                  <span>24/7 Cloud Telemetry</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Active monitoring tracks string performance, state of charge, and alerts our dispatch team instantly on anomalies.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverMore}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0D2818] bg-[#FAF9F5] border border-[#0D2818] rounded-lg hover:bg-[#0D2818] hover:text-white transition-colors"
              >
                <span>Discover Our Company & Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onRequestAssessment}
                className="text-sm font-semibold text-[#0D2818] hover:text-[#E59A18] transition-colors underline underline-offset-4 decoration-[#E59A18]"
              >
                Schedule Rooftop Feasibility Check →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
