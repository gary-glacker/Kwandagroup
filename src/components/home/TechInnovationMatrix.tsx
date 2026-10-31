import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Cpu, HomeIcon, MapPin, Truck, Radio, Play, Terminal, Zap, ShieldCheck } from 'lucide-react';

// --- DEDICATED TECH & AI INNOVATION MATRIX ANIMATION SECTION ---
const TechInnovationMatrix = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "iot" | "space" | "fleet">("ai");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // AI Stream simulation loop
  useEffect(() => {
    let interval: any;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimStep(prev => (prev + 1) % 5);
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    setTimeout(() => {
      setIsSimulating(false);
    }, 6000);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Animated Tech Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-cyan text-xs font-bold uppercase tracking-widest border border-brand-blue/30">
            <Sparkles size={14} className="animate-spin" />
            Live Tech Simulation Studio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Interactive AI & Technology Engine
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Experience Kwanda Group's core technology pillars operating in real time across smart-transit AI, smart-home IoT micro-grids, space-matching intelligence, and hyper-logistics.
          </p>
        </div>

        {/* Tech Mode Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "ai", label: "Katisha Transit Neural Net", icon: <Cpu size={18} />, color: "border-brand-blue/50 text-brand-cyan" },
            { id: "iot", label: "Iwacu Smart Home Micro-Grid", icon: <HomeIcon size={18} />, color: "border-brand-blue/50 text-brand-cyan" },
            { id: "space", label: "HuzaSpace Matching Radar", icon: <MapPin size={18} />, color: "border-brand-blue/50 text-brand-cyan" },
            { id: "fleet", label: "Vuduka Logistics Vector Grid", icon: <Truck size={18} />, color: "border-brand-blue/50 text-brand-cyan" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setIsSimulating(false);
              }}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-white shadow-xl border-2 border-brand-blue scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span className={activeTab === tab.id ? 'text-brand-cyan' : 'text-slate-500'}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Screen Display Box */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* DEMO 1: KWANDAFORGE AI & NEURAL NET */}
            {activeTab === "ai" && (
              <motion.div
                key="ai-matrix"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* SVG Neural Layer Animation */}
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span className="font-mono text-brand-cyan flex items-center gap-2">
                      <Radio size={14} className="animate-pulse" />
                      NEURAL SYNAPSE NETWORK (7B PARAMETERS)
                    </span>
                    <button
                      onClick={handleRunSimulation}
                      className="btn-primary py-1.5 px-3.5 text-xs shadow-none flex items-center gap-1.5"
                    >
                      <Play size={12} />
                      <span>{isSimulating ? "Processing Tokens..." : "Run AI Inference Test"}</span>
                    </button>
                  </div>

                  {/* Interactive SVG Neural Diagram */}
                  <div className="relative h-64 w-full flex items-center justify-center bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800/80">
                    <svg className="w-full h-full p-4" viewBox="0 0 500 200">
                      {/* Connection Lines */}
                      <g stroke="#38BDF8" strokeWidth="1" opacity="0.3">
                        <line x1="50" y1="50" x2="180" y2="40" />
                        <line x1="50" y1="50" x2="180" y2="100" />
                        <line x1="50" y1="100" x2="180" y2="40" />
                        <line x1="50" y1="100" x2="180" y2="100" />
                        <line x1="50" y1="100" x2="180" y2="160" />
                        <line x1="50" y1="150" x2="180" y2="100" />
                        <line x1="50" y1="150" x2="180" y2="160" />

                        <line x1="180" y1="40" x2="320" y2="50" />
                        <line x1="180" y1="100" x2="320" y2="100" />
                        <line x1="180" y1="160" x2="320" y2="150" />

                        <line x1="320" y1="50" x2="450" y2="100" stroke="#0284C7" strokeWidth="1.5" />
                        <line x1="320" y1="100" x2="450" y2="100" stroke="#0284C7" strokeWidth="1.5" />
                        <line x1="320" y1="150" x2="450" y2="100" stroke="#0284C7" strokeWidth="1.5" />
                      </g>

                      {/* Animated Particle Swarms traversing synapsis */}
                      {isSimulating && (
                        <g>
                          <circle cx="115" cy="45" r="4" fill="#38BDF8">
                            <animate attributeName="cx" values="50;180" dur="0.8s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="250" cy="95" r="4" fill="#38BDF8">
                            <animate attributeName="cx" values="180;320" dur="0.8s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="385" cy="125" r="5" fill="#0284C7">
                            <animate attributeName="cx" values="320;450" dur="0.8s" repeatCount="indefinite" />
                          </circle>
                        </g>
                      )}

                      {/* Input Layer Nodes */}
                      <g fill="#0EA5E9">
                        <circle cx="50" cy="50" r="10" />
                        <circle cx="50" cy="100" r="10" />
                        <circle cx="50" cy="150" r="10" />
                      </g>

                      {/* Hidden Layer Nodes */}
                      <g fill="#0284C7">
                        <circle cx="180" cy="40" r="12" />
                        <circle cx="180" cy="100" r="12" />
                        <circle cx="180" cy="160" r="12" />

                        <circle cx="320" cy="50" r="12" />
                        <circle cx="320" cy="100" r="12" />
                        <circle cx="320" cy="150" r="12" />
                      </g>

                      {/* Output Layer Node */}
                      <circle cx="450" cy="100" r="16" fill="#0284C7" className="animate-pulse" />
                    </svg>

                    <span className="absolute bottom-2 left-4 text-[10px] font-mono text-slate-400">
                      Layer 1: Input Embeddings
                    </span>
                    <span className="absolute bottom-2 right-4 text-[10px] font-mono text-brand-cyan font-bold">
                      Output: Context Decision
                    </span>
                  </div>
                </div>

                {/* AI Console Terminal */}
                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs text-slate-300">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-brand-cyan font-bold">
                      <Terminal size={12} /> INFERENCE TERMINAL
                    </span>
                    <span className="text-brand-cyan font-bold">142 TOKENS/S</span>
                  </div>

                  <div className="space-y-2 h-48 overflow-y-auto pr-1">
                    <p className="text-slate-500">[0.00s] Katisha v2.4 initialized on Kigali GPU Cluster.</p>
                    <p className="text-brand-cyan">[0.02s] Receiving multi-modal GPS & demand streams...</p>
                    {simStep >= 1 && <p className="text-brand-cyan">[0.12s] Parsing bus arrival & passenger demand patterns...</p>}
                    {simStep >= 2 && <p className="text-brand-cyan">[0.24s] Cross-referencing live space occupancy data...</p>}
                    {simStep >= 3 && <p className="text-brand-cyan">[0.35s] SUCCESS: Optimized route & space match generated (99.8% confidence).</p>}
                    {isSimulating && (
                      <p className="text-brand-cyan animate-pulse">❯ Processing live tokens...</p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-400">
                    <span>Latency: <strong>1.2ms</strong></span>
                    <span>Sovereignty: <strong>100% Local</strong></span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 2: IWACU SMART IOT MICRO-GRID */}
            {activeTab === "iot" && (
              <motion.div
                key="iot-matrix"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-cyan flex items-center gap-2">
                      <Zap size={16} /> Solar Generation
                    </span>
                    <span className="text-xs font-bold text-brand-cyan bg-brand-blue/10 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">5.2 kW</div>
                  <p className="text-xs text-slate-400">Rooftop Photovoltaic Array feeds Kwanda Smart Storage Battery in real-time.</p>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-brand-cyan h-2 rounded-full w-[85%] animate-pulse"></div>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-cyan flex items-center gap-2">
                      <HomeIcon size={16} /> Domestic Load
                    </span>
                    <span className="text-xs font-bold text-brand-cyan bg-brand-blue/10 px-2 py-0.5 rounded">Optimized</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">1.8 kW</div>
                  <p className="text-xs text-slate-400">Iwacu OS automatically schedules high-power appliances during peak solar hours.</p>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-brand-cyan h-2 rounded-full w-[40%]"></div>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-cyan flex items-center gap-2">
                      <ShieldCheck size={16} /> Community Grid Export
                    </span>
                    <span className="text-xs font-bold text-brand-cyan bg-brand-blue/10 px-2 py-0.5 rounded">+3.4 kW</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">$4.20/day</div>
                  <p className="text-xs text-slate-400">Surplus clean electricity exported back to local micro-grid with automated payouts.</p>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-brand-cyan h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 3: HUZASPACE SPACE-MATCHING RADAR */}
            {activeTab === "space" && (
              <motion.div
                key="space-matrix"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center text-xs text-brand-cyan font-bold border-b border-slate-800 pb-3">
                    <span className="flex items-center gap-2">
                      <Radio size={14} className="animate-spin" /> LIVE SPACE-MATCHING RADAR
                    </span>
                    <span>MATCHING: 128 PEOPLE → SPACES</span>
                  </div>

                  <div className="relative h-60 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                    {/* Radar Sweep Effect */}
                    <div className="absolute w-48 h-48 rounded-full border border-brand-blue/30 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-brand-blue/40"></div>
                      <div className="w-16 h-16 rounded-full border border-brand-blue/60"></div>
                    </div>
                    
                    {/* Pulsing Hotspots */}
                    <div className="absolute top-12 left-24 flex items-center gap-2 bg-slate-950/90 p-2 rounded-xl border border-brand-blue/40 text-[10px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"></span>
                      <div>
                        <strong className="block text-white">Downtown Office Park</strong>
                        <span className="text-brand-cyan">12 Open Desks | Booked</span>
                      </div>
                    </div>

                    <div className="absolute bottom-10 right-20 flex items-center gap-2 bg-slate-950/90 p-2 rounded-xl border border-brand-blue/40 text-[10px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"></span>
                      <div>
                        <strong className="block text-white">KG 7 Convention Venue</strong>
                        <span className="text-brand-cyan">3 Slots Open | Match: 2.1s</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4 text-xs">
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Spaces Connected</span>
                    <div className="text-2xl font-black text-brand-cyan">500+ Venues & Offices</div>
                    <p className="text-slate-400">Real-time availability across offices, venues, and parking.</p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Average Match Time</span>
                    <div className="text-2xl font-black text-brand-cyan">2.4 Seconds</div>
                    <p className="text-slate-400">Smart matching pairs people with the perfect space instantly.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DEMO 4: VUDUKA LOGISTICS VECTOR GRID */}
            {activeTab === "fleet" && (
              <motion.div
                key="fleet-matrix"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center text-xs text-brand-cyan font-bold border-b border-slate-800 pb-3">
                    <span className="flex items-center gap-2">
                      <Truck size={16} /> EAST AFRICA CROSS-BORDER VECTOR CORRIDOR
                    </span>
                    <span>FLEET: 850 TRUCKS</span>
                  </div>

                  <div className="relative h-60 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 p-6 flex flex-col justify-between">
                    <div className="flex justify-between text-xs font-mono text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px]">ORIGIN</span>
                        <strong className="text-brand-cyan text-sm">Kigali Hub</strong>
                      </div>
                      <div className="text-center">
                        <span className="text-brand-cyan text-xs font-bold bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/30">
                          385 km Remaining • ETA 4h 12m
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block text-[10px]">DESTINATION</span>
                        <strong className="text-brand-cyan text-sm">Mombasa Port</strong>
                      </div>
                    </div>

                    {/* Moving Route Vector line */}
                    <div className="relative my-8">
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-brand-blue via-brand-blue to-brand-blue h-full w-[65%] animate-pulse"></div>
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-[62%] bg-brand-blue text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-white">
                        <Truck size={14} className="animate-bounce" />
                      </div>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Cold-chain Temp: <strong className="text-brand-cyan">+3.8°C</strong></span>
                      <span>Customs Clearance: <strong className="text-brand-cyan">Pre-cleared Digital Waybill</strong></span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Transit Delay Saved</span>
                    <div className="text-2xl font-black text-brand-cyan">35% Reduction</div>
                    <p className="text-slate-400">Predictive ML rerouting around heavy traffic corridors.</p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Cold-Chain Compliance</span>
                    <div className="text-2xl font-black text-brand-cyan">100% Verified</div>
                    <p className="text-slate-400">Continuous telemetry sensor monitoring for perishables.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechInnovationMatrix;
