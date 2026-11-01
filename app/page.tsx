'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  // Form states (azo ampifandraisina amin'i Supabase amin'ny manaraka)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      
      {/* NAVBAR */}
      <header className="w-full max-w-5xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* TOP LEFT GOLDEN GLOBE ICON */}
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide leading-tight">
              Ndao Hianatra <span className="text-amber-400">Langue</span>
            </h1>
            <p className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
              Écosystème d'apprentissage
            </p>
          </div>
        </div>

        <Link 
          href="/admin" 
          className="text-xs px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-all font-medium flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Espace Admin
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-8 text-center max-w-3xl mx-auto">
        
        {/* CENTER GOLDEN GLOBE ICON */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-amber-500/25 rounded-3xl blur-2xl"></div>
          <div className="relative w-20 h-20 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl">
            <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        </div>

        {/* BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs px-3 font-medium py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1.5">
            🎓 Formation Multilingue
          </span>
          <span className="text-xs px-3 font-medium py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300">
            Édition 2026
          </span>
        </div>

        {/* TITLE & SUBTITLE */}
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
          Bienvenue sur <span className="text-amber-400">Ndao Hianatra</span>
        </h1>
        <p className="text-xs md:text-sm text-slate-400 max-w-lg mb-6 leading-relaxed">
          Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
        </p>

        {/* GLASS CARD FORM */}
        <div className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left">
          
          {/* TABS (Connexion / S'inscrire) */}
          <div className="grid grid-cols-2 gap-1 bg-slate-950/80 p-1 rounded-2xl border border-slate-800/80 mb-6 text-center">
            <button 
              type="button"
              onClick={() => setActiveTab('login')}
              className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'login' 
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Connexion
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('register')}
              className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'register' 
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              S'inscrire
            </button>
          </div>

          {/* FORM INPUTS */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* NOM (Raha misafidy S'inscrire ihany no mivoaka) */}
            {activeTab === 'register' && (
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1.5 ml-1">
                  Nom complet
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Anaranao sy Fanampiny"
                    className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-all"
                  />
                </div>
              </div>
            )}

            {/* EMAIL */}
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1.5 ml-1">
                Adresse e-mail
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-all"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between mb-1.5 ml-1 mr-1">
                <label className="text-[11px] font-medium text-slate-300">
                  Mot de passe
                </label>
                {activeTab === 'login' && (
                  <a href="#" className="text-[10px] text-amber-400 hover:underline font-medium">
                    Oublié ?
                  </a>
                )}
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl pl-10 pr-10 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-all"
                />
                
                {/* TOGGLE PASSWORD VISIBILITY BUTTON */}
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500 hover:text-slate-300 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 012.122-.138c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2">
              <Link href="/dashboard">
                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 rounded-2xl transition-all text-xs shadow-[0_4px_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {activeTab === 'login' ? 'Se connecter →' : "S'inscrire et commencer →"}
                </button>
              </Link>
            </div>
          </form>

          {/* TERMS FOOTER INSIDE CARD */}
          <p className="text-[10px] text-center text-slate-500 mt-5">
            En continuant, vous acceptez nos <a href="#" className="text-slate-400 underline hover:text-slate-300">Conditions d'utilisation</a>.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-5 border-t border-slate-800/40 text-[11px] text-slate-500">
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>

    </main>
  );
                          }
