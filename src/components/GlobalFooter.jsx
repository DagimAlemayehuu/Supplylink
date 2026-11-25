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
  flowSteps = [],
  theme = 'light'
}) {
  const isLight = theme === 'light';

  return (
    <footer
      className={`w-full flex-shrink-0 pt-3 border-t z-30 select-none flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-2.5 md:gap-4 ${
        isLight ? 'border-zinc-300' : 'border-[#2d2d32]'
      }`}
    >
      {/* Left: Numbered Phase Pills */}
      <div
        className={`justify-self-center md:justify-self-start flex items-center gap-1 sm:gap-1.5 border p-1 rounded-xl shadow-sm ${
          isLight ? 'bg-white border-zinc-300' : 'bg-[#1e1e22] border-[#35353c]'
        }`}
      >
        <button
          onClick={onPrevStep}
          disabled={currentStep === 0}
          className={`p-1.5 rounded-lg disabled:opacity-25 disabled:pointer-events-none ${
            isLight
              ? 'text-zinc-700 hover:text-black hover:bg-zinc-100'
              : 'text-zinc-400 hover:text-white hover:bg-[#28282d]'
          }`}
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
                  ? isLight
                    ? 'bg-zinc-950 text-white border border-zinc-950 shadow'
                    : 'bg-[#38383e] text-white border border-[#52525b] shadow'
                  : isLight
                    ? 'text-zinc-600 hover:text-black hover:bg-zinc-100'
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
          className={`p-1.5 rounded-lg disabled:opacity-25 disabled:pointer-events-none ${
            isLight
              ? 'text-zinc-700 hover:text-black hover:bg-zinc-100'
              : 'text-zinc-400 hover:text-white hover:bg-[#28282d]'
          }`}
          title="Next Phase"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Center: Compact Unified Notation Legend (Locked in Dead Center) */}
      <div
        className={`justify-self-center hidden xl:flex items-center gap-5 border rounded-xl px-4 py-2 shadow-sm ${
          isLight ? 'bg-white border-zinc-300' : 'bg-[#1e1e22] border-[#35353c]'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div
            className={`w-4 h-3 rounded-sm border-2 ${
              isLight ? 'border-zinc-900 bg-zinc-100' : 'border-[#80808a] bg-[#27272b]'
            }`}
          />
          <span
            className={`text-[11px] font-headline font-semibold uppercase ${
              isLight ? 'text-zinc-900' : 'text-zinc-300'
            }`}
          >
            Process / Entity
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className={`w-4 h-3 border-y-2 border-l-2 ${
              isLight ? 'border-zinc-900 bg-zinc-100' : 'border-[#80808a] bg-[#232326]'
            }`}
          />
          <span
            className={`text-[11px] font-headline font-semibold uppercase ${
              isLight ? 'text-zinc-900' : 'text-zinc-300'
            }`}
          >
            Data Store
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className={`w-3 h-3 rotate-45 border-2 ${
              isLight ? 'border-zinc-900 bg-zinc-100' : 'border-[#80808a] bg-[#232326]'
            }`}
          />
          <span
            className={`text-[11px] font-headline font-semibold uppercase ${
              isLight ? 'text-zinc-900' : 'text-zinc-300'
            }`}
          >
            Relationship
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className={`w-4 h-3 border-2 border-dashed rounded-sm ${
              isLight ? 'border-zinc-900 bg-zinc-100' : 'border-[#a1a1aa] bg-[#29292d]'
            }`}
          />
          <span
            className={`text-[11px] font-headline font-semibold uppercase ${
              isLight ? 'text-zinc-900' : 'text-zinc-300'
            }`}
          >
            Associative (M:N)
          </span>
        </div>
      </div>

      {/* Right: Data Flow Direction Indicator (Bottom Right Corner) */}
      <div
        className={`justify-self-center md:justify-self-end w-full md:w-auto border rounded-xl px-3 sm:px-4 py-2 shadow-sm flex flex-col items-center md:items-end justify-center ${
          isLight ? 'bg-white border-zinc-300' : 'bg-[#1e1e22] border-[#35353c]'
        }`}
      >
        <div
          className={`text-[10px] font-mono font-bold uppercase tracking-widest text-center md:text-right mb-1 ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          {flowLabel || "FLOW DIRECTION"}
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 text-xs font-headline font-semibold">
          {flowSteps && flowSteps.length > 0 ? (
            flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {step === "➔" ? (
                  <ArrowRight
                    size={13}
                    className={`mx-0.5 flex-shrink-0 ${
                      isLight ? 'text-zinc-700' : 'text-zinc-400'
                    }`}
                  />
                ) : (
                  <span
                    className={`px-2 py-0.5 rounded border text-[11px] uppercase tracking-tight whitespace-nowrap ${
                      isLight
                        ? 'bg-zinc-100 border-zinc-400 text-zinc-950 font-bold'
                        : 'bg-[#28282d] border-[#38383e] text-white'
                    }`}
                  >
                    {step}
                  </span>
                )}
              </React.Fragment>
            ))
          ) : (
            <span className={isLight ? 'text-zinc-600 text-xs' : 'text-zinc-400 text-xs'}>
              Standard Data Flow
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
