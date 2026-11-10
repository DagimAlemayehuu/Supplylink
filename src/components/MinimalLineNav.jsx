import React, { useState } from 'react';
import { Maximize, Minimize, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Minimalist Segmented Line Navigation (Industrial Noir Edition).
 * High-precision segmented timeline across the top with unobtrusive HUD telemetry.
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
    { title: "Problem & Idea", desc: "Pain Points & Architecture" },
    { title: "External Entities", desc: "Sources & Sinks" },
    { title: "Context Diagram", desc: "System Scope & Boundary" },
    { title: "Level 0 DFD", desc: "Functional Decomposition" },
    { title: "Scenario Walkthrough", desc: "Step-by-Step Execution" },
    { title: "Executive Summary", desc: "Architectural Synthesis" },
  ];

  return (
    <nav aria-label="Slide Navigation" className="fixed top-0 left-0 right-0 z-50 pointer-events-none no-print">
      {/* 1. Precision Segmented Timeline Line across top */}
      <div className="w-full px-6 pt-2.5 pb-1 flex items-center gap-1.5 pointer-events-auto">
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
              {/* Segment line track */}
              <div
                className={`w-full transition-all duration-200 rounded-sm ${
                  isActive
                    ? 'bg-[#dc2626] h-[3.5px]'
                    : isPassed
                    ? 'bg-red-950/80 hover:bg-red-900 h-[2.5px]'
                    : 'bg-white/15 hover:bg-white/30 h-[2.5px]'
                }`}
              />

              {/* Tooltip on Hover */}
              {hoveredIndex === idx && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-[#12141a] border border-white/15 px-3 py-1.5 rounded-lg shadow-industrial-lg text-center whitespace-nowrap z-50 pointer-events-none">
                  <p className="text-xs font-bold text-white font-headline">{sec.title}</p>
                  <p className="text-[10px] text-zinc-400 font-inter">{sec.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Top-Right Technical HUD Progress & Controls */}
      <div className="px-6 flex items-center justify-end text-xs pointer-events-auto">
        <div className="flex items-center gap-2">
          {/* Slide Progress HUD */}
          <div className="flex items-center gap-2.5 bg-[#101216]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 shadow-industrial-sm">
            <span className="text-white font-bold font-headline text-xs tracking-tight">
              {sections[currentSlide].title}
            </span>
            <span className="text-zinc-600 font-mono">/</span>
            <span className="text-zinc-400 font-mono text-[11px] font-medium">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
            {maxSteps > 0 && (
              <span className="text-[#ef4444] font-semibold font-mono text-[11px] bg-red-950/70 px-2 py-0.5 rounded border border-red-500/30">
                STEP {currentStep + 1}/{maxSteps + 1}
              </span>
            )}
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-1 bg-[#101216]/90 backdrop-blur-md px-1.5 py-1 rounded-lg border border-white/10 shadow-industrial-sm">
            {/* Notes Toggle */}
            <button
              onClick={onToggleNotes}
              className={`p-1.5 rounded text-xs transition-colors ${
                notesOpen
                  ? 'text-[#ef4444] bg-red-950/70 border border-red-500/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
              title="Toggle Speaker Notes (N)"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>

            {/* Prev */}
            <button
              onClick={onPrev}
              className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/10 text-xs transition-colors"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Next */}
            <button
              onClick={onNext}
              className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/10 text-xs transition-colors"
              title="Next (Right Arrow / Space)"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/10 text-xs transition-colors ml-0.5"
              title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
            >
              {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
