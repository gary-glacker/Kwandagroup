import { motion } from "motion/react";
import logoMark from "../../assets/icon.png";

const CUBE_SIZE = 132;
const HALF = CUBE_SIZE / 2;

const cubeFaces = [
  { className: "transform rotateY(0deg) translateZ(" + HALF + "px)" },
  { className: "transform rotateY(90deg) translateZ(" + HALF + "px)" },
  { className: "transform rotateY(180deg) translateZ(" + HALF + "px)" },
  { className: "transform rotateY(270deg) translateZ(" + HALF + "px)" },
  { className: "transform rotateX(90deg) translateZ(" + HALF + "px)" },
  { className: "transform rotateX(-90deg) translateZ(" + HALF + "px)" },
];

const BRAND = "KWANDA GROUP";

const Preloader3D = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* Ambient sky glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-sky-600/20 blur-[120px]" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sky-400/10 blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky-500/10 blur-[100px]" />

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-sky-400"
          style={{
            width: `${4 + (i % 4) * 3}px`,
            height: `${4 + (i % 4) * 3}px`,
            left: `${(i * 137) % 100}%`,
            top: `${(i * 61) % 100}%`,
            boxShadow: "0 0 12px rgba(56, 189, 248, 0.8)",
            animation: `preloader-float ${3 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}

      {/* 3D Scene */}
      <div className="relative flex items-center justify-center" style={{ perspective: "1000px" }}>
        {/* Orbiting satellites */}
        <div
          className="absolute w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.9)]"
          style={{ animation: "preloader-orbit 6s linear infinite" }}
        />
        <div
          className="absolute w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]"
          style={{ animation: "preloader-orbit-2 9s linear infinite" }}
        />

        {/* Rotating 3D cube */}
        <div
          className="preserve-3d relative"
          style={{
            width: `${CUBE_SIZE}px`,
            height: `${CUBE_SIZE}px`,
            animation: "preloader-spin 5s linear infinite",
          }}
        >
          {cubeFaces.map((face, i) => (
            <div
              key={i}
              className="cube-face"
              style={{ transform: face.className }}
            >
              <img
                src={logoMark}
                alt=""
                className="h-16 w-16 rounded-xl drop-shadow-[0_0_14px_rgba(56,189,248,0.85)]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Brand title with staggered letters */}
      <div className="mt-14 flex items-end justify-center gap-[3px] overflow-hidden">
        {BRAND.split("").map((letter, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-extrabold tracking-[0.35em] text-white"
            style={{
              animation: `preloader-letter 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.15 + i * 0.06}s both`,
              textShadow: "0 0 24px rgba(2, 132, 199, 0.9)",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-3 text-[10px] font-bold uppercase tracking-[0.5em] text-sky-400"
      >
        Smart Technology · Better Solutions
      </motion.p>

      {/* Progress bar */}
      <div className="mt-8 w-56 h-[3px] rounded-full bg-sky-950 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
          style={{ animation: "preloader-bar 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader3D;
