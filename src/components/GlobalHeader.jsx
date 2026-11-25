import React from 'react';
import { Maximize, Minimize, Sun, Moon } from 'lucide-react';

/**
 * Global Header Component (High-Contrast Light & Dark Monochrome)
 * Clean single-slide presentation header:
 * - Left: Project & view badge
 * - Center: Active phase title & subtitle
 * - Right: Phase counter, theme toggle, & fullscreen toggle
 */
export default function GlobalHeader({
  currentPhase,
  totalPhases,
  activeTitle,
  activeSubtitle,
  isFullscreen,
  onToggleFullscreen,
  theme = 'light',
  onToggleTheme
}) {
  const isLight = theme === 'light';

  return (
    <header
      className={`w-full flex-shrink-0 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 pb-3 border-b z-30 select-none ${
        isLight ? 'border-zinc-300' : 'border-[#2d2d32]'
      }`}
    >
      {/* Left: Project Badge */}
      <div
        className={`order-1 flex items-center gap-2 border px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-sm flex-shrink-0 ${
          isLight ? 'bg-white border-zinc-300' : 'bg-[#1e1e22] border-[#35353c]'
        }`}
      >
        <span
          className={`text-[11px] sm:text-xs font-headline font-black uppercase tracking-wider ${
            isLight ? 'text-zinc-950' : 'text-white'
          }`}
        >
          SUPPLYLINK
        </span>
        <span className="text-zinc-400 font-mono text-xs">//</span>
        <span
          className={`text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider ${
            isLight ? 'text-zinc-700' : 'text-zinc-300'
          }`}
        >
          DFD ➔ ERD
        </span>
      </div>

      {/* Center: Dynamic Active Phase Title & Subtitle */}
      <div className="order-3 lg:order-2 w-full lg:w-auto lg:flex-1 px-1 lg:px-6 text-center min-w-0">
        <h1
          className={`text-sm sm:text-base lg:text-xl font-headline font-black uppercase tracking-tight truncate ${
            isLight ? 'text-zinc-950' : 'text-white'
          }`}
        >
          {activeTitle}
        </h1>
        {activeSubtitle && (
          <p
            className={`text-[11px] sm:text-xs font-body truncate mt-0.5 ${
              isLight ? 'text-zinc-700 font-medium' : 'text-zinc-400'
            }`}
          >
            {activeSubtitle}
          </p>
        )}
      </div>

      {/* Right: Phase Counter, Theme Toggle & Fullscreen Controls */}
      <div
        className={`order-2 lg:order-3 flex items-center gap-2 sm:gap-2.5 border px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-sm flex-shrink-0 ${
          isLight ? 'bg-white border-zinc-300' : 'bg-[#1e1e22] border-[#35353c]'
        }`}
      >
        <span
          className={`text-[11px] sm:text-xs font-headline font-semibold ${
            isLight ? 'text-zinc-900' : 'text-zinc-300'
          }`}
        >
          Phase {currentPhase + 1} of {totalPhases}
        </span>
        {onToggleTheme && (
          <button
            onClick={onToggleTheme}
            title={isLight ? "Switch to Dark Mode (T)" : "Switch to High-Contrast Light Mode (T)"}
            className={`p-1 rounded border-l pl-2.5 transition-colors ${
              isLight
                ? 'border-zinc-300 text-zinc-800 hover:text-black hover:bg-zinc-100'
                : 'border-[#35353c] text-zinc-400 hover:text-white hover:bg-[#2e2e34]'
            }`}
          >
            {isLight ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        )}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
          className={`p-1 rounded border-l pl-2.5 transition-colors ${
            isLight
              ? 'border-zinc-300 text-zinc-800 hover:text-black hover:bg-zinc-100'
              : 'border-[#35353c] text-zinc-400 hover:text-white hover:bg-[#2e2e34]'
          }`}
        >
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
        </button>
      </div>
    </header>
  );
}
