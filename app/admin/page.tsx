export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-xl font-bold text-amber-400">Espace Admin</h1>
            <p className="text-xs text-slate-400">Gestion de la plateforme Ndao Hianatra Langue</p>
          </div>
          <a 
            href="/" 
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
          >
            Retour à l'accueil
          </a>
        </div>

        {/* STATS / CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-xs font-medium text-slate-400 mb-1">Utilisateurs inscrits</h3>
            <p className="text-2xl font-bold text-white">124</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-xs font-medium text-slate-400 mb-1">Cours actifs</h3>
            <p className="text-2xl font-bold text-amber-400">8</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-xs font-medium text-slate-400 mb-1">Statut du Système</h3>
            <p className="text-xs font-semibold text-emerald-400 mt-2 bg-emerald-500/10 px-2.5 py-1 rounded-full inline-block">
              ● Opérationnel
            </p>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white mb-4">Administration générale</h2>
          <p className="text-xs text-slate-400">
            Bienvenue dans le panneau d'administration. Les fonctionnalités de gestion des étudiants et des leçons s'afficheront ici.
          </p>
        </div>

      </div>
    </main>
  );
}
