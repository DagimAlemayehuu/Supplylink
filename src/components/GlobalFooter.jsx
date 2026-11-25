import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

/**
 * Global Footer Component (Monochrome Minimalist Style)
 * - Left: Numbered phase pills (01, 02, 03, 04, 05)
 * - Center: Minimal Notation Legend (No teleprompter text)
 * - Right: Data Flow Direction Indicator with directional arrows
 */
export default function GlobalFooter({
  currentStep,
  totalSteps,
  onSelectStep,
  onPrevStep,
  onNextStep,
  flowLabel,
  flowSteps = []
}) {
  return (
    <footer className="w-full flex-shrink-0 pt-3 border-t border-[#2d2d32] z-30 select-none flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-2.5 md:gap-4">
      {/* Left: Numbered Phase Pills */}
      <div className="justify-self-center md:justify-self-start flex items-center gap-1 sm:gap-1.5 bg-[#1e1e22] border border-[#35353c] p-1 rounded-xl shadow-lg">
        <button
          onClick={onPrevStep}
          disabled={currentStep === 0}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#28282d] disabled:opacity-25 disabled:pointer-events-none"
          title="Previous Phase"
        >
          <ChevronLeft size={16} />
        </button>

        {Array.from({ length: totalSteps }).map((_, idx) => {
          const isActive = currentStep === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelectStep(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-headline font-bold transition-all uppercase tracking-wider ${
                isActive
                  ? 'bg-[#38383e] text-white border border-[#52525b] shadow'
                  : 'text-zinc-500 hover:text-white hover:bg-[#28282d]'
              }`}
            >
              0{idx + 1}
            </button>
          );
        })}

        <button
          onClick={onNextStep}
          disabled={currentStep === totalSteps - 1}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#28282d] disabled:opacity-25 disabled:pointer-events-none"
          title="Next Phase"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Center: Compact Unified Notation Legend (Locked in Dead Center) */}
      <div className="justify-self-center hidden xl:flex items-center gap-5 bg-[#1e1e22] border border-[#35353c] rounded-xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 rounded-sm border border-[#80808a] bg-[#27272b]" />
          <span className="text-[11px] font-headline font-semibold text-zinc-300 uppercase">Process / Entity</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 border-y border-l border-[#80808a] bg-[#232326]" />
          <span className="text-[11px] font-headline font-semibold text-zinc-300 uppercase">Data Store</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rotate-45 border border-[#80808a] bg-[#232326]" />
          <span className="text-[11px] font-headline font-semibold text-zinc-300 uppercase">Relationship</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 border border-dashed border-[#a1a1aa] bg-[#29292d] rounded-sm" />
          <span className="text-[11px] font-headline font-semibold text-zinc-300 uppercase">Associative (M:N)</span>
        </div>
      </div>

      {/* Right: Data Flow Direction Indicator (Bottom Right Corner) */}
      <div className="justify-self-center md:justify-self-end w-full md:w-auto bg-[#1e1e22] border border-[#35353c] rounded-xl px-3 sm:px-4 py-2 shadow-lg flex flex-col items-center md:items-end justify-center">
        <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest text-center md:text-right mb-1">
          {flowLabel || "FLOW DIRECTION"}
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 text-xs font-headline font-semibold text-white">
          {flowSteps && flowSteps.length > 0 ? (
            flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {step === "➔" ? (
                  <ArrowRight size={13} className="text-zinc-400 mx-0.5 flex-shrink-0" />
                ) : (
                  <span className="bg-[#28282d] px-2 py-0.5 rounded border border-[#38383e] text-[11px] text-white uppercase tracking-tight whitespace-nowrap">
                    {step}
                  </span>
                )}
              </React.Fragment>
            ))
          ) : (
            <span className="text-zinc-400 text-xs">Standard Data Flow</span>
          )}
        </div>
      </div>
    </footer>
  );
}
