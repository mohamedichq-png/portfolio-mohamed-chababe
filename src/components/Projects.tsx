'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ConceptModal from './ConceptModal';
import Image from 'next/image';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [conceptModalOpen, setConceptModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'Web Design', label: 'Web Design' },
    { id: 'Branding', label: 'Branding' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Concept', label: 'Concept UI/UX' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'Concept') return project.isConcept;
    return project.tags.includes(selectedFilter) || project.category.includes(selectedFilter);
  });

  return (
    <section id="projets" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#121210]/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0F3BE8]" />
              <p className="text-xs uppercase tracking-wide-caps font-semibold text-[#121210]">
                PORTFOLIO SÉLECTIONNÉ
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121210]">
              Projets sélectionnés
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#686761] max-w-md font-normal leading-relaxed">
            Une sélection de projets en design graphique, branding et web design.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="pt-8 pb-12 flex flex-wrap gap-2.5 items-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedFilter === filter.id
                  ? 'bg-[#121210] text-[#FAF9F5] shadow-sm'
                  : 'bg-[#121210]/[0.04] text-[#686761] hover:bg-[#121210]/10 hover:text-[#121210]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenConceptModal={() => setConceptModalOpen(true)}
            />
          ))}
        </div>

        {/* Dedicated Highlight for the Concept Project: Paris Rénovation */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-[#121210]/10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#121210]/10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-amber-500 text-white flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  CONCEPT FICTIF LABELLISÉ
                </span>
                <span className="text-xs text-[#8E8D86]">UI/UX Case Study</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#121210]">
                Focus Concept : PARIS RÉNOVATION
              </h3>
              <p className="text-sm sm:text-base text-[#686761] leading-relaxed">
                Ce concept de site vitrine haut de gamme illustre l'articulation entre l'architecture d'intérieur parisienne, la hiérarchie éditoriale et un tunnel d'estimation pensé pour maximiser la conversion commerciale.
              </p>
            </div>

            <button
              onClick={() => setConceptModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#0F3BE8] text-white hover:bg-[#092AC2] transition-colors shadow-sm shrink-0"
            >
              <Layers className="w-4 h-4" />
              <span>Explorer les 4 maquettes détaillées</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Mockup Preview Thumbnails Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div
              onClick={() => setConceptModalOpen(true)}
              className="group cursor-pointer space-y-2.5"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#121210]/10 bg-[#F3F2EC]">
                <Image
                  src="/images/paris_renov_home.jpg"
                  alt="Maquette 01: Homepage Paris Rénovation"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#121210] group-hover:text-[#0F3BE8] transition-colors">
                  01. Homepage
                </p>
                <p className="text-[11px] text-[#8E8D86]">Hero &amp; Positionnement</p>
              </div>
            </div>

            <div
              onClick={() => setConceptModalOpen(true)}
              className="group cursor-pointer space-y-2.5"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#121210]/10 bg-[#F3F2EC]">
                <Image
                  src="/images/paris_renov_services.jpg"
                  alt="Maquette 02: Services Paris Rénovation"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#121210] group-hover:text-[#0F3BE8] transition-colors">
                  02. Services
                </p>
                <p className="text-[11px] text-[#8E8D86]">Architecture &amp; Savoir-Faire</p>
              </div>
            </div>

            <div
              onClick={() => setConceptModalOpen(true)}
              className="group cursor-pointer space-y-2.5"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#121210]/10 bg-[#F3F2EC]">
                <Image
                  src="/images/paris_renov_projects.jpg"
                  alt="Maquette 03: Réalisations Paris Rénovation"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#121210] group-hover:text-[#0F3BE8] transition-colors">
                  03. Réalisations
                </p>
                <p className="text-[11px] text-[#8E8D86]">Avant / Après &amp; Chantiers</p>
              </div>
            </div>

            <div
              onClick={() => setConceptModalOpen(true)}
              className="group cursor-pointer space-y-2.5"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#121210]/10 bg-[#F3F2EC]">
                <Image
                  src="/images/paris_renov_contact.jpg"
                  alt="Maquette 04: Demande de Devis Paris Rénovation"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#121210] group-hover:text-[#0F3BE8] transition-colors">
                  04. Contact / Devis
                </p>
                <p className="text-[11px] text-[#8E8D86]">Tunnel de conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <ConceptModal
        isOpen={conceptModalOpen}
        onClose={() => setConceptModalOpen(false)}
      />
    </section>
  );
}
