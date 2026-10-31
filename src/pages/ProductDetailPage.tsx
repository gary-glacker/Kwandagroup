import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  ExternalLink,
  Gauge,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import KatishaBookingDemo from '../components/products/KatishaBookingDemo';
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

const demoConfig: Record<
  string,
  { label: string; unit: string; initial: number; step: number; min: number; max: number; subtitle: string }
> = {
  katisha: {
    label: 'Network latency',
    unit: 'ms',
    initial: 12,
    step: 1,
    min: 4,
    max: 40,
    subtitle: 'Connected to the Kigali transit node',
  },
  vuduka: {
    label: 'Cold-chain temperature',
    unit: '°C',
    initial: 3.8,
    step: 0.1,
    min: -2,
    max: 12,
    subtitle: 'Live telemetry from the Mombasa corridor',
  },
  huzaspace: {
    label: 'Live space occupancy',
    unit: '%',
    initial: 68,
    step: 2,
    min: 0,
    max: 100,
    subtitle: 'Aggregated across 500+ bookable spaces',
  },
  iwacu: {
    label: 'Home temperature',
    unit: '°C',
    initial: 22,
    step: 1,
    min: 16,
    max: 30,
    subtitle: 'Connected to the Kwanda Home gateway',
  },
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS_DATA.find((item) => item.id === productId) || PRODUCTS_DATA[0];
  const Icon = productIcons[product.id] ?? TransitIcon;
  const config = demoConfig[product.id] ?? demoConfig.katisha;
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'specs'>('overview');
  const [power, setPower] = useState(true);
  const [metric, setMetric] = useState(config.initial);

  useEffect(() => {
    setActiveTab('overview');
    setPower(true);
    setMetric(config.initial);
  }, [product.id, config.initial]);

  const related = PRODUCTS_DATA.filter((item) => item.id !== product.id).slice(0, 3);
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'demo', label: 'Live simulation', icon: Zap },
    { id: 'specs', label: 'Specifications', icon: Cpu },
  ] as const;

  return (
    <>
      <SEO
        title={`${product.name.split(':')[0]} — ${product.tag} | Kwanda Group`}
        description={`${product.tag}. ${product.desc}`}
        keywords={`${product.name}, ${product.cat}, Kwanda Group, Rwanda technology`}
        url={`https://kwandagroup.rw/products/${product.id}`}
      />
      <PageLayout badge={product.cat} title={product.name.split(':')[0]} subtitle={product.tag}>
      <div className="shell py-10 md:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition-colors hover:text-brand-blue-deep"
          >
            <ArrowLeft size={14} /> Back to all products
          </Link>
          <div className="flex items-center gap-2">
            <span className="badge-soft">{product.cat}</span>
            {product.comingSoon ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Coming soon
              </span>
            ) : (
              <span className="badge-status">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
              </span>
            )}
          </div>
        </div>

        {product.comingSoon && (
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand-blue/20 bg-brand-blue-soft p-5 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                <Sparkles size={18} />
              </span>
              <div>
                <h2 className="font-display text-sm font-bold text-brand-navy">
                  {product.name.split(':')[0]} is launching soon
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Join the early-access list to be among the first operators and households on the platform.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary btn-sm shrink-0">
              Join the waitlist <ArrowRight size={13} />
            </Link>
          </div>
        )}

        {/* Tabs */}
        <div className="mt-8 flex gap-1 overflow-x-auto border-b border-slate-200 pb-px">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex shrink-0 items-center gap-2 px-4 py-3.5 text-sm font-bold transition-colors ${
                  active ? 'text-brand-blue-deep' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <TabIcon size={15} />
                {tab.label}
                {active && (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
                )}
              </button>
            );
          })}
        </div>

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card">
                <div className="relative h-60 overflow-hidden bg-brand-navy sm:h-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover opacity-60"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/5" />
                  <div className="absolute inset-0 grid-pattern-dark opacity-25" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="icon-tile-dark h-12 w-12">
                        <Icon size={24} />
                      </span>
                      <div>
                        <h2 className="font-display text-2xl font-extrabold tracking-tight text-white">
                          {product.name.split(':')[0]}
                        </h2>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">{product.cat}</span>
                      </div>
                    </div>
                    <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur sm:inline-flex">
                      {product.tag}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <p className="text-[15px] leading-relaxed text-slate-700">{product.details}</p>

                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Key features & capabilities
                    </h3>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-brand-mist p-3 text-xs font-semibold text-slate-800"
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-slate-500">
                      <span className="block font-bold text-slate-700">Official product website</span>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 font-bold text-brand-blue-deep hover:underline"
                      >
                        {product.link.replace('https://', '')}
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                      Visit official site <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-4">
              <div className="rounded-3xl bg-brand-navy p-6 text-white shadow-[0_30px_70px_-40px_rgba(4,16,32,0.9)]">
                <h3 className="font-display text-lg font-bold">Quick facts</h3>
                <dl className="mt-5 space-y-3.5 text-xs">
                  {[
                    ['Category', product.cat],
                    ['Deployable region', 'East Africa & global'],
                    ['Security', 'End-to-end encrypted'],
                    ['Support', '24/7 enterprise SLA'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <dt className="text-slate-400">{label}</dt>
                      <dd className="text-right font-semibold text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Request a demo <ArrowRight size={14} />
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="icon-tile">
                  <Gauge size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-slate-950">Built for operators</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Deployment includes installation, operator training, dashboards and a named support engineer
                  during rollout.
                </p>
                <a href="mailto:info@kwandagroup.rw" className="link-arrow mt-4 text-xs">
                  Talk to the product team <ArrowRight size={13} />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="icon-tile">
                  <Download size={21} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-slate-950">Need the brief?</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Request the product brief, technical overview and deployment checklist.
                </p>
                <Link to="/contact" className="link-arrow mt-4 text-xs">
                  Download product brief <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* DEMO */}
        {activeTab === 'demo' &&
          (product.id === 'katisha' ? (
            <KatishaBookingDemo />
          ) : (
          <div className="mt-8 rounded-[1.75rem] border border-white/10 mesh-navy p-6 text-white shadow-[0_40px_90px_-45px_rgba(4,16,32,0.9)] sm:p-8 md:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">Interactive simulation</span>
                <h2 className="mt-1.5 font-display text-2xl font-bold text-white">{product.name.split(':')[0]} control panel</h2>
              </div>
              <button
                type="button"
                onClick={() => setPower((value) => !value)}
                className={`inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                  power
                    ? 'border-emerald-300/30 bg-emerald-400/15 text-emerald-300'
                    : 'border-white/15 bg-white/5 text-slate-300'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${power ? 'animate-pulse bg-emerald-400' : 'bg-slate-500'}`} />
                {power ? 'System online' : 'Standby'}
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{config.label}</span>
                <div className="mt-2 font-display text-3xl font-extrabold text-white">
                  {metric}
                  <span className="ml-1 text-base text-brand-cyan">{config.unit}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMetric((value) => Math.min(config.max, Number((value + config.step).toFixed(1))))}
                    className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold transition-colors hover:bg-white/20"
                  >
                    + Increase
                  </button>
                  <button
                    type="button"
                    onClick={() => setMetric((value) => Math.max(config.min, Number((value - config.step).toFixed(1))))}
                    className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold transition-colors hover:bg-white/20"
                  >
                    − Decrease
                  </button>
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-slate-400">{config.subtitle}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Network health</span>
                <div className="mt-2 font-display text-3xl font-extrabold text-brand-cyan">12 ms</div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-slate-400">
                  Connected to the Kigali regional node · 99.99% uptime
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Security & health</span>
                <div className="mt-2 flex items-center gap-2 font-display text-3xl font-extrabold text-white">
                  <ShieldCheck size={26} className="text-emerald-400" /> Optimal
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Zero active threat anomalies detected
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-slate-400">AES-256 GCM · TLS 1.3 · local data residency</p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[11px] leading-relaxed text-slate-400">
              <Sparkles size={14} className="mt-0.5 shrink-0 text-brand-cyan" />
              This simulation illustrates how live telemetry from {product.name.split(':')[0]} deployments is
              surfaced to operators. Values are interactive but illustrative.
            </div>
          </div>
          ))}

        {/* SPECS */}
        {activeTab === 'specs' && (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="icon-tile">
                    <Cpu size={22} />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-slate-950">Technical specifications</h2>
                    <p className="text-xs text-slate-500">{product.name.split(':')[0]} platform requirements</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">{product.specs}</p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-slate-200 bg-brand-mist text-slate-700">
                      <tr>
                        <th className="p-4 font-bold">Parameter</th>
                        <th className="p-4 font-bold">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        ['Deployment architecture', 'Hybrid cloud / edge gateway'],
                        ['Encryption standard', 'AES-256 GCM & TLS 1.3'],
                        ['Interoperability', 'REST API, gRPC, webhooks'],
                        ['Data residency', 'Rwanda & regional options'],
                        ['SLA guarantee', '99.99% uptime with failover'],
                        ['Support model', '24/7 NOC + named engineer'],
                      ].map(([parameter, value]) => (
                        <tr key={parameter}>
                          <td className="p-4 font-semibold text-slate-900">{parameter}</td>
                          <td className="p-4">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="icon-tile">
                  <ShieldCheck size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-950">Security by design</h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  {['End-to-end encryption', 'Role-based access control', 'Audit logging', 'Quarterly pen testing'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-blue" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-brand-navy p-6 text-white">
                <h3 className="font-display text-lg font-bold">Procurement & pilots</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  We support pilot deployments, procurement documentation and operator training.
                </p>
                <Link to="/contact" className="btn-primary mt-4 w-full btn-sm">
                  Contact procurement <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Related */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Keep exploring</span>
              <h2 className="display-md mt-3">More from the ecosystem.</h2>
            </div>
            <Link to="/products" className="link-arrow hidden sm:inline-flex">
              All products <ChevronRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = productIcons[item.id] ?? TransitIcon;
              return (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="icon-tile h-10 w-10 rounded-xl">
                      <RelatedIcon size={19} />
                    </span>
                    <ArrowUpRight size={15} className="text-slate-300 transition-colors group-hover:text-brand-blue" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-950">{item.name.split(':')[0]}</h3>
                  <p className="mt-1 text-[11px] text-slate-500">{item.cat}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </PageLayout>
    </>
  );
};

export default ProductDetailPage;
