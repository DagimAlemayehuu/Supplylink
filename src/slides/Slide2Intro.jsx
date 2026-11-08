import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import {
  AlertCircle,
  Lightbulb,
  Truck,
  PackageCheck,
  MapPin,
  ShieldAlert,
  ArrowRight,
  Clock,
  Store
} from 'lucide-react';

/**
 * Slide 2: Problem & Solution Idea (Red Noir Theme)
 * Completely redesigned into a structured, highly organized 3-phase narrative:
 * Step 0: The Core Problem (Supplier & Merchant Friction)
 * Step 1: The Solution Idea (Direct Ordering, Route Batching, ASAP Dispatch)
 * Step 2: Guiding Principle & Architectural Scope
 */
export default function Slide2Intro({ currentStep = 0 }) {
  const { highlightLine } = presentationConfig;

  const phases = [
    { title: "1. The Operational Problem", desc: "Traditional Friction" },
    { title: "2. The SupplyLink Idea", desc: "Structured Workflow" },
    { title: "3. Principle & Scope", desc: "Core Bounds" },
  ];

  return (
    <Slide
      title="Problem Domain & The SupplyLink Solution"
      subtitle="Transforming speculative vendor visits into organized, demand-driven route logistics"
    >
      <div className="flex flex-col h-full justify-between pb-2">
        {/* Top Organized Phase Navigation Bar */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {phases.map((phase, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-[#1a0407] border-[#ef233c] shadow-[0_0_20px_rgba(239,35,60,0.35)]'
                    : isCompleted
                    ? 'bg-zinc-950/60 border-white/20 text-zinc-300'
                    : 'bg-zinc-950/30 border-white/5 text-zinc-500 opacity-60'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm font-manrope ${
                    isActive
                      ? 'bg-[#ef233c] text-white shadow-[0_0_10px_#ef233c]'
                      : isCompleted
                      ? 'bg-white/10 text-white'
                      : 'bg-zinc-900 text-zinc-500'
                  }`}
                >
                  {idx + 1}
                </div>
                <div>
                  <h4 className={`text-base font-extrabold font-manrope ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {phase.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-inter">{phase.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Phase Content Container */}
        <div className="flex-1 min-h-0 relative">
          {/* ======================================================== */}
          {/* STEP 0: THE PROBLEM (Supplier Pain vs Merchant Pain)     */}
          {/* ======================================================== */}
          {currentStep === 0 && (
            <div className="h-full flex flex-col justify-between space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                {/* Supplier Friction Card */}
                <div className="bg-gradient-to-b from-[#1a0507] to-zinc-950 border border-red-500/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(239,35,60,0.15)] flex flex-col justify-between backdrop-blur-xl">
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#ef233c]/20 border border-[#ef233c]/40 flex items-center justify-center text-[#ef233c]">
                        <Truck className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-red-400 font-manrope">
                          Supplier Friction
                        </span>
                        <h3 className="text-2xl font-black text-white font-manrope">
                          Blind Speculative Trips
                        </h3>
                      </div>
                    </div>

                    <p className="text-zinc-200 text-xl leading-relaxed font-inter mb-6">
                      Suppliers waste fuel and driver hours driving aimlessly to merchants just to inquire if they need goods.
                    </p>

                    <div className="space-y-3 font-inter text-base text-zinc-300">
                      <div className="flex items-center gap-3 bg-red-950/40 p-3 rounded-xl border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-[#ef233c] flex-shrink-0" />
                        <span>High fuel consumption and low vehicle capacity utilization</span>
                      </div>
                      <div className="flex items-center gap-3 bg-red-950/40 p-3 rounded-xl border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-[#ef233c] flex-shrink-0" />
                        <span>Unpredictable sales visits with frequent rejected visits</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-red-400 font-manrope">
                    Outcome: Severe Logistics Inefficiency
                  </div>
                </div>

                {/* Merchant Friction Card */}
                <div className="bg-gradient-to-b from-[#1a0507] to-zinc-950 border border-red-500/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(239,35,60,0.15)] flex flex-col justify-between backdrop-blur-xl">
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#ef233c]/20 border border-[#ef233c]/40 flex items-center justify-center text-[#ef233c]">
                        <Store className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-red-400 font-manrope">
                          Merchant Friction
                        </span>
                        <h3 className="text-2xl font-black text-white font-manrope">
                          Stockouts & Lost Revenue
                        </h3>
                      </div>
                    </div>

                    <p className="text-zinc-200 text-xl leading-relaxed font-inter mb-6">
                      Merchants frequently run out of popular products because they have no reliable, proactive way to request stock.
                    </p>

                    <div className="space-y-3 font-inter text-base text-zinc-300">
                      <div className="flex items-center gap-3 bg-red-950/40 p-3 rounded-xl border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-[#ef233c] flex-shrink-0" />
                        <span>Empty shelves during peak customer demand hours</span>
                      </div>
                      <div className="flex items-center gap-3 bg-red-950/40 p-3 rounded-xl border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-[#ef233c] flex-shrink-0" />
                        <span>Zero visibility into supplier availability or delivery ETA</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-red-400 font-manrope">
                    Outcome: Lost Customer Loyalty & Sales
                  </div>
                </div>
              </div>

              {/* Bottom Problem Synthesis Bar */}
              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-4 flex items-center justify-between text-base text-zinc-300 font-inter">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#ef233c] animate-pulse" />
                  <span className="font-bold text-white">Root Cause:</span>
                  <span>Absence of a shared, structured channel for direct ordering and route consolidation.</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">Press Space or Next →</span>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 1: THE IDEA (Structured 3-Stage Platform Solution)  */}
          {/* ======================================================== */}
          {currentStep === 1 && (
            <div className="h-full flex flex-col justify-between space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                {/* Step 1: Demand-Driven Ordering */}
                <div className="bg-zinc-950/90 border border-white/15 hover:border-[#ef233c]/60 rounded-3xl p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl relative group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 font-black text-lg font-manrope">
                      01
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#ef233c] font-manrope">
                      Direct Ordering
                    </span>
                    <h3 className="text-2xl font-black text-white font-manrope mb-3 mt-1">
                      Merchant Request
                    </h3>
                    <p className="text-zinc-200 text-lg leading-relaxed font-inter font-normal">
                      When low on inventory, the merchant selects their chosen supplier and dispatches a restock or new-product request.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-sm font-semibold text-zinc-400 flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-[#ef233c]" />
                    <span>Demand-driven, not speculative</span>
                  </div>
                </div>

                {/* Step 2: Supplier Decision & Clustering */}
                <div className="bg-zinc-950/90 border border-white/15 hover:border-[#ef233c]/60 rounded-3xl p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl relative group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 font-black text-lg font-manrope">
                      02
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#ef233c] font-manrope">
                      Intelligent Grouping
                    </span>
                    <h3 className="text-2xl font-black text-white font-manrope mb-3 mt-1">
                      Route Batching
                    </h3>
                    <p className="text-zinc-200 text-lg leading-relaxed font-inter font-normal">
                      The supplier accepts or rejects requests. Accepted requests from nearby merchants on common routes are grouped into delivery batches.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-sm font-semibold text-zinc-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ef233c]" />
                    <span>Clustered by merchant proximity</span>
                  </div>
                </div>

                {/* Step 3: ASAP Dispatch */}
                <div className="bg-zinc-950/90 border border-white/15 hover:border-[#ef233c]/60 rounded-3xl p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl relative group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 font-black text-lg font-manrope">
                      03
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#ef233c] font-manrope">
                      Dynamic Dispatch
                    </span>
                    <h3 className="text-2xl font-black text-white font-manrope mb-3 mt-1">
                      ASAP Delivery Trips
                    </h3>
                    <p className="text-zinc-200 text-lg leading-relaxed font-inter font-normal">
                      Vehicles depart as soon as batches form rather than on rigid, arbitrary delivery days, saving fuel and cutting wait times.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-sm font-semibold text-zinc-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#ef233c]" />
                    <span>Dispatched ASAP, not on fixed days</span>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-4 flex items-center justify-between text-base text-zinc-300 font-inter">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold text-white">Platform Core:</span>
                  <span>Connects demand directly to organized logistics without middle-tier dispatch delays.</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">Press Space or Next →</span>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 2: GUIDING PRINCIPLE & ARCHITECTURAL SCOPE          */}
          {/* ======================================================== */}
          {currentStep === 2 && (
            <div className="h-full flex flex-col justify-between space-y-4 animate-fadeIn">
              {/* Massive Hero Highlight Banner */}
              <div className="bg-gradient-to-r from-[#200508] via-zinc-950 to-zinc-950 border-2 border-[#ef233c]/60 rounded-3xl p-8 shadow-[0_0_40px_rgba(239,35,60,0.3)] backdrop-blur-xl">
                <div className="flex items-center gap-2.5 text-red-400 text-xs font-black uppercase tracking-widest mb-3 font-manrope">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef233c] shadow-[0_0_8px_#ef233c]" />
                  <span>The Architectural Highlight Line</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-manrope">
                  "{highlightLine}"
                </h2>
                <p className="mt-4 text-zinc-300 text-xl leading-relaxed font-inter font-normal max-w-4xl">
                  Eliminates speculative driving. Trips are organized and dispatched dynamically whenever delivery batches form, maximizing vehicle capacity.
                </p>
              </div>

              {/* Scope Boundaries 3-Box Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                  <h4 className="text-base font-extrabold text-white font-manrope mb-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef233c]" />
                    <span>Three Core Users</span>
                  </h4>
                  <p className="text-sm text-zinc-300 font-inter">
                    Merchant, Supplier, and Admin (who approves accounts and reviews system reports).
                  </p>
                </div>

                <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                  <h4 className="text-base font-extrabold text-white font-manrope mb-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef233c]" />
                    <span>Fleet & Driver Ownership</span>
                  </h4>
                  <p className="text-sm text-zinc-300 font-inter">
                    Suppliers own vehicles and drivers; drivers are internal to the Supplier (no separate driver user).
                  </p>
                </div>

                <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                  <h4 className="text-base font-extrabold text-red-400 font-manrope mb-1.5 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#ef233c]" />
                    <span>Explicit Scope Boundaries</span>
                  </h4>
                  <p className="text-sm text-zinc-300 font-inter">
                    No payment gateways, ratings, map/traffic APIs, or live GPS telemetry.
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
