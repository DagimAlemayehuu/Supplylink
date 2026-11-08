import React, { useState, useEffect, useCallback } from 'react';
import Slide4Context from './slides/Slide4Context';
import Slide5Level0 from './slides/Slide5Level0';
import MinimalLineNav from './components/MinimalLineNav';
import { level0Phases } from './diagrams/diagramData';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [level0Phase, setLevel0Phase] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 2;
  const totalPhases = level0Phases.length;

  // Continuous Next: Slide 1 -> Slide 2 (Phase 0 -> 1 -> 2 -> 3 -> 4 -> 5)
  const handleNext = useCallback(() => {
    if (currentSlide === 0) {
      setCurrentSlide(1);
      setLevel0Phase(0);
    } else if (currentSlide === 1) {
      if (level0Phase < totalPhases - 1) {
        setLevel0Phase(prev => prev + 1);
      }
    }
  }, [currentSlide, level0Phase, totalPhases]);

  // Continuous Prev: Slide 2 (Phase 5 -> 4 -> 3 -> 2 -> 1 -> 0) -> Slide 1
  const handlePrev = useCallback(() => {
    if (currentSlide === 1) {
      if (level0Phase > 0) {
        setLevel0Phase(prev => prev - 1);
      } else {
        setCurrentSlide(0);
      }
    }
  }, [currentSlide, level0Phase]);

  // Direct Slide Select
  const handleSelectSlide = useCallback((slideIdx) => {
    setCurrentSlide(slideIdx);
    if (slideIdx === 1) {
      setLevel0Phase(0);
    }
  }, []);

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
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleFullscreen]);

  // Listen to fullscreen changes from browser
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#161618] text-white">
      {/* Top 2-Slide Navigation */}
      <MinimalLineNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        currentPhase={level0Phase}
        totalPhases={totalPhases}
        onSelectSlide={handleSelectSlide}
        onNext={handleNext}
        onPrev={handlePrev}
        onToggleFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Slide Display */}
      {currentSlide === 0 ? (
        <Slide4Context />
      ) : (
        <Slide5Level0
          phaseIndex={level0Phase}
          onSelectPhase={setLevel0Phase}
          onNextPhase={handleNext}
          onPrevPhase={handlePrev}
        />
      )}
    </div>
  );
}
