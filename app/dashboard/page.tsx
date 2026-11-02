"use client";

import React, { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("fianarana");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-28 relative overflow-hidden">
      {/* Background Cyber Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* HEADER TOP */}
      <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/30 p-4 flex justify-between items-center shadow-lg shadow-cyan-950/20">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-amber-400 p-[2px] shadow-md shadow-cyan-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">
              NH
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-amber-400 tracking-wide text-sm">NDAO HIANATRA</h1>
            <p className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">Cyber Ecosystem</p>
          </div>
        </div>

        {/* Resources */}
        <div className="flex gap-2 text-xs font-mono">
          <span className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-amber-500/40 text-amber-400 flex items-center gap-1 shadow-inner">
            ⚡ <strong className="text-white">5/5</strong>
          </span>
          <span className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-400 flex items-center gap-1 shadow-inner">
            🪙 <strong className="text-white">450</strong>
          </span>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="p-4 max-w-md mx-auto relative z-10">
        
        {/* TAB 1: FIANARANA (CARDS MODERNES & ROLEPLAY) */}
        {activeTab === "fianarana" && (
          <section className="space-y-6 py-2">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-mono bg-cyan-950 text-cyan-400 px-3 py-1 rounded-full border border-cyan-800">
                MODULE 1: FANDRAISANA SY RESAKA
              </span>
              <h2 className="text-xl font-bold text-slate-100">Ny Mission-nao anio</h2>
            </div>

            {/* Mission Cards Grid */}
            <div className="space-y-4">
              {/* Mission Card 1 */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 rounded-2xl p-5 shadow-xl shadow-amber-500/5 relative overflow-hidden group hover:border-amber-400 transition-all">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-bold text-[10px] px-3 py-1 rounded-bl-xl uppercase font-mono">
                  Maimaim-poana
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-amber-500/10 p-3 rounded-xl border border-amber-500/30">
                    🎙️
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-amber-300">1. Roleplay: Fiarahabana</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Miresaha mivantana amin'ny AI Cyber Coach mba hamolaka ny fiteninao.
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-lg shadow-amber-500/20">
                        Atomboka (5 min)
                      </button>
                      <span className="text-[11px] text-cyan-400 font-mono">+50 XP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Card 2 */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-xl relative overflow-hidden group hover:border-cyan-400 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/30">
                    🎧
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-cyan-300">2. Audio Challenge</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Mihinoa tantara fohy dia valio ny fanontaniana 3 mifanaraka aminy.
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <button className="bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 font-bold text-xs px-4 py-2 rounded-xl transition-all">
                        Hianatra
                      </button>
                      <span className="text-[11px] text-amber-400 font-mono">+100 XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: TANJONA */}
        {activeTab === "tanjona" && (
          <section className="space-y-4 py-2">
            <h2 className="text-lg font-bold text-amber-400">Fanamby Isan'andro</h2>
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-3">
              <div className="flex justify-between text-xs">
                <span>Mahavita lesona Roleplay 1</span>
                <span className="text-amber-400 font-bold">1 / 1</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-amber-500 to-cyan-400 h-full w-full"></div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: LAHARANA */}
        {activeTab === "laharana" && (
          <section className="space-y-3 py-2">
            <h2 className="text-lg font-bold text-cyan-400">Top Cyber Students</h2>
            <div className="space-y-2">
              {[
                { rank: 1, name: "Julio Mario", xp: "1250 XP", badge: "🥇" },
                { rank: 2, name: "Nandrian", xp: "980 XP", badge: "🥈" },
                { rank: 3, name: "Manou", xp: "850 XP", badge: "🥉" },
              ].map((user) => (
                <div key={user.rank} className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{user.badge}</span>
                    <span className="font-semibold text-sm">{user.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">{user.xp}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: TSENA & FANDOAVAM-BOLA (BESPOKE MOBILE MONEY) */}
        {activeTab === "tsena" && (
          <section className="space-y-4 py-2">
            <div className="text-center space-y-1">
              <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
                Cyber Pass & Mobile Money
              </h2>
              <p className="text-xs text-slate-400">Safidio ny fomba fandoavam-bola mety aminao</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Option 1: Pass 24H */}
              <div 
                onClick={() => setSelectedPlan("24h")}
                className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                  selectedPlan === "24h" ? "bg-cyan-950/60 border-cyan-400" : "bg-slate-900 border-slate-800"
                }`}
              >
                <div className="text-xs font-bold text-cyan-400 uppercase font-mono">Pass 24h</div>
                <div className="text-lg font-black text-white my-1">500 Ar</div>
                <p className="text-[10px] text-slate-400">Access illimité mandritra ny 1 andro</p>
              </div>

              {/* Option 2: Pass VIP Mensuel */}
              <div 
                onClick={() => setSelectedPlan("vip")}
                className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                  selectedPlan === "vip" ? "bg-amber-950/60 border-amber-400" : "bg-slate-900 border-slate-800"
                }`}
              >
                <div className="text-xs font-bold text-amber-400 uppercase font-mono">VIP Mensuel</div>
                <div className="text-lg font-black text-white my-1">10 000 Ar</div>
                <p className="text-[10px] text-slate-400">Group Video + Vocal AI mandritra ny iray vola</p>
              </div>
            </div>

            {/* Mobile Money Buttons */}
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-3">
              <h3 className="text-xs font-bold text-slate-300">Handoa amin'ny alalan'ny:</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold py-2 rounded-xl text-xs">
                  MVola
                </button>
                <button className="bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-orange-400 font-bold py-2 rounded-xl text-xs">
                  Orange Money
                </button>
                <button className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-400 font-bold py-2 rounded-xl text-xs">
                  Airtel Money
                </button>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: KAONTY */}
        {activeTab === "kaonty" && (
          <section className="space-y-4 py-4 text-center">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-amber-400 p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-4xl">
                🧑‍🚀
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Cyber Learner</h2>
              <p className="text-xs text-cyan-400 font-mono">Level 4 • Explorer</p>
            </div>
          </section>
        )}

      </main>

      {/* FIXED BOTTOM NAVIGATION BAR (CYBER DESIGN) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20 p-3 flex justify-around items-center z-40">
        {[
          { id: "fianarana", label: "Fianarana", icon: "🚀" },
          { id: "tanjona", label: "Tanjona", icon: "🎯" },
          { id: "laharana", label: "Laharana", icon: "🏆" },
          { id: "tsena", label: "Tsena", icon: "💳" },
          { id: "kaonty", label: "Kaonty", icon: "👤" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 text-[11px] font-bold transition-all ${
              activeTab === tab.id
                ? "text-cyan-400 scale-110"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
        }
