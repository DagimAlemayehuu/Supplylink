import React from 'react';
import Slide from '../components/Slide';
import Step from '../components/Step';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

/**
 * Slide 3: External Entities (Industrial Noir Edition)
 * Rigorous Gane & Sarson breakdown of Merchant, Supplier, and Admin external entities.
 * Features high-contrast, large-format typography for clear auditorium legibility.
 */
export default function Slide3Entities({ currentStep = 0 }) {
  const entityData = [
    {
      name: "Merchant",
      badge: "SOURCE // SINK",
      step: 0,
      description: "Retail business submitting replenishment requests and receiving organized batch deliveries.",
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
      badge: "SOURCE // SINK",
      step: 1,
      description: "Wholesale distributor managing catalog offerings, order decisions, and fleet route dispatch.",
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
      badge: "SOURCE // SINK",
      step: 2,
      description: "Platform supervisor verifying onboarding registrations and reviewing consolidated analytics.",
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
      subtitle="In Gane & Sarson DFD notation, entities exist outside the boundary as plain rectangles"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full pb-2">
        {entityData.map((entity, idx) => (
          <Step key={idx} minStep={entity.step} currentStep={currentStep} className="h-full">
            <div className="industrial-panel p-6 flex flex-col justify-between h-full relative">
              <div>
                {/* Header with Gane & Sarson symbol */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-sky-400 bg-sky-950/40 rounded-sm flex-shrink-0" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-white font-headline">{entity.name}</h3>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider bg-sky-950/60 text-sky-300 border border-sky-400/30 px-2.5 py-1 rounded">
                    {entity.badge}
                  </span>
                </div>

                <p className="text-base lg:text-lg text-zinc-100 mb-4 leading-relaxed font-inter font-normal">
                  {entity.description}
                </p>

                {/* Source Role */}
                <div className="bg-[#121620] rounded-lg p-4 mb-3 border border-sky-500/20">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-sky-300 mb-2.5 font-headline">
                    <ArrowUpRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>Source Role (Sends to Boundary):</span>
                  </div>
                  <ul className="space-y-2 text-sm md:text-base font-normal text-zinc-100 font-inter">
                    {entity.sourceFlows.map((flow, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-sky-400 font-mono text-base font-bold leading-none mt-0.5">•</span>
                        <span className="capitalize">{flow}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sink Role */}
                <div className="bg-[#121620] rounded-lg p-4 border border-sky-500/20">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-sky-300 mb-2.5 font-headline">
                    <ArrowDownRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>Sink Role (Receives from Boundary):</span>
                  </div>
                  <ul className="space-y-2 text-sm md:text-base font-normal text-zinc-100 font-inter">
                    {entity.sinkFlows.map((flow, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-sky-400 font-mono text-base font-bold leading-none mt-0.5">•</span>
                        <span className="capitalize">{flow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs md:text-sm text-zinc-300 font-mono">
                <span>Dual Role Participant</span>
                <span className="text-sky-400 font-semibold">Strictly External</span>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </Slide>
  );
}
