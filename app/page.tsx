import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      
      {/* NAVBAR */}
      <header className="w-full max-w-5xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            🌐
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
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-10 text-center max-w-3xl mx-auto">
        
        {/* LOGO GLOWING GLOBE */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-amber-500/30 rounded-3xl blur-xl"></div>
          <div className="relative w-20 h-20 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl flex items-center justify-center text-4xl shadow-2xl backdrop-blur-xl">
            🌍
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
        <div className="w-full max-w-md bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 md:p-7 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left">
          
          {/* TABS */}
          <div className="grid grid-cols-2 gap-1 bg-slate-950/80 p-1 rounded-2xl border border-slate-800/80 mb-6 text-center">
            <button className="py-2 text-xs font-semibold rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm">
              Connexion
            </button>
            <button className="py-2 text-xs font-semibold rounded-xl text-slate-400 hover:text-white transition-all">
              S'inscrire
            </button>
          </div>

          {/* FORM INPUTS */}
          <form className="space-y-4">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1.5 ml-1">
                Adresse e-mail
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 text-sm">
                  ✉️
                </span>
                <input 
                  type="email" 
                  defaultValue="bynandrian@gmail.com"
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5 ml-1 mr-1">
                <label className="text-[11px] font-medium text-slate-300">
                  Mot de passe
                </label>
                <a href="#" className="text-[10px] text-amber-400 hover:underline font-medium">
                  Oublié ?
                </a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 text-sm">
                  🔒
                </span>
                <input 
                  type="password" 
                  defaultValue="••••••••"
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl pl-10 pr-10 py-3 text-xs text-white focus:outline-none focus:border-amber-500/60 transition-all"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 text-sm cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/dashboard">
                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 rounded-2xl transition-all text-xs shadow-[0_4px_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  Se connecter →
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
