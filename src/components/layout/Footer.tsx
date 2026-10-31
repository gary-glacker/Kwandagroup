import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Check,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import KwandaLogo, { KwandaWordmark } from "../shared/KwandaLogo";
import { LogisticsIcon, SmartHomeIcon, SpaceIcon, TransitIcon } from "../shared/BrandIcons";

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/kwandagroup" },
  { label: "X / Twitter", icon: Twitter, href: "https://x.com/kwandagroup" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/kwandagroup" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/" },
  { label: "GitHub", icon: Github, href: "https://github.com/kwandagroup" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-slate-300">
      <div className="absolute inset-0 mesh-navy opacity-90" />
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="shell relative">
        {/* Newsletter */}
        <div className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              The Kwanda Signal
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Product launches, field notes and engineering deep-dives.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              One considered email a month. Built in Kigali, read across Africa and the world. No noise.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!email.trim()) return;
                setSubscribed(true);
                setEmail("");
              }}
              className="flex flex-col gap-2.5 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="field-dark flex-1"
              />
              <button type="submit" className="btn-primary shrink-0 py-3">
                {subscribed ? (
                  <>
                    Subscribed <Check size={15} />
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
            <p className="mt-2.5 text-[10px] text-slate-500">
              By subscribing you agree to receive occasional Kwanda Group updates. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <Link to="/" aria-label="Kwanda Group home">
              <KwandaLogo light size="lg" />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              <strong className="mb-1 block font-semibold text-white">
                Smart Technology. Better Solutions. Stronger Society.
              </strong>
              We design, build and operate technology that moves people, goods and communities forward.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-cyan" />
                Norsken House, KG 7 Ave, Kigali, Rwanda
              </p>
              <a href="tel:+250732316625" className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Phone size={14} className="shrink-0 text-brand-cyan" />
                +250 732 316 625
              </a>
              <a href="mailto:info@kwandagroup.rw" className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Mail size={14} className="shrink-0 text-brand-cyan" />
                info@kwandagroup.rw
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-brand-blue/15 hover:text-brand-cyan"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Ecosystem</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Katisha Transit", to: "/products/katisha", icon: <TransitIcon size={14} /> },
                { label: "Vuduka Logistics", to: "/products/vuduka", icon: <LogisticsIcon size={14} /> },
                { label: "HuzaSpace", to: "/products/huzaspace", icon: <SpaceIcon size={14} /> },
                { label: "Iwacu Homes", to: "/products/iwacu", icon: <SmartHomeIcon size={14} /> },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-brand-cyan">
                    <span className="text-brand-blue/80">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Kwanda", to: "/company" },
                { label: "Solutions", to: "/solutions" },
                { label: "Services", to: "/services" },
                { label: "News & Press", to: "/news" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-slate-400 transition-colors hover:text-brand-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Regional hubs</h3>
            <ul className="space-y-3 text-xs">
              {[
                { city: "Kigali", role: "Global HQ & R&D", tz: "CAT" },
                { city: "Nairobi", role: "East Africa hub", tz: "EAT" },
                { city: "Johannesburg", role: "Southern Africa hub", tz: "SAST" },
              ].map((hub) => (
                <li key={hub.city} className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <Globe size={15} className="mt-0.5 shrink-0 text-brand-cyan" />
                  <span>
                    <strong className="block text-white">{hub.city}</strong>
                    <span className="text-slate-400">{hub.role} · {hub.tz}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="pointer-events-none relative -mx-4 select-none pb-2 opacity-[0.08]" aria-hidden="true">
          <KwandaWordmark light className="w-full min-w-[640px]" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-7 text-[11px] text-slate-500 md:flex-row md:items-center">
          <p>© 2026 Kwanda Group Ltd. All rights reserved. Kigali, Rwanda.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security & ethics</a>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-slate-300 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
            >
              Back to top <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
