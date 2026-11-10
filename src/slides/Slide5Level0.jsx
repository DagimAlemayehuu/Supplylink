import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { level0DiagramData } from '../diagrams/diagramData';

/**
 * Slide 5: Level 0 DFD (Industrial Noir Edition)
 * Complete functional decomposition into 6 processes, 5 data stores, and 3 external entities.
 * 100% strictly balanced with the Context Diagram.
 */
export default function Slide5Level0({ currentStep = 0 }) {
  const allProcessIds = ["p1", "p2", "p3", "p4", "p5", "p6"];
  const allStoreIds = ["d1", "d2", "d3", "d4", "d5"];
  const allEntityIds = ["e_merchant", "e_supplier", "e_admin"];

  const internalFlowIds = level0DiagramData.flows
    .filter(f => f.stage === "internal")
    .map(f => f.id);

  const boundaryFlowIds = level0DiagramData.flows
    .filter(f => f.stage === "boundary")
    .map(f => f.id);

  const stepVisibleNodes = {
    0: [...allProcessIds],
    1: [...allProcessIds, ...allStoreIds],
    2: [...allProcessIds, ...allStoreIds],
    3: [...allProcessIds, ...allStoreIds, ...allEntityIds],
    4: [...allProcessIds, ...allStoreIds, ...allEntityIds]
  };

  const stepVisibleFlows = {
    0: [],
    1: [],
    2: internalFlowIds,
    3: [...internalFlowIds, ...boundaryFlowIds],
    4: [...internalFlowIds, ...boundaryFlowIds]
  };

  const stepCaptions = [
    {
      title: "Stage 1: Functional Process Decomposition",
      desc: "Process '0' decomposes into 6 single-purpose processes (1.0 to 6.0), each named as an active verb phrase."
    },
    {
      title: "Stage 2: Persistent Data Stores (D1–D5)",
      desc: "Gane & Sarson open-ended rectangles introduce persistent state across profiles, catalog, stock, orders, and routes."
    },
    {
      title: "Stage 3: Internal Process-to-Store Transactions",
      desc: "Processes read and write directly to adjacent data stores with zero direct store-to-store access."
    },
    {
      title: "Stage 4: External Boundary Balancing",
      desc: "Boundary flows connect external entities. Every flow matches the Context diagram 1-to-1."
    },
    {
      title: "Stage 5: Complete Level 0 Data Flow Architecture",
      desc: "Dedicated corridors ensure zero line crossings over processes and maximum projector legibility."
    }
  ];

  const currentCaption = stepCaptions[Math.min(currentStep, stepCaptions.length - 1)];

  return (
    <Slide
      title="Level 0 Data Flow Diagram: Functional Decomposition"
      subtitle="Complete decomposition into 6 processes, 5 data stores, and 3 external entities (100% balanced)"
      headerExtra={
        <div className="flex items-center gap-2.5 bg-[#101216] border border-white/10 px-3.5 py-1.5 rounded-lg shadow-industrial-sm">
          <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
          <span className="text-xs font-bold text-white font-headline">{currentCaption.title}</span>
          <span className="text-zinc-400 text-xs font-inter hidden xl:inline">({currentCaption.desc})</span>
          <span className="text-[11px] font-semibold text-[#ef4444] font-mono ml-1.5 bg-red-950/70 px-2 py-0.5 rounded border border-red-500/20">
            STAGE {currentStep + 1}/5
          </span>
        </div>
      }
    >
      <div className="flex-1 w-full h-full relative flex items-center justify-center pb-1">
        {/* Full-bleed Level 0 Diagram Canvas */}
        <div className="w-full h-full bg-[#0c0d12] rounded-xl border border-white/10 shadow-industrial-lg relative overflow-hidden flex items-center justify-center p-2">
          <Diagram
            data={level0DiagramData}
            visibleNodes={stepVisibleNodes[Math.min(currentStep, 4)]}
            visibleFlows={stepVisibleFlows[Math.min(currentStep, 4)]}
          />
        </div>

        {/* Floating Level 0 Legend */}
        <div className="absolute bottom-4 right-5 z-20 pointer-events-auto">
          <Legend />
        </div>
      </div>
    </Slide>
  );
}
