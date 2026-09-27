'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function Hero() {
  const [parisTime, setParisTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setParisTime(now.toLocaleTimeString('fr-FR', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle minimalist grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#121210 1px, transparent 1px), radial-gradient(#121210 1px, #FAF9F5 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Editorial Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-[#121210]/10 pb-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F3BE8]" />
            <p className="text-xs sm:text-sm font-semibold tracking-wide-caps uppercase text-[#121210]">
              GRAPHIC DESIGNER · WEB DESIGNER · PARIS
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#686761] font-mono">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#8E8D86]" />
              Paris, France · 48.8566° N, 2.3522° E
            </span>
            {parisTime && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121210]/5 text-[#121210] font-medium">
                Paris {parisTime} CET
              </span>
            )}
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.1rem] font-medium tracking-tight text-[#121210] leading-[1.08] text-balance">
            Je transforme les idées en{' '}
            <span className="relative inline-block font-normal italic font-serif">
              identités
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[2px] bg-[#0F3BE8]/40" />
            </span>{' '}
            et expériences digitales.
          </h1>

          {/* Supporting Text */}
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-[#686761] max-w-3xl font-normal leading-relaxed text-balance">
            Web design, branding, design graphique et création de sites web modernes pour aider les entreprises à renforcer leur présence digitale.
          </p>
        </div>

        {/* CTAs and Studio Badge */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <a
            href="#projets"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Voir mes projets</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-transparent text-[#121210] border border-[#121210]/20 hover:border-[#121210] hover:bg-[#121210]/5 transition-all duration-300"
          >
            <span>Demander un devis</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Hero Bottom Strip: French creative studio positioning bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#121210]/10 text-xs sm:text-sm text-[#686761]">
          <div className="flex items-start gap-3">
            <span className="font-mono text-[#0F3BE8] font-bold">01</span>
            <div>
              <p className="font-semibold text-[#121210] uppercase tracking-wider text-xs">Approche Éditoriale</p>
              <p className="mt-1 text-xs text-[#686761] leading-relaxed">
                Design minimaliste, typographie ciselée et hiérarchie visuelle au service de la clarté.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-mono text-[#0F3BE8] font-bold">02</span>
            <div>
              <p className="font-semibold text-[#121210] uppercase tracking-wider text-xs">Exécution Sur-Mesure</p>
              <p className="mt-1 text-xs text-[#686761] leading-relaxed">
                Des solutions créatives conçues spécifiquement pour vos enjeux d'image et de conversion.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-mono text-[#0F3BE8] font-bold">03</span>
            <div>
              <p className="font-semibold text-[#121210] uppercase tracking-wider text-xs">Ancrage Parisien</p>
              <p className="mt-1 text-xs text-[#686761] leading-relaxed">
                Paris, France — Disponible pour accompagner marques indépendantes et entreprises ambitieuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
