import React from 'react';

/**
 * Reusable Legend for Gane & Sarson DFD slides (Red Noir Theme).
 */
export default function Legend({ className = "" }) {
  return (
    <div
      className={`bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3.5 shadow-2xl flex items-center gap-8 text-base select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-[#ef233c] text-xs uppercase tracking-widest font-manrope">
          Gane & Sarson Legend:
        </span>
      </div>

      {/* External Entity */}
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-4 border-2 border-cyan-400 bg-cyan-950/60" />
        <span className="font-bold text-white text-sm">
          External Entity <span className="text-zinc-400 font-normal">(Source/Sink)</span>
        </span>
      </div>

      {/* Process */}
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-4 rounded border-2 border-[#ef233c] bg-red-950/60 relative overflow-hidden">
          <div className="h-1 bg-[#ef233c]" />
        </div>
        <span className="font-bold text-white text-sm">
          Process <span className="text-zinc-400 font-normal">(Verb Phrase)</span>
        </span>
      </div>

      {/* Data Store */}
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-4 border-y-2 border-l-2 border-amber-400 bg-amber-950/60 relative">
          <div className="w-1.5 h-full bg-amber-400/40 border-r border-amber-400" />
        </div>
        <span className="font-bold text-white text-sm">
          Data Store <span className="text-zinc-400 font-normal">(Open Rectangle)</span>
        </span>
      </div>

      {/* Data Flow */}
      <div className="flex items-center gap-2.5">
        <div className="w-6 flex items-center">
          <div className="h-[2px] bg-zinc-400 flex-1" />
          <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-b-[3.5px] border-b-transparent border-l-[6px] border-l-zinc-400" />
        </div>
        <span className="font-bold text-white text-sm">
          Data Flow <span className="text-zinc-400 font-normal">(Noun)</span>
        </span>
      </div>
    </div>
  );
}
