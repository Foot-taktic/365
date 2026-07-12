"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, User, Trophy, Flame, Brain, Shield, Users, BarChart3, Menu, X,
  ArrowUpRight, Calendar, Star, ChevronDown, Clock, BookOpen, Vote,
  LayoutGrid, Tv, Newspaper, ArrowLeft
} from 'lucide-react';

interface League {
  id: string;
  name: string;
  flag: string;
  teams: string[];
}

interface Article {
  id: string;
  title: string;
  tag: string;
  heroImage: string;
  date: string;
  readTime: string;
  stage: string;
  teamH: string;
  teamA: string;
  flagH: string;
  flagA: string;
  scoreH: number;
  scoreA: number;
  summary: string;
  sections: { title: string; text: string }[];
  stats: { label: string; value: string }[];
  goals: { player: string; minute: string }[];
}

const leaguesData: League[] = [
  {
    id: "worldcup",
    name: "WORLD CUP 2026 🏆",
    flag: "🌎",
    teams: ["MAROC 🇲🇦", "FRANCE 🇫🇷", "ARGENTINE 🇦🇷", "BRÉSIL 🇧🇷", "ESPAGNE 🇪🇸", "ANGLETERRE 🏴\u200D󠁧󠁢󠁥󠁮󠁧󠁿", "ALLEMAGNE 🇩🇪", "ITALIE 🇮🇹"]
  },
  {
    id: "botola",
    name: "BOTOLA PRO INWI",
    flag: "🇲🇦",
    teams: ["RAJA CA", "WYDAD AC", "AS FAR", "RS BERKANE", "IRT TANGER", "MAS FÈS", "FUS RABAT", "HASSANIA AGADIR"]
  },
  {
    id: "laliga",
    name: "LALIGA EASPORTS",
    flag: "🇪🇸",
    teams: ["REAL MADRID", "FC BARCELONA", "ATLÉTICO DE MADRID", "GIRONA FC", "ATHLETIC CLUB", "REAL SOCIEDAD", "REAL BETIS", "VALENCIA CF"]
  },
  {
    id: "premier-league",
    name: "PREMIER LEAGUE",
    flag: "🏴\u200D󠁧󠁢󠁥󠁮󠁧󠁿",
    teams: ["MANCHESTER CITY", "LIVERPOOL FC", "ARSENAL FC", "MANCHESTER UNITED", "CHELSEA FC", "TOTTENHAM HOTSPUR", "NEWCASTLE UNITED", "ASTON VILLA"]
  }
];

const finishedMatches = [
  { id: 1, teamH: "FRA", teamA: "MAR", logoH: "https://flagcdn.com/w80/fr.png", logoA: "https://flagcdn.com/w80/ma.png", scoreH: 2, scoreA: 0, status: "1/4 FINALS" },
  { id: 2, teamH: "ESP", teamA: "BEL", logoH: "https://flagcdn.com/w80/es.png", logoA: "https://flagcdn.com/w80/be.png", scoreH: 2, scoreA: 1, status: "1/4 FINALS" },
  { id: 3, teamH: "ARG", teamA: "EGY", logoH: "https://flagcdn.com/w80/ar.png", logoA: "https://flagcdn.com/w80/eg.png", scoreH: 3, scoreA: 2, status: "ROUND OF 16" },
  { id: 4, teamH: "SUI", teamA: "COL", logoH: "https://flagcdn.com/w80/ch.png", logoA: "https://flagcdn.com/w80/co.png", scoreH: 0, scoreA: 0, status: "SUI (4-3 PEN)" }
];

const tomorrowMatches = [
  { id: 1, teamH: "ENG", teamA: "POR", logoH: "https://flagcdn.com/w80/gb-eng.png", logoA: "https://flagcdn.com/w80/pt.png", time: "18:00", status: "TOMORROW" },
  { id: 2, teamH: "BEL", teamA: "CRO", logoH: "https://flagcdn.com/w80/be.png", logoA: "https://flagcdn.com/w80/hr.png", time: "20:00", status: "TOMORROW" },
  { id: 3, teamH: "NED", teamA: "USA", logoH: "https://flagcdn.com/w80/nl.png", logoA: "https://flagcdn.com/w80/us.png", time: "21:45", status: "TOMORROW" }
];

