export default function Page() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-between p-4 sm:p-6 selection:bg-amber-500 selection:text-black">
      
      {/* HEADER / TOP BAR */}
      <header className="w-full max-w-md flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-lg shadow-amber-500/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-sm tracking-wide text-amber-400">Ndao Hianatra Langue</h2>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Écosystème d'apprentissage</p>
          </div>
        </div>

        <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-all flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Espace Admin
        </button>
      </header>

      {/* MAIN CONTENT CARD */}
      <div className="w-full max-w-md my-auto">
        
        {/* HERO BADGES */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
              🎓 Formation Multilingue
            </span>
            <span className="inline-flex items-center text-[11px] font-medium px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
              Édition 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
            Bienvenue sur <span className="text-amber-400">Ndao Hianatra</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm px-4 leading-relaxed">
            Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
          </p>
        </div>

        {/* AUTH BOX */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 shadow-2xl">
          
          {/* TABS */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-950 rounded-2xl mb-6 border border-slate-800/50">
            <button className="py-2.5 text-xs font-semibold rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-sm transition-all">
              Connexion
            </button>
            <button className="py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-all">
              S'inscrire
            </button>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Adresse e-mail</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                <input 
                  type="email" 
                  defaultValue="bynandrian@gmail.com" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">Mot de passe</label>
                <a href="#" className="text-[11px] text-amber-400 hover:underline">Oublié ?</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </span>
                <input 
                  type="password" 
                  defaultValue="••••••••" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </span>
              </div>
            </div>

            <button className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
              Se connecter <span>→</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-500 mt-5 leading-normal">
            En continuant, vous acceptez nos <a href="#" className="underline text-slate-400 hover:text-slate-200">Conditions d'utilisation</a>.
          </p>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-md text-center py-4 text-[11px] text-slate-500">
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>

    </main>
  );
                    }
