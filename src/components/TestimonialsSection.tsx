import React, { useState } from 'react';
import { Quote, Star, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/solarData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const active = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              11 · Verified Performance
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              Trusted Solar Solutions. Satisfied Customers.
            </h2>
            <p className="text-base text-[#475569] mt-3">
              Hear directly from homeowners and commercial facility managers who trust Solentra for clean, resilient power.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-lg border border-[#E2DDD3] bg-white hover:bg-[#F0ECE1] text-[#0D2818] transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#64748B] tabular-nums px-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-lg border border-[#E2DDD3] bg-white hover:bg-[#F0ECE1] text-[#0D2818] transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Editorial Testimonial Layout */}
        <div className="rounded-2xl border border-[#E2DDD3] bg-white p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Big Quote & Impact */}
            <div className="lg:col-span-8 space-y-6">
              <Quote className="w-10 h-10 text-[#E59A18] opacity-80" />
              
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#0D2818] font-heading leading-snug">
                “{active.quote}”
              </blockquote>

              <div className="pt-6 border-t border-[#E2DDD3] flex flex-wrap items-center gap-6">
                <div>
                  <h4 className="text-base font-bold text-[#0D2818]">
                    {active.name}
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    {active.role} {active.organization ? `· ${active.organization}` : ''}
                  </p>
                  <span className="text-[11px] text-[#64748B] block mt-0.5">
                    {active.location}
                  </span>
                </div>

                <div className="h-8 w-px bg-[#E2DDD3] hidden sm:block" />

                <div className="flex items-center gap-2 text-xs font-semibold text-[#15803D]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Customer Installation</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Project Verification Card */}
            <div className="lg:col-span-4 bg-[#FAF9F5] p-6 rounded-xl border border-[#E2DDD3] space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                Installed System Profile
              </span>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white border border-[#E2DDD3]">
                  <span className="text-[11px] text-[#64748B] block">System Capacity</span>
                  <span className="text-sm font-bold text-[#0D2818]">{active.systemSize}</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#E2DDD3]">
                  <span className="text-[11px] text-[#64748B] block">Documented Operational Result</span>
                  <span className="text-sm font-bold text-[#15803D]">{active.verifiedSavings}</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#E2DDD3]">
                  <span className="text-[11px] text-[#64748B] block">Sector</span>
                  <span className="text-sm font-bold text-[#0D2818]">{active.propertyType}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
