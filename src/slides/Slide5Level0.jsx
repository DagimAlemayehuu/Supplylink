import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { level0DiagramData, level0Phases } from '../diagrams/diagramData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Slide 2: Level 0 DFD (Monochrome with Interactive Phase Focus)
 * 100% balanced with Context Diagram: all 3 entities and all 18 external flows preserved.
 * Clean modern sans-serif typography (no monospace, no ASCII).
 */
export default function Slide5Level0({
  phaseIndex = 0,
  onSelectPhase,
  onNextPhase,
  onPrevPhase
}) {
  const activePhase = level0Phases[phaseIndex] || level0Phases[0];

  return (
    <Slide
      title="LEVEL 0 DATA FLOW DIAGRAM"
      headerExtra={
        <div className="flex items-center gap-2 bg-[#202023] border border-[#38383e] px-4 py-2 rounded-xl shadow">
          <span className="text-white text-xs font-headline font-semibold">
            {activePhase.title}:
          </span>
          <span className="text-white/80 text-xs font-body max-w-xl">
            {activePhase.summary}
          </span>
        </div>
      }
    >
      <div className="flex-1 w-full h-full relative flex flex-col items-center justify-between pb-2 min-h-0">
        {/* Full Diagram Canvas */}
        <div className="w-full flex-1 bg-[#1c1c1f] rounded-2xl border border-[#303036] relative overflow-hidden flex items-center justify-center p-3 min-h-0">
          <Diagram
            data={level0DiagramData}
            activeNodes={activePhase.activeNodes}
            activeFlows={activePhase.activeFlows}
          />
        </div>

        {/* Bottom Navigation: Phase Selector & Legend */}
        <div className="w-full pt-2.5 flex items-center justify-between z-20 pointer-events-auto">
          {/* Phase Focus Tabs */}
          <div className="flex items-center gap-1.5 bg-[#202023] border border-[#38383e] p-1 rounded-xl shadow-lg">
            <button
              onClick={onPrevPhase}
              disabled={phaseIndex === 0}
              className="p-1.5 rounded-lg text-white hover:bg-[#2b2b30] disabled:opacity-30 disabled:pointer-events-none"
              title="Previous Phase"
            >
              <ChevronLeft size={16} />
            </button>

            {level0Phases.map((phase, idx) => {
              const isSelected = phaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  onClick={() => onSelectPhase(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-headline font-bold uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-[#38383e] text-white border border-[#6b7280] shadow'
                      : 'text-white/70 hover:text-white hover:bg-[#28282d]'
                  }`}
                >
                  {phase.title}
                </button>
              );
            })}

            <button
              onClick={onNextPhase}
              disabled={phaseIndex === level0Phases.length - 1}
              className="p-1.5 rounded-lg text-white hover:bg-[#2b2b30] disabled:opacity-30 disabled:pointer-events-none"
              title="Next Phase"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Standard DFD Legend */}
          <Legend />
        </div>
      </div>
    </Slide>
  );
}
