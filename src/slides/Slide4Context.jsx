import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { contextDiagramData } from '../diagrams/diagramData';

/**
 * Slide 4: Context Diagram (Red Noir Wide-Angle Master Edition)
 * Maximized SVG canvas with floating glassmorphic controls and zero obstructions.
 */
export default function Slide4Context({ currentStep = 0 }) {
  const stepVisibleNodes = {
    0: ["p0"],
    1: ["p0", "e_merchant", "e_supplier", "e_admin"],
    2: ["p0", "e_merchant", "e_supplier", "e_admin"],
    3: ["p0", "e_merchant", "e_supplier", "e_admin"],
    4: ["p0", "e_merchant", "e_supplier", "e_admin"]
  };

  const stepVisibleFlows = {
    0: [],
    1: [],
    2: ["cf_m_in", "cf_s_in", "cf_a_in"],
    3: ["cf_m_in", "cf_s_in", "cf_a_in", "cf_m_out", "cf_s_out", "cf_a_out"],
    4: ["cf_m_in", "cf_s_in", "cf_a_in", "cf_m_out", "cf_s_out", "cf_a_out"]
  };

  const stepCaptions = [
    {
      title: "Stage 1: Central System Process",
      desc: "Process '0 SupplyLink System' encapsulates all internal algorithms and transactions."
    },
    {
      title: "Stage 2: External Boundary Entities",
      desc: "Merchant, Supplier, and Admin define the perimeter as plain Gane & Sarson rectangles."
    },
    {
      title: "Stage 3: Source Inflow Transactions",
      desc: "Stock levels, requests, approvals, and dispatch confirmations enter the system boundary."
    },
    {
      title: "Stage 4: Sink Outflow Deliverables",
      desc: "Account status, real-time alerts, delivery batches, and administrative reports are delivered."
    },
    {
      title: "Stage 5: Complete Context Boundary Contract",
      desc: "All 18 individual data items are categorized, establishing the balancing contract for Level 0."
    }
  ];

  const currentCaption = stepCaptions[Math.min(currentStep, stepCaptions.length - 1)];

  return (
    <Slide
      title="Context Diagram (System Scope)"
      subtitle="Highest-level view: establishes system boundaries and external source/sink interactions"
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
        {/* Full-bleed Diagram Canvas */}
        <div className="w-full h-full bg-[#030305]/90 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center p-3">
          <Diagram
            data={contextDiagramData}
            visibleNodes={stepVisibleNodes[Math.min(currentStep, 4)]}
            visibleFlows={stepVisibleFlows[Math.min(currentStep, 4)]}
            activeFlows={
              currentStep === 2
                ? ["cf_m_in", "cf_s_in", "cf_a_in"]
                : currentStep === 3
                ? ["cf_m_out", "cf_s_out", "cf_a_out"]
                : []
            }
          />
        </div>

        {/* Floating Context Legend */}
        <div className="absolute bottom-5 right-6 z-20 pointer-events-auto">
          <Legend />
        </div>

        {/* Floating Context Label */}
        <div className="absolute bottom-6 left-7 z-20 pointer-events-none hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#ef233c]" />
          <span>Gane & Sarson DFD Level 0 Context Boundary Contract (18 Balanced Flows)</span>
        </div>
      </div>
    </Slide>
  );
}
