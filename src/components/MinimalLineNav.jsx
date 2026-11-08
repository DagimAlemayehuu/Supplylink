import React, { useState } from 'react';
import { Maximize, Minimize, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Minimalist Segmented Line Navigation (Red Noir Keynote Style).
 * Replaces website-style navbars with a sleek, razor-thin segmented progress line
 * and unobtrusive floating controls that maximize diagram visibility.
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
    { title: "Overview", desc: "Title & Project Context" },
    { title: "Problem & Idea", desc: "Pain Points & Workflow" },
    { title: "External Entities", desc: "Sources & Sinks" },
    { title: "Context Diagram", desc: "System Scope & Boundary" },
    { title: "Level 0 DFD", desc: "Functional Decomposition" },
    { title: "Scenario Walkthrough", desc: "Step-by-Step Execution" },
    { title: "Executive Summary", desc: "Architectural Synthesis" },
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
                    ? 'bg-[#ef233c] shadow-[0_0_12px_#ef233c] h-[4px]'
                    : isPassed
                    ? 'bg-red-900/60 hover:bg-red-700/80'
                    : 'bg-white/15 hover:bg-white/35'
                }`}
              />

              {/* Tooltip on Hover */}
              {hoveredIndex === idx && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-xl shadow-2xl text-center whitespace-nowrap z-50 pointer-events-none">
                  <p className="text-xs font-black text-white font-manrope">{sec.title}</p>
                  <p className="text-[10px] text-zinc-400 font-inter">{sec.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Floating Top-Bar Micro Accents (Unobtrusive & Sleek) */}
      <div className="px-7 flex items-center justify-end text-xs pointer-events-auto">
        {/* Right Top: Slide Progress Shower + Controls */}
        <div className="flex items-center gap-2">
          {/* Slide Progress Shower */}
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="text-white font-bold font-manrope text-xs">
              {sections[currentSlide].title}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 font-mono text-[11px]">
              Slide {currentSlide + 1}/{totalSlides}
            </span>
            {maxSteps > 0 && (
              <span className="text-[#ef233c] font-bold font-mono text-[11px] bg-red-950/60 px-1.5 py-0.5 rounded border border-red-500/30">
                Step {currentStep + 1}/{maxSteps + 1}
              </span>
            )}
          </div>

          {/* Minimal Control Buttons */}
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            {/* Notes Toggle */}
            <button
              onClick={onToggleNotes}
              className={`p-1 rounded-md text-xs transition-colors ${
                notesOpen
                  ? 'text-[#ef233c] bg-red-950/60'
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

      {/* 3. Subtle Floating Side Chevron Arrows */}
      <div className="fixed inset-y-0 left-3 flex items-center pointer-events-auto">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0 && currentStep === 0}
          className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/90 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:border-[#ef233c]/60 flex items-center justify-center transition-all opacity-40 hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none shadow-lg"
          title="Previous (Left Arrow / Backspace)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="fixed inset-y-0 right-3 flex items-center pointer-events-auto">
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1 && currentStep === maxSteps}
          className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/90 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:border-[#ef233c]/60 flex items-center justify-center transition-all opacity-40 hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none shadow-lg"
          title="Next (Right Arrow / Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
