import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Pause, Play, RotateCcw, ShieldCheck, Smartphone } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Real Katisha app screens, in the order a passenger sees them.       */
/* Captured from the live app (Kinyarwanda interface).                 */
/* ------------------------------------------------------------------ */

type AppScreen = {
  image: string;
  title: string;
  native: string;
  hint: string;
};

const SCREENS: AppScreen[] = [
  {
    image: '/katisha-app/01-language.png',
    title: 'Choose your language',
    native: 'Hitamo ururimi',
    hint: 'English, Kinyarwanda, Kiswahili or Français — the app opens in the traveller’s own language.',
  },
  {
    image: '/katisha-app/02-journey.png',
    title: 'Plan the journey',
    native: 'Urugendo Rwanjye',
    hint: 'Kigali is already set as the departure city. The traveller chooses a destination and taps Komeza (Continue).',
  },
  {
    image: '/katisha-app/03-company.png',
    title: 'Choose a bus company',
    native: 'Hitamo sosiyete ya bisi',
    hint: 'Available operators and fares — Jaguar, Simba, Trinity and more — appear side by side, from RWF 36,910.',
  },
  {
    image: '/katisha-app/04-date.png',
    title: 'Pick the travel date',
    native: 'Hitamo itariki y’urugendo',
    hint: 'A calendar shows the days available for travel, so the trip is planned around real seat availability.',
  },
  {
    image: '/katisha-app/05-time.png',
    title: 'Pick a departure time',
    native: 'Hitamo isaha yo guhaguruka',
    hint: 'Morning, afternoon and evening departures: 04:30, 15:00, 18:00 and 20:00.',
  },
  {
    image: '/katisha-app/06-passengers.png',
    title: 'Add passengers',
    native: 'Umubare w’imyanya',
    hint: 'Choose how many seats are needed — one or more — and add each traveller’s details.',
  },
  {
    image: '/katisha-app/07-mobile-money.png',
    title: 'Pay with Mobile Money',
    native: 'Ishyura na Mobile Money',
    hint: 'The traveller enters an MTN number, reviews the RWF 36,910 fare and taps Ishyura (Pay).',
  },
  {
    image: '/katisha-app/08-confirm-payment.png',
    title: 'Approve the payment',
    native: 'Emeza kwishyura',
    hint: 'A Mobile Money prompt arrives on the phone. Approving it completes the booking and issues the ticket.',
  },
];

/* ------------------------------------------------------------------ */
/* Demo                                                                */
/* ------------------------------------------------------------------ */

/**
 * Step-by-step tour of a real Katisha booking using screenshots captured
 * from the live app. Visitors can walk it manually with Back/Next, jump to
 * any screen, or let it auto-play.
 */
const KatishaBookingDemo = () => {
  const [step, setStep] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const lastStep = SCREENS.length - 1;
  const active = SCREENS[step];

  const next = () => setStep((value) => Math.min(value + 1, lastStep));

  const restart = () => {
    setStep(0);
    setAutoplay(false);
  };

  const jumpTo = (index: number) => {
    setStep(index);
    setAutoplay(false);
  };

  // Auto-play: advance every few seconds until the last screen.
  useEffect(() => {
    if (!autoplay) return;
    if (step >= lastStep) {
      setAutoplay(false);
      return;
    }
    const timer = window.setTimeout(() => setStep((value) => Math.min(value + 1, lastStep)), 4200);
    return () => window.clearTimeout(timer);
  }, [autoplay, step, lastStep]);

  const progress = useMemo(() => ((step + 1) / SCREENS.length) * 100, [step]);

  return (
    <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 mesh-navy p-5 text-white shadow-[0_40px_90px_-45px_rgba(4,16,32,0.9)] sm:p-8 md:p-10">
      {/* Panel header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">Live booking walkthrough</span>
          <h2 className="mt-1.5 font-display text-2xl font-bold text-white">Book a Katisha ticket, step by step</h2>
          <p className="mt-1.5 max-w-xl text-[11px] leading-relaxed text-slate-400">
            Real screens from the Katisha app, in the exact order a passenger sees them — from choosing a language to
            approving the Mobile Money payment.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAutoplay((value) => !value)}
          aria-pressed={autoplay}
          className={`inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-xs font-bold transition-all ${
            autoplay
              ? 'border-brand-cyan/40 bg-brand-cyan/15 text-brand-cyan'
              : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
          }`}
        >
          {autoplay ? <Pause size={13} /> : <Play size={13} />}
          {autoplay ? 'Pause auto-play' : 'Auto-play'}
        </button>
      </div>

      <div className="mt-7 grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12">
        {/* Phone with the real app screen */}
        <div className="mx-auto w-full max-w-[18rem] lg:mx-0">
          <div className="relative rounded-[2.9rem] border border-white/15 bg-slate-950 p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-black/40">
            <div className="absolute left-1/2 top-2.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
            <div className="relative aspect-[345/758] overflow-hidden rounded-[2.35rem] bg-white">
              {SCREENS.map((screen, index) => (
                <img
                  key={screen.image}
                  src={screen.image}
                  alt={`${screen.title} — Katisha app screen ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${
                    index === step ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              ))}
            </div>
          </div>

          {/* Phone controls */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => jumpTo(Math.max(0, step - 1))}
              disabled={step === 0}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeft size={13} /> Back
            </button>
            <button
              type="button"
              onClick={next}
              disabled={step === lastStep}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-brand-cyan/40 bg-brand-cyan/15 py-2.5 text-[11px] font-bold text-brand-cyan transition-colors hover:bg-brand-cyan/25 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next <ArrowRight size={13} />
            </button>
            <button
              type="button"
              onClick={restart}
              aria-label="Restart the walkthrough"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Screen {step + 1} of {SCREENS.length} · {active.title}
          </p>
        </div>

        {/* Manual */}
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Manual</span>
            <span className="text-[10px] font-semibold text-slate-500">Tap a step to jump to it</span>
          </div>

          <ol className="mt-3 space-y-1.5">
            {SCREENS.map((screen, index) => {
              const current = index === step;
              const done = index < step;
              return (
                <li key={screen.title}>
                  <button
                    type="button"
                    onClick={() => jumpTo(index)}
                    aria-current={current ? 'step' : undefined}
                    className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition-all ${
                      current
                        ? 'border-brand-cyan/40 bg-white/10'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/5'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${
                        current
                          ? 'bg-brand-cyan text-brand-navy'
                          : done
                            ? 'bg-emerald-400/20 text-emerald-300'
                            : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {done ? <Check size={12} /> : index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-[12px] font-bold ${current ? 'text-white' : 'text-slate-200'}`}>
                        {screen.title}
                        <span className="ml-2 text-[9px] font-semibold italic text-slate-400">{screen.native}</span>
                      </span>
                      <span className="mt-0.5 block text-[10px] leading-relaxed text-slate-400">{screen.hint}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[10px] leading-relaxed text-slate-400">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-brand-cyan" />
            Screenshot walkthrough from the live Katisha app (Kinyarwanda interface). Mobile Money is offered where
            supported; no real payment is taken here.
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-slate-500">
            <Smartphone size={12} />
            Recorded on the Katisha mobile app
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatishaBookingDemo;
