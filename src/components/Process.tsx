'use client';

import React from 'react';
import { processSteps } from '@/data/process';
import { ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section id="processus" className="py-24 sm:py-32 bg-[#F3F2EC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#121210]/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0F3BE8]" />
              <p className="text-xs uppercase tracking-wide-caps font-semibold text-[#121210]">
                MÉTHODOLOGIE
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121210]">
              Processus de travail
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#686761] max-w-md font-normal leading-relaxed">
            Un déroulement clair, transparent et collaboratif en 4 étapes pour garantir la réussite de chaque réalisation.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#121210]/10 hover:border-[#121210]/30 transition-all duration-300"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between pb-6 border-b border-[#121210]/10">
                  <span className="font-mono text-2xl font-light text-[#0F3BE8]">
                    {step.number}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#8E8D86]" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#121210] mt-6">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#686761] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable info */}
              <div className="mt-8 pt-6 border-t border-[#121210]/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8D86] block mb-1">
                  Objectif &amp; Livrable
                </span>
                <p className="text-xs font-medium text-[#121210]">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
