import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import Legend from '../diagrams/Legend';
import { contextDiagramData } from '../diagrams/diagramData';

/**
 * Slide 4: Context Diagram (Industrial Noir Edition)
 * Unobstructed wide-angle SVG canvas showing Process 0 and external boundaries.
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
      desc: "Process '0 SupplyLink System' encapsulates all internal platform logic."
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
      desc: "Account status, alerts, delivery batches, and administrative reports are delivered."
    },
    {
      title: "Stage 5: Complete Context Boundary Contract",
      desc: "All 18 individual data items are categorized, establishing the balancing contract for Level 0."
    }
  ];

  const currentCaption = stepCaptions[Math.min(currentStep, stepCaptions.length - 1)];

  return (
    <Slide
      title="Context Diagram: System Scope & Boundary"
      subtitle="Highest-level view: establishes system boundaries and external source/sink data interactions"
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
        {/* Full-bleed Diagram Canvas */}
        <div className="w-full h-full bg-[#0c0d12] rounded-xl border border-white/10 shadow-industrial-lg relative overflow-hidden flex items-center justify-center p-2">
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
        <div className="absolute bottom-4 right-5 z-20 pointer-events-auto">
          <Legend />
        </div>
      </div>
    </Slide>
  );
}
