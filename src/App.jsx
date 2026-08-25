import React, { useState, useEffect, useRef } from 'react';
import {
  Film,
  Sparkles,
  Clapperboard,
  Play,
  Pause,
  Layers,
  Wand2,
  Video,
  Music,
  Tv,
  Mic,
  Camera,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Users,
  Eye,
  FileText,
  Star,
  Bot,
  Volume2,
  VolumeX
} from 'lucide-react';

// Copyright-free public cinematic MP4 video (served locally for instant playback)
const HERO_VIDEO = "/videos/hero-ambient.mp4";
const DEMO_VIDEO_1 = "/videos/hero-ambient.mp4";
const DEMO_VIDEO_2 = "/videos/hero-ambient.mp4";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeShowcase, setActiveShowcase] = useState('all');
  const [modalVideo, setModalVideo] = useState(null);
  const [activeDemoTab, setActiveDemoTab] = useState('scene01');
  const [heroMuted, setHeroMuted] = useState(true);
  const [heroPlaying, setHeroPlaying] = useState(true);
  const heroVideoRef = useRef(null);

  const [promptInput, setPromptInput] = useState('Make this scene more emotional with dramatic lighting.');
  const [assistantResponse, setAssistantResponse] = useState(
    'Applying adjustments: Softening key light, adding subtle tear highlight, adjusting focal length to 85mm portrait lens, and lengthening shot hold duration by 1.5 seconds.'
  );

  const DASHBOARD_URL = "https://app.reyvia.com/login";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guarantee hero video playback on load
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch(err => {
        console.log("Autoplay handled:", err);
      });
    }
  }, []);

  const toggleHeroPlay = () => {
    if (heroVideoRef.current) {
      if (heroPlaying) {
        heroVideoRef.current.pause();
      } else {
        heroVideoRef.current.play();
      }
      setHeroPlaying(!heroPlaying);
    }
  };

  const toggleHeroMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroMuted;
      setHeroMuted(!heroMuted);
    }
  };

  const handleStartCreating = () => {
    window.location.href = DASHBOARD_URL;
  };

  const handleExploreStudio = () => {
    const el = document.getElementById('demo-workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const showcaseItems = [
    {
      id: 1,
      title: 'Neon Odyssey: Cyber 2099',
      category: 'Sci-Fi',
      videoUrl: "/videos/hero-ambient.mp4",
      poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
      duration: '02:45',
      desc: 'A cybernetic noir thriller set in futuristic Tokyo.'
    },
    {
      id: 2,
      title: 'The Silent Peak',
      category: 'Documentary',
      videoUrl: "/videos/showcase-1.mp4",
      poster: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      duration: '04:12',
      desc: 'Exploring the untouched glaciers of Northern Patagonia.'
    },
    {
      id: 3,
      title: 'Sintel: Dragon Realm',
      category: 'Fantasy',
      videoUrl: "/videos/showcase-2.mp4",
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      duration: '03:18',
      desc: 'An epic tale of forgotten magic and ancient dragons.'
    },
    {
      id: 4,
      title: 'Midnight Symphony',
      category: 'Music',
      videoUrl: "/videos/hero-ambient.mp4",
      poster: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      duration: '03:50',
      desc: 'A surreal visual album for modern orchestrations.'
    },
    {
      id: 5,
      title: 'Shadows in the Mist',
      category: 'Drama',
      videoUrl: "/videos/showcase-1.mp4",
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
      duration: '01:55',
      desc: 'An intimate character study set in 1950s London.'
    },
    {
      id: 6,
      title: 'Aura Autonomous',
      category: 'Commercial',
      videoUrl: "/videos/showcase-2.mp4",
      poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      duration: '01:00',
      desc: 'Cinematic brand reveal for next-generation electric sports cars.'
    }
  ];

  const filteredShowcase = activeShowcase === 'all'
    ? showcaseItems
    : showcaseItems.filter(item => item.category.toLowerCase() === activeShowcase.toLowerCase());

  const faqs = [
    {
      q: 'What is REYVIA Studio?',
      a: 'REYVIA Studio is an AI-powered creative filmmaking workspace that helps creators, directors, and storytellers transform original concepts and scripts into complete cinematic video productions.'
    },
    {
      q: 'What does the name REYVIA stand for?',
      a: 'REYVIA represents our core brand philosophy: Release Your Vision Into Action.'
    },
    {
      q: 'What can I create with REYVIA Studio?',
      a: 'You can create short films, feature film concepts, documentaries, music videos, YouTube video series, commercials, visual stories, and talking character videos with full scene and style consistency.'
    },
    {
      q: 'Can I start from an existing screenplay or script?',
      a: 'Yes. You can paste a full script, scene notes, or even a brief story idea. REYVIA Studio automatically parses scenes, dialogue, character descriptions, and visual directions into structured production components.'
    },
    {
      q: 'How does character consistency work?',
      a: 'REYVIA Studio utilizes an advanced multi-angle character anchor system. Once you define a character’s face, hair, clothing, and aesthetic traits, REYVIA maintains their identity across multiple scenes and camera angles.'
    },
    {
      q: 'Can I edit and direct individual shots?',
      a: 'Absolutely. You remain in full creative control. You can manually adjust camera angles, focal lengths, lighting, character actions, dialogue timing, and scene beats at any point in the creative process.'
    },
    {
      q: 'Is REYVIA suitable for professional YouTube creators & filmmakers?',
      a: 'Yes. REYVIA Studio is built specifically for creators who need high visual fidelity, structured project management, and rapid scene assembly without sacrificing creative direction.'
    },
    {
      q: 'How do I get started?',
      a: 'Click "Start Creating" to access the studio workspace. You can start building your first project in minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-[#e4e4f4] font-sans selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
      {/* ─── MOVING BACKGROUND VECTOR SHAPES & DYNAMIC PARTICLES ─── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Vector Particle 1: Floating Glowing Crosshair */}
        <div className="absolute top-[15%] left-[8%] animate-[float_18s_ease-in-out_infinite] opacity-30">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M20 5V35M5 20H35" stroke="#8b5cf6" strokeWidth="1" />
          </svg>
        </div>

        {/* Vector Particle 2: Floating Polygon Lens Frame */}
        <div className="absolute top-[45%] right-[10%] animate-[float_22s_ease-in-out_infinite_reverse] opacity-25">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 55,20 55,50 30,55 5,50 5,20" stroke="#f59e0b" strokeWidth="1" />
            <circle cx="30" cy="30" r="8" fill="#6366f1" fillOpacity="0.2" />
          </svg>
        </div>

        {/* Vector Particle 3: Floating Aperture Ring */}
        <div className="absolute bottom-[20%] left-[12%] animate-[float_25s_ease-in-out_infinite] opacity-20">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" stroke="#a855f7" strokeWidth="1" />
            <path d="M40 5L40 25M75 40L55 40M40 75L40 55M5 40L25 40" stroke="#6366f1" strokeWidth="1" />
          </svg>
        </div>

        {/* Vector Particle 4: Floating Film Sprocket */}
        <div className="absolute top-[75%] right-[15%] animate-[float_20s_ease-in-out_infinite] opacity-25">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect x="5" y="5" width="40" height="40" rx="8" stroke="#8b5cf6" strokeWidth="1" />
            <rect x="12" y="12" width="8" height="8" rx="2" fill="#6366f1" fillOpacity="0.4" />
            <rect x="30" y="12" width="8" height="8" rx="2" fill="#6366f1" fillOpacity="0.4" />
            <rect x="12" y="30" width="8" height="8" rx="2" fill="#6366f1" fillOpacity="0.4" />
            <rect x="30" y="30" width="8" height="8" rx="2" fill="#6366f1" fillOpacity="0.4" />
          </svg>
        </div>

        {/* Subtle Background Grid Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#06070a]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/90'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-amber-500 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#06070a] rounded-[11px] flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-black tracking-tight text-white group-hover:text-indigo-200 transition-colors">REYVIA</span>
              <span className="text-[11px] font-mono tracking-widest text-indigo-400 uppercase font-semibold">Studio</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['features', 'workflow', 'modes', 'showcase', 'faq'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleStartCreating}
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2"
            >
              Sign In
            </button>
            <button
              onClick={handleStartCreating}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              <span>Start Creating</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090a10] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in duration-200">
            {['features', 'workflow', 'modes', 'showcase', 'faq'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white py-2 text-base capitalize font-medium"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={handleStartCreating}
                className="w-full py-3 rounded-xl border border-white/10 text-slate-200 font-medium text-sm"
              >
                Sign In
              </button>
              <button
                onClick={handleStartCreating}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30"
              >
                Start Creating
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden z-10">
        {/* Dimmed Ambient Desktop Video Background (Opacity 40%) */}
        <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            src="/videos/hero-ambient.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-40 filter blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608] via-transparent to-[#050608]" />
        </div>

        {/* Soft Glowing Atmosphere */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-amber-500/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] max-w-5xl mx-auto mb-6">
            Turn Your Ideas <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-indigo-100 via-purple-200 to-amber-200 bg-clip-text text-transparent">
              Into Cinema.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Intelligent AI workspace to develop stories, direct characters, and generate complete video productions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <button
              onClick={handleStartCreating}
              className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white font-bold text-base shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Start Creating</span>
            </button>
            <button
              onClick={handleExploreStudio}
              className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-bold text-base backdrop-blur-md hover:border-white/30 transition-all flex items-center justify-center gap-2.5"
            >
              <Play className="w-4 h-4 fill-current text-indigo-400" />
              <span>Explore Studio</span>
            </button>
          </div>

          {/* ─── HERO VISUAL WITH GUARANTEED AUTO-PLAYING CORNS VIDEO ─── */}
          <div className="relative max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black">
            <div className="bg-[#0b0c13] rounded-2xl overflow-hidden relative">
              {/* Header Bar */}
              <div className="px-5 py-3.5 bg-[#0d0e17] border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-slate-300 ml-2 font-bold">REYVIA Studio // Project_Cinematic_Ocean.rey</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-indigo-300">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Live 4K Render</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-bold">24 FPS</span>
                </div>
              </div>

              {/* Multi-step Pipeline Header */}
              <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-6 gap-3 border-b border-white/10 bg-[#090a10]">
                {[
                  { step: '01', title: 'IDEA', desc: 'Logline & Concept', icon: Wand2, active: false },
                  { step: '02', title: 'STORY', desc: 'Script Breakdown', icon: FileText, active: false },
                  { step: '03', title: 'CHARACTERS', desc: 'Identity Anchor', icon: Users, active: false },
                  { step: '04', title: 'SCENES', desc: 'Director Board', icon: Layers, active: false },
                  { step: '05', title: 'VIDEO', desc: 'Cinematic Motion', icon: Camera, active: true },
                  { step: '06', title: 'FINAL FILM', desc: 'Master Export', icon: Film, active: false }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      item.active
                        ? 'bg-indigo-600/25 border-indigo-500/60 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-white/[0.02] border-white/5 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-indigo-400 font-bold">{item.step}</span>
                      <item.icon className={`w-3.5 h-3.5 ${item.active ? 'text-amber-400' : 'text-slate-500'}`} />
                    </div>
                    <div className="font-display text-xs font-bold text-slate-200">{item.title}</div>
                    <div className="text-[10px] text-slate-400 truncate">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* HIGHLY RELIABLE AUTO-PLAYING VIDEO MONITOR */}
              <div className="relative aspect-video w-full bg-[#050609] overflow-hidden group">
                <video
                  ref={heroVideoRef}
                  src={HERO_VIDEO}
                  autoPlay
                  loop
                  muted={heroMuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-black/30 pointer-events-none" />

                {/* On-screen Controls Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className="bg-black/75 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-200 flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Shot 05 // Cam A — 35mm Anamorphic T1.8</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button
                    onClick={toggleHeroPlay}
                    className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white hover:bg-black/90 transition-colors"
                  >
                    {heroPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={toggleHeroMute}
                    className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white hover:bg-black/90 transition-colors"
                  >
                    {heroMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                  <div className="bg-black/85 backdrop-blur-md border border-white/15 p-4 sm:p-5 rounded-2xl max-w-xl text-left shadow-2xl">
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1.5 font-bold">
                      <span>SCENE 05</span>
                      <span>•</span>
                      <span>CYBERPUNK OCEAN</span>
                      <span>•</span>
                      <span className="text-amber-400">CHARACTER: KIRA</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-100 font-medium leading-snug">
                      "Kira looks out into the expansive dark waters as sunlight glimmers across the waves."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ────────────────────────────────────── */}
      <section id="features" className="py-28 bg-[#07080e] border-t border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Built For Directors</span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mt-3 mb-6">
              Everything You Need to Direct & Produce
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl">
              Structured workspace tools designed specifically to bridge the gap between creative intent and final visual storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wand2,
                title: 'Create',
                subtitle: 'Idea to Screenplay',
                desc: 'Turn concepts, outlines, or complete scripts into structured visual stories broken down by acts, scenes, and beats.'
              },
              {
                icon: Sliders,
                title: 'Direct',
                subtitle: 'Full Shot Control',
                desc: 'Control characters, scenes, camera motion, dialogue, atmospheric lighting, and overarching visual styles.'
              },
              {
                icon: Film,
                title: 'Produce',
                subtitle: 'Complete Cinema',
                desc: 'Bring scenes together into cohesive, high-definition video productions ready for audience premiere.'
              }
            ].map((prop, idx) => (
              <div
                key={idx}
                className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <div className="text-xs font-mono uppercase text-indigo-400 font-bold mb-2 tracking-wider">{prop.subtitle}</div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">{prop.title}</h3>
                <p className="text-slate-300 text-base leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE STUDIO WORKSPACE WITH REAL VIDEO PREVIEWS ──── */}
      <section id="demo-workspace" className="py-28 relative overflow-hidden bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Interactive Studio</span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mt-3 mb-6">
              Explore the REYVIA Workspace
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl">
              A comprehensive studio designed for directors, editors, and visual artists.
            </p>
          </div>

          {/* Interactive Workspace Mockup */}
          <div className="rounded-3xl border border-white/15 bg-[#090a12] overflow-hidden shadow-2xl shadow-black grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
            {/* LEFT PANEL: Project Structure */}
            <div className="lg:col-span-3 p-5 border-r border-white/10 bg-[#07080e] space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold uppercase pb-3 border-b border-white/10 flex justify-between items-center">
                <span>Project Structure</span>
                <span className="text-indigo-400 text-[10px]">REYVIA v2.4</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-200 font-bold flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-indigo-400" /> Episode 01: Sintel's Journey
                </div>
                <div className="pl-3 space-y-1 text-slate-300">
                  <div className="p-2 rounded-lg hover:bg-white/5 cursor-pointer flex items-center justify-between">
                    <span>Act 01: The Mountain Gate</span>
                  </div>
                  <div className="pl-4 space-y-1.5">
                    <button
                      onClick={() => setActiveDemoTab('scene01')}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between ${
                        activeDemoTab === 'scene01' ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30' : 'hover:bg-white/5 text-slate-400'
                      }`}
                    >
                      <span>Scene 01: Sintel Dragon</span>
                      <span className="text-[10px] text-emerald-400 font-bold">READY</span>
                    </button>
                    <button
                      onClick={() => setActiveDemoTab('scene02')}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between ${
                        activeDemoTab === 'scene02' ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30' : 'hover:bg-white/5 text-slate-400'
                      }`}
                    >
                      <span>Scene 02: Ocean Horizon</span>
                      <span className="text-[10px] text-amber-400 font-bold">RENDERING</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER PANEL: Embedded MP4 Video Preview */}
            <div className="lg:col-span-6 p-6 bg-[#040508] flex flex-col justify-between">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                <video
                  key={activeDemoTab}
                  src={activeDemoTab === 'scene01' ? DEMO_VIDEO_1 : DEMO_VIDEO_2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span>00:01:24:12</span>
                  <div className="w-44 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  </div>
                  <span>00:03:45:00</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded font-bold">4K Cinema Ready</span>
              </div>
            </div>

            {/* RIGHT PANEL: Shot Controls */}
            <div className="lg:col-span-3 p-5 border-l border-white/10 bg-[#07080e] space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold uppercase pb-3 border-b border-white/10">Shot Direction</div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1.5 font-mono">ACTIVE CHARACTER</label>
                  <input type="text" readOnly value="Sintel / Dragon" className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium" />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1.5 font-mono">CAMERA ANGLE</label>
                  <input type="text" readOnly value="Low Angle Push-in 35mm" className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200" />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1.5 font-mono">ATMOSPHERE</label>
                  <input type="text" readOnly value="Atmospheric Mountain Fog" className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200" />
                </div>
                <button
                  onClick={handleStartCreating}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs mt-4 transition-colors shadow-lg shadow-indigo-600/30"
                >
                  Edit In Workspace
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI ASSISTANT ───────────────────────────────────────── */}
      <section className="py-28 bg-[#07080e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Creative Partner</span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-white mt-3 mb-6">
                Your Creative Partner.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Collaborate with REYVIA Studio to refine dialogue, adjust camera angles, enhance character performances, or solve scene continuity challenges.
              </p>

              <div className="space-y-4">
                {[
                  'Rewrite dialogue for specific emotional tone',
                  'Suggest dramatic camera moves & lighting schemes',
                  'Fix scene-to-scene plot and visual continuity',
                  'Generate alternative scene endings & beats'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-200 text-base font-medium">
                    <Bot className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0d16] border border-white/15 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-indigo-400 font-bold">
                <span className="flex items-center gap-2"><Bot className="w-4 h-4" /> REYVIA Assistant</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>

              {/* User Prompt */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none text-xs sm:text-sm max-w-md shadow-lg">
                  "{promptInput}"
                </div>
              </div>

              {/* Assistant Response */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="bg-white/5 border border-white/10 text-slate-200 p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm max-w-md">
                  {assistantResponse}
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <input
                  type="text"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={() => {
                    setAssistantResponse('Applying adjustments: Softening key light, adding subtle tear highlight, and lengthening shot hold duration by 1.5 seconds.');
                  }}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-lg shadow-indigo-600/30"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SHOWCASE WITH EMBEDDED VIDEO MODAL ─────────────────────── */}
      <section id="showcase" className="py-28 bg-[#050608] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Studio Showcase</span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mt-3 mb-6">
              Created With REYVIA Studio
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl">
              Explore productions across genres created entirely within the workspace.
            </p>

            {/* Filter Chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {['all', 'Sci-Fi', 'Documentary', 'Fantasy', 'Music', 'Drama', 'Commercial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveShowcase(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    activeShowcase === cat
                      ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/40'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredShowcase.map((item) => (
              <div
                key={item.id}
                onClick={() => setModalVideo(item)}
                className="group relative rounded-3xl overflow-hidden bg-[#0c0d16] border border-white/10 hover:border-indigo-500/60 transition-all duration-500 cursor-pointer shadow-2xl hover:-translate-y-1.5"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-mono text-indigo-300 font-bold border border-white/15">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-mono text-slate-200 border border-white/15">
                    {item.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-600/60">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-3xl bg-[#090a12] border border-white/15 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">{modalVideo.title}</h3>
                <span className="text-xs font-mono text-indigo-400">{modalVideo.category} • {modalVideo.duration}</span>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                className="text-slate-400 hover:text-white p-2 rounded-xl bg-white/5"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black relative">
              <video
                src={modalVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#050608]">
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">{modalVideo.desc}</p>
              <button
                onClick={() => {
                  setModalVideo(null);
                  handleStartCreating();
                }}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30"
              >
                Create Similar Production
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="py-28 bg-[#07080e] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">Frequently Asked Questions</span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mt-3 mb-6">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-white text-base sm:text-xl"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-12 sm:p-20 rounded-3xl bg-gradient-to-b from-[#10111f] to-[#07080e] border border-indigo-500/40 shadow-2xl shadow-indigo-600/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

            <h2 className="font-display text-4xl sm:text-7xl font-black text-white mb-6 leading-tight">
              Your Next Story Starts Here.
            </h2>
            <p className="text-slate-300 text-lg sm:text-2xl max-w-2xl mx-auto mb-12">
              Release Your Vision Into Action with REYVIA Studio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={handleStartCreating}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white font-bold text-base shadow-2xl shadow-indigo-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Start Creating</span>
              </button>
              <button
                onClick={handleExploreStudio}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-bold text-base transition-all"
              >
                Explore REYVIA Studio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="py-16 bg-[#040508] border-t border-white/10 text-slate-400 text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/30">
                <Clapperboard className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-black text-white">REYVIA Studio</span>
            </div>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} REYVIA Studio. Release Your Vision Into Action.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
