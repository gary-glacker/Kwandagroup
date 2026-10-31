import { useState } from 'react';
import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Lock, MapPin, Plug, Sparkles } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import { PRODUCTS_DATA } from '../data/products';
import {
  LogisticsIcon,
  SmartHomeIcon,
  SpaceIcon,
  TransitIcon,
} from '../components/shared/BrandIcons';

const productIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  katisha: TransitIcon,
  vuduka: LogisticsIcon,
  huzaspace: SpaceIcon,
  iwacu: SmartHomeIcon,
};

const principles = [
  {
    title: 'Local-first by design',
    desc: 'Data residency, local languages and offline resilience are baseline requirements — not add-ons.',
    icon: MapPin,
  },
  {
    title: 'Interoperable by default',
    desc: 'Open APIs, standard protocols and clean integrations with the systems already in the field.',
    icon: Plug,
  },
  {
    title: 'Secure from the first commit',
    desc: 'Threat modelling, encryption and least-privilege access are built into every release.',
    icon: Lock,
  },
];

const ProductsPage = () => {
  const [filter, setFilter] = useState<'all' | 'live' | 'soon'>('all');
  const products = PRODUCTS_DATA.filter((item) =>
    filter === 'all' ? true : filter === 'live' ? !item.comingSoon : item.comingSoon
  );

  return (
    <>
      <SEO
        title="Products — Katisha, Vuduka, HuzaSpace & Iwacu | Kwanda Group"
        description="Meet the Kwanda Group platform ecosystem: Katisha smart transit, Vuduka logistics, HuzaSpace bookable spaces and Iwacu connected homes — built for Africa."
        keywords="Katisha smart transit, Vuduka logistics, HuzaSpace, Iwacu smart home, Kwanda products"
        url="https://kwandagroup.rw/products"
      />
      <PageLayout
      badge="Product ecosystem"
      title="Four platforms. Built for real life."
      subtitle="Explore the Kwanda Group portfolio — from smart public transit and regional logistics to bookable spaces and connected homes."
      actions={
        <>
          <Link to="/contact" className="btn-primary">
            Request a demo <ArrowRight size={16} />
          </Link>
          <Link to="/solutions" className="btn-outline">
            Browse solutions
          </Link>
        </>
      }
    >
      <div className="shell py-12 md:py-16">
        {/* Overview strip */}
        <div className="mb-10 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:flex-row md:items-center md:justify-between md:p-7">
          <div>
            <div className="flex items-center gap-2">
              <span className="eyebrow">
                <Sparkles size={12} /> Ecosystem overview
              </span>
              <span className="badge-status">2 live · 2 launching</span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              Each platform is production-grade and independently operated, sharing one identity, one security
              model and one support team.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 border-t border-slate-100 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {[
              ['4', 'Products'],
              ['2', 'Live now'],
              ['1', 'Support team'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-extrabold text-slate-950">{value}</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All products', count: PRODUCTS_DATA.length },
            { id: 'live', label: 'Live now', count: PRODUCTS_DATA.filter((p) => !p.comingSoon).length },
            { id: 'soon', label: 'Coming soon', count: PRODUCTS_DATA.filter((p) => p.comingSoon).length },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as 'all' | 'live' | 'soon')}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue-deep'
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[9px] ${
                  filter === tab.id ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = productIcons[product.id] ?? TransitIcon;
            return (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (index % 2) * 0.06 }}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/35 hover:shadow-card-hover"
              >
                {/* Visual */}
                <Link
                  to={`/products/${product.id}`}
                  className="relative block h-44 overflow-hidden bg-brand-navy p-6"
                  aria-label={`Open ${product.name}`}
                >
                  <div className="absolute inset-0 grid-pattern-dark opacity-30" />
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-blue/30 blur-3xl" />
                  <Icon
                    size={180}
                    className="absolute -bottom-10 -right-6 text-brand-cyan/10 transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-200 backdrop-blur">
                        <span className={`h-1.5 w-1.5 rounded-full ${product.comingSoon ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                        {product.comingSoon ? 'Coming soon' : 'Live'}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-cyan backdrop-blur">
                        {product.cat}
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <span className="icon-tile-dark">
                          <Icon size={24} />
                        </span>
                        <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white">
                          {product.name.split(':')[0]}
                        </h2>
                      </div>
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white p-1.5 shadow-lg">
                        <img
                          src={product.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Body */}
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600">{product.desc}</p>

                  <div className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
                    {product.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <Link to={`/products/${product.id}`} className="btn-outline btn-sm">
                      Product details <ArrowRight size={13} />
                    </Link>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 transition-colors hover:text-brand-blue-deep"
                    >
                      {product.link.replace('https://', '')}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Principles */}
        <section className="mt-20 md:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Product principles</span>
            <h2 className="display-lg mt-4">The same standards in every product.</h2>
            <p className="lead mt-4">
              Consistent architecture, consistent security, consistent support — so operators can adopt one
              platform and trust the next.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card">
                  <span className="icon-tile">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-950">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-panel mt-16">
          <div className="absolute inset-0 grid-pattern-dark opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow-dark">See it in the field</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Book a live product walkthrough.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Our product leads will show the platform, the operator view and the data behind it — with your use
              case in mind.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Request a demo <ArrowUpRight size={15} />
              </Link>
              <Link to="/solutions" className="btn-dark">
                Explore solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default ProductsPage;
