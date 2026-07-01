"use client";

import React, { useState } from 'react';
import { Search, User, Menu, Tv, Trophy, Flame, X, Play, Activity, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('live');

  const backgroundImageStyle = {
    backgroundImage: `url('/studium.jpeg')`
  };

  // المجموعات الجديدة لنتائج المباريات مع تحديد المتأهلين بنظام خروج المغلوب
  const liveTickerMatches = [
    { homeLogo: "https://flagcdn.com/w40/ca.png", teamH: "CAN", awayLogo: "https://flagcdn.com/w40/za.png", teamA: "RSA", score: "1 - 0", status: "FT", qualified: "كندا 🇨🇦" },
    { homeLogo: "https://flagcdn.com/w40/br.png", teamH: "BRA", awayLogo: "https://flagcdn.com/w40/jp.png", teamA: "JPN", score: "2 - 1", status: "FT", qualified: "البرازيل 🇧🇷" },
    { homeLogo: "https://flagcdn.com/w40/de.png", teamH: "GER", awayLogo: "https://flagcdn.com/w40/py.png", teamA: "PAR", score: "1 - 1", status: "PEN (3-4)", qualified: "باراغواي 🇵🇾", extraInfo: "🎯 ركلات الترجيح" },
    { homeLogo: "https://flagcdn.com/w40/nl.png", teamH: "NED", awayLogo: "https://flagcdn.com/w40/ma.png", teamA: "MAR", score: "1 - 1", status: "PEN (2-3)", qualified: "المغرب 🇲🇦", extraInfo: "🎯 ركلات الترجيح" },
    { homeLogo: "https://flagcdn.com/w40/ci.png", teamH: "CIV", awayLogo: "https://flagcdn.com/w40/no.png", teamA: "NOR", score: "1 - 2", status: "FT", qualified: "النرويج 🇳🇴" },
    { homeLogo: "https://flagcdn.com/w40/fr.png", teamH: "FRA", awayLogo: "https://flagcdn.com/w40/se.png", teamA: "SWE", score: "3 - 0", status: "FT", qualified: "فرنسا 🇫🇷" },
    { homeLogo: "https://flagcdn.com/w40/mx.png", teamH: "MEX", awayLogo: "https://flagcdn.com/w40/ec.png", teamA: "ECU", score: "2 - 0", status: "FT", qualified: "المكسيك 🇲🇽" },
    { homeLogo: "https://flagcdn.com/w40/gb-eng.png", teamH: "ENG", awayLogo: "https://flagcdn.com/w40/cd.png", teamA: "COD", score: "2 - 1", status: "FT", qualified: "إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
  ];

  const hostCountries = [
    { name: "USA", logo: "https://flagcdn.com/w80/us.png" },
    { name: "Canada", logo: "https://flagcdn.com/w80/ca.png" },
    { name: "Mexico", logo: "https://flagcdn.com/w80/mx.png" }
  ];

  const trendingArticles = [
    {
      id: "ceremony",
      title: "FIFA World Cup 2026 Opening Ceremony",
      tag: "Ceremony",
      image: "https://i.postimg.cc/HxRYH9FH/Whats-App-Image-2026-06-13-at-01-23-11.jpg",
      time: "Yesterday",
      isCustom: true,
      subTitle: "The world stood still as the FIFA World Cup 2026 officially opened its doors to billions of football fans across the globe.",
      content: [
        "The FIFA World Cup 2026 officially began with one of the most impressive opening ceremonies ever witnessed in international football.",
        "The atmosphere around the stadium was electric. Thousands of supporters filled the streets wearing their national colors."
      ]
    },
    {
      id: "morocco-haiti",
      title: "Morocco 4-2 Haiti: Atlas Lions Complete a Thrilling Comeback to Reach the FIFA World Cup Round of 32",
      tag: "Match Report",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80", 
      time: "Just Now",
      isCustom: true,
      subTitle: "In one of the most entertaining matches of the FIFA World Cup 2026 group stage, Morocco secured a dramatic 4-2 victory over Haiti.",
      content: [
        "Morocco entered the game knowing that a victory would guarantee qualification, but the match began in the worst possible way.",
        "Morocco's pressure finally paid off in the 39th minute, when Hakimi finished a well-worked attacking move to level the score at 1-1."
      ]
    },
    {
      id: "scouting",
      title: "Data Analytics: Predicting the Underdog Surprises of 2026",
      tag: "Stats",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      time: "3h ago",
      isCustom: false
    },
    {
      id: "fitness",
      title: "High-Intensity Transitions: The Physical Demands of Modern Football",
      tag: "Fitness",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
      time: "5h ago",
      isCustom: false
    },
    {
      id: "tactical-trends",
      title: "The Death of the Classic No. 9? How False Profiles Dominate 2026",
      tag: "Tactics",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80",
      time: "6h ago",
      isCustom: false
    },
    {
      id: "goalkeeper-role",
      title: "Sweeper Keepers: Analyzing Progressive Passing from the Back",
      tag: "Analysis",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=400&q=80",
      time: "8h ago",
      isCustom: false
    },
    {
      id: "pressing-triggers",
      title: "Mid-Block Pressing: Defensive Masterclasses in the Group Stage",
      tag: "Defending",
      image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d1315?auto=format&fit=crop&w=400&q=80",
      time: "12h ago",
      isCustom: false
    },
    {
      id: "youth-scout",
      title: "Golden Generation: Top 5 Under-21 Talents Shifting the Tournament",
      tag: "Scouting",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=400&q=80",
      time: "1d ago",
      isCustom: false
    },
    {
      id: "set-pieces",
      title: "The Evolution of Set-Pieces: Unlocking Low Blocks in 2026",
      tag: "Tactics",
      image: "https://images.unsplash.com/photo-1504155611049-24a2e50f866b?auto=format&fit=crop&w=400&q=80",
      time: "1d ago",
      isCustom: false
    },
    {
      id: "var-impact",
      title: "Automated Offsides & VAR: How Referees Are Adapting on the Big Stage",
      tag: "Technology",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
      time: "2d ago",
      isCustom: false
    },
    {
      id: "captain-influence",
      title: "Leadership in High Pressure: Mentality Kings of the Group Stage",
      tag: "Psychology",
      image: "https://images.unsplash.com/photo-1516567174044-1dfc2787e42d?auto=format&fit=crop&w=400&q=80",
      time: "2d ago",
      isCustom: false
    },
    {
      id: "stadium-tech",
      title: "Climate-Controlled Pitches: Ensuring Peak Performance in Extreme Weather",
      tag: "Infrastructure",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80",
      time: "3d ago",
      isCustom: false
    }
  ];

  const handleOpenArticle = (article: any) => {
    if (article.isCustom) {
      setActiveArticle(article);
      setIsModalOpen(true);
    }
  };

  return (
    <div 
      className="min-h-screen text-zinc-100 font-sans antialiased relative bg-cover bg-center bg-no-repeat bg-fixed selection:bg-[#d4ff00] selection:text-black overflow-x-hidden"
      style={backgroundImageStyle}
    >
      {/* ANIMATION INJECTION */}
      <style jsx global>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: flex;
          gap: 1.5rem;
          white-space: nowrap;
          animation: customMarquee 35s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* BACKGROUND EFFECTS */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#d4ff00]/10 blur-[150px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed inset-0 bg-black/45 pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950 pointer-events-none -z-10" />

      <div className="relative z-10">
        {/* TOP TICKER */}
        <div className="bg-[#d4ff00] text-black text-center py-2 text-[10px] md:text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 fill-black animate-bounce" /> Foot-Taktic • Exclusive Tactical Insights <Flame className="w-4 h-4 fill-black animate-bounce" />
        </div>

        {/* NAVBAR */}
        <nav className="border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl px-4 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
          <div className="flex items-center gap-8">
            <button className="text-zinc-400 hover:text-white p-2 hover:bg-zinc-900/80 rounded-xl">
              <Menu className="w-5 h-5" />
            </button>
            {/* BRAND NAME */}
            <div className="text-2xl font-black tracking-tighter flex items-center gap-1 group cursor-pointer">
              <span className="text-white group-hover:text-[#d4ff00]">FOOT</span> 
              <span className="text-[#d4ff00] border-l-2 border-[#d4ff00] pl-2 bg-[#d4ff00]/10 px-2.5 py-0.5 rounded-lg tracking-tight">TAKTIC</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-zinc-400">
            <a href="#" className="text-[#d4ff00] border-b-2 border-[#d4ff00] pb-1 tracking-widest">Home</a>
            <a href="#" className="hover:text-white transition-all">Matches</a>
            <a href="#" className="hover:text-white transition-all">Tactical Labs</a>
            <a href="#" className="hover:text-white transition-all">News</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 text-zinc-400 hover:text-white rounded-full"><Search className="w-4 h-4" /></button>
            <button className="p-2.5 text-zinc-400 hover:text-[#d4ff00] rounded-full border border-zinc-800/80"><User className="w-4 h-4" /></button>
          </div>
        </nav>

        {/* MODAL */}
        {isModalOpen && activeArticle && (
          <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl max-h-[85vh] flex flex-col">
              <button 
                onClick={() => { setIsModalOpen(false); setActiveArticle(null); }}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 hover:bg-[#d4ff00] text-white hover:text-black rounded-full border border-zinc-800 transition-all shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto p-6 md:p-10 space-y-6">
                <div className="text-center space-y-3">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] font-black uppercase tracking-widest text-[10px]">
                    Foot-Taktic Lab
                  </span>
                  <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-snug text-white text-center">
                    {activeArticle.title}
                  </h1>
                  <div className="h-1 w-24 mx-auto rounded-full bg-[#d4ff00] mt-4"></div>
                </div>

                <h2 className="text-[#d4ff00] text-xs md:text-sm font-bold text-center max-w-2xl mx-auto leading-relaxed border-l-2 border-[#d4ff00] pl-4 italic bg-[#d4ff00]/5 py-2 rounded-r-xl text-justify">
                  {activeArticle.subTitle}
                </h2>

                <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-white/[0.01] p-1 shadow-lg">
                  <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-auto object-cover max-h-[350px] rounded-xl" />
                </div>

                <div className="space-y-4 text-zinc-300 text-xs md:text-sm leading-relaxed text-justify">
                  {activeArticle.content.map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <header className="relative min-h-[65vh] flex flex-col justify-center items-center text-center px-4 pt-16">
          <div className="inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[#d4ff00] text-xs font-black tracking-widest uppercase mb-6 shadow-xl">
            <Trophy className="w-3.5 h-3.5" /> FIFA Tournament Hub 2026
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 drop-shadow-2xl bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Foot-Taktic
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {hostCountries.map((host, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                <div className="p-1 rounded-full bg-zinc-950/90 border-2 border-zinc-800 shadow-2xl group-hover:border-[#d4ff00] transition-all transform hover:scale-105">
                  <img src={host.logo} alt={host.name} className="w-14 h-14 object-cover rounded-full" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 group-hover:text-[#d4ff00] transition-colors">{host.name}</span>
              </div>
            ))}
          </div>

          {/* MARQUEE TICKER WITH NEW RESULTS & ANIMATIONS */}
          <div className="w-full max-w-6xl px-4 mb-8 overflow-hidden relative">
            <div className="relative bg-zinc-950/70 backdrop-blur-md border border-zinc-900 rounded-2xl p-4 flex items-center overflow-hidden">
              <div className="animate-marquee-custom">
                {/* Loop 1 */}
                {liveTickerMatches.map((match, idx) => (
                  <div key={`set1-${idx}`} className="inline-flex flex-col gap-2 bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3 min-w-[310px] justify-between group hover:border-[#d4ff00]/40 transition-colors">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <img src={match.homeLogo} alt={match.teamH} className="w-5 h-5 object-contain rounded shadow-sm" />
                        <span className="font-black text-xs text-zinc-200">{match.teamH}</span>
                      </div>
                      <div className="bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-zinc-800 text-center min-w-[75px]">
                        <span className="text-xs font-black block tracking-tighter text-[#d4ff00]">
                          {match.score}
                        </span>
                        <span className="text-[8px] font-black block uppercase tracking-widest text-zinc-400">{match.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xs text-zinc-200">{match.teamA}</span>
                        <img src={match.awayLogo} alt={match.teamA} className="w-5 h-5 object-contain rounded shadow-sm" />
                      </div>
                    </div>
                    {/* Qualified Team Display & Extras */}
                    <div className="flex items-center justify-between border-t border-zinc-800/60 pt-1.5 text-[10px] dir-rtl text-right">
                      <span className="text-[#d4ff00] font-bold flex items-center gap-1">
                        <span className="animate-ping inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"></span>
                        ✅ المتأهل: {match.qualified}
                      </span>
                      {match.extraInfo && (
                        <span className="text-zinc-400 text-[9px] font-medium bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 animate-pulse-slow">
                          {match.extraInfo}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {/* Loop 2 (For smooth infinite scroll effect) */}
                {liveTickerMatches.map((match, idx) => (
                  <div key={`set2-${idx}`} className="inline-flex flex-col gap-2 bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3 min-w-[310px] justify-between group hover:border-[#d4ff00]/40 transition-colors">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <img src={match.homeLogo} alt={match.teamH} className="w-5 h-5 object-contain rounded shadow-sm" />
                        <span className="font-black text-xs text-zinc-200">{match.teamH}</span>
                      </div>
                      <div className="bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-zinc-800 text-center min-w-[75px]">
                        <span className="text-xs font-black block tracking-tighter text-[#d4ff00]">
                          {match.score}
                        </span>
                        <span className="text-[8px] font-black block uppercase tracking-widest text-zinc-400">{match.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xs text-zinc-200">{match.teamA}</span>
                        <img src={match.awayLogo} alt={match.teamA} className="w-5 h-5 object-contain rounded shadow-sm" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-800/60 pt-1.5 text-[10px] dir-rtl text-right">
                      <span className="text-[#d4ff00] font-bold flex items-center gap-1">
                        <span className="animate-ping inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"></span>
                        ✅ المتأهل: {match.qualified}
                      </span>
                      {match.extraInfo && (
                        <span className="text-zinc-400 text-[9px] font-medium bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 animate-pulse-slow">
                          {match.extraInfo}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-12">
          {/* STREAM SECTION */}
          <section className="bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-zinc-900 bg-zinc-900/20 p-2 gap-2">
              <button onClick={() => setActiveTab('live')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'live' ? 'bg-[#d4ff00] text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}>
                <Tv className="w-4 h-4" /> Live Match Stream
              </button>
              <button onClick={() => setActiveTab('tactics')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'tactics' ? 'bg-[#d4ff00] text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}>
                <Activity className="w-4 h-4" /> Player Movements Radar
              </button>
            </div>

            <div className="p-6 bg-black/40 min-h-[380px] flex flex-col justify-center items-center">
              {activeTab === 'live' ? (
                <div className="w-full flex flex-col items-center justify-center space-y-6 py-2">
                  <div className="w-full max-w-3xl aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 to-black/80 z-0" />
                    <button className="w-16 h-16 rounded-full bg-[#d4ff00] text-black flex items-center justify-center pl-1 hover:scale-110 transition-transform shadow-xl relative z-10">
                      <Play className="w-6 h-6 fill-black" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center py-2">
                  <div className="w-full max-w-3xl aspect-[1.7] rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 to-zinc-950 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
                    <div className="absolute w-24 h-24 rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#d4ff00] rounded-full shadow-[0_0_10px_#d4ff00]" />
                    <span className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]" />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ARTICLES GRID SECTION */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]" /> Foot-Taktic Labs & Insights
              </h2>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
                12 Articles Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingArticles.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => handleOpenArticle(article)}
                  className={`bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-2xl overflow-hidden shadow-xl flex flex-col group transition-all duration-300 ${article.isCustom ? 'cursor-pointer hover:border-[#d4ff00]/40 hover:-translate-y-1' : 'opacity-80'}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-zinc-800 text-[9px] font-black uppercase tracking-wider text-[#d4ff00]">
                      {article.tag}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[10px] text-zinc-500 font-bold">{article.time}</div>
                      <h3 className="font-black text-xs md:text-sm text-zinc-200 line-clamp-2 leading-snug group-hover:text-white transition-colors">
                        {article.title}
                      </h3>
                    </div>

                    {article.isCustom && (
                      <div className="flex items-center gap-1 text-[10px] text-[#d4ff00] font-black uppercase tracking-widest pt-2 border-t border-zinc-900/60">
                        Read Analysis <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}