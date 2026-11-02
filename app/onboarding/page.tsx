"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("Anglais");
  const [selectedLevel, setSelectedLevel] = useState("Débutant");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 flex flex-col justify-between max-w-md mx-auto relative overflow-hidden">
      {/* Cyber Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Barre de progression */}
      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800 mt-4">
        <div 
          className="bg-gradient-to-r from-amber-400 to-cyan-400 h-full transition-all duration-300"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      {/* Mascotte Maki Hologram */}
      <div className="text-center space-y-4 my-6 relative z-10">
        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-amber-400 p-[2px] shadow-lg shadow-cyan-500/20 animate-pulse">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-4xl">
            🐵⚡
          </div>
        </div>
        
        <div className="bg-slate-900/90 border border-cyan-500/30 p-4 rounded-2xl relative shadow-xl backdrop-blur">
          <p className="text-xs font-semibold text-cyan-300 leading-relaxed">
            {step === 1 && "Que veux-tu apprendre ? Sélectionnez votre langue cible."}
            {step === 2 && "Tu as déjà des bases ? Évaluons votre niveau actuel."}
            {step === 3 && "Maintenant, on va trouver le meilleur point de départ !"}
            {step === 4 && "D'accord ! C'est parti pour la Leçon 1 de l'Unité 1."}
          </p>
        </div>
      </div>

      {/* Contenu des étapes */}
      <div className="flex-1 space-y-3 relative z-10">
        {step === 1 && (
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {["Anglais", "Espagnol", "Italien", "Allemand", "Portugais", "Japonais", "Chinois", "Coréen"].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  selectedLanguage === lang
                    ? "bg-cyan-950/70 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 scale-[1.01]"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <span className="font-bold text-sm">{lang}</span>
                <span className="text-xs text-cyan-400 font-mono">Sélectionner →</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            {[
              { id: "Débutant", title: "Je débute", desc: "Commence par les bases absolues." },
              { id: "Intermédiaire", title: "Je connais quelques mots", desc: "On va trouver par où tu dois commencer." },
              { id: "Avancé", title: "Je peux avoir une conversation", desc: "Passons directement aux exercices complexes." },
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`w-full p-4 rounded-2xl border text-left space-y-1 transition-all ${
                  selectedLevel === lvl.id
                    ? "bg-amber-950/70 border-amber-400 text-white shadow-lg shadow-amber-500/10 scale-[1.01]"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <h4 className="font-bold text-sm text-amber-300">{lvl.title}</h4>
                <p className="text-xs text-slate-400">{lvl.desc}</p>
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <div className="bg-slate-900/80 border border-cyan-500/40 p-4 rounded-2xl relative space-y-1">
              <span className="absolute -top-3 right-4 bg-cyan-500 text-slate-950 font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                Recommandé
              </span>
              <h4 className="font-bold text-sm text-cyan-300">Commencer par les bases</h4>
              <p className="text-xs text-slate-400">Idéal pour structurer vos connaissances en {selectedLanguage}.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl space-y-1">
              <h4 className="font-bold text-sm text-slate-300">Tester mon niveau</h4>
              <p className="text-xs text-slate-400">Réaliser un quiz rapide pour adapter votre parcours.</p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-6 space-y-2">
            <h3 className="text-lg font-bold text-amber-400">Tout est configuré !</h3>
            <p className="text-xs text-slate-400">Votre profil d'apprentissage pour le {selectedLanguage} est prêt.</p>
          </div>
        )}
      </div>

      {/* Bouton de validation */}
      <div className="my-4 relative z-10">
        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="w-full bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-slate-950 font-black py-4 rounded-2xl text-sm transition-all shadow-lg shadow-cyan-500/20 uppercase tracking-wider"
          >
            Continuer
          </button>
        ) : (
          <Link
            href="/dashboard"
            className="block text-center w-full bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black py-4 rounded-2xl text-sm transition-all shadow-lg shadow-cyan-500/20 uppercase tracking-wider"
          >
            Accéder au Tableau de Bord 🚀
          </Link>
        )}
      </div>
    </div>
  );
      }
