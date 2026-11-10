import React from 'react';
import { MessageSquare, X } from 'lucide-react';

/**
 * Presenter Notes drawer (Industrial Noir Edition).
 */
export default function PresenterNotes({
  isOpen,
  onClose,
  slideIndex,
  totalSlides,
  notes = []
}) {
  if (!isOpen) return null;

  return (
    <aside
      aria-label="Presenter Notes"
      className="fixed bottom-16 right-6 w-[480px] bg-[#101216] rounded-xl border border-white/15 shadow-industrial-lg p-6 z-50 transition-all select-text font-inter"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-3.5">
        <div className="flex items-center gap-2.5 text-white font-bold font-headline">
          <MessageSquare className="w-4 h-4 text-[#ef4444]" />
          <span className="text-base">Presenter Speaking Points</span>
          <span className="text-[11px] font-mono bg-red-950/70 text-[#ef4444] border border-red-500/30 px-2 py-0.5 rounded ml-1">
            0{slideIndex + 1} / 0{totalSlides}
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          title="Close Notes (N)"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {notes.length > 0 ? (
          notes.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 text-zinc-200 text-sm leading-relaxed">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-red-950/80 text-[#ef4444] font-mono font-bold flex items-center justify-center text-xs border border-red-500/30 mt-0.5">
                {idx + 1}
              </span>
              <p className="flex-1 font-normal text-zinc-300">{point}</p>
            </div>
          ))
        ) : (
          <p className="text-xs text-zinc-500 italic">No notes for this slide.</p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
        <span>Press <kbd className="px-1.5 py-0.5 bg-[#0a0b0d] border border-white/15 rounded font-mono text-zinc-300">N</kbd> to toggle</span>
        <span className="text-[#ef4444] font-mono text-[11px] font-semibold">PRESENTER MODE</span>
      </div>
    </aside>
  );
}
