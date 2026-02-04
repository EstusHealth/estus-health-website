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
  CheckCircle
} from 'lucide-react';
import { 
  Section, 
  Card, 
  Button, 
  FeatureCard,
  ProcessStep,
  PullQuote,
  CTABanner
} from '../components/ui';

export default function HomePage() {
  return (
    <>
      {/* SEO & Structured Data */}
      <Helmet>
        <title>Estus Health | Neuroaffirming Occupational Therapy Perth</title>
        <meta name="description" content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide." />
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
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 xl:py-40 grain-overlay overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
              Neuroaffirming Occupational Therapy
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-none mb-6 text-noctua-brown">
              Therapy that doesn't punish people
              <br />
              <span className="text-noctua-russet">for being who they are</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-noctua-brown/80 italic mb-6">
              Where being yourself isn't the problem — it's the starting point.
            </p>
            <p className="text-lg text-noctua-brown/70 max-w-2xl mb-8 leading-relaxed">
              We don't fix people. We fix the environment. Evidence-informed occupational therapy 
              across Perth and via telehealth Australia-wide.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button to="/contact" size="lg" className="bg-noctua-russet hover:bg-noctua-brown text-white border-none shadow-md">
                Make a Referral
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button to="/about/approach" variant="outline" size="lg" className="border-noctua-russet text-noctua-russet hover:bg-noctua-russet/10">
                Our Approach
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-noctua-brown/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-noctua-russet" />
                Private & Self-Managed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-noctua-russet" />
                Telehealth Available
              </span>
            </div>
          </div>
        </div>
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-noctua-bone/50 to-transparent pointer-events-none" />
      </section>

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
            description="Functional assessment, goal setting, and intervention that respects your autonomy and works with your nervous system — not against it."
            href="/services/occupational-therapy"
            className="bg-noctua-bone border-noctua-brown/10 shadow-sm"
          />
          <FeatureCard
            icon={Gamepad2}
            title="Gaming-Informed Therapy"
            description="Therapy through a channel that actually works. We meet people in the games they love — from Minecraft to VR."
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
              what it means to navigate a world not built for your brain — because many of 
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
                    Sessions feel like a deep exhale — not a performance review.
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
              Late-diagnosed or lifelong — we support executive function, unmasking, 
              sensory regulation, and building a life that works for your brain.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-noctua-russet/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-noctua-russet" />
            </div>
            <h3 className="font-display text-xl mb-3 text-noctua-brown">PDA Profiles</h3>
            <p className="text-noctua-brown/70 text-sm leading-relaxed">
              Traditional therapy often backfires with PDA. We understand why — and 
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
            <Button to="/contact" className="bg-noctua-russet hover:bg-noctua-brown text-white">
              Start Your Referral
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-8">
            <ProcessStep
              number="1"
              title="Enquire or Refer"
              description="Send through a referral or enquiry with the key details. Online form, email, or via your support coordinator — whatever works for you."
            />
            <ProcessStep
              number="2"
              title="Assessment & Planning"
              description="We identify strengths, barriers, and practical next steps aligned with your goals. No assumptions. No one-size-fits-all."
            />
            <ProcessStep
              number="3"
              title="Implementation & Review"
              description="Therapy sessions, real-world strategies, and progress checkpoints. We adapt as you need — capacity fluctuates, and that's okay."
            />
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section className="bg-noctua-bone/30">
        <div className="max-w-3xl mx-auto">
          <PullQuote
            quote="Estus Health is here for people who've masked, pushed, or performed just to access care — and for the therapists trying to stay whole while supporting them."
            className="text-center border-l-0 border-t-2 border-b-2 border-noctua-russet/30 py-8 text-noctua-brown italic"
          />
        </div>
      </Section>

      {/* Learn Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
            Resources
          </p>
          <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">Learn More</h2>
          <p className="text-noctua-brown/70">
            Understanding your neurotype is the first step. These guides are written 
            for people navigating these experiences — not about them.
          </p>
        </div>
        
        {/* ADDED 'bg-noctua-bone' TO CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
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
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="Whether you're self-referring, a parent, or a support coordinator — we're here to help."
        primaryCTA={{ label: "Make a Referral", href: "/contact", className: "bg-noctua-russet hover:bg-noctua-brown" }}
        secondaryCTA={{ label: "For Support Coordinators", href: "/for-referrers", className: "text-noctua-russet border-noctua-russet" }}
        className="bg-noctua-bone/50"
      />
    </>
  );
}
