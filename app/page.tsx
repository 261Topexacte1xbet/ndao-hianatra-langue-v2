'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      
      {/* NAVBAR */}
      <header className="w-full max-w-5xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
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
          <span className="text-xs px-3 font-medium py-1 rounded
