import logoMark from "../../assets/icon.png";
import wordmarkDark from "../../assets/kwanda-wordmark.png";
import wordmarkLight from "../../assets/kwanda-wordmark-light.png";

type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

const MARK_SIZES: Record<LogoSize, string> = {
  xs: "h-7 w-7 rounded-lg",
  sm: "h-8 w-8 rounded-lg",
  md: "h-10 w-10 rounded-xl",
  lg: "h-12 w-12 rounded-xl",
  xl: "h-16 w-16 rounded-2xl",
};

const NAME_SIZES: Record<LogoSize, string> = {
  xs: "text-[15px]",
  sm: "text-[17px]",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const TAG_SIZES: Record<LogoSize, string> = {
  xs: "text-[6.5px] tracking-[0.22em]",
  sm: "text-[7px] tracking-[0.22em]",
  md: "text-[8px] tracking-[0.24em]",
  lg: "text-[9px] tracking-[0.24em]",
  xl: "text-[10px] tracking-[0.26em]",
};

type KwandaLogoProps = {
  size?: LogoSize;
  light?: boolean;
  showTagline?: boolean;
  className?: string;
};

/** Official Kwanda Group lockup — supplied logo mark + typeset wordmark. */
const KwandaLogo = ({
  size = "md",
  light = false,
  showTagline = true,
  className = "",
}: KwandaLogoProps) => (
  <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
    <span
      className={`${MARK_SIZES[size]} relative shrink-0 overflow-hidden shadow-[0_8px_20px_-10px_rgba(18,164,245,0.7)] ring-1 ring-black/5`}
    >
      <img
        src={logoMark}
        alt=""
        width={64}
        height={64}
        loading="eager"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>

    <span className="flex flex-col justify-center leading-none">
      <span
        className={`${NAME_SIZES[size]} font-display font-extrabold tracking-[-0.035em] ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        Kwanda
        <span className={light ? "text-brand-cyan" : "text-brand-blue"}>Group</span>
      </span>
      {showTagline && (
        <span
          className={`${TAG_SIZES[size]} mt-1 font-bold uppercase ${
            light ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Smart Technology
        </span>
      )}
    </span>
  </span>
);

export default KwandaLogo;

/** Logo mark only — for avatars, watermarks and the preloader. */
export const KwandaMark = ({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <img
    src={logoMark}
    alt="Kwanda Group logo"
    width={size}
    height={size}
    loading="eager"
    decoding="async"
    className={className}
    style={{ width: size, height: size }}
  />
);

/** Full supplied wordmark (transparent) — for large brand moments. */
export const KwandaWordmark = ({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) => (
  <img
    src={light ? wordmarkLight : wordmarkDark}
    alt="Kwanda Group — Smart Technology. Better Solutions. Stronger Society."
    className={className}
    loading="lazy"
    decoding="async"
  />
);
