import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X } from 'lucide-react';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import Diagram from './diagrams/Diagram';
import ErdDiagram from './diagrams/ErdDiagram';
import { level0DiagramData } from './diagrams/diagramData';
import { erdDiagramData } from './diagrams/erdData';
import { splitPhases } from './diagrams/splitPhases';

export default function App() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomedPane, setZoomedPane] = useState(null); // null | 'dfd' | 'erd'

  const totalPhases = splitPhases.length;
  const activePhase = splitPhases[phaseIndex] || splitPhases[0];

  const handleNext = useCallback(() => {
    setPhaseIndex(prev => (prev < totalPhases - 1 ? prev + 1 : prev));
  }, [totalPhases]);

  const handlePrev = useCallback(() => {
    setPhaseIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) {
        return;
      }

      switch (e.key) {
        case 'Escape':
          if (zoomedPane) {
            e.preventDefault();
            setZoomedPane(null);
          }
          break;
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
        case '1':
          setPhaseIndex(0);
          break;
        case '2':
          setPhaseIndex(1);
          break;
        case '3':
          setPhaseIndex(2);
          break;
        case '4':
          setPhaseIndex(3);
          break;
        case '5':
          setPhaseIndex(4);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleFullscreen, zoomedPane]);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden bg-[#121214] text-white flex flex-col justify-between p-3 sm:p-4 lg:p-5 select-none font-body relative">
      {/* 1. GLOBAL TOP HEADER */}
      <GlobalHeader
        currentPhase={phaseIndex}
        totalPhases={totalPhases}
        activeTitle={`PHASE ${activePhase.code} // ${activePhase.title}`}
        activeSubtitle={activePhase.subtitle}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* 2. 50/50 SYNCED SPLIT SCREEN (Stacks on mobile/tablet, 50/50 on lg+; click either pane to zoom) */}
      <main className="flex-1 w-full relative min-h-0 lg:overflow-hidden my-2.5 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* LEFT PANE: LEVEL 0 DFD */}
        <section
          onClick={() => setZoomedPane('dfd')}
          title="Click to zoom Level 0 DFD"
          className="group relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-0 rounded-2xl bg-[#18181b] border border-[#2d2d32] hover:border-[#52525b] transition-colors cursor-zoom-in overflow-hidden flex items-center justify-center p-2 sm:p-3"
        >
          <div className="absolute top-3 left-3 z-20 bg-[#202023] border border-[#38383e] px-3 py-1 rounded-lg shadow">
            <span className="text-[11px] font-headline font-bold text-zinc-300 uppercase tracking-wider">
              LEVEL 0 DFD
            </span>
          </div>
          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#202023] border border-[#38383e] px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 uppercase">
            <Maximize2 size={11} />
            <span>Click to Zoom</span>
          </div>
          <Diagram
            data={level0DiagramData}
            activeNodes={activePhase.dfdNodes}
            activeFlows={activePhase.dfdFlows}
          />
        </section>

        {/* RIGHT PANE: CONCEPTUAL ERD */}
        <section
          onClick={() => setZoomedPane('erd')}
          title="Click to zoom Conceptual ERD"
          className="group relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-0 rounded-2xl bg-[#18181b] border border-[#2d2d32] hover:border-[#52525b] transition-colors cursor-zoom-in overflow-hidden flex items-center justify-center p-2 sm:p-3"
        >
          <div className="absolute top-3 left-3 z-20 bg-[#202023] border border-[#38383e] px-3 py-1 rounded-lg shadow">
            <span className="text-[11px] font-headline font-bold text-white uppercase tracking-wider">
              CONCEPTUAL ERD
            </span>
          </div>
          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#202023] border border-[#38383e] px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 uppercase">
            <Maximize2 size={11} />
            <span>Click to Zoom</span>
          </div>
          <ErdDiagram
            data={erdDiagramData}
            activeEntities={activePhase.erdEntities}
            activeRelationships={activePhase.erdRelationships}
          />
        </section>
      </main>

      {/* 3. GLOBAL BOTTOM FOOTER */}
      <GlobalFooter
        currentStep={phaseIndex}
        totalSteps={totalPhases}
        onSelectStep={setPhaseIndex}
        onPrevStep={handlePrev}
        onNextStep={handleNext}
        flowLabel={activePhase.flowLabel}
        flowSteps={activePhase.flowSteps}
      />

      {/* 4. BLURRED CENTER SPOTLIGHT OVERLAY (When a pane is clicked) */}
      {zoomedPane && (
        <div
          onClick={() => setZoomedPane(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[95vw] sm:w-[92vw] h-[84vh] sm:h-[86vh] rounded-2xl bg-[#18181b] border border-[#45454e] shadow-2xl flex flex-col overflow-hidden cursor-default"
          >
            {/* Spotlight Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-5 py-2.5 sm:py-3 border-b border-[#2d2d32] bg-[#1e1e22]">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="bg-[#2c2c32] border border-[#45454e] px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-headline font-bold text-white uppercase tracking-wider flex-shrink-0">
                  {zoomedPane === 'dfd' ? 'LEVEL 0 DFD' : 'CONCEPTUAL ERD'}
                </span>
                <span className="text-xs sm:text-sm font-headline font-bold text-zinc-200 uppercase tracking-tight truncate">
                  PHASE {activePhase.code} // {activePhase.title}
                </span>
              </div>

              <button
                onClick={() => setZoomedPane(null)}
                className="flex items-center gap-1.5 bg-[#28282d] hover:bg-[#38383e] border border-[#45454e] px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-200 uppercase transition-colors flex-shrink-0"
              >
                <X size={14} />
                <span>Close (ESC)</span>
              </button>
            </div>

            {/* Full-Scale Diagram Canvas */}
            <div className="flex-1 w-full h-full min-h-0 p-4 flex items-center justify-center">
              {zoomedPane === 'dfd' ? (
                <Diagram
                  data={level0DiagramData}
                  activeNodes={activePhase.dfdNodes}
                  activeFlows={activePhase.dfdFlows}
                />
              ) : (
                <ErdDiagram
                  data={erdDiagramData}
                  activeEntities={activePhase.erdEntities}
                  activeRelationships={activePhase.erdRelationships}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
