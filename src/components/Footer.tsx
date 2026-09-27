'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121210] text-[#FAF9F5] pt-20 pb-12 border-t border-[#FAF9F5]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-16 border-b border-[#FAF9F5]/10">
          <div className="space-y-4 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Mohamed Chababe
            </h2>
            <p className="text-sm sm:text-base text-[#8E8D86] font-normal leading-relaxed">
              Graphic Designer &amp; Web Designer — Paris, France
            </p>
            <p className="text-xs text-[#8E8D86]/80 max-w-md">
              Conception d'identités visuelles et d'expériences digitales modernes pour les marques et entreprises.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-wrap gap-8 sm:gap-12 text-sm">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8D86]">
                Navigation
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#projets" className="text-[#FAF9F5]/80 hover:text-white transition-colors">
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#FAF9F5]/80 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#a-propos" className="text-[#FAF9F5]/80 hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#FAF9F5]/80 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8D86]">
                Réseaux
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAF9F5]/80 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAF9F5]/80 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8D86]">
          <p>© 2026 Mohamed Chababe. Tous droits réservés.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#FAF9F5] transition-colors focus:outline-none"
            aria-label="Retour en haut de page"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
