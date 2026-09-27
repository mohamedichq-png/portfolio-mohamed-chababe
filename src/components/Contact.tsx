'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Instagram, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    typeProjet: 'Site web',
    budget: '1 000 € – 2 500 €',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const projectTypes = [
    'Site web',
    'Refonte de site',
    'Branding',
    'Logo',
    'Design graphique',
    'Social Media',
    'E-commerce',
    'Autre',
  ];

  const budgetOptions = [
    'Moins de 500 €',
    '500 € – 1 000 €',
    '1 000 € – 2 500 €',
    '2 500 € – 5 000 €',
    '5 000 €+',
  ];

  const contactPlaceholders = [
    {
      key: 'email',
      label: 'Email direct',
      value: '[YOUR EMAIL]',
      hint: 'Remplacer par votre email de contact',
      icon: Mail,
      href: 'mailto:[YOUR EMAIL]',
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      value: '[YOUR WHATSAPP]',
      hint: 'Remplacer par votre numéro WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: '[YOUR LINKEDIN]',
      hint: 'Remplacer par votre URL LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/',
    },
    {
      key: 'instagram',
      label: 'Instagram',
      value: '[YOUR INSTAGRAM]',
      hint: 'Remplacer par votre profil Instagram',
      icon: Instagram,
      href: 'https://instagram.com/',
    },
  ];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#121210]/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0F3BE8]" />
            <p className="text-xs uppercase tracking-wide-caps font-semibold text-[#121210]">
              CONTACT &amp; COLLABORATION
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121210]">
            Un projet en tête ?
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#686761] max-w-xl font-normal leading-relaxed">
            Parlons de votre prochain projet digital ou créatif.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Coordinates & Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#121210]">
                Coordonnées &amp; Réseaux
              </h3>
              <p className="text-sm text-[#686761] leading-relaxed">
                N’hésitez pas à me contacter directement par email ou sur vos canaux de prédilection. Je réponds généralement sous 24 à 48 heures.
              </p>
            </div>

            {/* Placeholder list with copy utility */}
            <div className="space-y-3">
              {contactPlaceholders.map((item) => {
                const IconComponent = item.icon;
                const isCopied = copiedKey === item.key;

                return (
                  <div
                    key={item.key}
                    className="p-4 rounded-xl bg-white border border-[#121210]/10 hover:border-[#121210]/25 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#121210]/10 flex items-center justify-center shrink-0 text-[#121210]">
                        <IconComponent className="w-5 h-5 text-[#0F3BE8]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#121210] uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm font-mono text-[#686761] truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopy(item.key, item.value)}
                        title="Copier"
                        className="p-2 rounded-lg text-[#686761] hover:text-[#121210] hover:bg-[#FAF9F5] transition-colors"
                        aria-label={`Copier le placeholder ${item.label}`}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Studio Paris info box */}
            <div className="p-6 rounded-2xl bg-[#F3F2EC] border border-[#121210]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#121210]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Statut actuel</span>
              </div>
              <p className="text-xs text-[#686761] leading-relaxed">
                Basé à Paris, disponible pour missions de branding, refonte web, design d'interfaces et créations graphiques.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#121210]/10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#121210]">
                    Merci pour votre message !
                  </h3>
                  <p className="text-sm text-[#686761] max-w-md mx-auto leading-relaxed">
                    Votre demande a bien été reçue. Je reviendrai vers vous dans les meilleurs délais pour échanger sur vos objectifs.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nom: '',
                        email: '',
                        entreprise: '',
                        typeProjet: 'Site web',
                        budget: '1 000 € – 2 500 €',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                        Nom complet <span className="text-[#0F3BE8]">*</span>
                      </label>
                      <input
                        id="nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder="Ex. Alexandre Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all placeholder:text-[#8E8D86]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                        Adresse Email <span className="text-[#0F3BE8]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all placeholder:text-[#8E8D86]"
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div className="space-y-2">
                    <label htmlFor="entreprise" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                      Entreprise / Organisation
                    </label>
                    <input
                      id="entreprise"
                      type="text"
                      value={formData.entreprise}
                      onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                      placeholder="Nom de votre marque ou société"
                      className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all placeholder:text-[#8E8D86]"
                    />
                  </div>

                  {/* Type de projet & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="typeProjet" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                        Type de projet <span className="text-[#0F3BE8]">*</span>
                      </label>
                      <select
                        id="typeProjet"
                        value={formData.typeProjet}
                        onChange={(e) => setFormData({ ...formData, typeProjet: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                        Budget prévisionnel <span className="text-[#0F3BE8]">*</span>
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all"
                      >
                        {budgetOptions.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                      Message &amp; Détails du projet <span className="text-[#0F3BE8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez vos besoins, votre calendrier envisagé et vos attentes..."
                      className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all resize-none placeholder:text-[#8E8D86]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <span>Démarrer un projet</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
