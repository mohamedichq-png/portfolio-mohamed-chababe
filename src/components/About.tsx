'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function About() {
  const principles = [
    {
      title: 'Clarté & Lisibilité',
      desc: 'Une typographie soignée et une mise en page aérée pour valoriser l’essentiel.',
    },
    {
      title: 'Cohérence Visuelle',
      desc: 'Un fil conducteur fort de votre logo jusqu’aux moindres détails de votre site web.',
    },
    {
      title: 'Précision Technique',
      desc: 'Des interfaces fluides, rapides et adaptées à tous les terminaux mobiles et desktop.',
    },
  ];

  return (
    <section id="a-propos" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#121210]/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0F3BE8]" />
            <p className="text-xs uppercase tracking-wide-caps font-semibold text-[#121210]">
              BIO &amp; VISION
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121210]">
            À propos
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Image Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#121210]/10 shadow-md bg-[#F3F2EC]">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait professionnel de Mohamed Chababe - Graphic & Web Designer à Paris"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Studio badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121210]/80 backdrop-blur-md text-[#FAF9F5] border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wide">MOHAMED CHABABE</p>
                    <p className="text-[11px] text-[#FAF9F5]/70">Paris, France</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#686761] px-1 font-mono">
              <span>Atelier de création</span>
              <span>Paris 75 · France</span>
            </div>
          </div>

          {/* Text and Philosophy Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#121210]/5 text-[#121210]">
                <MapPin className="w-3.5 h-3.5 text-[#0F3BE8]" />
                <span>Basé à Paris, France</span>
              </div>

              {/* Exact user-specified texts */}
              <div className="space-y-5 text-base sm:text-lg text-[#686761] leading-relaxed">
                <p className="text-xl sm:text-2xl font-medium text-[#121210] leading-snug">
                  Je suis Mohamed Chababe, Graphic Designer &amp; Web Designer basé à Paris.
                </p>

                <p>
                  Mon travail combine design graphique, direction artistique et création digitale pour aider les entreprises à présenter leurs services de manière claire, moderne et professionnelle.
                </p>

                <p>
                  Je m'intéresse particulièrement aux projets où l'identité visuelle, le contenu et l'expérience web doivent fonctionner ensemble.
                </p>
              </div>
            </div>

            {/* Design Principles / Guidelines */}
            <div className="pt-8 border-t border-[#121210]/10 space-y-4">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#121210]">
                Mes principes de conception
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {principles.map((p, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#121210]/10">
                    <p className="text-xs font-semibold text-[#121210]">{p.title}</p>
                    <p className="mt-1 text-xs text-[#686761] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-colors"
              >
                <span>Échanger sur votre projet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#processus"
                className="text-xs font-medium text-[#686761] hover:text-[#121210] transition-colors underline underline-offset-4"
              >
                Découvrir la méthode de travail →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
