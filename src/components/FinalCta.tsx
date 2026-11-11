import React from 'react';
import { ArrowUpRight, CalendarCheck, PhoneCall } from 'lucide-react';
import { HERO_IMAGE } from '../data/solarData';

interface FinalCtaProps {
  onRequestConsultation: () => void;
  onRequestAssessment: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onRequestConsultation,
  onRequestAssessment,
}) => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0D2818] text-white">
      {/* Background Architectural Photo with Measured Dark Scrim */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img
          src={HERO_IMAGE}
          alt="Architectural solar installation"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs font-semibold uppercase tracking-widest text-[#E59A18] mb-4">
          Ready for Energy Independence?
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading text-balance mb-6">
          Your Property. Your Energy. Your Solar Future.
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready to explore solar energy for your home or business? Connect with our certified engineers for a personalized site assessment, 3D shadow analysis, and turnkey estimate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestConsultation}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0D2818] bg-[#E59A18] hover:bg-[#D97706] rounded-lg transition-colors shadow-lg whitespace-nowrap shrink-0"
          >
            <CalendarCheck className="w-5 h-5 text-[#0D2818]" />
            <span>Get a Free Solar Consultation</span>
          </button>

          <button
            onClick={onRequestAssessment}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Request a Rooftop Site Assessment</span>
            <ArrowUpRight className="w-4 h-4 text-[#E59A18]" />
          </button>
        </div>

        {/* Support reassurance */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span>Zero-obligation engineering appraisal</span>
          <span className="text-white/20">·</span>
          <span>DISCOM net-metering feasibility verified</span>
          <span className="text-white/20">·</span>
          <span>Fixed price quote guarantee</span>
        </div>

      </div>
    </section>
  );
};