const articlesData: Article[] = [
  {
    id: "france-morocco",
    title: "France End Morocco's Historic World Cup Journey and Reach the Semi-finals",
    tag: "FIFA WORLD CUP 2026",
    heroImage: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    date: "July 9, 2026",
    readTime: "7 min read",
    stage: "FIFA WORLD CUP 2026 • QUARTER-FINAL",
    teamH: "France",
    flagH: "https://flagcdn.com/w160/fr.png",
    teamA: "Morocco",
    flagA: "https://flagcdn.com/w160/ma.png",
    scoreH: 2,
    scoreA: 0,
    summary: "France booked their place in the FIFA World Cup 2026 semi-finals after defeating Morocco 2-0 in a highly anticipated quarter-final clash. The Atlas Lions fought bravely throughout the contest but were unable to overcome the experience and clinical finishing of the reigning European giants.",
    sections: [
      { title: "A Balanced First Half", text: "Morocco entered the match with confidence following impressive victories over Canada and the Netherlands. Walid Regragui's side defended compactly and attempted to launch dangerous counter-attacks through the pace of their wide players. France, however, controlled possession and patiently searched for spaces between the Moroccan defensive lines." },
      { title: "France Find the Breakthrough", text: "Early in the second half, France increased the tempo. Kylian Mbappé produced a moment of brilliance to break the deadlock before Ousmane Dembélé doubled the advantage only minutes later. Despite Morocco's determination and several attacking substitutions, France remained defensively solid until the final whistle." },
      { title: "Tactical Analysis", text: "Didier Deschamps instructed his midfield to press aggressively while forcing Morocco to play long balls. The French full-backs constantly overlapped, stretching the Moroccan back line and creating numerical superiority on both wings. Morocco continued to defend with courage, but France's quality in transition ultimately proved decisive." },
      { title: "What This Means", text: "France advance to the semi-finals where another huge challenge awaits. Morocco's tournament comes to an end, but their campaign will be remembered as another historic achievement for African football. Throughout the competition, the Atlas Lions displayed remarkable discipline, resilience and tactical intelligence, earning admiration from supporters around the world." }
    ],
    stats: [
      { label: "Possession", value: "61% - 39%" },
      { label: "Shots", value: "16 - 8" },
      { label: "Shots on Target", value: "7 - 3" },
      { label: "Pass Accuracy", value: "91% - 84%" },
      { label: "Corners", value: "6 - 4" }
    ],
    goals: [
      { player: "Kylian Mbappé", minute: "60'" },
      { player: "Ousmane Dembélé", minute: "66'" }
    ]
  },
  {
    id: "spain-belgium",
    title: "Spain 2-1 Belgium | World Cup 2026 Quarter-final Match Report",
    tag: "FIFA WORLD CUP 2026",
    heroImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
    date: "July 12, 2026",
    readTime: "5 min read",
    stage: "FIFA WORLD CUP 2026 • QUARTER-FINAL",
    teamH: "Spain",
    flagH: "https://flagcdn.com/w160/es.png",
    teamA: "Belgium",
    flagA: "https://flagcdn.com/w160/be.png",
    scoreH: 2,
    scoreA: 1,
    summary: "Spain secured a dramatic place in the FIFA World Cup 2026 semi-finals after defeating Belgium 2-1 in a thrilling quarter-final clash. Both teams entered the match full of confidence, but Spain's superior ball control and tactical discipline proved decisive in one of the tournament's most entertaining matches.",
    sections: [
      { title: "Dominating Midfield From The Start", text: "From the opening whistle, Spain controlled possession through quick passing combinations and intelligent movement in midfield. Belgium defended with discipline while looking to exploit spaces through fast counter-attacks. The first twenty minutes saw Spain dominate territory, forcing Belgium deep inside their own half." },
      { title: "Ruiz Finds The Breakthrough", text: "Spain finally found the breakthrough midway through the first half. A flowing attacking move ended with Fabián Ruiz calmly finishing inside the penalty area, sending the Spanish supporters into celebration. Belgium attempted an immediate response but Spain maintained control until halftime." },
      { title: "Belgian Pressure & The Equalizer", text: "The second half began with Belgium showing much more aggression. Their pressing became more intense and they were rewarded with a deserved equalizer after capitalizing on a defensive mistake. At 1-1, the momentum shifted and the match became increasingly open with chances appearing at both ends." },
      { title: "Merino's Late Decisive Strike", text: "Spain remained patient despite Belgium's pressure. The decisive moment arrived in the closing stages when Mikel Merino finished another beautifully crafted Spanish move to restore the lead. Belgium pushed everyone forward during the final minutes, creating late pressure, but Spain defended brilliantly until the final whistle." }
    ],
    stats: [
      { label: "Possession", value: "57% - 43%" },
      { label: "Shots", value: "14 - 11" },
      { label: "Shots on Target", value: "6 - 5" },
      { label: "Pass Accuracy", value: "88% - 81%" },
      { label: "Corners", value: "5 - 5" }
    ],
    goals: [
      { player: "Fabián Ruiz", minute: "34'" },
      { player: "Mikel Merino", minute: "82'" }
    ]
  }
];

