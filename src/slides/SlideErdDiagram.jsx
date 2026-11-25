import React from 'react';
import ErdDiagram from '../diagrams/ErdDiagram';
import ErdLegend from '../diagrams/ErdLegend';
import { erdDiagramData, erdPhases } from '../diagrams/erdData';

/**
 * Slide 4 Center Content: Conceptual ER Diagram
 * Pure dynamic center: full-height SVG diagram canvas with subtle minimal legend.
 */
export default function SlideErdDiagram({ phaseIndex = 0 }) {
  const activePhase = erdPhases[phaseIndex] || erdPhases[0];

  return (
    <div className="w-full h-full relative flex items-center justify-center p-2 select-none animate-fadeIn">
      {/* Full Diagram Canvas */}
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
        <ErdDiagram
          data={erdDiagramData}
          activeEntities={activePhase.activeEntities}
          activeRelationships={activePhase.activeRelationships}
        />
      </div>

      {/* Subtle Floating Minimal Legend (Bottom Left) */}
      <div className="absolute bottom-2 left-3 pointer-events-auto z-10">
        <ErdLegend />
      </div>
    </div>
  );
}
