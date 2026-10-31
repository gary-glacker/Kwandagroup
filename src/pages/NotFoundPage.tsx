import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass, LifeBuoy, Search } from 'lucide-react';
import { KwandaMark } from '../components/shared/KwandaLogo';
import SEO from '../components/shared/SEO';
import { LogisticsIcon, SpaceIcon, TransitIcon } from '../components/shared/BrandIcons';

const quickLinks = [
  {
    title: 'Explore products',
    desc: 'Katisha, Vuduka, HuzaSpace and Iwacu.',
    to: '/products',
    icon: TransitIcon,
  },
  {
    title: 'Our solutions',
    desc: 'Mobility, logistics, spaces and enterprise tech.',
    to: '/solutions',
    icon: SpaceIcon,
  },
  {
    title: 'Talk to us',
    desc: 'Support, partnerships and new projects.',
    to: '/contact',
    icon: LogisticsIcon,
  },
];

const NotFoundPage = () => (
  <>
    <SEO
      title="Page Not Found | Kwanda Group"
      description="The page you are looking for has moved or no longer exists. Explore Kwanda Group products, solutions, company and contact pages."
      url="https://kwandagroup.rw/404"
      noindex
    />
    <div className="min-h-screen bg-brand-mist pt-[4.4rem] md:pt-[6.6rem]">
    <section className="relative overflow-hidden mesh-hero">
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="shell relative py-20 text-center md:py-28">
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-brand-blue/20" />
          <div className="absolute inset-5 rounded-full border border-dashed border-brand-blue/30 animate-spin-slow" />
          <div className="absolute inset-10 rounded-full border border-brand-blue/15" />
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue shadow-[0_0_18px_rgba(18,164,245,0.9)]" />
          <KwandaMark size={64} className="rounded-2xl shadow-lg" />
        </div>

        <span className="eyebrow mt-8">
          <Search size={12} /> Error 404
        </span>
        <h1 className="display-xl mx-auto mt-5 max-w-2xl">
          This route is <span className="gradient-text">off the map.</span>
        </h1>
        <p className="lead mx-auto mt-5 max-w-xl">
          The page you are looking for has moved, launched under a new name, or never existed. Let us get you back
          to something useful.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <Link to="/contact" className="btn-outline">
            <LifeBuoy size={16} /> Contact support
          </Link>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                to={link.to}
                className="group card card-lift flex flex-col p-6"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="icon-tile">
                  <Icon size={22} />
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-slate-950">{link.title}</h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{link.desc}</p>
                <span className="link-arrow mt-5">
                  Open <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 inline-flex items-center gap-2 text-[11px] font-semibold text-slate-500">
          <Compass size={13} className="text-brand-blue" />
          Kwanda Group · Kigali, Rwanda
        </div>
      </div>
    </section>
  </div>
  </>
);

export default NotFoundPage;
