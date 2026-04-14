import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Gamepad2,
  Brain,
  FileText,
  Heart,
  ArrowRight,
  Moon,
  Flame,
  Lightbulb,
  Zap,
  ListChecks,
  Sun,
  Home,
  MessageSquare,
} from 'lucide-react';
import {
  Section,
  Button,
  FeatureCard,
  ProcessStep,
} from '../components/ui';
import HeroSection from '../components/HeroSection';
import Free15Section from '../components/Free15Section';
import CapacityTracker from '../components/CapacityTracker';
import InstagramEmbed from '../components/InstagramEmbed';
import { BOOKING } from '../components/BookingButtons';

export default function HomePage() {
  return (
    <>
      {/* SEO & Structured Data */}
      <Helmet>
        <title>Estus Health | Neuroaffirming Occupational Therapy Perth</title>
        <meta name="description" content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide." />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://estushealth.com/" />
        <meta property="og:title"       content="Estus Health | Neuroaffirming Occupational Therapy Perth" />
        <meta property="og:description" content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide." />
        <meta property="og:image"       content="https://estushealth.com/og-image.png" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"   content="Estus Health — Neuro-Affirming &amp; Gaming-Informed OT" />
        {/* Twitter / X */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Estus Health | Neuroaffirming Occupational Therapy Perth" />
        <meta name="twitter:description" content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide." />
        <meta name="twitter:image"       content="https://estushealth.com/og-image.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Estus Health",
              "image": "https://estushealth.com/team-photo.jpeg",
              "description": "Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Perth",
                "addressRegion": "WA",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-31.95",
                "longitude": "115.86"
              },
              "url": "https://estushealth.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero */}
      <HeroSection />

      {/* Free 15-Minute Sessions */}
      <Free15Section />

      {/* Specialties + CommCard */}
      <Section className="bg-card border-y border-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-14 items-start max-w-5xl mx-auto">
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.14em] text-primary mb-7">
              We work with
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: 'Autism in youth, adolescents, and adults', sub: 'Late diagnosis, identity, daily function' },
                { icon: Zap, title: 'PDA profiles', sub: 'Demand avoidance, autonomy-based strategies' },
                { icon: ListChecks, title: 'Executive function', sub: 'Planning, task initiation, time management' },
                { icon: Moon, title: 'Sleep', sub: 'Circadian rhythm, wind-down routines' },
                { icon: Sun, title: 'Co-occurring + chronic health', sub: 'EDS, POTS, fatigue, pain management' },
                { icon: Home, title: 'Neurodivergent households', sub: 'Routines, logistics, family systems' },
                { icon: Gamepad2, title: 'Gaming-informed therapy', sub: 'Minecraft, Discord, interest-led engagement' },
              ].map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[0.9rem] font-semibold text-foreground leading-snug">{title}</p>
                    <p className="text-[0.78rem] text-muted-foreground mt-0.5 leading-snug">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/resources/commcard"
            className="group bg-background rounded-lg p-5 shadow-md border border-border hover:border-primary/30 transition-all flex items-center gap-4 lg:max-w-xs"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm font-semibold text-foreground leading-snug">
                Free CommCard Tool
              </p>
              <p className="text-[0.78rem] text-muted-foreground mt-0.5 leading-snug">
                A free communication card app for nonspeaking and selectively mute individuals.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Section 1: Availability + Book a Call */}
      <CapacityTracker />

      {/* Section 2: What We Do + Our Approach */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Philosophy + Process */}
          <div>
            <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
              Our Approach
            </p>
            <h2 className="text-2xl md:text-4xl font-display mb-6 text-noctua-brown">
              This isn't about fixing people
              <br />
              <span className="text-noctua-russet">It's about fixing the environment</span>
            </h2>
            <p className="text-noctua-brown/70 leading-relaxed mb-8">
              Our team brings both clinical expertise and lived experience. We understand
              what it means to navigate a world not built for your brain, because many of
              us have done it ourselves.
            </p>
            <Button to="/about/approach" variant="outline" className="border-noctua-brown/20 hover:bg-noctua-bone mb-10">
              Learn About Our Approach
            </Button>

            <div className="space-y-6 pt-8 border-t border-noctua-brown/10">
              <p className="text-noctua-russet font-display text-sm uppercase tracking-widest font-semibold">
                How It Works
              </p>
              <ProcessStep
                number="1"
                title="Enquire, Refer, or Book a Call"
                description="Send through a referral or enquiry, or book a free 15-minute discovery call to chat with a clinician first. Whatever works for you."
              />
              <ProcessStep
                number="2"
                title="Assessment & Planning"
                description="We identify strengths, barriers, and practical next steps aligned with your goals. No assumptions. No one-size-fits-all."
              />
              <ProcessStep
                number="3"
                title="Implementation & Review"
                description="Therapy sessions, real-world strategies, and progress checkpoints. We adapt as you need."
              />
            </div>
          </div>

          {/* Right: Services */}
          <div>
            <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
              What We Do
            </p>
            <div className="space-y-4">
              <FeatureCard
                icon={Heart}
                title="Occupational Therapy"
                description="Functional assessment, goal setting, and intervention that respects your autonomy and works with your nervous system, not against it."
                href="/services/occupational-therapy"
                className="bg-noctua-bone border-noctua-brown/10 shadow-sm"
              />
              <FeatureCard
                icon={Gamepad2}
                title="Gaming-Informed Therapy"
                description="Therapy through a channel that actually works. We meet people in the games they love, from Minecraft to VR."
                href="/services/gaming-informed-therapy"
                className="bg-noctua-bone border-noctua-brown/10 shadow-sm"
              />
              <FeatureCard
                icon={FileText}
                title="Assessments & Reports"
                description="Functional capacity assessments, NDIS reports, and documentation that translates into meaningful action."
                href="/services/assessments-reports"
                className="bg-noctua-bone border-noctua-brown/10 shadow-sm"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: Quizzes + Resources */}
      <Section className="bg-noctua-bone/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
            Free Interactive Quizzes
          </p>
          <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">
            Start with self-understanding
          </h2>
          <p className="text-noctua-brown/70">
            Our quizzes aren't just fun — they give you a real map of how your brain works,
            with personalised insights you can actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* PDA Quiz */}
          <div className="relative bg-noctua-bone border border-noctua-brown/10 rounded-lg shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-noctua-russet/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-noctua-russet" />
            </div>
            <span className="inline-block bg-noctua-russet/10 text-noctua-russet text-xs font-medium font-display uppercase tracking-wide px-2 py-0.5 rounded-full mb-3 w-fit">
              PDA &amp; Autism
            </span>
            <h3 className="font-display text-xl mb-2 text-noctua-brown">PDA Profile Quiz</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed flex-1 mb-5">
              Discover your PDA archetype — Negotiator, Avoider, Masker, or Adapter —
              with personalised strategies for navigating demands.
            </p>
            <Link
              to="/learn/pda-quiz"
              className="inline-flex items-center gap-1 text-noctua-russet text-sm font-medium font-display uppercase tracking-wide hover:gap-2 transition-all"
            >
              Take the quiz <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Chronotype Quiz */}
          <div className="relative bg-noctua-bone border border-noctua-brown/10 rounded-lg shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-noctua-russet/10 flex items-center justify-center mb-4">
              <Moon className="w-6 h-6 text-noctua-russet" />
            </div>
            <span className="inline-block bg-noctua-russet/10 text-noctua-russet text-xs font-medium font-display uppercase tracking-wide px-2 py-0.5 rounded-full mb-3 w-fit">
              Sleep
            </span>
            <h3 className="font-display text-xl mb-2 text-noctua-brown">Chronotype Quiz</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed flex-1 mb-5">
              Are you a Lion, Bear, Wolf, or Dolphin? Find out your biological sleep type
              and how to stop fighting your own rhythm.
            </p>
            <Link
              to="/learn/chronotype-quiz"
              className="inline-flex items-center gap-1 text-noctua-russet text-sm font-medium font-display uppercase tracking-wide hover:gap-2 transition-all"
            >
              Take the quiz <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Burnout Quiz */}
          <div className="relative bg-noctua-bone border border-noctua-brown/10 rounded-lg shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-noctua-russet/10 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6 text-noctua-russet" />
            </div>
            <span className="inline-block bg-noctua-russet/10 text-noctua-russet text-xs font-medium font-display uppercase tracking-wide px-2 py-0.5 rounded-full mb-3 w-fit">
              Burnout
            </span>
            <h3 className="font-display text-xl mb-2 text-noctua-brown">Autistic Burnout Quiz</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed flex-1 mb-5">
              Assess where you are on the burnout spectrum and get a clearer picture
              of what your nervous system actually needs right now.
            </p>
            <Link
              to="/learn/burnout-quiz"
              className="inline-flex items-center gap-1 text-noctua-russet text-sm font-medium font-display uppercase tracking-wide hover:gap-2 transition-all"
            >
              Take the quiz <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center space-y-2">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-noctua-russet font-display text-sm uppercase tracking-wide font-semibold hover:gap-3 transition-all"
          >
            See all guides &amp; quizzes <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-noctua-brown/50 text-sm">
            Or explore our guides on{' '}
            <Link to="/learn/understanding-pda" className="underline hover:text-noctua-russet">PDA</Link>,{' '}
            <Link to="/learn/late-autism-diagnosis" className="underline hover:text-noctua-russet">late diagnosis</Link>, and{' '}
            <Link to="/learn/executive-function-complex-health" className="underline hover:text-noctua-russet">executive function</Link>.
          </p>
        </div>
      </Section>

      {/* Section 4: Instagram */}
      <InstagramEmbed />

      {/* Section 5: Get Started */}
      <Section className="bg-card border-y border-border">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-display mb-4">Ready to Get Started?</h2>
          <p className="text-foreground/70 mb-8">
            Whether you're self-referring, a parent, or a support coordinator, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Make a Referral
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button to="/for-referrers" variant="outline" size="lg">
              For Support Coordinators
            </Button>
          </div>
          <p className="text-noctua-brown/50 text-sm mt-6">
            or{' '}
            <a
              href={BOOKING.adult.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-noctua-russet"
            >
              book a free discovery call
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
