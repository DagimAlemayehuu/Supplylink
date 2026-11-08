import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { level0DiagramData } from '../diagrams/diagramData';

/**
 * Slide 5: Level 0 DFD (Red Noir Wide-Angle Master Edition)
 * Maximized SVG canvas: 6 processes, 5 persistent stores, 3 entities, 29 flows, 100% balanced.
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
      desc: "Process '0' expands into 6 single-purpose processes (1.0 to 6.0), each an active verb phrase."
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
      title="Level 0 Data Flow Diagram"
      subtitle="Complete decomposition into 6 processes, 5 data stores, and 3 external entities"
      headerExtra={
        <div className="flex items-center gap-3 bg-zinc-950/90 border border-white/15 px-4 py-2 rounded-2xl backdrop-blur-xl shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef233c] shadow-[0_0_8px_#ef233c]" />
          <span className="text-sm font-black text-white font-manrope">{currentCaption.title}</span>
          <span className="text-zinc-400 text-xs font-inter hidden xl:inline">({currentCaption.desc})</span>
          <span className="text-xs font-bold text-[#ef233c] font-mono ml-2 bg-red-950/60 px-2 py-0.5 rounded-md border border-red-500/30">
            Stage {currentStep + 1}/5
          </span>
        </div>
      }
    >
      <div className="flex-1 w-full h-full relative flex items-center justify-center pb-2">
        {/* Full-bleed Level 0 Diagram Canvas */}
        <div className="w-full h-full bg-[#030305]/90 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center p-2">
          <Diagram
            data={level0DiagramData}
            visibleNodes={stepVisibleNodes[Math.min(currentStep, 4)]}
            visibleFlows={stepVisibleFlows[Math.min(currentStep, 4)]}
          />
        </div>

        {/* Floating Level 0 Legend */}
        <div className="absolute bottom-5 right-6 z-20 pointer-events-auto">
          <Legend />
        </div>

        {/* Floating Structural Balancing Indicator */}
        <div className="absolute bottom-6 left-7 z-20 pointer-events-none hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#ef233c]" />
          <span>6 Processes (Verb Phrases) • 5 Stores (Open Rectangles) • 18 Balanced Boundary Flows</span>
        </div>
      </div>
    </Slide>
  );
}
