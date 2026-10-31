import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Instagram,
  Mail,
  Quote,
  Sparkles,
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import InstagramEmbed from '../components/shared/InstagramEmbed';
import { TransitIcon } from '../components/shared/BrandIcons';

const ARTICLE_PATH = '/news/katisha-bus-ticketing';
const INSTAGRAM_URL = 'https://www.instagram.com/reel/DfCxGWICP1H/';
const PUBLISHED = 'October 30, 2026';

const markets = [
  { name: 'Rwanda', flag: '🇷🇼', note: 'Home market' },
  { name: 'Kenya', flag: '🇰🇪', note: 'Corridor' },
  { name: 'Tanzania', flag: '🇹🇿', note: 'Corridor' },
  { name: 'Uganda', flag: '🇺🇬', note: 'Corridor' },
  { name: 'South Sudan', flag: '🇸🇸', note: 'Corridor' },
];

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-10">
    <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-[1.7rem]">
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-[15px] leading-[1.85] text-slate-700 sm:text-base">{children}</div>
  </section>
);

const KatishaNewsPage = () => (
  <>
    <SEO
      title="Africa needs solutions, not ideas on paper — the vision behind Katisha | Kwanda Group"
      description="Why Kwanda Group is building Katisha: discover journeys and book bus tickets from your phone, pay with MTN Mobile Money, Airtel Money or M-Pesa, and travel across Rwanda, Kenya, Tanzania, Uganda and South Sudan without queueing at a station."
      keywords="Katisha, Kwanda Group, bus ticket booking Rwanda, Kigali to Nairobi bus, mobile money ticketing, MTN Mobile Money, Airtel Money, M-Pesa, African innovation"
      url={`https://kwandagroup.rw${ARTICLE_PATH}`}
      image="https://kwandagroup.rw/og-image.png"
    />

    <PageLayout>
      {/* Article hero */}
      <section className="relative overflow-hidden border-b border-slate-200/70 mesh-hero">
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_70%_20%,black_35%,transparent_78%)]" />
        <div className="shell relative py-10 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <Link to="/" className="transition-colors hover:text-brand-blue-deep">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link to="/news" className="transition-colors hover:text-brand-blue-deep">
              News
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-800">Katisha</span>
          </nav>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="eyebrow"
          >
            <Sparkles size={12} />
            News · Katisha · Mobility
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="display-lg mt-5 max-w-4xl"
          >
            Africa does not need more ideas that stay on paper. It needs solutions that solve real problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5, ease: 'easeOut' }}
            className="lead mt-5 max-w-2xl"
          >
            This is the thinking behind Katisha — bus travel you can discover and book from your phone, instead of
            spending a day travelling to a station just to stand in a queue.
          </motion.p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={12} /> {PUBLISHED}
            </span>
            <span className="h-1 w-1 rounded-full bg-brand-blue/60" />
            <span>6 min read</span>
            <span className="h-1 w-1 rounded-full bg-brand-blue/60" />
            <span>Kwanda Newsroom</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      </section>

      <div className="shell py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0"
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-brand-blue-deep"
            >
              <ArrowLeft size={13} /> All news
            </Link>

            <p className="mt-6 text-lg font-medium leading-relaxed text-slate-900 sm:text-xl">
              Imagine someone in Rwanda who needs to travel from Kigali to Nairobi, Dodoma, or another city.
            </p>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700 sm:text-base">
              They may need to travel to a bus station just to buy a ticket, spend time waiting in queues, arrange their
              journey around ticket availability, and deal with the uncertainty of planning their trip.
            </p>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700 sm:text-base">
              Now imagine a student traveling home, a parent visiting family, a worker traveling for an opportunity, or
              an entrepreneur moving between cities to grow a business. Travel should connect people to opportunities,
              not create unnecessary barriers.
            </p>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700 sm:text-base">
              This is one of the problems that inspired the vision behind{' '}
              <Link to="/products/katisha" className="font-semibold text-brand-blue-deep underline-offset-4 hover:underline">
                Katisha
              </Link>
              .
            </p>

            {/* Instagram reel — the story as shared on social */}
            <figure className="my-10 rounded-3xl border border-slate-200 bg-white p-4 shadow-card sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  <Instagram size={14} className="text-brand-blue" />
                  Watch the story
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue-deep transition-colors hover:text-brand-blue"
                >
                  Open on Instagram
                </a>
              </div>
              <InstagramEmbed className="mx-auto w-full max-w-[420px]" />
              <figcaption className="mt-3 text-center text-[11px] leading-relaxed text-slate-500">
                The Katisha vision, shared as a reel on Instagram.{' '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue-deep underline-offset-4 hover:underline"
                >
                  Watch it there
                </a>
                .
              </figcaption>
            </figure>

            <Section title="Technology should not exist just to look innovative">
              <p>
                I believe technology should not exist simply to look innovative. It should solve problems that ordinary
                people experience in their everyday lives.
              </p>
              <p>
                With Katisha, our vision is to make bus ticket booking more convenient by allowing people to discover
                journeys and book tickets through a mobile app, without always needing to visit a bus station
                physically.
              </p>
              <p>
                We want to make digital travel booking more accessible by supporting familiar mobile payment methods
                such as MTN Mobile Money, Airtel Money, and M-Pesa, where supported.
              </p>
            </Section>

            <Section title="One vision, five markets">
              <p>
                But our ambition does not stop in Rwanda. We see an opportunity to build solutions that can serve people
                across Rwanda, Kenya, Tanzania, Uganda, and South Sudan — while respecting the different transport
                systems, payment ecosystems, and needs of each market.
              </p>
            </Section>

            <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {markets.map((market) => (
                <div
                  key={market.name}
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm"
                >
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {market.flag}
                  </span>
                  <span className="mt-2 block text-xs font-bold text-slate-900">{market.name}</span>
                  <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    {market.note}
                  </span>
                </div>
              ))}
            </div>

            <Section title="Innovation must earn people's trust">
              <p>
                We also understand that innovation must earn people's trust. Technology must be reliable, payments must
                be secure, and travellers must have confidence that their bookings are legitimate. Building that trust
                is just as important as building the application itself.
              </p>
            </Section>

            <blockquote className="my-10 rounded-2xl border-l-4 border-brand-blue bg-brand-blue-soft/70 p-6 sm:p-7">
              <Quote size={20} className="text-brand-blue" />
              <p className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-slate-950 md:text-2xl">
                What if African innovators built more of the solutions that Africans need every day?
              </p>
            </blockquote>

            <Section title="This journey is bigger than one app">
              <p>
                Through Kwanda Group, we want to explore and build technology-driven solutions that address real
                challenges, create opportunities, and contribute to Africa's digital future.
              </p>
              <p>
                I know that building something meaningful takes more than an idea. It takes a team, partnerships,
                technical expertise, honest feedback, and people who believe that local problems deserve serious
                solutions.
              </p>
              <p>
                That is why I am sharing this journey with my LinkedIn network of 1,000+ connections and with people
                across the world who care about African innovation.
              </p>
            </Section>

            <div className="mt-12 rounded-[2rem] mesh-navy p-7 text-white sm:p-9">
              <span className="eyebrow-dark">
                <TransitIcon size={13} /> The Katisha vision
              </span>
              <h2 className="mt-5 max-w-xl font-display text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl">
                Let's move from identifying Africa's problems to building solutions that make a difference.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                Follow Kwanda Group to discover our journey, upcoming innovations, and the solutions we are working to
                build. Let's build. Let's collaborate. Let's create technology that serves people.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/products/katisha" className="btn-primary">
                  Explore Katisha <ArrowRight size={15} />
                </Link>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10 hover:text-white"
                >
                  Follow the journey <Instagram size={15} />
                </a>
              </div>
            </div>
          </motion.article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="icon-tile">
                <TransitIcon size={22} />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-slate-950">Katisha</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Discover journeys and book bus tickets from your phone — with Mobile Money payments where supported.
              </p>
              <Link to="/products/katisha" className="link-arrow mt-4 text-xs">
                Explore the platform <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="icon-tile">
                <Instagram size={21} />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-slate-950">Follow the journey</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Product updates, field notes and stories from the team building for African travellers.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-sm justify-center"
                >
                  Watch on Instagram <Instagram size={13} />
                </a>
                <a href="mailto:press@kwandagroup.rw" className="btn-ghost btn-sm justify-center">
                  <Mail size={13} /> Media enquiries
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  </>
);

export default KatishaNewsPage;
