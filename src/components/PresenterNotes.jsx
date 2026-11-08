import React from 'react';
import { MessageSquare, X } from 'lucide-react';

/**
 * Presenter Notes drawer (Red Noir Theme).
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
      className="fixed bottom-20 right-8 w-[500px] bg-zinc-950/95 backdrop-blur-2xl rounded-3xl border border-white/15 shadow-2xl p-7 z-50 transition-all select-text font-inter"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2.5 text-white font-bold font-manrope">
          <MessageSquare className="w-5 h-5 text-[#ef233c]" />
          <span className="text-lg">Speaking Points</span>
          <span className="text-xs bg-[#ef233c]/20 text-[#ef233c] border border-[#ef233c]/40 px-2.5 py-0.5 rounded-full ml-1">
            Slide {slideIndex + 1}/{totalSlides}
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
            <div key={idx} className="flex items-start gap-3.5 text-zinc-200 text-base leading-relaxed">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ef233c]/15 text-[#ef233c] font-black flex items-center justify-center text-xs border border-[#ef233c]/40 mt-0.5 font-manrope">
                {idx + 1}
              </span>
              <p className="flex-1 font-normal">{point}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500 italic">No notes for this slide.</p>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
        <span>Press <kbd className="px-2 py-0.5 bg-black border border-white/15 rounded font-mono text-zinc-300">N</kbd> to toggle</span>
        <span className="text-[#ef233c] font-bold">Presenter Mode</span>
      </div>
    </aside>
  );
}
