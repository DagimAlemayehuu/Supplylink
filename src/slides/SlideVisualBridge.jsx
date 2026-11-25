import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

/**
 * Slide 1: Pure Visual DFD-to-ERD Transformation Schematic
 * Fully graphical diagrammatic representation:
 * Left: Gane & Sarson DFD Shapes
 * Center: Transformation Vectors
 * Right: Conceptual ERD Shapes (Zero FKs, Underlined PK, Associative Entity)
 */
export default function SlideVisualBridge({ activeStep = 0 }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 select-none animate-fadeIn">
      {/* STEP 0: FULL SCHEMATIC (Left DFD Shapes -> Center Arrows -> Right ERD Shapes) */}
      {activeStep === 0 && (
        <div className="w-full h-full flex flex-col justify-between max-w-6xl py-2">
          {/* Visual Header */}
          <div className="flex items-center justify-between border-b border-[#2d2d32] pb-2">
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
              DFD LEVEL 0 SHAPES (INPUT)
            </span>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest bg-[#28282d] px-3 py-1 rounded-lg border border-[#3f3f46]">
              TRANSFORMATION LAWS
            </span>
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
              CONCEPTUAL ERD SHAPES (OUTPUT)
            </span>
          </div>

          {/* Central 3-Row Visual Transformation Canvas */}
          <div className="grid grid-rows-3 gap-4 flex-1 my-3">
            {/* ROW 1: Data Stores -> Core Entities */}
            <div className="bg-[#1c1c1f] border border-[#35353c] rounded-2xl p-4 flex items-center justify-between shadow-xl">
              {/* DFD Data Store Shape (Open Rectangle) */}
              <div className="w-72 flex items-center gap-3">
                <div className="w-16 h-12 border-y-2 border-l-2 border-white/60 bg-[#25252a] relative flex items-center justify-start flex-shrink-0">
                  <div className="w-5 h-full bg-[#35353c] border-r-2 border-white/60 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                    D1-5
                  </div>
                  <div className="pl-2 text-[9px] font-mono text-zinc-400">STORE</div>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">Data Stores</span>
                  <span className="text-sm font-headline font-bold text-white uppercase">D1 through D5</span>
                  <span className="text-[11px] text-zinc-400 block font-body">Data at Rest in System</span>
                </div>
              </div>

              {/* Transformation Vector */}
              <div className="flex-1 px-6 flex flex-col items-center">
                <span className="text-[11px] font-mono font-bold text-zinc-300 uppercase mb-1">
                  Persistent Storage ➔ Entity Identity
                </span>
                <div className="w-full flex items-center">
                  <div className="h-0.5 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 flex-1" />
                  <ArrowRight size={18} className="text-white mx-1 flex-shrink-0" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono mt-1">1:1 Structural Mapping</span>
              </div>

              {/* ERD Entity Shape (Sharp Box with Underlined PK) */}
              <div className="w-72 flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white uppercase block">Conceptual Entity</span>
                  <span className="text-sm font-headline font-black text-white uppercase">PRODUCT / INVENTORY</span>
                  <span className="text-[11px] text-zinc-400 block font-mono"><u>Product ID</u> (Underlined PK)</span>
                </div>
                <div className="w-16 h-14 rounded-lg border-2 border-white/80 bg-[#25252a] flex flex-col justify-between p-1.5 flex-shrink-0 shadow-lg">
                  <div className="w-full bg-[#38383e] h-3 rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
                    ENTITY
                  </div>
                  <div className="h-0.5 bg-white/40 w-3/4 mx-auto" />
                  <div className="h-0.5 bg-zinc-600 w-1/2 mx-auto" />
                </div>
              </div>
            </div>

            {/* ROW 2: Processes -> Relationship Diamonds */}
            <div className="bg-[#1c1c1f] border border-[#35353c] rounded-2xl p-4 flex items-center justify-between shadow-xl">
              {/* DFD Process Shape (Rounded Rect with Top Bar) */}
              <div className="w-72 flex items-center gap-3">
                <div className="w-16 h-12 rounded-lg border-2 border-white/60 bg-[#25252a] overflow-hidden flex flex-col flex-shrink-0">
                  <div className="w-full h-3.5 bg-[#3a3a40] border-b border-white/40 flex items-center justify-center text-[9px] font-mono font-bold text-white">
                    4.0 / 5.0
                  </div>
                  <div className="flex-1 flex items-center justify-center text-[8px] font-mono text-zinc-400 uppercase">
                    ACTION
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">DFD Processes</span>
                  <span className="text-sm font-headline font-bold text-white uppercase">4.0 &amp; 5.0 Operations</span>
                  <span className="text-[11px] text-zinc-400 block font-body">Data in Motion / Verbs</span>
                </div>
              </div>

              {/* Transformation Vector */}
              <div className="flex-1 px-6 flex flex-col items-center">
                <span className="text-[11px] font-mono font-bold text-zinc-300 uppercase mb-1">
                  Actions Become Active Verb Diamonds
                </span>
                <div className="w-full flex items-center">
                  <div className="h-0.5 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 flex-1" />
                  <ArrowRight size={18} className="text-white mx-1 flex-shrink-0" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono mt-1">Processes are NEVER Entities</span>
              </div>

              {/* ERD Relationship Diamond Shape */}
              <div className="w-72 flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white uppercase block">Relationship Diamond</span>
                  <span className="text-sm font-headline font-black text-white uppercase">places / consolidates</span>
                  <span className="text-[11px] text-zinc-400 block font-mono">1 : 0..N Cardinality</span>
                </div>
                <div className="w-12 h-12 rotate-45 border-2 border-white/80 bg-[#25252a] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="-rotate-45 text-[8px] font-mono font-bold text-white uppercase">
                    VERB
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 3: External Actors -> Governance & Normalization */}
            <div className="bg-[#1c1c1f] border border-[#35353c] rounded-2xl p-4 flex items-center justify-between shadow-xl">
              {/* DFD External Entity Shape (Sharp Rectangle) */}
              <div className="w-72 flex items-center gap-3">
                <div className="w-16 h-12 border-2 border-white/60 bg-[#25252a] flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-mono font-bold text-white uppercase">ACTOR</span>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">External Entities</span>
                  <span className="text-sm font-headline font-bold text-white uppercase">Merchant &amp; Supplier</span>
                  <span className="text-[11px] text-zinc-400 block font-body">Source &amp; Sink Boundaries</span>
                </div>
              </div>

              {/* Transformation Vector */}
              <div className="flex-1 px-6 flex flex-col items-center">
                <span className="text-[11px] font-mono font-bold text-zinc-300 uppercase mb-1">
                  Tracked Profiles + M:N Associative Entity
                </span>
                <div className="w-full flex items-center">
                  <div className="h-0.5 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 flex-1" />
                  <ArrowRight size={18} className="text-white mx-1 flex-shrink-0" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono mt-1">REQUEST ITEM resolves M:N</span>
              </div>

              {/* Associative Entity Shape (Dashed Outer Border) */}
              <div className="w-72 flex items-center gap-3 justify-end">
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white uppercase block">Associative Entity</span>
                  <span className="text-sm font-headline font-black text-white uppercase">REQUEST ITEM</span>
                  <span className="text-[11px] text-zinc-400 block font-mono">1:N ── Item ── N:1</span>
                </div>
                <div className="w-16 h-14 rounded-lg border-2 border-dashed border-white/80 bg-[#25252a] flex flex-col justify-between p-1.5 flex-shrink-0 shadow-lg">
                  <div className="w-full bg-[#38383e] h-3 rounded-sm flex items-center justify-center text-[7px] font-bold text-white uppercase">
                    ASSOC
                  </div>
                  <div className="h-0.5 bg-white/40 w-3/4 mx-auto" />
                  <div className="h-0.5 bg-zinc-600 w-1/2 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: ZERO FOREIGN KEYS (Visual Contrast Diagram) */}
      {activeStep === 1 && (
        <div className="w-full h-full flex flex-col justify-between max-w-5xl py-2">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-1">
              ACADEMIC EVALUATOR SAFEGUARD
            </span>
            <h2 className="text-2xl lg:text-3xl font-headline font-black text-white uppercase tracking-tight">
              Why Foreign Keys (FK) are Banned in Conceptual ERDs
            </h2>
          </div>

          {/* Visual Side-by-Side Diagram */}
          <div className="grid grid-cols-2 gap-8 my-auto">
            {/* Wrong Relational Table */}
            <div className="bg-[#1c1c1f] border-2 border-[#4a2e2e] rounded-2xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3a2626]">
                <div className="flex items-center gap-2 text-red-400">
                  <X size={18} />
                  <span className="font-headline font-bold text-sm uppercase">Physical Relational Schema</span>
                </div>
                <span className="text-[10px] font-mono bg-red-950/60 text-red-300 px-2 py-0.5 rounded border border-red-900">
                  WRONG FOR CONCEPTUAL
                </span>
              </div>

              {/* Table Wireframe Visual */}
              <div className="border border-[#382626] rounded-xl overflow-hidden font-mono text-xs">
                <div className="bg-[#2a1b1b] p-2.5 font-bold text-white border-b border-[#382626]">
                  TABLE: REQUEST
                </div>
                <div className="p-3 space-y-2 bg-[#171212]">
                  <div className="text-zinc-300 flex justify-between">
                    <span>request_id</span>
                    <span className="text-white font-bold">PRIMARY KEY</span>
                  </div>
                  <div className="text-red-400 line-through bg-red-950/40 p-1 rounded flex justify-between">
                    <span>merchant_id</span>
                    <span>FOREIGN KEY ✗</span>
                  </div>
                  <div className="text-red-400 line-through bg-red-950/40 p-1 rounded flex justify-between">
                    <span>supplier_id</span>
                    <span>FOREIGN KEY ✗</span>
                  </div>
                  <div className="text-zinc-500 flex justify-between">
                    <span>order_status</span>
                    <span>VARCHAR(20)</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-red-400/90 mt-4 leading-relaxed">
                Professors penalize this: foreign keys are SQL implementation artifacts, not conceptual models.
              </p>
            </div>

            {/* Correct Conceptual Entity */}
            <div className="bg-[#1c1c1f] border-2 border-[#2e4a2e] rounded-2xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#263a26]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check size={18} />
                  <span className="font-headline font-bold text-sm uppercase">Pure Conceptual Entity</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded border border-emerald-900">
                  ACADEMIC STANDARD
                </span>
              </div>

              {/* Conceptual Entity Wireframe Visual */}
              <div className="border border-[#263826] rounded-xl overflow-hidden font-mono text-xs">
                <div className="bg-[#1b2a1b] p-2.5 font-bold text-white border-b border-[#263826]">
                  ENTITY: REQUEST
                </div>
                <div className="p-3 space-y-2 bg-[#121712]">
                  <div className="text-white font-bold underline flex justify-between">
                    <span><u>Request ID</u></span>
                    <span className="text-emerald-400 font-semibold">(Identifier / PK)</span>
                  </div>
                  <div className="text-zinc-300">• Request Type</div>
                  <div className="text-zinc-300">• Order Status</div>
                  <div className="text-emerald-400/80 pt-1 text-[11px] italic">
                    Association represented by relationship lines — ZERO Foreign Keys!
                  </div>
                </div>
              </div>
              <p className="text-xs text-emerald-400 mt-4 leading-relaxed">
                100% compliant: relationship lines directly define associations without relational column clutter.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: M:N RESOLUTION (Linear Visual Bridge) */}
      {activeStep === 2 && (
        <div className="w-full h-full flex flex-col justify-between max-w-5xl py-2">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-1">
              NORMALIZATION INVARIANT
            </span>
            <h2 className="text-2xl lg:text-3xl font-headline font-black text-white uppercase tracking-tight">
              Resolving Many-to-Many via Associative Entity
            </h2>
          </div>

          {/* Visual Architecture */}
          <div className="my-auto w-full bg-[#1c1c1f] border border-[#35353c] rounded-2xl p-8 shadow-2xl flex items-center justify-between">
            {/* Entity 1: Request */}
            <div className="w-64 bg-[#25252a] p-5 rounded-xl border border-[#3f3f46] text-center shadow-lg">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">1 Order Header</span>
              <span className="text-lg font-headline font-black text-white uppercase block mt-1">REQUEST</span>
              <div className="mt-2 text-xs font-mono text-zinc-300">
                <span className="underline"><u>Request ID</u></span> (PK)
              </div>
            </div>

            {/* Connecting Vector 1 */}
            <div className="flex-1 px-4 flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-white mb-1">1 : 1..N</span>
              <div className="w-full h-1 bg-white/40 rounded-full relative">
                <div className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-[#1c1c1f] px-2 text-[10px] font-mono font-bold text-zinc-400 uppercase">
                  contains
                </div>
              </div>
            </div>

            {/* Associative Entity */}
            <div className="w-72 bg-[#2d2d33] p-6 rounded-2xl border-2 border-dashed border-white/80 text-center shadow-2xl">
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono font-bold text-white uppercase">
                ASSOCIATIVE ENTITY
              </span>
              <span className="text-xl font-headline font-black text-white uppercase block mt-2">
                REQUEST ITEM
              </span>
              <div className="mt-2 text-xs font-mono text-zinc-300 space-y-0.5">
                <div><u>Item ID</u> (PK)</div>
                <div className="text-zinc-400">• Quantity Requested</div>
                <div className="text-zinc-400">• Handling Notes</div>
              </div>
            </div>

            {/* Connecting Vector 2 */}
            <div className="flex-1 px-4 flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-white mb-1">0..N : 1</span>
              <div className="w-full h-1 bg-white/40 rounded-full relative">
                <div className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-[#1c1c1f] px-2 text-[10px] font-mono font-bold text-zinc-400 uppercase">
                  ordered in
                </div>
              </div>
            </div>

            {/* Entity 2: Product */}
            <div className="w-64 bg-[#25252a] p-5 rounded-xl border border-[#3f3f46] text-center shadow-lg">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">Catalog Item</span>
              <span className="text-lg font-headline font-black text-white uppercase block mt-1">PRODUCT</span>
              <div className="mt-2 text-xs font-mono text-zinc-300">
                <span className="underline"><u>Product ID</u></span> (PK)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
