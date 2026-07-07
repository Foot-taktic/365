"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, User, Tv, Trophy, Flame, Shield, Newspaper, Brain, 
  Settings, Users, BarChart3, Target, Radio, Calendar, 
  Award, Eye, Zap, Map, Dribbble, LineChart, MessageSquare, 
  BookOpen, Layers, TrendingUp, Globe, Menu, X
} from 'lucide-react';

interface League {
  id: string;
  name: string;
  flag: string;
  teams: string[];
}

const leaguesData: League[] = [
  {
    id: "laliga",
    name: "LALIGA EASPORTS",
    flag: "🇪🇸",
    teams: ["REAL MADRID", "FC BARCELONA", "ATLÉTICO DE MADRID", "GIRONA FC", "ATHLETIC CLUB", "REAL SOCIEDAD", "REAL BETIS", "VALENCIA CF"]
  },
  {
    id: "botola",
    name: "BOTOLA PRO INWI",
    flag: "🇲🇦",
    teams: ["RAJA CA", "WYDAD AC", "AS FAR", "RS BERKANE", "IRT TANGER", "MAS FÈS", "FUS RABAT", "HASSANIA AGADIR"]
  },
  {
    id: "premier-league",
    name: "PREMIER LEAGUE",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    teams: ["MANCHESTER CITY", "LIVERPOOL FC", "ARSENAL FC", "MANCHESTER UNITED", "CHELSEA FC", "TOTTENHAM HOTSPUR", "NEWCASTLE UNITED", "ASTON VILLA"]
  },
  {
    id: "worldcup",
    name: "WORLD CUP 2026 🏆",
    flag: "🌎",
    teams: ["MAROC 🇲🇦", "FRANCE 🇫🇷", "ARGENTINE 🇦🇷", "BRÉSIL 🇧🇷", "ESPAGNE 🇪🇸", "ANGLETERRE 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ALLEMAGNE 🇩🇪", "ITALIE 🇮🇹"]
  }
];

