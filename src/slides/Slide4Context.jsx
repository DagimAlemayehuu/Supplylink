import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { contextDiagramData } from '../diagrams/diagramData';

/**
 * Slide 1: Context Diagram (Monochrome)
 * High-level system boundary showing Process 0 and single aggregated
 * input/output data flows per external entity.
 */
export default function Slide4Context() {
  return (
    <Slide title="CONTEXT DIAGRAM (SYSTEM BOUNDARY)">
      <div className="flex-1 w-full h-full relative flex items-center justify-center pb-2">
        {/* Full Diagram Canvas */}
        <div className="w-full h-full bg-[#1c1c1f] rounded-2xl border border-[#303036] relative overflow-hidden flex items-center justify-center p-4">
          <Diagram data={contextDiagramData} />
        </div>

        {/* Legend */}
        <div className="absolute bottom-5 right-6 z-20 pointer-events-auto">
          <Legend />
        </div>
      </div>
    </Slide>
  );
}
