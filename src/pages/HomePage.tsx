import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BusIcon,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Play,
  Sparkles,
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import HeroTechCard from '../components/home/HeroTechCard';
import TechInnovationMatrix from '../components/home/TechInnovationMatrix';
import { PRODUCTS_DATA } from '../data/products';
import { KwandaMark } from '../components/shared/KwandaLogo';
import SEO from '../components/shared/SEO';
import {
  AiIcon,
  CloudIcon,
  CodeIcon,
  CompassIcon,
  GrowthIcon,
  LayersIcon,
  LogisticsIcon,
  ShieldIcon,
  SmartHomeIcon,
  SpaceIcon,
  SparkIcon,
  TransitIcon,
} from '../components/shared/BrandIcons';

const product = (id: string) => PRODUCTS_DATA.find((item) => item.id === id)!;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const capabilities = [
  { label: 'Applied AI', icon: AiIcon },
  { label: 'Cloud & Edge', icon: CloudIcon },
  { label: 'Smart Mobility', icon: TransitIcon },
  { label: 'Logistics Tech', icon: LogisticsIcon },
  { label: 'Connected Living', icon: SmartHomeIcon },
  { label: 'Spatial Platforms', icon: SpaceIcon },
  { label: 'Cybersecurity', icon: ShieldIcon },
  { label: 'Product Engineering', icon: CodeIcon },
];

const marqueeItems = [...capabilities, ...capabilities];

const services = [
  {
    title: 'AI & data engineering',
    desc: 'Localized models, computer vision and decision systems trained on real African operational data.',
    icon: AiIcon,
    to: '/services',
  },
  {
    title: 'Cloud & edge infrastructure',
    desc: 'Sovereign hosting, edge gateways and high-availability architecture for mission-critical services.',
    icon: CloudIcon,
    to: '/services',
  },
  {
    title: 'Mobility platforms',
    desc: 'Ticketing, live tracking, route optimisation and fleet telemetry for cities on the move.',
    icon: TransitIcon,
    to: '/solutions',
  },
  {
    title: 'Logistics systems',
    desc: 'Dispatch, cold-chain monitoring and customs automation for regional and cross-border freight.',
    icon: LogisticsIcon,
    to: '/solutions',
  },
  {
    title: 'Digital products',
    desc: 'Web, mobile and marketplace products designed, shipped and operated by one integrated team.',
    icon: CodeIcon,
    to: '/products',
  },
  {
    title: 'Security & compliance',
    desc: 'Threat modelling, penetration testing and data-residency controls built in from day one.',
    icon: ShieldIcon,
    to: '/services',
  },
];

const approach = [
  {
    step: '01',
    title: 'Listen in the field',
    desc: 'We start with operators, commuters and communities — not a slide deck. Every platform begins with observed friction.',
    icon: CompassIcon,
  },
  {
    step: '02',
    title: 'Engineer the system',
    desc: 'Hardware, software and data are designed together, tested in live conditions, and hardened for scale.',
    icon: LayersIcon,
  },
  {
    step: '03',
    title: 'Scale with care',
    desc: 'We stay accountable after launch: 24/7 monitoring, local support teams and measurable community impact.',
    icon: GrowthIcon,
  },
];

const news = [
  {
    date: 'June 2026',
    cat: 'Mobility',
    title: 'Katisha goes live across Kigali corridors',
    desc: 'Real-time arrivals and tap-to-ride ticketing now active on 2,400 buses.',
    icon: TransitIcon,
  },
  {
    date: 'May 2026',
    cat: 'Platforms',
    title: 'HuzaSpace connects 500+ spaces',
    desc: 'Offices, venues and parking become findable and bookable in 2.4 seconds.',
    icon: SpaceIcon,
  },
  {
    date: 'April 2026',
    cat: 'Logistics',
    title: 'Vuduka expands cross-border telemetry',
    desc: 'Customs integrations cut truck wait times at regional borders by 35%.',
    icon: LogisticsIcon,
  },
];

