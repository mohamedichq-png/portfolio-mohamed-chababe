'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projets', href: '#projets' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Processus', href: '#processus' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#121210]/10 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none"
          aria-label="Mohamed Chababe - Retour en haut"
        >
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#121210]">
              Mohamed Chababe
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-[#121210]/5 text-[#686761] border border-[#121210]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Paris
            </span>
          </div>
          <span className="text-xs text-[#686761] tracking-wide font-normal">
            Graphic Designer &amp; Web Designer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#686761]"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#121210] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#121210] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-all duration-300 shadow-sm hover:shadow"
          >
            <span>Démarrer un projet</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#121210] hover:text-[#0F3BE8] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#FAF9F5] border-b border-[#121210]/10 px-6 py-8 shadow-xl transition-all">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#121210]/10 text-xs text-[#686761]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Basé à Paris, France · Disponible pour nouveaux projets</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-[#121210] hover:text-[#0F3BE8] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#8E8D86]">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#121210]/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-colors"
              >
                <span>Démarrer un projet</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
