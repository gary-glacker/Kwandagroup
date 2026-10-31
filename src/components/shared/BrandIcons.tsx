import type { SVGProps } from "react";

/**
 * Kwanda Group brand icon set.
 * A consistent 24px, 1.7-stroke, rounded-cap family used across the product
 * ecosystem so every page speaks the same visual language.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const TransitIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M5 17V6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5V17" />
    <path d="M5 11h14" />
    <path d="M7.5 17h.01M16.5 17h.01" strokeWidth="2.6" />
    <path d="M3 20h18" opacity=".45" />
    <path d="M9 7.5h6" />
    <circle cx="12" cy="14.2" r="1.15" opacity=".6" />
  </svg>
);

export const LogisticsIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
    <path d="M3 7.5 12 12l9-4.5M12 12v9" opacity=".55" />
    <path d="M7.5 5.3 16.5 10v3.2" opacity=".85" />
  </svg>
);

export const SpaceIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M4 21V8.5L10 5v16" />
    <path d="M10 9.5 20 6v15" />
    <path d="M4 21h16" opacity=".45" />
    <path d="M6.5 9.5h1M6.5 12.5h1M6.5 15.5h1M13 10.5h1M13 13.5h1M13 16.5h1M16.5 9.5h1M16.5 12.5h1" />
  </svg>
);

export const SmartHomeIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M4 11.2 12 4l8 7.2" />
    <path d="M6.5 9.8V20h11V9.8" />
    <path d="M9.5 16.5a4 4 0 0 1 5 0" opacity=".85" />
    <path d="M10.8 18.2a2.2 2.2 0 0 1 2.4 0" opacity=".6" />
    <circle cx="12" cy="13.2" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const CloudIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M7 18.5h10.2a3.8 3.8 0 0 0 .5-7.57A5.6 5.6 0 0 0 7.05 9.9 4.3 4.3 0 0 0 7 18.5Z" />
    <path d="m9.5 13.2-1.4 1.5 1.4 1.5M14.5 13.2l1.4 1.5-1.4 1.5" opacity=".85" />
  </svg>
);

export const AiIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <rect x="6.5" y="6.5" width="11" height="11" rx="3" />
    <path d="M9.5 10h5v4h-5z" opacity=".5" />
    <path d="M10 3.2v3.3M14 3.2v3.3M10 17.5v3.3M14 17.5v3.3M3.2 10h3.3M3.2 14h3.3M17.5 10h3.3M17.5 14h3.3" />
  </svg>
);

export const ShieldIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M12 3 19 6v5.2c0 4.3-3 7.4-7 9.3-4-1.9-7-5-7-9.3V6z" />
    <path d="m9 11.8 2.1 2.1L15.2 9.8" />
  </svg>
);

export const CodeIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="m8.5 7.5-5 4.5 5 4.5M15.5 7.5l5 4.5-5 4.5" />
    <path d="m13.5 5.5-3 13" opacity=".55" />
  </svg>
);

export const GrowthIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M3.5 20h17" />
    <path d="M5.5 16.5v-4M10 16.5V9M14.5 16.5v-6M19 16.5V5.5" />
    <path d="M4.5 9.5 10 5l4 2.5L20.5 4" opacity=".65" />
    <path d="M20.5 4h-3.2M20.5 4v3.2" opacity=".65" />
  </svg>
);

export const SupportIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
    <rect x="3.5" y="12.5" width="3.5" height="5.5" rx="1.5" />
    <rect x="17" y="12.5" width="3.5" height="5.5" rx="1.5" />
    <path d="M17 18.5a3.5 3.5 0 0 1-3.5 3H11" />
    <circle cx="9.5" cy="21.5" r=".9" fill="currentColor" stroke="none" opacity=".7" />
  </svg>
);

export const CompassIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
    <circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const SparkIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M12 3.5c.7 4.6 2.4 6.3 7 7-4.6.7-6.3 2.4-7 7-.7-4.6-2.4-6.3-7-7 4.6-.7 6.3-2.4 7-7Z" />
    <path d="M18.5 16.5c.3 1.8 1 2.5 2.8 2.8-1.8.3-2.5 1-2.8 2.8-.3-1.8-1-2.5-2.8-2.8 1.8-.3 2.5-1 2.8-2.8Z" opacity=".55" />
  </svg>
);

export const LayersIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="m12 3 8.5 4.5L12 12 3.5 7.5z" />
    <path d="m3.5 12 8.5 4.5 8.5-4.5" opacity=".7" />
    <path d="m3.5 16.5 8.5 4.5 8.5-4.5" opacity=".4" />
  </svg>
);

export const GlobeIcon = ({ size, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5S14.3 18.2 12 20.5C9.7 18.2 8.5 15.3 8.5 12S9.7 5.8 12 3.5Z" />
  </svg>
);
