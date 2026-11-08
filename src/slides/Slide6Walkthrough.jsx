import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import { level0DiagramData, walkthroughSteps } from '../diagrams/diagramData';
import { ArrowRight } from 'lucide-react';

/**
 * Slide 6: Scenario Walkthrough (Red Noir Wide-Angle Master Edition)
 * Traces operational data flow step-by-step with glowing active flows and maximum diagram space.
 */
export default function Slide6Walkthrough({ currentStep = 0, onSetStep }) {
  const stepIndex = Math.min(Math.max(currentStep, 0), walkthroughSteps.length - 1);
  const activeScenario = walkthroughSteps[stepIndex];

  return (
    <Slide
      title="Scenario Walkthrough: Request & Delivery Lifecycle"
      subtitle="Traces operational data flow step-by-step through the Level 0 architecture"
      headerExtra={
        <div className="flex items-center gap-2 bg-zinc-950/90 border border-white/15 p-1.5 rounded-2xl backdrop-blur-xl shadow-xl">
          {walkthroughSteps.map((s, idx) => (
            <button
              key={s.stepId}
              onClick={() => onSetStep && onSetStep(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all font-manrope ${
                idx === stepIndex
                  ? 'bg-[#ef233c] text-white shadow-[0_0_15px_rgba(239,35,60,0.6)]'
                  : 'text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                idx === stepIndex ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-300'
              }`}>
                {s.letter}
              </span>
              <span className="hidden xl:inline">{s.title.split('&')[0]}</span>
            </button>
          ))}
        </div>
      }
    >
      <div className="flex flex-col h-full justify-between pb-2">
        {/* Active Scenario Step Caption Bar - Compact & High-Impact */}
        <div className="bg-gradient-to-r from-[#200508] via-zinc-950 to-zinc-950 border border-[#ef233c]/40 rounded-2xl px-5 py-3 shadow-2xl mb-2 backdrop-blur-xl flex items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#ef233c] text-white flex items-center justify-center font-black text-sm shadow-[0_0_12px_#ef233c] flex-shrink-0">
              {activeScenario.letter}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-black text-white text-base font-manrope whitespace-nowrap">
                  {activeScenario.title}
                </h3>
                <span className="text-zinc-500">•</span>
                <p className="text-zinc-300 text-sm font-inter truncate font-normal">
                  {activeScenario.caption}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs text-zinc-300 bg-black/60 px-3.5 py-1.5 rounded-xl border border-white/10 flex-shrink-0">
            <span className="font-bold text-[#ef233c] uppercase font-manrope">Active:</span>
            {activeScenario.details.slice(0, 2).map((detail, dIdx) => (
              <span key={dIdx} className="flex items-center gap-1 font-medium">
                <ArrowRight className="w-3 h-3 text-[#ef233c]" />
                <span className="truncate max-w-[200px]">{detail}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Level 0 Diagram with Glowing Red Active Highlighting */}
        <div className="flex-1 w-full bg-[#030305]/90 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center p-2">
          <Diagram
            data={level0DiagramData}
            activeNodes={activeScenario.activeNodes}
            activeFlows={activeScenario.activeFlows}
            dimOthers={true}
          />
        </div>

        {/* Bottom Status Hint */}
        <div className="mt-2 flex items-center justify-between text-xs text-zinc-400 px-2">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ef233c] shadow-[0_0_6px_#ef233c]" />
            <span className="text-zinc-300">Active flows pulse in crimson along the direction of data movement</span>
          </span>
          <span className="font-mono text-zinc-400">
            Scenario Step {stepIndex + 1} of 6 (Press Space / Right Arrow to advance)
          </span>
        </div>
      </div>
    </Slide>
  );
}
