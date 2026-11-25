import React from 'react';
import { ArrowRight, Layers, Database, ShieldCheck } from 'lucide-react';

/**
 * Slide 1 Center Content: DFD Baseline Summary & System Recap
 * High-level summary of the approved Context Diagram & Level 0 DFD:
 * Focuses on the 3 External Entities, 6 Processes, and 5 Data Stores
 * that serve as the input for the ERD transformation.
 */
export default function SlideDfdSummary() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center p-6 select-none animate-fadeIn">
      {/* Top Headline */}
      <div className="text-center max-w-3xl mx-auto pt-2">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2">
          APPROVED SYSTEM BASELINE // RECAP
        </span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tight">
          Context Boundary &amp; Level 0 DFD Summary
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-2xl mx-auto">
          SupplyLink coordinates on-demand retail ordering and route-clustered dispatch. Here is the operational architecture that feeds our data model:
        </p>
      </div>

      {/* 3 Balanced Summary Pillars */}
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto w-full my-auto">
        {/* Pillar 1: Context Scope (External Entities) */}
        <div className="bg-[#1e1e22] border border-[#35353c] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d2d32]">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase">
                01. CONTEXT SCOPE
              </span>
              <span className="text-[10px] bg-[#28282d] px-2 py-0.5 rounded text-zinc-300 font-mono">
                3 Entities / 18 Flows
              </span>
            </div>
            <h3 className="font-headline font-black text-lg text-white uppercase mb-2">
              External Boundaries
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Three external source/sink actors interact with <strong>Process 0: SupplyLink</strong>:
            </p>
            <div className="space-y-2 text-xs">
              <div className="bg-[#141416] p-2.5 rounded-lg border border-[#2d2d32] text-zinc-200">
                <strong className="text-white block font-headline">MERCHANT (Retailer)</strong>
                <span className="text-[11px] text-zinc-400">Submits stock counts &amp; restock orders; receives low-stock alerts.</span>
              </div>
              <div className="bg-[#141416] p-2.5 rounded-lg border border-[#2d2d32] text-zinc-200">
                <strong className="text-white block font-headline">SUPPLIER (Wholesaler)</strong>
                <span className="text-[11px] text-zinc-400">Manages catalog; accepts orders; dispatches route batches.</span>
              </div>
              <div className="bg-[#141416] p-2.5 rounded-lg border border-[#2d2d32] text-zinc-200">
                <strong className="text-white block font-headline">ADMIN (System Governance)</strong>
                <span className="text-[11px] text-zinc-400">Approves user accounts; inspects operational reports.</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono uppercase mt-4 block">
            Fixed System Boundary
          </span>
        </div>

        {/* Pillar 2: Functional Core (6 Processes) */}
        <div className="bg-[#1e1e22] border border-[#35353c] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d2d32]">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase">
                02. FUNCTIONAL CORE
              </span>
              <span className="text-[10px] bg-[#28282d] px-2 py-0.5 rounded text-zinc-300 font-mono">
                6 Level 0 Processes
              </span>
            </div>
            <h3 className="font-headline font-black text-lg text-white uppercase mb-2">
              Operational Actions
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Decomposes Process 0 into 6 balanced business functions:
            </p>
            <div className="space-y-1.5 text-xs font-body text-zinc-300">
              <div className="bg-[#141416] px-3 py-2 rounded-lg border border-[#2d2d32] flex items-center justify-between">
                <span className="font-headline font-bold text-white">1.0 Manage Users</span>
                <span className="text-[10px] text-zinc-500 font-mono">Onboarding</span>
              </div>
              <div className="bg-[#141416] px-3 py-2 rounded-lg border border-[#2d2d32] flex items-center justify-between">
                <span className="font-headline font-bold text-white">2.0 Manage Catalog</span>
                <span className="text-[10px] text-zinc-500 font-mono">Products</span>
              </div>
              <div className="bg-[#141416] px-3 py-2 rounded-lg border border-[#2d2d32] flex items-center justify-between">
                <span className="font-headline font-bold text-white">3.0 Manage Stock</span>
                <span className="text-[10px] text-zinc-500 font-mono">Inventory</span>
              </div>
              <div className="bg-[#141416] px-3 py-2 rounded-lg border border-[#2d2d32] flex items-center justify-between">
                <span className="font-headline font-bold text-white">4.0 Handle Requests</span>
                <span className="text-[10px] text-zinc-500 font-mono">Orders</span>
              </div>
              <div className="bg-[#141416] px-3 py-2 rounded-lg border border-[#2d2d32] flex items-center justify-between">
                <span className="font-headline font-bold text-white">5.0 Plan Deliveries</span>
                <span className="text-[10px] text-zinc-500 font-mono">Batching</span>
              </div>
              <div className="bg-[#141416] px-3 py-2 rounded-lg border border-[#2d2d32] flex items-center justify-between">
                <span className="font-headline font-bold text-white">6.0 Generate Reports</span>
                <span className="text-[10px] text-zinc-500 font-mono">Analytics</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono uppercase mt-4 block">
            Becomes Relationship Verbs
          </span>
        </div>

        {/* Pillar 3: Data at Rest (5 Data Stores) */}
        <div className="bg-[#1e1e22] border-2 border-[#52525b] rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
          <div className="absolute -top-3 right-4 bg-white text-black px-2.5 py-0.5 rounded text-[10px] font-headline font-black uppercase tracking-wider">
            ERD FOUNDATION
          </div>
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2d2d32]">
              <span className="text-xs font-mono font-bold text-white uppercase">
                03. DATA AT REST
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-mono font-bold">
                Stores D1–D5
              </span>
            </div>
            <h3 className="font-headline font-black text-lg text-white uppercase mb-2">
              Persistent Stores
            </h3>
            <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
              These 5 persistent stores are the <strong>direct input</strong> to our conceptual data modeling:
            </p>
            <div className="space-y-2 text-xs">
              <div className="bg-[#141416] p-2 rounded-lg border border-[#35353c] flex items-center justify-between">
                <div>
                  <span className="font-headline font-black text-white block">D1 Users &amp; Profiles</span>
                  <span className="text-[10px] text-zinc-400">Stores, warehouses, credentials</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              </div>
              <div className="bg-[#141416] p-2 rounded-lg border border-[#35353c] flex items-center justify-between">
                <div>
                  <span className="font-headline font-black text-white block">D2 Products</span>
                  <span className="text-[10px] text-zinc-400">Supplier catalog items</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              </div>
              <div className="bg-[#141416] p-2 rounded-lg border border-[#35353c] flex items-center justify-between">
                <div>
                  <span className="font-headline font-black text-white block">D3 Inventory</span>
                  <span className="text-[10px] text-zinc-400">Merchant stock levels &amp; thresholds</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              </div>
              <div className="bg-[#141416] p-2 rounded-lg border border-[#35353c] flex items-center justify-between">
                <div>
                  <span className="font-headline font-black text-white block">D4 Requests</span>
                  <span className="text-[10px] text-zinc-400">Orders &amp; line items</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              </div>
              <div className="bg-[#141416] p-2 rounded-lg border border-[#35353c] flex items-center justify-between">
                <div>
                  <span className="font-headline font-black text-white block">D5 Delivery Batches</span>
                  <span className="text-[10px] text-zinc-400">Geoclustered routes</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              </div>
            </div>
          </div>
          <span className="text-[10px] text-white font-semibold font-mono uppercase mt-4 block">
            Directly Yields 8 Conceptual Entities
          </span>
        </div>
      </div>
    </div>
  );
}
