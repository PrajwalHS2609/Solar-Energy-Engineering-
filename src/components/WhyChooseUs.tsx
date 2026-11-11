import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, Award, Wrench, HardHat, FileText, Activity } from 'lucide-react';
import { COMMERCIAL_IMAGE } from '../data/solarData';

export const WhyChooseUs: React.FC = () => {
  const strengths = [
    {
      icon: HardHat,
      title: 'Experienced Solar Engineering Team',
      desc: 'In-house certified electrical engineers and master technicians with 12+ years of field experience on residential and industrial grids.'
    },
    {
      icon: Compass,
      title: 'Customized 3D System Design',
      desc: 'Every system is simulated in PVSyst and Helioscope to account for micro-shading, azimuth orientation, and peak solar hour profiles.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Tier-1 Components',
      desc: 'Direct manufacturer partnerships with BloombergNEF Tier-1 module makers and UL/IEC certified hybrid inverter systems.'
    },
    {
      icon: Wrench,
      title: 'Zero-Penetration Roof Mounting',
      desc: 'Preserve building structural integrity with non-penetrative standing seam clamps for metal roofs and dual-sealed flashed brackets for tile.'
    },
    {
      icon: FileText,
      title: 'Transparent, Fixed Project Estimates',
      desc: 'Itemized bill of materials with explicit hardware models, balance-of-system (BOS) specs, and guaranteed turnkey pricing without hidden fees.'
    },
    {
      icon: Award,
      title: 'Safety-Focused Workmanship',
      desc: 'Integrated DC Arc Fault Circuit Interrupters (AFCI), Type-II surge arrestors, chemical copper earthing, and full IEEE 1547 compliance.'
    },
    {
      icon: Activity,
      title: 'Rigorous Testing & Commissioning',
      desc: 'Pre-energization insulation resistance testing, earth pit ohm verification, thermal IR scanning, and utility net-metering validation.'
    },
    {
      icon: CheckCircle2,
      title: 'Dedicated After-Sales Support & SLAs',
      desc: 'Continuous cloud telemetry monitoring, periodic preventive maintenance audits, and guaranteed 24-hour on-site dispatch response.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            03 · The Solentra Standard
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Reliable Solar Solutions. Professional Installation. Long-Term Value.
          </h2>
          <p className="text-base text-[#475569] mt-4">
            A solar system is a 25-year structural and electrical investment. Here is how our engineering-first discipline protects your property and maximizes generation output.
          </p>
        </div>

        {/* Asymmetric Layout: Large Architectural Image + 8 Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Anchor with Engineering Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#E2DDD3] shadow-md bg-white">
              <img
                src={COMMERCIAL_IMAGE}
                alt="High-capacity commercial rooftop solar project engineered by Solentra"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white border-t border-[#E2DDD3]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0D2818]">
                    Engineering Compliance
                  </span>
                  <span className="text-xs font-bold text-[#15803D]">Verified</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#475569]">
                  <span>IEC 61215 / 61730 Modules</span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span>UL 1741-SB Inverters</span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span>NEC 690 Rapid Shutdown</span>
                </div>
              </div>
            </div>

            {/* Quote Callout */}
            <div className="p-6 rounded-2xl bg-[#0D2818] text-white">
              <p className="text-sm font-medium leading-relaxed italic text-white/90">
                “Quality in solar is measured 15 years down the line when summer heatwaves and winter storms test every cable tie, crimp connection, and inverter junction.”
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span className="font-semibold text-white">Chief Electrical Engineer</span>
                <span className="text-[#E59A18]">Solentra Technical Services</span>
              </div>
            </div>
          </div>

          {/* Right Column: 8 Strengths in Asymmetric 2-Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E2DDD3] hover:border-[#D5CFC3] transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E2DDD3] flex items-center justify-center text-[#0D2818] mb-3.5">
                    <Icon className="w-5 h-5 text-[#0D2818]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0D2818] font-heading mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
