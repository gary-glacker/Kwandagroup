import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Clock3,
  Coffee,
  GraduationCap,
  Heart,
  Laptop,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import { CodeIcon, ShieldIcon, SpaceIcon, TransitIcon } from '../components/shared/BrandIcons';

const perks = [
  { title: 'Real ownership', desc: 'Small teams, named outcomes and the trust to make decisions.', icon: Rocket },
  { title: 'Senior peers', desc: 'Work alongside engineers and operators who have shipped at scale.', icon: Users },
  { title: 'Learning budget', desc: 'Annual budget for courses, certifications and conferences.', icon: GraduationCap },
  { title: 'Hybrid by default', desc: 'Kigali HQ, regional hubs and remote-friendly collaboration.', icon: Laptop },
  { title: 'Health & wellbeing', desc: 'Medical cover, mental-health support and generous leave.', icon: Heart },
  { title: 'Good coffee', desc: 'A stocked kitchen and a team that actually takes breaks.', icon: Coffee },
];

const jobs = [
  {
    title: 'Senior React & TypeScript Developer',
    dept: 'Engineering',
    loc: 'Norsken House, Kigali / Hybrid',
    type: 'Full-time',
    level: 'Senior',
    icon: CodeIcon,
  },
  {
    title: 'Transit Software & Fleet Hardware Engineer',
    dept: 'Katisha',
    loc: 'Rwanda / Field',
    type: 'Full-time',
    level: 'Mid–Senior',
    icon: TransitIcon,
  },
  {
    title: 'Spaces Platform Product Manager',
    dept: 'HuzaSpace',
    loc: 'Kigali HQ',
    type: 'Full-time',
    level: 'Senior',
    icon: SpaceIcon,
  },
  {
    title: 'Logistics Platform Product Manager',
    dept: 'Vuduka',
    loc: 'Kigali HQ',
    type: 'Full-time',
    level: 'Senior',
    icon: Briefcase,
  },
  {
    title: 'Cybersecurity Analyst',
    dept: 'Security',
    loc: 'Remote / Global',
    type: 'Full-time',
    level: 'Mid-level',
    icon: ShieldIcon,
  },
];

const steps = [
  { title: 'Intro conversation', desc: 'A 30-minute call about your experience, motivations and what you want to build next.' },
  { title: 'Craft session', desc: 'A practical, paid exercise or technical conversation relevant to the role. No trick questions.' },
  { title: 'Team & offer', desc: 'Meet the people you will work with, ask hard questions, and receive a clear offer.' },
];

const CareersPage = () => {
  const [department, setDepartment] = useState('All');
  const departments = ['All', ...Array.from(new Set(jobs.map((job) => job.dept)))];
  const filtered = department === 'All' ? jobs : jobs.filter((job) => job.dept === department);

  return (
    <>
      <SEO
        title="Careers — Build Systems That Touch Millions | Kwanda Group"
        description="Join Kwanda Group in Kigali to engineer AI, mobility, logistics, spatial and smart-living platforms for Africa. Flexible roles across engineering, product and operations."
        keywords="jobs in Kigali, tech jobs Rwanda, software engineering jobs Kigali, Kwanda careers, startup jobs Africa"
        url="https://kwandagroup.rw/careers"
      />
      <PageLayout
      badge="Careers at Kwanda"
      title="Build systems that millions of people touch."
      subtitle="We are a team of engineers, designers and operators working on the infrastructure of everyday life — transit, logistics, spaces and homes."
      actions={
        <>
          <a href="#open-roles" className="btn-primary">
            See open roles <ArrowRight size={16} />
          </a>
          <Link to="/company" className="btn-outline">
            Meet the team
          </Link>
        </>
      }
      meta={['Kigali · Nairobi · Johannesburg', 'Hybrid & remote-friendly', '5 open roles']}
    >
      <div className="shell py-12 md:py-16">
        {/* Why Kwanda */}
        <section className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Why Kwanda</span>
            <h2 className="display-md mt-4">Hard problems. Good people. Real outcomes.</h2>
            <p className="lead mt-4">
              You will not be a ticket number. Our teams are small enough that your work ships, gets measured and
              changes how a city moves.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm">
              {[
                ['5', 'Open roles'],
                ['3', 'Regional hubs'],
                ['4.8/5', 'Team experience score'],
              ].map(([value, label]) => (
                <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <span>{label}</span>
                  <strong className="font-display text-sm text-slate-950">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-card"
                >
                  <span className="icon-tile h-10 w-10 rounded-xl">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-sm font-bold text-slate-950">{perk.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Open roles */}
        <section id="open-roles" className="mt-20 scroll-mt-32 md:mt-28">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Open roles</span>
              <h2 className="display-lg mt-4">Find your next chapter.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setDepartment(item)}
                  className={`rounded-full border px-3.5 py-2 text-[11px] font-bold transition-all ${
                    department === item
                      ? 'border-brand-navy bg-brand-navy text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue-deep'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {filtered.map((job, index) => {
              const Icon = job.icon;
              return (
                <motion.article
                  key={job.title}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:border-brand-blue/35 hover:shadow-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <span className="icon-tile h-11 w-11 rounded-xl">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand-blue-deep">{job.dept}</span>
                        <span className="rounded-full bg-brand-mist px-2 py-0.5 text-[9px] font-bold text-slate-500">{job.level}</span>
                        <span className="rounded-full bg-brand-mist px-2 py-0.5 text-[9px] font-bold text-slate-500">{job.type}</span>
                      </div>
                      <h3 className="mt-1.5 font-display text-base font-bold text-slate-950 transition-colors group-hover:text-brand-blue-deep">
                        {job.title}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                        <MapPin size={11} /> {job.loc}
                      </p>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-outline btn-sm shrink-0">
                    Apply now <ArrowUpRight size={13} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="mt-20 md:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Hiring process</span>
            <h2 className="display-lg mt-4">Three conversations. No games.</h2>
            <p className="lead mt-4">
              We respect your time. Every candidate gets a clear timeline, a named contact and feedback.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy font-display text-xs font-bold text-brand-cyan">
                    0{index + 1}
                  </span>
                  <Clock3 size={15} className="text-slate-300" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-panel mt-20">
          <div className="absolute inset-0 grid-pattern-dark opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow-dark">
              <Sparkles size={12} /> Don't see your role?
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Exceptional people make their own seat.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Send us what you have built and the problem you want to work on. We read every note.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="mailto:careers@kwandagroup.rw" className="btn-primary">
                careers@kwandagroup.rw <ArrowUpRight size={15} />
              </a>
              <Link to="/company" className="btn-dark">
                About Kwanda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default CareersPage;
