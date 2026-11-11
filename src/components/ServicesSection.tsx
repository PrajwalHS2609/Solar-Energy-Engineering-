import React, { useState } from 'react';
import { ArrowUpRight, Check, Zap, BatteryCharging, Factory, Home, Building, Cpu, ShieldCheck } from 'lucide-react';
import { SOLAR_SERVICES } from '../data/solarData';
import { SolarService } from '../types/solar';

interface ServicesSectionProps {
  onSelectService: (service: SolarService) => void;
  onEnquire: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onEnquire,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'specialized' | 'support'>('all');

  const filteredServices = activeTab === 'all'
    ? SOLAR_SERVICES
    : SOLAR_SERVICES.filter((s) => s.category === activeTab);

  // Marquee featured service (Residential)
  const featuredService = SOLAR_SERVICES[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              02 · Engineering Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              Complete Solar Energy Solutions for Every Need.
            </h2>
            <p className="text-base text-[#475569] mt-4">
              From grid-tied suburban villas to multi-megawatt industrial manufacturing facilities, we deliver precision solar engineering tailored to your operational profile.
            </p>
          </div>

          {/* Interactive Category Segmented Control (zero pill candy styling) */}
          <div className="flex items-center gap-1 p-1.5 bg-[#EAE5D9] rounded-xl self-start md:self-auto shrink-0 border border-[#DCD5C7]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setActiveTab('core')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'core'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              Rooftop Sectors
            </button>
            <button
              onClick={() => setActiveTab('specialized')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'specialized'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              System Types
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'support'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              Hardware & Care
            </button>
          </div>
        </div>

        {/* Hero Marquee Feature: Asymmetric Split for Primary Service */}
        {activeTab === 'all' && (
          <div className="mb-14 rounded-2xl overflow-hidden border border-[#E2DDD3] bg-white shadow-md grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#15803D] uppercase tracking-wider mb-2">
                  <Home className="w-4 h-4" />
                  <span>Flagship Residential Architecture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D2818] font-heading mb-4">
                  {featuredService.title}
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                  {featuredService.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2.5 mb-8">
                  {featuredService.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs & CTA */}
              <div className="pt-6 border-t border-[#E2DDD3]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {featuredService.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[11px] text-[#64748B] font-medium">{spec.label}</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#0D2818]">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onEnquire(featuredService.title)}
                    className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D2818] rounded-lg hover:bg-[#153D25] transition-colors"
                  >
                    <span>Request Residential Assessment</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E59A18]" />
                  </button>
                  <button
                    onClick={() => onSelectService(featuredService)}
                    className="text-xs sm:text-sm font-semibold text-[#0D2818] hover:text-[#E59A18] underline underline-offset-4 decoration-[#E59A18]"
                  >
                    View System Specs
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
              <img
                src={featuredService.image}
                alt={featuredService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* Differentiated Alternating Grid for Remaining Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices
            .filter((s) => activeTab !== 'all' || s.id !== 'residential-rooftop')
            .map((service, index) => {
              // Alternate background and emphasis subtly for rhythmic visual interest
              const isAccent = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  className={`flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-lg ${
                    isAccent
                      ? 'bg-white border-[#D5CFC3]'
                      : 'bg-[#FAF9F5] border-[#E2DDD3]'
                  }`}
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div className="relative h-48 overflow-hidden bg-[#E2ECE4]/40">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0D2818]/90 text-[11px] font-semibold text-white backdrop-blur-sm">
                        {service.specs[0]?.value}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <p className="text-[11px] font-semibold tracking-wider text-[#E59A18] uppercase mb-1">
                        {service.subtitle}
                      </p>
                      <h3 className="text-xl font-bold text-[#0D2818] font-heading mb-3">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key highlights */}
                      <ul className="space-y-2 mb-6">
                        {service.keyBenefits.slice(0, 3).map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                            <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer with Details & Direct Enquire */}
                  <div className="px-6 py-4 bg-[#F0ECE1]/50 border-t border-[#E2DDD3] flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-[#0D2818] hover:text-[#E59A18] transition-colors"
                    >
                      Technical Overview →
                    </button>
                    <button
                      onClick={() => onEnquire(service.title)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0D2818] rounded-md hover:bg-[#153D25] transition-colors whitespace-nowrap shrink-0"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
