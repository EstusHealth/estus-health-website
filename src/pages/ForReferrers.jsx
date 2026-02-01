import { Section, Card, CardContent, Button, Badge } from '../components/ui';
import { ArrowRight, CheckCircle, FileText, Clock, DollarSign } from 'lucide-react';

export default function ForReferrers() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 grain-overlay border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
              For Support Coordinators & Referrers
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Everything You Need to Refer
            </h1>
            <p className="text-foreground/70 leading-relaxed">
              Clear communication, practical recommendations, and reports that translate into 
              action. We make your job easier — and we're upfront about what we do well.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <Section className="bg-card/50">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg mb-2">NDIS Registered</h3>
            <p className="text-foreground/70 text-sm">
              We accept plan-managed and self-managed NDIS funding. Agency-managed on request.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg mb-2">Response Time</h3>
            <p className="text-foreground/70 text-sm">
              We respond to referrals within 2-3 business days with availability and next steps.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg mb-2">Clear Reporting</h3>
            <p className="text-foreground/70 text-sm">
              Progress reports, session notes, and clear communication. No chasing us for updates.
            </p>
          </Card>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">Who We Work With Best</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We specialise in neurodivergent clients who haven't had success with traditional 
            approaches. If you have a participant who:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Has a PDA profile or demand avoidance patterns</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Hasn't engaged well with previous OT or therapy</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Is autistic and needs neuroaffirming support</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Struggles with executive function alongside chronic conditions</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Would benefit from gaming-informed approaches</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Needs practical support with daily living, not just assessment</span>
            </div>
          </div>
          <p className="text-foreground/70 mt-6">
            ...we're likely a good fit.
          </p>
        </div>
      </Section>

      {/* Services & Rates */}
      <Section className="bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">Services & NDIS Line Items</h2>
          
          <div className="space-y-4">
            <Card className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg">Occupational Therapy</h3>
                  <p className="text-foreground/70 text-sm">Assessment, intervention, capacity building</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-primary text-xl">$193.99/hr</p>
                  <p className="text-foreground/60 text-xs">Line item: 15_054_0128_1_3</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg">Resistance Breaker (Support Worker)</h3>
                  <p className="text-foreground/70 text-sm">Body doubling, task support, executive function help</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-primary text-xl">$67.10/hr</p>
                  <p className="text-foreground/60 text-xs">Line item: 01_011_0107_1_1</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg">Reports & Assessments</h3>
                  <p className="text-foreground/70 text-sm">Functional capacity, NDIS reports, recommendations</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-primary text-xl">$193.99/hr</p>
                  <p className="text-foreground/60 text-xs">OT rate applies</p>
                </div>
              </div>
            </Card>
          </div>

          <p className="text-foreground/60 text-sm mt-6">
            Travel charges may apply for in-person sessions outside central Perth. 
            Telehealth is available Australia-wide at the same rates.
          </p>
        </div>
      </Section>

      {/* What to Include */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">What to Include in a Referral</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The more context you can provide, the faster we can match the participant with 
            the right clinician and approach. Helpful information includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-display text-lg text-primary">Essential</h3>
              <ul className="space-y-1 text-foreground/70 text-sm">
                <li>• Participant name and contact details</li>
                <li>• Your contact details</li>
                <li>• Funding type and plan dates</li>
                <li>• What they're looking for (OT, support, assessment)</li>
                <li>• Location / telehealth preference</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-lg text-primary">Helpful</h3>
              <ul className="space-y-1 text-foreground/70 text-sm">
                <li>• Relevant diagnoses</li>
                <li>• Previous therapy / what hasn't worked</li>
                <li>• Main goals or concerns</li>
                <li>• Communication preferences</li>
                <li>• Any existing reports we should see</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4">
            Ready to Make a Referral?
          </h2>
          <p className="text-foreground/70 mb-8">
            Send through the details and we'll be in touch within 2-3 business days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Make a Referral
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button href="mailto:referrals@estushealth.com" variant="outline" size="lg">
              Email Us Directly
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
