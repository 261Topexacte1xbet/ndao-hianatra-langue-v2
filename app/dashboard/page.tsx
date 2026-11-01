export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-xl font-bold text-amber-400">Tableau de Bord</h1>
            <p className="text-xs text-slate-400">Espace d'apprentissage - Ndao Hianatra Langue</p>
          </div>
          <a 
            href="/" 
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
          >
            Déconnexion
          </a>
        </div>

        {/* PROGRESS SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <h2 className="text-sm font-bold text-white mb-2">Progression des cours</h2>
          <p className="text-xs text-slate-400 mb-4">Langue malagasy - Niveau Débutant</p>
          
          <div className="w-full bg-slate-950 rounded-full h-2.5 mb-2 overflow-hidden border border-slate-800">
            <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <span className="text-[11px] text-slate-400">45% complété</span>
        </div>

        {/* MODULES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-all cursor-pointer">
            <h3 className="text-sm font-bold text-white mb-1">Module 1 : Les salutations</h3>
            <p className="text-xs text-slate-400 mb-3">Apprenez à dire bonjour et à vous présenter.</p>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
              En cours
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-all cursor-pointer">
            <h3 className="text-sm font-bold text-white mb-1">Module 2 : La vie quotidienne</h3>
            <p className="text-xs text-slate-400 mb-3">Vocabulaire essentiel pour le marché et les déplacements.</p>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-medium">
              Verrouillé
            </span>
          </div>
        </div>

      </div>
    </main>
  );
      }
