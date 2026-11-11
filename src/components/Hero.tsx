import React from 'react';
import { ArrowUpRight, Calculator, ShieldCheck, Zap, Award, SunMedium } from 'lucide-react';
import { HERO_IMAGE, COMPANY_STATS } from '../data/solarData';

interface HeroProps {
  onRequestQuote: () => void;
  onOpenEstimator: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onOpenEstimator,
  onExploreServices,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed editorial kicker / trust indicator (zero pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#0D2818]/80 mb-6 uppercase">
              <span>Residential & Commercial Solar</span>
              <span className="text-[#E59A18] font-black" aria-hidden="true">·</span>
              <span>Turnkey Engineering</span>
              <span className="text-[#E59A18] font-black" aria-hidden="true">·</span>
              <span>25-Year Protection</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D2818] leading-[1.08] mb-6 font-heading max-w-2xl text-balance">
              Power Your Future with <span className="text-[#0D2818] underline decoration-[#E59A18] decoration-4 underline-offset-8">Smarter Solar Energy</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#334155] leading-relaxed mb-8 max-w-xl">
              Make the switch to clean, reliable, and cost-effective energy with professionally designed solar installation solutions for homes and businesses.
            </p>

            {/* CTA Action Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onRequestQuote}
                className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-[#0D2818] hover:bg-[#153D25] active:bg-[#0A1F13] rounded-lg transition-all shadow-md group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2818]"
              >
                <span>Get a Free Solar Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#E59A18] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-[#0D2818] bg-[#FAF9F5] hover:bg-[#F0ECE1] border border-[#0D2818]/20 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2818]"
              >
                <Calculator className="w-4 h-4 text-[#E59A18]" />
                <span>Estimate Your Solar Savings</span>
              </button>
            </div>

            {/* Unboxed trust proof markers */}
            <div className="pt-6 border-t border-[#E2DDD3] grid grid-cols-3 gap-4 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#15803D] shrink-0" />
                <span className="font-medium text-[#0D2818]">Tier-1 Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E59A18] shrink-0" />
                <span className="font-medium text-[#0D2818]">Licensed Electricians</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#15803D] shrink-0" />
                <span className="font-medium text-[#0D2818]">Net Metering Fast-Track</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Photography Focal Carrier */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2DDD3] bg-[#E2ECE4]/30 shadow-lg h-full min-h-[380px] sm:min-h-[460px]">
              <img
                src={HERO_IMAGE}
                alt="Contemporary architectural villa with premium rooftop solar photovoltaic installation under natural sunlight"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle architectural gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/70 via-transparent to-transparent pointer-events-none" />

              {/* Verified Project Annotation Card on bottom overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF9F5]/95 backdrop-blur-md rounded-xl border border-white/60 shadow-md">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <span className="font-semibold text-[#0D2818] uppercase tracking-wide">Featured Project</span>
                  <span>14.8 kWp Hybrid PV</span>
                </div>
                <p className="text-sm font-semibold text-[#0D2818]">
                  Monterey Bay Eco-Residence · 100% Daytime Self-Sufficiency
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-[#E2DDD3] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold text-[#0D2818] font-heading tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-[#475569] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
