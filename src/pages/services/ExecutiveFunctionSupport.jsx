import { Link } from 'react-router-dom';
import { Section, Card, CardContent, Button, CTABanner } from '../../components/ui';
import { ArrowRight, CheckCircle, Brain, Users, Clock } from 'lucide-react';

export default function ExecutiveFunctionSupport() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 grain-overlay border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Executive Function Support
            </h1>
            <p className="font-serif text-xl text-foreground/80 italic mb-6">
              Bridging the gap between knowing and doing
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Executive function challenges aren't about being lazy or unmotivated. They're 
              about a brain that processes differently. Our support meets you where you are — 
              with practical strategies, body doubling, and our unique Resistance Breaker model.
            </p>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">What is Executive Function?</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Executive function is your brain's management system — the skills that help you plan, 
            start, and finish tasks. It includes working memory, task initiation, prioritising, 
            time awareness, and emotional regulation.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            For autistic and ADHD brains, these processes often work differently. Add chronic 
            conditions like POTS, hEDS, MCAS, or ME/CFS, and you're managing executive function 
            with even fewer resources.
          </p>
          <p className="text-foreground/70 text-sm mt-6">
            <Link to="/learn/executive-function-complex-health" className="text-primary hover:underline">
              Read our full guide on executive function and chronic health conditions →
            </Link>
          </p>
        </div>
      </Section>

      {/* Resistance Breaker */}
      <Section className="bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">The Resistance Breaker Model</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Resistance Breakers are our trained support workers who specialise in that specific 
            moment where knowing and doing don't connect. They're not therapists — they're 
            practical, in-the-moment support.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5">
              <h3 className="font-display text-lg mb-2">Body Doubling</h3>
              <p className="text-foreground/70 text-sm">
                Having another person present while you work — whether in person or virtually — 
                can make tasks feel possible that were impossible alone.
              </p>
            </Card>
            <Card className="p-5">
              <h3 className="font-display text-lg mb-2">Gentle Accountability</h3>
              <p className="text-foreground/70 text-sm">
                Not pressure. Not judgment. Just someone who knows what you're working on and 
                checks in — creating external structure without adding stress.
              </p>
            </Card>
            <Card className="p-5">
              <h3 className="font-display text-lg mb-2">Task Support</h3>
              <p className="text-foreground/70 text-sm">
                Help with the actual doing — breaking things down, getting started, moving 
                between steps. Practical support in real time.
              </p>
            </Card>
            <Card className="p-5">
              <h3 className="font-display text-lg mb-2">Co-Regulation</h3>
              <p className="text-foreground/70 text-sm">
                A calm, steady presence that helps your nervous system settle — because 
                executive function works better when you're regulated.
              </p>
            </Card>
          </div>
          <Card className="p-5 mt-6 border-primary/30">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display text-lg mb-1">Resistance Breaker Sessions</h3>
                <p className="text-foreground/70 text-sm">NDIS Support Worker rate</p>
              </div>
              <span className="font-display text-primary text-xl">$67.10/hr</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* OT Support */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">OT Support for Executive Function</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            While Resistance Breakers provide in-the-moment support, our OTs work on the bigger 
            picture — understanding your executive function profile, building systems, and 
            addressing underlying factors.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Assessment of executive function strengths and challenges</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Systems design that accounts for fluctuating capacity</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Environmental modifications to reduce executive demands</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Strategies tailored to your specific brain and life</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Coordination with Resistance Breakers for consistent support</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Who It's For */}
      <Section className="bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">Who This Is For</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Autistic adults and teens struggling with daily tasks</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">People with ADHD who've tried everything and nothing sticks</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Anyone managing chronic conditions alongside neurodivergence</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">People in or recovering from burnout</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Those with PDA profiles where standard productivity advice backfires</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Need Executive Function Support?"
        description="Whether you need OT assessment, Resistance Breaker sessions, or both — we can help figure out the right fit."
        primaryCTA={{ label: "Make a Referral", href: "/contact" }}
        secondaryCTA={{ label: "Learn More About EF", href: "/learn/executive-function-complex-health" }}
      />
    </>
  );
}
