"use client";

import React, { useState } from 'react';
import { 
  Flame, Trophy, Calendar, Star, Menu, X, ArrowLeft, BarChart3, Clock, BookOpen, Vote, Search, ChevronDown, Award, Compass, Eye, Shield, Globe2, Activity, Zap, Layers, HelpCircle, UserCheck, TrendingUp, Mail, Send, Megaphone, Video, PlayCircle
} from 'lucide-react';

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

const finishedMatches = [
  { id: 1, teamH: "RSB", teamA: "WAC", logoH: "https://flagcdn.com/w80/ma.png", logoA: "https://flagcdn.com/w80/ma.png", scoreH: 2, scoreA: 0, status: "BOTOLA D29" },
  { id: 2, teamH: "DHJ", teamA: "RSB", logoH: "https://flagcdn.com/w80/ma.png", logoA: "https://flagcdn.com/w80/ma.png", scoreH: 1, scoreA: 3, status: "BOTOLA D30" },
  { id: 3, teamH: "RCA", teamA: "HUS", logoH: "https://flagcdn.com/w80/ma.png", logoA: "https://flagcdn.com/w80/ma.png", scoreH: 2, scoreA: 0, status: "BOTOLA D29" },
  { id: 4, teamH: "CODM", teamA: "FAR", logoH: "https://flagcdn.com/w80/ma.png", logoA: "https://flagcdn.com/w80/ma.png", scoreH: 3, scoreA: 2, status: "BOTOLA D29" },
  { id: 5, teamH: "WAC", teamA: "UTS", logoH: "https://flagcdn.com/w80/ma.png", logoA: "https://flagcdn.com/w80/ma.png", scoreH: 1, scoreA: 2, status: "BOTOLA D30" }
];

const tomorrowMatches = [
  { id: 1, teamH: "RSB Berkane", teamA: "RCA Raja", logoH: "https://flagcdn.com/w80/ma.png", logoA: "https://flagcdn.com/w80/ma.png", time: "20:00", status: "FRIENDLY MATCH" },
  { id: 2, teamH: "ENG", teamA: "POR", logoH: "https://flagcdn.com/w80/gb-eng.png", logoA: "https://flagcdn.com/w80/pt.png", time: "18:00", status: "WORLD CUP 2026" },
  { id: 3, teamH: "BEL", teamA: "CRO", logoH: "https://flagcdn.com/w80/be.png", logoA: "https://flagcdn.com/w80/hr.png", time: "20:00", status: "WORLD CUP 2026" },
  { id: 4, teamH: "NED", teamA: "USA", logoH: "https://flagcdn.com/w80/nl.png", logoA: "https://flagcdn.com/w80/us.png", time: "21:45", status: "WORLD CUP 2026" }
];

const botolaTable = [
  { rank: 1, team: "RS Berkane", pts: 68, match: 30, form: "W-W-W-W" },
  { rank: 2, team: "FAR Rabat", pts: 64, match: 30, form: "L-W-D-W" },
  { rank: 3, team: "RCA Raja", pts: 59, match: 30, form: "W-D-W-L" },
  { rank: 4, team: "WAC Wydad", pts: 52, match: 30, form: "L-L-W-D" }
];

