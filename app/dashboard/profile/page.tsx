"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  // Fiasana mandefa feo kely (Bip)
  const playClickSound = () => {
    if (typeof window !== "undefined") {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
      } catch (e) {
        console.log("Audio error", e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans p-4 pb-20 relative overflow-hidden">
      
      {/* Background Cyber Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header miaraka amin'ny Anarana sy Paramètres (⚙️) */}
      <header className="w-full max-w-md mx-auto flex justify-between items-center py-3 relative z-10">
        <div className="w-8"></div>
        <h1 className="text-sm font-bold tracking-wider text-slate-200">Julio Mario</h1>
        
        {/* Bokotra Paramètres (⚙️) */}
        <button
          onClick={() => {
            playClickSound();
            router.push("/dashboard/settings");
          }}
          className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:bg-slate-800 transition-all shadow-md"
          aria-label="Paramètres"
        >
          ⚙️
        </button>
      </header>

      {/* Main Profile Content */}
      <main className="w-full max-w-md mx-auto space-y-6 relative z-10 mt-4">
        
        {/* Avatar / Profil Cyber */}
        <div className="text-center space-y-3">
          <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-amber-400 opacity-60 blur-md animate-pulse"></div>
            <div className="relative w-full h-full bg-slate-950 border-2 border-cyan-400/60 rounded-full flex items-center justify-center text-4xl shadow-2xl">
              <span>😊</span>
            </div>
            <span className="absolute bottom-1 right-1 bg-cyan-500 text-slate-950 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-slate-950">
              +
            </span>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-white">Julio Mario <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full ml-1">PRO</span></h2>
            <p className="text-[11px] text-slate-400 font-mono">@juliomario940868 • Depuis 2026</p>
          </div>
        </div>

        {/* Statistika kely (Cours, Abonnements, Abonnés) */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-900/90 border border-slate-800/80 p-3 rounded-2xl text-center">
            <span className="text-xs font-bold text-amber-400 block">🇬🇧 🇲🇬</span>
            <span className="text-[10px] text-slate-400">Cours (3)</span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800/80 p-3 rounded-2xl text-center">
            <span className="text-xs font-bold text-cyan-400 block">12</span>
            <span className="text-[10px] text-slate-400">Abonnements</span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800/80 p-3 rounded-2xl text-center">
            <span className="text-xs font-bold text-emerald-400 block">8</span>
            <span className="text-[10px] text-slate-400">Abonnés</span>
          </div>
        </div>

        {/* Bokotra Ampidiro Namana */}
        <button
          onClick={playClickSound}
          className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
        >
          <span>👤+</span> Ampidiro Namana
        </button>

        {/* Récapitulatif */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider px-1">Récapitulatif</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <h4 className="text-sm font-black text-amber-400">2 jours</h4>
                <p className="text-[10px] text-slate-500">Série actuelle</p>
              </div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-sm font-black text-cyan-400">261 XP</h4>
                <p className="text-[10px] text-slate-500">Total XP</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
