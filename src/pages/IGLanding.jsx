import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Clock,
  ClipboardList,
  Users,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const BASE_NIK = 'https://calendar.app.google/iLxEVkhaRCFEhsSC8';
const BASE_NAM = 'https://calendar.app.google/vGXRQqSbPwSXsY8q9';
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
];

function useBookingLinks() {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return { nik: BASE_NIK, nam: BASE_NAM };
    }
    const params = new URLSearchParams(window.location.search);
    const pairs = UTM_KEYS.filter((k) => params.get(k)).map(
      (k) => `${k}=${encodeURIComponent(params.get(k))}`
    );
    const suffix = pairs.length ? `?${pairs.join('&')}` : '';
    return { nik: `${BASE_NIK}${suffix}`, nam: `${BASE_NAM}${suffix}` };
  }, []);
}

function useOutOfView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useClarity(projectId) {
  useEffect(() => {
    if (typeof window === 'undefined' || !projectId) return;
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', projectId);
  }, [projectId]);
}

const IDENTITY_LINES = [
  'You got the diagnosis late, if at all.',
  "You mask so well people don't believe you struggle.",
  "Standard advice never sticks because it wasn't built for your brain.",
  "You've left sessions feeling worse than when you arrived.",
  "You're not lazy. You're exhausted from compensating.",
];

const OFFER_CARDS = [
  {
    Icon: Clock,
    label: 'Quick questions',
    body: 'Not sure if OT is the right fit? Just ask.',
  },
  {
    Icon: ClipboardList,
    label: 'Assessment guidance',
    body: "Told you need a functional assessment? We'll walk you through it.",
  },
  {
    Icon: Users,
    label: 'Parent consults',
    body: "Something's going on with your child. Let's make sense of it.",
  },
  {
    Icon: MessageCircle,
    label: 'Discovery calls',
    body: 'Ready to start. Want to talk first. This is that call.',
  },
];

const QUIZ_CARDS = [
  {
    eyebrow: 'Burnout',
    title: 'Autistic Burnout Quiz',
    body: 'Find out where you are on the burnout spectrum.',
    href: '/learn/burnout-quiz',
  },
  {
    eyebrow: 'PDA & Autism',
    title: 'PDA Profile Quiz',
    body: 'Discover your archetype and what actually helps.',
    href: '/learn/pda-quiz',
  },
  {
    eyebrow: 'Sleep',
    title: 'Chronotype Quiz',
    body: 'Stop fighting your own biology. Find your real sleep type.',
    href: '/learn/chronotype-quiz',
  },
];

