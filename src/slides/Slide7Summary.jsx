import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import { CheckCircle2, GraduationCap, Layers, Truck, Database, ShieldCheck } from 'lucide-react';

/**
 * Slide 7: Executive Summary (Red Noir Theme)
 * Pure summary only with zero questions and zero team member listings.
 */
export default function Slide7Summary() {
  const { highlightLine, school, course, courseCode, notation } = presentationConfig;

  const summaryHighlights = [
    {
      icon: Truck,
      title: "Eliminates Speculative Trips",
      desc: "Replaces random merchant visits with demand-driven requests. Suppliers only roll trucks when orders are confirmed and batched."
    },
    {
      icon: Layers,
      title: "Geographic Route Batching",
      desc: "Process 5.0 combines accepted orders with merchant coordinates to formulate consolidated delivery routes, dispatched ASAP."
    },
    {
      icon: ShieldCheck,
      title: "Balanced DFD Decomposition",
      desc: "Strict adherence to Gane & Sarson notation: all 18 external boundary data flows are 100% balanced with zero black holes or miracles."
    },
    {
      icon: Database,
      title: "Decoupled Data Architecture",
      desc: "No direct entity-to-store or store-to-store access. Five dedicated data stores (D1–D5) manage persistent logistics and stock state."
    }
  ];

  return (
    <Slide
      title="Executive Summary: SupplyLink Platform"
      subtitle="Architectural synthesis of the supplier-merchant ordering and delivery ecosystem"
    >
      <div className="flex flex-col justify-between h-full pb-4 space-y-6">
        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {summaryHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-950/80 border border-white/10 hover:border-[#ef233c]/60 rounded-3xl p-7 shadow-2xl transition-all flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#ef233c]/10 border border-[#ef233c]/30 flex items-center justify-center text-[#ef233c] group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(239,35,60,0.2)]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white font-manrope">
                    {item.title}
                  </h3>
                </div>

                <p className="text-zinc-200 text-lg leading-relaxed font-inter font-normal flex-1">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest font-manrope">
                  <CheckCircle2 className="w-4 h-4 text-[#ef233c]" />
                  <span>Verified Specification</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Bottom Highlight Banner */}
        <div className="bg-gradient-to-r from-[#200508] via-zinc-950 to-zinc-950 border-2 border-[#ef233c]/50 rounded-3xl p-7 shadow-[0_0_40px_rgba(239,35,60,0.25)] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ef233c] text-white flex items-center justify-center shadow-[0_0_20px_#ef233c] flex-shrink-0">
              <Truck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-red-400 font-manrope mb-1">
                Core Architectural Highlight
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white font-manrope">
                "{highlightLine}"
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/15 text-sm text-zinc-300 font-manrope whitespace-nowrap">
            <GraduationCap className="w-5 h-5 text-[#ef233c]" />
            <span className="font-bold">{school} • {courseCode}</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
