import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import { GraduationCap, BookOpen } from 'lucide-react';

/**
 * Slide 1: Title Slide (Restored Previous Red Noir Edition)
 * Pure, high-impact title with huge typography, shiny CTA highlight, and zero team members.
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
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-6 z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#ef233c] flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,35,60,0.5)]">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="font-extrabold text-white text-lg tracking-tight font-manrope">
              {school}
            </p>
            <p className="text-xs text-zinc-400 font-medium">
              Department of Computer Science
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
          <BookOpen className="w-4 h-4 text-[#ef233c]" />
          <span className="text-sm font-bold text-white font-manrope">{courseCode}: {course}</span>
        </div>
      </div>

      {/* Hero Section with Massive Cinematic Typography */}
      <div className="my-auto py-8 max-w-5xl mx-auto space-y-8 z-10">
        {/* Main Title Heading - Massive & Cinematic */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter font-manrope leading-[1.05]">
          <span className="block text-white">{title}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            Supplier-Merchant Platform
          </span>
        </h1>

        {/* Highlight Banner with Shiny Border Effect */}
        <div className="pt-2">
          <div className="shiny-cta inline-block">
            <span className="relative z-10 flex items-center gap-3 text-xl md:text-2xl text-white font-extrabold font-manrope px-8 py-3.5">
              <span>"{highlightLine}"</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Notation Tag */}
      <div className="w-full border-t border-white/10 pt-5 flex items-center justify-between text-sm text-zinc-400 font-inter z-10">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ef233c]" />
          <span>Context Diagram & Level 0 DFD Functional Decomposition</span>
        </span>
        <span className="font-mono text-zinc-500">
          HiLCoE School of Computer Science & Technology
        </span>
      </div>
    </Slide>
  );
}
