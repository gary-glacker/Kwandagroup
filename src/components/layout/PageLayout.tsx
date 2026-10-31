import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
// import { motion } from "motion/react";
import { ChevronRight, Sparkles } from "lucide-react";
import { KwandaMark } from "../shared/KwandaLogo";

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  badge?: string;
  actions?: ReactNode;
  meta?: string[];
};

/** Shared page shell: sticky-header offset, editorial hero and brand watermark. */
const PageLayout = ({
  children,
  title,
  subtitle,
  badge,
  actions,
  meta = ["Kigali, Rwanda", "Est. 2023", "Africa & beyond"],
}: PageLayoutProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-brand-mist pt-[4.4rem] md:pt-[6.6rem]"
    >
      {title && (
        <section className="relative overflow-hidden border-b border-slate-200/70 mesh-hero">
          <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_70%_20%,black_35%,transparent_78%)]" />
          <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-[0.06] lg:block">
            <KwandaMark size={320} className="h-full w-full object-contain" />
          </div>

          <div className="shell relative py-12 md:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <Link to="/" className="transition-colors hover:text-brand-blue-deep">
                Home
              </Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-slate-800">{title}</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                {badge && (
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="eyebrow mb-5"
                  >
                    <Sparkles size={12} />
                    {badge}
                  </motion.span>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.5, ease: "easeOut" }}
                  className="display-lg max-w-3xl"
                >
                  {title}
                </motion.h1>

                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" }}
                    className="lead mt-5 max-w-2xl"
                  >
                    {subtitle}
                  </motion.p>
                )}

                {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
                >
                  {meta.map((item, index) => (
                    <span key={item} className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {index > 0 && <span className="h-1 w-1 rounded-full bg-brand-blue/60" />}
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>

             

<div className="relative hidden justify-center lg:col-span-4 lg:flex">
  <div className="relative flex h-52 w-52 items-center justify-center">
    {/* Static outer ring */}
    <div className="absolute inset-0 rounded-full border border-brand-blue/20" />
    
    {/* Dashed rotating ring */}
    <motion.div
      className="absolute inset-7 rounded-full border border-dashed border-brand-blue/25"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Inner static ring */}
    <div className="absolute inset-14 rounded-full border border-brand-blue/15" />

    {/* Orbiting dot #1 — rotates around center */}
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue shadow-[0_0_16px_rgba(18,164,245,0.8)]" />
    </motion.div>

    {/* Orbiting dot #2 — opposite direction */}
    <motion.div
      className="absolute inset-6"
      animate={{ rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(103,211,255,0.8)]" />
    </motion.div>

    {/* Center logo */}
    <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white bg-white shadow-[0_24px_60px_-24px_rgba(18,164,245,0.6)]">
      <KwandaMark size={64} className="rounded-2xl" />
    </div>
  </div>
</div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        </section>
      )}
      {children}
    </motion.div>
  );
};

export default PageLayout;
