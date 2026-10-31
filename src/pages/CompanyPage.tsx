import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Eye,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import { KwandaMark, KwandaWordmark } from '../components/shared/KwandaLogo';
import { CompassIcon, GrowthIcon, ShieldIcon, SparkIcon } from '../components/shared/BrandIcons';
import GatareImg from '../assets/gatare.jpg';
import NtwariImg from '../assets/ntwari.jpg';
import TuyubaheImg from '../assets/ashrafu.jpg';
import AlpeImg from '../assets/alpe.png';

const milestones = [
  {
    year: '2023',
    title: 'Kwanda Group founded',
    desc: 'Founded in Kigali by INEZA MANZI Alpe, GATARE Jean Marie, TUYUBAHE Ashraf and NTWARI Josue with a bold vision to build sovereign, community-first technology for African cities and citizens.',
    icon: SparkIcon,
  },
  {
    year: '2024',
    title: 'Vuduka Logistics Hub launches',
    desc: 'Launched Vuduka — our hyper-speed logistics and fleet dispatch platform — cutting transit delays by up to 35% across East Africa.',
    icon: CompassIcon,
  },
  {
    year: '2025',
    title: 'HuzaSpace goes live',
    desc: 'Introduced HuzaSpace, connecting hundreds of offices, venues and parking spaces with the people who need them in real time.',
    icon: GrowthIcon,
  },
  {
    year: '2026',
    title: 'Katisha smart transit launch',
    desc: 'Launched Katisha smart public transit, moving over 1.2 million passenger trips daily with AI-optimised routes and tap-to-ride ticketing.',
    icon: Award,
  },
];

const values = [
  { label: 'Integrity', desc: 'We say what we will do, and do what we said.' },
  { label: 'Data sovereignty', desc: 'African data stays under African stewardship.' },
  { label: 'Community impact', desc: 'Every platform must improve a real life.' },
  { label: 'Technical excellence', desc: 'We ship work we are proud to sign.' },
];

const team = [
  {
    name: 'INEZA MANZI Alpe',
    role: 'Founder & Chief Executive Officer',
    id: 'KG-0001',
    img: AlpeImg,
    focus: 'Strategy & partnerships',
  },
  {
    name: 'TUYUBAHE Ashraf',
    role: 'Co-Founder & Chief Technology Officer',
    id: 'KG-0002',
    img: TuyubaheImg,
    focus: 'Platform architecture',
  },
  {
    name: 'NTWARI Josue',
    role: 'Co-Founder & Head of Transport',
    id: 'KG-0114',
    img: NtwariImg,
    focus: 'Katisha operations',
  },
  {
    name: 'GATARE Jean Marie',
    role: 'Co-Founder & Director of HuzaSpace',
    id: 'KG-0115',
    img: GatareImg,
    focus: 'Spaces & digital platforms',
  },
];

