import React, { useState } from 'react';
import { Cpu, BatteryCharging, Zap, ShieldAlert, Wifi, Layers, CheckCircle2 } from 'lucide-react';
import { BATTERY_IMAGE, TECHNOLOGY_COMPONENTS } from '../data/solarData';

export const TechnologySection: React.FC = () => {
  const [selectedTechId, setSelectedTechId] = useState(TECHNOLOGY_COMPONENTS[0].id);
  const activeComponent = TECHNOLOGY_COMPONENTS.find((t) => t.id === selectedTechId) || TECHNOLOGY_COMPONENTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'tech-pv-modules': return Layers;
      case 'tech-inverters': return Zap;
      case 'tech-battery-storage': return BatteryCharging;
      case 'tech-mounting-structures': return Layers;
      case 'tech-electrical-protection': return ShieldAlert;
      case 'tech-iot-monitoring': return Wifi;
      default: return Cpu;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            06 · Hardware Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Explore the Technology Behind Your Solar Power System.
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Every component in a Solentra solar installation is vetted for 25-year structural resilience, electrical efficiency, and safety compliance under extreme climatic conditions.
          </p>
        </div>

        {/* 2-Column Hardware Engineering Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Component List */}
          <div className="lg:col-span-5 space-y-3">
            {TECHNOLOGY_COMPONENTS.map((item) => {
              const Icon = getIcon(item.id);
              const isSelected = item.id === selectedTechId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTechId(item.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white border-[#0D2818] shadow-md -translate-x-1'
                      : 'bg-white/60 border-[#E2DDD3] hover:bg-white hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#0D2818] text-[#E59A18]' : 'bg-[#FAF9F5] text-[#0D2818]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#0D2818]">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md shrink-0 tabular-nums ${
                      isSelected ? 'bg-[#0D2818] text-white' : 'bg-[#EAE5D9] text-[#475569]'
                    }`}
                  >
                    {item.efficiencyOrRating}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Technical Inspector Card with Visual */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2DDD3] shadow-md p-8 lg:p-10 space-y-6">
            
            {/* Visual Header */}
            <div className="relative h-56 rounded-xl overflow-hidden border border-[#E2DDD3] bg-[#E2ECE4]/30">
              <img
                src={BATTERY_IMAGE}
                alt="Precision solar inverter and battery system installation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#0D2818]/90 text-white text-xs font-semibold px-3 py-1 rounded backdrop-blur-md">
                Solentra Lab Verified Hardware
              </div>
            </div>

            {/* Component Detail */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E59A18]">
                  {activeComponent.category}
                </span>
                <span className="text-xs font-semibold text-[#15803D]">
                  {activeComponent.lifespan}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0D2818] font-heading mb-3">
                {activeComponent.name}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {activeComponent.role}
              </p>
            </div>

            {/* Engineering Specifications Grid */}
            <div className="pt-4 border-t border-[#E2DDD3]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-3">
                Technical Specifications:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeComponent.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-[#334155] p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E2DDD3]/60">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Advantage */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] flex items-start gap-3">
              <Cpu className="w-5 h-5 text-[#0D2818] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#0D2818] block">
                  The Solentra Engineering Advantage:
                </span>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  {activeComponent.engineeringAdvantage}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