export default function Home() {
  const [activeLeague, setActiveLeague] = useState<League>(leaguesData[0]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('/studium.jpeg')`
  };

  return (
    <div 
      className="min-h-screen text-zinc-100 font-sans antialiased relative bg-cover bg-center bg-no-repeat bg-fixed selection:bg-[#d4ff00] selection:text-black overflow-x-hidden"
      style={backgroundImageStyle}
    >
      <div className="fixed inset-0 bg-black/50 pointer-events-none -z-10" />

      <div className="relative z-10">
        {/* TOP TICKER */}
        <div className="bg-[#d4ff00] text-black text-center py-2 text-[10px] md:text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 fill-black" /> Foot-Taktic • Live World Cup & Pro Analytics <Flame className="w-4 h-4 fill-black" />
        </div>

        {/* NAVBAR */}
        <nav ref={navRef} className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
          <div className="flex items-center gap-4">
            {/* BURGER MENU BUTTON FOR MOBILE */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-1 cursor-pointer">
              <span className="text-white">FOOT</span> 
              <span className="text-black bg-[#d4ff00] px-2.5 py-0.5 rounded-lg">TAKTIC</span>
            </div>
          </div>

          {/* MEGA NAVIGATION LINKS FOR DESKTOP */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-zinc-400 relative">
            <a href="#" className="text-[#d4ff00] border-b-2 border-[#d4ff00] pb-1 tracking-widest">Home</a>
            
            {/* 1. ÉQUIPES DROPDOWN */}
            <div className="relative">
              <button onClick={() => toggleDropdown('equipes')} className={`font-black uppercase flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'equipes' ? 'text-[#d4ff00]' : 'hover:text-white'}`}>
                <span>Équipes</span> <span className="text-[8px]">{openDropdown === 'equipes' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'equipes' && (
                <div className="absolute left-0 mt-4 w-[520px] bg-[#121212] border border-zinc-800 rounded-2xl shadow-2xl flex z-50 overflow-hidden normal-case font-sans">
                  <div className="w-1/2 bg-[#18181B] p-2 border-r border-zinc-800">
                    {leaguesData.map((league) => (
                      <button key={league.id} onClick={() => setActiveLeague(league)} className={`w-full text-left px-4 py-2.5 rounded-xl flex items-center justify-between text-[11px] font-black uppercase tracking-wider transition-all ${activeLeague.id === league.id ? "bg-black text-[#d4ff00]" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}>
                        <span className="flex items-center gap-2"><span>{league.flag}</span>{league.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="w-1/2 p-4 flex flex-col gap-1.5 overflow-y-auto max-h-[320px]">
                    <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 border-b border-zinc-800 pb-1 text-left">Leagues Database</div>
                    {activeLeague.teams.map((team, idx) => (
                      <span key={idx} className="text-zinc-300 hover:text-[#d4ff00] text-[11px] font-bold uppercase py-0.5 text-left cursor-pointer transition-colors">• {team}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. TACTICAL LABS */}
            <div className="relative">
              <button onClick={() => toggleDropdown('tactical')} className={`font-black uppercase flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'tactical' ? 'text-[#d4ff00]' : 'hover:text-white'}`}>
                <span>Tactical Labs</span> <span className="text-[8px]">{openDropdown === 'tactical' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'tactical' && (
                <div className="absolute left-0 mt-4 w-[320px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Advanced Frameworks</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Brain className="w-4 h-4 text-emerald-400" /> Passing Networks</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Shield className="w-4 h-4 text-blue-400" /> Low Block Structures</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Users className="w-4 h-4 text-[#d4ff00]" /> Half-Space Overloads</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><BarChart3 className="w-4 h-4 text-purple-400" /> Expected Goals (xG)</a>
                </div>
              )}
            </div>

            {/* 3. SCOUTING */}
            <div className="relative">
              <button onClick={() => toggleDropdown('performance')} className={`font-black uppercase flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'performance' ? 'text-[#d4ff00]' : 'hover:text-white'}`}>
                <span>Scouting</span> <span className="text-[8px]">{openDropdown === 'performance' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'performance' && (
                <div className="absolute left-0 mt-4 w-[300px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Metrics & Scouting</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><LineChart className="w-4 h-4 text-cyan-400" /> Player Fitness Radar</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Zap className="w-4 h-4 text-yellow-400" /> Acceleration & Sprints</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Target className="w-4 h-4 text-rose-400" /> Shooting Accuracy Maps</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Layers className="w-4 h-4 text-teal-400" /> Squad Rotation Depth</a>
                </div>
              )}
            </div>

            {/* 4. TRANSFERS */}
            <div className="relative">
              <button onClick={() => toggleDropdown('transfers')} className={`font-black uppercase flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'transfers' ? 'text-[#d4ff00]' : 'hover:text-white'}`}>
                <span>Transfers</span> <span className="text-[8px]">{openDropdown === 'transfers' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'transfers' && (
                <div className="absolute left-0 mt-4 w-[280px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Market Intelligence</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><TrendingUp className="w-4 h-4 text-emerald-400" /> Market Values Live</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Users className="w-4 h-4 text-amber-400" /> Agent Networks</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Globe className="w-4 h-4 text-blue-400" /> Work Permit Calculator</a>
                </div>
              )}
            </div>

            {/* 5. NEWS */}
            <div className="relative">
              <button onClick={() => toggleDropdown('news')} className={`font-black uppercase flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'news' ? 'text-[#d4ff00]' : 'hover:text-white'}`}>
                <span>News</span> <span className="text-[8px]">{openDropdown === 'news' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'news' && (
                <div className="absolute left-0 mt-4 w-[280px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Media Feed</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Newspaper className="w-4 h-4 text-indigo-400" /> World Cup 2026 Feed</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Trophy className="w-4 h-4 text-amber-400" /> Club Transfers Live</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Radio className="w-4 h-4 text-red-400" /> Press Briefings</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold py-1 text-left"><Calendar className="w-4 h-4 text-zinc-400" /> Fixture Timetables</a>
                </div>
              )}
            </div>

            {/* 6. HUB PLUS */}
            <div className="relative">
              <button onClick={() => toggleDropdown('hub')} className={`font-black uppercase flex items-center gap-1 tracking-widest transition-colors ${openDropdown === 'hub' ? 'text-[#d4ff00]' : 'hover:text-white'}`}>
                <span>Hub Plus</span> <span className="text-[8px]">{openDropdown === 'hub' ? "▲" : "▼"}</span>
              </button>
              {openDropdown === 'hub' && (
                <div className="absolute right-0 mt-4 w-[280px] bg-[#121212] border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 normal-case font-sans">
                  <div className="text-[9px] font-black text-zinc-500 uppercase border-b border-zinc-800 pb-1 text-left">Specialist Tools</div>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold text-left"><Dribbble className="w-4 h-4 text-pink-400" /> Ball-Tracking Engine</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold text-left"><BookOpen className="w-4 h-4 text-amber-500" /> Masterclass Articles</a>
                  <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] text-xs font-bold text-left"><MessageSquare className="w-4 h-4 text-sky-400" /> Coach Forum Room</a>
                  <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-[#d4ff00] text-xs font-bold text-left mt-1 pt-1.5 border-t border-zinc-800"><Settings className="w-3.5 h-3.5" /> Configuration</a>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="p-2 text-zinc-400 hover:text-white rounded-full transition-colors"><Search className="w-4.5 h-4.5" /></button>
            <button className="p-2 text-zinc-400 hover:text-[#d4ff00] rounded-full border border-zinc-800/80 transition-colors"><User className="w-4.5 h-4.5" /></button>
          </div>
        </nav>

        {/* MOBILE SIDEBAR MENU (NEW ADDITION) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[73px] bg-zinc-950 z-40 lg:hidden overflow-y-auto p-6 flex flex-col gap-6 animate-in slide-in-from-left duration-200">
            <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-wider text-zinc-400">
              <a href="#" className="text-[#d4ff00] py-2 border-b border-zinc-900">Home</a>
              
              <div className="flex flex-col gap-2 py-2 border-b border-zinc-900">
                <span className="text-white text-xs text-zinc-500">Tactical Labs</span>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><Brain className="w-4 h-4 text-emerald-400" /> Passing Networks</a>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><Shield className="w-4 h-4 text-blue-400" /> Low Block</a>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><BarChart3 className="w-4 h-4 text-purple-400" /> Expected Goals (xG)</a>
              </div>

              <div className="flex flex-col gap-2 py-2 border-b border-zinc-900">
                <span className="text-white text-xs text-zinc-500">Scouting & Fitness</span>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><LineChart className="w-4 h-4 text-cyan-400" /> Fitness Radar</a>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><Zap className="w-4 h-4 text-yellow-400" /> Sprints Acceleration</a>
              </div>

              <div className="flex flex-col gap-2 py-2 border-b border-zinc-900">
                <span className="text-white text-xs text-zinc-500">Transfers Market</span>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><TrendingUp className="w-4 h-4 text-emerald-400" /> Market Values</a>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><Globe className="w-4 h-4 text-blue-400" /> Work Permits</a>
              </div>

              <div className="flex flex-col gap-2 py-2 border-b border-zinc-900">
                <span className="text-white text-xs text-zinc-500">News Feed</span>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><Newspaper className="w-4 h-4 text-indigo-400" /> World Cup Feed</a>
                <a href="#" className="flex items-center gap-3 text-zinc-300 text-xs py-1"><Calendar className="w-4 h-4 text-zinc-400" /> Fixtures</a>
              </div>
            </div>
          </div>
        )}

        {/* HERO HEADER */}
        <header className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 pt-12">
          <div className="inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[#d4ff00] text-xs font-black tracking-widest uppercase mb-4 shadow-xl">
            <Trophy className="w-3.5 h-3.5" /> World Cup Analytics Platform
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            FOOT-TAKTIC
          </h1>
        </header>
      </div>
    </div>
  );
}