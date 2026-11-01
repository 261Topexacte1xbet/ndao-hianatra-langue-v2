'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  // Eto no handraisana ny tena isa marina avy ao amin'ny Supabase amin'ny manaraka
  const [stats, setStats] = useState({
    usersCount: 124, // Hiankina amin'ny tena isan'ny mpianatra ao amin'ny table 'users'
    coursesCount: 8,  // Hiankina amin'ny tena isan'ny lesona ao amin'ny table 'courses'
    systemStatus: 'Opérationnel'
  });

  return (
    <main className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col justify-between p-6 md:p-10 selection:bg-amber-500 selection:text-black">
      
      {/* HEADER */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between pb-6 border-b border-slate-800/60">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Espace <span className="text-amber-400">Admin</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Gestion de la plateforme Ndao Hianatra Langue
          </p>
        </div>

        <Link 
          href="/" 
          className="text-xs px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:bg-slate-700 transition-all font-medium"
        >
          Retour à l'accueil
        </Link>
      </header>

      {/* DASHBOARD CONTENT */}
      <section className="max-w-4xl mx-auto w-full py-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* CARD 1: USERS */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-lg">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Utilisateurs inscrits
          </p>
          <h2 className="text-3xl font-black text-white tracking-tight">
            {stats.usersCount}
          </h2>
        </div>

        {/* CARD 2: COURSES */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-lg">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Cours actifs
          </p>
          <h2 className="text-3xl font-black text-amber-400 tracking-tight">
            {stats.coursesCount}
          </h2>
        </div>

        {/* CARD 3: SYSTEM STATUS */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-lg flex flex-col justify-between">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Statut du Système
          </p>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-bold text-emerald-400">
              {stats.systemStatus}
            </span>
          </div>
        </div>

      </section>

      {/* GENERAL ADMIN INFO */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-lg">
          <h3 className="text-sm font-bold text-white mb-2">
            Administration générale
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Bienvenue dans le panneau d'administration. Les fonctionnalités de gestion des étudiants et des leçons s'afficheront ici une fois connectées à Supabase.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto w-full text-center pt-6 border-t border-slate-800/40 text-[11px] text-slate-500">
        © 2026 Ndao Hianatra Langue • Tous droits réservés
      </footer>

    </main>
  );
        }
