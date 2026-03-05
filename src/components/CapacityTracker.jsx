import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

const capacityAreas = [
  {
    category: 'Therapy',
    items: [
      {
        title: 'Adults',
        description: 'Neuroaffirming OT for autistic adults, late diagnosis, burnout recovery, executive function and sensory regulation.',
        status: 'accepting',
        statusLabel: 'Accepting New Clients',
        cta: { label: 'Our Services', to: '/services/occupational-therapy' },
      },
      {
        title: 'Youth & Teens',
        description: 'PDA-informed and gaming-informed therapy that meets young people where they are — not where we think they should be.',
        status: 'accepting',
        statusLabel: 'Accepting New Clients',
        cta: { label: 'Our Services', to: '/services/gaming-informed-therapy' },
      },
    ],
  },
  {
    category: 'NDIS Assessments & Reports',
    items: [
      {
        title: 'NDIS Access Requests',
        description: 'Applying for the NDIS for the first time? We write clear functional evidence that captures the full picture of your capacity.',
        status: 'accepting',
        statusLabel: 'Immediate Capacity',
        cta: { label: 'Learn More', to: '/services/assessments-reports' },
      },
      {
        title: 'Functional Capacity Assessments',
        description: 'Already an NDIS participant? Comprehensive assessments for plan reviews that reflect your real capacity — good days, bad days, and in between.',
        status: 'accepting',
        statusLabel: 'Immediate Capacity',
        cta: { label: 'Learn More', to: '/services/assessments-reports' },
      },
    ],
  },
];

function StatusBadge({ status, label }) {
  const styles = status === 'accepting'
    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    : 'bg-amber-500/20 text-amber-300 border-amber-500/30';

  const Icon = status === 'accepting' ? CheckCircle : Clock;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles}`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

function TickerBanner() {
  const text = 'Capacity Tracker';
  // Repeat enough times to fill the screen and allow seamless looping
  const items = Array.from({ length: 12 }, (_, i) => (
    <span key={i} className="flex items-center gap-8 mx-4">
      <span className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-white/20 whitespace-nowrap">
        {text}
      </span>
      <span className="w-2 h-2 rounded-full bg-white/10 flex-shrink-0" />
    </span>
  ));

  return (
    <div className="overflow-hidden py-6 md:py-8">
      <div className="ticker-scroll flex">
        {items}
      </div>
    </div>
  );
}

export default function CapacityTracker() {
  return (
    <section className="bg-noctua-brown-dark text-white relative overflow-hidden">
      {/* Scrolling ticker */}
      <TickerBanner />

      {/* Content */}
      <div className="container pb-16 md:pb-20">
        <div className="text-center mb-12">
          <p className="font-display text-sm uppercase tracking-widest mb-3 text-white/50 font-semibold">
            Current Availability
          </p>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
            Where We Have Capacity
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            No waitlist guesswork. Here's where we can help right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {capacityAreas.map((area) => (
            <div key={area.category}>
              <h3 className="font-display text-lg uppercase tracking-wide text-white/40 mb-4 font-semibold">
                {area.category}
              </h3>
              <div className="space-y-4">
                {area.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h4 className="font-display text-xl text-white">{item.title}</h4>
                      <StatusBadge status={item.status} label={item.statusLabel} />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Link
                      to={item.cta.to}
                      className="inline-flex items-center gap-1 text-white/80 text-sm font-display uppercase tracking-wide hover:text-white hover:gap-2 transition-all"
                    >
                      {item.cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Referrer CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-display uppercase tracking-wide text-sm h-12 px-8 rounded-lg bg-white text-noctua-brown-dark hover:bg-white/90 transition-colors shadow-md"
          >
            Make a Referral
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            to="/for-referrers"
            className="inline-flex items-center justify-center font-display uppercase tracking-wide text-sm h-12 px-8 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Information for Referrers
          </Link>
        </div>
      </div>
    </section>
  );
}
