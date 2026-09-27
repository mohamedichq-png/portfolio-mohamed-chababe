'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenConceptModal?: () => void;
  index: number;
}

export default function ProjectCard({
  project,
  onOpenConceptModal,
  index,
}: ProjectCardProps) {
  const getImageSource = () => {
    switch (project.id) {
      case 'retro-qatar':
        return '/images/retro_qatar.jpg';
      case 'afamia-landscape':
        return '/images/afamia_landscape.jpg';
      case 'paris-renovation':
        return '/images/paris_renov_home.jpg';
      default:
        return '/images/retro_qatar.jpg';
    }
  };

  const isConcept = project.isConcept;

  return (
    <article className="group relative flex flex-col rounded-2xl bg-white border border-[#121210]/10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#121210]/20">
      {/* Visual Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F3F2EC]">
        <Image
          src={getImageSource()}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover project-card-image transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority={index === 0}
        />

        {/* Badges on top of image */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-[#121210]/85 text-[#FAF9F5] backdrop-blur-sm shadow-sm">
            {project.number}
          </span>

          {isConcept ? (
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-amber-500 text-white shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              CONCEPT
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-[#FAF9F5]/90 text-[#121210] backdrop-blur-sm shadow-sm">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0F3BE8]">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#121210] group-hover:text-[#0F3BE8] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#686761] leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#121210]/[0.04] text-[#686761]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link / Button */}
        <div className="pt-4 border-t border-[#121210]/10 flex items-center justify-between">
          <span className="text-xs text-[#8E8D86] font-normal">
            Rôle : {project.role}
          </span>

          {isConcept ? (
            <button
              onClick={onOpenConceptModal}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#121210] group-hover:text-[#0F3BE8] transition-colors"
              aria-label={`Explorer les maquettes du concept ${project.title}`}
            >
              <Layers className="w-3.5 h-3.5 text-[#0F3BE8]" />
              <span>Explorer les 4 maquettes</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ) : (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#121210] group-hover:text-[#0F3BE8] transition-colors"
              aria-label={`${project.ctaText} pour ${project.title}`}
            >
              <span>{project.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
