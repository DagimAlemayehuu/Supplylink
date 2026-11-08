import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import { level0DiagramData, walkthroughSteps } from '../diagrams/diagramData';
import { ArrowRight, Terminal } from 'lucide-react';

/**
 * Slide 6: Scenario Walkthrough (Neon Velocity Master Edition)
 * Traces operational data flow step-by-step with glowing active flows and maximum diagram space.
 */
export default function Slide6Walkthrough({ currentStep = 0, onSetStep }) {
  const stepIndex = Math.min(Math.max(currentStep, 0), walkthroughSteps.length - 1);
  const activeScenario = walkthroughSteps[stepIndex];

  return (
    <Slide
      title="SCENARIO WALKTHROUGH: REQUEST &amp; DELIVERY LIFECYCLE"
      subtitle="Traces operational data transactions step-by-step through the Level 0 architecture"
      headerExtra={
        <div className="flex items-center gap-2 bg-[#0a0a0a]/90 border border-white/15 p-1.5 rounded-2xl backdrop-blur-xl shadow-xl">
          {walkthroughSteps.map((s, idx) => (
            <button
              key={s.stepId}
              onClick={() => onSetStep && onSetStep(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all font-headline uppercase ${
                idx === stepIndex
                  ? 'bg-[#BFFF00] text-black shadow-neon-lime'
                  : 'text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                idx === stepIndex ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-300'
              }`}>
                {s.letter}
              </span>
              <span className="hidden xl:inline tracking-tight">{s.title.split('&')[0]}</span>
            </button>
          ))}
        </div>
      }
    >
      <div className="flex flex-col h-full justify-between pb-2">
        {/* Active Scenario Step Caption Bar - Luminosity Spec */}
        <div className="luminosity-card px-5 py-3 shadow-2xl mb-2 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#BFFF00] text-black flex items-center justify-center font-mono font-black text-sm shadow-neon-lime flex-shrink-0">
              0{stepIndex + 1}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base font-headline uppercase tracking-tight whitespace-nowrap">
                  {activeScenario.title}
                </h3>
                <span className="text-zinc-600 font-mono">//</span>
                <p className="text-zinc-300 text-xs font-body truncate font-normal">
                  {activeScenario.caption}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs text-zinc-300 bg-[#050505]/80 px-3.5 py-1.5 rounded-xl border border-white/10 flex-shrink-0 font-mono tracking-widestTechnical uppercase">
            <span className="font-bold text-[#BFFF00]">ACTIVE_TX:</span>
            {activeScenario.details.slice(0, 2).map((detail, dIdx) => (
              <span key={dIdx} className="flex items-center gap-1 text-[11px] text-zinc-400">
                <ArrowRight className="w-3 h-3 text-[#BFFF00]" />
                <span className="truncate max-w-[200px]">{detail}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Level 0 Diagram with Glowing Neon Lime Active Highlighting */}
        <div className="flex-1 w-full bg-[#080808]/90 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center p-2">
          <Diagram
            data={level0DiagramData}
            activeNodes={activeScenario.activeNodes}
            activeFlows={activeScenario.activeFlows}
            dimOthers={true}
          />
        </div>

        {/* Bottom Status Hint */}
        <div className="mt-2 flex items-center justify-between text-xs text-zinc-500 font-mono tracking-widestTechnical uppercase px-2">
          <span className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#BFFF00] shadow-[0_0_8px_#BFFF00]" />
            <span>ACTIVE FLOWS PULSE IN NEON LIME ALONG TRANSACTION PATH</span>
          </span>
          <span className="text-zinc-500 tabular-nums">
            SCENARIO STEP 0{stepIndex + 1}/06 // (SPACE / RIGHT_ARROW TO ADVANCE)
          </span>
        </div>
      </div>
    </Slide>
  );
}
