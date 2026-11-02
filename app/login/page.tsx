"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Client Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
      } else {
        // Redirection vers l'onboarding après inscription
        router.push("/onboarding");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
      } else {
        // Redirection vers l'onboarding après connexion
        router.push("/onboarding");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Cyber Glow Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/90 border border-cyan-500/30 p-6 rounded-3xl shadow-2xl backdrop-blur relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-amber-400 p-[2px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300 text-xl">
              NH
            </div>
          </div>
          <h1 className="text-xl font-extrabold text-amber-400 tracking-wide">
            NDAO HIANATRA
          </h1>
          <p className="text-xs text-slate-400">
            {isSignUp ? "Créer un nouveau compte Cyber" : "Bienvenue ! Connectez-vous à votre compte"}
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/40 text-red-400 text-xs p-3 rounded-xl text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-mono text-cyan-400">Adresse Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@example.com"
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded-xl p-3 text-sm text-slate-100 outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-cyan-400">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded-xl p-3 text-sm text-slate-100 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-slate-950 font-black py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20 uppercase tracking-wider disabled:opacity-50"
          >
            {loading ? "Chargement..." : isSignUp ? "S'inscrire" : "Se connecter"}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-800">
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMsg(null);
            }}
            className="text-xs text-slate-400 hover:text-cyan-400 transition-all font-semibold"
          >
            {isSignUp
              ? "Vous avez déjà un compte ? Se connecter"
              : "Vous n'avez pas de compte ? S'inscrire"}
          </button>
        </div>
      </div>
    </div>
  );
             }
