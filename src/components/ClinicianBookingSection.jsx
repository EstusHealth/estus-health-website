import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  User,
  Users,
  Gamepad2,
  Moon,
  Brain,
  Heart,
  MessageSquare,
  Home,
} from 'lucide-react';
import { Section } from './ui';
import { BOOKING } from './BookingButtons';

const clinicianCards = [
  {
    name: 'Nik',
    icon: User,
    tagline:
      "You've been told to 'just try harder' your whole life. We try differently.",
    features: [
      {
        icon: Moon,
        title: 'Free sleep assessment',
        copy: "Can't switch off at night? Let's find out what your body clock actually needs.",
      },
      {
        icon: MessageSquare,
        title: 'Declarative language for parents',
        copy: "Stop the demand cycle. Learn to communicate in ways that don't trigger shutdown.",
      },
      {
        icon: Brain,
        title: 'Executive function for ADHD',
        copy: "Task initiation, planning, time blindness. Real tools, not just 'use a planner.'",
      },
      {
        icon: Heart,
        title: 'Hypermobility pain management',
        copy: 'EDS, POTS, chronic fatigue. OT strategies that respect what your body is telling you.',
      },
    ],
    ctaText: 'Book your free 15 with Nik',
    bookingUrl: BOOKING.adult.url,
  },
  {
    name: 'Nam',
    icon: Users,
    tagline:
      'An OT who understands gamers from the inside. Not one who just tells them to put the controller down.',
    features: [
      {
        icon: Calendar,
        title: 'Free 15-min assessment',
        copy: "No commitment. Just clarity on what's going on.",
      },
      {
        icon: Gamepad2,
        title: 'Screen & gaming transitions',
        copy: "End the meltdowns. Build transitions that don't feel like punishment.",
      },
      {
        icon: Home,
        title: 'Daily living independence',
        copy: 'From getting dressed to making lunch. Skills that stick.',
      },
      {
        icon: Gamepad2,
        title: 'Minecraft Leadership Program',
        copy: 'Leadership, teamwork & executive function, built inside the game they already love.',
      },
    ],
    ctaText: 'Book your free 15 with Nam',
    bookingUrl: BOOKING.youth.url,
  },
];

const trustBadges = [
  'No referral needed',
  'Private paying, plan & self-managed NDIS',
];

export default function ClinicianBookingSection() {
  return (
    <Section className="!pt-12 lg:!pt-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
            Ready when you are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.05] mb-4">
            Pick a clinician and
            <br />
            <span className="text-gradient-accent">book your free 15</span>
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            No referral, no forms, no commitment. Just a conversation with the
            OT who fits your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {clinicianCards.map((card) => {
            const HeaderIcon = card.icon;
            return (
              <div
                key={card.name}
                className="bg-card rounded-lg shadow-md border border-border p-6 lg:p-8 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HeaderIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl uppercase text-foreground leading-tight">
                    {card.name}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="font-serif italic text-foreground/80 text-base lg:text-lg mb-5 leading-relaxed">
                  {card.tagline}
                </p>

                {/* Feature rows */}
                <ul className="flex flex-col gap-3 mb-6 flex-1">
                  {card.features.map(({ icon: FeatureIcon, title, copy }) => (
                    <li key={title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FeatureIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[0.9rem] font-semibold text-foreground leading-snug">
                          {title}
                        </p>
                        <p className="text-[0.78rem] text-muted-foreground mt-0.5 leading-snug">
                          {copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={card.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(139,90,60,0.25)] transition-all duration-300 w-full"
                >
                  <Calendar className="w-4 h-4" />
                  {card.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
