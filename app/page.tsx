export default function Page() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-between p-4">
      
      {/* HEADER */}
      <header className="w-full max-w-md flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-black">
            N
          </div>
          <span className="font-bold text-sm text-amber-400">Ndao Hianatra</span>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
          Admin
        </span>
      </header>

      {/* CONTENT CARD */}
      <div className="w-full max-w-md my-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-white mb-1">
            Bienvenue sur <span className="text-amber-400">Ndao Hianatra</span>
          </h1>
          <p className="text-xs text-slate-400">
            Plateforme d'apprentissage des langues
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">E-mail</label>
            <input 
              type="email" 
              defaultValue="bynandrian@gmail.com" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Mot de passe</label>
            <input 
              type="password" 
              defaultValue="********" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-xl transition-all text-sm mt-2">
            Se connecter
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full text-center py-4 text-xs text-slate-500">
        © 2026 Ndao Hianatra Langue
      </footer>

    </main>
  );
      }
