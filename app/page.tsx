import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      
      {/* NAVBAR */}
      <header className="w-full max-w-5xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(245,158,11,0.4)]">
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
          className="text-xs px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-all font-medium"
        >
          Espace Admin
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center max-w-3xl mx-auto">
        
        {/* LOGO GLOWING ICON */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-amber-500/30 rounded-3xl blur-xl"></div>
          <div className="relative w-20 h-20 bg-gradient-to-b from-amber-400/20 to-amber-600/5 border border-amber-500/30 rounded-3xl flex items-center justify-center text-4xl shadow-2xl backdrop-blur-xl">
            🌍
          </div>
        </div>

        {/* BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs px-3 font-medium py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1.5">
            🎓 Formation Multilingue
          </span>
          <span className="text-xs px-3 font-medium py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300">
            Édition 2026
          </span>
        </div>

        {/* TITLE & SUBTITLE */}
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          Bienvenue sur <span className="text-amber-400">Ndao Hianatra</span>
        </h1>
        <p className="text-xs md:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
          Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
        </p>

        {/* GLASS CARD FORM */}
        <div className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* TABS */}
          <div className="grid grid-cols-2 gap-1 bg-slate-950/80 p-1 rounded-2xl border border-slate-800/80 mb-6">
            <button className="py-2 text-xs font-semibold rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm">
              Connexion
            </button>
            <button className="py-2 text-xs font-semibold rounded-xl text-slate-400 hover:text-white transition-all">
              S'Inscrire
            </button>
          </div>

          {/* INPUTS */}
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1.5 ml-1">
                E-mail
              </label>
              <input 
                type="email" 
                defaultValue="bynandrian@gmail.com"
                className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1.5 ml-1">
                Mot de passe
              </label>
              <input 
                type="password" 
                defaultValue="••••••••"
                className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
              />
            </div>

            <Link href="/dashboard" className="block w-full pt-2">
              <button 
                type="button" 
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-2xl transition-all text-xs shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.4)] active:scale-[0.98]"
              >
                Se connecter
              </button>
            </Link>
          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 border-t border-slate-800/40 text-[11px] text-slate-500">
        © 2026 Ndao Hianatra Langue • Tous droits réservés
      </footer>

    </main>
  );
        }
