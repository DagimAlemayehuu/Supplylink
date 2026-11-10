import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import { GraduationCap, BookOpen, Layers } from 'lucide-react';

/**
 * Slide 1: Title Slide (Industrial Noir Edition)
 * Pure, authoritative engineering title with solid typography and zero AI slop.
 */
export default function Slide1Title() {
  const {
    title,
    course,
    courseCode,
    school,
    highlightLine
  } = presentationConfig;

  return (
    <Slide className="justify-between items-center text-center">
      {/* Top Academic Institution Bar */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-5 z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#dc2626] flex items-center justify-center text-white shadow-industrial-sm">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="font-extrabold text-white text-base tracking-tight font-headline">
              {school}
            </p>
            <p className="text-xs text-zinc-400 font-medium font-inter">
              Department of Computer Science
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#12141a] border border-white/10 shadow-industrial-sm">
          <BookOpen className="w-4 h-4 text-[#ef4444]" />
          <span className="text-xs font-bold text-white font-headline tracking-wide">{courseCode}: {course}</span>
        </div>
      </div>

      {/* Hero Section with Massive High-Craft Typography */}
      <div className="my-auto py-10 max-w-5xl mx-auto space-y-7 z-10">
        <div className="space-y-3">
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight font-headline text-white leading-none">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-zinc-300 font-headline">
            Supplier-Merchant Ordering & Delivery Platform
          </p>
        </div>

        {/* Industrial Highlight Container (Zero spinning gradient, real architectural framing) */}
        <div className="pt-4 max-w-3xl mx-auto">
          <div className="bg-[#12141a] border border-white/15 rounded-xl px-8 py-4 shadow-industrial-md flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
            <span className="text-xl md:text-2xl text-white font-bold font-headline">
              "{highlightLine}"
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Specification Bar */}
      <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between text-xs text-zinc-400 font-inter z-10">
        <span className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#ef4444]" />
          <span className="font-medium text-zinc-300">Context Diagram & Level 0 DFD Functional Decomposition</span>
        </span>
        <span className="font-mono text-zinc-500">
          Gane & Sarson Academic Standard
        </span>
      </div>
    </Slide>
  );
}
