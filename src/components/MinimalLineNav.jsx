import React from 'react';
import { Maximize, Minimize, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Slide Navigation Bar (Monochrome Academic Style)
 * Supports all 4 core slides:
 * 1. Context Diagram
 * 2. Level 0 DFD
 * 3. DFD ➔ ERD Mapping
 * 4. Conceptual ERD
 */
export default function MinimalLineNav({
  currentSlide,
  totalSlides = 4,
  currentPhase = 0,
  totalPhases = 6,
  transformStep = 0,
  totalTransformSteps = 4,
  erdPhase = 0,
  totalErdPhases = 5,
  onSelectSlide,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen
}) {
  const slides = [
    { id: 0, title: "1. Context Diagram" },
    { id: 1, title: "2. Level 0 DFD" },
    { id: 2, title: "3. DFD ➔ ERD Bridge" },
    { id: 3, title: "4. Conceptual ERD" }
  ];

  const isLast = currentSlide === 3 && erdPhase === totalErdPhases - 1;
  const isFirst = currentSlide === 0;

  return (
    <nav aria-label="Slide Navigation" className="fixed top-2.5 left-0 right-0 z-50 px-8 flex items-center justify-between pointer-events-none">
      {/* 4 Main Slide Tabs */}
      <div className="flex items-center gap-1.5 pointer-events-auto bg-[#202023] border border-[#35353c] p-1 rounded-xl shadow-lg">
        {slides.map(slide => {
          const isActive = currentSlide === slide.id;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(slide.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-headline font-bold transition-all uppercase tracking-wider ${
                isActive
                  ? 'bg-[#38383e] text-white border border-[#52525b] shadow'
                  : 'text-white/70 hover:text-white hover:bg-[#28282d]'
              }`}
            >
              {slide.title}
            </button>
          );
        })}
      </div>

      {/* Progress & Stepper Controls */}
      <div className="flex items-center gap-3 pointer-events-auto bg-[#202023] border border-[#35353c] px-3.5 py-1.5 rounded-xl shadow-lg">
        {/* Progress Counter */}
        <div className="flex items-center gap-2 text-xs font-headline font-semibold text-white">
          <span>Page {currentSlide + 1} of {totalSlides}</span>
          {currentSlide === 1 && (
            <span className="text-zinc-400 pl-1">
              (Phase {currentPhase + 1} of {totalPhases})
            </span>
          )}
          {currentSlide === 2 && (
            <span className="text-zinc-400 pl-1">
              (Step {transformStep + 1} of {totalTransformSteps})
            </span>
          )}
          {currentSlide === 3 && (
            <span className="text-zinc-400 pl-1">
              (Phase {erdPhase + 1} of {totalErdPhases})
            </span>
          )}
        </div>

        {/* Global Next / Prev Stepper */}
        <div className="flex items-center gap-1 border-l border-[#35353c] pl-2">
          <button
            onClick={onPrev}
            disabled={isFirst}
            title="Previous"
            className="p-1 rounded text-white hover:bg-[#2e2e34] disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            title="Next"
            className="p-1 rounded text-white hover:bg-[#2e2e34] disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Fullscreen Toggle */}
        <div className="border-l border-[#35353c] pl-2">
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            className="p-1 rounded text-white hover:bg-[#2e2e34]"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
