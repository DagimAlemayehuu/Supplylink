import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import {
  AlertCircle,
  Truck,
  PackageCheck,
  MapPin,
  ShieldAlert,
  ArrowRight,
  Clock,
  Store,
  Terminal,
  Layers
} from 'lucide-react';

/**
 * Slide 2: Problem Domain & Solution Idea (Neon Velocity Feature Bento Grid)
 * Luminosity Cards, brutalist typography, top-aligned mono index, and Neon Lime accents.
 */
export default function Slide2Intro({ currentStep = 0 }) {
  const { highlightLine } = presentationConfig;

  const phases = [
    { code: "01/FRICTION", title: "OPERATIONAL PROBLEM", desc: "TRADITIONAL LOGISTICS BOTTLENECK" },
    { code: "02/SOLUTION", title: "THE SUPPLYLINK IDEA", desc: "DEMAND-DRIVEN ROUTE WORKFLOW" },
    { code: "03/BOUNDS", title: "PRINCIPLE & BOUNDARIES", desc: "CORE ARCHITECTURAL CONSTRAINTS" },
  ];

  return (
    <Slide
      title="PROBLEM DOMAIN &amp; PLATFORM CONCEPT"
      subtitle="Eliminating speculative vendor trips through on-demand ordering and organized route clustering"
    >
      <div className="flex flex-col h-full justify-between pb-2">
        {/* Top Technical Phase Selector Tabs */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {phases.map((phase, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0f1903] border-[#BFFF00] shadow-neon-lime'
                    : isCompleted
                    ? 'bg-[#0a0a0a] border-white/20 text-zinc-300'
                    : 'bg-[#080808] border-white/5 text-zinc-600 opacity-60'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono tabular-nums ${
                    isActive
                      ? 'bg-[#BFFF00] text-black shadow-neon-lime'
                      : isCompleted
                      ? 'bg-white/10 text-white'
                      : 'bg-zinc-900 text-zinc-600'
                  }`}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h4 className={`text-xs md:text-sm font-extrabold font-headline uppercase tracking-tight ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                    {phase.title}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-mono tracking-widestTechnical uppercase">{phase.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Phase Content Container */}
        <div className="flex-1 min-h-0 relative">
          {/* ======================================================== */}
          {/* STEP 0: THE PROBLEM (Luminosity Bento Cards)             */}
          {/* ======================================================== */}
          {currentStep === 0 && (
            <div className="h-full flex flex-col justify-between space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                {/* Supplier Friction Luminosity Card */}
                <div className="luminosity-card p-8 flex flex-col justify-between">
                  <div>
                    {/* Top-aligned Mono Index */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase font-semibold">
                        // 01_SUPPLIER_FRICTION
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase">
                        ROOT_CAUSE: BLIND_DELIVERY
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#BFFF00]/10 border border-[#BFFF00]/30 flex items-center justify-center text-[#BFFF00]">
                        <Truck className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-white font-headline uppercase tracking-tight">
                        Blind Speculative Trips
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-lg leading-relaxed font-body mb-6">
                      Suppliers waste fuel, driver hours, and vehicle wear driving aimlessly to merchants just to inquire if stock is needed.
                    </p>

                    <div className="space-y-3 font-body text-sm text-zinc-300">
                      <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/10">
                        <AlertCircle className="w-4 h-4 text-[#BFFF00] flex-shrink-0" />
                        <span>High fuel consumption and low vehicle capacity utilization</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/10">
                        <AlertCircle className="w-4 h-4 text-[#BFFF00] flex-shrink-0" />
                        <span>Unpredictable sales visits with frequent rejected visits</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono uppercase tracking-widestTechnical text-[#BFFF00] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF00]" />
                    <span>OUTCOME: SEVERE ROUTE INEFFICIENCY &amp; HIGH FUEL BURN</span>
                  </div>
                </div>

                {/* Merchant Friction Luminosity Card */}
                <div className="luminosity-card p-8 flex flex-col justify-between">
                  <div>
                    {/* Top-aligned Mono Index */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase font-semibold">
                        // 02_MERCHANT_FRICTION
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase">
                        ROOT_CAUSE: DISCONNECTED_DEMAND
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#BFFF00]/10 border border-[#BFFF00]/30 flex items-center justify-center text-[#BFFF00]">
                        <Store className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-white font-headline uppercase tracking-tight">
                        Stockouts &amp; Lost Revenue
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-lg leading-relaxed font-body mb-6">
                      Merchants frequently run out of critical inventory because they have no direct, structured channel to request stock when running low.
                    </p>

                    <div className="space-y-3 font-body text-sm text-zinc-300">
                      <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/10">
                        <AlertCircle className="w-4 h-4 text-[#BFFF00] flex-shrink-0" />
                        <span>Empty store shelves during peak customer purchasing demand</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/10">
                        <AlertCircle className="w-4 h-4 text-[#BFFF00] flex-shrink-0" />
                        <span>Zero visibility into supplier availability or delivery ETA</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono uppercase tracking-widestTechnical text-[#BFFF00] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF00]" />
                    <span>OUTCOME: LOST REVENUE &amp; CUSTOMER STOCKOUT CHURN</span>
                  </div>
                </div>
              </div>

              {/* Bottom Technical Synthesis Bar */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between text-xs font-mono tracking-widestTechnical uppercase text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#BFFF00] animate-ping" />
                  <span className="font-bold text-white">CORE DIAGNOSIS:</span>
                  <span>ABSENCE OF A SHARED DATA CONTRACT FOR DIRECT REQUESTS &amp; ROUTE BATCHING</span>
                </div>
                <span className="text-[#BFFF00] font-bold">PRESS SPACE / NEXT →</span>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 1: THE IDEA (3-Column Luminosity Bento Workflow)    */}
          {/* ======================================================== */}
          {currentStep === 1 && (
            <div className="h-full flex flex-col justify-between space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                {/* 01: Direct Request */}
                <div className="luminosity-card p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase">
                        // 01_REQUEST
                      </span>
                      <PackageCheck className="w-4 h-4 text-[#BFFF00]" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widestTechnical text-zinc-400">
                      ON-DEMAND SIGNAL
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-headline uppercase tracking-tight mt-1 mb-3">
                      Direct Merchant Request
                    </h3>
                    <p className="text-zinc-300 text-base leading-relaxed font-body">
                      When low on stock, the merchant sends a restock or new-product request directly to their chosen supplier.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#BFFF00] uppercase tracking-widestTechnical">
                    PULL DEMAND (NOT PUSH SPECULATION)
                  </div>
                </div>

                {/* 02: Route Batching */}
                <div className="luminosity-card p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase">
                        // 02_CLUSTERING
                      </span>
                      <MapPin className="w-4 h-4 text-[#BFFF00]" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widestTechnical text-zinc-400">
                      ROUTE CONSOLIDATION
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-headline uppercase tracking-tight mt-1 mb-3">
                      Organized Route Batching
                    </h3>
                    <p className="text-zinc-300 text-base leading-relaxed font-body">
                      Supplier reviews and accepts orders. Accepted requests are clustered by merchant geographic proximity into organized delivery trips.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#BFFF00] uppercase tracking-widestTechnical">
                    ORGANIZED MULTI-STOP LOGISTICS
                  </div>
                </div>

                {/* 03: ASAP Dispatch */}
                <div className="luminosity-card p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase">
                        // 03_DISPATCH
                      </span>
                      <Clock className="w-4 h-4 text-[#BFFF00]" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widestTechnical text-zinc-400">
                      RAPID FULFILLMENT
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-headline uppercase tracking-tight mt-1 mb-3">
                      ASAP Delivery Trips
                    </h3>
                    <p className="text-zinc-300 text-base leading-relaxed font-body">
                      Dispatched as soon as possible once a batch forms, rather than on rigid, arbitrary delivery days, saving fuel and time.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#BFFF00] uppercase tracking-widestTechnical">
                    DISPATCHED ASAP (NOT FIXED DAYS)
                  </div>
                </div>
              </div>

              {/* Bottom Technical Status */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between text-xs font-mono tracking-widestTechnical uppercase text-zinc-400">
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-[#BFFF00]" />
                  <span className="font-bold text-white">PLATFORM PARADIGM:</span>
                  <span>STRUCTURED DEMAND DISPATCHES ORGANIZED TRIPS AUTOMATICALLY</span>
                </div>
                <span className="text-[#BFFF00] font-bold">PRESS SPACE / NEXT →</span>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 2: GUIDING PRINCIPLE & ARCHITECTURAL SCOPE          */}
          {/* ======================================================== */}
          {currentStep === 2 && (
            <div className="h-full flex flex-col justify-between space-y-4 animate-fadeIn">
              {/* Massive Hero Highlight Box */}
              <div className="border-4 border-[#BFFF00] bg-[#0c1603]/80 rounded-3xl p-8 shadow-neon-lime backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-ultraTechnical text-[#BFFF00] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
                  <span>CORE ARCHITECTURAL GUIDING PRINCIPLE</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-headline uppercase tracking-tightest leading-tight">
                  "{highlightLine}"
                </h2>
                <p className="mt-4 text-zinc-300 text-lg font-body leading-relaxed max-w-4xl">
                  Eliminates speculative driving. Trips are organized and dispatched dynamically whenever delivery batches form, maximizing vehicle capacity.
                </p>
              </div>

              {/* Scope Boundaries 3-Box Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="luminosity-card p-5">
                  <span className="text-[10px] font-mono text-[#BFFF00] tracking-widestTechnical uppercase">
                    // ACTORS
                  </span>
                  <h4 className="text-base font-extrabold text-white font-headline uppercase tracking-tight mt-1 mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
                    <span>Three System Roles</span>
                  </h4>
                  <p className="text-xs text-zinc-400 font-body leading-relaxed">
                    Merchant, Supplier, and Admin (who validates onboarding and reviews audit reports).
                  </p>
                </div>

                <div className="luminosity-card p-5">
                  <span className="text-[10px] font-mono text-[#BFFF00] tracking-widestTechnical uppercase">
                    // FLEET_MODEL
                  </span>
                  <h4 className="text-base font-extrabold text-white font-headline uppercase tracking-tight mt-1 mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
                    <span>Fleet &amp; Driver Ownership</span>
                  </h4>
                  <p className="text-xs text-zinc-400 font-body leading-relaxed">
                    Suppliers own vehicles and drivers; drivers are internal to the Supplier (no separate driver entity).
                  </p>
                </div>

                <div className="luminosity-card p-5">
                  <span className="text-[10px] font-mono text-[#BFFF00] tracking-widestTechnical uppercase">
                    // SYSTEM_BOUNDS
                  </span>
                  <h4 className="text-base font-extrabold text-white font-headline uppercase tracking-tight mt-1 mb-1.5 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#BFFF00]" />
                    <span>Explicit Boundaries</span>
                  </h4>
                  <p className="text-xs text-zinc-400 font-body leading-relaxed">
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
