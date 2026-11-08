import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import { CheckCircle2, GraduationCap, Layers, Truck, Database, ShieldCheck, Terminal } from 'lucide-react';

/**
 * Slide 7: Executive Summary (Neon Velocity Master Edition)
 * Pure architectural synthesis: 4-card Luminosity Bento Grid, brutalist typography,
 * and zero questions / zero team members.
 */
export default function Slide7Summary() {
  const { highlightLine, school, course, courseCode } = presentationConfig;

  const summaryHighlights = [
    {
      code: "01/DEMAND",
      icon: Truck,
      title: "Eliminates Speculative Trips",
      desc: "Replaces random merchant visits with demand-driven requests. Suppliers only roll trucks when orders are confirmed and batched."
    },
    {
      code: "02/LOGISTICS",
      icon: Layers,
      title: "Geographic Route Batching",
      desc: "Process 5.0 combines accepted orders with merchant coordinates to formulate consolidated delivery routes, dispatched ASAP."
    },
    {
      code: "03/RIGOR",
      icon: ShieldCheck,
      title: "Balanced DFD Decomposition",
      desc: "Strict adherence to Gane & Sarson notation: all 18 external boundary data flows are 100% balanced with zero black holes or miracles."
    },
    {
      code: "04/DATABASE",
      icon: Database,
      title: "Decoupled Data Architecture",
      desc: "No direct entity-to-store or store-to-store access. Five dedicated data stores (D1–D5) manage persistent logistics and stock state."
    }
  ];

  return (
    <Slide
      title="EXECUTIVE SUMMARY: ARCHITECTURAL SYNTHESIS"
      subtitle="Complete synthesis of the supplier-merchant ordering and delivery ecosystem"
    >
      <div className="flex flex-col justify-between h-full pb-4 space-y-5">
        {/* 4-Card Luminosity Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
          {summaryHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luminosity-card p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top-aligned Mono Index */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase font-semibold">
                      // {item.code}
                    </span>
                    <Icon className="w-5 h-5 text-[#BFFF00] stroke-[2.2]" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-headline uppercase tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-base leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-400 tracking-widestTechnical uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BFFF00]" />
                  <span>VERIFIED GANE &amp; SARSON SPECIFICATION</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Brutalist Highlight Banner */}
        <div className="border-2 border-[#BFFF00] bg-[#0c1603]/85 rounded-3xl p-6 shadow-neon-lime flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#BFFF00] text-black flex items-center justify-center shadow-neon-lime flex-shrink-0">
              <Truck className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-ultraTechnical text-[#BFFF00] mb-1">
                // CORE GUIDING HIGHLIGHT
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white font-headline uppercase tracking-tightest">
                "{highlightLine}"
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs text-zinc-300 font-mono tracking-widestTechnical uppercase whitespace-nowrap">
            <GraduationCap className="w-4 h-4 text-[#BFFF00]" />
            <span className="font-bold">{school} // {courseCode}</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
