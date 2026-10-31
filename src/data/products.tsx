import { Bus, Truck, MapPin, HomeIcon } from "lucide-react";
import VudukaLogo from "../assets/vuduka.jpg";
import katishaLogo from "../assets/katisha.png";

export const PRODUCTS_DATA = [
  {
  id: "katisha",
  name: "Katisha: Book Bus Tickets Online",
  cat: "Transport & Mobility",
  tag: "Online Bus Booking",
  comingSoon: false,
  desc: "An online platform for booking bus tickets across East Africa. Compare routes and pay securely with mobile money.",
  color: "#0284C7",
  icon: <Truck size={28} className="text-brand-blue-deep" />,
  image: katishaLogo,
  link: "https://katisha.today",
  features: [
    "Book Bus Tickets Online",
    "Compare East African Routes",
    "Mobile Money Payments (MTN, Airtel, M-Pesa)",
    "Real-Time Journey Tracking"
  ],
  specs: "Web-based booking platform with a focus on RURA-approved prices and secure mobile money integration.",
  details: "Katisha simplifies travel in East Africa. Users can book bus tickets for popular routes from Kigali to Kampala, Nairobi, Dar es Salaam, and more, with transparent pricing and the convenience of paying via MTN Mobile Money, Airtel Money, and M-Pesa."
  },
  {
    id: "vuduka",
    name: "Vuduka Logistics Hub",
    cat: "Transport & Logistics",
    tag: "Hyper-Speed Logistics",
    comingSoon: false,
    desc: "Real-time dispatch, AI fleet routing, and cross-border supply chain tracking for high-velocity commerce across East Africa and beyond.",
    color: "#0284C7",
    icon: <Truck size={28} className="text-brand-blue-deep" />,
    image:VudukaLogo,
    link: "https://vudukaw.netlify.app/",
    features: [
      "AI Traffic & Fuel Optimization",
      "Real-time GPS Cold-Chain Tracking",
      "Automated Waybill & Customs",
      "Driver Mobile Dispatch App",
    ],
    specs:
      "Cloud SaaS + On-premise logistics server integration. 99.9% uptime SLA.",
    details:
      "Vuduka powers last-mile delivery and freight fleets with predictive ML algorithms. It reduces transit delay by up to 35% and gives shippers end-to-end visibility from warehouse to consumer.",
  },
  {
    id: "huzaspace",
    name: "HuzaSpace",
    cat: "Digital Solutions",
    // tag: "Connect Spaces & People",
    tag: "Coming Soon",
    comingSoon: true,
    desc: "The platform that connects people with spaces — book offices, venues, and parking, and discover community events in real time.",
    color: "#0EA5E9",
    icon: <MapPin size={28} className="text-brand-blue-deep" />,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    link: "https://huzaspace.rw",
    features: [
      "Smart Office & Venue Booking",
      "Real-Time Space Availability",
      "Community Event Discovery",
      "Secure Digital Access Control",
    ],
    specs:
      "Web + native mobile apps with QR-based access and seamless calendar integration.",
    details:
      "HuzaSpace unlocks idle spaces and brings people together. Whether it is a meeting room, a market stall, or a weekend festival, HuzaSpace makes every space findable, bookable, and secure.",
  },
  {
  id: "iwacu",
  name: "IWACU",
  cat: "Real Estate Technology",
  tag: "Coming Soon",
  comingSoon: true,

  desc: "A modern digital house rental marketplace that connects tenants with trusted landlords and agents, making it easier to discover, list, and rent homes.",

  color: "#16A34A",

  icon: <HomeIcon size={28} className="text-brand-blue-deep" />,

  image:
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=800",

  link: "https://iwacu.kwandagroup.rw",

  features: [
    "Search and Discover Rental Homes",
    "Verified Houses and Trusted Agents",
    "Smart Location and Price Filters",
    "Save and Compare Favorite Homes",
    "Agent-Powered Property Listings",
    "Direct Tenant and Agent Communication",
  ],

  specs:
    "A mobile-first rental marketplace designed to connect tenants, landlords, agents, and administrators through one secure digital platform.",

  details:
    "Iwacu, meaning 'Home' in Kinyarwanda, is a modern real estate technology platform developed to simplify house renting. The platform allows users to discover rental homes, agents to add and manage verified properties, landlords to reach potential tenants, and administrators to maintain trust, quality, and security across the marketplace.",
},
];
