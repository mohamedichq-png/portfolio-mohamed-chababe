'use client';

import React from 'react';
import { services } from '@/data/services';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F3F2EC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#121210]/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0F3BE8]" />
              <p className="text-xs uppercase tracking-wide-caps font-semibold text-[#121210]">
                EXPERTISE &amp; DISCIPLINES
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121210]">
              Ce que je fais
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#686761] max-w-md font-normal leading-relaxed">
            Une approche globale alliant sensibilité graphique, rigueur typographique et performance digitale.
          </p>
        </div>

        {/* Services Grid (6 cards in clean 3-col or 2-col editorial layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white border border-[#121210]/10 hover:border-[#121210]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Number and Icon Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#121210]/10">
                  <span className="font-mono text-xl sm:text-2xl font-light text-[#0F3BE8]">
                    {service.number}
                  </span>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full border border-[#121210]/10 flex items-center justify-center text-[#121210] group-hover:bg-[#121210] group-hover:text-white group-hover:border-[#121210] transition-colors"
                    aria-label={`Demander un devis pour ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-medium tracking-tight text-[#121210] mt-6 group-hover:text-[#0F3BE8] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-[#686761] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables list */}
              <div className="mt-8 pt-6 border-t border-[#121210]/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#121210] mb-3">
                  Livrables &amp; Atouts
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#686761]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F3BE8]/60 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle CTA link below services */}
        <div className="mt-16 p-8 rounded-2xl bg-[#121210] text-[#FAF9F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight">
              Un besoin spécifique pour votre entreprise ?
            </h4>
            <p className="text-xs sm:text-sm text-[#8E8D86] mt-1">
              Chaque projet est unique. Définissons ensemble la formule adaptée à vos objectifs.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF9F5] text-[#121210] hover:bg-[#0F3BE8] hover:text-white transition-colors shrink-0"
          >
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
