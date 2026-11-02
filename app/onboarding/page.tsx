"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [selectedLanguage, setSelectedLanguage] = useState("Anglais");
  const [selectedLevel, setSelectedLevel] = useState("Je débute");
  const [selectedPath, setSelectedPath] = useState("bases");

  // Lisitry ny fiteny
  const languages = [
    { name: "Anglais", flag: "🇬🇧", desc: "Langue internationale" },
    { name: "Français", flag: "🇫🇷", desc: "Langue officielle et culturelle" },
    { name: "Espagnol", flag: "🇪🇸", desc: "Populaire et dynamique" },
    { name: "Malagasy", flag: "🇲🇬", desc: "Fitenin-drazana sy teny Malagasy" },
    { name: "Japonais", flag: "🇯🇵", desc: "Culture Anime et technologie" },
    { name: "Coréen", flag: "🇰🇷", desc: "K-Pop et culture moderne" },
    { name: "Allemand", flag: "🇩🇪", desc: "Technique et professionnel" },
    { name: "Italien", flag: "🇮🇹", desc: "Mélodique et gastronomie" },
    { name: "Chinois", flag: "🇨🇳", desc: "Langue la plus parlée" },
    { name: "Portugais", flag: "🇵🇹", desc: "Brésil et Portugal" },
    { name: "Russe", flag: "🇷🇺", desc: "Culture et littérature" },
    { name: "Arabe", flag: "🇸🇦", desc: "Riche et historique" }
    { name: "Indonésien", flag: "🇮🇩", desc: "Archipel et commerce" },
    { name: "Polonais", flag: "🇵🇱", desc: "Europe de l'Est" },
    { name: "Vietnamien", flag: "🇻🇳", desc: "Asie du Sud-Est" },
    { name: "Grec", flag: "🇬🇷", desc: "Histoire et philosophie" },
    { name: "Suédois", flag: "🇸🇪", desc: "Scandinavie et design" },
    { name: "Turc", flag: "🇹🇷", desc: "Entre Orient et Occident" },
    { name: "Hindi", flag: "🇮🇳", desc: "Culture indienne et cinéma" },
    { name: "Néerlandais", flag: "🇳🇱", desc: "Pays-Bas et Europe" },
  ];

  // Safidy ambaratonga
  const levelOptions = [
    "Je débute en " + selectedLanguage,
    "Je connais quelques mots de base",
    "Je peux avoir une conversation simple",
    "Je peux parler de sujets variés",
    "Je peux parler de façon approfondie"
  ];

  // Fiasana mandefa feo kely (Bip/Pop) avy hatrany vao tsindrina
  const playClickSound = () => {
    if (typeof window !== "undefined") {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = "sine";
        // Frequency malefaka tsara ho an'ny tsindry
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
      } catch (e) {
        console.log("Audio not supported", e);
      }
    }
  };

  const handleSelect = (action: () => void) => {
    playClickSound();
    action();
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans flex flex-col justify-between items-center p-4 relative overflow-hidden">
      
      {/* Background Cyber Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-md flex items-center justify-between py-4 relative z-10 gap-3">
        {step > 1 ? (
          <button 
            onClick={() => handleSelect(() => setStep((step - 1) as 1 | 2 | 3 | 4))}
            className="text-slate-400 hover:text-cyan-400 text-lg transition-colors"
          >
            ←
          </button>
        ) : (
          <div className="w-5"></div>
        )}

        {/* Progress Bar */}
        <div className="flex-1 h-2 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        <span className="text-[10px] font-mono text-cyan-400 font-bold">
          {step}/4
        </span>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md my-auto space-y-6 relative z-10">

        {/* STEP 1: Safidio ny fiteny */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="text-center space-y-3">
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 to-amber-400 opacity-70 blur-md animate-spin-slow"></div>
                <div className="relative w-full h-full bg-slate-950 border border-cyan-500/40 rounded-3xl flex items-center justify-center text-3xl shadow-2xl">
                  <span className="animate-bounce">🌐⚡</span>
                </div>
              </div>
              <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-amber-400 tracking-wide uppercase">
                Que veux-tu apprendre ?
              </h1>
              <p className="text-xs text-slate-400">Sélectionnez votre langue cible ci-dessous.</p>
            </div>

            <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin">
              {languages.map((lang) => {
                const isSelected = selectedLanguage === lang.name;
                return (
                  <div
                    key={lang.name}
                    onClick={() => handleSelect(() => setSelectedLanguage(lang.name))}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all flex items-center justify-between backdrop-blur-md ${
                      isSelected
                        ? "bg-gradient-to-r from-cyan-500/20 to-amber-500/20 border-cyan-400 shadow-lg scale-[1.01]"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 rounded-xl bg-slate-950 border border-slate-800">{lang.flag}</span>
                      <div>
                        <h3 className={`text-xs font-bold ${isSelected ? "text-cyan-300" : "text-slate-200"}`}>
                          {lang.name}
                        </h3>
                        <p className="text-[10px] text-slate-500">{lang.desc}</p>
                      </div>
                    </div>
                    {isSelected && <span className="text-cyan-400 text-xs font-mono font-bold">✓</span>}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => handleSelect(() => setStep(2))}
              className="w-full bg-gradient-to-r from-amber-400 to-cyan-400 hover:from-amber-300 hover:to-cyan-300 text-slate-950 font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl transition-all"
            >
              CONTINUER →
            </button>
          </div>
        )}

        {/* STEP 2: Ambaratonga */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <div className="text-3xl animate-bounce">🤖</div>
              <div className="bg-slate-950 border border-cyan-500/30 p-3 rounded-2xl relative text-xs text-slate-200 leading-relaxed">
                Tu as déjà des bases en <span className="text-amber-400 font-bold">{selectedLanguage}</span> ?
              </div>
            </div>

            <div className="space-y-2.5">
              {levelOptions.map((opt, idx) => {
                const isSelected = selectedLevel === opt;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelect(() => setSelectedLevel(opt))}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs">{opt}</span>
                    <span className="text-xs text-slate-500">📊</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => handleSelect(() => setStep(3))}
              className="w-full bg-gradient-to-r from-amber-400 to-cyan-400 hover:from-amber-300 hover:to-cyan-300 text-slate-950 font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl transition-all"
            >
              CONTINUER →
            </button>
          </div>
        )}

        {/* STEP 3: Point de départ */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <div className="text-3xl animate-bounce">🤖</div>
              <div className="bg-slate-950 border border-cyan-500/30 p-3 rounded-2xl text-xs text-slate-200 leading-relaxed">
                Maintenant, on va trouver le meilleur point de départ !
              </div>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => handleSelect(() => setSelectedPath("bases"))}
                className={`cursor-pointer p-4 rounded-2xl border transition-all relative ${
                  selectedPath === "bases"
                    ? "bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border-amber-400"
                    : "bg-slate-900/80 border-slate-800"
                }`}
              >
                <span className="absolute -top-2.5 right-4 bg-cyan-500 text-slate-950 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  RECOMMANDÉ
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg">
                    📘
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-amber-300">
                      Tu débutes en {selectedLanguage} ?
                    </h3>
                    <p className="text-[10px] text-slate-400">Commence par les bases !</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => handleSelect(() => setSelectedPath("test"))}
                className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                  selectedPath === "test"
                    ? "bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border-amber-400"
                    : "bg-slate-900/80 border-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-lg">
                    🧭
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-cyan-300">
                      Tu parles déjà un peu {selectedLanguage} ?
                    </h3>
                    <p className="text-[10px] text-slate-400">On va trouver par où tu dois commencer !</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelect(() => setStep(4))}
              className="w-full bg-gradient-to-r from-amber-400 to-cyan-400 hover:from-amber-300 hover:to-cyan-300 text-slate-950 font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl transition-all"
            >
              CONTINUER →
            </button>
          </div>
        )}

        {/* STEP 4: Leçon 1 */}
        {step === 4 && (
          <div className="space-y-6 text-center my-auto">
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full bg-slate-950 border-2 border-cyan-400 rounded-full flex items-center justify-center text-5xl shadow-2xl">
                🚀
              </div>
            </div>

            <div className="space-y-2 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl backdrop-blur">
              <h2 className="text-lg font-extrabold text-amber-400">
                D'accord ! C'est parti pour la Leçon 1 de l'Unité 1.
              </h2>
              <p className="text-xs text-slate-400">
                Votre profil <span className="text-cyan-300 font-semibold">{selectedLanguage}</span> est prêt !
              </p>
            </div>

            <button
              onClick={() => handleSelect(() => router.push("/dashboard"))}
              className="w-full bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-500 hover:from-amber-300 hover:to-cyan-300 text-slate-950 font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/20 transform active:scale-98 transition-all"
            >
              COMMENCER LA LEÇON →
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-2 text-[10px] text-slate-600 font-mono relative z-10">
        Ndao Hianatra Sound Engine © 2026
      </footer>

    </div>
  );
        }
