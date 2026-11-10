import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import {
  AlertCircle,
  PackageCheck,
  MapPin,
  Clock,
  ShieldAlert,
  Truck,
  Store,
  Layers
} from 'lucide-react';

/**
 * Slide 2: Problem Domain & SupplyLink Solution (Industrial Noir Edition)
 * Structured 3-step progression: Problem Analysis -> Platform Solution -> Principle & Boundaries.
 */
export default function Slide2Intro({ currentStep = 0 }) {
  const { highlightLine } = presentationConfig;

  const phases = [
    { title: "Operational Friction", desc: "Traditional Waste" },
    { title: "The SupplyLink Architecture", desc: "Structured Solution" },
    { title: "Principle & Scope Bounds", desc: "System Perimeter" },
  ];

  return (
    <Slide
      title="Problem Domain & Platform Architecture"
      subtitle="Replacing blind speculative vendor trips with demand-driven batch logistics"
    >
      <div className="flex flex-col h-full justify-between pb-1">
        {/* Top Structured Phase Tabs */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {phases.map((phase, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-[#161822] border-[#dc2626] shadow-industrial-sm'
                    : isCompleted
                    ? 'bg-[#101216] border-white/20 text-zinc-300'
                    : 'bg-[#0d0e12] border-white/5 text-zinc-500 opacity-60'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs font-mono ${
                    isActive
                      ? 'bg-[#dc2626] text-white'
                      : isCompleted
                      ? 'bg-white/10 text-white'
                      : 'bg-zinc-800 text-zinc-500'
                  }`}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h4 className={`text-xs md:text-sm font-bold font-headline ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {phase.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-inter">{phase.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Phase Content Container */}
        <div className="flex-1 min-h-0 relative">
          {/* STEP 0: THE PROBLEM */}
          {currentStep === 0 && (
            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
                {/* Supplier Friction Card */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-[#ef4444]">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-headline">
                          Supplier Logistics Friction
                        </h3>
                        <span className="text-xs text-zinc-400 font-inter">
                          Blind Speculative Trips & Route Inefficiency
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-200 text-base leading-relaxed font-inter mb-5">
                      Suppliers waste fuel, driver hours, and vehicle capacity driving aimlessly to merchants just to inquire if restock is needed.
                    </p>

                    <div className="space-y-2.5 font-inter text-sm text-zinc-300">
                      <div className="flex items-center gap-3 bg-[#161822] p-3 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
                        <span>High fuel overhead with sub-optimal vehicle capacity utilization</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#161822] p-3 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
                        <span>Unpredictable sales visits resulting in frequent rejected drops</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-[#ef4444] font-headline">
                    Result: Severe operational cost and wasted fleet capacity
                  </div>
                </div>

                {/* Merchant Friction Card */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-[#ef4444]">
                        <Store className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-headline">
                          Merchant Inventory Friction
                        </h3>
                        <span className="text-xs text-zinc-400 font-inter">
                          Stockouts & Revenue Leakage
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-200 text-base leading-relaxed font-inter mb-5">
                      Merchants frequently run out of popular SKUs because they lack a direct, structured mechanism to request replenishment on demand.
                    </p>

                    <div className="space-y-2.5 font-inter text-sm text-zinc-300">
                      <div className="flex items-center gap-3 bg-[#161822] p-3 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
                        <span>Empty shelves during peak retail demand hours</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#161822] p-3 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
                        <span>Zero visibility into supplier product catalog or delivery ETA</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-[#ef4444] font-headline">
                    Result: Lost consumer loyalty and preventable retail revenue decline
                  </div>
                </div>
              </div>

              {/* Bottom Problem Synthesis Bar */}
              <div className="bg-[#101216] border border-white/10 rounded-lg p-3.5 flex items-center justify-between text-sm text-zinc-300 font-inter">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                  <span className="font-bold text-white font-headline">Core Failure:</span>
                  <span>Absence of a shared, structured channel for direct ordering and route consolidation.</span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">Press Space or Right Arrow →</span>
              </div>
            </div>
          )}

          {/* STEP 1: THE IDEA */}
          {currentStep === 1 && (
            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
                {/* Stage 1 */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#ef4444] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        PHASE 01
                      </span>
                      <PackageCheck className="w-5 h-5 text-zinc-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-headline mb-2">
                      On-Demand Merchant Request
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed font-inter">
                      Merchants proactively dispatch restock or new-product requests through the system rather than waiting for unscheduled supplier visits.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400 font-mono">
                    Trigger: Threshold stock depletion
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#ef4444] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        PHASE 02
                      </span>
                      <MapPin className="w-5 h-5 text-zinc-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-headline mb-2">
                      Geographic Route Batching
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed font-inter">
                      Suppliers accept requests. Accepted orders from nearby merchants along common geographical routes are consolidated into delivery batches.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400 font-mono">
                    Grouping: Proximity & truck capacity
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#ef4444] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        PHASE 03
                      </span>
                      <Clock className="w-5 h-5 text-zinc-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-headline mb-2">
                      Dynamic ASAP Dispatch
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed font-inter">
                      Delivery vehicles depart as soon as batches form rather than on rigid calendar schedules, reducing turnaround times and fuel burn.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400 font-mono">
                    Execution: Immediate batch dispatch
                  </div>
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="bg-[#101216] border border-white/10 rounded-lg p-3.5 flex items-center justify-between text-sm text-zinc-300 font-inter">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#ef4444]" />
                  <span className="font-bold text-white font-headline">Platform Value:</span>
                  <span>Directly synchronizes retail replenishment with wholesale delivery corridors.</span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">Press Space or Right Arrow →</span>
              </div>
            </div>
          )}

          {/* STEP 2: PRINCIPLE & SCOPE */}
          {currentStep === 2 && (
            <div className="h-full flex flex-col justify-between space-y-4">
              {/* Highlight Container */}
              <div className="bg-[#12141a] border border-[#dc2626]/40 rounded-xl p-6 shadow-industrial-md">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight font-headline">
                  "{highlightLine}"
                </h2>
                <p className="mt-3 text-zinc-300 text-base leading-relaxed font-inter max-w-4xl">
                  Trips are never speculative. Deliveries are batched and dispatched dynamically as soon as merchant thresholds are met, optimizing fleet capacity.
                </p>
              </div>

              {/* Scope Boundaries */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="industrial-panel p-5">
                  <h4 className="text-sm font-bold text-white font-headline mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                    <span>Three System Roles</span>
                  </h4>
                  <p className="text-xs text-zinc-300 font-inter leading-relaxed">
                    Merchant, Supplier, and Admin (responsible for onboarding approvals and viewing operational reports).
                  </p>
                </div>

                <div className="industrial-panel p-5">
                  <h4 className="text-sm font-bold text-white font-headline mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                    <span>Fleet & Driver Model</span>
                  </h4>
                  <p className="text-xs text-zinc-300 font-inter leading-relaxed">
                    Suppliers own vehicles and assign drivers internally. Driver activity remains fully internal to the Supplier entity.
                  </p>
                </div>

                <div className="industrial-panel p-5">
                  <h4 className="text-sm font-bold text-[#ef4444] font-headline mb-1.5 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#ef4444]" />
                    <span>Strict Academic Boundaries</span>
                  </h4>
                  <p className="text-xs text-zinc-300 font-inter leading-relaxed">
                    Excluded: in-app payment gateways, driver ratings, traffic map APIs, or continuous GPS telemetry.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}
