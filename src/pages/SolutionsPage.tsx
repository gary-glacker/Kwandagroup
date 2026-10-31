import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import {
  AiIcon,
  CloudIcon,
  GrowthIcon,
  LayersIcon,
  LogisticsIcon,
  ShieldIcon,
  SmartHomeIcon,
  SpaceIcon,
  TransitIcon,
} from '../components/shared/BrandIcons';

const filters = [
  { id: 'all', label: 'All solutions', icon: LayersIcon },
  { id: 'mobility', label: 'Mobility', icon: TransitIcon },
  { id: 'logistics', label: 'Logistics', icon: LogisticsIcon },
  { id: 'spaces', label: 'Spaces', icon: SpaceIcon },
  { id: 'living', label: 'Connected living', icon: SmartHomeIcon },
  { id: 'enterprise', label: 'Enterprise', icon: CloudIcon },
  { id: 'consulting', label: 'Consulting', icon: AiIcon },
];

const solutions = [
  {
    title: 'Katisha smart transit network',
    category: 'mobility',
    tag: 'Mobility',
    desc: 'Live bus tracking, AI route and capacity optimisation, and tap-to-ride digital ticketing for cities and transit authorities.',
    icon: TransitIcon,
    impact: '99.8% on-time',
    features: ['Live arrival predictions', 'Tap-to-ride digital ticketing', 'Electric fleet integration'],
  },
  {
    title: 'Vuduka fleet & cold-chain logistics',
    category: 'logistics',
    tag: 'Logistics',
    desc: 'End-to-end GPS, temperature monitoring and AI route optimisation for pharmaceuticals, perishables and retail freight.',
    icon: LogisticsIcon,
    impact: '35% faster transit',
    features: ['Real-time temperature telemetry', 'Digital customs clearance', 'Automated driver dispatch'],
  },
  {
    title: 'HuzaSpace spaces & community hub',
    category: 'spaces',
    tag: 'Spaces',
    desc: 'The platform connecting people with spaces — bookable offices, venues, parking and community events with secure digital access.',
    icon: SpaceIcon,
    impact: '2.4s match time',
    features: ['Real-time availability', 'Smart access control', 'Community event discovery'],
  },
  {
    title: 'Iwacu connected home & rental',
    category: 'living',
    tag: 'Connected living',
    desc: 'Unified home energy controls, solar micro-grid sharing and a trusted rental marketplace — launching soon.',
    icon: SmartHomeIcon,
    impact: 'Launching soon',
    features: ['Solar and grid automation', 'Leak and fire alerts', 'Verified rental marketplace'],
  },
  {
    title: 'Enterprise cloud & edge infrastructure',
    category: 'enterprise',
    tag: 'Enterprise',
    desc: 'Localised data-centre hosting and edge gateways for banking, telecoms and government agencies demanding zero latency.',
    icon: CloudIcon,
    impact: '99.99% uptime',
    features: ['Regional data residency', 'Automated failover backup', 'Built-in DDoS mitigation'],
  },
  {
    title: 'Digital transformation & advisory',
    category: 'consulting',
    tag: 'Consulting',
    desc: 'Strategic advisory, cybersecurity risk auditing and embedded engineering teams for legacy system modernisation.',
    icon: GrowthIcon,
    impact: 'ISO-aligned delivery',
    features: ['Architecture security audit', 'Embedded engineering pods', '24/7 NOC monitoring'],
  },
  {
    title: 'Cybersecurity & managed NOC',
    category: 'enterprise',
    tag: 'Security',
    desc: 'Continuous monitoring, threat hunting and incident response for critical national and enterprise infrastructure.',
    icon: ShieldIcon,
    impact: '24/7 monitoring',
    features: ['SIEM and threat hunting', 'Incident response playbooks', 'Quarterly penetration tests'],
  },
  {
    title: 'Applied AI & data platforms',
    category: 'consulting',
    tag: 'AI & data',
    desc: 'Custom machine-learning models, decision engines and data pipelines trained on local, domain-specific datasets.',
    icon: AiIcon,
    impact: '142 tokens/sec',
    features: ['Localised model training', 'Decision intelligence', 'Sovereign data pipelines'],
  },
];

const SolutionsPage = () => {
  const [sectorFilter, setSectorFilter] = useState('all');

  const filtered =
    sectorFilter === 'all' ? solutions : solutions.filter((solution) => solution.category === sectorFilter);

  return (
    <>
      <SEO
        title="Solutions — Mobility, Logistics, Spaces & Enterprise | Kwanda Group"
        description="Integrated technology solutions for African cities: smart mobility, fleet logistics, bookable spaces, enterprise cloud and cybersecurity — engineered in Kigali."
        keywords="smart mobility solutions, logistics technology Rwanda, enterprise software Kigali, space booking platform, cybersecurity Africa"
        url="https://kwandagroup.rw/solutions"
      />
      <PageLayout
        badge="Solutions portfolio"
      title="Technology for the systems a city depends on."
      subtitle="Kwanda Group deploys integrated platforms across mobility, logistics, spaces and enterprise infrastructure — designed around the people who use them every day."
      actions={
        <>
          <Link to="/contact" className="btn-primary">
            Request a solution brief <ArrowRight size={16} />
          </Link>
          <Link to="/products" className="btn-outline">
            See the products
          </Link>
        </>
      }
    >
      <div className="shell py-12 md:py-16">
        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-2 divide-x divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card sm:grid-cols-4 sm:divide-y-0"
        >
          {[
            ['4', 'Platforms in production'],
            ['5', 'Markets served'],
            ['99.99%', 'Infrastructure uptime'],
            ['24/7', 'Kigali NOC'],
          ].map(([value, label]) => (
            <div key={label} className="p-5 text-center sm:p-6">
              <div className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{value}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const active = sectorFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSectorFilter(filter.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all ${
                  active
                    ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue-deep'
                }`}
              >
                <Icon size={14} />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.article
                key={solution.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/35 hover:shadow-card-hover"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3">
                  <span className="icon-tile">
                    <Icon size={23} />
                  </span>
                  <span className="badge-soft">{solution.impact}</span>
                </div>

                <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue-deep">
                  {solution.tag}
                </span>
                <h2 className="mt-1.5 font-display text-xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-brand-blue-deep">
                  {solution.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{solution.desc}</p>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 size={14} className="shrink-0 text-brand-blue" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link to="/contact" className="link-arrow">
                    Request brief <ArrowRight size={14} />
                  </Link>
                  <span className="font-display text-[10px] font-bold text-slate-300">0{index + 1}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <Sparkles className="mx-auto text-brand-blue" />
            <p className="mt-3 text-sm font-semibold text-slate-700">No solutions in this category yet.</p>
            <button type="button" onClick={() => setSectorFilter('all')} className="link-arrow mt-3">
              Reset filters <ArrowRight size={14} />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="cta-panel mt-16">
          <div className="absolute inset-0 grid-pattern-dark opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow-dark">Not sure where to start?</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Tell us the problem. We will scope the system.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              A 30-minute working session with our solution architects — no pitch deck, just a practical path forward.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Book a working session <ArrowUpRight size={15} />
              </Link>
              <Link to="/services" className="btn-dark">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default SolutionsPage;