export default function IGLanding() {
  const { nik, nam } = useBookingLinks();
  const [heroCtaRef, heroInView] = useOutOfView(0.1);
  const showSticky = !heroInView;
  useClarity('wcw3irohyv');

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <html lang="en" />
        <title>Estus Health · Free 15-minute Session</title>
        <meta
          name="description"
          content="OTs who already get how your brain works. Book a free 15-minute session. Perth and telehealth Australia-wide."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Helmet>

      {/* SECTION 1 — Hero */}
      <section className="relative grain-overlay min-h-[100svh] flex flex-col px-6 pt-6 pb-8 overflow-hidden">
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <img
              src="/flame-logo.png"
              alt=""
              width="32"
              height="32"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display text-sm uppercase tracking-wider text-foreground">
            Estus Health
          </span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary/80 mb-6">
            Neuroaffirming OT · Perth + Telehealth
          </p>
          <h1 className="font-display font-bold leading-none uppercase text-[52px] sm:text-6xl md:text-7xl text-foreground mb-6">
            OTs who <span className="text-gradient-accent">already</span> get how your brain works.
          </h1>
          <p className="font-serif italic text-xl text-muted-foreground mb-8">
            No explaining. No justifying. Just actual help.
          </p>

          <a
            ref={heroCtaRef}
            href={nik}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="hero"
            className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wider text-lg px-6 py-5 rounded-lg hover:bg-primary/90 active:scale-[0.99] transition"
          >
            Book your free 15-minute session →
          </a>
          <p className="text-[13px] text-muted-foreground text-center mt-4">
            No referral needed · No obligation · NDIS & private welcome
          </p>
        </div>

        <div className="relative z-10 flex justify-center">
          <ChevronDown className="w-6 h-6 text-primary/50 animate-bounce" aria-hidden />
        </div>
      </section>

      {/* SECTION 2 — Scroll-Stop Moment */}
      <section className="bg-[hsl(20,25%,15%)] text-[hsl(35,30%,92%)] px-6 py-20">
        <div className="max-w-xl mx-auto space-y-10">
          <div>
            <div className="w-6 h-0.5 bg-primary mb-5" />
            <p className="font-display font-medium text-3xl sm:text-4xl leading-[1.1] uppercase">
              You've been misunderstood by every system that was supposed to help you.
            </p>
          </div>
          <div>
            <div className="w-6 h-0.5 bg-primary mb-5" />
            <p className="font-display font-bold text-4xl sm:text-5xl leading-none uppercase text-gradient-accent">
              That ends here.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Identity Match */}
      <section className="bg-background px-6 py-16">
        <div className="max-w-xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary/80 mb-6">
            Sound familiar?
          </p>
          <div className="space-y-2">
            {IDENTITY_LINES.map((line) => (
              <div
                key={line}
                className="bg-card rounded-lg shadow-sm border-l-4 border-primary px-5 py-4"
              >
                <p className="text-[18px] text-foreground leading-snug">{line}</p>
              </div>
            ))}
          </div>
          <p className="font-serif italic text-[18px] text-muted-foreground mt-8 text-center">
            We wrote those from memory. We've heard them all.
          </p>
        </div>
      </section>

      {/* SECTION 4 — The Offer */}
      <section className="bg-background px-6 pb-16">
        <div className="max-w-xl mx-auto bg-card rounded-2xl shadow-md p-7 sm:p-10">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary/80 mb-3">
            The free 15 minutes
          </p>
          <h2 className="font-display text-[32px] leading-[1.05] text-foreground mb-8">
            One conversation changes everything.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {OFFER_CARDS.map(({ Icon, label, body }) => (
              <div key={label} className="bg-background rounded-lg p-5">
                <Icon className="w-6 h-6 text-primary mb-3" aria-hidden />
                <p className="font-display uppercase tracking-wide text-foreground text-base mb-1">
                  {label}
                </p>
                <p className="text-[15px] text-muted-foreground leading-snug">{body}</p>
              </div>
            ))}
          </div>

          <a
            href={nik}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="offer"
            data-clinician="nik"
            className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wider text-base px-6 py-5 rounded-lg hover:bg-primary/90 active:scale-[0.99] transition"
          >
            Book with Nik (Adults & complex health) →
          </a>

          <p className="text-xs text-muted-foreground text-center my-3 uppercase tracking-widest">
            or
          </p>

          <a
            href={nam}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="offer"
            data-clinician="nam"
            className="block w-full text-center bg-transparent border-2 border-primary text-primary font-display uppercase tracking-wider text-base px-6 py-[18px] rounded-lg hover:bg-primary hover:text-primary-foreground active:scale-[0.99] transition"
          >
            Book with our Clinical Lead for gaming →
          </a>

          <p className="text-[13px] text-muted-foreground text-center mt-6">
            No referral needed · No forms before you've decided · Telehealth Australia-wide
          </p>
        </div>
      </section>

      {/* SECTION 5 — Quiz Hook */}
      <section className="bg-secondary px-6 py-16">
        <div className="max-w-xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary/80 mb-3">
            Start with self-understanding
          </p>
          <h2 className="font-display text-[28px] sm:text-3xl leading-tight text-foreground mb-5">
            Not sure where to begin?
          </h2>
          <p className="text-[18px] text-foreground/80 mb-8 leading-snug">
            Our free quizzes give you a real map of how your brain works.
            <br />
            Personalised. Honest. No login required.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 pb-2">
            {QUIZ_CARDS.map(({ eyebrow, title, body, href }) => (
              <Link
                key={href}
                to={href}
                className="snap-start shrink-0 w-[82%] sm:w-auto bg-card rounded-lg shadow-md border-t-4 border-primary p-6 flex flex-col hover:-translate-y-0.5 transition-transform"
              >
                <p className="font-display text-[11px] uppercase tracking-widest text-primary mb-2">
                  {eyebrow}
                </p>
                <h3 className="font-display text-xl leading-tight text-foreground mb-2 normal-case">
                  {title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-6 flex-1 leading-snug">
                  {body}
                </p>
                <span className="font-display text-sm uppercase tracking-wide text-primary">
                  Take the quiz →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/learn"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              See all quizzes →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Testimonial */}
      <section className="bg-[hsl(20,25%,15%)] px-6 py-20">
        <div className="max-w-xl mx-auto">
          <blockquote className="font-serif italic text-[22px] leading-snug text-[hsl(35,30%,92%)]">
            “I've seen OTs my whole life. This was the first time I didn't have to explain why I
            was struggling. They already knew.”
          </blockquote>
          <p className="text-[13px] mt-6 text-[hsl(25,40%,72%)]/80 uppercase tracking-wider font-display">
            Adult client, telehealth
          </p>
          <div className="w-full h-px bg-primary/40 mt-10" />
        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section className="relative grain-overlay bg-background px-6 py-20">
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-display font-bold text-[36px] sm:text-5xl leading-[1.05] text-foreground mb-4">
            Your 15 minutes is free.
            <br />
            Use it.
          </h2>
          <p className="font-serif italic text-[18px] text-muted-foreground mb-8">
            Most people wait too long. You don't have to.
          </p>

          <a
            href={nik}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="footer-cta"
            className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wider text-lg px-6 py-5 rounded-lg hover:bg-primary/90 active:scale-[0.99] transition"
          >
            Book your free session now →
          </a>
          <p className="text-[13px] text-muted-foreground text-center mt-5 leading-relaxed">
            No referral · No obligation · NDIS, Medicare & private welcome
            <br />
            Mon-Sat, 8am-7pm AWST
          </p>
        </div>
      </section>

      <footer className="bg-background px-6 pb-28 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Estus Health · Perth, WA · Telehealth Australia-wide
        </p>
      </footer>

      {/* Sticky CTA bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 bg-primary text-primary-foreground shadow-[0_-2px_12px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden={!showSticky}
      >
        <a
          href={nik}
          target="_blank"
          rel="noopener noreferrer"
          data-clarity-unmask="true"
          data-section="sticky"
          tabIndex={showSticky ? 0 : -1}
          className="flex items-center justify-between h-14 px-5 font-display uppercase tracking-wider"
        >
          <span className="text-sm">Free 15-min session</span>
          <span className="text-sm flex items-center gap-1">
            Book now <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
}
