import React from 'react';
import Slide from '../components/Slide';
import Diagram from '../diagrams/Diagram';
import { level0DiagramData, walkthroughSteps } from '../diagrams/diagramData';
import { ArrowRight } from 'lucide-react';

/**
 * Slide 6: Scenario Walkthrough (Industrial Noir Edition)
 * Traces operational data flow step-by-step through the Level 0 architecture.
 */
export default function Slide6Walkthrough({ currentStep = 0, onSetStep }) {
  const stepIndex = Math.min(Math.max(currentStep, 0), walkthroughSteps.length - 1);
  const activeScenario = walkthroughSteps[stepIndex];

  return (
    <Slide
      title="Scenario Walkthrough: Request & Delivery Lifecycle"
      subtitle="Traces operational data flow step-by-step through the decomposed Level 0 architecture"
      headerExtra={
        <div className="flex items-center gap-1.5 bg-[#101216] border border-white/10 p-1 rounded-lg shadow-industrial-sm">
          {walkthroughSteps.map((s, idx) => (
            <button
              key={s.stepId}
              onClick={() => onSetStep && onSetStep(idx)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold transition-all font-headline ${
                idx === stepIndex
                  ? 'bg-[#dc2626] text-white shadow-industrial-sm'
                  : 'text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className={`w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-mono font-bold ${
                idx === stepIndex ? 'bg-black/30 text-white' : 'bg-zinc-800 text-zinc-300'
              }`}>
                {s.letter}
              </span>
              <span className="hidden xl:inline">{s.title.split('&')[0]}</span>
            </button>
          ))}
        </div>
      }
    >
      <div className="flex flex-col h-full justify-between pb-1">
        {/* Active Scenario Step Caption Bar */}
        <div className="bg-[#101216] border border-white/10 rounded-lg px-4 py-2 mb-2 shadow-industrial-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="w-7 h-7 rounded bg-[#dc2626] text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 shadow-industrial-sm">
              {activeScenario.letter}
            </span>
            <div className="min-w-0 flex items-center gap-2">
              <h3 className="font-bold text-white text-sm font-headline whitespace-nowrap">
                {activeScenario.title}
              </h3>
              <span className="text-zinc-600 font-mono">/</span>
              <p className="text-zinc-300 text-xs font-inter truncate">
                {activeScenario.caption}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-300 bg-[#161822] px-3 py-1 rounded border border-white/5 flex-shrink-0">
            <span className="font-mono text-[11px] font-bold text-[#ef4444] uppercase">FLOWS:</span>
            {activeScenario.details.slice(0, 2).map((detail, dIdx) => (
              <span key={dIdx} className="flex items-center gap-1 font-medium text-xs">
                <ArrowRight className="w-3 h-3 text-[#ef4444]" />
                <span className="truncate max-w-[220px]">{detail}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Level 0 Diagram with Active Highlighting */}
        <div className="flex-1 w-full bg-[#0c0d12] rounded-xl border border-white/10 shadow-industrial-lg relative overflow-hidden flex items-center justify-center p-2">
          <Diagram
            data={level0DiagramData}
            activeNodes={activeScenario.activeNodes}
            activeFlows={activeScenario.activeFlows}
            dimOthers={true}
          />
        </div>

        {/* Bottom Status Hint */}
        <div className="mt-1.5 flex items-center justify-between text-xs text-zinc-400 px-1">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
            <span className="text-zinc-300 text-[11px]">Active flows trace in crimson along the direction of data movement</span>
          </span>
          <span className="font-mono text-zinc-400 text-[11px]">
            STEP {stepIndex + 1} OF 6 (Press Space or Right Arrow to advance)
          </span>
        </div>
      </div>
    </Slide>
  );
}
