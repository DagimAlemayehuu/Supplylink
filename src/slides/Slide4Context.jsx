import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { contextDiagramData } from '../diagrams/diagramData';

/**
 * Slide 4: Context Diagram (Neon Velocity Master Edition)
 * Maximized SVG canvas with floating glassmorphic controls and brutalist typography.
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
      title: "STAGE 1: CENTRAL SYSTEM PROCESS",
      desc: "Process '0 SupplyLink System' encapsulates all internal processing and route clustering."
    },
    {
      title: "STAGE 2: EXTERNAL BOUNDARY ENTITIES",
      desc: "Merchant, Supplier, and Admin define the perimeter as plain Gane & Sarson rectangles."
    },
    {
      title: "STAGE 3: SOURCE INFLOW TRANSACTIONS",
      desc: "Stock levels, requests, approvals, and dispatch confirmations enter the system boundary."
    },
    {
      title: "STAGE 4: SINK OUTFLOW DELIVERABLES",
      desc: "Account status, real-time alerts, delivery batches, and administrative reports are delivered."
    },
    {
      title: "STAGE 5: BALANCED BOUNDARY CONTRACT",
      desc: "All 18 individual data items are categorized, establishing the contract for Level 0."
    }
  ];

  const currentCaption = stepCaptions[Math.min(currentStep, stepCaptions.length - 1)];

  return (
    <Slide
      title="CONTEXT DIAGRAM (SYSTEM BOUNDARY)"
      subtitle="Highest-level view: establishes system boundaries and external source/sink interactions"
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
        {/* Full-bleed Diagram Canvas */}
        <div className="w-full h-full bg-[#080808]/90 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center p-3">
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
        <div className="absolute bottom-6 left-7 z-20 pointer-events-none hidden md:flex items-center gap-2 text-xs font-mono tracking-widestTechnical uppercase text-zinc-400 bg-[#0a0a0a]/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
          <span>GANE &amp; SARSON DFD LEVEL 0 CONTRACT // 18 BALANCED FLOWS</span>
        </div>
      </div>
    </Slide>
  );
}
