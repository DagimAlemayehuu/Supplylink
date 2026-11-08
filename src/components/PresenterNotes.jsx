import React from 'react';
import { MessageSquare, X } from 'lucide-react';

/**
 * Presenter Notes drawer (Neon Velocity Theme).
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
      className="fixed bottom-20 right-8 w-[500px] bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl border border-white/15 shadow-2xl p-7 z-50 transition-all select-text font-body"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2.5 text-white font-extrabold font-headline uppercase tracking-tight">
          <MessageSquare className="w-5 h-5 text-[#BFFF00]" />
          <span className="text-base">Speaking Points</span>
          <span className="text-[10px] font-mono bg-lime-950/60 text-[#BFFF00] border border-[#BFFF00]/40 px-2 py-0.5 rounded-full ml-1 uppercase tracking-widestTechnical tabular-nums">
            SLIDE 0{slideIndex + 1}/0{totalSlides}
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          title="Close Notes (N)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {notes.length > 0 ? (
          notes.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-zinc-200 text-sm leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#BFFF00]/10 text-[#BFFF00] font-mono font-bold flex items-center justify-center text-xs border border-[#BFFF00]/30 mt-0.5 tabular-nums">
                0{idx + 1}
              </span>
              <p className="flex-1 font-normal font-body">{point}</p>
            </div>
          ))
        ) : (
          <p className="text-xs text-zinc-500 font-mono italic">No notes for this slide.</p>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widestTechnical text-zinc-400">
        <span>PRESS <kbd className="px-2 py-0.5 bg-black border border-white/15 rounded text-[#BFFF00]">N</kbd> TO TOGGLE</span>
        <span className="text-[#BFFF00] font-bold">PRESENTER_MODE</span>
      </div>
    </aside>
  );
}