const HomePage = () => (
  <>
    <SEO
      title="Kwanda Group — Smart Technology. Better Solutions. Stronger Society."
      description="Kwanda Group builds AI-powered mobility, logistics, space discovery and smart living platforms engineered in Kigali, Rwanda for Africa and the world."
      keywords="Kwanda Group, Katisha, Vuduka, HuzaSpace, Iwacu, smart transit Rwanda, logistics AI, Kigali tech"
      url="https://kwandagroup.rw/"
    />
    <PageLayout meta={['Kigali, Rwanda', 'Serving Africa & beyond', '24/7 support']}>
    {/* ================= HERO ================= */}
    <section className="relative overflow-hidden mesh-hero">
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_75%_15%,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="shell relative grid items-center gap-14 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <span className="eyebrow">
              <Sparkles size={12} />
              Smart Technology · Better Solutions
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Engineered in Kigali since 2023
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="display-xl mt-6"
          >
            Technology that moves{' '}
            <span className="relative inline-block">
              <span className="gradient-text">people, goods</span>
              <svg
                className="absolute -bottom-2 left-0 h-2.5 w-full text-brand-blue/40"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8.5C74 2.5 166 2 298 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{' '}
            and cities.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="lead mt-7 max-w-xl"
          >
            Kwanda Group is the Kigali-born technology company behind{' '}
            <strong className="font-semibold text-slate-900">Katisha</strong>,{' '}
            <strong className="font-semibold text-slate-900">Vuduka</strong>,{' '}
            <strong className="font-semibold text-slate-900">HuzaSpace</strong> and{' '}
            <strong className="font-semibold text-slate-900">Iwacu</strong> — four platforms connecting transit,
            logistics, spaces and homes through one intelligent ecosystem.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/products" className="btn-primary">
              Explore the ecosystem
              <ArrowRight size={16} strokeWidth={2.4} />
            </Link>
            <Link to="/company" className="btn-outline">
              Our story
            </Link>
            <Link to="/contact" className="btn-ghost">
              <Play size={14} />
              Talk to the team
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200/80 pt-6"
          >
            {[
              { value: '4', label: 'Platforms in market' },
              { value: '5', label: 'Markets served' },
              { value: '24/7', label: 'Kigali NOC support' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <HeroTechCard />
          </motion.div>

          <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur md:flex md:items-center md:gap-2.5">
            <span className="icon-tile h-9 w-9 rounded-xl">
              <GrowthIcon size={17} />
            </span>
            <span>
              <span className="block font-display text-sm font-extrabold text-slate-900">+35%</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Transit efficiency</span>
            </span>
          </div>

          <div className="absolute -bottom-5 right-2 hidden items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-2 text-[10px] font-bold text-slate-700 shadow-lg backdrop-blur md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-blue" />
            Live telemetry · 12ms to Kigali node
          </div>
        </div>
      </div>

      {/* Capability marquee */}
      <div className="relative border-y border-slate-200/80 bg-white/70 backdrop-blur">
        <div className="shell flex items-center gap-6 py-4">
          <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:block">
            Built with
          </span>
          <div className="marquee flex-1">
            <div className="marquee-track items-center gap-8 pr-8">
              {marqueeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <span
                    key={`${item.label}-${index}`}
                    className="inline-flex shrink-0 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500"
                  >
                    <Icon size={15} className="text-brand-blue" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ================= ECOSYSTEM ================= */}
    <section className="section relative bg-white">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="eyebrow">One connected ecosystem</span>
            <h2 className="display-lg mt-4">
              Four platforms.
              <br className="hidden sm:block" /> One clear purpose.
            </h2>
            <p className="lead mt-4">
              Each product solves a specific, everyday problem. Together they form the digital backbone for how
              people and goods move through a modern African city.
            </p>
          </motion.div>
          <Link to="/products" className="btn-outline shrink-0 self-start md:self-auto">
            All products
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Katisha */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy p-7 text-white shadow-[0_30px_80px_-40px_rgba(4,16,32,0.85)] sm:p-9 lg:col-span-7"
          >
            <div className="absolute inset-0 grid-pattern-dark opacity-25" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
            <svg
              className="pointer-events-none absolute right-4 top-16 hidden h-52 w-64 text-brand-cyan/50 md:block"
              viewBox="0 0 260 200"
              fill="none"
              aria-hidden="true"
            >
              <path d="M12 168C42 168 48 96 88 96s42 52 78 52 34-88 82-88" stroke="currentColor" strokeWidth="1.3" strokeDasharray="4 6" />
              <circle cx="88" cy="96" r="5" fill="currentColor" />
              <circle cx="166" cy="148" r="5" fill="currentColor" />
              <circle cx="248" cy="60" r="7" fill="currentColor" className="animate-pulse" />
              <path d="M88 96 166 148 248 60" stroke="currentColor" strokeWidth="1" opacity=".4" />
            </svg>

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <span className="icon-tile-dark">
                  <BusIcon size={24} />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                </span>
              </div>

              <div className="mt-7 max-w-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">Smart public transit</span>
                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white">Katisha</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{product('katisha').desc}</p>
              </div>

              <div className="mt-7 grid max-w-md grid-cols-3 gap-3 border-t border-white/10 pt-5">
                {[
                  ['1.2M', 'Daily trips'],
                  ['2,400', 'Connected buses'],
                  ['99.8%', 'On-time'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="font-display text-lg font-extrabold text-white">{value}</div>
                    <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                <Link to="/products/katisha" className="btn-dark btn-sm">
                  Explore Katisha <ArrowRight size={14} />
                </Link>
                <span className="text-[10px] font-semibold text-slate-400">katisha.today</span>
              </div>
            </div>
          </motion.article>

          {/* Vuduka */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="card card-lift group flex flex-col justify-between overflow-hidden p-7 sm:p-9 lg:col-span-5"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <span className="icon-tile">
                  <LogisticsIcon size={24} />
                </span>
                <span className="badge-status">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                </span>
              </div>
              <span className="mt-7 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-deep">
                Logistics & fleet
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950">Vuduka</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{product('vuduka').desc}</p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                ['850', 'Vehicles live'],
                ['35%', 'Delay saved'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-brand-mist p-3">
                  <div className="font-display text-xl font-extrabold text-slate-950">{value}</div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/products/vuduka"
              className="mt-6 inline-flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-800 transition-all group-hover:border-brand-blue/40 group-hover:bg-brand-blue-soft group-hover:text-brand-blue-deep"
            >
              Explore Vuduka <ArrowRight size={14} />
            </Link>
          </motion.article>

          {/* HuzaSpace */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-7 sm:p-9 lg:col-span-5"
          >
            <img
              src={product('huzaspace').image}
              alt="Modern bookable workspace"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-brand-navy/20" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <span className="icon-tile-dark">
                  <SpaceIcon size={23} />
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-cyan backdrop-blur">
                  Coming soon
                </span>
              </div>
              <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">Spaces & community</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">HuzaSpace</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300">
                Find, book and unlock offices, venues, parking and community events in real time.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['500+ spaces', '2.4s match', 'QR access'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-200 backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/products/huzaspace" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-cyan">
                Join the waitlist <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.article>

          {/* Iwacu */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="card card-lift group relative overflow-hidden p-7 sm:p-9 lg:col-span-7"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-cyan/10 blur-2xl" />
            <div className="relative grid gap-8 sm:grid-cols-2 sm:items-center">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="icon-tile">
                    <SmartHomeIcon size={24} />
                  </span>
                  <span className="badge-soft">Coming soon</span>
                </div>
                <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-deep">Connected living</span>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950">Iwacu</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  A connected-home and rental platform that brings smart energy, safety and trusted housing together.
                </p>
                <Link to="/products/iwacu" className="link-arrow mt-5">
                  Preview Iwacu <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-brand-mist p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Home status</span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Secure
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    ['Solar', '5.2 kW'],
                    ['Battery', '94%'],
                    ['Security', 'Armed'],
                    ['Air quality', 'Good'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-200 bg-white p-2.5">
                      <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                      <div className="mt-0.5 font-display text-sm font-bold text-slate-900">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-brand-navy px-3 py-2 text-[9px] font-semibold text-slate-300">
                  <KwandaMark size={18} className="rounded" /> Kwanda Home OS · v0.9
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>

    {/* ================= LIVE TECH STUDIO ================= */}
    <TechInnovationMatrix />

    {/* ================= CAPABILITIES ================= */}
    <section className="section relative overflow-hidden bg-brand-mist">
      <div className="absolute inset-0 dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">What we build</span>
            <h2 className="display-lg mt-4">Deep capability. Real-world delivery.</h2>
          </motion.div>
          <p className="lead lg:col-span-5">
            We are not a consultancy that hands over a deck. We are the engineering, product and operations team
            that builds, launches and runs the systems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              >
                <Link
                  to={service.to}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-card-hover"
                >
                  <div className="flex items-start justify-between">
                    <span className="icon-tile">
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-[11px] font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-brand-blue-deep">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 transition-all group-hover:gap-2.5 group-hover:text-brand-blue-deep">
                    Learn more <ArrowUpRight size={13} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= APPROACH ================= */}
    <section className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <span className="eyebrow">How we work</span>
          <h2 className="display-lg mt-4">From field research to national scale.</h2>
          <p className="lead mt-4">
            Great technology in Africa is not imported. It is observed, designed and tested where it will be used.
          </p>
          <Link to="/company" className="btn-secondary mt-8">
            Inside Kwanda Group
            <ArrowRight size={16} />
          </Link>

          <div className="mt-10 flex flex-wrap gap-2">
            {['Rwanda', 'Kenya', 'Tanzania', 'Uganda', 'South Africa'].map((market) => (
              <span key={market} className="chip">
                <MapPin size={11} className="text-brand-blue" /> {market}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4 lg:col-span-7">
          {approach.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex gap-5 rounded-3xl border border-slate-200/80 bg-brand-mist/60 p-6 transition-all hover:border-brand-blue/30 hover:bg-white hover:shadow-card sm:p-7"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-brand-cyan">
                    <Icon size={20} />
                  </span>
                  {index < approach.length - 1 && <span className="mt-2 hidden h-full w-px bg-slate-300 sm:block" />}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-deep">Step {item.step}</span>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= IMPACT ================= */}
    <section className="section relative overflow-hidden mesh-navy text-white">
      <div className="absolute inset-0 grid-pattern-dark opacity-25" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow-dark">
              <SparkIcon size={12} /> Mission & impact
            </span>
            <blockquote className="mt-6 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-4xl">
              “We engineer smart technology that lifts people up and strengthens the communities we serve.”
            </blockquote>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              Kwanda Group bridges real-world needs with next-generation digital infrastructure — operating with
              uncompromising ethics, full transparency and a long-term commitment to human potential across Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/company" className="btn-primary">
                Read our story <ArrowRight size={16} />
              </Link>
              <Link to="/careers" className="btn-dark">
                Join the team <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <KwandaMark size={40} className="rounded-xl" />
              <div>
                <div className="font-display text-sm font-bold text-white">INEZA MANZI Alpe</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Founder & CEO, Kwanda Group</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: '3.2M+', label: 'Connected citizens', icon: Globe },
                { value: '85,000', label: 'Farmers empowered', icon: GrowthIcon },
                { value: '500+', label: 'Spaces connected', icon: SpaceIcon },
                { value: '24/7', label: 'Global support', icon: ShieldIcon },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:border-brand-cyan/30 hover:bg-white/[0.07] sm:p-6"
                  >
                    <Icon size={20} className="text-brand-cyan" />
                    <div className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[10px] font-semibold text-slate-400">
              <CheckCircle2 size={13} className="text-emerald-400" />
              Independently benchmarked across partner deployments
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ================= NEWS ================= */}
    <section className="section bg-white">
      <div className="shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">From the field</span>
            <h2 className="display-md mt-4">What we are shipping.</h2>
          </div>
          <Link to="/news" className="link-arrow self-start md:self-auto">
            All news & press <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {news.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={article.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="icon-tile h-10 w-10 rounded-xl">
                    <Icon size={19} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{article.date}</span>
                </div>
                <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue-deep">{article.cat}</span>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-brand-blue-deep">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.desc}</p>
                <Link to="/news" className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 transition-all group-hover:gap-2.5 group-hover:text-brand-blue-deep">
                  Read article <ArrowRight size={13} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= CTA ================= */}
    <section className="pb-20 pt-4 md:pb-28">
      <div className="shell">
        <div className="cta-panel noise">
          <div className="absolute inset-0 grid-pattern-dark opacity-20" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/15 bg-white/10 backdrop-blur">
              <KwandaMark size={42} className="rounded-xl" />
            </span>
            <span className="eyebrow-dark mt-6">Let's build what's next</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
              Bring us the problem.
              <br />
              <span className="gradient-text-light">We will engineer the system.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              From a single product sprint to national infrastructure, our Kigali team partners with governments,
              operators and founders to ship technology that lasts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start a conversation <ArrowRight size={16} />
              </Link>
              <a href="mailto:info@kwandagroup.rw" className="btn-dark">
                <Mail size={15} /> info@kwandagroup.rw
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold text-slate-400">
              <a href="tel:+250732316625" className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone size={12} className="text-brand-cyan" /> +250 732 316 625
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} className="text-brand-cyan" /> Norsken House, Kigali
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Reply within 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
  </>
);

export default HomePage;
