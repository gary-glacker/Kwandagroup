import { useState } from 'react';
import { Compass, MapPin, Building2, Clock, Check, Copy, Navigation, ExternalLink, Phone, Mail, Plane } from 'lucide-react';
import { OFFICE_LOCATIONS } from '../../data/offices';

const OfficeLocationMap = () => {
  const [selectedOfficeId, setSelectedOfficeId] = useState("kigali");
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<"standard" | "satellite">("standard");

  const office = OFFICE_LOCATIONS.find(o => o.id === selectedOfficeId) || OFFICE_LOCATIONS[0];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(office.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapIframeUrl = `https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&t=${mapType === "satellite" ? "k" : "m"}&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="space-y-8">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="brand-badge mb-2">
            <Compass size={12} />
            Interactive office map
          </span>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Select a hub to view live map coordinates, transport access and direct contact details.
          </p>
        </div>

        {/* Satellite / Standard Map Type Toggle */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs shrink-0">
          <button
            onClick={() => setMapType("standard")}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
              mapType === "standard" ? 'bg-brand-navy text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Map View
          </button>
          <button
            onClick={() => setMapType("satellite")}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
              mapType === "satellite" ? 'bg-brand-navy text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Satellite
          </button>
        </div>
      </div>

      {/* Office Selector Pills */}
      <div className="flex flex-wrap gap-2.5 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        {OFFICE_LOCATIONS.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedOfficeId(loc.id)}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
              selectedOfficeId === loc.id
                ? 'bg-brand-navy text-white shadow-md scale-[1.02]'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
            }`}
          >
            <MapPin size={15} className={selectedOfficeId === loc.id ? 'text-brand-cyan' : 'text-brand-blue-deep'} />
            <span>{loc.name}</span>
            {loc.id === "kigali" && (
              <span className="text-[9px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded font-black uppercase tracking-wider">
                HQ
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main Map Box & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Interactive Map Iframe Container */}
        <div className="lg:col-span-8 flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white relative group">
          {/* Map Top Bar */}
          <div className="bg-brand-navy text-white px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                <Building2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{office.name}</h4>
                <p className="text-xs text-slate-400">{office.badge}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-cyan border border-brand-cyan/25 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              Office Open
            </span>
          </div>

          {/* Embedded Google Maps Canvas */}
          <div className="relative w-full h-[380px] md:h-[420px] bg-slate-100">
            <iframe
              title={`Map showing ${office.name}`}
              src={mapIframeUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Float Card Overlay on Map */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/90 text-xs space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin size={14} className="text-brand-blue-deep flex-shrink-0" />
                  {office.name}
                </span>
                <span className="text-[10px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                  {office.lat.toFixed(4)}, {office.lng.toFixed(4)}
                </span>
              </div>
              <p className="text-slate-600 leading-snug font-medium">{office.address}</p>
              <div className="pt-1 flex items-center gap-3 text-slate-500 font-medium text-[11px]">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-brand-blue-deep" />
                  {office.hours}
                </span>
              </div>
            </div>
          </div>

          {/* Map Controls & Directions Bar */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3 text-xs">
            <button
              onClick={handleCopyAddress}
              className="btn-outline py-2.5 px-4 text-xs font-semibold flex items-center gap-2"
            >
              {copied ? <Check size={14} className="text-brand-blue-deep" /> : <Copy size={14} />}
              <span>{copied ? "Address Copied!" : "Copy Address"}</span>
            </button>

            <a
              href={office.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-xs shadow-sm flex items-center gap-2"
            >
              <Navigation size={14} />
              <span>Open Directions in Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Location Info Card */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue-deep bg-brand-blue-soft px-3 py-1 rounded-full inline-block mb-2">
                Location Details
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">{office.city}</h3>
              <p className="text-xs text-brand-blue-deep font-semibold mt-0.5">{office.badge}</p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase font-bold text-[10px] tracking-wider block">Address</span>
                <p className="text-slate-800 font-semibold leading-relaxed">{office.address}</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <span className="text-slate-400 uppercase font-bold text-[10px] tracking-wider block">Direct Phone</span>
                <a href={`tel:${office.phone}`} className="text-brand-blue-deep font-bold hover:underline flex items-center gap-1.5">
                  <Phone size={13} />
                  {office.phone}
                </a>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <span className="text-slate-400 uppercase font-bold text-[10px] tracking-wider block">Office Email</span>
                <a href={`mailto:${office.email}`} className="text-brand-blue-deep font-bold hover:underline flex items-center gap-1.5">
                  <Mail size={13} />
                  {office.email}
                </a>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <span className="text-slate-400 uppercase font-bold text-[10px] tracking-wider block">Airport Access</span>
                <p className="text-slate-700 font-medium flex items-center gap-1.5">
                  <Plane size={13} className="text-brand-blue flex-shrink-0" />
                  {office.transit}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <span className="text-slate-400 uppercase font-bold text-[10px] tracking-wider block">Local Landmarks</span>
                <p className="text-slate-700 font-medium flex items-center gap-1.5">
                  <Building2 size={13} className="text-brand-blue flex-shrink-0" />
                  {office.landmarks}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs space-y-1">
            <p className="text-slate-700 font-bold">Visitor Entrance & Parking</p>
            <p className="text-[11px] text-slate-500">Visitor parking is available on-site with 24/7 security verification at the main gate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocationMap;
