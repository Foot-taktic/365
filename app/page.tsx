"use client";

import React, { useState } from 'react';
import { Search, User, Menu, Tv, Trophy, Flame, X, Play, Activity, ArrowUpRight, Shield, Newspaper, Brain, Settings } from 'lucide-react';

interface League {
  id: string;
  name: string;
  flag: string;
  teams: string[];
}

const leaguesData: League[] = [
  {
    id: "laliga",
    name: "LALIGA",
    flag: "🇪🇸",
    teams: ["REAL MADRID", "FC BARCELONA", "ATLÉTICO DE MADRID", "GIRONA FC", "ATHLETIC CLUB"]
  },
  {
    id: "botola",
    name: "BOTOLA PRO",
    flag: "🇲🇦",
    teams: ["RAJA CA", "WYDAD AC", "AS FAR", "RS BERKANE", "IRT TANGER"]
  },
  {
    id: "premier-league",
    name: "PREMIER LEAGUE",
    flag: "🏴\u200d机制",
    teams: ["MANCHESTER CITY", "LIVERPOOL FC", "ARSENAL FC", "MANCHESTER UNITED", "CHELSEA FC"]
  },
  {
    id: "worldcup",
    name: "WORLD CUP 2026 🏆",
    flag: "🌎",
    teams: ["MAROC 🇲🇦", "FRANCE 🇫🇷", "ARGENTINE 🇦🇷", "BRÉSIL 🇧🇷", "ESPAGNE 🇪🇸"]
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('live');
  const [activeLeague, setActiveLeague] = useState<League>(leaguesData[0]);
  
  // States للتحكم بالقوائم عبر الـ Click
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menuName: string) => {
    if (openDropdown === menuName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menuName);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url('/studium.jpeg')`
  };

  const liveTickerMatches = [
    { teamH: "MAR", teamA: "HAI", score: "4 - 2", status: "FT", qualified: "Morocco 🇲🇦" },
    { teamH: "NED", teamA: "ARG", score: "1 - 2", status: "AET", qualified: "Argentina 🇦🇷" },
    { teamH: "GER", teamA: "PAR", score: "1 - 1", status: "PEN (3-4)", qualified: "Paraguay 🇵🇾" },
    { teamH: "ESP", teamA: "USA", score: "3 - 1", status: "FT", qualified: "Spain 🇪🇸" }
  ];

  return (
    <div 
      className="min-h-screen text-zinc-100 font-sans antialiased relative bg-cover bg-center bg-no-repeat bg-fixed selection:bg-[#d4ff00] selection:text-black overflow-x-hidden"
      style={backgroundImageStyle}
    >
      <style jsx global>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: flex;
          gap: 1.5rem;
          white-space: nowrap;
          animation: customMarquee 30s linear infinite;
        }
      `}</style>

      <div className="fixed inset-0 bg-black/50 pointer-events-none -z-10" />

      <div className="relative z-10">
        {/* TOP TICKER */}
        <div className="bg-[#d4ff00] text-black text-center py-2 text-[10px] md:text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 fill-black" /> Foot-Taktic • Live World Cup & Pro Analytics <Flame className="w-4 h-4 fill-black" />
        </div>

        {/* NAVBAR */}
        <nav className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl px-4 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-1 cursor-pointer">
              <span className="text-white">FOOT</span> 
              <span className="text-black bg-[#d4ff00] px-2.5 py-0.5 rounded-lg">TAKTIC</span>
            </div>
          </div>

          {/* MENU LINKS (ALL CLICK-BASED) */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-zinc-400 relative">
            <a href="#" className="text-[#d4ff00] tracking-widest">Home</a>
            
            {/* 1. ÉQUIPES DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('equipes')}
                className={`font-black uppercase text-xs flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'equipes' ? 'text-[#d4ff00]' : 'hover:text-white'}`}
              >
                <span>Équipes</span> <span className="text-[9px]">{openDropdown === 'equipes' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'equipes' && (
                <div className="absolute left-0 mt-4 w-[480px] bg-[#121212] border border-zinc-800 rounded-2xl shadow-2xl flex z-50 overflow-hidden normal-case font-sans animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="w-1/2 bg-[#18181B] p-2 border-r border-zinc-800">
                    {leaguesData.map((league) => (
                      <button
                        key={league.id}
                        onClick={() => setActiveLeague(league)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl flex items-center justify-between text-[11px] font-black uppercase tracking-wider ${
                          activeLeague.id === league.id ? "bg-black text-[#d4ff00]" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2"><span>{league.flag}</span>{league.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="w-1/2 p-4 flex flex-col gap-2">
                    <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 border-b border-zinc-800 pb-1 text-left">Top Clubs</div>
                    {activeLeague.teams.map((team, idx) => (
                      <span key={idx} className="text-zinc-300 hover:text-[#d4ff00] text-[11px] font-bold uppercase py-0.5 text-left">• {team}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. TACTICAL LABS DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('tactical')}
                className={`font-black uppercase text-xs flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'tactical' ? 'text-[#d4ff00]' : 'hover:text-white'}`}
              >
                <span>Tactical Labs</span> <span className="text-[9px]">{openDropdown === 'tactical' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'tactical' && (
                <div className="absolute left-0 mt-4 w-[280px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-3 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Advanced Frameworks</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Brain className="w-4 h-4" /> Passing Network Systems</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Activity className="w-4 h-4" /> PPDA & High Press Radar</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Shield className="w-4 h-4" /> Low Block Structures</a>
                </div>
              )}
            </div>

            {/* 3. NEWS DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('news')}
                className={`font-black uppercase text-xs flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'news' ? 'text-[#d4ff00]' : 'hover:text-white'}`}
              >
                <span>News</span> <span className="text-[9px]">{openDropdown === 'news' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'news' && (
                <div className="absolute left-0 mt-4 w-[260px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-3 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Feed Category</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Newspaper className="w-4 h-4" /> World Cup 2026 Feed</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Trophy className="w-4 h-4" /> Club Transfers Live</a>
                </div>
              )}
            </div>

            {/* 4. EXTRA HUB (NEW ADDITION) */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('hub')}
                className={`font-black uppercase text-xs flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'hub' ? 'text-[#d4ff00]' : 'hover:text-white'}`}
              >
                <span>Hub Plus</span> <span className="text-[9px]">{openDropdown === 'hub' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'hub' && (
                <div className="absolute right-0 mt-4 w-[240px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-3 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Extra Tools</div>
                  <a href="#" className="flex items-center gap-2 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold text-left">• Predictions Simulation</a>
                  <a href="#" className="flex items-center gap-2 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold text-left">• Scout Reports Archive</a>
                  <a href="#" className="flex items-center gap-2 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold text-left"><Settings className="w-3.5 h-3.5" /> Site Preferences</a>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 text-zinc-400 hover:text-white rounded-full"><Search className="w-4 h-4" /></button>
            <button className="p-2.5 text-zinc-400 hover:text-[#d4ff00] rounded-full border border-zinc-800/80"><User className="w-4 h-4" /></button>
          </div>
        </nav>

        {/* HERO HEADER */}
        <header className="relative min-h-[40vh] flex flex-col justify-center items-center text-center px-4 pt-12">
          <div className="inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[#d4ff00] text-xs font-black tracking-widest uppercase mb-4 shadow-xl">
            <Trophy className="w-3.5 h-3.5" /> World Cup Analytics Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            FOOT-TAKTIC
          </h1>

          {/* MARQUEE */}
          <div className="w-full max-w-4xl px-4 overflow-hidden relative mt-4">
            <div className="relative bg-zinc-950/80 border border-zinc-900 rounded-2xl p-3 flex items-center overflow-hidden">
              <div className="animate-marquee-custom">
                {liveTickerMatches.map((match, idx) => (
                  <div key={idx} className="inline-flex items-center gap-4 bg-zinc-900/60 border border-zinc-800/60 rounded-xl px-4 py-2 min-w-[220px] justify-between">
                    <span className="font-black text-xs text-zinc-200">{match.teamH}</span>
                    <span className="text-xs font-black text-[#d4ff00] bg-black px-2 py-0.5 rounded border border-zinc-800">{match.score}</span>
                    <span className="font-black text-xs text-zinc-200">{match.teamA}</span>
                    <span className="text-[10px] text-zinc-500 font-bold">{match.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* MAIN VIDEO CENTER */}
        <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <section className="bg-zinc-950/90 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-zinc-900 bg-zinc-900/20 p-2 gap-2">
              <button onClick={() => setActiveTab('live')} className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider ${activeTab === 'live' ? 'bg-[#d4ff00] text-black' : 'text-zinc-400'}`}>
                <Tv className="w-4 h-4 inline mr-2" /> Live Tactical Feed
              </button>
              <button onClick={() => setActiveTab('tactics')} className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider ${activeTab === 'tactics' ? 'bg-[#d4ff00] text-black' : 'text-zinc-400'}`}>
                <Activity className="w-4 h-4 inline mr-2" /> Live Matrix Radar
              </button>
            </div>
            <div className="p-6 min-h-[340px] flex items-center justify-center bg-black/30">
              <div className="w-full max-w-3xl aspect-video rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center group relative overflow-hidden">
                <button className="w-14 h-14 rounded-full bg-[#d4ff00] text-black flex items-center justify-center pl-1 transition-transform group-hover:scale-110 shadow-xl shadow-[#d4ff00]/10">
                  <Play className="w-6 h-6 fill-black" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}