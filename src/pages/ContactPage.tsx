import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Globe,
  Headset,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/shared/SEO';
import OfficeLocationMap from '../components/contact/OfficeLocationMap';
import { SupportIcon } from '../components/shared/BrandIcons';

const channels = [
  {
    title: 'Talk to sales',
    desc: 'New projects, product demos and partnership discussions.',
    value: 'sales@kwandagroup.rw',
    icon: Building2,
  },
  {
    title: 'Support desk',
    desc: 'Existing deployments, incidents and operator assistance.',
    value: 'support@kwandagroup.rw',
    icon: Headset,
  },
  {
    title: 'Press & media',
    desc: 'Interviews, brand assets and newsroom enquiries.',
    value: 'press@kwandagroup.rw',
    icon: MessageSquare,
  },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        title="Contact & Support — Kigali, Rwanda | Kwanda Group"
        description="Talk to Kwanda Group about demos, deployments or support. Reach the Kigali team by phone, email or visit Norsken House, KG 7 Ave — response within one business day."
        keywords="contact Kwanda Group, Kigali office, Rwanda tech support, Kwanda phone number, Norsken House"
        url="https://kwandagroup.rw/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Kwanda Group",
          "url": "https://kwandagroup.rw/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Kwanda Group",
            "telephone": "+250-732-316-625",
            "email": "info@kwandagroup.rw",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Norsken House, KG 7 Ave",
              "addressLocality": "Kigali",
              "addressCountry": "RW"
            }
          }
        }}
      />
      <PageLayout
      badge="Contact & support"
      title="Let's talk about what you are building."
      subtitle="Whether you need a product demo, a deployment partner or help with a live system, the right team in Kigali will respond within one business day."
      actions={
        <>
          <a href="tel:+250732316625" className="btn-primary">
            <Phone size={15} /> +250 732 316 625
          </a>
          <a href="mailto:info@kwandagroup.rw" className="btn-outline">
            <Mail size={15} /> info@kwandagroup.rw
          </a>
        </>
      }
    >
      <div className="shell py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Contact details */}
          <div className="space-y-5 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.75rem] mesh-navy p-6 text-white shadow-[0_35px_80px_-40px_rgba(4,16,32,0.9)] sm:p-7">
              <div className="absolute inset-0 grid-pattern-dark opacity-25" />
              <div className="relative">
                <span className="eyebrow-dark">Headquarters</span>
                <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white">
                  Kigali Global HQ & R&D Centre
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Norsken House, KG 7 Ave, Kigali, Rwanda. Ten minutes from the city centre, with meeting rooms
                  available for partners.
                </p>

                <dl className="mt-6 space-y-3 text-xs">
                  {[
                    { icon: MapPin, label: 'Address', value: 'Norsken House, KG 7 Ave, Kigali, Rwanda' },
                    { icon: Phone, label: 'Phone', value: '+250 732 316 625' },
                    { icon: Phone, label: 'Support line', value: '+250 788 000 111' },
                    { icon: Mail, label: 'Email', value: 'info@kwandagroup.rw' },
                    { icon: Globe, label: 'Website', value: 'www.kwandagroup.rw' },
                    { icon: Clock3, label: 'Hours', value: 'Mon–Fri · 08:00–18:00 CAT' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <Icon size={15} className="mt-0.5 shrink-0 text-brand-cyan" />
                        <div>
                          <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{item.label}</dt>
                          <dd className="mt-0.5 font-semibold text-white">{item.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Norsken+House,+KG+7+Ave,+Kigali,+Rwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark mt-6 w-full btn-sm"
                >
                  Get directions <ArrowRight size={13} />
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.title}
                    href={`mailto:${channel.value}`}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/35 hover:shadow-card"
                  >
                    <span className="icon-tile h-10 w-10 rounded-xl">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-sm font-bold text-slate-950">{channel.title}</span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">{channel.desc}</span>
                      <span className="mt-1 block text-[11px] font-bold text-brand-blue-deep group-hover:underline">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-soft text-brand-blue-deep">
                    <Check size={30} />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-extrabold text-slate-950">Message received.</h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                    Thank you for contacting Kwanda Group. A representative from our Kigali office will respond
                    within 24 hours.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)} className="btn-outline btn-sm mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="icon-tile">
                      <SupportIcon size={22} />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-slate-950">Send us a message</h2>
                      <p className="mt-1 text-xs text-slate-500">Fields marked with * are required.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="full-name" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Full name *
                      </label>
                      <input id="full-name" name="fullName" required type="text" placeholder="John Niyonzima" className="field" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Work email *
                      </label>
                      <input id="email" name="email" required type="email" placeholder="john@company.com" className="field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Company / organisation
                      </label>
                      <input id="company" name="company" type="text" placeholder="Organisation name" className="field" />
                    </div>
                    <div>
                      <label htmlFor="topic" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Inquiry topic
                      </label>
                      <select id="topic" name="topic" className="field bg-white">
                        <option>Katisha smart transit</option>
                        <option>Vuduka logistics hub</option>
                        <option>HuzaSpace platform</option>
                        <option>Iwacu connected living</option>
                        <option>Custom software / app development</option>
                        <option>Cloud, security & advisory</option>
                        <option>Careers & media</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your organisation, the problem and the outcome you need."
                      className="field resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-500">
                    <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    I agree to be contacted by Kwanda Group about this enquiry and have read the privacy notice.
                  </label>

                  <button type="submit" className="btn-primary w-full">
                    Send message <Send size={15} />
                  </button>

                  <p className="text-center text-[10px] text-slate-400">
                    Typical response time: under 1 business day · Mon–Fri, CAT
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Visit us</span>
              <h2 className="display-md mt-3">Three hubs. One team.</h2>
            </div>
            <Link to="/company" className="link-arrow">
              More about Kwanda <ArrowRight size={14} />
            </Link>
          </div>
          <OfficeLocationMap />
        </section>
      </div>
    </PageLayout>
    </>
  );
};

export default ContactPage;
