import React, { useState } from 'react';
import { Sun, Phone, Mail, MapPin, ArrowUpRight, X, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1F13] text-[#CBD5E1] pt-16 pb-12 border-t border-[#153D25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 text-left focus-visible:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E59A18] flex items-center justify-center text-[#0D2818] shadow-sm">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap font-heading">
                SOLENTRA <span className="font-light text-[#E59A18]">ENERGY</span>
              </span>
            </button>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Certified solar engineering and installation company specializing in high-efficiency residential rooftops, commercial solar power plants, industrial installations, and hybrid battery storage.
            </p>

            <div className="space-y-1.5 text-xs text-[#94A3B8] pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E59A18] shrink-0" />
                <span>450 Sunward Blvd, Renewable Energy Park, Austin, TX</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E59A18] shrink-0" />
                <span>+1 (800) 492-7652 / Mon–Sat 8:00–18:00</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E59A18] shrink-0" />
                <span>inquiry@solentra-energy.com</span>
              </p>
            </div>
          </div>

          {/* Nav Links: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Solar Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('residential')}
                  className="hover:text-white transition-colors"
                >
                  Residential Rooftop Solar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-white transition-colors"
                >
                  Commercial Solar Plants
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industrial')}
                  className="hover:text-white transition-colors"
                >
                  Industrial Solar Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('systems')}
                  className="hover:text-white transition-colors"
                >
                  On-Grid & Hybrid BESS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="hover:text-white transition-colors"
                >
                  Inverters & Battery Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links: Planning & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Planning & Finance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="hover:text-white transition-colors"
                >
                  Solar Savings Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subsidy')}
                  className="hover:text-white transition-colors"
                >
                  Subsidies & Tax Credits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Verified Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Solar Knowledge Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Quick CTA & Certifications */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Get Started
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Ready to evaluate your property for clean solar power?
            </p>
            <button
              onClick={onRequestQuote}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#0D2818] bg-[#E59A18] hover:bg-[#D97706] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Request Solar Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="pt-2 text-[11px] text-[#64748B] space-y-1">
              <span className="block text-[#94A3B8]">NABCEP Certified Engineers</span>
              <span className="block">IEEE 1547 & IEC 62446 Standards</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Solentra Energy Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors text-[#E59A18]"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>

      {/* Privacy / Terms Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 text-[#1E293B]">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4 border border-[#E2DDD3]">
            <div className="flex items-center justify-between border-b border-[#E2DDD3] pb-3">
              <h3 className="text-lg font-bold text-[#0D2818] font-heading">
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-md text-[#64748B] hover:text-[#0D2818]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#475569] leading-relaxed space-y-3">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    Solentra Energy Technologies ("Solentra") is committed to protecting your privacy. This policy governs how we collect and process information through our web portal.
                  </p>
                  <p>
                    <strong>Information Collection:</strong> We collect contact details, property address, and electricity consumption figures exclusively to model photovoltaic generation, shadow profiling, and net metering feasibility.
                  </p>
                  <p>
                    <strong>Data Sharing:</strong> We do not sell, rent, or trade your personal information. Data is shared with utility electricity distributors (DISCOMs) solely for regulatory interconnection and net metering permit filing with your express consent.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    By engaging Solentra Energy for consultation or using our interactive solar savings estimator, you agree to these Terms of Service.
                  </p>
                  <p>
                    <strong>Indicative Estimations:</strong> Online solar calculations and system outputs are simulations based on regional solar irradiance averages. Official system performance is defined in the formal engineering contract following on-site roof inspection.
                  </p>
                  <p>
                    <strong>Equipment Warranties:</strong> Equipment warranties (25-year panel linear performance, 10-year inverter, 10-year battery) are backed by respective Tier-1 manufacturers and serviced by Solentra certified technicians.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#E2DDD3] flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold bg-[#0D2818] text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
