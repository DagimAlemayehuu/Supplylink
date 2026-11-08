import React from 'react';
import Slide from '../components/Slide';
import { presentationConfig } from '../config';
import { GraduationCap, BookOpen, Terminal, ArrowRight } from 'lucide-react';

/**
 * Slide 1: Title Slide (Neon Velocity Master Edition)
 * Brutalist heavy border box, 3D perspective glass card, Plus Jakarta Sans 800,
 * and high-energy Laser Button highlight line.
 */
export default function Slide1Title() {
  const {
    title,
    course,
    courseCode,
    school,
    department,
    highlightLine
  } = presentationConfig;

  return (
    <Slide className="justify-between items-center text-center">
      {/* Top Academic Institution Bar */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-5 z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 bg-[#BFFF00] flex items-center justify-center text-black shadow-neon-lime rounded-lg">
            <GraduationCap className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="text-left">
            <p className="font-extrabold text-white text-lg tracking-tight uppercase font-headline">
              {school}
            </p>
            <p className="text-xs text-zinc-400 font-mono tracking-widestTechnical uppercase">
              {department}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2 bg-[#0a0a0a] border border-white/15 rounded-full shadow-lg">
          <BookOpen className="w-4 h-4 text-[#BFFF00]" />
          <span className="text-xs font-bold text-white font-mono tracking-widestTechnical uppercase">
            {courseCode}: {course}
          </span>
        </div>
      </div>

      {/* Hero Section with Brutalist Border Box & 3D Tilt Background */}
      <div className="my-auto py-6 max-w-5xl mx-auto w-full relative z-10 perspective-container">
        {/* 3D Glass Backdrop tilted at 15deg */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl tilt-3d -z-10 backdrop-blur-xl" />

        <div className="space-y-7 py-6">
          {/* Brutalist Massive Headline wrapped in Heavy Border Box (0px corners) */}
          <div className="border-[8px] md:border-[10px] border-white p-6 md:p-10 bg-[#050505]/90 backdrop-blur-md shadow-2xl inline-block w-full">
            <p className="text-xs md:text-sm text-[#BFFF00] font-mono tracking-ultraTechnical uppercase mb-2">
              SYSTEM ANALYSIS &amp; GANE-SARSON DFD SPECIFICATION
            </p>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tightest uppercase font-headline leading-[0.95] text-white">
              <span className="block text-white">{title}</span>
              <span className="block text-[#BFFF00]">ORDER &amp; DELIVERY</span>
            </h1>
          </div>

          {/* Split-Row Metadata Section (Neon Velocity Spec) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 text-xs font-mono tracking-widestTechnical uppercase">
            {/* Left Tag */}
            <div className="flex items-center gap-2 text-zinc-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#BFFF00] animate-pulse" />
              <span>STATUS: PRODUCTION_SPEC // CONTEXT &amp; LEVEL_0</span>
            </div>

            {/* Right Tag with Tabular Nums */}
            <div className="flex items-center gap-2 text-[#BFFF00] bg-lime-950/40 px-4 py-2 rounded-lg border border-[#BFFF00]/30 tabular-nums font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>DFD_BALANCED: 18_FLOWS // 06_PROCESSES</span>
            </div>
          </div>

          {/* High-Energy Laser Button CTA */}
          <div className="pt-2">
            <div className="laser-btn px-8 py-3.5 inline-flex items-center gap-3 text-lg md:text-xl shadow-neon-lime">
              <span>"{highlightLine}"</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono tracking-widestTechnical uppercase text-zinc-500 z-10">
        <span className="flex items-center gap-2 text-zinc-400">
          <span className="w-1.5 h-1.5 bg-[#BFFF00]" />
          <span>GANE &amp; SARSON DATA FLOW NOTATION // DECOMPOSITION STAGES</span>
        </span>
        <span className="text-zinc-500">
          HILCOE SCHOOL OF COMPUTER SCIENCE &amp; TECHNOLOGY
        </span>
      </div>
    </Slide>
  );
}
