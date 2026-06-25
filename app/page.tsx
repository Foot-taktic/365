"use client";

import React, { useState } from 'react';
import { Search, User, Menu, Tv, Trophy, Flame, X, Play, Activity } from 'lucide-react';

export default function Home() {
  // State لإدارة فتح وإغلاق المقال الحالي
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State لتخزين المقال المفتوح حالياً
  const [activeArticle, setActiveArticle] = useState(null);
  // State للتبديل بين البث المباشر وتحركات اللاعبين
  const [activeTab, setActiveTab] = useState('live');

  const backgroundImageStyle = {
    backgroundImage: `url('/studium.jpeg')`
  };

  // نتائج واقعية ومنطقية لمباريات كأس العالم 2026 الحالية
  const liveTickerMatches = [
    { homeLogo: "https://flagcdn.com/w40/ma.png", teamH: "MAR", awayLogo: "https://flagcdn.com/w40/br.png", teamA: "BRA", score: "1 - 1", status: "88' Live", isLive: true },
    { homeLogo: "https://flagcdn.com/w40/fr.png", teamH: "FRA", awayLogo: "https://flagcdn.com/w40/ar.png", teamA: "ARG", score: "2 - 0", status: "FT", isLive: false },
    { homeLogo: "https://flagcdn.com/w40/us.png", teamH: "USA", awayLogo: "https://flagcdn.com/w40/de.png", teamA: "GER", score: "1 - 3", status: "FT", isLive: false },
    { homeLogo: "https://flagcdn.com/w40/es.png", teamH: "ESP", awayLogo: "https://flagcdn.com/w40/pt.png", teamA: "POR", score: "2 - 2", status: "45' HT", isLive: true },
    { homeLogo: "https://flagcdn.com/w40/gb-eng.png", teamH: "ENG", awayLogo: "https://flagcdn.com/w40/nl.png", teamA: "NED", score: "1 - 0", status: "65' Live", isLive: true },
    { homeLogo: "https://flagcdn.com/w40/it.png", teamH: "ITA", awayLogo: "https://flagcdn.com/w40/be.png", teamA: "BEL", score: "0 - 1", status: "FT", isLive: false }
  ];

  const hostCountries = [
    { name: "USA", logo: "https://flagcdn.com/w80/us.png" },
    { name: "Canada", logo: "https://flagcdn.com/w80/ca.png" },
    { name: "Mexico", logo: "https://flagcdn.com/w80/mx.png" }
  ];

  // دمج المقال الجديد في القائمة وتحديد المحتوى بدقة لكل واحد
  const trendingArticles = [
    {
      id: "ceremony",
      title: "FIFA World Cup 2026 Opening Ceremony",
      tag: "Ceremony",
      image: "https://i.postimg.cc/HxRYH9FH/Whats-App-Image-2026-06-13-at-01-23-11.jpg",
      time: "Yesterday",
      isCustom: true,
      subTitle: "The world stood still as the FIFA World Cup 2026 officially opened its doors to billions of football fans across the globe. A spectacular night filled with lights, passion, culture and unforgettable moments.",
      content: [
        "The FIFA World Cup 2026 officially began with one of the most impressive opening ceremonies ever witnessed in international football. Fans from every continent gathered to celebrate the beginning of a new chapter in the history of the sport.",
        "The atmosphere around the stadium was electric. Thousands of supporters filled the streets wearing their national colors while music, lights and celebrations transformed the host city into the center of the football universe."
      ]
    },
    {
      id: "morocco-haiti",
      title: "Morocco 4-2 Haiti: Atlas Lions Complete a Thrilling Comeback to Reach the FIFA World Cup Round of 32",
      tag: "Match Report",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80", // صورة كروية حماسية تناسب الماتش
      time: "Just Now",
      isCustom: true,
      subTitle: "In one of the most entertaining matches of the FIFA World Cup 2026 group stage, Morocco secured a dramatic 4-2 victory over Haiti in their final Group C fixture, earning a place in the Round of 32. The Atlas Lions finished second in the group behind Brazil on goal difference after collecting seven points from three matches.",
      content: [
        "Morocco entered the game knowing that a victory would guarantee qualification, but the match began in the worst possible way. Just ten minutes into the first half, an unfortunate own goal by goalkeeper Yassine Bounou handed Haiti an unexpected 1-0 lead. The early setback stunned the Moroccan players, who immediately pushed forward in search of an equalizer.",
        "As the first half progressed, Morocco gradually took control of possession and began creating dangerous opportunities. The attacking trio of Ismael Saibari, Bilal El Khannouss, and Brahim Diaz constantly threatened the Haitian defense, while captain Achraf Hakimi was highly influential down the right flank.",
        "Morocco's pressure finally paid off in the 39th minute, when Hakimi finished a well-worked attacking move to level the score at 1-1. However, Haiti responded almost immediately in the 43rd minute through Wilson Isidor with a spectacular long-range effort to restore Haiti's lead at 2-1.",
        "Deep into stoppage time, Ismael Saibari found space inside the penalty area and calmly finished to make it 2-2 before halftime. Saibari became the first African player to score in every group-stage match for his country in a single FIFA World Cup.",
        "The breakthrough finally arrived in the 78th minute. Substitute Soufiane Rahimi made an immediate impact by finishing a swift attacking move to give Morocco their first lead at 3-2. In the 89th minute, young forward Jassim Yassine sealed the victory by scoring Morocco's fourth goal after capitalizing on a defensive mistake.",
        "With this impressive 4-2 victory, Morocco finished the group stage with seven points, equal to Brazil but behind on goal difference. More importantly, the Atlas Lions secured their place in the FIFA World Cup 2026 Round of 32, where they will continue their journey with growing confidence."
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
    }
  ];

  // دالة لفتح المودال وتحديد المقال المختار
  const handleOpenArticle = (article) => {
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
      
      {/* حقن ستايل الـ Marquee مباشرة لضمان تحرك النتائج بشكل رائع وسلس */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: flex;
          gap: 16px;
          white-space: nowrap;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
      `}</style>
      
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

        {/* ----------------- نافذة المقال الديناميكية (MODAL الذكي) ----------------- */}
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
                    FIFA World Cup 2026
                  </span>
                  <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-snug text-white text-center">
                    {activeArticle.title}
                  </h1>
                  <div className="h-1 w-24 mx-auto rounded-full bg-[#d4ff00] mt-4"></div>
                </div>

                <h2 className="text-[#d4ff00] text-xs md:text-sm font-bold text-center max-w-2xl mx-auto leading-relaxed border-l-2 border-[#d4ff00] pl-4 italic bg-[#d4ff00]/5 py-2 rounded-r-xl">
                  {activeArticle.subTitle}
                </h2>

                <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-white/[0.01] p-1 shadow-lg">
                  <img 
                    src={activeArticle.image} 
                    alt={activeArticle.title} 
                    className="w-full h-auto object-cover max-h-[350px] rounded-xl"
                  />
                </div>

                <div className="space-y-4 text-zinc-300 text-xs md:text-sm leading-relaxed text-justify">
                  {activeArticle.content.map((paragraph, index) => (
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

          {/* شريط النتائج الجاري الحركة تلقائياً */}
          <div className="w-full max-w-5xl px-4 mb-8 overflow-hidden relative">
            <div className="relative bg-zinc-950/60 backdrop-blur-md border border-zinc-900 rounded-2xl p-3.5 overflow-hidden flex items-center">
              
              <div className="animate-marquee-custom cursor-pointer">
                {[...liveTickerMatches, ...liveTickerMatches].map((match, idx) => (
                  <div key={idx} className="inline-flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl px-4 py-2.5 min-w-[250px] justify-between group hover:border-[#d4ff00]/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <img src={match.homeLogo} alt={match.teamH} className="w-5 h-5 object-contain rounded shadow-sm" />
                      <span className="font-black text-xs text-zinc-200">{match.teamH}</span>
                    </div>
                    
                    <div className="bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800 text-center min-w-[70px]">
                      <span className={`text-xs font-black block tracking-tighter ${match.isLive ? 'text-[#d4ff00]' : 'text-zinc-300'}`}>
                        {match.score}
                      </span>
                      <span className={`text-[8px] font-black block uppercase tracking-widest ${match.isLive ? 'text-red-500 animate-pulse' : 'text-zinc-500'}`}>{match.status}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="font-black text-xs text-zinc-200">{match.teamA}</span>
                      <img src={match.awayLogo} alt={match.teamA} className="w-5 h-5 object-contain rounded shadow-sm" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-12">
          
          {/* شاشة البث والتحركات التكتيكية */}
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