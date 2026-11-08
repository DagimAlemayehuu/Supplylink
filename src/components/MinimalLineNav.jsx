import React, { useState } from 'react';
import { Maximize, Minimize, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Minimalist Segmented Line Navigation (Neon Velocity Style).
 * Razor-thin segmented timeline in neon lime (#BFFF00) with technical uppercase labels.
 */
export default function MinimalLineNav({
  currentSlide,
  totalSlides,
  currentStep,
  maxSteps,
  onSelectSlide,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen,
  onToggleNotes,
  notesOpen
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    { title: "OVERVIEW", desc: "Title & Academic Context" },
    { title: "PROBLEM & IDEA", desc: "Friction & Workflow" },
    { title: "EXTERNAL ENTITIES", desc: "Source & Sink Participants" },
    { title: "CONTEXT DIAGRAM", desc: "System Boundary Scope" },
    { title: "LEVEL 0 DFD", desc: "Functional Decomposition" },
    { title: "WALKTHROUGH", desc: "Lifecycle Data Execution" },
    { title: "EXECUTIVE SUMMARY", desc: "Architectural Synthesis" },
  ];

  return (
    <nav aria-label="Slide Navigation" className="fixed top-0 left-0 right-0 z-50 pointer-events-none no-print">
      {/* 1. Slim Segmented Timeline Line across the very top */}
      <div className="w-full px-6 pt-3 pb-2 flex items-center gap-2 pointer-events-auto">
        {sections.map((sec, idx) => {
          const isActive = currentSlide === idx;
          const isPassed = currentSlide > idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectSlide(idx)}
              className="flex-1 h-3 flex items-center cursor-pointer group relative py-1"
            >
              {/* Line segment track */}
              <div
                className={`w-full h-[3px] rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#BFFF00] shadow-[0_0_14px_#BFFF00] h-[4px]'
                    : isPassed
                    ? 'bg-lime-900/60 hover:bg-[#BFFF00]/70'
                    : 'bg-white/10 hover:bg-white/30'
                }`}
              />

              {/* Tooltip on Hover */}
              {hoveredIndex === idx && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 rounded-xl shadow-2xl text-center whitespace-nowrap z-50 pointer-events-none">
                  <p className="text-xs font-extrabold text-[#BFFF00] font-headline tracking-tight uppercase">{sec.title}</p>
                  <p className="text-[10px] text-zinc-400 font-mono tracking-widestTechnical uppercase">{sec.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Top-Right Accents: Slide Progress Shower + Controls */}
      <div className="px-7 flex items-center justify-end text-xs pointer-events-auto">
        <div className="flex items-center gap-2">
          {/* Technical Progress Shower in Geist Mono */}
          <div className="flex items-center gap-2 bg-[#0a0a0a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#BFFF00] shadow-[0_0_8px_#BFFF00]" />
            <span className="text-white font-extrabold font-headline uppercase text-xs tracking-tight">
              {sections[currentSlide].title}
            </span>
            <span className="text-zinc-600 font-mono">//</span>
            <span className="text-zinc-400 font-mono tracking-widestTechnical text-[11px] tabular-nums uppercase">
              SLIDE 0{currentSlide + 1}/0{totalSlides}
            </span>
            {maxSteps > 0 && (
              <span className="text-[#BFFF00] font-bold font-mono tracking-widestTechnical text-[11px] bg-lime-950/70 px-2 py-0.5 rounded-md border border-[#BFFF00]/40 tabular-nums uppercase">
                STEP 0{currentStep + 1}/0{maxSteps + 1}
              </span>
            )}
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-1.5 bg-[#0a0a0a]/80 backdrop-blur-md px-2 py-1 rounded-full border border-white/10 shadow-lg">
            {/* Notes Toggle */}
            <button
              onClick={onToggleNotes}
              className={`p-1 rounded-md text-xs transition-colors ${
                notesOpen
                  ? 'text-[#BFFF00] bg-lime-950/60'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Presenter Notes (N)"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={onToggleFullscreen}
              className="p-1 rounded-md text-zinc-400 hover:text-white text-xs transition-colors"
              title="Fullscreen (F)"
            >
              {isFullscreen ? (
                <Minimize className="w-3.5 h-3.5" />
              ) : (
                <Maximize className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Subtle Floating Side Chevron Arrows with Neon Lime Hovers */}
      <div className="fixed inset-y-0 left-3 flex items-center pointer-events-auto">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0 && currentStep === 0}
          className="w-10 h-10 rounded-full bg-[#0a0a0a]/60 hover:bg-[#0a0a0a] backdrop-blur-md border border-white/10 text-zinc-400 hover:text-[#BFFF00] hover:border-[#BFFF00]/60 flex items-center justify-center transition-all opacity-40 hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none shadow-lg"
          title="Previous (Left Arrow / Backspace)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="fixed inset-y-0 right-3 flex items-center pointer-events-auto">
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1 && currentStep === maxSteps}
          className="w-10 h-10 rounded-full bg-[#0a0a0a]/60 hover:bg-[#0a0a0a] backdrop-blur-md border border-white/10 text-zinc-400 hover:text-[#BFFF00] hover:border-[#BFFF00]/60 flex items-center justify-center transition-all opacity-40 hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none shadow-lg"
          title="Next (Right Arrow / Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
