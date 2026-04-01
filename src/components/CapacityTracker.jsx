import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, User, Users, Calendar } from 'lucide-react';
import { BOOKING } from './BookingButtons';

const capacityItems = [
  {
    title: 'Adults',
    status: 'accepting',
    statusLabel: 'Accepting New Clients',
    to: '/services/occupational-therapy',
  },
  {
    title: 'Youth & Teens',
    status: 'accepting',
    statusLabel: 'Accepting New Clients',
    to: '/services/gaming-informed-therapy',
  },
  {
    title: 'NDIS Access Requests',
    status: 'accepting',
    statusLabel: 'Immediate Capacity',
    to: '/services/assessments-reports',
  },
  {
    title: 'Functional Capacity Assessments',
    status: 'accepting',
    statusLabel: 'Immediate Capacity',
    to: '/services/assessments-reports',
  },
];

function StatusBadge({ status, label }) {
  const styles = status === 'accepting'
    ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
    : 'bg-amber-500/10 text-amber-700 border-amber-500/20';

  const Icon = status === 'accepting' ? CheckCircle : Clock;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

export default function CapacityTracker() {
  return (
    <section className="bg-noctua-bone/30 border-b border-noctua-brown/10">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-8">
          <p className="font-display text-sm uppercase tracking-widest mb-3 text-noctua-russet font-semibold">
            Current Availability
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-noctua-brown">
            We're accepting new clients
          </h2>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <div className="divide-y divide-noctua-brown/10">
            {capacityItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 py-3"
              >
                <Link
                  to={item.to}
                  className="text-noctua-brown font-medium text-sm hover:text-noctua-russet transition-colors inline-flex items-center gap-1"
                >
                  {item.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 transition-opacity" />
                </Link>
                <StatusBadge status={item.status} label={item.statusLabel} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-noctua-brown/10 pt-10 text-center">
          <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-3 font-semibold">
            Free Discovery Calls
          </p>
          <h3 className="text-xl md:text-2xl font-display text-noctua-brown mb-2">
            Not sure where to start?
          </h3>
          <p className="text-noctua-brown/60 mb-8 max-w-md mx-auto">
            Book a free 15-minute call with one of our OTs. No commitment, no pressure — just a conversation.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                name: 'Nik',
                role: 'Occupational Therapist',
                focus: 'Adults & adolescents (16+)',
                icon: User,
                url: BOOKING.adult.url,
              },
              {
                name: 'Nam',
                role: 'Occupational Therapist',
                focus: 'Youth & young adults (under 16)',
                icon: Users,
                url: BOOKING.youth.url,
              },
            ].map(({ name, role, focus, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border border-noctua-brown/10 rounded-xl p-6 text-left transition-all hover:shadow-lg hover:border-noctua-russet/30 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-noctua-russet/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-noctua-russet" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg font-semibold text-noctua-brown">
                      {name}
                    </p>
                    <p className="text-noctua-brown/50 text-sm">
                      {role}
                    </p>
                  </div>
                </div>
                <p className="text-noctua-brown/70 text-sm mt-4 mb-5">
                  {focus}
                </p>
                <span className="inline-flex items-center gap-2 bg-noctua-russet text-white font-display text-sm uppercase tracking-wide px-5 py-2.5 rounded-lg group-hover:bg-noctua-russet/90 transition-colors w-full justify-center">
                  <Calendar className="w-4 h-4" />
                  Book a Free Call
                </span>
              </a>
            ))}
          </div>

          <p className="text-noctua-brown/40 text-xs mt-6">
            15 minutes · Monday to Saturday · 8am – 7pm
          </p>
        </div>
      </div>
    </section>
  );
}
