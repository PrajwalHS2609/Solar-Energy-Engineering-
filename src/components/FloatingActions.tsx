import React from 'react';
import { MessageSquare, Phone, Calculator, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenEstimator: () => void;
  onRequestQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenEstimator,
  onRequestQuote,
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/18004927652?text=Hello%20Solentra%20Energy,%20I%20would%20like%20to%20request%20information%20about%20a%20solar%20installation."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Chat with engineer on WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Chat</span>
      </a>

      {/* Floating Solar Estimator Button */}
      <button
        onClick={onOpenEstimator}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0D2818] hover:bg-[#153D25] text-white text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
        aria-label="Open solar savings calculator"
      >
        <Calculator className="w-4 h-4 text-[#E59A18]" />
        <span className="hidden sm:inline">Solar Estimator</span>
      </button>
    </div>
  );
};
