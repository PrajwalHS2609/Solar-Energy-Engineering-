import React, { useState } from 'react';
import { Home, Building2, Factory, Check, ArrowRight } from 'lucide-react';
import { RESIDENTIAL_IMAGE, COMMERCIAL_IMAGE, INDUSTRIAL_IMAGE } from '../data/solarData';

interface SectorsSectionProps {
  onEnquireSector: (sector: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onEnquireSector }) => {
  const [activeSector, setActiveSector] = useState<'residential' | 'commercial' | 'industrial'>('residential');

  const sectors = {
    residential: {
      id: 'residential',
      title: 'Residential Rooftop Solar',
      subtitle: 'Engineered for Villas, Independent Homes & Communities',
      image: RESIDENTIAL_IMAGE,
      lead: 'Transform your private rooftop into an elegant micro-powerplant that eliminates 80–90% of your electricity bill while protecting your family against blackout events.',
      properties: [
        'Independent Luxury Villas & Estates',
        'Single-Family Contemporary Homes',
        'Duplex Residences & Row Houses',
        'Gated Community Clubhouses & Common Areas'
      ],
      features: [
        { label: 'Typical Sizing', value: '3 kWp to 25 kWp capacity' },
        { label: 'Mounting Style', value: 'Architectural flush-fit or elevated pergola' },
        { label: 'Storage Option', value: 'LiFePO4 wall battery (5–20 kWh)' },
        { label: 'Permit Handling', value: '100% turnkey DISCOM net-metering' },
      ],
      ctaText: 'Get Residential Solar Proposal'
    },
    commercial: {
      id: 'commercial',
      title: 'Commercial Solar Energy Plants',
      subtitle: 'Engineered for Offices, IT Parks, Hospitals & Institutions',
      image: COMMERCIAL_IMAGE,
      lead: 'Commercial enterprises face highest peak tariff slabs during daytime business hours—precisely when solar panels operate at maximum efficiency. Turn idle roofs into active profit centers.',
      properties: [
        'Corporate Office Headquarters & IT Parks',
        'Private Hospitals & Healthcare Diagnostic Centers',
        'Schools, Colleges & University Campuses',
        'Retail Malls, Showrooms & Commercial Carports'
      ],
      features: [
        { label: 'Typical Sizing', value: '30 kWp to 500 kWp capacity' },
        { label: 'Financial Benefit', value: '40% Accelerated Depreciation tax write-off' },
        { label: 'Carport Dual-Use', value: 'Solar carports integrated with EV chargers' },
        { label: 'Monitoring System', value: 'Enterprise multi-tenant cloud SCADA' },
      ],
      ctaText: 'Get Commercial Solar Proposal'
    },
    industrial: {
      id: 'industrial',
      title: 'Industrial Megawatt-Scale Power',
      subtitle: 'Engineered for Heavy Manufacturing, Warehouses & Logistics Hubs',
      image: INDUSTRIAL_IMAGE,
      lead: 'Heavy manufacturing plants running high-draw induction motors and cold-storage compressors can significantly cut their Levelized Cost of Energy (LCOE) with high-density industrial solar.',
      properties: [
        'Manufacturing Facilities & Fabrication Yards',
        'Logistics Hubs & Automated Fulfillment Centers',
        'Cold Storage Warehouses & Agro-Processing',
        'Textile, Chemical & Heavy Engineering Works'
      ],
      features: [
        { label: 'Typical Sizing', value: '100 kWp to 5+ MWp industrial power' },
        { label: 'Roof Integration', value: 'Zero-penetration standing seam clamps' },
        { label: 'DG Set Sync', value: 'Zero-export controllers for generator sync' },
        { label: 'Safety Protocols', value: 'Full compliance with CEA, CEIG & Factory Acts' },
      ],
      ctaText: 'Get Industrial Solar Proposal'
    }
  };

  const current = sectors[activeSector];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            05 · Sector Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Solar Energy Solutions Built Around Your Property.
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Because a private residence, a healthcare facility, and a steel fabrication plant operate on fundamentally different power dynamics, our engineering approaches are distinct.
          </p>
        </div>

        {/* 3 Sector Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <button
            onClick={() => setActiveSector('residential')}
            className={`flex items-center justify-center gap-3 p-4 rounded-xl border text-sm font-bold transition-all ${
              activeSector === 'residential'
                ? 'bg-[#0D2818] text-white border-[#0D2818] shadow-md'
                : 'bg-white text-[#334155] border-[#E2DDD3] hover:border-[#CBD5E1]'
            }`}
          >
            <Home className={`w-4 h-4 ${activeSector === 'residential' ? 'text-[#E59A18]' : 'text-[#64748B]'}`} />
            <span>Residential Solar</span>
          </button>

          <button
            onClick={() => setActiveSector('commercial')}
            className={`flex items-center justify-center gap-3 p-4 rounded-xl border text-sm font-bold transition-all ${
              activeSector === 'commercial'
                ? 'bg-[#0D2818] text-white border-[#0D2818] shadow-md'
                : 'bg-white text-[#334155] border-[#E2DDD3] hover:border-[#CBD5E1]'
            }`}
          >
            <Building2 className={`w-4 h-4 ${activeSector === 'commercial' ? 'text-[#E59A18]' : 'text-[#64748B]'}`} />
            <span>Commercial Solar</span>
          </button>

          <button
            onClick={() => setActiveSector('industrial')}
            className={`flex items-center justify-center gap-3 p-4 rounded-xl border text-sm font-bold transition-all ${
              activeSector === 'industrial'
                ? 'bg-[#0D2818] text-white border-[#0D2818] shadow-md'
                : 'bg-white text-[#334155] border-[#E2DDD3] hover:border-[#CBD5E1]'
            }`}
          >
            <Factory className={`w-4 h-4 ${activeSector === 'industrial' ? 'text-[#E59A18]' : 'text-[#64748B]'}`} />
            <span>Industrial Solar</span>
          </button>
        </div>

        {/* Active Sector Showcase Container */}
        <div className="rounded-2xl overflow-hidden border border-[#E2DDD3] bg-white shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Content Column */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-2">
                  {current.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D2818] font-heading mb-4">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                  {current.lead}
                </p>

                {/* Property Types */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D2818] block mb-3">
                    Target Property Types:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.properties.map((prop, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                        <span>{prop}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Engineering Features Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E2DDD3] mb-8">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E2DDD3]/70">
                      <span className="block text-[11px] font-semibold text-[#64748B]">{feat.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-[#0D2818]">{feat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2">
                <button
                  onClick={() => onEnquireSector(current.title)}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0D2818] hover:bg-[#153D25] rounded-lg transition-colors shadow-sm"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#E59A18]" />
                </button>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
