import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Pause, Play, SkipForward, Volume2, VolumeX } from 'lucide-react';
import KwandaLogo from './KwandaLogo';

const INTRO_SRC = '/kwanda-intro.mp4';

type IntroVideoProps = {
  onComplete: () => void;
};

/**
 * Full-screen brand film that opens the site before any page is shown.
 * The clip fills the viewport edge to edge (object-cover), autoplays muted
 * and can be skipped at any time.
 */
const IntroVideo = ({ onComplete }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef('');

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const complete = useCallback(() => {
    // Release the page as soon as the film ends, even if the fade-out is throttled.
    document.body.style.overflow = previousOverflow.current;
    setFinished(true);
    onComplete();
  }, [onComplete]);

  // Lock page scroll while the intro is on screen.
  useEffect(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  // Escape skips the film.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') complete();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [complete]);

  useEffect(() => {
    skipRef.current?.focus({ preventScroll: true });
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
      } catch {
        /* Autoplay blocked — the play button stays available. */
      }
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) void video.play().catch(() => undefined);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress(Math.min(video.currentTime / video.duration, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      role="dialog"
      aria-modal="true"
      aria-label="Kwanda Group brand film"
      className="fixed inset-0 z-[120] flex flex-col overflow-hidden bg-[#F6F9F7] text-white"
    >
        {/* Full-bleed film — object-cover keeps it filling the screen on every device */}
        <video
          ref={videoRef}
          src={INTRO_SRC}
          muted={muted}
          autoPlay={!reducedMotion}
          playsInline
          preload="auto"
          aria-label="Kwanda Group — Smart Technology. Better Solutions. Stronger Society."
          onPlay={() => {
            setPlaying(true);
            setStarted(true);
          }}
          onPause={() => setPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onEnded={complete}
          onError={complete}
          onClick={togglePlay}
          className="absolute inset-0 h-full w-full cursor-pointer  object-center"
      />

     
    </motion.div>
  );
};

export default IntroVideo;
