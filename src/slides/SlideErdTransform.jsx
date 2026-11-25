import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

/**
 * Slide 3 Center Content: DFD to ERD Transformation Bridge
 * Pure dynamic center: large typography, zero icons/stars, zero duplicate headers or footers.
 */
export default function SlideErdTransform({ activeTab = 0 }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 select-none animate-fadeIn">
      {/* STEP 0: Data Stores -> Entities */}
      {activeTab === 0 && (
        <div className="w-full max-w-5xl flex flex-col justify-between h-full py-4">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2">
              RULE 01 / PERSISTENCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tight">
              Data Stores (Data at Rest) ➔ Conceptual Entities
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
              Any concept retained in persistent storage across transactions becomes a primary Entity.
            </p>
          </div>

          {/* 5 Clean Store-to-Entity Cards */}
          <div className="grid grid-cols-5 gap-4 my-auto">
            {[
              { store: "D1 USERS", label: "Users & Profiles", entity: "ADMIN, MERCHANT, SUPPLIER" },
              { store: "D2 PRODUCTS", label: "Supplier Catalog", entity: "PRODUCT" },
              { store: "D3 INVENTORY", label: "Store Stock Ledger", entity: "INVENTORY" },
              { store: "D4 REQUESTS", label: "Restock Orders", entity: "REQUEST, REQUEST ITEM" },
              { store: "D5 BATCHES", label: "Route Groupings", entity: "DELIVERY BATCH" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1e1e22] border border-[#35353c] rounded-2xl p-5 flex flex-col justify-between text-center shadow-xl"
              >
                <span className="text-xs font-mono font-bold text-zinc-400 block pb-2 border-b border-[#2d2d32]">
                  {item.store}
                </span>
                <div className="my-4">
                  <span className="text-xs text-zinc-400 block">{item.label}</span>
                  <div className="w-6 h-6 rounded-full bg-[#28282d] border border-[#3f3f46] flex items-center justify-center mx-auto my-3 text-white">
                    ➔
                  </div>
                  <span className="text-sm font-headline font-black text-white block uppercase tracking-tight">
                    {item.entity}
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono uppercase">100% Balanced</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 1: The Zero Foreign Key Invariant */}
      {activeTab === 1 && (
        <div className="w-full max-w-4xl flex flex-col justify-between h-full py-4">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2">
              RULE 02 / CONCEPTUAL PURITY
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tight">
              Foreign Keys (FK) are BANNED in Conceptual ERDs
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
              Foreign keys are relational implementation columns. In conceptual modeling, relationships represent connections.
            </p>
          </div>

          {/* Clean Side-by-Side Comparison */}
          <div className="grid grid-cols-2 gap-8 my-auto">
            {/* Relational Table Mistake */}
            <div className="bg-[#1e1e22] border border-[#3a3030] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#3a3030] text-zinc-400">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="font-headline font-bold text-base uppercase text-white">
                    Physical Relational Table
                  </span>
                </div>
                <div className="bg-[#141416] p-4 rounded-xl border border-[#2d2d32] font-mono text-xs space-y-2 text-zinc-300">
                  <div className="text-white font-bold">TABLE: REQUEST</div>
                  <div className="text-zinc-400">request_id INT PRIMARY KEY</div>
                  <div className="text-red-400 line-through">merchant_id INT FOREIGN KEY ✗</div>
                  <div className="text-red-400 line-through">supplier_id INT FOREIGN KEY ✗</div>
                  <div className="text-zinc-500">order_status VARCHAR(20)</div>
                </div>
              </div>
              <p className="text-xs text-zinc-500 italic mt-4">
                Trap: Confusing logical/physical database schema with a conceptual ERD.
              </p>
            </div>

            {/* Pure Conceptual Correct Form */}
            <div className="bg-[#1e1e22] border border-[#303830] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#303830] text-zinc-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-headline font-bold text-base uppercase text-white">
                    Conceptual Entity (Correct Form)
                  </span>
                </div>
                <div className="bg-[#141416] p-4 rounded-xl border border-[#2d2d32] font-mono text-xs space-y-2 text-zinc-300">
                  <div className="text-white font-bold">ENTITY: REQUEST</div>
                  <div className="text-white underline font-bold"><u>Request ID</u> (Identifier / PK)</div>
                  <div className="text-zinc-300">• Request Type</div>
                  <div className="text-zinc-300">• Order Status</div>
                  <div className="text-zinc-500 italic">No FKs — Associations shown by relationship lines!</div>
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-semibold mt-4">
                Academic Standard: Only unique identifiers are declared and underlined.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: M:N Decomposition */}
      {activeTab === 2 && (
        <div className="w-full max-w-4xl flex flex-col justify-between h-full py-4">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2">
              RULE 03 / NORMALIZATION
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tight">
              Resolving Many-to-Many (M:N) Relationships
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
              A Request contains many Products; a Product appears in many Requests. We decompose this via an Associative Entity.
            </p>
          </div>

          {/* Clean Linear Transformation */}
          <div className="my-auto w-full bg-[#1e1e22] border border-[#35353c] rounded-2xl p-8 shadow-2xl flex items-center justify-between">
            {/* Request Entity */}
            <div className="w-56 text-center bg-[#141416] p-5 rounded-xl border border-[#2d2d32]">
              <span className="text-[11px] text-zinc-500 font-mono uppercase block">1 Order Header</span>
              <span className="font-headline font-black text-white text-lg uppercase block mt-1">REQUEST</span>
              <span className="text-xs text-zinc-300 underline font-semibold block mt-1"><u>Request ID</u></span>
            </div>

            {/* 1 : N Link */}
            <div className="flex-1 flex flex-col items-center px-4">
              <span className="text-xs font-mono font-bold text-zinc-300 mb-1">1 : 1..N</span>
              <div className="w-full h-0.5 bg-[#45454e] relative">
                <div className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-[#1e1e22] px-2 text-[10px] font-headline font-bold text-zinc-400 uppercase">
                  contains
                </div>
              </div>
            </div>

            {/* Associative Entity */}
            <div className="w-64 text-center bg-[#25252a] p-5 rounded-2xl border-2 border-dashed border-[#71717a] shadow-xl">
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono font-bold text-zinc-300 uppercase">
                Associative Entity
              </span>
              <span className="font-headline font-black text-white text-lg uppercase block mt-2">
                REQUEST ITEM
              </span>
              <div className="text-xs text-zinc-300 mt-2 space-y-0.5 font-mono">
                <div><u>Item ID</u> (PK)</div>
                <div className="text-zinc-400">• Quantity Requested</div>
                <div className="text-zinc-400">• Handling Notes</div>
              </div>
            </div>

            {/* N : 1 Link */}
            <div className="flex-1 flex flex-col items-center px-4">
              <span className="text-xs font-mono font-bold text-zinc-300 mb-1">0..N : 1</span>
              <div className="w-full h-0.5 bg-[#45454e] relative">
                <div className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-[#1e1e22] px-2 text-[10px] font-headline font-bold text-zinc-400 uppercase">
                  ordered in
                </div>
              </div>
            </div>

            {/* Product Entity */}
            <div className="w-56 text-center bg-[#141416] p-5 rounded-xl border border-[#2d2d32]">
              <span className="text-[11px] text-zinc-500 font-mono uppercase block">Catalog Item</span>
              <span className="font-headline font-black text-white text-lg uppercase block mt-1">PRODUCT</span>
              <span className="text-xs text-zinc-300 underline font-semibold block mt-1"><u>Product ID</u></span>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Processes Define Relationships */}
      {activeTab === 3 && (
        <div className="w-full max-w-4xl flex flex-col justify-between h-full py-4">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2">
              RULE 04 / RELATIONSHIPS
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tight">
              DFD Processes Are NEVER Entities
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
              Processes represent operational actions. Their verbs become the relationship diamonds linking entities.
            </p>
          </div>

          {/* 3 Clean Action-to-Diamond Cards */}
          <div className="grid grid-cols-3 gap-6 my-auto">
            <div className="bg-[#1e1e22] border border-[#35353c] rounded-2xl p-6 text-center flex flex-col justify-between shadow-xl">
              <span className="text-xs font-mono text-zinc-500 uppercase">DFD Process 1.0</span>
              <div className="my-4">
                <span className="text-sm font-bold text-white block">Manage Users</span>
                <div className="w-6 h-6 rounded-full bg-[#28282d] border border-[#3f3f46] flex items-center justify-center mx-auto my-3 text-white">
                  ➔
                </div>
                <div className="w-20 h-10 mx-auto rotate-45 border-2 border-white/60 bg-[#252528] flex items-center justify-center">
                  <span className="-rotate-45 text-[11px] font-bold text-white uppercase">approves</span>
                </div>
              </div>
              <span className="text-xs text-zinc-400 font-body">ADMIN ➔ MERCHANT / SUPPLIER</span>
            </div>

            <div className="bg-[#1e1e22] border border-[#35353c] rounded-2xl p-6 text-center flex flex-col justify-between shadow-xl">
              <span className="text-xs font-mono text-zinc-500 uppercase">DFD Process 4.0</span>
              <div className="my-4">
                <span className="text-sm font-bold text-white block">Handle Requests</span>
                <div className="w-6 h-6 rounded-full bg-[#28282d] border border-[#3f3f46] flex items-center justify-center mx-auto my-3 text-white">
                  ➔
                </div>
                <div className="w-20 h-10 mx-auto rotate-45 border-2 border-white/60 bg-[#252528] flex items-center justify-center">
                  <span className="-rotate-45 text-[11px] font-bold text-white uppercase">places</span>
                </div>
              </div>
              <span className="text-xs text-zinc-400 font-body">MERCHANT ➔ REQUEST</span>
            </div>

            <div className="bg-[#1e1e22] border border-[#35353c] rounded-2xl p-6 text-center flex flex-col justify-between shadow-xl">
              <span className="text-xs font-mono text-zinc-500 uppercase">DFD Process 5.0</span>
              <div className="my-4">
                <span className="text-sm font-bold text-white block">Plan Deliveries</span>
                <div className="w-6 h-6 rounded-full bg-[#28282d] border border-[#3f3f46] flex items-center justify-center mx-auto my-3 text-white">
                  ➔
                </div>
                <div className="w-20 h-10 mx-auto rotate-45 border-2 border-white/60 bg-[#252528] flex items-center justify-center">
                  <span className="-rotate-45 text-[10px] font-bold text-white uppercase">consolidates</span>
                </div>
              </div>
              <span className="text-xs text-zinc-400 font-body">DELIVERY BATCH ➔ REQUEST</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
