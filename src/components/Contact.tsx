'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Instagram, Send, CheckCircle2, ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    typeProjet: 'Création de site web',
    budget: '1 000 € – 2 500 €',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const projectTypes = [
    'Création de site web',
    'Refonte de site web',
    'Web design (UI/UX)',
    'Branding & Identité',
    'Design graphique & Print',
    'Social Media Design',
    'E-commerce',
    'Référencement local (SEO)',
    'IA Créative & Direction Artistique',
    'Autre',
  ];

  const budgetOptions = [
    'Moins de 500 €',
    '500 € – 1 000 €',
    '1 000 € – 2 500 €',
    '2 500 € – 5 000 €',
    '5 000 €+',
  ];

  const handleCopy = (e: React.MouseEvent, key: string, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nom.trim()) {
      setErrorMessage('Veuillez renseigner votre nom.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Veuillez renseigner une adresse email valide.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Veuillez préciser votre message.');
      return;
    }

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
          {/* Left Column: Coordinates & Real Contact Options (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#121210]">
                Coordonnées &amp; Échange Direct
              </h3>
              <p className="text-sm text-[#686761] leading-relaxed">
                Une question, un brief ou une demande d’estimation ? Choisissez le moyen de contact qui vous convient le mieux.
              </p>
            </div>

            {/* Primary Contact CTA: WHATSAPP */}
            <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#25D366] text-white">
                      Recommandé
                    </span>
                    <h4 className="text-sm font-semibold text-[#121210] mt-0.5">
                      WhatsApp Direct
                    </h4>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#075E54] font-medium hidden sm:inline">
                  Réponse rapide
                </span>
              </div>

              <p className="text-xs text-[#686761] leading-relaxed">
                Idéal pour échanger immédiatement sur votre projet, partager vos inspirations ou planifier un appel.
              </p>

              <a
                href="https://wa.me/33744859977"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-sm"
              >
                <span>Écrire sur WhatsApp (+33 7 44 85 99 77)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* The 4 Clickable Contact Channels */}
            <div className="space-y-3">
              {/* WHATSAPP CLICKABLE CARD */}
              <a
                href="https://wa.me/33744859977"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white border border-[#121210]/10 hover:border-[#25D366] hover:shadow-md transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#121210]/10 flex items-center justify-center shrink-0 text-[#121210] group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#8E8D86] uppercase tracking-wider">
                      WHATSAPP
                    </p>
                    <p className="text-sm font-medium text-[#121210] group-hover:text-[#25D366] transition-colors truncate">
                      +33 7 44 85 99 77
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={(e) => handleCopy(e, 'whatsapp', '+33 7 44 85 99 77')}
                    title="Copier le numéro"
                    className="p-2 rounded-lg text-[#686761] hover:text-[#121210] hover:bg-[#FAF9F5] transition-colors"
                    aria-label="Copier le numéro WhatsApp"
                  >
                    {copiedKey === 'whatsapp' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <ArrowUpRight className="w-4 h-4 text-[#8E8D86] group-hover:text-[#25D366] transition-colors" />
                </div>
              </a>

              {/* EMAIL CLICKABLE CARD */}
              <a
                href="mailto:mohamadmdce2@gmail.com"
                className="group p-4 rounded-xl bg-white border border-[#121210]/10 hover:border-[#0F3BE8] hover:shadow-md transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#121210]/10 flex items-center justify-center shrink-0 text-[#121210] group-hover:bg-[#0F3BE8]/10 group-hover:text-[#0F3BE8] transition-colors">
                    <Mail className="w-5 h-5 text-[#0F3BE8]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#8E8D86] uppercase tracking-wider">
                      EMAIL
                    </p>
                    <p className="text-sm font-medium text-[#121210] group-hover:text-[#0F3BE8] transition-colors truncate">
                      mohamadmdce2@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={(e) => handleCopy(e, 'email', 'mohamadmdce2@gmail.com')}
                    title="Copier l'email"
                    className="p-2 rounded-lg text-[#686761] hover:text-[#121210] hover:bg-[#FAF9F5] transition-colors"
                    aria-label="Copier l'email"
                  >
                    {copiedKey === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <ArrowUpRight className="w-4 h-4 text-[#8E8D86] group-hover:text-[#0F3BE8] transition-colors" />
                </div>
              </a>

              {/* LINKEDIN CLICKABLE CARD */}
              <a
                href="https://www.linkedin.com/in/mohamed-chababe-b51291351/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white border border-[#121210]/10 hover:border-[#0F3BE8] hover:shadow-md transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#121210]/10 flex items-center justify-center shrink-0 text-[#121210] group-hover:bg-[#0F3BE8]/10 group-hover:text-[#0F3BE8] transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0F3BE8]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#8E8D86] uppercase tracking-wider">
                      LINKEDIN
                    </p>
                    <p className="text-sm font-medium text-[#121210] group-hover:text-[#0F3BE8] transition-colors truncate">
                      Mohamed Chababe
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#8E8D86] group-hover:text-[#0F3BE8] transition-colors" />
              </a>

              {/* INSTAGRAM CLICKABLE CARD */}
              <a
                href="https://www.instagram.com/mdce_chababe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white border border-[#121210]/10 hover:border-[#E1306C] hover:shadow-md transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#121210]/10 flex items-center justify-center shrink-0 text-[#121210] group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C] transition-colors">
                    <Instagram className="w-5 h-5 text-[#E1306C]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#8E8D86] uppercase tracking-wider">
                      INSTAGRAM
                    </p>
                    <p className="text-sm font-medium text-[#121210] group-hover:text-[#E1306C] transition-colors truncate">
                      @mdce_chababe
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#8E8D86] group-hover:text-[#E1306C] transition-colors" />
              </a>
            </div>

            {/* Studio Paris info box */}
            <div className="p-6 rounded-2xl bg-[#F3F2EC] border border-[#121210]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#121210]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Localisation</span>
              </div>
              <p className="text-xs text-[#686761] leading-relaxed">
                Atelier basé à Paris, France. Accompagnement de clients à Paris, en Île-de-France et partout en France à distance ou sur rendez-vous.
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
                    Votre demande a bien été envoyée à <strong>mohamadmdce2@gmail.com</strong>. Je reviens vers vous dans les 24h.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/33744859977"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Échanger aussi sur WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nom: '',
                          email: '',
                          entreprise: '',
                          typeProjet: 'Création de site web',
                          budget: '1 000 € – 2 500 €',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-colors"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

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
                      placeholder="Nom de votre marque, commerce ou société"
                      className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all placeholder:text-[#8E8D86]"
                    />
                  </div>

                  {/* Type de projet & Budget prévisionnel */}
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

                  {/* Message & détails du projet */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#121210]">
                      Message &amp; détails du projet <span className="text-[#0F3BE8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez vos besoins, vos délais souhaités, les fonctionnalités attendues..."
                      className="w-full px-4 py-3 rounded-xl border border-[#121210]/15 bg-[#FAF9F5] text-[#121210] text-sm focus:outline-none focus:border-[#0F3BE8] focus:bg-white transition-all resize-none placeholder:text-[#8E8D86]"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121210] text-[#FAF9F5] hover:bg-[#0F3BE8] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <span>Démarrer un projet →</span>
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
