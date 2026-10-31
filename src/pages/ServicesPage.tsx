import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock3, Users } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
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
  SupportIcon,
  TransitIcon,
} from '../components/shared/BrandIcons';

const services = [
  {
    title: 'Product & platform engineering',
    desc: 'Custom web and mobile applications in React, Next.js and Node — designed for extreme usability, speed and longevity.',
    icon: CodeIcon,
    tags: ['React', 'TypeScript', 'Native mobile'],
  },
  {
    title: 'AI & data engineering',
    desc: 'Localised machine learning, computer vision and decision systems trained on the operational data that matters to you.',
    icon: AiIcon,
    tags: ['LLM systems', 'MLOps', 'Data pipelines'],
  },
  {
    title: 'Cloud & edge infrastructure',
    desc: 'Sovereign cloud architecture, edge gateways and high-availability systems with automated failover and data residency.',
    icon: CloudIcon,
    tags: ['Hybrid cloud', 'Kubernetes', 'Edge'],
  },
  {
    title: 'Mobility & transit delivery',
    desc: 'Katisha ticketing gates, GPS bus trackers, driver dispatch and operator training for municipal transit deployments.',
    icon: TransitIcon,
    tags: ['Ticketing', 'Telemetry', 'Operations'],
  },
  {
    title: 'Logistics & fleet systems',
    desc: 'GPS and fuel sensor installation, cold-chain telemetry and integration into the Vuduka dispatch engine.',
    icon: LogisticsIcon,
    tags: ['IoT hardware', 'Fleet SaaS', 'Cold chain'],
  },
  {
    title: 'Cybersecurity & compliance',
    desc: 'Vulnerability assessment, penetration testing and ISO/GDPR-aligned controls for critical infrastructure.',
    icon: ShieldIcon,
    tags: ['Audit', 'Pen testing', 'Compliance'],
  },
  {
    title: 'Managed IT & NOC support',
    desc: 'A dedicated Kigali Network Operations Centre monitoring your critical infrastructure around the clock.',
    icon: SupportIcon,
    tags: ['24/7 NOC', 'SLA', 'Incident response'],
  },
  {
    title: 'Digital transformation advisory',
    desc: 'Architecture reviews, technology strategy and embedded engineering pods for legacy system modernisation.',
    icon: GrowthIcon,
    tags: ['Strategy', 'Architecture', 'Enablement'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Field research, stakeholder interviews and a technical audit of what exists today.',
    icon: CompassIcon,
    duration: '1–2 weeks',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Service blueprint, system architecture and a clickable prototype validated with real users.',
    icon: LayersIcon,
    duration: '2–4 weeks',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Two-week delivery sprints with working software, hardware integration and open demos.',
    icon: CodeIcon,
    duration: '6–16 weeks',
  },
  {
    step: '04',
    title: 'Operate',
    desc: 'Launch, train operators, monitor live telemetry and iterate with a named support team.',
    icon: SupportIcon,
    duration: 'Ongoing',
  },
];

const engagementModels = [
  {
    title: 'Embedded pod',
    desc: 'A cross-functional squad — product, design, engineering and ops — working as part of your team.',
    best: 'Best for ongoing platform development',
  },
  {
    title: 'Fixed-scope sprint',
    desc: 'A defined outcome with a clear scope, timeline and price. We ship, you own the result.',
    best: 'Best for a new product or pilot',
  },
  {
    title: 'Managed service',
    desc: 'We run the infrastructure, support the operators and report on service levels every month.',
    best: 'Best for national-scale operations',
  },
];

const ServicesPage = () => (
  <>
    <SEO
      title="Services — AI, Cloud, Cybersecurity & Product Engineering | Kwanda Group"
      description="Senior engineering teams for AI and data, cloud platforms, cybersecurity, product design and managed operations — built to ship and stay in production."
      keywords="AI engineering Rwanda, cloud consulting Kigali, cybersecurity services Africa, product engineering, managed operations"
      url="https://kwandagroup.rw/services"
    />
    <PageLayout
    badge="Professional services"
    title="Senior teams that ship, operate and stay."
    subtitle="Strategy is cheap. Execution is not. Kwanda Group provides the engineering, product and operations capacity to take a system from field insight to national service."
    actions={
      <>
        <Link to="/contact" className="btn-primary">
          Scope a project <ArrowRight size={16} />
        </Link>
        <a href="tel:+250732316625" className="btn-outline">
          Call the Kigali team
        </a>
      </>
    }
  >
    <div className="shell py-12 md:py-16">
      {/* Service grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/35 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between">
                <span className="icon-tile">
                  <Icon size={22} />
                </span>
                <span className="font-display text-[10px] font-bold text-slate-300">0{index + 1}</span>
              </div>
              <h2 className="mt-6 font-display text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-brand-blue-deep">
                {service.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-mist px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Process */}
      <section className="mt-20 md:mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How an engagement runs</span>
          <h2 className="display-lg mt-4">Clear phases. Visible progress.</h2>
          <p className="lead mt-4">
            No black boxes. Every engagement has named people, working software and a decision point at the end of
            each phase.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute inset-x-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent lg:block" />
          {process.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-brand-cyan shadow-[0_0_0_6px_#ffffff]">
                    <Icon size={20} />
                  </span>
                  <span className="rounded-full bg-brand-blue-soft px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-blue-deep">
                    {phase.duration}
                  </span>
                </div>
                <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Phase {phase.step}</div>
                <h3 className="mt-1.5 font-display text-xl font-bold text-slate-950">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{phase.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Engagement models */}
      <section className="mt-20 md:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <span className="eyebrow">Engagement models</span>
            <h2 className="display-md mt-4">Work with us the way that fits.</h2>
            <p className="lead mt-4">
              Whether you need a focused sprint or a long-term operating partner, we shape the team around the
              outcome — not the other way around.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip"><Users size={12} className="text-brand-blue" /> Senior-only teams</span>
              <span className="chip"><Clock3 size={12} className="text-brand-blue" /> Kigali + remote</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`flex flex-col rounded-3xl p-6 ${
                  index === 1
                    ? 'mesh-navy border border-white/10 text-white shadow-[0_30px_70px_-35px_rgba(4,16,32,0.8)]'
                    : 'border border-slate-200/80 bg-white text-slate-900 shadow-card'
                }`}
              >
                <span className={`font-display text-[10px] font-bold uppercase tracking-[0.2em] ${index === 1 ? 'text-brand-cyan' : 'text-brand-blue-deep'}`}>
                  Model 0{index + 1}
                </span>
                <h3 className={`mt-3 font-display text-xl font-bold ${index === 1 ? 'text-white' : 'text-slate-950'}`}>{model.title}</h3>
                <p className={`mt-2 flex-1 text-sm leading-relaxed ${index === 1 ? 'text-slate-300' : 'text-slate-600'}`}>{model.desc}</p>
                <div className={`mt-5 flex items-start gap-2 border-t pt-4 text-[11px] font-semibold ${index === 1 ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                  <CheckCircle2 size={14} className={index === 1 ? 'text-brand-cyan' : 'text-brand-blue'} />
                  {model.best}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-panel mt-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow-dark">Have a project in mind?</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Our engineers are ready when you are.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Tell us about the outcome you need. We will respond with a practical scope, a named team and a timeline.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Schedule a consultation <ArrowUpRight size={15} />
            </Link>
            <a href="mailto:info@kwandagroup.rw" className="btn-dark">
              info@kwandagroup.rw
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
  </>
);

export default ServicesPage;
