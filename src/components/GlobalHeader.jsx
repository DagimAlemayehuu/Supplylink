import React from 'react';
import { Maximize, Minimize } from 'lucide-react';

/**
 * Global Header Component (Monochrome Minimalist Style)
 * Clean single-slide presentation header:
 * - Left: Project & view badge
 * - Center: Active phase title & subtitle
 * - Right: Phase counter & fullscreen toggle
 */
export default function GlobalHeader({
  currentPhase,
  totalPhases,
  activeTitle,
  activeSubtitle,
  isFullscreen,
  onToggleFullscreen
}) {
  return (
    <header className="w-full flex-shrink-0 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 pb-3 border-b border-[#2d2d32] z-30 select-none">
      {/* Left: Project Badge */}
      <div className="order-1 flex items-center gap-2 bg-[#1e1e22] border border-[#35353c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg flex-shrink-0">
        <span className="text-[11px] sm:text-xs font-headline font-black text-white uppercase tracking-wider">
          SUPPLYLINK
        </span>
        <span className="text-zinc-500 font-mono text-xs">//</span>
        <span className="text-[11px] sm:text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
          DFD ➔ ERD
        </span>
      </div>

      {/* Center: Dynamic Active Phase Title & Subtitle */}
      <div className="order-3 lg:order-2 w-full lg:w-auto lg:flex-1 px-1 lg:px-6 text-center min-w-0">
        <h1 className="text-sm sm:text-base lg:text-xl font-headline font-black text-white uppercase tracking-tight truncate">
          {activeTitle}
        </h1>
        {activeSubtitle && (
          <p className="text-[11px] sm:text-xs font-body text-zinc-400 truncate mt-0.5">
            {activeSubtitle}
          </p>
        )}
      </div>

      {/* Right: Phase Counter & Fullscreen Controls */}
      <div className="order-2 lg:order-3 flex items-center gap-2.5 sm:gap-3 bg-[#1e1e22] border border-[#35353c] px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-lg flex-shrink-0">
        <span className="text-[11px] sm:text-xs font-headline font-semibold text-zinc-300">
          Phase {currentPhase + 1} of {totalPhases}
        </span>
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
          className="p-0.5 rounded text-zinc-400 hover:text-white hover:bg-[#2e2e34] border-l border-[#35353c] pl-2.5"
        >
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
        </button>
      </div>
    </header>
  );
}
