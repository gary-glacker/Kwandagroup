import { useState } from 'react';
import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CalendarDays, Mail, Newspaper, Radio } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import {
  LogisticsIcon,
  ShieldIcon,
  SmartHomeIcon,
  SpaceIcon,
  TransitIcon,
} from '../components/shared/BrandIcons';

type NewsArticle = {
  date: string;
  cat: string;
  read: string;
  title: string;
  desc: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  author: string;
  featured?: boolean;
  to?: string;
};

const articles: NewsArticle[] = [
  {
    date: 'October 30, 2026',
    cat: 'Mobility',
    read: '6 min read',
    title: 'Africa needs solutions, not ideas on paper — the vision behind Katisha',
    desc: 'Book bus tickets from your phone, pay with Mobile Money where supported, and travel between Kigali, Nairobi, Dodoma and beyond — without standing in a queue at the station.',
    icon: TransitIcon,
    featured: true,
    author: 'Kwanda Newsroom',
    to: '/news/katisha-bus-ticketing',
  },
  {
    date: 'June 18, 2026',
    cat: 'Mobility',
    read: '4 min read',
    title: 'Katisha smart transit goes live across Kigali corridors',
    desc: 'Real-time arrival tracking and tap-to-ride ticketing are now active on 2,400 buses, serving more than 1.2 million daily passenger trips across the city.',
    icon: TransitIcon,
    author: 'Kwanda Newsroom',
  },
  {
    date: 'May 27, 2026',
    cat: 'Platforms',
    read: '3 min read',
    title: 'HuzaSpace connects 500+ spaces across East Africa',
    desc: 'Offices, venues and parking are now findable and bookable in real time, with an average space-to-person match time of just 2.4 seconds.',
    icon: SpaceIcon,
    author: 'Product team',
  },
  {
    date: 'April 9, 2026',
    cat: 'Logistics',
    read: '5 min read',
    title: 'Vuduka expands cross-border freight telemetry',
    desc: 'Integration with regional customs databases reduces truck wait times at border checkpoints by 35%.',
    icon: LogisticsIcon,
    author: 'Vuduka team',
  },
  {
    date: 'March 21, 2026',
    cat: 'Engineering',
    read: '6 min read',
    title: 'Behind the build: predicting bus arrival times in Kigali traffic',
    desc: 'How our data team combines GPS telemetry, historical corridors and weather signals to make arrival predictions operators can trust.',
    icon: Radio,
    author: 'Engineering',
  },
  {
    date: 'February 12, 2026',
    cat: 'Connected living',
    read: '3 min read',
    title: 'Iwacu early access opens to Kigali households',
    desc: 'The first cohort of homes will test smart energy scheduling, safety alerts and the verified rental marketplace ahead of public launch.',
    icon: SmartHomeIcon,
    author: 'Iwacu team',
  },
  {
    date: 'January 30, 2026',
    cat: 'Security',
    read: '4 min read',
    title: 'Kwanda opens its security research practice',
    desc: 'A dedicated team now supports threat modelling, penetration testing and incident response for critical regional infrastructure.',
    icon: ShieldIcon,
    author: 'Security team',
  },
];

const categories = ['All', ...Array.from(new Set(articles.map((article) => article.cat)))];

const NewsPage = () => {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? articles : articles.filter((article) => article.cat === category);
  const featured = articles[0];
  const FeaturedIcon = featured.icon;

  return (
    <>
      <SEO
        title="News & Insights — Shipping, Learning & Building | Kwanda Group"
        description="Product launches, field notes and engineering deep-dives from the Kwanda Group team building mobility, logistics, spaces and smart living across Africa."
        keywords="Kwanda Group news, Katisha updates, Vuduka news, African tech blog, smart transit Rwanda"
        url="https://kwandagroup.rw/news"
      />
      <PageLayout
      badge="News & insights"
      title="What we are shipping, learning and building next."
      subtitle="Product launches, field notes and engineering deep-dives from the Kwanda Group team across Africa."
      actions={
        <>
          <a href="mailto:press@kwandagroup.rw" className="btn-primary">
            <Mail size={15} /> Media enquiries
          </a>
          <Link to="/careers" className="btn-outline">
            Work with us
          </Link>
        </>
      }
    >
      <div className="shell py-12 md:py-16">
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] mesh-navy p-7 text-white shadow-[0_40px_90px_-45px_rgba(4,16,32,0.9)] sm:p-10"
        >
          <div className="absolute inset-0 grid-pattern-dark opacity-25" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full border border-brand-cyan/30 bg-brand-blue/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-cyan">
                  Featured
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                  <CalendarDays size={12} /> {featured.date}
                </span>
                <span className="text-[10px] font-semibold text-slate-500">· {featured.read}</span>
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">{featured.desc}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link to={featured.to ?? '/news'} className="btn-primary">
                  Read the story <ArrowRight size={15} />
                </Link>
                <span className="text-[11px] font-semibold text-slate-400">By {featured.author}</span>
              </div>
            </div>
            <div className="hidden justify-center lg:col-span-4 lg:flex">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur">
                <div className="absolute inset-4 rounded-full border border-dashed border-brand-cyan/25 animate-spin-slow" />
                <FeaturedIcon size={64} className="text-brand-cyan" />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                category === item
                  ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue-deep'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, index) => {
            if (article.featured && category === 'All') return null;
            const Icon = article.icon;
            const href = article.to;
            return (
              <motion.article
                key={article.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/35 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="icon-tile">
                    <Icon size={21} />
                  </span>
                  <span className="badge-soft">{article.cat}</span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold text-slate-400">
                  <CalendarDays size={11} /> {article.date} · {article.read}
                </div>
                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-brand-blue-deep">
                  {href ? <Link to={href}>{article.title}</Link> : article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{article.author}</span>
                  {href ? (
                    <Link to={href} className="link-arrow text-[11px]">
                      Read <ArrowUpRight size={13} />
                    </Link>
                  ) : (
                    <span className="link-arrow text-[11px]">
                      Read <ArrowUpRight size={13} />
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Press kit + newsletter */}
        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
            <span className="icon-tile">
              <Newspaper size={22} />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-slate-950">Press & brand resources</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Official logos, product imagery and company facts for media and partners. For interviews, contact our
              newsroom.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="mailto:press@kwandagroup.rw" className="btn-outline btn-sm">
                Request press kit <ArrowRight size={13} />
              </a>
              <Link to="/company" className="btn-ghost btn-sm">
                Company facts
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl mesh-navy p-7 text-white">
            <div className="absolute inset-0 grid-pattern-dark opacity-25" />
            <div className="relative">
              <span className="icon-tile-dark">
                <Mail size={22} />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold text-white">The Kwanda Signal</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                One considered email a month with product launches, field notes and engineering deep-dives.
              </p>
              <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-5 flex flex-col gap-2 sm:flex-row"
              >
                <input type="email" required placeholder="you@company.com" className="field-dark flex-1" />
                <button type="submit" className="btn-primary btn-sm shrink-0">
                  Subscribe <ArrowRight size={13} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default NewsPage;
