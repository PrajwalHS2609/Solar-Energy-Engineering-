import React, { useState } from 'react';
import { Sun, Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', view: 'services' },
    { label: 'Solutions', view: 'solutions' },
    { label: 'Technology', view: 'technology' },
    { label: 'Portfolio', view: 'portfolio' },
    { label: 'Solar Estimator', view: 'estimator' },
  ];

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2818] rounded-md"
            >
              <div className="w-9 h-9 rounded-lg bg-[#0D2818] flex items-center justify-center text-[#E59A18] shadow-sm">
                <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0D2818] whitespace-nowrap shrink-0 font-heading">
                SOLENTRA <span className="font-light text-[#E59A18]">ENERGY</span>
              </span>
            </button>

            {/* Zone 2: 4–5 single-line clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#334155]">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#0D2818] relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0D2818] rounded ${
                    activeView === link.view
                      ? 'text-[#0D2818] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0D2818]'
                      : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href="tel:18004927652"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#0D2818] hover:text-[#E59A18] transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#E59A18]" />
                <span>+1 (800) 492-7652</span>
              </a>
              <button
                onClick={onRequestQuote}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0D2818] hover:bg-[#153D25] active:bg-[#0A1F13] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2818]"
              >
                <span>Request Solar Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#E59A18]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0D2818] rounded-lg border border-[#E2DDD3] hover:bg-[#F0ECE1] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2DDD3] bg-[#FAF9F5] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-base font-medium py-2 text-[#0D2818] border-b border-[#E2DDD3]/50"
              >
                Home Overview
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className="text-left text-base font-medium py-2 text-[#334155] hover:text-[#0D2818] border-b border-[#E2DDD3]/50"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('about')}
                className="text-left text-base font-medium py-2 text-[#334155] hover:text-[#0D2818] border-b border-[#E2DDD3]/50"
              >
                About Solentra
              </button>
              <button
                onClick={() => handleNavClick('subsidy')}
                className="text-left text-base font-medium py-2 text-[#334155] hover:text-[#0D2818] border-b border-[#E2DDD3]/50"
              >
                Subsidies & Financing
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className="text-left text-base font-medium py-2 text-[#334155] hover:text-[#0D2818] border-b border-[#E2DDD3]/50"
              >
                Solar Knowledge & Blog
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left text-base font-medium py-2 text-[#334155] hover:text-[#0D2818]"
              >
                Contact & Office Locations
              </button>
            </div>

            <div className="pt-4 border-t border-[#E2DDD3] space-y-3">
              <button
                onClick={() => {
                  onRequestQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0D2818] rounded-lg"
              >
                <span>Request Solar Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#E59A18]" />
              </button>
              <div className="flex items-center justify-between text-xs text-[#64748B] pt-2">
                <a href="tel:18004927652" className="flex items-center gap-1.5 font-medium text-[#0D2818]">
                  <Phone className="w-3.5 h-3.5 text-[#E59A18]" />
                  <span>1-800-492-7652</span>
                </a>
                <a
                  href="https://wa.me/18004927652?text=Hello%20Solentra%20Energy,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20installation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium text-[#15803D]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
