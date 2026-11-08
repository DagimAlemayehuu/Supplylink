import React from 'react';

/**
 * Standard DFD Legend (Monochrome)
 * Uses grey shapes/borders and pure white text.
 */
export default function Legend({ className = "" }) {
  return (
    <div
      className={`bg-[#222225] border border-[#38383e] rounded-xl px-5 py-2.5 shadow-lg flex items-center gap-6 select-none ${className}`}
    >
      {/* External Entity */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-4 border-2 border-[#71717a] bg-[#252528]" />
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          External Entity
        </span>
      </div>

      {/* Process */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-4 rounded border-2 border-[#80808a] bg-[#27272b] relative overflow-hidden">
          <div className="h-1.5 bg-[#38383e] border-b border-[#80808a]" />
        </div>
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Process
        </span>
      </div>

      {/* Data Store */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-4 border-y-2 border-l-2 border-[#80808a] bg-[#232326] relative">
          <div className="w-2 h-full bg-[#333338] border-r-2 border-[#80808a]" />
        </div>
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Data Store
        </span>
      </div>

      {/* Data Flow */}
      <div className="flex items-center gap-2">
        <div className="w-6 flex items-center">
          <div className="h-[2px] bg-[#767682] flex-1" />
          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#767682]" />
        </div>
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Data Flow
        </span>
      </div>
    </div>
  );
}
