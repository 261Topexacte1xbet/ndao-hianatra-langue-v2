"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("Malagasy");
  const router = useRouter();

  // Lisitry ny fiteny maro be mitovy amin'ny Duolingo
  const languages = [
    { name: "Malagasy", flag: "🇲🇬", desc: "Fitenin-drazana sy teny Malagasy", code: "mg-MG" },
    { name: "Anglais", flag: "🇬🇧", desc: "Langue internationale", code: "en-US" },
    { name: "Français", flag: "🇫🇷", desc: "Langue officielle et culturelle", code: "fr-FR" },
    { name: "Espagnol", flag: "🇪🇸", desc: "Populaire et dynamique", code: "es-ES" },
    { name: "Japonais", flag: "🇯🇵", desc: "Culture Anime et technologie", code: "ja-JP" },
    { name: "Coréen", flag: "🇰🇷", desc: "K-Pop et culture moderne", code: "ko-KR" },
    { name: "Allemand", flag: "🇩🇪", desc: "Technique et professionnel", code: "de-DE" },
    { name: "Italien", flag: "🇮🇹", desc: "Mélodique et gastronomie", code: "it-IT" },
    { name: "Chinois (Mandarin)", flag: "🇨🇳", desc: "Langue la plus parlée", code: "zh-CN" },
    { name: "Arabe", flag: "🇸🇦", desc: "Riche et historique", code: "ar-SA" },
    { name: "Russe", flag: "🇷🇺", desc: "Culture et littérature", code: "ru-RU" },
    { name: "Portugais", flag: "🇵🇹", desc: "Brésil et Portugal", code: "pt-PT" },
    { name: "Néerlandais", flag: "🇳🇱", desc: "Pays-Bas et Europe", code: "nl-NL" },
    { name: "Turc", flag: "🇹🇷", desc: "Entre Orient et Occident", code: "tr-TR" },
    { name: "Hindi", flag: "🇮🇳", desc: "Culture indienne et cinéma", code: "hi-IN" },
    { name: "Suédois", flag: "🇸🇪", desc: "Scandinavie et design", code: "sv-SE" },
    { name: "Grec", flag: "🇬🇷", desc: "Histoire et philosophie", code: "el-GR" },
    { name: "Polonais", flag: "🇵🇱", desc: "Europe de l'Est", code: "pl-PL" },
    { name: "Vietnamien", flag: "🇻🇳", desc: "Asie du Sud-Est", code: "vi-VN" },
    { name: "Indonésien", flag: "🇮🇩", desc: "Archipel et commerce", code: "id-ID" }
  ];

  // Mandefa ny feo (Text-to-Speech)
  const playVoice = (text: string, langCode: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectLanguage = (langName: string, langCode: string) => {
    setSelectedLanguage(langName);
    playVoice(langName, langCode);
  };

  const handleContinue = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans flex flex-col justify-between items-center p-4 relative overflow-hidden">
      
      {/* Background Cyber Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center py-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Cyber Academy</span>
        </div>
        <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full font-mono flex items-center gap-1">
          🔊 Audio Interactive
        </span>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md my-auto space-y-4 relative z-10">
        
        {/* Animated Cyber Mascot Header */}
        <div className="text-center space-y-3">
          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-amber-400 opacity-75 blur-md animate-spin-slow"></div>
            
            <div className="relative w-full h-full bg-slate-950 border border-cyan-500/40 rounded-3xl flex items-center justify-center text-3xl shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300">
              <span className="animate-bounce">🌐⚡</span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-amber-400 tracking-wide uppercase">
              Misafidiana Fiteny Hianarana
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tsindrio ny fiteny tianao mba handrenesana ny feo fanononana sy hanombohana!
            </p>
          </div>
        </div>

        {/* Scrollable Language List */}
        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-cyan-500/30">
          {languages.map((lang) => {
            const isSelected = selectedLanguage === lang.name;
            return (
              <div
                key={lang.name}
                onClick={() => handleSelectLanguage(lang.name, lang.code)}
                className={`group cursor-pointer p-3 rounded-2xl border transition-all duration-300 flex items-center justify-between backdrop-blur-md ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500/20 to-amber-500/20 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.01]"
                    : "bg-slate-900/80 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                    {lang.flag}
                  </span>
                  <div>
                    <h3 className={`text-xs font-bold transition-colors ${isSelected ? "text-cyan-300" : "text-slate-200"}`}>
                      {lang.name} 🔊
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">
                      {lang.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border transition-all ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm"
                      : "bg-slate-950 text-slate-500 border-slate-800 group-hover:text-slate-400"
                  }`}>
                    {isSelected ? "Voafidy ✓" : "Tsindrio →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-500 hover:from-amber-300 hover:to-cyan-300 text-slate-950 font-black py-3.5 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/20 transform active:scale-98 transition-all duration-200"
        >
          Tohizana mankany amin'ny Dashboard →
        </button>

      </main>

      {/* Footer */}
      <footer className="py-2 text-[10px] text-slate-600 font-mono relative z-10">
        Ndao Hianatra Audio Engine © 2026
      </footer>

    </div>
  );
    }
