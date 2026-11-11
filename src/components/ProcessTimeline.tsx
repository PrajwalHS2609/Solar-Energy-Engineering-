import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar, FileCheck, Layers, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { INSTALLATION_STEPS } from '../data/solarData';

interface ProcessTimelineProps {
  onStartStepOne: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartStepOne }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const currentStep = INSTALLATION_STEPS[selectedStepIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              04 · Project Lifecycle
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              From Solar Consultation to Clean Energy.
            </h2>
            <p className="text-base text-[#475569] mt-3">
              A transparent, engineered six-step journey from your initial electricity bill evaluation to energized clean power generation.
            </p>
          </div>

          <button
            onClick={onStartStepOne}
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D2818] rounded-lg hover:bg-[#153D25] transition-colors self-start md:self-auto shrink-0 shadow-sm"
          >
            <span>Begin Step 1: Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#E59A18]" />
          </button>
        </div>

        {/* Desktop Horizontal Step Navigation Tabs */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
          {INSTALLATION_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-[#0D2818] text-white border-[#0D2818] shadow-md -translate-y-1'
                    : 'bg-white text-[#334155] border-[#E2DDD3] hover:border-[#CBD5E1]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-lg font-bold font-heading tabular-nums ${
                      isSelected ? 'text-[#E59A18]' : 'text-[#64748B]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-[#FAF9F5] text-[#64748B]'
                    }`}
                  >
                    {step.duration}
                  </span>
                </div>
                <h4 className="text-sm font-bold truncate">{step.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Focus Panel */}
        <div className="rounded-2xl bg-white border border-[#E2DDD3] p-8 lg:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E59A18]">
                  Step {currentStep.step} of 06
                </span>
                <span className="text-[#CBD5E1]">·</span>
                <span className="text-xs font-medium text-[#64748B] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0D2818]" />
                  <span>Timeline: {currentStep.duration}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0D2818] font-heading">
                {currentStep.title}
              </h3>

              <p className="text-base text-[#334155] leading-relaxed">
                {currentStep.summary}
              </p>

              <p className="text-sm text-[#64748B] leading-relaxed">
                {currentStep.details}
              </p>

              {/* Deliverable Box */}
              <div className="pt-4 mt-4 border-t border-[#E2DDD3] flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#0D2818] block">
                    Verified Engineering Deliverable:
                  </span>
                  <span className="text-sm text-[#475569] font-medium">
                    {currentStep.deliverable}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick step navigation controls */}
            <div className="lg:col-span-4 bg-[#FAF9F5] p-6 rounded-xl border border-[#E2DDD3] flex flex-col justify-between h-full space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#0D2818] uppercase tracking-wide block mb-2">
                  Lifecycle Progress
                </span>
                <div className="w-full bg-[#E2DDD3] rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-[#0D2818] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((selectedStepIndex + 1) / 6) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-[#64748B]">
                  Solentra handles all DISCOM net-metering applications, CEIG electrical approvals, and civil structural assessments.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  disabled={selectedStepIndex === 0}
                  onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                  className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg border border-[#CBD5E1] bg-white text-[#334155] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F0ECE1]"
                >
                  Previous Step
                </button>
                <button
                  disabled={selectedStepIndex === INSTALLATION_STEPS.length - 1}
                  onClick={() => setSelectedStepIndex((prev) => Math.min(INSTALLATION_STEPS.length - 1, prev + 1))}
                  className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-[#0D2818] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#153D25]"
                >
                  Next Step
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Vertical Stepper View (Visible on small screens) */}
        <div className="lg:hidden space-y-4">
          {INSTALLATION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setSelectedStepIndex(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                selectedStepIndex === idx
                  ? 'bg-white border-[#0D2818] shadow-sm'
                  : 'bg-white/60 border-[#E2DDD3]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#E59A18]">Step {step.step}</span>
                <span className="text-[11px] text-[#64748B]">{step.duration}</span>
              </div>
              <h4 className="text-sm font-bold text-[#0D2818]">{step.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
