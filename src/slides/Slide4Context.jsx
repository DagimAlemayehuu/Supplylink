import React from 'react';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { contextDiagramData } from '../diagrams/diagramData';

/**
 * Slide 1 Center Content: Context Diagram (System Scope & Boundary)
 * Pure dynamic center: full-height Context Diagram canvas.
 */
export default function Slide4Context() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-2 select-none animate-fadeIn">
      {/* Full Diagram Canvas */}
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
        <Diagram data={contextDiagramData} />
      </div>

      {/* Subtle Floating Minimal Legend (Bottom Left) */}
      <div className="absolute bottom-2 left-3 pointer-events-auto z-10">
        <Legend />
      </div>
    </div>
  );
}
