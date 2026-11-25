import React from 'react';

/**
 * Standard Conceptual ERD Legend (Monochrome Style)
 * Strictly highlights conceptual notation elements.
 */
export default function ErdLegend({ className = "" }) {
  return (
    <div
      className={`bg-[#202023] border border-[#38383e] rounded-xl px-5 py-2.5 shadow-lg flex items-center gap-6 select-none ${className}`}
    >
      {/* Regular Entity */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-4 border-2 border-[#80808a] bg-[#29292d] rounded-sm" />
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Entity (Singular Noun)
        </span>
      </div>

      {/* Associative Entity */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-4 border-2 border-dashed border-[#a1a1aa] bg-[#29292d] rounded-sm" />
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Associative Entity (M:N)
        </span>
      </div>

      {/* Relationship Diamond */}
      <div className="flex items-center gap-2">
        <div className="w-3.5 h-3.5 rotate-45 border-2 border-[#80808a] bg-[#232326]" />
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Relationship (Active Verb)
        </span>
      </div>

      {/* Primary Key / Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-headline font-bold text-xs underline text-white">
          <u>ID</u>
        </span>
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Identifier / PK
        </span>
      </div>

      {/* Cardinality */}
      <div className="flex items-center gap-2">
        <div className="px-1.5 py-0.5 rounded bg-[#2e2e33] border border-[#52525b] text-[10px] font-bold text-white">
          1 : N
        </div>
        <span className="font-headline font-semibold text-white uppercase tracking-wider text-xs">
          Cardinality
        </span>
      </div>
    </div>
  );
}
