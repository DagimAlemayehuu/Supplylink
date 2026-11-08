import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Slide1Title from './slides/Slide1Title';
import Slide2Intro from './slides/Slide2Intro';
import Slide3Entities from './slides/Slide3Entities';
import Slide4Context from './slides/Slide4Context';
import Slide5Level0 from './slides/Slide5Level0';
import Slide6Walkthrough from './slides/Slide6Walkthrough';
import Slide7Summary from './slides/Slide7Summary';
import MinimalLineNav from './components/MinimalLineNav';
import PresenterNotes from './components/PresenterNotes';
import { Printer } from 'lucide-react';

// Speaking points for each of the 7 sections
const speakerNotes = [
  // Slide 1: Title
  [
    "Welcome the audience to SupplyLink: an intelligent supplier-merchant ordering and route delivery platform.",
    "Introduce the academic scope: System Analysis & Design (SE-302) at HiLCoE School of Computer Science & Technology.",
    "Emphasize the core guiding principle: 'Merchants request. Suppliers deliver in organized routes.'"
  ],
  // Slide 2: Project Intro
  [
    "Address the operational problem: suppliers drive randomly and waste fuel; merchants run out of essential stock.",
    "Present the SupplyLink solution: on-demand ordering with dynamic route grouping and ASAP dispatch.",
    "Emphasize the explicit boundary: no payments, traffic APIs, ratings, or live GPS telemetry."
  ],
  // Slide 3: External Entities
  [
    "Explain that Merchant, Supplier, and Admin are external entities drawn as plain rectangles outside the boundary.",
    "Detail how all three entities act as dual Source and Sink participants (both sending and receiving data flows).",
    "Point out that the supplier owns the fleet and drivers, keeping driver activities internal to the Supplier."
  ],
  // Slide 4: Context Diagram
  [
    "Walk through Process 0 'SupplyLink System' in the center representing the entire software boundary.",
    "Trace the inflows (sources sending data) and outflows (sinks receiving data) across all three entities.",
    "Explain that these 18 individual data flows establish the balancing contract for Level 0 decomposition."
  ],
  // Slide 5: Level 0 DFD
  [
    "Explain functional decomposition: Process 0 decomposes into 6 discrete, single-purpose processes (1.0 to 6.0).",
    "Highlight the 5 Gane & Sarson data stores (D1–D5), noting the signature open-ended rectangle shape.",
    "Demonstrate clean architectural layout: entities at outer edges, processes in center, stores adjacent to their processes."
  ],
  // Slide 6: Scenario Walkthrough
  [
    "Walk through operational steps A to F: from low-stock detection (3.0) to request creation (4.0) and supplier review.",
    "Explain how 5.0 combines accepted orders with location data to group delivery batches dispatched ASAP.",
    "Conclude the cycle with receipt confirmation triggering an automatic stock update in D3 Inventory."
  ],
  // Slide 7: Executive Summary
  [
    "Summarize how SupplyLink solves the real-world operational problem through direct requests and route batching.",
    "Reiterate the academic modeling rigor: 100% balanced DFD decomposition with zero black holes or miracles.",
    "Conclude with the core takeaway: eliminating speculative trips while guaranteeing stock availability."
  ]
];

// Max internal steps per slide
const slideStepCounts = [0, 2, 2, 4, 4, 5, 0];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Check if URL has ?print
  const isPrintMode = useMemo(() => {
    return typeof window !== 'undefined' && window.location.search.includes('print');
  }, []);

  const totalSlides = 7;
  const maxStepsForCurrentSlide = slideStepCounts[currentSlide] || 0;

  // Navigate forward (next step inside slide first, then next section)
  const handleNext = useCallback(() => {
    if (currentStep < maxStepsForCurrentSlide) {
      setCurrentStep(prev => prev + 1);
    } else if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
      setCurrentStep(0);
    }
  }, [currentStep, maxStepsForCurrentSlide, currentSlide, totalSlides]);

  // Navigate backward
  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else if (currentSlide > 0) {
      const prevSlideIndex = currentSlide - 1;
      setCurrentSlide(prevSlideIndex);
      setCurrentStep(slideStepCounts[prevSlideIndex] || 0);
    }
  }, [currentStep, currentSlide]);

  // Fullscreen toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => console.error("Fullscreen error:", err));
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => console.error("Exit fullscreen error:", err));
    }
  }, []);

  // Keyboard shortcut handler
  useEffect(() => {
    if (isPrintMode) return;

    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setNotesOpen(prev => !prev);
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          setCurrentStep(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(totalSlides - 1);
          setCurrentStep(0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleFullscreen, isPrintMode, totalSlides]);

  // Render individual slide component
  const renderSlideContent = (index, step) => {
    switch (index) {
      case 0:
        return <Slide1Title />;
      case 1:
        return <Slide2Intro currentStep={step} />;
      case 2:
        return <Slide3Entities currentStep={step} />;
      case 3:
        return <Slide4Context currentStep={step} />;
      case 4:
        return <Slide5Level0 currentStep={step} />;
      case 5:
        return <Slide6Walkthrough currentStep={step} onSetStep={(s) => setCurrentStep(s)} />;
      case 6:
        return <Slide7Summary />;
      default:
        return null;
    }
  };

  // -------------------------------------------------------------
  // PRINT MODE: Renders all 7 slides for PDF export if ?print is set
  // -------------------------------------------------------------
  if (isPrintMode) {
    return (
      <div className="bg-black min-h-screen text-white">
        <div className="no-print bg-zinc-950 border-b border-white/10 text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base font-manrope">SupplyLink DFD Presentation — Printable Document</span>
            <span className="text-zinc-400 text-xs font-inter">(All 7 slides fully expanded)</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-[#ef233c] hover:bg-red-700 px-5 py-2 rounded-xl font-bold text-sm transition-all shadow-[0_0_15px_rgba(239,35,60,0.5)] font-manrope"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save to PDF (Ctrl+P)</span>
          </button>
        </div>

        <div className="flex flex-col items-center">
          {[0, 1, 2, 3, 4, 5, 6].map(idx => (
            <div
              key={idx}
              className="print-page w-[1920px] h-[1080px] bg-black my-4 shadow-2xl border border-white/10 overflow-hidden relative"
            >
              {renderSlideContent(idx, slideStepCounts[idx] || 0)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // FULL-SCREEN WEBSITE PRESENTATION MODE
  // -------------------------------------------------------------
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col overflow-hidden relative font-inter select-none">
      {/* Floating Modern Header MinimalLineNav */}
      <MinimalLineNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        currentStep={currentStep}
        maxSteps={maxStepsForCurrentSlide}
        onSelectSlide={(idx) => {
          setCurrentSlide(idx);
          setCurrentStep(0);
        }}
        onNext={handleNext}
        onPrev={handlePrev}
        onToggleFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
        onToggleNotes={() => setNotesOpen(prev => !prev)}
        notesOpen={notesOpen}
      />

      {/* Main Full-screen Section Container */}
      <main className="flex-1 w-full h-full relative overflow-hidden">
        {renderSlideContent(currentSlide, currentStep)}
      </main>

      {/* Presenter Notes Panel */}
      <PresenterNotes
        isOpen={notesOpen}
        onClose={() => setNotesOpen(false)}
        slideIndex={currentSlide}
        totalSlides={totalSlides}
        notes={speakerNotes[currentSlide] || []}
      />
    </div>
  );
}
