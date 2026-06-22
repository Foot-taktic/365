"use client";

import React, { useState } from 'react';
import { Search, User, Menu, Tv, Newspaper, ArrowLeftRight, Trophy, Flame, X, Play, Activity } from 'lucide-react';

export default function Home() {
  // State لفتح وإغلاق المقال
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  // State للتبديل بين البث المباشر وتحركات اللاعبين
  const [activeTab, setActiveTab] = useState('live'); // 'live' or 'tactics'

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

        {/* ----------------- نافذة المقال (MODAL ممركز واحترافي) ----------------- */}
        {isArticleOpen && (
          <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl max-h-[85vh] flex flex-col">
              
              {/* زر الإغلاق */}
              <button 
                onClick={() => setIsArticleOpen(false)}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 hover:bg-[#d4ff00] text-white hover:text-black rounded-full border border-zinc-800 transition-all shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>

              {/* محتوى المقال */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-6">
                
                <div className="text-center space-y-3">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] font-black uppercase tracking-widest text-[10px]">
                    FIFA World Cup 2026
                  </span>
                  <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
                    Opening <span className="text-[#d4ff00]">Ceremony</span> 2026
                  </h1>
                  <div className="h-1 w-24 mx-auto rounded-full bg-[#d4ff00] mt-4"></div>
                </div>

                {/* العنوان الفرعي باللون الأحمر */}
                <h2 className="text-red-500 text-sm md:text-base font-extrabold text-center max-w-xl mx-auto leading-relaxed">
                  The world stood still as the FIFA World Cup 2026 officially opened its doors to billions of football fans across the globe. A spectacular night filled with lights, passion, culture and unforgettable moments.
                </h2>

                {/* صورة المقال */}
                <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-white/[0.01] p-1 shadow-lg">
                  <img 
                    src="https://i.postimg.cc/HxRYH9FH/Whats-App-Image-2026-06-13-at-01-23-11.jpg" 
                    alt="FIFA World Cup 2026 Opening Ceremony Scene" 
                    className="w-full h-auto object-cover max-h-[350px] rounded-xl"
                  />
                </div>

                {/* نصوص المقال */}
                <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed text-justify">
                  <p>
                    The FIFA World Cup 2026 officially began with one of the most impressive opening
                    ceremonies ever witnessed in international football. Fans from every continent
                    gathered to celebrate the beginning of a new chapter in the history of the sport.
                  </p>
                  <p>
                    The atmosphere around the stadium was electric. Thousands of supporters filled
                    the streets wearing their national colors while music, lights and celebrations
                    transformed the host city into the center of the football universe.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}
        {/* ----------------------------------------------------------------------- */}

        {/* HERO SECTION */}
        <header className="relative min-h-[65vh] flex flex-col justify-center items-center text-center px-4 pt-16">
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
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-12">
          
          {/* 📺 شاشة البث والتحركات التكتيكية 📺 */}
          <section className="bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-zinc-900 bg-zinc-900/20 p-2 gap-2">
              <button 
                onClick={() => setActiveTab('live')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'live' ? 'bg-[#d4ff00] text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
              >
                <Tv className="w-4 h-4" /> Live Match Stream
              </button>
              <button 
                onClick={() => setActiveTab('tactics')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'tactics' ? 'bg-[#d4ff00] text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
              >
                <Activity className="w-4 h-4" /> Player Movements Radar
              </button>
            </div>

            <div className="p-6 bg-black/40 min-h-[380px] flex flex-col justify-center items-center">
              {activeTab === 'live' ? (
                <div className="w-full flex flex-col items-center justify-center space-y-6 py-2">
                  <div className="w-full max-w-3xl aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 to-black/80 z-0" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md flex items-center gap-1.5 animate-pulse z-10">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" /> LIVE VIDEO FEED
                    </div>
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

          {/* FEATURED MATCHES */}
          <section className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00]" /> Featured Tactical Matches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-5 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇲🇦</span>
                  <div>
                    <div className="font-black text-sm text-white">Morocco</div>
                    <div className="text-[9px] text-zinc-500 font-bold">Setup: 4-3-3</div>
                  </div>
                </div>
                <div className="bg-zinc-900/80 px-4 py-1.5 rounded-xl border border-zinc-800 text-center">
                  <span className="text-sm font-black text-white">22:00</span>
                </div>
                <div className="flex items-center gap-3 flex-row-reverse">
                  <span className="text-3xl">🇫🇷</span>
                  <div className="text-right">
                    <div className="font-black text-sm text-white">France</div>
                    <div className="text-[9px] text-zinc-500 font-bold">Setup: 4-2-3-1</div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-5 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇦🇷</span>
                  <div>
                    <div className="font-black text-sm text-white">Argentina</div>
                    <div className="text-[9px] text-zinc-500 font-bold">Setup: 4-4-2</div>
                  </div>
                </div>
                <div className="bg-zinc-900/80 px-4 py-1.5 rounded-xl border border-zinc-800 text-center">
                  <span className="text-sm font-black text-white">18:00</span>
                </div>
                <div className="flex items-center gap-3 flex-row-reverse">
                  <span className="text-3xl">🇩🇪</span>
                  <div className="text-right">
                    <div className="font-black text-sm text-white">Germany</div>
                    <div className="text-[9px] text-zinc-500 font-bold">Setup: 3-4-2-1</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 🌟 قسم المقالات: ثابت على شكل Grid (سطر عريض فيه 4 مربعات متناسقة) 🌟 */}
          <section className="space-y-6 pt-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2 px-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00]" /> Trending Tactical Analytics
            </h2>
            
            {/* Grid layout (1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {trendingArticles.map((article, idx) => (
                <div 
                  key={idx} 
                  onClick={() => article.isCustom && setIsArticleOpen(true)}
                  className={`bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-4 flex flex-col justify-between group transition-all duration-300 hover:border-[#d4ff00]/50 hover:shadow-[0_4px_20px_rgba(212,255,0,0.05)] ${article.isCustom ? 'cursor-pointer' : ''}`}
                >
                  <div>
                    {/* الصورة مربعة الشكل ومحددة هيدروليكياً */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-zinc-900 relative border border-zinc-900 mb-4">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable="false"
                      />
                    </div>
                    {/* النصوص والعنوان داخل المربع */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black uppercase tracking-widest bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400 group-hover:text-[#d4ff00]">
                          {article.tag}
                        </span>
                        <span className="text-[9px] text-zinc-500 font-bold">{article.time}</span>
                      </div>
                      <h3 className="text-xs md:text-sm font-black text-zinc-200 group-hover:text-white leading-relaxed uppercase tracking-tight line-clamp-3">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 bg-black/80 backdrop-blur-md py-8 px-4 text-center text-zinc-500 text-[10px] font-black tracking-widest uppercase mt-20">
          © 2026 FOOTTAKTIC LABS. ALL RIGHTS RESERVED. DATA POWERED BY AI TACTICAL ENGINES.
        </footer>

      </div>
    </div>
  );
}