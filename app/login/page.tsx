export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500 flex items-center justify-center font-bold text-black mb-3">
            N
          </div>
          <h1 className="text-xl font-bold text-white mb-1">Connexion</h1>
          <p className="text-xs text-slate-400">Accédez à votre espace Ndao Hianatra Langue</p>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">E-mail</label>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Mot de passe</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-xl transition-all text-sm mt-2">
            Se connecter
          </button>
        </div>

        {/* FOOTER LINK */}
        <div className="text-center mt-6">
          <a href="/" className="text-xs text-amber-400 hover:underline">
            ← Retour à l'accueil
          </a>
        </div>

      </div>
    </main>
  );
          }
