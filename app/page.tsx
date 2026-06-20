"use client";

import React, { useState } from 'react';
import { Search, User, Menu, Tv, Newspaper, ArrowLeftRight, Calendar, Trophy, Flame, Eye, ChevronRight, BarChart3, Shield, X } from 'lucide-react';

export default function Home() {
  // State لفتح وإغلاق المقال
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  const backgroundImageStyle = {
    backgroundImage: `url('/studium.jpeg')`
  };

  const liveTickerMatches = [
    { homeLogo: "https://flagcdn.com/w40/ma.png", teamH: "MAR", awayLogo: "https://flagcdn.com/w40/fr.png", teamA: "FRA", score: "2 - 1", status: "74' Live", isLive: true },
    { homeLogo: "https://flagcdn.com/w40/br.png", teamH: "BRA", awayLogo: "https://flagcdn.com/w40/es.png", teamA: "ESP", score: "0 - 0", status: "22:00", isLive: false },
    { homeLogo: "https://flagcdn.com/w40/ar.png", teamH: "ARG", awayLogo: "https://flagcdn.com/w40/de.png", teamA: "GER", score: "3 - 2", status: "FT", isLive: false },
    { homeLogo: "https://flagcdn.com/w40/gb-eng.png", teamH: "ENG", awayLogo: "https://flagcdn.com/w40/it.png", teamA: "ITA", score: "1 - 1", status: "46' Live", isLive: true },
    { homeLogo: "https://flagcdn.com/w40/pt.png", teamH: "POR", awayLogo: "https://flagcdn.com/w40/nl.png", teamA: "NED", score: "0 - 1", status: "HT", isLive: true },
    { homeLogo: "https://flagcdn.com/w40/us.png", teamH: "USA", awayLogo: "https://flagcdn.com/w40/mx.png", teamA: "MEX", score: "1 - 2", status: "89' Live", isLive: true }
  ];

  const hostCountries = [
    { name: "USA", logo: "https://flagcdn.com/w80/us.png" },
    { name: "Canada", logo: "https://flagcdn.com/w80/ca.png" },
    { name: "Mexico", logo: "https://flagcdn.com/w80/mx.png" }
  ];

  const trendingArticles = [
    {
      title: "FIFA World Cup 2026 Opening Ceremony",
      tag: "Ceremony",
      // 📸 هنا حطيت الرابط ديال تصويرتك ف الكارو اللول د المقالات باش تبان فالواجهة
      image: "https://i.postimg.cc/HxRYH9FH/Whats-App-Image-2026-06-13-at-01-23-11.jpg",
      time: "Yesterday",
      isCustom: true
    },
    {
      title: "Morocco's Low-Block Mastery: Structural Analysis of the Wall",
      tag: "Scouting",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=400&q=80",
      time: "1h ago",
      isCustom: false
    },
    {
      title: "Data Analytics: Predicting the Underdog Surprises of 2026",
      tag: "Stats",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      time: "3h ago",
      isCustom: false
    },
    {
      title: "High-Intensity Transitions: The Physical Demands of Modern Football",
      tag: "Fitness",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
      time: "5h ago",
      isCustom: false
    }
  ];

  return (
    <div 
      className="min-h-screen text-zinc-100 font-sans antialiased relative bg-cover bg-center bg-no-repeat bg-fixed selection:bg-[#d4ff00] selection:text-black overflow-x-hidden"
      style={backgroundImageStyle}
    >
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#d4ff00]/10 blur-[150px] pointer-events-none -z-10 animate-pulse duration-[6000m]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d4ff00]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-black/45 pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950 pointer-events-none -z-10" />

      <div className="relative z-10">

        {/* TOP TICKER */}
        <div className="bg-[#d4ff00] text-black text-center py-2 text-[10px] md:text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 fill-black animate-bounce" /> Road to World Cup 2026 • Exclusive Tactical Insights <Flame className="w-4 h-4 fill-black animate-bounce" />
        </div>

        {/* NAVBAR */}
        <nav className="border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl px-4 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
          <div className="flex items-center gap-8">
            <button className="text-zinc-400 hover:text-white p-2 hover:bg-zinc-900/80 rounded-xl">
              <Menu className="w-5 h-5" />
            </button>
            <div className="text-2xl font-black tracking-tighter flex items-center gap-1 group cursor-pointer">
              <span className="text-white group-hover:text-[#d4ff00]">FOOT</span> 
              <span className="text-[#d4ff00] border-l-2 border-[#d4ff00] pl-2 bg-[#d4ff00]/10 px-2.5 py-0.5 rounded-lg tracking-tight">TAKTIC</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-zinc-400">
            <a href="#" className="text-[#d4ff00] border-b-2 border-[#d4ff00] pb-1 tracking-widest">Home</a>
            <a href="#" className="hover:text-white transition-all">Matches</a>
            <a href="#" className="hover:text-white transition-all">Tactical Labs</a>
            <a href="#" className="hover:text-white transition-all">Transfers</a>
            <a href="#" className="hover:text-white transition-all">News</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 text-zinc-400 hover:text-white rounded-full"><Search className="w-4 h-4" /></button>
            <button className="p-2.5 text-zinc-400 hover:text-[#d4ff00] rounded-full border border-zinc-800/80"><User className="w-4 h-4" /></button>
          </div>
        </nav>

        {/* ----------------- نافذة المقال المحدثة ----------------- */}
        {isArticleOpen && (
          <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-0 md:p-4 animate-fade-in">
            <div className="relative w-full max-w-7xl rounded-none md:rounded-3xl overflow-hidden bg-gradient-to-b from-black via-[#07110a] to-black border-0 md:border border-zinc-850 shadow-2xl my-0 md:my-8">
              
              {/* زر الإغلاق */}
              <button 
                onClick={() => setIsArticleOpen(false)}
                className="absolute top-6 right-6 z-50 p-2.5 bg-black/60 hover:bg-lime-400 text-white hover:text-black rounded-full border border-zinc-800 transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <main className="min-h-screen text-white pb-12">

                {/* HERO SECTION */}
                <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 overflow-hidden">
                  
                  {/* Glow Effects */}
                  <div className="absolute top-20 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[180px] pointer-events-none"></div>
                  <div className="absolute bottom-0 w-[400px] h-[400px] bg-lime-500/5 rounded-full blur-[150px] pointer-events-none"></div>

                  <div className="relative z-10 max-w-6xl w-full">
                    <span className="inline-block px-6 py-2 mb-6 rounded-full bg-lime-500/20 border border-lime-400/40 text-lime-300 font-bold uppercase tracking-widest text-xs md:text-sm">
                      FIFA World Cup 2026
                    </span>

                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-none">
                      <span className="block text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,0.5)]">
                        Opening
                      </span>
                      <span className="block text-white mt-3">
                        Ceremony
                      </span>
                      <span className="block mt-3 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                        2026
                      </span>
                    </h1>

                    <div className="flex justify-center mt-8">
                      <div className="h-1 w-40 rounded-full bg-gradient-to-r from-lime-400 via-zinc-400 to-lime-400"></div>
                    </div>

                    {/* 🔴 العنوان الفرعي الطويل باللون الأحمر والخط الكبير */}
                    <h2 className="mt-12 text-red-500 text-xl md:text-3xl font-extrabold max-w-4xl mx-auto leading-snug tracking-wide drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                      The world stood still as the FIFA World Cup 2026 officially opened its doors to billions of football fans across the globe. A spectacular night filled with lights, passion, culture and unforgettable moments.
                    </h2>

                    {/* 📸 نفس التصويرة تحت العنوان لداخل */}
                    <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.1)] bg-white/[0.02] p-2">
                      <img 
                        src="https://i.postimg.cc/HxRYH9FH/Whats-App-Image-2026-06-13-at-01-23-11.jpg" 
                        alt="FIFA World Cup 2026 Opening Ceremony Scene" 
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* ARTICLE CONTENT */}
                <section className="max-w-5xl mx-auto px-4 md:px-6 pb-12">
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_0_80px_rgba(132,204,22,0.1)]">
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-lime-300 mb-8 tracking-wide">
                      A Historic Night
                    </h2>

                    <div className="space-y-8">
                      <p className="text-zinc-200 text-base md:text-xl leading-9 md:leading-10 hover:text-white transition-all duration-500">
                        The FIFA World Cup 2026 officially began with one of the most impressive opening
                        ceremonies ever witnessed in international football. Fans from every continent
                        gathered to celebrate the beginning of a new chapter in the history of the sport.
                      </p>

                      <p className="text-zinc-200 text-base md:text-xl leading-9 md:leading-10 hover:text-white transition-all duration-500">
                        The atmosphere around the stadium was electric. Thousands of supporters filled
                        the streets wearing their national colors while music, lights and celebrations
                        transformed the host city into the center of the football universe.
                      </p>

                      <p className="text-zinc-200 text-base md:text-xl leading-9 md:leading-10 hover:text-white transition-all duration-500">
                        As the ceremony started, breathtaking visual effects illuminated the stadium.
                        Spectacular performances showcased the culture and identity of the host nations,
                        creating a memorable experience for millions watching around the world.
                      </p>

                      <p className="text-zinc-200 text-base md:text-xl leading-9 md:leading-10 hover:text-white transition-all duration-500">
                        This edition of the World Cup is historic for many reasons. It is the first
                        tournament hosted by three countries and the first to feature 48 national teams,
                        making it the largest World Cup ever organized.
                      </p>

                      <p className="text-zinc-200 text-base md:text-xl leading-9 md:leading-10 hover:text-white transition-all duration-500">
                        As fireworks lit up the night sky and the first match approached, excitement
                        reached its peak. The journey toward football glory had officially begun,
                        promising unforgettable matches, legendary moments and memories that will last
                        forever.
                      </p>
                    </div>

                  </div>
                </section>

              </main>

            </div>
          </div>
        )}
        {/* ----------------------------------------------------------------------- */}

        {/* HERO SECTION */}
        <header className="relative min-h-[75vh] flex flex-col justify-center items-center text-center px-4 pt-16">
          <div className="inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[#d4ff00] text-xs font-black tracking-widest uppercase mb-6 shadow-xl">
            <Trophy className="w-3.5 h-3.5" /> FIFA Tournament Hub 2026
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 drop-shadow-2xl bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            World Cup 2026
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

          {/* COUNTDOWN */}
          <div className="w-full max-w-xl bg-zinc-950/60 backdrop-blur-2xl rounded-3xl p-6 border border-zinc-800/80 mb-10 shadow-2xl">
            <div className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Countdown To Kick-Off
            </div>
            <div className="grid grid-cols-4 gap-4 text-center divide-x divide-zinc-900">
              {[['18', 'Days'], ['23', 'Hours'], ['06', 'Mins'], ['42', 'Secs']].map(([num, label], index) => (
                <div key={index} className="first:pl-0 pl-2">
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tight">{num}</div>
                  <div className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl px-4 mb-12">
            <button className="flex-1 min-w-[150px] bg-[#d4ff00] hover:bg-[#c2eb00] text-black font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest text-xs transition-all">
              <Tv className="w-4 h-4 fill-black" /> Live Analytics
            </button>
            <button className="flex-1 min-w-[150px] bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest text-xs transition-all text-white">
              <Newspaper className="w-4 h-4 text-[#d4ff00]" /> Tactics Board
            </button>
            <button className="flex-1 min-w-[150px] bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest text-xs transition-all text-white">
              <ArrowLeftRight className="w-4 h-4 text-[#d4ff00]" /> Market Hub
            </button>
          </div>

          {/* TICKER MATCHES */}
          <div className="w-full max-w-5xl px-4 mb-8 overflow-hidden relative">
            <div className="relative bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-3.5 overflow-hidden flex items-center">
              <div className="flex gap-4 animate-[marquee_30s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
                {[...liveTickerMatches, ...liveTickerMatches].map((match, idx) => (
                  <div key={idx} className="inline-flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl px-4 py-2.5 min-w-[240px] justify-between group">
                    <div className="flex items-center gap-2">
                      <img src={match.homeLogo} alt={match.teamH} className="w-5 h-5 object-contain rounded" />
                      <span className="font-black text-xs text-zinc-200 group-hover:text-white">{match.teamH}</span>
                    </div>
                    <div className="bg-zinc-950/90 px-3 py-1 rounded-lg border border-zinc-800 text-center min-w-[65px]">
                      <span className={`text-xs font-black block tracking-tighter ${match.isLive ? 'text-[#d4ff00]' : 'text-zinc-300'}`}>{match.score}</span>
                      <span className={`text-[8px] font-black block uppercase tracking-widest ${match.isLive ? 'text-red-500 animate-pulse' : 'text-zinc-500'}`}>{match.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-xs text-zinc-200 group-hover:text-white">{match.teamA}</span>
                      <img src={match.awayLogo} alt={match.teamA} className="w-5 h-5 object-contain rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-12">
            {/* FEATURED MATCHES */}
            <section className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]" /> Featured Tactical Matches
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🇲🇦</span>
                      <div>
                        <div className="font-black text-sm text-white">Morocco</div>
                        <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Setup: 4-3-3</div>
                      </div>
                    </div>
                    <div className="bg-zinc-900/80 px-3 py-1.5 rounded-xl border border-zinc-800 text-center shrink-0 min-w-[70px]">
                      <span className="text-xl font-black text-white tracking-tighter">22:00</span>
                      <span className="text-[8px] text-zinc-400 block font-black mt-0.5 uppercase tracking-wider">09 JUN</span>
                    </div>
                    <div className="flex items-center gap-3 flex-row-reverse">
                      <span className="text-3xl">🇫🇷</span>
                      <div className="text-right">
                        <div className="font-black text-sm text-white">France</div>
                        <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Setup: 4-2-3-1</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-zinc-900 hover:bg-[#d4ff00] hover:text-black text-zinc-400 text-[10px] font-black uppercase tracking-widest py-2 rounded-xl flex items-center justify-center gap-1 border border-zinc-800/60 transition-all">
                    <BarChart3 className="w-3.5 h-3.5" /> Enter Analysis Room <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🇧🇷</span>
                      <div>
                        <div className="font-black text-sm text-white">Brazil</div>
                        <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Setup: 4-2-4</div>
                      </div>
                    </div>
                    <div className="bg-zinc-900/80 px-3 py-1.5 rounded-xl border border-zinc-800 text-center shrink-0 min-w-[70px]">
                      <span className="text-xl font-black text-white tracking-tighter">18:30</span>
                      <span className="text-[8px] text-zinc-400 block font-black mt-0.5 uppercase tracking-wider">10 JUN</span>
                    </div>
                    <div className="flex items-center gap-3 flex-row-reverse">
                      <span className="text-3xl">🇪🇸</span>
                      <div className="text-right">
                        <div className="font-black text-sm text-white">Spain</div>
                        <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Setup: 4-3-3</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-zinc-900 hover:bg-[#d4ff00] hover:text-black text-zinc-400 text-[10px] font-black uppercase tracking-widest py-2 rounded-xl flex items-center justify-center gap-1 border border-zinc-800/60 transition-all">
                    <BarChart3 className="w-3.5 h-3.5" /> Enter Analysis Room <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </section>

            {/* REPORTS */}
            <section className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                <span className="text-[#d4ff00]">//</span> Tactical Intelligence Reports
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-2xl overflow-hidden group hover:border-[#d4ff00]/40 transition-all shadow-2xl flex flex-col h-full cursor-pointer">
                  <div className="h-48 bg-zinc-900 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-cover bg-center filter brightness-90" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=600&q=80')` }} />
                    <span className="absolute top-3 left-3 bg-zinc-950/90 text-[#d4ff00] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border border-zinc-800">Systems</span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-black text-base text-zinc-100 group-hover:text-[#d4ff00] transition-colors line-clamp-2">Real Madrid's Overload Strategy: Mastering The Half-Spaces</h3>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2">An in-depth breakdown of how spatial mechanics dictate modern positional play against low defensive blocks.</p>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-5 pt-4 border-t border-zinc-900">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> June 7, 2026</span>
                      <span className="flex items-center gap-1 text-[#d4ff00]"><Eye className="w-3.5 h-3.5" /> Read Lab</span>
                    </div>
                  </div>
                </article>

                <article className="bg-zinc-950/50 backdrop-blur-md border border-zinc-900 rounded-2xl overflow-hidden group hover:border-[#d4ff00]/40 transition-all shadow-2xl flex flex-col h-full cursor-pointer">
                  <div className="h-48 bg-zinc-900 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-cover bg-center filter brightness-90" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1704629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80')` }} />
                    <span className="absolute top-3 left-3 bg-zinc-950/90 text-[#d4ff00] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border border-zinc-800">Pressing</span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-black text-base text-zinc-100 group-hover:text-[#d4ff00] transition-colors line-clamp-2">The Death of High Gegenpressing? Statistical Shifts</h3>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2">Why elite European managers are shifting to resting shapes and mid-block traps to optimize physiological workload.</p>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-5 pt-4 border-t border-zinc-900">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> June 7, 2026</span>
                      <span className="flex items-center gap-1 text-[#d4ff00]"><Eye className="w-3.5 h-3.5" /> Read Lab</span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>

          {/* SIDEBAR WIRE */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
              <span className="text-[#d4ff00]">//</span> Wire Intelligence
            </h2>
            <div className="space-y-3">
              {[
                { title: "Tactical Redesign: How Canada plans to stop transitions", tag: "Analysis", time: "45m ago" },
                { title: "Mbappé's subtle positioning shift changes international dynamics", tag: "Tactics", time: "2h ago" },
                { title: "Moroccan Midfield Trio: The structural core analyzed ahead of Tuesday", tag: "Scouting", time: "4h ago" }
              ].map((news, idx) => (
                <div key={idx} className="p-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-xl hover:border-[#d4ff00]/30 transition-all cursor-pointer group shadow-lg flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black bg-zinc-900 px-2 py-0.5 rounded text-zinc-400 group-hover:bg-[#d4ff00]/10 group-hover:text-[#d4ff00] uppercase tracking-wider">{news.tag}</span>
                    <span className="text-[10px] text-zinc-500 font-bold">{news.time}</span>
                  </div>
                  <h3 className="font-bold text-sm text-zinc-300 group-hover:text-[#d4ff00] transition-colors line-clamp-2">{news.title}</h3>
                </div>
              ))}
            </div>
          </div>

        </main>

        {/* TRENDING ARTICLES (4 GRID) */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24 space-y-6">
          <div className="border-t border-zinc-900 pt-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00]" /> Trending Tactical Articles
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingArticles.map((article, index) => (
                <div 
                  key={index}
                  onClick={() => {
                    if (article.isCustom) {
                      setIsArticleOpen(true);
                    }
                  }}
                  className="bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl overflow-hidden group hover:border-[#d4ff00]/40 transition-all shadow-2xl flex flex-col h-full cursor-pointer transform hover:translate-y-[-4px]"
                >
                  <div className="h-40 bg-zinc-900 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700" style={{ backgroundImage: `url(${article.image})` }} />
                    <span className={`absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border ${article.isCustom ? 'text-lime-400 border-lime-500/30' : 'text-[#d4ff00] border-zinc-800'}`}>
                      {article.tag}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h3 className={`font-black text-sm transition-colors duration-300 line-clamp-3 ${article.isCustom ? 'text-white group-hover:text-lime-400' : 'text-zinc-200 group-hover:text-[#d4ff00]'}`}>
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-5 pt-3 border-t border-zinc-900">
                      <span>{article.time}</span>
                      <span className={`flex items-center gap-1 ${article.isCustom ? 'text-lime-400' : 'text-[#d4ff00]'}`}>
                        {article.isCustom ? 'Open Article' : 'Read'} <Eye className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs text-zinc-600 font-bold tracking-wider uppercase">
          <p>© 2026 Foot-Taktic. Designed for Elite Tactical Analysis.</p>
        </footer>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </div>
  );
}