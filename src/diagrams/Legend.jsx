import React from 'react';

/**
 * Reusable Legend for Gane & Sarson DFD slides (Neon Velocity Theme).
 * Glassmorphic HUD with Geist Mono technical uppercase labels.
 */
export default function Legend({ className = "" }) {
  return (
    <div
      className={`bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-7 text-xs select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="font-mono font-bold text-[#BFFF00] tracking-widestTechnical uppercase text-[11px]">
          // GANE &amp; SARSON SPEC:
        </span>
      </div>

      {/* External Entity */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-3.5 border-2 border-white/60 bg-white/10" />
        <span className="font-headline font-bold text-white uppercase tracking-tight text-xs">
          External Entity <span className="text-zinc-500 font-mono text-[10px]">(SOURCE/SINK)</span>
        </span>
      </div>

      {/* Process */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-3.5 rounded border-2 border-[#BFFF00] bg-lime-950/60 relative overflow-hidden">
          <div className="h-1 bg-[#BFFF00]" />
        </div>
        <span className="font-headline font-bold text-white uppercase tracking-tight text-xs">
          Process <span className="text-zinc-500 font-mono text-[10px]">(VERB PHRASE)</span>
        </span>
      </div>

      {/* Data Store */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-3.5 border-y-2 border-l-2 border-amber-400 bg-amber-950/60 relative">
          <div className="w-1 h-full bg-amber-400 border-r border-amber-400" />
        </div>
        <span className="font-headline font-bold text-white uppercase tracking-tight text-xs">
          Data Store <span className="text-zinc-500 font-mono text-[10px]">(OPEN RECTANGLE)</span>
        </span>
      </div>

      {/* Data Flow */}
      <div className="flex items-center gap-2">
        <div className="w-5 flex items-center">
          <div className="h-[2px] bg-[#BFFF00] flex-1" />
          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-[#BFFF00]" />
        </div>
        <span className="font-headline font-bold text-white uppercase tracking-tight text-xs">
          Data Flow <span className="text-zinc-500 font-mono text-[10px]">(NOUN PHRASE)</span>
        </span>
      </div>
    </div>
  );
}
