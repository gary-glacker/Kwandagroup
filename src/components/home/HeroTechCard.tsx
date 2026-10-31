import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Cpu, Zap, Terminal } from 'lucide-react';
import KwandaLogo from '../shared/KwandaLogo';
import { LogisticsIcon, SmartHomeIcon, SpaceIcon, TransitIcon } from '../shared/BrandIcons';
import ntwariImg from '../../assets/ntwari.jpg';

// --- INTERACTIVE HERO TECH CARD WITH ANIMATED CIRCUIT NETWORK ---
const HeroTechCard = () => {
  const [activeTab, setActiveTab] = useState<"telemetry" | "ai" | "grid">("telemetry");
  const [ping, setPing] = useState(8);
  const [pulseCount, setPulseCount] = useState(12450);

  // Periodic subtle metric jitter for live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(prev => Math.floor(6 + Math.random() * 5));
      setPulseCount(prev => prev + (Math.random() > 0.5 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Background Animated Tech Aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue-deep rounded-3xl blur-xl opacity-30 animate-pulse pointer-events-none"></div>

      {/* Main Container */}
      <div className="bg-slate-900 rounded-3xl p-6 md:p-7 text-white shadow-2xl border border-slate-800 relative overflow-hidden group">
        {/* Animated Background Circuit SVGs */}
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            {/* Grid Pattern */}
            <defs>
              <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#38BDF8" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
            
            {/* Circuit Connections */}
            <path d="M 50 100 Q 150 50 250 150 T 350 250" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse" />
            <path d="M 100 300 Q 200 200 300 350" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* Animated Pulses */}
            <circle cx="150" cy="90" r="4" fill="#38BDF8">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="180" r="5" fill="#0284C7">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <div className="relative z-10 space-y-5">
          {/* Top Bar Header */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <KwandaLogo light size="sm" />
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-brand-blue/20 text-brand-cyan text-[11px] font-bold px-3 py-1 rounded-full border border-brand-blue/30">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
                LIVE CORE
              </span>
              <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-1 rounded">
                {ping}ms
              </span>
            </div>
          </div>

          {/* Interactive Tech Mode Switcher Pills */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700/60 text-[11px] font-bold">
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "telemetry" ? "bg-brand-blue-deep text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity size={12} />
              <span>Ecosystem</span>
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "ai" ? "bg-brand-blue-deep text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu size={12} />
              <span>AI Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab("grid")}
              className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "grid" ? "bg-brand-blue-deep text-white shadow-xs" : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap size={12} />
              <span>IoT Grid</span>
            </button>
          </div>

          {/* Dynamic Interactive Cards Content */}
          <AnimatePresence mode="wait">
            {activeTab === "telemetry" && (
              <motion.div 
                key="telemetry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/70 flex items-center justify-between hover:border-brand-blue/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
                      <TransitIcon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">Katisha Smart Transit</h4>
                      <p className="text-[11px] text-slate-400">2,400 Buses • Live Arrival Streams</p>
                    </div>
                  </div>
                  <span className="text-brand-cyan text-[10px] font-bold bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">Live</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/70 flex items-center justify-between hover:border-brand-blue/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
                      <LogisticsIcon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">Vuduka Fleet Logistics</h4>
                      <p className="text-[11px] text-slate-400">850 Vehicles • Live GPS Streams</p>
                    </div>
                  </div>
                  <span className="text-brand-cyan text-[10px] font-bold bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">99.9% Route</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/70 flex items-center justify-between hover:border-brand-blue/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
                      <SpaceIcon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">HuzaSpace Platform</h4>
                      <p className="text-[11px] text-slate-400">128 Spaces Booked Today</p>
                    </div>
                  </div>
                  <span className="text-brand-cyan text-[10px] font-bold bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">Active</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/70 flex items-center justify-between hover:border-brand-blue/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
                      <SmartHomeIcon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">Iwacu Smart Home OS</h4>
                      <p className="text-[11px] text-slate-400">{pulseCount.toLocaleString()} Devices Ready</p>
                    </div>
                  </div>
                  <span className="text-brand-cyan text-[10px] font-bold bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">Coming Soon</span>
                </div>
              </motion.div>
            )}

            {activeTab === "ai" && (
              <motion.div 
                key="ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <div className="p-4 rounded-2xl bg-slate-950 border border-brand-blue/30 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between text-[10px] text-brand-cyan font-bold border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1"><Terminal size={12} /> KWANDAFORGE GPU CLUSTER</span>
                    <span className="text-brand-cyan">ONLINE</span>
                  </div>
                  <p className="text-[11px] text-brand-cyan">❯ Model: Katisha-7B-Transit</p>
                  <p className="text-[11px] text-slate-400">❯ Tasks: Transit Demand / Space Matching AI</p>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-brand-blue to-brand-cyan h-full w-[82%] animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-400 pt-1">
                    <span>142 tokens/sec</span>
                    <span>GPU Temp: 48°C</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "grid" && (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <div className="p-4 rounded-2xl bg-slate-950 border border-brand-blue/30 text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-slate-300">
                    <span className="font-bold flex items-center gap-1.5 text-brand-cyan">
                      <Zap size={14} /> Solar Micro-Grid Sync
                    </span>
                    <span className="text-brand-cyan font-bold">4.8 kW Output</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
                    <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                      <span className="block text-slate-500">Battery Level</span>
                      <strong className="text-white text-sm">94% Charged</strong>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                      <span className="block text-slate-500">Grid Feed-in</span>
                      <strong className="text-brand-cyan text-sm">1.2 kW Export</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Info */}
          <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Norsken House, KG 7 Ave HQ
            </span>
            <span className="text-brand-cyan font-bold">www.kwandagroup.rw</span>
          </div>
        </div>
      </div>

      {/* Floating Badge overlay matching staff ID card in reference image */}
      <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 hidden md:flex items-center gap-3 z-20">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan p-0.5">
          <img 
            src={ntwariImg}
            alt="NTWARI Josue - Head of Transport" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h5 className="font-bold text-slate-900 text-xs">NTWARI Josue</h5>
          <p className="text-[10px] text-slate-500 font-semibold">Head of Transport | ID: KG-0114</p>
          <span className="text-[9px] font-bold text-brand-blue-deep uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping"></span>
            Kwanda Engineering
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroTechCard;
