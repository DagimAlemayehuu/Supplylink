import React, { useState } from 'react';
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
  Layers,
  CheckCircle2,
  XCircle,
  Users,
  Compass
} from 'lucide-react';

/**
 * Slide 2: Problem Domain & SupplyLink Solution (Industrial Noir Edition)
 * Clean, highly readable, substantive presentation without over-engineering.
 * Rich bullet points articulate domain problems, platform architecture, and operational boundaries.
 */
export default function Slide2Intro({ currentStep = 0 }) {
  const { highlightLine } = presentationConfig;
  const [activeTab, setActiveTab] = useState(currentStep);

  // Sync with keyboard slide navigation if currentStep changes externally
  React.useEffect(() => {
    setActiveTab(currentStep);
  }, [currentStep]);

  const phases = [
    { title: "Operational Friction", desc: "Traditional Logistics Waste" },
    { title: "The SupplyLink Architecture", desc: "Structured Solution Workflow" },
    { title: "Principle & Scope Bounds", desc: "Academic Perimeter & Limits" },
  ];

  return (
    <Slide
      title="Problem Domain & Platform Architecture"
      subtitle="Replacing blind speculative vendor trips with demand-driven route batch logistics"
    >
      <div className="flex flex-col h-full justify-between pb-1">
        {/* Top Structured Phase Tabs */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {phases.map((phase, idx) => {
            const isActive = activeTab === idx;
            const isCompleted = activeTab > idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border text-left transition-all ${
                  isActive
                    ? 'bg-[#161822] border-[#dc2626] shadow-industrial-sm'
                    : isCompleted
                    ? 'bg-[#101216] border-white/20 text-zinc-300 hover:border-white/40'
                    : 'bg-[#0d0e12] border-white/5 text-zinc-500 hover:border-white/20 opacity-70'
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
              </button>
            );
          })}
        </div>

        {/* Dynamic Phase Content Container */}
        <div className="flex-1 min-h-0 relative">
          {/* ======================================================== */}
          {/* STEP 0: OPERATIONAL FRICTION (Supplier vs Merchant)     */}
          {/* ======================================================== */}
          {activeTab === 0 && (
            <div className="h-full flex flex-col justify-between space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                {/* 1. Supplier Friction Card */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                      <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-500/30 flex items-center justify-center text-[#ef4444] shadow-industrial-sm flex-shrink-0">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-headline">
                          Supplier Logistics Friction
                        </h3>
                        <span className="text-xs text-red-400 font-mono uppercase tracking-wider">
                          Speculative Driving & Waste
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-inter mb-4">
                      Suppliers operate on blind intuition—rolling trucks randomly through retail corridors to inquire if merchants need goods:
                    </p>

                    <ul className="space-y-2.5 font-inter text-xs md:text-sm text-zinc-300">
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <XCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Heavy Fuel Burn & Low Payload:</strong> Trucks travel long distances with partial loads or return completely empty.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <XCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Frequent Rejected Drops:</strong> Arriving unannounced often results in merchants declining orders due to lack of cash or space.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <XCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Unpredictable Fleet Schedules:</strong> Dispatchers have no forward visibility into daily delivery requirements or route density.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <XCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Inefficient Urban Routing:</strong> Driver itineraries zig-zag chaotically instead of following consolidated geographic corridors.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 text-xs font-semibold text-[#ef4444] font-headline flex items-center justify-between">
                    <span>Operational Consequence:</span>
                    <span className="font-mono text-zinc-300">Excess overhead & diminished wholesale margins</span>
                  </div>
                </div>

                {/* 2. Merchant Friction Card */}
                <div className="industrial-panel p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                      <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-500/30 flex items-center justify-center text-[#ef4444] shadow-industrial-sm flex-shrink-0">
                        <Store className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-headline">
                          Merchant Inventory Friction
                        </h3>
                        <span className="text-xs text-red-400 font-mono uppercase tracking-wider">
                          Stockouts & Revenue Leakage
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-inter mb-4">
                      Retail store owners face chronic replenishment uncertainty, forced to wait passively for unscheduled vendor walk-ins:
                    </p>

                    <ul className="space-y-2.5 font-inter text-xs md:text-sm text-zinc-300">
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Critical Out-of-Stock Hours:</strong> Fast-moving products run out during peak customer demand, causing lost retail sales.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Zero Catalog Visibility:</strong> Merchants cannot browse supplier wholesale catalog updates, prices, or restock lead times.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>Consumer Churn:</strong> Shoppers who encounter empty shelves turn to competitor stores, eroding long-term customer loyalty.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-[#141720] p-2.5 rounded-lg border border-white/5">
                        <AlertCircle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                        <span><strong>No Direct Replenishment Channel:</strong> Merchants lack a formal method to trigger reorder requests when inventory hits safety thresholds.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 text-xs font-semibold text-[#ef4444] font-headline flex items-center justify-between">
                    <span>Retail Consequence:</span>
                    <span className="font-mono text-zinc-300">Preventable revenue loss & inventory blindspots</span>
                  </div>
                </div>
              </div>

              {/* Bottom Problem Synthesis Bar */}
              <div className="bg-[#101216] border border-white/10 rounded-lg p-3 flex items-center justify-between text-xs md:text-sm text-zinc-300 font-inter">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626]" />
                  <span className="font-bold text-white font-headline">Root Problem:</span>
                  <span>Absence of a shared digital channel linking on-demand retail requests directly to wholesale route consolidation.</span>
                </div>
                <span className="text-zinc-500 font-mono text-xs">Press Space or Click Next →</span>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 1: THE IDEA (3-Stage Platform Solution)             */}
          {/* ======================================================== */}
          {activeTab === 1 && (
            <div className="h-full flex flex-col justify-between space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                {/* 1. On-Demand Merchant Request */}
                <div className="industrial-panel p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-red-950/70 border border-red-500/30 flex items-center justify-center text-[#ef4444]">
                          <PackageCheck className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-white font-headline">
                          1. On-Demand Request
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#ef4444] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        PHASE 01
                      </span>
                    </div>

                    <p className="text-zinc-200 text-xs md:text-sm leading-relaxed font-inter mb-3">
                      Merchants proactively trigger replenishment orders the moment stock depletes below safety margins:
                    </p>

                    <ul className="space-y-2 font-inter text-xs text-zinc-300">
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Direct Self-Service:</strong> Merchants browse active supplier product catalogs and select specific SKUs.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Flexible Order Types:</strong> Supports both standard inventory restock and new catalog introduction requests.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Lifecycle Tracking:</strong> Transparent status propagation from pending review to accepted, batched, and in-transit.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Threshold Alerts:</strong> Process 3.0 automatically warns merchants when safety stock levels are breached.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
                    <span>DFD Interface:</span>
                    <span className="text-sky-400">Process 4.0 & D4 Requests</span>
                  </div>
                </div>

                {/* 2. Route Batching */}
                <div className="industrial-panel p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-red-950/70 border border-red-500/30 flex items-center justify-center text-[#ef4444]">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-white font-headline">
                          2. Route Batching
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#ef4444] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        PHASE 02
                      </span>
                    </div>

                    <p className="text-zinc-200 text-xs md:text-sm leading-relaxed font-inter mb-3">
                      Process 5.0 algorithmically clusters accepted orders by geographic proximity into organized delivery batches:
                    </p>

                    <ul className="space-y-2 font-inter text-xs text-zinc-300">
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Corridor Clustering:</strong> Merchants located along common streets or neighborhoods are combined into one trip.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Vehicle Capacity Optimization:</strong> Orders are consolidated until target truck volume is satisfied, maximizing fuel ROI.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>No Multi-Vendor Detours:</strong> Drivers follow a sequential drop path, avoiding erratic zig-zag traversal.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Supplier Control:</strong> Wholesalers review and approve grouped batches before committing warehouse pick-and-pack.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
                    <span>DFD Interface:</span>
                    <span className="text-sky-400">Process 5.0 & D5 Batches</span>
                  </div>
                </div>

                {/* 3. Dynamic ASAP Dispatch */}
                <div className="industrial-panel p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-red-950/70 border border-red-500/30 flex items-center justify-center text-[#ef4444]">
                          <Clock className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-white font-headline">
                          3. ASAP Dispatch
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#ef4444] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        PHASE 03
                      </span>
                    </div>

                    <p className="text-zinc-200 text-xs md:text-sm leading-relaxed font-inter mb-3">
                      Trips depart immediately as delivery clusters form, replacing rigid calendar-based delivery days:
                    </p>

                    <ul className="space-y-2 font-inter text-xs text-zinc-300">
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Dynamic Turnaround:</strong> Trucks roll when ready, drastically reducing merchant reorder wait times.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Fleet Agility:</strong> Wholesale fleets respond to actual market demand rather than artificial day-of-week quotas.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Receipt Confirmation Loop:</strong> Upon arrival, merchant confirmation triggers an automatic inventory stock increment in D3.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Continuous Feedback:</strong> Both merchant and supplier dashboards stay perfectly synchronized at every drop milestone.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
                    <span>DFD Interface:</span>
                    <span className="text-sky-400">Process 5.0 & D3 Inventory</span>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="bg-[#101216] border border-white/10 rounded-lg p-3 flex items-center justify-between text-xs md:text-sm text-zinc-300 font-inter">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ef4444]" />
                  <span className="font-bold text-white font-headline">Core Platform Architecture:</span>
                  <span>Connects retail inventory depletion directly to wholesale warehouse batching with zero intermediary delays.</span>
                </div>
                <span className="text-zinc-500 font-mono text-xs">Press Space or Click Next →</span>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 2: PRINCIPLE & SCOPE BOUNDS                         */}
          {/* ======================================================== */}
          {activeTab === 2 && (
            <div className="h-full flex flex-col justify-between space-y-3">
              {/* Highlight Container */}
              <div className="bg-[#12141a] border border-[#dc2626]/40 rounded-xl p-5 shadow-industrial-md flex items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight font-headline">
                    "{highlightLine}"
                  </h2>
                  <p className="mt-2 text-zinc-300 text-xs md:text-sm leading-relaxed font-inter max-w-4xl">
                    Every delivery trip corresponds to confirmed, clustered merchant requests. Vehicles never roll speculatively, optimizing wholesale fuel expenditure and preventing retail stockouts.
                  </p>
                </div>
                <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-xs font-mono text-red-300 flex-shrink-0">
                  <Compass className="w-4 h-4 text-[#ef4444]" />
                  <span>CORE ARCHITECTURAL AXIOM</span>
                </div>
              </div>

              {/* Scope Boundaries 3-Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                {/* 1. Core Users */}
                <div className="industrial-panel p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5 border-b border-white/10 pb-2">
                      <div className="w-7 h-7 rounded bg-sky-950/60 border border-sky-400/30 flex items-center justify-center text-sky-400">
                        <Users className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-headline">
                        Three External Entities
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-300 font-inter mb-3 leading-relaxed">
                      System interactions are strictly partitioned among three distinct actors in dual Source & Sink capacities:
                    </p>

                    <ul className="space-y-2 text-xs font-inter text-zinc-300">
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-sky-400 font-bold">•</span>
                        <span><strong>Merchant:</strong> Dispatches inventory levels and requests; receives alerts, order updates, and physical stock.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-sky-400 font-bold">•</span>
                        <span><strong>Supplier:</strong> Manages product catalogs, reviews pending requests, and confirms route dispatches.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-sky-400 font-bold">•</span>
                        <span><strong>Admin:</strong> Supervises platform integrity by approving new registrations and auditing consolidated reports.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                    Dual Source & Sink participants
                  </div>
                </div>

                {/* 2. Fleet & Driver Model */}
                <div className="industrial-panel p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5 border-b border-white/10 pb-2">
                      <div className="w-7 h-7 rounded bg-red-950/70 border border-red-500/30 flex items-center justify-center text-[#ef4444]">
                        <Truck className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-headline">
                        Fleet & Driver Ownership
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-300 font-inter mb-3 leading-relaxed">
                      Delivery vehicles and drivers are owned and scheduled directly by wholesale suppliers:
                    </p>

                    <ul className="space-y-2 text-xs font-inter text-zinc-300">
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-red-400 font-bold">•</span>
                        <span><strong>Internal Operations:</strong> Driver personnel are direct employees of the Supplier organization, not independent gig workers.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-red-400 font-bold">•</span>
                        <span><strong>No Separate Driver Entity:</strong> Driver assignments, vehicle maintenance, and shift routing remain internal to the Supplier.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-red-400 font-bold">•</span>
                        <span><strong>B2B Simplicity:</strong> The software platform coordinates business-to-business order orchestration without micromanaging in-cab drivers.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                    Internal to wholesale supplier entity
                  </div>
                </div>

                {/* 3. Scope Boundaries */}
                <div className="industrial-panel p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5 border-b border-white/10 pb-2">
                      <div className="w-7 h-7 rounded bg-amber-950/70 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#ef4444] font-headline">
                        Explicit Scope Boundaries
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-300 font-inter mb-3 leading-relaxed">
                      To preserve architectural clarity, the project enforces strict academic modeling boundaries:
                    </p>

                    <ul className="space-y-2 text-xs font-inter text-zinc-300">
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-red-400 font-bold">✕</span>
                        <span><strong>No In-App Payments:</strong> Financial invoicing, cash handling, and bank settlement occur outside the software perimeter.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-red-400 font-bold">✕</span>
                        <span><strong>No Live GPS Tracking:</strong> No continuous satellite tracking or live moving-map telemetry feeds over cellular networks.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141720] p-2 rounded border border-white/5">
                        <span className="font-mono text-red-400 font-bold">✕</span>
                        <span><strong>No Ratings or Social Feeds:</strong> No merchant reviews, star ratings, or public consumer marketplace features.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                    Strict academic modeling perimeter
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}
