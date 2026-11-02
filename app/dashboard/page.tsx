"use client";

import React, { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("fianarana");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur border-b border-amber-500/20 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950">
            NH
          </div>
          <div>
            <h1 className="font-bold text-amber-400 leading-tight">NDAO HIANATRA</h1>
            <p className="text-xs text-cyan-400">CYBER LANGUE</p>
          </div>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          <span className="bg-slate-800 px-3 py-1.5 rounded-full border border-amber-500/30 text-amber-400">🔥 5</span>
          <span className="bg-slate-800 px-3 py-1.5 rounded-full border border-amber-500/30 text-amber-400">🪙 450</span>
        </div>
      </header>

      {/* Main Content strictly depending on Active Tab */}
      <main className="p-4 max-w-md mx-auto">
        {activeTab === "fianarana" && (
          <section className="space-y-6 text-center py-6">
            <h2 className="text-lg font-bold text-cyan-400">Zotra Fizotran'ny Lesona</h2>
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-amber-500/20 border-2 border-amber-400 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-amber-500/20 cursor-pointer">
                <span className="-rotate-45 font-bold text-amber-400">1. Salama</span>
              </div>
              <div className="w-20 h-20 bg-cyan-500/20 border-2 border-cyan-400 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-cyan-500/20 cursor-pointer">
                <span className="-rotate-45 font-bold text-cyan-400">2. Fampidirana</span>
              </div>
            </div>
          </section>
        )}

        {activeTab === "tanjona" && (
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-amber-400 mb-4">Dera sy Tanjona Isan'andro</h2>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <p className="text-sm font-semibold">Mahavita lesona 1</p>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-1/2"></div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "laharana" && (
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-cyan-400 mb-4">Laharana (Classement)</h2>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
              <span>1. Julio Mario</span>
              <span className="text-amber-400 font-bold">535 XP</span>
            </div>
          </section>
        )}

        {activeTab === "tsena" && (
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-amber-400 mb-4">Tsena sy Mobile Money</h2>
            <div className="bg-slate-900 border border-amber-500/30 p-4 rounded-xl space-y-2 text-center">
              <h3 className="font-bold text-cyan-400">Pack Premium</h3>
              <p className="text-xs text-slate-400">Faccess tsy misy fetra amin'ny lesona rehetra</p>
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 rounded-lg text-sm mt-2">
                Mividy (MVola / Orange / Airtel)
              </button>
            </div>
          </section>
        )}

        {activeTab === "kaonty" && (
          <section className="space-y-4 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 border-2 border-amber-400 flex items-center justify-center text-2xl font-bold">
              👤
            </div>
            <h2 className="text-lg font-bold text-slate-100">Ny Kaontiko</h2>
            <p className="text-xs text-slate-400">Mpianatra fiteny Malagasy</p>
          </section>
        )}
      </main>

      {/* Bottom Navigation (5 Tabs) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 p-3 flex justify-around items-center z-40">
        {[
          { id: "fianarana", label: "Fianarana", icon: "🗺️" },
          { id: "tanjona", label: "Tanjona", icon: "🎯" },
          { id: "laharana", label: "Laharana", icon: "🏆" },
          { id: "tsena", label: "Tsena", icon: "🛒" },
          { id: "kaonty", label: "Kaonty", icon: "👤" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 text-xs font-semibold ${
              activeTab === tab.id ? "text-amber-400 scale-105" : "text-slate-500"
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
            }
