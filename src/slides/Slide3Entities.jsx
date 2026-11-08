import React from 'react';
import Slide from '../components/Slide';
import Step from '../components/Step';
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react';

/**
 * Slide 3: External Entities (Red Noir Theme)
 * Large, punchy breakdown of Merchant, Supplier, and Admin in Gane & Sarson notation.
 */
export default function Slide3Entities({ currentStep = 0 }) {
  const entityData = [
    {
      name: "Merchant",
      badge: "Source & Sink",
      step: 0,
      description: "Retail store sending restock or new-product requests and receiving organized deliveries.",
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
      name: "Supplier",
      badge: "Source & Sink",
      step: 1,
      description: "Wholesale distributor managing catalog offerings, order decisions, and route dispatches.",
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
      name: "Admin",
      badge: "Source & Sink",
      step: 2,
      description: "System supervisor validating onboarding requests and reviewing consolidated operational reports.",
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
      title="External Entities: Sources & Sinks"
      subtitle="In Gane & Sarson DFDs, entities sit outside the boundary as plain rectangles"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full pb-4">
        {entityData.map((entity, idx) => (
          <Step key={idx} minStep={entity.step} currentStep={currentStep} className="h-full">
            <div className="bg-zinc-950/80 border border-white/10 hover:border-[#ef233c]/60 rounded-3xl p-7 shadow-2xl transition-all flex flex-col justify-between h-full relative backdrop-blur-xl">
              <div>
                {/* Entity Header with Gane & Sarson symbol */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-6 border-2 border-cyan-400 bg-cyan-950/50" />
                    <h3 className="text-3xl font-black text-white font-manrope">{entity.name}</h3>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-cyan-950/60 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full font-manrope">
                    {entity.badge}
                  </span>
                </div>

                <p className="text-base text-zinc-300 mb-5 leading-relaxed font-inter font-normal">
                  {entity.description}
                </p>

                {/* Source Role Box */}
                <div className="bg-[#051d24]/60 rounded-2xl p-4 mb-4 border border-cyan-500/30">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-300 mb-2.5 font-manrope">
                    <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                    <span>Source Role (Sends to System):</span>
                  </div>
                  <ul className="space-y-2 text-sm lg:text-base font-semibold text-zinc-100 font-inter">
                    {entity.sourceFlows.map((flow, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{flow}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sink Role Box */}
                <div className="bg-[#24080a]/60 rounded-2xl p-4 border border-red-500/30">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-300 mb-2.5 font-manrope">
                    <ArrowDownRight className="w-4 h-4 text-[#ef233c]" />
                    <span>Sink Role (Receives from System):</span>
                  </div>
                  <ul className="space-y-2 text-sm lg:text-base font-semibold text-zinc-100 font-inter">
                    {entity.sinkFlows.map((flow, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#ef233c] font-bold">•</span>
                        <span>{flow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom rule confirmation */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <Check className="w-4 h-4 text-[#ef233c]" />
                <span>Dual source & sink participant (originates & consumes data)</span>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </Slide>
  );
}
