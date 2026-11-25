import React from 'react';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { level0DiagramData, level0Phases } from '../diagrams/diagramData';

/**
 * Slide 2 Center Content: Level 0 Data Flow Diagram
 * Pure dynamic center: full-height DFD diagram canvas.
 */
export default function Slide5Level0({ phaseIndex = 0 }) {
  const activePhase = level0Phases[phaseIndex] || level0Phases[0];

  return (
    <div className="w-full h-full relative flex items-center justify-center p-2 select-none animate-fadeIn">
      {/* Full Diagram Canvas */}
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
        <Diagram
          data={level0DiagramData}
          activeNodes={activePhase.activeNodes}
          activeFlows={activePhase.activeFlows}
        />
      </div>

      {/* Subtle Floating Minimal Legend (Bottom Left) */}
      <div className="absolute bottom-2 left-3 pointer-events-auto z-10">
        <Legend />
      </div>
    </div>
  );
}
