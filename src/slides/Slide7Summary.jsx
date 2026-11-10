import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import { Truck, Layers, Database, ShieldCheck, Check, GraduationCap } from 'lucide-react';

/**
 * Slide 7: Executive Architectural Summary (Industrial Noir Edition)
 * Pure architectural synthesis: 4 core pillars with zero AI slop, zero questions, and zero team listings.
 */
export default function Slide7Summary() {
  const { highlightLine, school, course, courseCode } = presentationConfig;

  const pillars = [
    {
      icon: Truck,
      title: "Demand-Driven Logistics",
      desc: "Completely eliminates speculative vendor driving. Delivery vehicles roll only when confirmed merchant replenishment requests are batched."
    },
    {
      icon: Layers,
      title: "Dynamic Route Consolidation",
      desc: "Process 5.0 groups accepted orders by geographic proximity into organized delivery batches, dispatched ASAP without calendar delays."
    },
    {
      icon: ShieldCheck,
      title: "Academic DFD Balancing",
      desc: "Strict adherence to Gane & Sarson rules: all 18 external boundary data flows are 100% balanced between Context and Level 0."
    },
    {
      icon: Database,
      title: "Decoupled Data Architecture",
      desc: "Five persistent stores (D1–D5) maintain clean state separation across profiles, catalog, stock, orders, and routes with zero store-to-store coupling."
    }
  ];

  return (
    <Slide
      title="Executive Summary: Architectural Synthesis"
      subtitle="Complete system analysis of the SupplyLink supplier-merchant ordering and route delivery ecosystem"
    >
      <div className="flex flex-col justify-between h-full pb-2 space-y-4">
        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="industrial-panel p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-[#ef4444] shadow-industrial-sm flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-headline">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-inter">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#ef4444]" />
                    <span>Verified Specification</span>
                  </span>
                  <span className="text-zinc-500">PILLAR 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Highlight Banner (Zero banned kickers, pure authoritative weight) */}
        <div className="bg-[#12141a] border border-[#dc2626]/40 rounded-xl p-5 shadow-industrial-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#dc2626] text-white flex items-center justify-center shadow-industrial-sm flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white font-headline leading-tight">
                "{highlightLine}"
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#181b24] border border-white/10 text-xs text-zinc-300 font-mono whitespace-nowrap">
            <GraduationCap className="w-4 h-4 text-[#ef4444]" />
            <span>{school} • {courseCode}</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
