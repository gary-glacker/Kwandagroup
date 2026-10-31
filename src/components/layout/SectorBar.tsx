import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogisticsIcon, SmartHomeIcon, SpaceIcon, TransitIcon } from "../shared/BrandIcons";

const sectors = [
  { icon: <TransitIcon size={13} />, label: "Smart Transit", to: "/solutions" },
  { icon: <LogisticsIcon size={13} />, label: "Logistics", to: "/products/vuduka" },
  { icon: <SpaceIcon size={13} />, label: "HuzaSpace", to: "/products/huzaspace" },
  { icon: <SmartHomeIcon size={13} />, label: "Iwacu Home", to: "/products/iwacu" },
];

const SectorBar = () => (
  <div className="border-b border-white/10 bg-brand-navy text-slate-300">
    <div className="shell flex items-center justify-between gap-6 py-2 text-[11px]">
      <div className="flex items-center gap-5">
        <span className="inline-flex items-center gap-2 font-semibold text-brand-cyan">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Systems operational
        </span>
        <span className="h-3 w-px bg-white/15" />
        <div className="flex items-center gap-4">
          {sectors.map((sector) => (
            <Link
              key={sector.label}
              to={sector.to}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white"
            >
              <span className="text-brand-blue">{sector.icon}</span>
              {sector.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 text-[10.5px]">
        <span className="inline-flex items-center gap-1.5 text-slate-400">
          <MapPin size={12} className="text-brand-blue" />
          Kigali, Rwanda · CAT
        </span>
        <a href="tel:+250732316625" className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white">
          <Phone size={12} className="text-brand-blue" />
          +250 732 316 625
        </a>
        <a href="mailto:info@kwandagroup.rw" className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white">
          <Mail size={12} className="text-brand-blue" />
          info@kwandagroup.rw
        </a>
      </div>
    </div>
  </div>
);

export default SectorBar;
