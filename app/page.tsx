"use client";

import React, { useState, useEffect } from 'react';
import { Play, Tv, Radio, Volume2, Maximize, Award, Newspaper, Trophy, Zap, Clock, Users, ChevronRight, X, Heart, Shield, MessageSquare } from 'lucide-react';

export default function BeinStudio() {
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState('bein1');
  const [isMuted, setIsMuted] = useState(false);
  const [likeCount, setLikeCount] = useState(1420);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    if (isArticleOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isArticleOpen]);

  const backgroundImageStyle = {
    backgroundImage: `url('/studium.jpeg')`
  };

  const channelsList = [
    { id: 'bein1', name: 'beIN SPORTS 1 HD', current: 'Morocco vs France - Live Studio', time: 'LIVE', isLive: true },
    { id: 'bein2', name: 'beIN SPORTS 2 HD', current: 'Tactical Analysis Room: World Cup', time: '23:30', isLive: false },
    { id: 'bein3', name: 'beIN SPORTS 3 HD', current: 'Argentina vs Germany - Highlights', time: '01:00', isLive: false },
    { id: 'bein_max', name: 'beIN SPORTS MAX 1', current: 'Countdown to Kickoff 2026', time: '02:30', isLive: false }
  ];

  const breakingNews = "• EXCLUSIVE: Tactical breakdown for the semi-finals streaming inside the interactive hub • FIFA World Cup 2026 Telemetry systems online • Regragui dynamic defensive block structural data updated •";

  return (
    <div 
      className="min-h-screen text-zinc-100 font-sans antialiased relative bg-cover bg-center bg-no-repeat bg-fixed selection:bg-purple-500 selection:text-white overflow-x-hidden w-full"
      style={backgroundImageStyle}
    >
      
      {/* BEIN DEEP PURPLE & BLACK OVERLAYS */}
      <div className="fixed inset-0 bg-gradient-to-tr from-zinc-950 via-purple-950/85 to-black pointer-events-none z-0" />
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-purple-600/15 blur-[180px] pointer-events-none z-0 animate-pulse duration-[10000ms]" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-600/5 blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col min-h-screen">

        {/* TOP BEIN NEWS TICKER (الشريط الإخباري المتحرك السريع) */}
        <div className="bg-purple-950 text-white py-2 text-[11px] font-black tracking-wide border-b border-purple-800/40 relative overflow-hidden whitespace-nowrap shadow-xl">
          <div className="absolute left-0 top-0 bottom-0 bg-red-600 px-3 z-20 flex items-center gap-1 text-[9px] uppercase tracking-widest font-black shadow-lg">
            <Radio className="w-3 h-3 animate-pulse" /> BREAKING
          </div>
          <div className="inline-block pl-[100px] animate-ticker font-medium tracking-wide text-purple-200">
            {breakingNews} {breakingNews}
          </div>
        </div>

        {/* CLASSY BEIN PREMIUM NAVBAR */}
        <nav className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-2xl">
          <div className="flex items-center gap-8 max-w-7xl mx-auto w-full justify-between">
            
            {/* Logo area */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-2xl font-black tracking-tighter flex items-center text-white">
                <span className="text-purple-500 group-hover:text-purple-400 transition-colors">beIN</span>
                <span className="font-light tracking-widest text-sm uppercase text-zinc-300 ml-1 border-l border-white/20 pl-2">SPORTS</span>
              </div>
              <span className="bg-purple-600/20 text-purple-400 border border-purple-500/30 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest shadow-inner hidden sm:inline-block">
                CONNECT PRO
              </span>
            </div>

            {/* Navigation Sections */}
            <div className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-widest text-zinc-400">
              <span className="text-white border-b-2 border-purple-500 pb-5 pt-1 cursor-pointer flex items-center gap-1.5"><Tv className="w-3.5 h-3.5" /> Live Channels</span>
              <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" onClick={() => setIsArticleOpen(true)}><Newspaper className="w-3.5 h-3.5" /> Premium Articles</span>
              <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"><Trophy className="w-3.5 h-3.5" /> Match Center</span>
            </div>

            {/* User Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  setHasLiked(!hasLiked);
                  setLikeCount(hasLiked ? likeCount - 1 : likeCount + 1);
                }}
                className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold ${hasLiked ? 'bg-purple-600 border-purple-500 text-white' : 'border-white/10 bg-black/30 text-zinc-400 hover:text-white'}`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : ''}`} /> <span className="font-mono">{likeCount}</span>
              </button>
            </div>

          </div>
        </nav>

        {/* MAIN BEIN HUB LAYOUT */}
        <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 w-full flex-grow">
          
          {/* LEFT AREA: CINEMATIC MEDIA STREAM INTERFACE */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Ultimate Simulated Video Player Box */}
            <div className="bg-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative aspect-video group w-full ring-1 ring-purple-500/10">
              {/* Background Broadcast Image */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

              {/* Top Stream Indicators */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                <div className="bg-red-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 shadow-lg shadow-red-900/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> LIVE BROADCAST
                </div>
                <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-white/10 tracking-wider text-purple-300">
                  1080p Ultra-HD • 60 FPS
                </div>
              </div>

              {/* Big Center Play / Action Node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsArticleOpen(true)}
                  className="p-5 rounded-full bg-purple-600 text-white shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:scale-110 transition-all duration-300 border border-purple-400/40"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              </div>

              {/* Bottom Custom Media Controls Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between border-t border-white/5 opacity-95 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsArticleOpen(true)} className="text-white hover:text-purple-400 transition-colors"><Play className="w-4 h-4 fill-white" /></button>
                  <button onClick={() => setIsMuted(!isMuted)} className="text-zinc-400 hover:text-white transition-colors">
                    <Volume2 className={`w-4 h-4 ${isMuted ? 'text-red-500' : ''}`} />
                  </button>
                  <span className="text-[10px] font-bold text-zinc-400 tracking-wider border-l border-white/10 pl-3">beIN MATCHDAY HUB STUDIO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <Maximize className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Live Matches Telemetry Ticker Box */}
            <div className="bg-zinc-950/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="p-2.5 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">Morocco vs France Analysis</h4>
                  <p className="text-[11px] text-zinc-400">Tactical insights room, live pressing maps active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsArticleOpen(true)}
                className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-1 group"
              >
                Launch Live Room <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT AREA: PREMIUM CHANNELS GRID & TIMETABLE (دليل القنوات والبرامج) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Guide Container Box */}
            <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col h-full shadow-2xl justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-purple-500 animate-pulse" /> Stream Channels
                  </span>
                  <span className="text-[9px] bg-purple-600/10 border border-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-black uppercase tracking-wider">Network Grid</span>
                </div>

                {/* Channel Selector Cards */}
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {channelsList.map((chan) => (
                    <div 
                      key={chan.id}
                      onClick={() => setActiveChannel(chan.id)}
                      className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col gap-1 ${activeChannel === chan.id ? 'bg-purple-950/60 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'bg-black/30 border-white/5 hover:border-white/10'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-white">{chan.name}</span>
                        {chan.isLive ? (
                          <span className="text-[8px] font-black bg-red-600 px-1.5 py-0.5 rounded uppercase tracking-wider text-white animate-pulse">ON AIR</span>
                        ) : (
                          <span className="text-[9px] font-mono text-zinc-500 font-bold flex items-center gap-1"><Clock className="w-3 h-3" /> {chan.time}</span>
                        )}
                      </div>
                      <p className={`text-[11px] truncate ${activeChannel === chan.id ? 'text-purple-300 font-bold' : 'text-zinc-400'}`}>{chan.current}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Multi-user Chat Matrix Simulation */}
              <div className="mt-4 pt-4 border-t border-white/5 bg-black/40 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1.5 mb-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  <MessageSquare className="w-3.5 h-3.5 text-purple-400" /> Studio Fan Feed Live
                </div>
                <div className="space-y-1.5 text-[11px] max-h-[75px] overflow-y-auto custom-scrollbar">
                  <div className="text-zinc-400"><span className="font-black text-purple-400">Youssef:</span> ديما مغرب! التشكيلة ناضية اليوم 🇲🇦</div>
                  <div className="text-zinc-400"><span className="font-black text-purple-400">Amine:</span> التحليل التكتيكي هربان بزااف 🔥</div>
                </div>
              </div>

            </div>

          </div>
        </main>

        {/* FULL DIALOG PREMIUM OVERLAY MODAL */}
        {isArticleOpen && (
          <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-6 animate-fade-in">
            <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-zinc-950 border border-purple-500/20 shadow-2xl my-4 max-h-[92vh] flex flex-col">
              
              <button 
                onClick={() => setIsArticleOpen(false)}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/80 hover:bg-purple-600 text-white rounded-full border border-white/10 transition-all shadow-xl"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-6">
                
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="inline-block px-3 py-1 rounded-md bg-purple-600/10 border border-purple-500/20 text-purple-400 font-black uppercase tracking-widest text-[10px]">
                    beIN SPORTS Premium Editorial
                  </span>
                  <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                    THE STAGE IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">SET FOR GLORY</span>
                  </h1>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <img 
                    src="https://i.postimg.cc/HxRYH9FH/Whats-App-Image-2026-06-13-at-01-23-11.jpg" 
                    alt="FIFA World Cup 2026 Opening Ceremony" 
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                </div>

                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-justify">
                  The FIFA World Cup 2026 officially began with one of the most impressive opening ceremonies ever witnessed in international football. Fans from every continent gathered to celebrate the beginning of a new chapter in the history of the sport.
                </p>

              </div>
            </div>
          </div>
        )}

        {/* BEIN NETWORK FOOTER */}
        <footer className="border-t border-white/5 bg-zinc-950/90 backdrop-blur-md py-6 text-center text-[9px] text-zinc-500 font-black tracking-widest uppercase mt-auto">
          <p>© 2026 beIN Media Group • Global Premium Sports Broadcasting Network • All Rights Reserved.</p>
        </footer>

      </div>

      {/* EMBEDDED RENDER STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a855f7;
        }
        .animate-ticker {
          display: inline-block;
          animation: tickerLoop 35s linear infinite;
        }
        @keyframes tickerLoop {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

    </div>
  );
}