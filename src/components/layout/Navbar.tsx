import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import KwandaLogo from "../shared/KwandaLogo";
import SectorBar from "./SectorBar";
import { PRODUCTS_DATA } from "../../data/products";
import {
  LogisticsIcon,
  SmartHomeIcon,
  SpaceIcon,
  TransitIcon,
} from "../shared/BrandIcons";

const productIcons: Record<string, ReactNode> = {
  katisha: <TransitIcon size={20} />,
  vuduka: <LogisticsIcon size={20} />,
  huzaspace: <SpaceIcon size={20} />,
  iwacu: <SmartHomeIcon size={20} />,
};

const navItems = [
  { path: "/", label: "Home" },
  { path: "/solutions", label: "Solutions" },
  { path: "/services", label: "Services" },
  { path: "/company", label: "Company" },
  { path: "/news", label: "News" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);
  const productsActive = location.pathname.startsWith("/products");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* <div
        className={`overflow-hidden transition-all duration-300 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <SectorBar />
      </div> */}

      <nav
        aria-label="Primary"
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200/70 bg-white/90 py-2.5 shadow-[0_18px_45px_-28px_rgba(4,16,32,0.35)] backdrop-blur-xl"
            : "border-white/70 bg-white/80 py-3.5 backdrop-blur-xl"
        }`}
      >
        <div className="shell flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label="Kwanda Group — home">
            <KwandaLogo size={isScrolled ? "sm" : "md"} showTagline={!isScrolled} />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={productsRef}>
              <button
                type="button"
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                className={`nav-link inline-flex items-center gap-1.5 ${
                  productsActive ? "nav-link-active" : ""
                }`}
              >
                Products
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-[calc(100%+0.9rem)] w-[540px] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2.5 shadow-[0_40px_90px_-40px_rgba(4,16,32,0.45)]"
                  >
                    <div className="grid grid-cols-2 gap-1.5">
                      {PRODUCTS_DATA.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          className="group flex items-start gap-3 rounded-2xl p-3.5 transition-colors hover:bg-brand-mist"
                        >
                          <span className="icon-tile h-10 w-10 rounded-xl">
                            {productIcons[product.id]}
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-2">
                              <span className="font-display text-sm font-bold text-slate-900 group-hover:text-brand-blue-deep">
                                {product.name.split(":")[0]}
                              </span>
                              {product.comingSoon && (
                                <span className="rounded-full bg-brand-blue-soft px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-brand-blue-deep">
                                  Soon
                                </span>
                              )}
                            </span>
                            <span className="mt-1 block text-[11px] leading-snug text-slate-500">
                              {product.cat}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1.5 flex items-center justify-between rounded-2xl bg-brand-navy px-4 py-3 text-white">
                      <span className="text-[11px] font-semibold text-slate-300">
                        One ecosystem. Built for real life.
                      </span>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-cyan hover:text-white"
                      >
                        View all <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Link to="/careers" className="btn-ghost btn-sm">
              Careers
            </Link>
            <Link to="/contact" className="btn-primary btn-sm">
              Start a project
              <ArrowUpRight size={14} strokeWidth={2.4} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-navy shadow-sm lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-2xl lg:hidden"
            >
              <div className="shell space-y-6 py-6">
                <div className="grid grid-cols-2 gap-2">
                  {[...navItems, { path: "/careers", label: "Careers" }].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-bold transition-colors ${
                        isActive(item.path)
                          ? "border-brand-blue/30 bg-brand-blue-soft text-brand-blue-deep"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Our ecosystem
                  </p>
                  <div className="grid gap-2">
                    {PRODUCTS_DATA.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3"
                      >
                        <span className="icon-tile h-9 w-9 rounded-xl">
                          {productIcons[product.id]}
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-slate-900">
                            {product.name.split(":")[0]}
                          </span>
                          <span className="text-[10px] text-slate-500">{product.cat}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2 rounded-2xl bg-brand-navy p-4 text-[11px] text-slate-300">
                  <a href="tel:+250732316625" className="flex items-center gap-2 hover:text-white">
                    <Phone size={13} className="text-brand-cyan" /> +250 732 316 625
                  </a>
                  <a href="mailto:info@kwandagroup.rw" className="flex items-center gap-2 hover:text-white">
                    <Mail size={13} className="text-brand-cyan" /> info@kwandagroup.rw
                  </a>
                  <span className="pt-1 text-[10px] text-slate-500">
                    Norsken House, KG 7 Ave · Kigali, Rwanda
                  </span>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  Start a project <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
