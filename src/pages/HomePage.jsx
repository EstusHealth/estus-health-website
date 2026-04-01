import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Gamepad2,
  Brain,
  FileText,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
  Moon,
  Flame,
  Calendar,
} from 'lucide-react';
import {
  Section,
  Card,
  Button,
  FeatureCard,
  ProcessStep,
} from '../components/ui';
import HeroSection from '../components/HeroSection';
import CapacityTracker from '../components/CapacityTracker';
import { BOOKING, BookingButtonPair } from '../components/BookingButtons';

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

      {/* Capacity Tracker */}
      <CapacityTracker />

      {/* Discovery Call Banner */}
      <div className="bg-noctua-bone/50 border-b border-noctua-brown/10 py-6">
        <div className="container text-center">
          <p className="text-noctua-brown/80 mb-4">
            Not sure where to start? Book a free 15-minute discovery call. No commitment, no pressure.
          </p>
          <BookingButtonPair />
        </div>
      </div>

      {/* Services - ADDED BG COLOR HERE */}
      <Section className="bg-noctua-bone/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">What We Do</h2>
          <p className="text-noctua-brown/70">
            Specialised support for autistic adults and teens, people with PDA profiles, 
            and anyone navigating executive function challenges or chronic health conditions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
              Our Philosophy
            </p>
            <h2 className="text-2xl md:text-4xl font-display mb-6 text-noctua-brown">
              This isn't about fixing people
              <br />
              <span className="text-noctua-russet">It's about fixing the environment</span>
            </h2>
            <p className="text-noctua-brown/70 leading-relaxed mb-6">
              Traditional approaches often ask neurodivergent people to change who they are. 
              We take a different view: when the environment is right, people thrive.
            </p>
            <p className="text-noctua-brown/70 leading-relaxed mb-8">
              Our team brings both clinical expertise and lived experience. We understand 
              what it means to navigate a world not built for your brain, because many of
              us have done it ourselves.
            </p>
            <Button to="/about/approach" variant="outline" className="border-noctua-brown/20 hover:bg-noctua-bone">
              Learn About Our Approach
            </Button>
          </div>
          
          {/* UPDATED CARDS TO HAVE BACKGROUND COLOR */}
          <div className="space-y-6">
            <Card className="p-6 bg-noctua-bone border border-noctua-brown/10 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-noctua-russet/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-noctua-russet" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2 text-noctua-brown">Resistance-Breaking, Not Compliance-Building</h3>
                  <p className="text-noctua-brown/70 text-sm">
                    We don't force change. We walk alongside until the next step feels possible.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-noctua-bone border border-noctua-brown/10 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-noctua-russet/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-noctua-russet" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2 text-noctua-brown">Pressure-Reducing Support</h3>
                  <p className="text-noctua-brown/70 text-sm">
                    Sessions feel like a deep exhale, not a performance review.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-noctua-bone border border-noctua-brown/10 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-noctua-russet/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-noctua-russet" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2 text-noctua-brown">Structure That Bends</h3>
                  <p className="text-noctua-brown/70 text-sm">
                    We adapt to the person, not the other way around.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who We Help */}
      <Section className="bg-noctua-bone/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">Who We Help</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-noctua-russet/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-noctua-russet" />
            </div>
            <h3 className="font-display text-xl mb-3 text-noctua-brown">Autistic Adults & Youth</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed">
              Whether late-diagnosed or lifelong, we support executive function, unmasking,
              sensory regulation, and building a life that works for your brain.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-noctua-russet/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-noctua-russet" />
            </div>
            <h3 className="font-display text-xl mb-3 text-noctua-brown">PDA Profiles</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed">
              Traditional therapy often backfires with PDA. We understand why, and
              we've built our entire approach around what actually helps.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-noctua-russet/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-noctua-russet" />
            </div>
            <h3 className="font-display text-xl mb-3 text-noctua-brown">Support Coordinators & Referrers</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed">
              Clear communication, practical recommendations, and reports that 
              translate into action. We make your job easier.
            </p>
          </div>
        </div>
      </Section>

      {/* Quiz Spotlight */}
      <Section>
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

        <div className="text-center">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-noctua-russet font-display text-sm uppercase tracking-wide font-semibold hover:gap-3 transition-all"
          >
            See all 6 quizzes &amp; guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="text-2xl md:text-4xl font-display mb-6 text-noctua-brown">
              Getting started is straightforward
            </h2>
            <p className="text-noctua-brown/70 leading-relaxed mb-8">
              We've designed our intake process to be as low-demand as possible. 
              No lengthy phone calls unless you want them. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button to="/contact" className="bg-noctua-russet hover:bg-noctua-brown text-white">
                Start Your Referral
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <span className="text-noctua-brown/50 text-sm">or</span>
              <Button
                href={BOOKING.adult.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="border-noctua-brown/20 hover:bg-noctua-brown hover:text-white"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book a Free Discovery Call
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            <ProcessStep
              number="1"
              title="Enquire, Refer, or Book a Call"
              description="Send through a referral or enquiry, or book a free 15-minute discovery call to chat with a clinician first. Online form, email, phone, or via your support coordinator. Whatever works for you."
            />
            <ProcessStep
              number="2"
              title="Assessment & Planning"
              description="We identify strengths, barriers, and practical next steps aligned with your goals. No assumptions. No one-size-fits-all."
            />
            <ProcessStep
              number="3"
              title="Implementation & Review"
              description="Therapy sessions, real-world strategies, and progress checkpoints. We adapt as you need. Capacity fluctuates, and that's okay."
            />
          </div>
        </div>
      </Section>

      {/* Free Discovery Call */}
      <Section className="bg-noctua-bone/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Calendar className="w-8 h-8 text-noctua-russet mx-auto mb-4" />
          <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
            Free Discovery Call
          </p>
          <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">
            Talk to a clinician before you commit
          </h2>
          <p className="text-noctua-brown/70 leading-relaxed mb-4">
            A 15-minute call to ask questions, check the fit, and figure out next steps.
            No referral needed. No obligation. Just a conversation.
          </p>
          <p className="text-noctua-brown/50 text-sm">
            NDIS and private clients welcome. Telehealth available Australia-wide.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <BookingButtonPair variant="card" />
        </div>
      </Section>

      {/* Learn Section */}
      <Section className="bg-noctua-bone/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
            Guides & Articles
          </p>
          <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">Go deeper</h2>
          <p className="text-noctua-brown/70">
            These guides are written for people navigating these experiences, not about them.
            No jargon, no clinical distance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card hover className="bg-noctua-bone border-noctua-brown/10 shadow-sm group">
            <div className="p-6">
              <h3 className="font-display text-xl mb-3 text-noctua-brown">Understanding PDA</h3>
              <p className="text-noctua-brown/70 text-sm leading-relaxed mb-4">
                Pathological Demand Avoidance explained: what it is, how it shows up,
                and why traditional approaches often backfire.
              </p>
              <Link
                to="/learn/understanding-pda"
                className="inline-flex items-center text-noctua-russet text-sm font-medium hover:gap-2 transition-all"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card hover className="bg-noctua-bone border-noctua-brown/10 shadow-sm group">
            <div className="p-6">
              <h3 className="font-display text-xl mb-3 text-noctua-brown">Late Autism Diagnosis</h3>
              <p className="text-noctua-brown/70 text-sm leading-relaxed mb-4">
                Why autism gets missed, what late diagnosis feels like, and how to
                move forward with self-understanding.
              </p>
              <Link
                to="/learn/late-autism-diagnosis"
                className="inline-flex items-center text-noctua-russet text-sm font-medium hover:gap-2 transition-all"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card hover className="bg-noctua-bone border-noctua-brown/10 shadow-sm group">
            <div className="p-6">
              <h3 className="font-display text-xl mb-3 text-noctua-brown">Executive Function & Complex Health</h3>
              <p className="text-noctua-brown/70 text-sm leading-relaxed mb-4">
                Managing POTS, hEDS, MCAS, Chronic Pain or ME/CFS alongside neurodivergence?
                Here's why executive function takes the hit.
              </p>
              <Link
                to="/learn/executive-function-complex-health"
                className="inline-flex items-center text-noctua-russet text-sm font-medium hover:gap-2 transition-all"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-noctua-russet font-display text-sm uppercase tracking-wide font-semibold hover:gap-3 transition-all"
          >
            Browse all resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
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
          <div className="border-t border-noctua-brown/10 mt-8 pt-8">
            <p className="text-noctua-brown/60 text-sm mb-4">
              Prefer to talk first? Book a free 15-minute discovery call.
            </p>
            <BookingButtonPair />
          </div>
        </div>
      </Section>
    </>
  );
}
