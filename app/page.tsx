"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      router.push("/onboarding");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans flex flex-col justify-between items-center p-4 relative overflow-hidden">
      
      {/* Background Cyber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header miaraka amin'ny Logo & Espace Admin misy Animation Maitso */}
      <header className="w-full max-w-md flex justify-between items-center py-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xl shadow-lg shadow-amber-500/10">
            🌍
          </div>
          <div>
            <h1 className="font-extrabold text-amber-400 text-sm tracking-wide">
              Ndao Hianatra Langue
            </h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              Écosystème d'apprentissage
            </p>
          </div>
        </div>

        {/* Bokotra Espace Admin miaraka amin'ny Animation Maitso (Pulse Green Dot) */}
        <button 
          onClick={() => router.push("/admin")}
          className="group flex items-center gap-2 text-xs text-amber-400 border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 rounded-full hover:bg-amber-500/20 transition-all font-medium relative"
        >
          {/* Jiro kely mandeha animation maitso */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          </span>
          <span>Espace Admin</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md my-auto space-y-6 relative z-10">
        
        {/* Icone Globe & Badges */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-3xl text-amber-400 shadow-xl shadow-amber-500/5">
            🌐
          </div>

          <div className="flex justify-center items-center gap-2 text-[11px] font-medium">
            <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full flex items-center gap-1">
              🎓 Formation Multilingue
            </span>
            <span className="bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-full">
              Édition 2026
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight">
              Bienvenue sur <span className="text-amber-400">Ndao Hianatra</span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
            </p>
          </div>
        </div>

        {/* Card Formulaire */}
        <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-3xl shadow-2xl backdrop-blur space-y-5">
          
          {/* Onglets Connexion / S'inscrire */}
          <div className="grid grid-cols-2 bg-slate-950 p-1 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab("login")}
              className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "login"
                  ? "bg-amber-600/30 border border-amber-500/50 text-amber-300 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "signup"
                  ? "bg-amber-600/30 border border-amber-500/50 text-amber-300 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              S'inscrire
            </button>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Adresse e-mail</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
                  ✉️
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@example.com"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-2xl py-3 pl-9 pr-4 text-xs text-slate-100 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-300">Mot de passe</label>
                {activeTab === "login" && (
                  <button type="button" className="text-[11px] text-amber-400 hover:underline font-medium">
                    Oublié ?
                  </button>
                )}
              </div>
              
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
                  🔒
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-2xl py-3 pl-9 pr-10 text-xs text-slate-100 outline-none transition-all"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-400 transition-colors text-sm focus:outline-none"
                  aria-label="Afficher ou masquer le mot de passe"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 rounded-2xl text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              {loading ? "Chargement..." : activeTab === "login" ? "Se connecter →" : "S'inscrire →"}
            </button>
          </form>

          <p className="text-[10px] text-center text-slate-500">
            En continuant, vous acceptez nos{" "}
            <span className="text-slate-400 underline cursor-pointer">Conditions d'utilisation</span>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-2 text-[10px] text-slate-600 relative z-10">
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </div>
  );
}