const CompanyPage = () => (
  <>
    <SEO
      title="Company — Built in Kigali, Engineered for the World | Kwanda Group"
      description="Kwanda Group is a Kigali-born technology group building mobility, logistics, spatial and smart-living platforms. Meet our story, team and operating principles."
      keywords="Kwanda Group company, Kigali technology company, Rwanda startup, African tech group, Kwanda team"
      url="https://kwandagroup.rw/company"
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Kwanda Group",
        "url": "https://kwandagroup.rw/company",
        "description": "The story, team and principles behind Kwanda Group."
      }}
    />
    <PageLayout
    badge="About Kwanda Group"
    title="Built in Kigali. Engineered for the world."
    subtitle="We are a technology group turning hard, everyday problems into dependable platforms — with the engineers, operators and partners who live the problem every day."
    actions={
      <>
        <Link to="/careers" className="btn-primary">
          Join the team <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn-outline">
          Partner with us
        </Link>
      </>
    }
    meta={['Founded 2023', 'Kigali, Rwanda', '4 founders · one team']}
  >
    <div className="shell py-12 md:py-16">
      {/* Brand story */}
      <section className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <div className="lg:col-span-7">
          <span className="eyebrow">The company</span>
          <h2 className="display-md mt-4">Technology with a place, a purpose and a person behind it.</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            <p>
              Kwanda Group was founded in Kigali in 2023 with a simple conviction: the technology shaping African
              cities should be designed, owned and operated by the people who live in them.
            </p>
            <p>
              We work across four connected platforms — Katisha for public transit, Vuduka for logistics, HuzaSpace
              for spaces and Iwacu for connected homes. Each one starts in the field, not in a boardroom, and is
              engineered to keep working when conditions are difficult.
            </p>
            <p>
              Today our team spans engineering, product, operations and support, serving operators, enterprises and
              communities across East and Southern Africa.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Sovereign by design', 'Community-first', 'Field-tested', 'Long-term operators'].map((tag) => (
              <span key={tag} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Brand plaque */}
        <div className="relative overflow-hidden rounded-[2rem] mesh-navy p-7 text-white shadow-[0_40px_90px_-45px_rgba(4,16,32,0.9)] sm:p-9 lg:col-span-5">
          <div className="absolute inset-0 grid-pattern-dark opacity-25" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl" />
          <div className="relative flex h-full flex-col">
            <span className="eyebrow-dark self-start">
              <Sparkles size={12} /> Official identity
            </span>
            <div className="mt-8">
              <KwandaWordmark light className="w-56 max-w-full" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">
              Smart Technology. Better Solutions. Stronger Society.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
              {[
                ['4', 'Platforms'],
                ['5', 'Markets'],
                ['3', 'Regional hubs'],
                ['24/7', 'Support'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-extrabold text-white">{value}</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-6">
              <KwandaMark size={36} className="rounded-lg" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Est. 2023 · Kigali, Rwanda
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mt-16 grid gap-4 md:grid-cols-3 md:mt-20">
        {[
          {
            title: 'Our mission',
            desc: 'Create smart technology solutions that improve lives and build a stronger, more resilient society across every community we serve.',
            icon: CompassIcon,
          },
          {
            title: 'Our vision',
            desc: 'To be the premier global technology catalyst empowering citizens, commuters and enterprises through accessible, ethical innovation.',
            icon: Eye,
          },
          {
            title: 'Our promise',
            desc: 'Integrity, data sovereignty, community impact and unrelenting technical excellence in every line of code we ship.',
            icon: ShieldIcon,
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card"
            >
              <span className="icon-tile">
                <Icon size={23} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Timeline */}
      <section className="mt-20 md:mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our history</span>
          <h2 className="display-lg mt-4">The journey so far.</h2>
          <p className="lead mt-4">
            From a local engineering studio to a multi-platform technology group — built one shipped system at a
            time.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-blue/50 via-slate-200 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />
          <div className="space-y-4 md:space-y-10">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45 }}
                  className={`relative flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="flex w-full items-start gap-4 md:w-[calc(50%-2rem)] md:gap-0">
                    <div className="hidden w-full md:block">
                      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-brand-blue-soft px-3 py-1 font-display text-xs font-extrabold text-brand-blue-deep">
                            {milestone.year}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Milestone</span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{milestone.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{milestone.desc}</p>
                      </div>
                    </div>

                    <div className="flex w-full gap-4 md:hidden">
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-brand-cyan">
                        <Icon size={17} />
                      </span>
                      <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                        <span className="rounded-full bg-brand-blue-soft px-2.5 py-1 font-display text-[11px] font-extrabold text-brand-blue-deep">
                          {milestone.year}
                        </span>
                        <h3 className="mt-3 font-display text-base font-bold text-slate-950">{milestone.title}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>

                  <span className="absolute left-1/2 top-8 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-navy text-brand-cyan shadow-md md:flex">
                    <Icon size={13} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mt-20 md:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <span className="eyebrow">What we hold to</span>
            <h2 className="display-md mt-4">Four values, not four posters.</h2>
            <p className="lead mt-4">
              These are the tests we apply to product decisions, partnerships and the way we treat people.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600 shadow-sm">
              <Users size={15} className="text-brand-blue" />
              One team across Kigali, Nairobi and Johannesburg
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {values.map((value, index) => (
              <div
                key={value.label}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-slate-950">{value.label}</span>
                  <span className="font-display text-[10px] font-bold text-slate-300">0{index + 1}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mt-20 md:mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="display-lg mt-4">Meet the builders behind Kwanda.</h2>
          <p className="lead mt-4">
            A founding team that combines engineering, operations and a deep understanding of the markets we serve.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-mist">
                <img
                  src={person.img}
                  alt={person.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  {person.id}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-slate-950">{person.name}</h3>
                <p className="mt-1 text-[11px] font-semibold leading-snug text-brand-blue-deep">{person.role}</p>
                <p className="mt-3 border-t border-slate-100 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {person.focus}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-panel mt-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow-dark">Work with us</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Build technology that matters, with people who care.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            We are hiring engineers, product thinkers and operators across our hubs. Or bring us a partnership.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/careers" className="btn-primary">
              See open roles <ArrowUpRight size={15} />
            </Link>
            <Link to="/contact" className="btn-dark">
              Contact the team
            </Link>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-slate-400">
            <MapPin size={12} className="text-brand-cyan" />
            Norsken House, KG 7 Ave · Kigali, Rwanda
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
  </>
);

export default CompanyPage;
