'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronRight, ChevronLeft, ExternalLink, CheckCircle2, Layers } from 'lucide-react';

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const conceptTabs = [
  {
    id: 'homepage',
    title: "Page d'Accueil",
    subtitle: 'Hero & Positionnement Haut de Gamme',
    image: '/images/paris_renov_home.jpg',
    description:
      "Hero section éditoriale mettant en avant le savoir-faire de rénovation d'intérieurs haussmanniens à Paris, une hiérarchie typographique forte et un appel à l'action immédiat pour l'estimation de devis.",
    features: [
      'Direction artistique sobre et architecturale',
      'Navigation claire orientée conversion',
      'Mise en valeur du patrimoine parisien (moulures, parquet chevron)',
      'Double langage typographique moderne et élégant',
    ],
  },
  {
    id: 'services',
    title: 'Services & Prestations',
    subtitle: 'Architecture & Savoir-Faire Artisanal',
    image: '/images/paris_renov_services.jpg',
    description:
      "Structure en 3 piliers essentiels (Rénovation complète, Architecture d'intérieur & Rénovation énergétique) complétée par des palettes de matériaux nobles (marbre, noyer, laiton).",
    features: [
      'Numérotation éditoriale 01 / 02 / 03',
      'Échantillons de matériaux intégrés aux cartes',
      'Descriptions techniques claires et rassurantes',
      'Boutons de découverte dédiés par spécialité',
    ],
  },
  {
    id: 'projects',
    title: 'Réalisations & Portfolio',
    subtitle: 'Avant / Après & Spécifications Chantiers',
    image: '/images/paris_renov_projects.jpg',
    description:
      'Galerie de réalisations parisiennes (7ème arrondissement, Le Marais, Parc Monceau) avec comparatif visuel Avant/Après et mention des surfaces en mètres carrés.',
    features: [
      'Filtrage fluide (Appartements, Duplex, Maisons)',
      'Modules visuels Avant / Après immersifs',
      'Badges de surface (140 m², 185 m², 210 m²)',
      'Accès rapide à la prise de rendez-vous',
    ],
  },
  {
    id: 'contact',
    title: 'Demande de Devis',
    subtitle: "Formulaire d'Estimation Interactif",
    image: '/images/paris_renov_contact.jpg',
    description:
      "Tunnel de conversion en 4 étapes permettant au prospect de qualifier son projet en moins de deux minutes : type de bien, surface m², budget estimé et description détaillée.",
    features: [
      'Indicateur de progression (Étape 1 sur 4)',
      'Sélection intuitive par pictogrammes (Appartement, Maison)',
      'Champs de saisie ergonomiques et épurés',
      'Rassurance client et coordonnées de contact',
    ],
  },
];

export default function ConceptModal({ isOpen, onClose }: ConceptModalProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const currentTab = conceptTabs[activeTab];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#121210]/75 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-concept-title"
    >
      <div
        className="relative bg-[#FAF9F5] text-[#121210] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#121210]/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#FAF9F5]/95 backdrop-blur-md z-10 px-6 sm:px-8 py-5 border-b border-[#121210]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider uppercase bg-[#121210] text-[#FAF9F5]">
              CONCEPT
            </span>
            <div>
              <h2 id="modal-concept-title" className="text-lg sm:text-xl font-semibold tracking-tight">
                PARIS RÉNOVATION · Maquettes UI/UX
              </h2>
              <p className="text-xs text-[#686761]">
                Projet d'étude UI/UX · Site vitrine &amp; tunnel de conversion premium
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#121210]/10 text-[#121210] transition-colors focus:outline-none"
            aria-label="Fermer la vue détaillée"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 sm:px-8 pt-5 pb-3 border-b border-[#121210]/10 bg-[#FAF9F5] overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {conceptTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeTab === idx
                    ? 'bg-[#0F3BE8] text-white shadow-sm'
                    : 'bg-[#121210]/5 text-[#686761] hover:bg-[#121210]/10 hover:text-[#121210]'
                }`}
              >
                <span className="font-mono text-[10px] mr-1.5 opacity-80">0{idx + 1}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Main Visual Mockup */}
          <div className="relative rounded-xl overflow-hidden border border-[#121210]/15 bg-white shadow-sm aspect-video">
            <Image
              src={currentTab.image}
              alt={`Maquette ${currentTab.title} - Paris Rénovation Concept`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
            {/* Concept overlay watermark badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#121210]/80 text-[#FAF9F5] text-xs font-mono tracking-wider backdrop-blur-sm">
              MAQUETTE 0{activeTab + 1} : {currentTab.title.toUpperCase()}
            </div>
          </div>

          {/* Description & Design Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0F3BE8]">
                {currentTab.subtitle}
              </span>
              <h3 className="text-xl font-semibold text-[#121210]">
                {currentTab.title}
              </h3>
              <p className="text-sm text-[#686761] leading-relaxed">
                {currentTab.description}
              </p>
            </div>

            <div className="bg-[#121210]/[0.025] rounded-xl p-5 border border-[#121210]/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#121210] mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#0F3BE8]" />
                Points clés du design
              </h4>
              <ul className="space-y-2 text-xs text-[#686761]">
                {currentTab.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3BE8] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Notice on concept */}
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-[#686761] flex items-start gap-2.5">
            <span className="font-semibold text-amber-800 shrink-0">Note de transparence :</span>
            <p>
              Ce projet est un <strong>concept de design fictif</strong> élaboré à titre de démonstration de compétences en UI/UX et direction artistique web, et ne représente pas un client commercial existant.
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#121210]/10 bg-[#FAF9F5] flex items-center justify-between">
          <button
            onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : conceptTabs.length - 1))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#121210] hover:bg-[#121210]/5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>

          <span className="text-xs font-mono text-[#8E8D86]">
            {activeTab + 1} / {conceptTabs.length}
          </span>

          <button
            onClick={() => setActiveTab((prev) => (prev < conceptTabs.length - 1 ? prev + 1 : 0))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#121210] hover:bg-[#121210]/5 transition-colors"
          >
            <span>Suivant</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
