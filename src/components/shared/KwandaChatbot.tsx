import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X } from 'lucide-react';
import { KwandaMark } from './KwandaLogo';

// --- FLOATING AI ASSISTANT CHATBOT (Requested by User) ---
const KwandaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { 
      sender: 'bot', 
      text: "Hello! Welcome to Kwanda Group. I'm the Kwanda Assistant. Ask me about Katisha Smart Transit, Vuduka Logistics, HuzaSpace, Iwacu, or how to work with our engineering team." 
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput("");

    // Contextual bot answers
    setTimeout(() => {
      let botReply = "Thank you for reaching out! For detailed inquiries or custom quotes, please call us directly at +250 732 316 625 or email info@kwandagroup.rw.";
      const lower = query.toLowerCase();

      if (lower.includes('katisha')) {
        botReply = "Katisha is our smart public transit platform — real-time bus tracking, AI route optimization, and tap-to-ride digital ticketing for cities. You can view details on our Products page!";
      } else if (lower.includes('vuduka')) {
        botReply = "Vuduka Hub is our hyper-speed logistics and fleet dispatch system. It provides real-time GPS telemetry, customs clearance automation, and AI route optimization.";
      } else if (lower.includes('huzaspace') || lower.includes('space') || lower.includes('venue')) {
        botReply = "HuzaSpace connects people with spaces — book offices, venues, and parking, and discover community events all in real time. Average match time is just 2.4 seconds!";
      } else if (lower.includes('iwacu')) {
        botReply = "Iwacu Smart Home OS is our domestic operating system that unifies IoT appliances, solar micro-grids, and community security broadcasts — it is launching very soon!";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
        botReply = "You can contact Kwanda Group at +250 732 316 625 or info@kwandagroup.rw. Our headquarters is at Norsken House, KG 7 Ave, Kigali, Rwanda.";
      } else if (lower.includes('service') || lower.includes('app') || lower.includes('web')) {
        botReply = "We offer custom Web & Mobile App development, Cloud Infrastructure, IT Consulting, and 24/7 Managed NOC support.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-[340px] md:w-[380px] h-[480px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-brand-navy text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <KwandaMark size={28} className="rounded-lg" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold">Kwanda Assistant</h4>
                  <span className="text-[10px] text-brand-cyan font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online · replies instantly
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/60 text-xs">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user' 
                      ? 'bg-brand-blue-deep text-white rounded-br-none' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-2xs'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto text-[10px]">
              {["Katisha Transit", "Vuduka Logistics", "HuzaSpace Platform", "Contact Info"].map((p, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSend(p)}
                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-brand-blue-soft text-slate-700 hover:text-brand-blue-deep border border-slate-200 whitespace-nowrap font-medium"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-slate-200 flex gap-2"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Kwanda Assistant..." 
                className="flex-1 px-3 py-2 rounded-xl bg-slate-100 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button type="submit" className="p-2 rounded-xl bg-brand-blue-deep text-white hover:bg-sky-700">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-brand-blue-deep via-brand-blue to-brand-cyan text-white shadow-[0_18px_40px_-14px_rgba(18,164,245,0.9)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageSquare size={24} />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center text-[9px] font-bold">1</span>
      </button>
    </div>
  );
};

export default KwandaChatbot;
