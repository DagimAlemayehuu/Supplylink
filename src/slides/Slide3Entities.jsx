import React from 'react';
import Slide from '../components/Slide';
import Step from '../components/Step';
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react';

/**
 * Slide 3: External Entities (Neon Velocity Master Edition)
 * Luminosity Cards with brutalist typography and technical Source/Sink breakdown.
 */
export default function Slide3Entities({ currentStep = 0 }) {
  const entityData = [
    {
      code: "ENTITY_01",
      name: "Merchant",
      badge: "SOURCE // SINK",
      step: 0,
      description: "Retail store dispatching restock or new-product requests and receiving organized route deliveries.",
      sourceFlows: [
        "registration details",
        "stock levels",
        "requests (restock or new product)",
        "receipt confirmation"
      ],
      sinkFlows: [
        "account status",
        "low-stock alerts",
        "request status",
        "delivery status"
      ]
    },
    {
      code: "ENTITY_02",
      name: "Supplier",
      badge: "SOURCE // SINK",
      step: 1,
      description: "Wholesale distributor managing catalog offerings, order decisions, and organized route dispatches.",
      sourceFlows: [
        "registration and delivery settings",
        "product catalog",
        "request decisions",
        "dispatch confirmation"
      ],
      sinkFlows: [
        "account status",
        "new requests",
        "delivery batches"
      ]
    },
    {
      code: "ENTITY_03",
      name: "Admin",
      badge: "SOURCE // SINK",
      step: 2,
      description: "System supervisor validating onboarding registrations and reviewing consolidated system reports.",
      sourceFlows: [
        "user approvals"
      ],
      sinkFlows: [
        "pending registrations",
        "reports"
      ]
    }
  ];

  return (
    <Slide
      title="EXTERNAL ENTITIES: SOURCES &amp; SINKS"
      subtitle="In Gane &amp; Sarson DFDs, entities sit outside the boundary as plain rectangles"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full pb-4">
        {entityData.map((entity, idx) => (
          <Step key={idx} minStep={entity.step} currentStep={currentStep} className="h-full">
            <div className="luminosity-card p-7 flex flex-col justify-between h-full relative">
              <div>
                {/* Top-aligned Mono Index */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <span className="text-xs font-mono text-[#BFFF00] tracking-ultraTechnical uppercase font-semibold">
                    // {entity.code}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10 tracking-widestTechnical uppercase font-bold">
                    {entity.badge}
                  </span>
                </div>

                {/* Entity Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-5 border-2 border-[#BFFF00] bg-[#BFFF00]/10" />
                  <h3 className="text-3xl font-extrabold text-white font-headline uppercase tracking-tight">
                    {entity.name}
                  </h3>
                </div>

                <p className="text-sm text-zinc-300 mb-5 leading-relaxed font-body">
                  {entity.description}
                </p>

                {/* Source Role Box */}
                <div className="bg-[#0a0a0a] rounded-2xl p-4 mb-3 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widestTechnical uppercase text-[#BFFF00] mb-2.5 font-bold">
                    <ArrowUpRight className="w-4 h-4 text-[#BFFF00]" />
                    <span>SOURCE ROLE (INPUTS TO SYSTEM):</span>
                  </div>
                  <ul className="space-y-1.5 text-xs lg:text-sm font-semibold text-zinc-200 font-body">
                    {entity.sourceFlows.map((flow, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#BFFF00] font-bold">›</span>
                        <span>{flow}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sink Role Box */}
                <div className="bg-[#0a0a0a] rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widestTechnical uppercase text-cyan-400 mb-2.5 font-bold">
                    <ArrowDownRight className="w-4 h-4 text-cyan-400" />
                    <span>SINK ROLE (DELIVERABLES FROM SYSTEM):</span>
                  </div>
                  <ul className="space-y-1.5 text-xs lg:text-sm font-semibold text-zinc-200 font-body">
                    {entity.sinkFlows.map((flow, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">›</span>
                        <span>{flow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom rule confirmation */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono uppercase tracking-widestTechnical text-zinc-400">
                <Check className="w-4 h-4 text-[#BFFF00]" />
                <span>DUAL PARTICIPANT: ORIGINATES &amp; CONSUMES DATA</span>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </Slide>
  );
}