const articlesData: Article[] = [
  {
    id: "rsb-wac-tactics",
    title: "Pragmatic Masterclass: How RS Berkane Dismantled Wydad AC 2-0 at Home",
    tag: "BOTOLA PRO INWI",
    heroImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&auto=format&fit=crop&q=80",
    date: "July 2, 2026",
    readTime: "6 min read",
    stage: "BOTOLA PRO • MATCHDAY 29",
    teamH: "RS Berkane",
    flagH: "https://flagcdn.com/w160/ma.png",
    teamA: "Wydad AC",
    flagA: "https://flagcdn.com/w160/ma.png",
    scoreH: 2,
    scoreA: 0,
    summary: "RS Berkane secured a crucial 2-0 victory against Wydad Casablanca in front of an energetic crowd in Berkane. The Orange Boys delivered a tactical masterclass, completely isolating Wydad's creative midfielders and executing lethal transitions.",
    sections: [
      { title: "Closing Down the Half-spaces", text: "Berkane's manager deployed a compact defensive block, effectively shifting in response to Wydad's wide overloads. By denying Wydad any passing verticality, the home side forced them to play long, low-percentage cross-field balls." },
      { title: "Ruthless Transitional Play", text: "Both of Berkane's goals originated from rapid recoveries in the middle third. Wydad's aggressive counter-pressing left gaps behind their defensive line, which Berkane exploited perfectly through high-speed transitions." }
    ],
    stats: [
      { label: "Possession", value: "45% - 55%" },
      { label: "Shots (On Target)", value: "11 (6) - 7 (2)" },
      { label: "Expected Goals (xG)", value: "1.74 - 0.65" },
      { label: "Duels Won", value: "54% - 46%" }
    ],
    goals: [
      { player: "Berkane Forward (Open Play)", minute: "38'" },
      { player: "Berkane Midfielder (Counter)", minute: "72'" }
    ]
  },
  {
    id: "france-morocco",
    title: "France End Morocco's Historic World Cup Journey and Reach the Semi-finals",
    tag: "FIFA WORLD CUP 2026",
    heroImage: "https://api.time.com/wp-content/uploads/2022/12/Morocco-World-Cup-1.jpg",
    date: "July 9, 2026",
    readTime: "7 min read",
    stage: "FIFA WORLD CUP 2026 • QUARTER-FINAL",
    teamH: "France",
    flagH: "https://flagcdn.com/w160/fr.png",
    teamA: "Morocco",
    flagA: "https://flagcdn.com/w160/ma.png",
    scoreH: 2,
    scoreA: 0,
    summary: "France booked their place in the FIFA World Cup 2026 semi-finals after defeating Morocco 2-0 in a highly anticipated quarter-final clash.",
    sections: [
      { title: "A Balanced First Half", text: "Morocco entered the match with confidence following impressive victories. Walid Regragui's side defended compactly and attempted to launch dangerous counter-attacks." },
      { title: "France Find the Breakthrough", text: "Early in the second half, France increased the tempo to break the deadlock before doubling the advantage." }
    ],
    stats: [
      { label: "Possession", value: "61% - 39%" },
      { label: "Shots", value: "16 - 8" },
      { label: "Shots on Target", value: "7 - 3" },
      { label: "Pass Accuracy", value: "91% - 84%" }
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
    summary: "Spain secured a dramatic place in the FIFA World Cup 2026 semi-finals after defeating Belgium 2-1 in a thrilling quarter-final clash.",
    sections: [
      { title: "Dominating Midfield From The Start", text: "From the opening whistle, Spain controlled possession through quick passing combinations and intelligent movement in midfield." }
    ],
    stats: [
      { label: "Possession", value: "57% - 43%" },
      { label: "Shots", value: "14 - 11" }
    ],
    goals: [
      { player: "Fabián Ruiz", minute: "34'" },
      { player: "Mikel Merino", minute: "82'" }
    ]
  },
  {
    id: "real-madrid-tactics",
    title: "Real Madrid's New Half-Space Overload & Structural Rotations Explained",
    tag: "TACTICAL BLUEPRINT",
    heroImage: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1600&auto=format&fit=crop&q=80",
    date: "July 14, 2026",
    readTime: "4 min read",
    stage: "TACTICAL ANALYSIS • CLUB FOOTBALL",
    teamH: "R. Madrid (Att)",
    flagH: "https://flagcdn.com/w160/es.png",
    teamA: "Low Block Def",
    flagA: "https://flagcdn.com/w160/es.png",
    scoreH: 3,
    scoreA: 0,
    summary: "An in-depth tactical breakdown of how Carlo Ancelotti has redesigned Real Madrid's offensive phase. By utilizing fluid structural rotations and overloading the left half-space.",
    sections: [
      { title: "Fluidity in the Left Channel", text: "The key lies in the asymmetric roles of the central midfielders who constantly rotate with the left winger." }
    ],
    stats: [
      { label: "Half-Space Entries", value: "24 - 5" }
    ],
    goals: [
      { player: "K. Mbappé", minute: "14'" },
      { player: "J. Bellingham", minute: "41'" }
    ]
  },
  {
    id: "man-city-box-midfield",
    title: "Pep's Box Midfield Revolution: How Inverted Center-Backs Control Tempo",
    tag: "UEFA CHAMPIONS LEAGUE",
    heroImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&auto=format&fit=crop&q=80",
    date: "July 16, 2026",
    readTime: "8 min read",
    stage: "TACTICAL HUB • EUROPEAN MASTERS",
    teamH: "Man City",
    flagH: "https://flagcdn.com/w160/gb-eng.png",
    teamA: "Opponent Block",
    flagA: "https://flagcdn.com/w160/eu.png",
    scoreH: 3,
    scoreA: 1,
    summary: "Manchester City continues to redefine build-up mechanics by morphing their backline into a 3-2-2-3 structure in possession.",
    sections: [
      { title: "The Central Square Superiority", text: "By deploying four central midfielders in a tight box shape, City overloads conventional midfield lines." }
    ],
    stats: [
      { label: "Field Tilt", value: "78% - 22%" }
    ],
    goals: [
      { player: "Erling Haaland", minute: "22'" }
    ]
  },
  {
    id: "arsenal-set-piece-mastery",
    title: "Corner Kick Architecture: Inside Arsenal's Unstoppable Set-Piece Routines",
    tag: "PREMIER LEAGUE",
    heroImage: "https://images.unsplash.com/photo-1560272564-6695203892b3?w=1600&auto=format&fit=crop&q=80",
    date: "July 18, 2026",
    readTime: "5 min read",
    stage: "SET-PIECE SPECIAL • EPL 2026",
    teamH: "Arsenal",
    flagH: "https://flagcdn.com/w160/gb-eng.png",
    teamA: "Zonal Defense",
    flagA: "https://flagcdn.com/w160/gb-eng.png",
    scoreH: 2,
    scoreA: 0,
    summary: "Arsenal has generated more xG from dead-ball situations than any other club in Europe. Through clever blocking and goalkeeper pin-downs.",
    sections: [
      { title: "The Keeper Pinning Mechanism", text: "An attacker is tasked with standing directly on the goalkeeper's goal line to restrict arm movement." }
    ],
    stats: [
      { label: "Corners Converted", value: "28%" }
    ],
    goals: [
      { player: "Gabriel Magalhães", minute: "19'" }
    ]
  },
  {
    id: "inter-352-transitions",
    title: "Direct & Vertical: Inzaghi's 3-5-2 Blueprint & Dual-Striker Interchanges",
    tag: "SERIE A TACTICS",
    heroImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&auto=format&fit=crop&q=80",
    date: "July 20, 2026",
    readTime: "6 min read",
    stage: "TACTICAL ANALYSIS • SERIE A",
    teamH: "Inter Milan",
    flagH: "https://flagcdn.com/w160/it.png",
    teamA: "High Line Press",
    flagA: "https://flagcdn.com/w160/it.png",
    scoreH: 3,
    scoreA: 1,
    summary: "Inter's 3-5-2 system balances defensive solidity with lethal counter-attacking speed by using overlapping center-backs.",
    sections: [
      { title: "Overlapping Outside Center-Backs", text: "When wing-backs drag wingers wide, Inter's left and right center-backs drive directly into the final third." }
    ],
    stats: [
      { label: "Transition Speed", value: "8.4 sec" }
    ],
    goals: [
      { player: "Lautaro Martínez", minute: "11'" }
    ]
  },
  {
    id: "bvb-pressing-traps",
    title: "High Pressing Traps & Half-Space Isolation: How BVB Locks Opponents",
    tag: "BUNDESLIGA FOCUS",
    heroImage: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1600&auto=format&fit=crop&q=80",
    date: "July 21, 2026",
    readTime: "5 min read",
    stage: "BUNDESLIGA • GERMAN TACTICS",
    teamH: "Borussia Dortmund",
    flagH: "https://flagcdn.com/w160/de.png",
    teamA: "Build-Up Opponent",
    flagA: "https://flagcdn.com/w160/de.png",
    scoreH: 2,
    scoreA: 0,
    summary: "Dortmund uses structured bait-and-trap pressing triggers by intentionally leaving full-backs open on the touchline.",
    sections: [
      { title: "The Sideline Trap Trigger", text: "As soon as the ball travels to the opponent's full-back, the winger cuts off the back pass." }
    ],
    stats: [
      { label: "High Turnover Wins", value: "14" }
    ],
    goals: [
      { player: "Dortmund Winger", minute: "29'" }
    ]
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home'); 
  const [selectedArticle, setSelectedArticle] = useState<Article>(articlesData[0]);

  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({ home: 712, away: 248 }); 
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const [selectedFormation, setSelectedFormation] = useState<'433' | '352'>('433');

  // Contact & Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const totalVotes = votes.home + votes.away;
  const homePercent = Math.round((votes.home / totalVotes) * 100);
  const awayPercent = Math.round((votes.away / totalVotes) * 100);

  const handleVote = (type: 'home' | 'away') => {
    if (hasVoted) return;
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setSelectedTeam(type);
    setHasVoted(true);
  };

  const openArticle = (articleId: string) => {
    const article = articlesData.find(a => a.id === articleId);
    if (article) {
      setSelectedArticle(article);
      setCurrentView('article');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Splitting articles into 4 Top and 4 Bottom
  const topArticles = articlesData.slice(0, 4);
  const bottomArticles = articlesData.slice(4, 8);

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
          animation: ticker 35s linear infinite;
        }
        .animate-ticker-stream:hover {
          animation-play-state: paused;
        }
        .text-glow {
          text-shadow: 0 0 12px rgba(212, 255, 0, 0.4);
        }
        .card-glow-yellow:hover {
          box-shadow: 0 0 20px rgba(212, 255, 0, 0.2);
          border-color: rgba(212, 255, 0, 0.5);
        }
      `}</style>

      <div className="fixed inset-0 bg-radial-gradient from-emerald-950/20 via-black/80 to-black pointer-events-none z-0" />

      <div className="relative z-10 w-full flex-grow">
        
        {/* Banner Top */}
        <div className="bg-gradient-to-r from-[#d4ff00] via-yellow-300 to-[#d4ff00] text-black text-center py-2.5 text-[10px] md:text-xs font-black tracking-widest uppercase shadow-md flex items-center justify-center gap-2 relative z-50 select-none">
          <Flame className="w-4 h-4 fill-black animate-bounce" /> Foot-Taktic • Professional Tactical Scouting Hub & Live Matchboard <Flame className="w-4 h-4 fill-black animate-bounce" />
        </div>

        {/* Navigation Bar (Expanded & Loaded Menu) */}
        <nav className="border-b border-zinc-900/80 bg-zinc-950/90 backdrop-blur-2xl sticky top-0 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-zinc-900/60">
            <div className="hidden lg:flex items-center gap-4 text-zinc-400">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search tactics, managers..." 
                  className="bg-zinc-900/70 border border-zinc-800 focus:border-[#d4ff00] text-xs px-4 py-2.5 pl-10 rounded-full w-64 focus:outline-none transition-all text-zinc-200"
                />
                <Search className="w-3.5 h-3.5 absolute left-3.5 top-3.5 text-zinc-500" />
              </div>
              <button className="hover:text-[#d4ff00] transition-colors text-xs font-bold flex items-center gap-1.5 ml-2">
                <Globe2 className="w-3.5 h-3.5" /> AR / EN
              </button>
            </div>

            <div 
              onClick={() => setCurrentView('home')} 
              className="text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-1.5 cursor-pointer select-none mx-auto lg:mx-0 group"
            >
              <span className="text-white group-hover:text-zinc-200 transition-colors">FOOT</span> 
              <span className="text-black bg-gradient-to-r from-[#d4ff00] to-[#bbf000] px-3.5 py-1.5 rounded font-extrabold transform group-hover:scale-105 transition-all shadow-lg shadow-[#d4ff00]/25 text-glow">TAKtiC</span>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg hover:brightness-110 transition-all">
                <Award className="w-3.5 h-3.5" /> Pro Analyst Club
              </button>
              <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-350 px-4 py-2.5 rounded-xl transition-all">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Live Hub
              </button>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Full Rich Navigation */}
          <div className="hidden lg:flex max-w-7xl mx-auto px-8 h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentView('home')} 
                className={`text-[11px] font-black uppercase tracking-widest px-3 py-4 border-b-2 transition-all ${currentView === 'home' ? 'text-[#d4ff00] border-[#d4ff00]' : 'text-zinc-400 border-transparent hover:text-white'}`}
              >
                Match Center
              </button>

              <a href="#" className="text-[11px] font-black uppercase tracking-widest text-emerald-400 hover:text-emerald-300 px-3 py-4 transition-colors flex items-center gap-1">
                🇲🇦 Botola Pro Inwi
              </a>

              <a href="#" className="text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-white px-3 py-4 transition-colors">
                🌍 FIFA World Cup 2026
              </a>

              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('competitions')}
                  className={`text-[11px] font-black uppercase tracking-widest px-3 py-4 flex items-center gap-1 transition-colors ${activeDropdown === 'competitions' ? 'text-[#d4ff00]' : 'text-zinc-400 hover:text-white'}`}
                >
                  🏆 Tournaments <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === 'competitions' && (
                  <div className="absolute left-0 top-full w-80 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-2xl z-50 grid grid-cols-1 gap-2">
                    <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-2 mb-1">Continental Leagues</div>
                    <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-zinc-900 hover:text-[#d4ff00] transition-colors">
                      <span>🇪🇺 UEFA Champions League</span>
                      <span className="text-[8px] bg-purple-500/20 text-purple-400 font-extrabold px-1.5 py-0.5 rounded">UCL</span>
                    </a>
                    <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-zinc-900 hover:text-[#d4ff00] transition-colors">
                      <span>🌍 CAF Champions League</span>
                      <span className="text-[8px] bg-amber-500/20 text-amber-400 font-extrabold px-1.5 py-0.5 rounded">CAF</span>
                    </a>
                    <div className="border-t border-zinc-900 my-2" />
                    <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-2 mb-1">Top European Leagues</div>
                    <a href="#" className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white">🇬🇧 Premier League</a>
                    <a href="#" className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white">🇪🇸 La Liga</a>
                    <a href="#" className="block px-3 py-1.5 text-xs text-zinc-400 hover:text-white">🇮🇹 Serie A</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('tactics')}
                  className={`text-[11px] font-black uppercase tracking-widest px-3 py-4 flex items-center gap-1 transition-colors ${activeDropdown === 'tactics' ? 'text-[#d4ff00]' : 'text-zinc-400 hover:text-white'}`}
                >
                  🔬 Tactics Hub <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === 'tactics' && (
                  <div className="absolute left-0 top-full w-72 bg-zinc-950 border border-zinc-800 rounded-2xl p-3.5 shadow-2xl z-50">
                    <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-zinc-900 hover:text-[#d4ff00]">📐 Formation Lab</a>
                    <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-zinc-900 hover:text-[#d4ff00]">👔 Manager Tactics</a>
                    <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-zinc-900 hover:text-[#d4ff00]">📊 Scouting Reports</a>
                  </div>
                )}
              </div>

              <a href="#" className="text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-white px-3 py-4 transition-colors flex items-center gap-1">
                <Video className="w-3.5 h-3.5 text-red-500" /> Video Breakdown
              </a>

              <a href="#contact-section" className="text-[11px] font-black uppercase tracking-widest text-[#d4ff00] hover:text-[#e4ff50] px-3 py-4 transition-colors">
                Contact & Join
              </a>
            </div>

            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-red-400">5 Live Matches</span>
            </div>
          </div>
        </nav>

        {/* Live Ticker */}
        <div className="w-full bg-zinc-950 border-y border-zinc-900 backdrop-blur-md overflow-hidden py-3 relative z-10 shadow-2xl">
          <div className="animate-ticker-stream gap-16 items-center px-4">
            {[...finishedMatches, ...finishedMatches].map((match, index) => (
              <div key={index} className="flex items-center gap-4 bg-zinc-900/35 px-5 py-2 rounded-full border border-zinc-800 shadow-md">
                <div className="flex items-center gap-2">
                  <img src={match.logoH} alt={match.teamH} className="w-6 h-4 object-cover rounded shadow-sm" />
                  <span className="font-black text-xs tracking-wider text-zinc-300">{match.teamH}</span>
                </div>
                <div className="font-black text-xs text-white bg-black px-3 py-1 rounded-lg border border-zinc-800 font-mono tracking-widest flex items-center gap-1.5">
                  <span className={match.scoreH > match.scoreA ? "text-[#d4ff00]" : ""}>{match.scoreH}</span>
                  <span className="text-zinc-600">-</span>
                  <span className={match.scoreA > match.scoreH ? "text-[#d4ff00]" : ""}>{match.scoreA}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-xs tracking-wider text-zinc-300">{match.teamA}</span>
                  <img src={match.logoA} alt={match.teamA} className="w-6 h-4 object-cover rounded shadow-sm" />
                </div>
                <span className={`text-[8px] font-black tracking-widest px-2 py-0.5 rounded uppercase border ${
                  match.status.includes('BOTOLA') ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                }`}>
                  {match.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Render */}
        {currentView === 'home' ? (
          <div className="max-w-[1500px] mx-auto px-4 py-8">
            
            {/* Header Title */}
            <header className="relative flex flex-col justify-center items-center text-center px-4 mb-8 z-10">
              <div className="inline-flex items-center gap-2 bg-zinc-950 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[#d4ff00] text-[10px] md:text-xs font-black tracking-widest uppercase mb-3 shadow-xl">
                <Trophy className="w-3.5 h-3.5 text-yellow-400" /> Professional Football Analytics & Tactical Scouting
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                FOOT-TAKTIC
              </h1>
              <p className="text-zinc-400 text-xs md:text-sm font-semibold max-w-lg leading-relaxed uppercase tracking-widest">
                Real-Time Team Formations, Scout Reports, and Match Hub
              </p>
            </header>

            {/* 3-Column Desktop Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* --- LEFT SIDEBAR (3 COLS) --- */}
              <aside className="lg:col-span-3 space-y-6">
                
                {/* Live Momentum Radar */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#d4ff00]" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Live Pressure Radar</h3>
                    </div>
                    <span className="text-[8px] bg-red-500/20 text-red-400 font-extrabold px-2 py-0.5 rounded-full animate-pulse">
                      78' MIN
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                        <span className="text-zinc-300">RS Berkane</span>
                        <span className="text-[#d4ff00]">74% Intensity</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#d4ff00] h-full rounded-full" style={{ width: '74%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                        <span className="text-zinc-300">Wydad AC</span>
                        <span className="text-zinc-500">26% Intensity</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-zinc-600 h-full rounded-full" style={{ width: '26%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botola Pro Standings Mini Table */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Botola Standings</h3>
                    </div>
                    <span className="text-[8px] text-zinc-500 font-black uppercase">2026 Season</span>
                  </div>
                  <div className="space-y-2.5">
                    {botolaTable.map((item) => (
                      <div key={item.rank} className="flex items-center justify-between bg-zinc-900/40 p-2.5 rounded-2xl border border-zinc-900/80 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[9px] font-black ${item.rank === 1 ? 'bg-[#d4ff00] text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                            {item.rank}
                          </span>
                          <span className="font-bold text-zinc-200">{item.team}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-mono text-zinc-500 font-bold">{item.match}P</span>
                          <strong className="font-mono text-[#d4ff00]">{item.pts}pts</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Match Prediction Poll */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Vote className="w-4 h-4 text-[#d4ff00]" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Match Poll</h3>
                    </div>
                    <span className="text-[8px] font-black bg-[#d4ff00]/10 text-[#d4ff00] px-2 py-0.5 rounded">
                      {totalVotes} Votes
                    </span>
                  </div>
                  <p className="font-black text-[11px] uppercase tracking-wide text-zinc-300 mb-4">
                    Who wins World Cup semi-final?
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <button 
                      onClick={() => handleVote('home')}
                      disabled={hasVoted}
                      className={`relative w-full overflow-hidden rounded-xl border p-3 flex items-center justify-between transition-all ${
                        hasVoted ? selectedTeam === 'home' ? 'border-[#d4ff00] bg-[#d4ff00]/5' : 'border-zinc-900 bg-zinc-900/10' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-600'
                      }`}
                    >
                      {hasVoted && (
                        <div className="absolute top-0 bottom-0 left-0 bg-[#d4ff00]/10" style={{ width: `${homePercent}%` }} />
                      )}
                      <div className="flex items-center gap-2 relative z-10">
                        <img src="https://flagcdn.com/w80/ma.png" alt="Morocco" className="w-6 h-4 object-cover rounded" />
                        <span className="font-black text-xs uppercase text-zinc-200">Morocco</span>
                      </div>
                      <div className="font-mono text-xs font-black relative z-10">
                        {hasVoted ? <span className={selectedTeam === 'home' ? 'text-[#d4ff00]' : 'text-zinc-500'}>{homePercent}%</span> : <span className="text-[9px] uppercase bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">Vote</span>}
                      </div>
                    </button>
                    <button 
                      onClick={() => handleVote('away')}
                      disabled={hasVoted}
                      className={`relative w-full overflow-hidden rounded-xl border p-3 flex items-center justify-between transition-all ${
                        hasVoted ? selectedTeam === 'away' ? 'border-[#d4ff00] bg-[#d4ff00]/5' : 'border-zinc-900 bg-zinc-900/10' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-600'
                      }`}
                    >
                      {hasVoted && (
                        <div className="absolute top-0 bottom-0 left-0 bg-[#d4ff00]/10" style={{ width: `${awayPercent}%` }} />
                      )}
                      <div className="flex items-center gap-2 relative z-10">
                        <img src="https://flagcdn.com/w80/fr.png" alt="France" className="w-6 h-4 object-cover rounded" />
                        <span className="font-black text-xs uppercase text-zinc-200">France</span>
                      </div>
                      <div className="font-mono text-xs font-black relative z-10">
                        {hasVoted ? <span className={selectedTeam === 'away' ? 'text-[#d4ff00]' : 'text-zinc-500'}>{awayPercent}%</span> : <span className="text-[9px] uppercase bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">Vote</span>}
                      </div>
                    </button>
                  </div>
                </div>

              </aside>

              {/* --- MIDDLE MAIN CONTENT (6 COLS) --- */}
              <main className="lg:col-span-6 space-y-8">
                
                {/* Interactive Tactical Pitch */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl relative">
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#d4ff00]" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-200">Interactive Tactical Pitch</h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => setSelectedFormation('433')}
                        className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase transition-all ${selectedFormation === '433' ? 'bg-[#d4ff00] text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'}`}
                      >
                        4-3-3
                      </button>
                      <button 
                        onClick={() => setSelectedFormation('352')}
                        className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase transition-all ${selectedFormation === '352' ? 'bg-[#d4ff00] text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'}`}
                      >
                        3-5-2
                      </button>
                    </div>
                  </div>

                  <div className="relative w-full h-[300px] rounded-2xl bg-gradient-to-b from-emerald-900/60 to-emerald-950/80 border border-emerald-500/20 overflow-hidden flex flex-col justify-between p-5">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-full" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-14 border border-white/10" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-14 border border-white/10" />

                    {selectedFormation === '433' ? (
                      <div className="relative w-full h-full flex flex-col justify-between z-10 font-mono text-[8px] font-bold">
                        <div className="flex justify-around pt-2">
                          <span className="bg-red-700 text-white px-2 py-0.5 rounded-full shadow-lg">LW (Mbappé)</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full shadow-lg">CF (En-Nesyri)</span>
                          <span className="bg-red-700 text-white px-2 py-0.5 rounded-full shadow-lg">RW (Dembélé)</span>
                        </div>
                        <div className="flex justify-around">
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full border border-zinc-700">LCM</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full">DM (Amrabat)</span>
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full border border-zinc-700">RCM</span>
                        </div>
                        <div className="flex justify-around pb-2">
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">LB</span>
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">CB</span>
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">CB</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full">RB (Hakimi)</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex flex-col justify-between z-10 font-mono text-[8px] font-bold">
                        <div className="flex justify-center gap-10 pt-2">
                          <span className="bg-red-700 text-white px-2 py-0.5 rounded-full shadow-lg">LS</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full shadow-lg">RS</span>
                        </div>
                        <div className="flex justify-between px-2">
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">LWB</span>
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">LCM</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full">DM</span>
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">RCM</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full">RWB</span>
                        </div>
                        <div className="flex justify-center gap-8 pb-2">
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">LCB</span>
                          <span className="bg-[#d4ff00] text-black px-2 py-0.5 rounded-full">CB</span>
                          <span className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-full">RCB</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* --- FIRST 4 ARTICLES (TOP GRID) --- */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#d4ff00]" />
                      <h2 className="text-xs font-black uppercase tracking-widest text-zinc-100">Featured Masterclasses</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {topArticles.map((art) => (
                      <div 
                        key={art.id}
                        onClick={() => openArticle(art.id)}
                        className="bg-zinc-950/90 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-[#d4ff00] transition-all duration-300 group cursor-pointer flex flex-col justify-between card-glow-yellow"
                      >
                        <div className="relative h-36 overflow-hidden bg-zinc-900">
                          <img 
                            src={art.heroImage} 
                            alt={art.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <span className="absolute top-3 left-3 bg-zinc-950/90 text-[#d4ff00] border border-[#d4ff00]/30 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                            {art.tag}
                          </span>
                        </div>
                        <div className="p-4 flex-grow flex flex-col justify-between gap-3">
                          <h3 className="font-bold text-xs text-zinc-100 leading-snug group-hover:text-[#d4ff00] transition-colors line-clamp-2">
                            {art.title}
                          </h3>
                          <div className="flex items-center justify-between text-[9px] text-zinc-500 font-bold border-t border-zinc-900/60 pt-2.5">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.date}</span>
                            <span className="text-zinc-400">{art.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- ADVERTISEMENT BANNER (SPONSOR PLACEHOLDER) --- */}
                <div className="bg-gradient-to-r from-zinc-900 via-yellow-950/30 to-zinc-900 border border-amber-500/30 rounded-3xl p-6 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-2 right-3 text-[8px] font-black uppercase text-amber-500/60 border border-amber-500/20 px-2 py-0.5 rounded">
                    Sponsored Banner
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                    <Megaphone className="w-6 h-6 text-[#d4ff00] animate-pulse" />
                    <h4 className="font-black text-sm uppercase tracking-wider text-zinc-100">
                      Promote Your Sports Brand Here
                    </h4>
                    <p className="text-zinc-400 text-[10px] max-w-md">
                      Reach over 50,000+ football tacticians, coaches, and sports enthusiasts daily across Morocco & North Africa.
                    </p>
                    <button className="mt-2 bg-[#d4ff00] text-black font-black text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg">
                      Advertise With Us
                    </button>
                  </div>
                </div>

                {/* --- SECOND 4 ARTICLES (BOTTOM GRID) --- */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#d4ff00]" />
                      <h2 className="text-xs font-black uppercase tracking-widest text-zinc-100">Tactical Analyses & Trends</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {bottomArticles.map((art) => (
                      <div 
                        key={art.id}
                        onClick={() => openArticle(art.id)}
                        className="bg-zinc-950/90 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-[#d4ff00] transition-all duration-300 group cursor-pointer flex flex-col justify-between card-glow-yellow"
                      >
                        <div className="relative h-36 overflow-hidden bg-zinc-900">
                          <img 
                            src={art.heroImage} 
                            alt={art.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <span className="absolute top-3 left-3 bg-zinc-950/90 text-[#d4ff00] border border-[#d4ff00]/30 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                            {art.tag}
                          </span>
                        </div>
                        <div className="p-4 flex-grow flex flex-col justify-between gap-3">
                          <h3 className="font-bold text-xs text-zinc-100 leading-snug group-hover:text-[#d4ff00] transition-colors line-clamp-2">
                            {art.title}
                          </h3>
                          <div className="flex items-center justify-between text-[9px] text-zinc-500 font-bold border-t border-zinc-900/60 pt-2.5">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.date}</span>
                            <span className="text-zinc-400">{art.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- JOIN & CONTACT FORM SECTION --- */}
                <div id="contact-section" className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6">
                  <div className="border-b border-zinc-900 pb-4">
                    <div className="flex items-center gap-2 text-[#d4ff00] text-xs font-black uppercase tracking-widest mb-1">
                      <Mail className="w-4 h-4" /> Join Community & Contact Us
                    </div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight">
                      Stay Ahead in Tactical Analysis
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1">
                      Subscribe to receive weekly tactical scout breakdowns or message our team directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Newsletter Registration */}
                    <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-black uppercase text-[#d4ff00] tracking-widest bg-[#d4ff00]/10 px-2 py-0.5 rounded">
                          VIP Newsletter
                        </span>
                        <h4 className="font-black text-sm text-zinc-200 mt-2 uppercase">Subscribe as VIP Analyst</h4>
                        <p className="text-zinc-400 text-[10px] mt-1 leading-relaxed">
                          Get match analytics reports, tactical PDFs, and early access to scout notes straight to your inbox.
                        </p>
                      </div>

                      {subscribed ? (
                        <div className="mt-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold p-3 rounded-xl text-center">
                          ✅ Welcome to Foot-Taktic VIP Club!
                        </div>
                      ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="mt-4 space-y-2">
                          <input 
                            type="email" 
                            required
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            placeholder="Enter your email..." 
                            className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#d4ff00] text-xs px-3.5 py-2.5 rounded-xl text-zinc-200 focus:outline-none"
                          />
                          <button type="submit" className="w-full bg-[#d4ff00] text-black font-black text-xs uppercase tracking-wider py-2.5 rounded-xl hover:scale-100 hover:brightness-110 transition-all">
                            Join Now
                          </button>
                        </form>
                      )}
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="space-y-3">
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your Name / Organization" 
                        className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-[#d4ff00] text-xs px-3.5 py-2.5 rounded-xl text-zinc-200 focus:outline-none"
                      />
                      <textarea 
                        required
                        rows={3}
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        placeholder="Write your query, feedback or proposal..." 
                        className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-[#d4ff00] text-xs px-3.5 py-2.5 rounded-xl text-zinc-200 focus:outline-none"
                      />
                      <button type="submit" className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-black text-xs uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all">
                        <Send className="w-3.5 h-3.5 text-[#d4ff00]" /> Send Message
                      </button>
                    </form>

                  </div>
                </div>

              </main>

              {/* --- RIGHT SIDEBAR (3 COLS) --- */}
              <aside className="lg:col-span-3 space-y-6">
                
                {/* 1v1 Spotlight Duel Widget */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#d4ff00]" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">1v1 Spotlight Duel</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-zinc-900/40 p-3 rounded-2xl border border-zinc-800">
                      <img src="https://flagcdn.com/w80/ma.png" className="w-6 h-4 mx-auto mb-1.5 rounded" alt="Hakimi" />
                      <div className="font-black text-xs text-zinc-200">A. Hakimi</div>
                      <div className="text-[8px] font-bold text-[#d4ff00] uppercase mt-0.5">3.2 Recoveries/90</div>
                    </div>
                    <div className="bg-zinc-900/40 p-3 rounded-2xl border border-zinc-800">
                      <img src="https://flagcdn.com/w80/fr.png" className="w-6 h-4 mx-auto mb-1.5 rounded" alt="Mbappé" />
                      <div className="font-black text-xs text-zinc-200">K. Mbappé</div>
                      <div className="text-[8px] font-bold text-red-400 uppercase mt-0.5">4.8 Dribbles/90</div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Ad Box */}
                <div className="bg-zinc-950/90 border border-dashed border-zinc-800 rounded-3xl p-5 text-center relative">
                  <span className="text-[8px] font-black uppercase text-zinc-600 block mb-2">Ad Space • 300x250</span>
                  <div className="bg-zinc-900/50 rounded-2xl h-40 flex flex-col items-center justify-center gap-1.5 p-4 border border-zinc-800">
                    <Award className="w-6 h-6 text-[#d4ff00]" />
                    <span className="text-[10px] font-black text-zinc-300 uppercase">Your Ad Banner Here</span>
                    <span className="text-[8px] text-zinc-500">Target Moroccan & Arab Football Fans</span>
                  </div>
                </div>

                {/* Upcoming Fixtures */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#d4ff00]" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Upcoming Fixtures</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {tomorrowMatches.map((match) => (
                      <div key={match.id} className="bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={match.logoH} className="w-5 h-3.5 object-cover rounded" alt={match.teamH} />
                          <span className="font-black text-[10px] text-zinc-300 uppercase">{match.teamH}</span>
                        </div>
                        <span className="font-mono text-[9px] font-black text-[#d4ff00] bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                          {match.time}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-[10px] text-zinc-300 uppercase">{match.teamA}</span>
                          <img src={match.logoA} className="w-5 h-3.5 object-cover rounded" alt={match.teamA} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactical Glossary Quick Help */}
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Tactical Dictionary</h3>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-[10px]">
                    <div className="bg-zinc-900/30 p-2.5 rounded-xl border border-zinc-900">
                      <strong className="text-[#d4ff00] block uppercase">Rest-Defense:</strong>
                      <span className="text-zinc-400">Structural position of defender line while attacking.</span>
                    </div>
                    <div className="bg-zinc-900/30 p-2.5 rounded-xl border border-zinc-900">
                      <strong className="text-[#d4ff00] block uppercase">Half-Space:</strong>
                      <span className="text-zinc-400">The vertical corridor between flank and center pitch.</span>
                    </div>
                  </div>
                </div>

              </aside>

            </div>
          </div>
        ) : (
          /* Article Detail View */
          <main className="min-h-screen bg-zinc-950 text-white relative z-10">
            <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('${selectedArticle.heroImage}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-black/50" />
              <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
                <span className="bg-[#d4ff00] text-black font-black uppercase tracking-widest text-[9px] px-3 py-1 rounded-full w-fit mb-3">
                  {selectedArticle.stage}
                </span>
                <h1 className="text-2xl md:text-4xl font-black leading-tight max-w-4xl uppercase tracking-tight text-white">
                  {selectedArticle.title}
                </h1>
                <div className="flex gap-6 mt-4 text-zinc-400 text-xs flex-wrap font-bold">
                  <div className="flex items-center gap-2"><Calendar size={14} /> {selectedArticle.date}</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> {selectedArticle.readTime}</div>
                  <div className="flex items-center gap-2 text-[#d4ff00]"><Trophy size={14} /> VIP Tactical Hub</div>
                </div>
              </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-8">
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md">
                <div className="grid grid-cols-3 items-center">
                  <div className="text-center">
                    <img src={selectedArticle.flagH} className="w-14 md:w-16 mx-auto mb-2 rounded shadow-md border border-zinc-800" alt={selectedArticle.teamH} />
                    <h2 className="text-xs md:text-base font-black uppercase tracking-wider text-zinc-200">{selectedArticle.teamH}</h2>
                  </div>
                  <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-mono font-black text-[#d4ff00]">{selectedArticle.scoreH} - {selectedArticle.scoreA}</h1>
                    <p className="uppercase text-[8px] text-zinc-500 tracking-widest mt-2 font-black">Full Time Stats</p>
                  </div>
                  <div className="text-center">
                    <img src={selectedArticle.flagA} className="w-14 md:w-16 mx-auto mb-2 rounded shadow-md border border-zinc-800" alt={selectedArticle.teamA} />
                    <h2 className="text-xs md:text-base font-black uppercase tracking-wider text-zinc-200">{selectedArticle.teamA}</h2>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 pb-20">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 md:p-10 leading-relaxed text-zinc-350 text-xs md:text-sm font-medium space-y-6">
                
                <p className="text-sm md:text-base text-zinc-200 font-bold border-l-2 border-[#d4ff00] pl-4 leading-relaxed">
                  {selectedArticle.summary}
                </p>

                {selectedArticle.sections.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h2 className="text-sm md:text-base font-black text-[#d4ff00] uppercase tracking-wide">{section.title}</h2>
                    <p className="text-zinc-300 leading-relaxed">{section.text}</p>
                  </div>
                ))}

                <button 
                  onClick={() => setCurrentView('home')}
                  className="mt-6 flex items-center gap-2 bg-[#d4ff00] text-black px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:scale-105 transition duration-300 shadow-xl"
                >
                  <ArrowLeft size={14} /> Return to Match Center
                </button>
              </div>
            </section>
          </main>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-zinc-950 border-t border-zinc-900/80 pt-8 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div onClick={() => setCurrentView('home')} className="text-sm font-black tracking-tighter flex items-center gap-1 select-none cursor-pointer">
            <span className="text-white">FOOT</span> 
            <span className="text-black bg-[#d4ff00] px-2 py-0.5 rounded">TAKtiC</span>
          </div>
          <span className="text-zinc-600 text-[10px] font-bold tracking-wider uppercase">
            © {new Date().getFullYear()} FOOT-TAKTIC. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}