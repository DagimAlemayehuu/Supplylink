import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { level0DiagramData } from '../diagrams/diagramData';

/**
 * Slide 5: Level 0 DFD (Neon Velocity Master Edition)
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
      title: "STAGE 1: FUNCTIONAL PROCESS DECOMPOSITION",
      desc: "Process '0' expands into 6 single-purpose processes (1.0 to 6.0), each named with an active verb phrase."
    },
    {
      title: "STAGE 2: PERSISTENT DATA STORES (D1–D5)",
      desc: "Gane & Sarson open-ended rectangles introduce persistent state: D1 Profiles, D2 Products, D3 Stock, D4 Orders, D5 Batches."
    },
    {
      title: "STAGE 3: INTERNAL PROCESS-TO-STORE TRANSACTIONS",
      desc: "Processes read and write directly to adjacent data stores with zero direct store-to-store flows."
    },
    {
      title: "STAGE 4: EXTERNAL BOUNDARY BALANCING",
      desc: "Boundary flows link external entities. Every external flow matches the Context diagram 1-to-1."
    },
    {
      title: "STAGE 5: COMPLETE LEVEL 0 DATA ARCHITECTURE",
      desc: "Dedicated corridors ensure zero line crossings over processes and maximum projector legibility."
    }
  ];

  const currentCaption = stepCaptions[Math.min(currentStep, stepCaptions.length - 1)];

  return (
    <Slide
      title="LEVEL 0 DATA FLOW ARCHITECTURE"
      subtitle="Complete functional decomposition into 6 processes, 5 persistent data stores, and 3 external entities"
      headerExtra={
        <div className="flex items-center gap-3 bg-[#0a0a0a]/90 border border-white/15 px-4 py-2 rounded-2xl backdrop-blur-xl shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#BFFF00] shadow-neon-lime" />
          <span className="text-xs font-headline font-extrabold text-white uppercase tracking-tight">{currentCaption.title}</span>
          <span className="text-zinc-500 text-xs font-mono tracking-widestTechnical uppercase hidden xl:inline">// {currentCaption.desc}</span>
          <span className="text-xs font-mono font-bold text-[#BFFF00] tracking-widestTechnical ml-2 bg-lime-950/60 px-2 py-0.5 rounded-md border border-[#BFFF00]/30 uppercase tabular-nums">
            STAGE 0{currentStep + 1}/05
          </span>
        </div>
      }
    >
      <div className="flex-1 w-full h-full relative flex items-center justify-center pb-2">
        {/* Full-bleed Level 0 Diagram Canvas */}
        <div className="w-full h-full bg-[#080808]/90 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center p-2">
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
        <div className="absolute bottom-6 left-7 z-20 pointer-events-none hidden md:flex items-center gap-2 text-xs font-mono tracking-widestTechnical uppercase text-zinc-400 bg-[#0a0a0a]/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
          <span>06 PROCESSES // 05 DATA STORES // 18 BALANCED BOUNDARY FLOWS</span>
        </div>
      </div>
    </Slide>
  );
}