export default function Home() {
  const [activeLeague, setActiveLeague] = useState<League>(leaguesData[0]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home'); 
  const [selectedArticle, setSelectedArticle] = useState<Article>(articlesData[0]);
  const navRef = useRef<HTMLDivElement>(null);

  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({ home: 642, away: 318 }); 
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const totalVotes = votes.home + votes.away;
  const homePercent = Math.round((votes.home / totalVotes) * 100);
  const awayPercent = Math.round((votes.away / totalVotes) * 100);

  const handleVote = (type: 'home' | 'away') => {
    if (hasVoted) return;
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setSelectedTeam(type);
    setHasVoted(true);
  };

  const toggleDropdown = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const toggleMobileDropdown = (menuName: string) => {
    setMobileDropdown(mobileDropdown === menuName ? null : menuName);
  };

  const openArticle = (articleId: string) => {
    const article = articlesData.find(a => a.id === articleId);
    if (article) {
      setSelectedArticle(article);
      setCurrentView('article');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  return (
    <div 
      className="min-h-screen text-zinc-100 font-sans antialiased relative bg-cover bg-center bg-no-repeat bg-fixed selection:bg-[#d4ff00] selection:text-black overflow-x-hidden flex flex-col justify-between"
      style={{ backgroundImage: `url('/studium.jpeg')` }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-stream {
          display: flex;
          width: max-content;
          animation: ticker 40s linear infinite;
        }
        .animate-ticker-stream:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="fixed inset-0 bg-black/60 pointer-events-none z-0" />

      <div className="relative z-10 w-full flex-grow">
        
        {/* TOP BAR */}
        <div className="bg-[#d4ff00] text-black text-center py-2 text-[10px] md:text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2 relative z-50">
          <Flame className="w-4 h-4 fill-black" /> Foot-Taktic • World Cup Match Analytics & Results <Flame className="w-4 h-4 fill-black" />
        </div>

        {/* NAVBAR */}
        <nav ref={navRef} className="border-b border-zinc-800 bg-zinc-950 px-4 md:px-8 py-0 flex items-center justify-between sticky top-0 z-50 shadow-2xl">
          <div className="flex items-center gap-6 h-16">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div onClick={() => setCurrentView('home')} className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-1 cursor-pointer h-full">
              <span className="text-white">FOOT</span> 
              <span className="text-black bg-[#d4ff00] px-2 py-0.5 rounded">TAKTIC</span>
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-zinc-300 h-full relative">
              <button onClick={() => setCurrentView('home')} className={`px-4 h-full flex items-center gap-1.5 transition-colors ${currentView === 'home' ? 'text-[#d4ff00] bg-zinc-900/50 border-b-2 border-[#d4ff00]' : 'hover:text-white'}`}>
                <Flame className="w-3.5 h-3.5" /> Live Scores
              </button>
              
              {/* Competitions Dropdown */}
              <div className="h-full flex items-center">
                <button 
                  onClick={() => toggleDropdown('equipes')} 
                  className={`px-4 h-full flex items-center gap-1.5 hover:bg-zinc-900 hover:text-white transition-colors ${openDropdown === 'equipes' ? 'bg-zinc-900 text-[#d4ff00]' : ''}`}
                >
                  <Trophy className="w-3.5 h-3.5" /> <span>Competitions</span> <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'equipes' ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === 'equipes' && (
                  <div className="absolute left-0 top-16 w-[85vw] max-w-5xl bg-zinc-950 border border-zinc-800 rounded-b-xl shadow-2xl flex z-50 overflow-hidden normal-case font-sans animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="w-1/3 bg-zinc-900/60 p-3 border-r border-zinc-800 flex flex-col gap-1">
                      <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-3 mb-2">Select League</div>
                      {leaguesData.map((league) => (
                        <button 
                          key={league.id} 
                          onMouseEnter={() => setActiveLeague(league)}
                          onClick={() => setActiveLeague(league)} 
                          className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between text-[11px] font-black uppercase tracking-wider transition-all ${activeLeague.id === league.id ? "bg-[#d4ff00] text-black shadow-lg" : "text-zinc-300 hover:bg-zinc-800"}`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-sm">{league.flag}</span>
                            {league.name}
                          </span>
                          <ArrowUpRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </div>

                    <div className="w-2/3 p-6 grid grid-cols-3 gap-6 bg-zinc-950">
                      <div className="col-span-2">
                        <div className="text-[10px] font-black text-[#d4ff00] uppercase tracking-widest mb-3 pb-1 border-b border-zinc-800 flex items-center gap-1.5">
                          <LayoutGrid className="w-3.5 h-3.5" /> Active League Clubs
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                          {activeLeague.teams.map((team, idx) => (
                            <span key={idx} className="text-zinc-300 hover:text-[#d4ff00] text-xs font-bold uppercase cursor-pointer transition-colors flex items-center gap-2 group">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#d4ff00]" />
                              {team}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-l border-zinc-800 pl-6 flex flex-col gap-4">
                        <div>
                          <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Coverage</div>
                          <div className="flex flex-col gap-2">
                            <a href="#" className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-2"><Newspaper className="w-3.5 h-3.5 text-zinc-500" /> News Hub</a>
                            <a href="#" className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-2"><Tv className="w-3.5 h-3.5 text-zinc-500" /> Match Highlights</a>
                          </div>
                        </div>
                        <div className="mt-auto bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                          <p className="text-[10px] font-black text-[#d4ff00] uppercase">Analysis Engine</p>
                          <p className="text-[11px] text-zinc-400 mt-1 leading-normal">Deep stats dashboard active for this league.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tactical Labs */}
              <div className="h-full flex items-center">
                <button 
                  onClick={() => toggleDropdown('tactical')} 
                  className={`px-4 h-full flex items-center gap-1.5 hover:bg-zinc-900 hover:text-white transition-colors ${openDropdown === 'tactical' ? 'bg-zinc-900 text-[#d4ff00]' : ''}`}
                >
                  <Brain className="w-3.5 h-3.5" /> <span>Tactical Labs</span> <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'tactical' ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === 'tactical' && (
                  <div className="absolute left-0 top-16 w-[600px] bg-zinc-950 border border-zinc-800 rounded-b-xl p-6 shadow-2xl z-50 grid grid-cols-2 gap-6 normal-case font-sans animate-in fade-in slide-in-from-top-2 duration-200">
                    <div>
                      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1.5 mb-3 flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5" /> Advanced Metrics
                      </div>
                      <div className="flex flex-col gap-1">
                        <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] hover:bg-zinc-900 p-2 rounded-lg text-xs font-bold transition-all"><Brain className="w-4 h-4 text-emerald-400" /> Passing Networks</a>
                        <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] hover:bg-zinc-900 p-2 rounded-lg text-xs font-bold transition-all"><Shield className="w-4 h-4 text-blue-400" /> Low Block Structures</a>
                        <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] hover:bg-zinc-900 p-2 rounded-lg text-xs font-bold transition-all"><Users className="w-4 h-4 text-[#d4ff00]" /> Half-Space Overloads</a>
                        <a href="#" className="flex items-center gap-3 text-zinc-300 hover:text-[#d4ff00] hover:bg-zinc-900 p-2 rounded-lg text-xs font-bold transition-all"><BarChart3 className="w-4 h-4 text-purple-400" /> Expected Goals (xG)</a>
                      </div>
                    </div>
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <span className="bg-[#d4ff00]/10 text-[#d4ff00] text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded border border-[#d4ff00]/20">Pro Suite</span>
                        <h4 className="text-white font-bold text-xs mt-2 uppercase">Match Intelligence Pro</h4>
                        <p className="text-zinc-400 text-[11px] mt-1 leading-relaxed">Unlock access to real-time telemetry, advanced positioning charts, and manager breakdown algorithms.</p>
                      </div>
                      <button className="w-full mt-4 bg-zinc-800 text-white hover:bg-zinc-700 transition-colors py-2 text-[10px] font-black uppercase tracking-wider rounded-lg">Explore Labs</button>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="px-4 h-full flex items-center gap-1.5 hover:bg-zinc-900 hover:text-white transition-colors">
                <Calendar className="w-3.5 h-3.5" /> Calendar
              </a>

              <a href="#" className="px-4 h-full flex items-center gap-1.5 hover:bg-zinc-900 hover:text-white transition-colors">
                <Star className="w-3.5 h-3.5" /> Favorites
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3 relative z-50">
            <button className="p-2 text-zinc-400 hover:text-white rounded-full transition-colors"><Search className="w-4.5 h-4.5" /></button>
            <button className="p-2 text-zinc-400 hover:text-[#d4ff00] rounded-full border border-zinc-800 transition-colors"><User className="w-4.5 h-4.5" /></button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[110px] bg-zinc-950/98 backdrop-blur-2xl z-50 lg:hidden overflow-y-auto p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-3 text-sm font-black uppercase tracking-wider text-zinc-400">
              <button onClick={() => { setCurrentView('home'); setIsMobileMenuOpen(false); }} className="text-[#d4ff00] py-3.5 border-b border-zinc-900/60 flex items-center gap-3 text-left">
                <Flame className="w-5 h-5" /> Live Scores
              </button>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-3.5 border-b border-zinc-900/60 flex items-center gap-3">
                <Calendar className="w-5 h-5" /> Match Calendar
              </a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-3.5 border-b border-zinc-900/60 flex items-center gap-3">
                <Star className="w-5 h-5" /> Favorites
              </a>

              <div className="border-b border-zinc-900/60 py-3.5">
                <button onClick={() => toggleMobileDropdown('equipes')} className="w-full flex items-center justify-between hover:text-white uppercase font-black tracking-wider">
                  <span className="flex items-center gap-3"><Trophy className="w-5 h-5" /> Competitions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'equipes' ? 'rotate-180 text-[#d4ff00]' : ''}`} />
                </button>
                {mobileDropdown === 'equipes' && (
                  <div className="mt-3 pl-8 flex flex-col gap-2 normal-case font-sans text-xs">
                    {leaguesData.map((league) => (
                      <div key={league.id} className="text-zinc-400 py-1 font-bold">
                        <span className="text-[#d4ff00] uppercase text-[10px] tracking-widest block mb-1">{league.flag} {league.name}</span>
                        <div className="grid grid-cols-2 gap-1 pl-2 text-zinc-500 uppercase text-[9px]">
                          {league.teams.slice(0, 4).map((t, idx) => <span key={idx}>• {t}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-zinc-900/60 py-3.5">
                <button onClick={() => toggleMobileDropdown('tactical')} className="w-full flex items-center justify-between hover:text-white uppercase font-black tracking-wider">
                  <span className="flex items-center gap-3"><Brain className="w-5 h-5" /> Tactical Labs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'tactical' ? 'rotate-180 text-[#d4ff00]' : ''}`} />
                </button>
                {mobileDropdown === 'tactical' && (
                  <div className="mt-3 pl-8 flex flex-col gap-3 text-zinc-400 text-xs font-bold">
                    <a href="#" className="flex items-center gap-2"><Brain className="w-4 h-4 text-emerald-400" /> Passing Networks</a>
                    <a href="#" className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> Low Block Structures</a>
                    <a href="#" className="flex items-center gap-2"><Users className="w-4 h-4 text-[#d4ff00]" /> Half-Space Overloads</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CONDITION VIEW: HOME PAGE */}
        {currentView === 'home' ? (
          <>
            {/* HERO HEADER */}
            <header className="relative min-h-[20vh] flex flex-col justify-center items-center text-center px-4 pt-10 z-10">
              <div className="inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[#d4ff00] text-xs font-black tracking-widest uppercase mb-4 shadow-xl">
                <Trophy className="w-3.5 h-3.5" /> World Cup Analytics Platform
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                FOOT-TAKTIC
              </h1>
            </header>

            {/* SHARIT LIVE TICKER */}
            <div className="w-full bg-zinc-950/90 border-y border-zinc-800/80 backdrop-blur-md overflow-hidden py-3.5 mb-10 relative z-10 shadow-2xl">
              <div className="animate-ticker-stream gap-16 items-center px-4">
                {[...finishedMatches, ...finishedMatches].map((match, index) => (
                  <div key={index} className="flex items-center gap-4 bg-zinc-900/40 px-5 py-1.5 rounded-full border border-zinc-800/60 shadow-md">
                    <div className="flex items-center gap-2">
                      <img src={match.logoH} alt={match.teamH} className="w-6 h-4 object-cover rounded shadow-sm" />
                      <span className="font-black text-xs tracking-wider text-zinc-300">{match.teamH}</span>
                    </div>
                    
                    <div className="font-black text-xs text-white bg-black/80 px-3 py-0.5 rounded-lg border border-zinc-800 font-mono tracking-widest flex items-center gap-1.5">
                      <span className={match.scoreH > match.scoreA ? "text-[#d4ff00]" : ""}>{match.scoreH}</span>
                      <span className="text-zinc-600">-</span>
                      <span className={match.scoreA > match.scoreH ? "text-[#d4ff00]" : ""}>{match.scoreA}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-black text-xs tracking-wider text-zinc-300">{match.teamA}</span>
                      <img src={match.logoA} alt={match.teamA} className="w-6 h-4 object-cover rounded shadow-sm" />
                    </div>

                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded-md uppercase border bg-zinc-800 text-zinc-400 border-zinc-700">
                      {match.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* MATCH PREDICTION POLL */}
            <section className="max-w-xl mx-auto px-4 relative z-10 mb-12">
              <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Vote className="w-4 h-4 text-[#d4ff00]" />
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Match Prediction Poll</h3>
                  </div>
                  <span className="text-[9px] font-black bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/20 px-2 py-0.5 rounded">
                    {totalVotes} Votes
                  </span>
                </div>

                <p className="text-center font-bold text-xs uppercase tracking-wide text-zinc-300 mb-4">
                  Who will win today's World Cup blockbuster?
                </p>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleVote('home')}
                    disabled={hasVoted}
                    className={`relative w-full overflow-hidden rounded-xl border p-4 flex items-center justify-between transition-all duration-300 ${
                      hasVoted ? selectedTeam === 'home' ? 'border-[#d4ff00] bg-[#d4ff00]/5' : 'border-zinc-900 bg-zinc-900/20 cursor-default' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-500'
                    }`}
                  >
                    {hasVoted && (
                      <div className="absolute top-0 bottom-0 left-0 bg-[#d4ff00]/10 transition-all duration-1000 ease-out" style={{ width: `${homePercent}%` }} />
                    )}
                    <div className="flex items-center gap-3 relative z-10">
                      <img src="https://flagcdn.com/w80/ma.png" alt="Morocco" className="w-7 h-5 object-cover rounded shadow-sm" />
                      <span className="font-black text-xs uppercase tracking-wider text-zinc-200">Morocco</span>
                    </div>
                    <div className="font-mono text-xs font-black relative z-10">
                      {hasVoted ? <span className={selectedTeam === 'home' ? 'text-[#d4ff00]' : 'text-zinc-500'}>{homePercent}%</span> : <span className="text-[10px] tracking-widest uppercase bg-zinc-800 px-2.5 py-1 rounded text-zinc-400">Vote</span>}
                    </div>
                  </button>

                  <button 
                    onClick={() => handleVote('away')}
                    disabled={hasVoted}
                    className={`relative w-full overflow-hidden rounded-xl border p-4 flex items-center justify-between transition-all duration-300 ${
                      hasVoted ? selectedTeam === 'away' ? 'border-[#d4ff00] bg-[#d4ff00]/5' : 'border-zinc-900 bg-zinc-900/20 cursor-default' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-500'
                    }`}
                  >
                    {hasVoted && (
                      <div className="absolute top-0 bottom-0 left-0 bg-[#d4ff00]/10 transition-all duration-1000 ease-out" style={{ width: `${awayPercent}%` }} />
                    )}
                    <div className="flex items-center gap-3 relative z-10">
                      <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-7 h-5 object-cover rounded shadow-sm" />
                      <span className="font-black text-xs uppercase tracking-wider text-zinc-200">France</span>
                    </div>
                    <div className="font-mono text-xs font-black relative z-10">
                      {hasVoted ? <span className={selectedTeam === 'away' ? 'text-[#d4ff00]' : 'text-zinc-500'}>{awayPercent}%</span> : <span className="text-[10px] tracking-widest uppercase bg-zinc-800 px-2.5 py-1 rounded text-zinc-400">Vote</span>}
                    </div>
                  </button>
                </div>
              </div>
            </section>

            {/* MATCHES GRID */}
            <section className="max-w-5xl mx-auto py-6 px-4 relative z-10 mb-16">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Trophy className="w-5 h-5 text-[#d4ff00]" />
                <h2 className="text-sm font-black uppercase tracking-widest text-zinc-300">Tomorrow's Fixtures</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tomorrowMatches.map((match) => (
                  <div key={match.id} className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between hover:border-[#d4ff00] transition-all duration-300 shadow-xl group cursor-pointer">
                    <div className="flex flex-col items-center gap-1 w-20">
                      <img src={match.logoH} alt={match.teamH} className="w-14 h-10 object-cover rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-black text-[11px] tracking-wide text-zinc-400 uppercase mt-2">{match.teamH}</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1">
                      <div className="font-black text-lg tracking-wider bg-zinc-900 px-4 py-1.5 rounded-xl border border-zinc-800 text-[#d4ff00] shadow-inner font-mono">
                        {match.time}
                      </div>
                      <span className="text-[8px] font-black tracking-widest bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded mt-1 uppercase border border-amber-500/20">
                        {match.status}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1 w-20">
                      <img src={match.logoA} alt={match.teamA} className="w-14 h-10 object-cover rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-black text-[11px] tracking-wide text-zinc-400 uppercase mt-2">{match.teamA}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ARTICLES SECTION */}
            <section className="max-w-7xl mx-auto py-10 px-4 relative z-10 mb-16">
              <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
                <BookOpen className="w-5 h-5 text-[#d4ff00]" />
                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-100">Latest Tactical Analysis & Insights</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* كارد مقال فرنسا والمغرب الديناميكي */}
                <div 
                  onClick={() => openArticle('france-morocco')}
                  className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:border-[#d4ff00] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop" alt="France vs Morocco" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#d4ff00] text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                      FIFA WORLD CUP 2026
                    </span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-sm text-zinc-100 leading-snug group-hover:text-[#d4ff00] transition-colors line-clamp-2">
                      France End Morocco's Historic World Cup Journey and Reach the Semi-finals
                    </h3>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold border-t border-zinc-900 pt-3">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> July 9, 2026</span>
                      <span className="text-zinc-400">7 min read</span>
                    </div>
                  </div>
                </div>

                {/* كارد مقال إسبانيا وبلجيكا المدمج ديناميكياً */}
                <div 
                  onClick={() => openArticle('spain-belgium')}
                  className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:border-[#d4ff00] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop" alt="Spain vs Belgium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#d4ff00] text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                      FIFA WORLD CUP 2026
                    </span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-sm text-zinc-100 leading-snug group-hover:text-[#d4ff00] transition-colors line-clamp-2">
                      Spain 2-1 Belgium | World Cup 2026 Quarter-final Match Report
                    </h3>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold border-t border-zinc-900 pt-3">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> July 12, 2026</span>
                      <span className="text-zinc-400">5 min read</span>
                    </div>
                  </div>
                </div>

                {/* بقية المقالات الاستاتيكية */}
                <div className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:border-[#d4ff00] transition-all duration-300 group cursor-pointer flex flex-col justify-between">
                  <div className="relative h-44 overflow-hidden bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=60" alt="Manager Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#d4ff00] text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">Coaching</span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-sm text-zinc-100 leading-snug group-hover:text-[#d4ff00] transition-colors line-clamp-2">Manager Profile: Real Madrid's New Blueprint for Half-Space Overloads</h3>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold border-t border-zinc-900 pt-3"><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 4 hours ago</span><span className="text-zinc-400">4 min read</span></div>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:border-[#d4ff00] transition-all duration-300 group cursor-pointer flex flex-col justify-between">
                  <div className="relative h-44 overflow-hidden bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60" alt="Botola Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#d4ff00] text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">Local League</span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-sm text-zinc-100 leading-snug group-hover:text-[#d4ff00] transition-colors line-clamp-2">Botola Pro Title Race: A Three-Way Battle Between Raja, Wydad, and AS FAR</h3>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold border-t border-zinc-900 pt-3"><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 1 day ago</span><span className="text-zinc-400">3 min read</span></div>
                  </div>
                </div>

              </div>
            </section>
          </>
        ) : (
          /* واجهة عرض المقالات التفاعلية الموحدة */
          <main className="min-h-screen bg-[#0b0b0b]/90 text-white relative z-10 animate-in fade-in duration-300">
            {/* Hero */}
            <section className="relative h-[450px] bg-cover bg-center" style={{ backgroundImage: `url('${selectedArticle.heroImage}')` }}>
              <div className="absolute inset-0 bg-black/75" />
              <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
                <span className="bg-[#d4ff00] text-black font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full w-fit mb-4">
                  {selectedArticle.stage}
                </span>
                <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl uppercase tracking-tight">
                  {selectedArticle.title}
                </h1>
                <div className="flex gap-6 mt-6 text-zinc-400 text-xs flex-wrap font-bold">
                  <div className="flex items-center gap-2"><Calendar size={14} /> {selectedArticle.date}</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> {selectedArticle.readTime}</div>
                  <div className="flex items-center gap-2"><Trophy size={14} /> World Cup 2026</div>
                </div>
              </div>
            </section>

            {/* Scoreboard */}
            <section className="max-w-5xl mx-auto px-4 py-8">
              <div className="bg-zinc-950/80 rounded-2xl border border-zinc-800 p-6 backdrop-blur-md">
                <div className="grid grid-cols-3 items-center">
                  <div className="text-center">
                    <img src={selectedArticle.flagH} className="w-16 md:w-20 mx-auto mb-2 rounded shadow-md object-contain" alt={selectedArticle.teamH} />
                    <h2 className="text-sm md:text-lg font-black uppercase tracking-wider">{selectedArticle.teamH}</h2>
                  </div>
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-mono font-black text-[#d4ff00]">{selectedArticle.scoreH} - {selectedArticle.scoreA}</h1>
                    <p className="uppercase text-[9px] text-zinc-500 tracking-widest mt-2 font-black">Full Time</p>
                  </div>
                  <div className="text-center">
                    <img src={selectedArticle.flagA} className="w-16 md:w-20 mx-auto mb-2 rounded shadow-md object-contain" alt={selectedArticle.teamA} />
                    <h2 className="text-sm md:text-lg font-black uppercase tracking-wider">{selectedArticle.teamA}</h2>
                  </div>
                </div>
              </div>
            </section>

            {/* Article Content */}
            <section className="max-w-4xl mx-auto px-4 pb-20">
              <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 md:p-10 leading-relaxed text-zinc-300 text-xs md:text-sm font-medium space-y-6">
                
                <p className="text-sm md:text-base text-zinc-200 font-semibold border-l-2 border-[#d4ff00] pl-4">
                  {selectedArticle.summary}
                </p>

                {selectedArticle.sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-base md:text-xl font-black text-[#d4ff00] mb-2 uppercase tracking-wide">{section.title}</h2>
                    <p>{section.text}</p>
                  </div>
                ))}

                {/* Dynamic Match Statistics */}
                <div className="bg-[#d4ff00]/5 border border-[#d4ff00]/20 rounded-xl p-5 md:p-6 my-6">
                  <h3 className="text-[#d4ff00] font-black text-xs md:text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" /> Match Statistics
                  </h3>
                  <div className="space-y-3 text-[11px] md:text-xs font-mono">
                    {selectedArticle.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between border-b border-zinc-900 pb-2 last:border-none">
                        <span>{stat.label}</span>
                        <strong className="text-zinc-100">{stat.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic Goals */}
                <div className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800">
                  <h3 className="text-xs md:text-sm font-black text-[#d4ff00] uppercase tracking-widest mb-3">Goals</h3>
                  <div className="space-y-2 text-[11px] font-mono">
                    {selectedArticle.goals.map((goal, idx) => (
                      <div key={idx} className="flex justify-between border-b border-zinc-900 pb-2 last:border-none">
                        <span>{goal.player}</span>
                        <strong>{goal.minute}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentView('home')}
                  className="mt-6 flex items-center gap-2 bg-[#d4ff00] text-black px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:scale-105 transition duration-300"
                >
                  <ArrowLeft size={14} /> Back to Homepage
                </button>

              </div>
            </section>
          </main>
        )}

      </div>

      {/* FOOTER */}
      <footer className="relative z-10 w-full bg-zinc-950/90 border-t border-zinc-900 backdrop-blur-xl pt-12 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-black tracking-tighter flex items-center gap-1">
              <span className="text-white">FOOT</span> 
              <span className="text-black bg-[#d4ff00] px-2 py-0.5 rounded">TAKTIC</span>
            </div>
            <p className="text-zinc-500 text-[11px] font-medium leading-relaxed max-w-xs">
              The premier professional platform for match intelligence, World Cup tracking, and advanced tactical analytics dashboards.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-900/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-600 text-[10px] font-bold tracking-wider uppercase">
            © {new Date().getFullYear()} FOOT-TAKTIC. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}