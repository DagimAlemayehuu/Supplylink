import React from 'react';

/**
 * Reusable Legend for Gane & Sarson DFD slides (Industrial Noir Edition).
 */
export default function Legend({ className = "" }) {
  return (
    <div
      className={`bg-[#101216]/95 border border-white/10 rounded-lg px-4 py-2 shadow-industrial-md flex items-center gap-6 text-xs select-none ${className}`}
    >
      <span className="font-mono font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
        GANE & SARSON:
      </span>

      {/* External Entity */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-3.5 border border-sky-400 bg-sky-950/50 rounded-none" />
        <span className="font-medium text-zinc-200">
          Entity <span className="text-zinc-500">(Source / Sink)</span>
        </span>
      </div>

      {/* Process */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-3.5 rounded-sm border border-[#dc2626] bg-red-950/60 relative overflow-hidden">
          <div className="h-1 bg-[#dc2626]" />
        </div>
        <span className="font-medium text-zinc-200">
          Process <span className="text-zinc-500">(Verb Phrase)</span>
        </span>
      </div>

      {/* Data Store */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-3.5 border-y border-l border-amber-400 bg-amber-950/60 relative">
          <div className="w-1 h-full bg-amber-400/40 border-r border-amber-400" />
        </div>
        <span className="font-medium text-zinc-200">
          Data Store <span className="text-zinc-500">(Open Rect)</span>
        </span>
      </div>

      {/* Data Flow */}
      <div className="flex items-center gap-2">
        <div className="w-5 flex items-center">
          <div className="h-[1.5px] bg-slate-300 flex-1" />
          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-slate-300" />
        </div>
        <span className="font-medium text-zinc-200">
          Data Flow <span className="text-zinc-500">(Noun Phrase)</span>
        </span>
      </div>
    </div>
  );
}
