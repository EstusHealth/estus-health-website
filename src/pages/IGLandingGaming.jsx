import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Gamepad2,
  ClipboardList,
  Users,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Headphones,
  Sparkles,
  Activity,
} from 'lucide-react';

const BASE_NAM = 'https://calendar.app.google/vGXRQqSbPwSXsY8q9';
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
];

function useBookingLink() {
  return useMemo(() => {
    if (typeof window === 'undefined') return BASE_NAM;
    const params = new URLSearchParams(window.location.search);
    const pairs = UTM_KEYS.filter((k) => params.get(k)).map(
      (k) => `${k}=${encodeURIComponent(params.get(k))}`
    );
    return pairs.length ? `${BASE_NAM}?${pairs.join('&')}` : BASE_NAM;
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

const PARENT_LINES = [
  'Your kid will talk for hours about Minecraft, but shuts down in therapy.',
  'The last therapist asked them to reduce screen time. They refused to go back.',
  'Gaming has started to feel like a wall between you and your child.',
  "School says they're bright but can't focus. Home says they'll only focus for games.",
  "You don't hate gaming. You hate not knowing what's going on in there.",
];

const OFFER_CARDS = [
  {
    Icon: MessageCircle,
    label: 'Quick questions',
    body: 'Not sure if gaming-informed OT is what your kid needs? Ask.',
  },
  {
    Icon: ClipboardList,
    label: 'Plans & reports',
    body: "Already have an NDIS plan or assessment? We'll look at it together.",
  },
  {
    Icon: Users,
    label: 'Parent in your corner',
    body: "Just want to talk to someone who gets it? That's what this is.",
  },
  {
    Icon: Gamepad2,
    label: 'Meet Nam first',
    body: 'Want to hear his voice before booking an intake. This is that call.',
  },
];

const SESSION_EXAMPLES = [
  {
    Icon: Gamepad2,
    title: 'Minecraft co-op',
    body: "Building together while working through the week's anxiety, one block at a time.",
  },
  {
    Icon: Headphones,
    title: 'Sensory profiling',
    body: 'Mapped to their real bedroom, classroom, and controller setup. Not a clinic fantasy.',
  },
  {
    Icon: Activity,
    title: 'Regulation through play',
    body: "Stardew for calm. Competitive play for tolerance. We pick the game to match the goal.",
  },
  {
    Icon: Sparkles,
    title: 'Anime as therapy',
    body: 'Characters they love become the way in. The best lessons come through stories.',
  },
];

export default function IGLandingGaming() {
  const bookingUrl = useBookingLink();
  const [heroCtaRef, heroInView] = useOutOfView(0.1);
  const showSticky = !heroInView;
  useClarity('wcw44jkeio');

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Helmet>
        <html lang="en" />
        <title>Estus Health · Gaming-Informed OT for Your Kid</title>
        <meta
          name="description"
          content="Neuroaffirming, gaming-informed occupational therapy your kid will actually want to attend. Free 15-minute parent chat with Nam."
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
            Gaming-Informed OT · Perth + Telehealth
          </p>
          <h1 className="font-display font-bold leading-none uppercase text-[52px] sm:text-6xl md:text-7xl text-foreground mb-6">
            Your kid is a <span className="text-gradient-accent">gamer.</span> Not a problem to solve.
          </h1>
          <p className="font-serif italic text-xl text-muted-foreground mb-8">
            Therapy that meets them on the controller. Not across a desk.
          </p>

          <a
            ref={heroCtaRef}
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="hero"
            data-clinician="nam"
            className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wider text-lg px-6 py-5 rounded-lg hover:bg-primary/90 active:scale-[0.99] transition"
          >
            Book a free 15-min parent chat →
          </a>
          <p className="text-[13px] text-muted-foreground text-center mt-4">
            With Nam · No referral needed · NDIS & private welcome
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
              You've been told screen time is the problem.
            </p>
          </div>
          <div>
            <div className="w-6 h-0.5 bg-primary mb-5" />
            <p className="font-display font-medium text-3xl sm:text-4xl leading-[1.1] uppercase">
              Your kid has been told their passion is the problem.
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

      {/* SECTION 3 — Parent recognition */}
      <section className="bg-background px-6 py-16">
        <div className="max-w-xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary/80 mb-6">
            Sound familiar?
          </p>
          <div className="space-y-2">
            {PARENT_LINES.map((line) => (
              <div
                key={line}
                className="bg-card rounded-lg shadow-sm border-l-4 border-primary px-5 py-4"
              >
                <p className="text-[18px] text-foreground leading-snug">{line}</p>
              </div>
            ))}
          </div>
          <p className="font-serif italic text-[18px] text-muted-foreground mt-8 text-center">
            We hear this every week. You're not alone, and neither are they.
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
            One chat to figure out if this fits your kid.
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
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="offer"
            data-clinician="nam"
            className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wider text-base px-6 py-5 rounded-lg hover:bg-primary/90 active:scale-[0.99] transition"
          >
            Book your parent chat with Nam →
          </a>

          <p className="text-[13px] text-muted-foreground text-center mt-6">
            No referral needed · No forms before you've decided · Telehealth Australia-wide
          </p>
        </div>
      </section>

      {/* SECTION 5 — What sessions look like */}
      <section className="bg-secondary px-6 py-16">
        <div className="max-w-xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-primary/80 mb-3">
            What actually happens in sessions
          </p>
          <h2 className="font-display text-[28px] sm:text-3xl leading-tight text-foreground mb-5">
            Looks like gaming. Works like therapy.
          </h2>
          <p className="text-[18px] text-foreground/80 mb-8 leading-snug">
            Games aren't the reward. They're the room we do the work in.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SESSION_EXAMPLES.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-card rounded-lg shadow-md border-t-4 border-primary p-6"
              >
                <Icon className="w-6 h-6 text-primary mb-3" aria-hidden />
                <h3 className="font-display text-lg uppercase tracking-wide text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-snug">{body}</p>
              </div>
            ))}
          </div>
          <p className="font-serif italic text-[17px] text-foreground/80 mt-8 text-center max-w-lg mx-auto">
            Nam is a PC and Xbox gamer. Minecraft, Roblox, Sea of Thieves. He has ADHD. He gets it.
          </p>
        </div>
      </section>

      {/* SECTION 6 — Parent testimonial */}
      <section className="bg-[hsl(20,25%,15%)] px-6 py-20">
        <div className="max-w-xl mx-auto">
          <blockquote className="font-serif italic text-[22px] leading-snug text-[hsl(35,30%,92%)]">
            “My son hadn't talked about a therapist without an eye-roll in years. After one session
            with Nam he came out and asked when the next one was.”
          </blockquote>
          <p className="text-[13px] mt-6 text-[hsl(25,40%,72%)]/80 uppercase tracking-wider font-display">
            Parent of a 14-year-old, telehealth
          </p>
          <div className="w-full h-px bg-primary/40 mt-10" />
        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section className="relative grain-overlay bg-background px-6 py-20">
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-display font-bold text-[36px] sm:text-5xl leading-[1.05] text-foreground mb-4">
            15 minutes.
            <br />
            No pressure.
          </h2>
          <p className="font-serif italic text-[18px] text-muted-foreground mb-8">
            Most parents wait until the wheels come off. You don't have to.
          </p>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-unmask="true"
            data-section="footer-cta"
            data-clinician="nam"
            className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wider text-lg px-6 py-5 rounded-lg hover:bg-primary/90 active:scale-[0.99] transition"
          >
            Book your parent chat with Nam →
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
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-clarity-unmask="true"
          data-section="sticky"
          data-clinician="nam"
          tabIndex={showSticky ? 0 : -1}
          className="flex items-center justify-between h-14 px-5 font-display uppercase tracking-wider"
        >
          <span className="text-sm">Free parent chat with Nam</span>
          <span className="text-sm flex items-center gap-1">
            Book <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
}
