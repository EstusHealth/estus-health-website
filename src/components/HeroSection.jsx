import { useEffect, useState } from 'react';

const rotatingPhrases = [
  'fall asleep before 3am.',
  'stop masking at work.',
  'manage the overwhelm.',
  'find structure, not rules.',
  'stop burning out.',
  'feel safe in your body.',
  'game without guilt.',
  'build a life that fits.',
];

const ENTER_MS = 500;
const HOLD_MS = 2800;
const EXIT_MS = 350;
const START_DELAY_MS = 1200;

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setPrefers(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return prefers;
}

function RotatingHeadline() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'enter' | 'exit'

  // Kick off the first phrase after the initial page-load delay.
  useEffect(() => {
    const startTimer = setTimeout(() => setPhase('enter'), START_DELAY_MS);
    return () => clearTimeout(startTimer);
  }, []);

  // After a phrase finishes entering, hold it, then flip to exit.
  // When the user prefers reduced motion, we hold the first phrase indefinitely.
  useEffect(() => {
    if (phase !== 'enter' || reducedMotion) return;
    const holdTimer = setTimeout(() => setPhase('exit'), ENTER_MS + HOLD_MS);
    return () => clearTimeout(holdTimer);
  }, [phase, index, reducedMotion]);

  // After a phrase finishes exiting, advance to the next phrase and re-enter.
  useEffect(() => {
    if (phase !== 'exit') return;
    const exitTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % rotatingPhrases.length);
      setPhase('enter');
    }, EXIT_MS);
    return () => clearTimeout(exitTimer);
  }, [phase]);

  return (
    <span className="rotating-text-wrapper" aria-live="polite">
      {phase !== 'idle' && (
        <span
          key={`${index}-${phase}`}
          className={`rotating-phrase text-gradient-accent ${phase}`}
        >
          {rotatingPhrases[index]}
        </span>
      )}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden grain-overlay">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-12 h-[3px] bg-primary rounded-full mb-6 mx-auto" />

          <p className="text-primary font-display text-sm uppercase tracking-widest mb-5">
            Neuroaffirming Occupational Therapy · Perth + Telehealth
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
            OTs who get
            <br />
            that you need to
            <RotatingHeadline />
          </h1>

          <p className="font-serif text-xl md:text-2xl text-foreground/80 italic mt-6 max-w-xl mx-auto leading-relaxed">
            You shouldn't have to explain what masking is, why eye contact is
            hard, or that your PDA isn't laziness. We already know.
          </p>
        </div>
      </div>
    </section>
  );
}
