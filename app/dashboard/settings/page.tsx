"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

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

  const menuItems = [
    { title: "Préférences", desc: "Sons, effets et affichage" },
    { title: "Profil", desc: "Modifier les informations personnelles" },
    { title: "Notifications", desc: "Rappels et alertes de cours" },
    { title: "Cours", desc: "Gérer vos langues d'apprentissage" },
    { title: "Ndao Hianatra for Schools", desc: "Mode académique" },
    { title: "Comptes liés", desc: "Connexion et réseaux" },
    { title: "Paramètres de confidentialité", desc: "Sécurité et données" }
  ];

  const assistanceItems = [
    { title: "Centre d'aide", desc: "FAQ et assistance technique" },
    { title: "Remarques", desc: "Envoyer vos commentaires" }
  ];

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans p-4 pb-16 relative overflow-hidden">
      
      {/* Header miaraka amin'ny Lohateny sy Bokotra TERMINÉ */}
      <header className="w-full max-w-md mx-auto flex justify-between items-center py-3 border-b border-slate-800/60 mb-4 relative z-10">
        <h1 className="text-sm font-bold text-slate-200">Paramètres</h1>
        <button
          onClick={() => {
            playClickSound();
            router.back();
          }}
          className="text-xs font-black text-cyan-400 hover:text-cyan-300 tracking-wider uppercase"
        >
          Terminé
        </button>
      </header>

      {/* Main Content Settings */}
      <main className="w-full max-w-md mx-auto space-y-6 relative z-10">
        
        {/* COMPTE SECTION */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider px-1">Compte</h2>
          <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden divide-y divide-slate-800/60 shadow-xl">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                onClick={playClickSound}
                className="p-4 flex items-center justify-between hover:bg-slate-800/50 cursor-pointer transition-colors"
              >
                <div>
                  <h3 className="text-xs font-bold text-slate-100">{item.title}</h3>
                  <p className="text-[10px] text-slate-500">{item.desc}</p>
                </div>
                <span className="text-slate-500 text-xs font-mono">›</span>
              </div>
            ))}
          </div>
        </div>

        {/* ASSISTANCE SECTION */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono text-amber-400 uppercase tracking-wider px-1">Assistance</h2>
          <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden divide-y divide-slate-800/60 shadow-xl">
            {assistanceItems.map((item, idx) => (
              <div
                key={idx}
                onClick={playClickSound}
                className="p-4 flex items-center justify-between hover:bg-slate-800/50 cursor-pointer transition-colors"
              >
                <div>
                  <h3 className="text-xs font-bold text-slate-100">{item.title}</h3>
                  <p className="text-[10px] text-slate-500">{item.desc}</p>
                </div>
                <span className="text-slate-500 text-xs font-mono">›</span>
              </div>
            ))}
          </div>
        </div>

        {/* DECONNEXION BUTTON */}
        <button
          onClick={() => {
            playClickSound();
            router.push("/");
          }}
          className="w-full bg-slate-900 border border-red-500/30 hover:border-red-500/60 text-red-400 font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg transition-all text-center"
        >
          Déconnexion
        </button>

        {/* FOOTER LINKS */}
        <div className="text-center space-y-1.5 pt-2">
          <p className="text-[10px] text-cyan-400 uppercase font-bold cursor-pointer hover:underline">
            Conditions d'utilisation
          </p>
          <p className="text-[10px] text-cyan-400 uppercase font-bold cursor-pointer hover:underline">
            Politique de confidentialité
          </p>
          <p className="text-[10px] text-slate-500 uppercase font-bold cursor-pointer hover:underline">
            Remerciements
          </p>
        </div>

      </main>
    </div>
  );
}
