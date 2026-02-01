import { Section, Card, CardContent, Button, Badge } from '../components/ui';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 grain-overlay border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Make a Referral
            </h1>
            <p className="text-foreground/70 leading-relaxed">
              Whether you're self-referring, a parent, or a support coordinator — we're here 
              to help. Send us the details and we'll be in touch to discuss next steps.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8">
              <h2 className="text-xl font-display mb-6">Referral Information</h2>
              <form className="space-y-6">
                {/* Contact Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">I am a...</label>
                  <div className="flex flex-wrap gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="referrer_type" value="self" className="text-primary" />
                      <span className="text-sm">Self-referral</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="referrer_type" value="parent" className="text-primary" />
                      <span className="text-sm">Parent/Family member</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="referrer_type" value="coordinator" className="text-primary" />
                      <span className="text-sm">Support Coordinator</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="referrer_type" value="other" className="text-primary" />
                      <span className="text-sm">Other professional</span>
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Client's Name (if different)</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <div className="flex flex-wrap gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="location" value="perth" className="text-primary" />
                      <span className="text-sm">Perth (in-person available)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="location" value="wa" className="text-primary" />
                      <span className="text-sm">WA (regional)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="location" value="other" className="text-primary" />
                      <span className="text-sm">Other state (telehealth)</span>
                    </label>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="services" value="ot" className="text-primary rounded" />
                      <span className="text-sm">Occupational Therapy</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="services" value="gaming" className="text-primary rounded" />
                      <span className="text-sm">Gaming-Informed Therapy</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="services" value="ef" className="text-primary rounded" />
                      <span className="text-sm">Executive Function Support / Resistance Breaker</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="services" value="assessment" className="text-primary rounded" />
                      <span className="text-sm">Assessment / Report</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="services" value="unsure" className="text-primary rounded" />
                      <span className="text-sm">Not sure yet</span>
                    </label>
                  </div>
                </div>

                {/* Funding */}
                <div>
                  <label className="block text-sm font-medium mb-2">Funding</label>
                  <div className="flex flex-wrap gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="funding" value="ndis_managed" className="text-primary" />
                      <span className="text-sm">NDIS (plan managed)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="funding" value="ndis_self" className="text-primary" />
                      <span className="text-sm">NDIS (self-managed)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="funding" value="private" className="text-primary" />
                      <span className="text-sm">Private pay</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="funding" value="unsure" className="text-primary" />
                      <span className="text-sm">Not sure</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us a bit about what's going on
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="What's prompting the referral? What are the main challenges? Any relevant diagnoses or history?"
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background placeholder:text-muted-foreground"
                  />
                </div>

                {/* Contact Preference */}
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred contact method</label>
                  <div className="flex flex-wrap gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact_pref" value="email" className="text-primary" />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact_pref" value="phone" className="text-primary" />
                      <span className="text-sm">Phone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact_pref" value="either" className="text-primary" />
                      <span className="text-sm">Either is fine</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Referral
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-display text-lg mb-4">Contact Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:referrals@estushealth.com" className="text-foreground/70 hover:text-primary">
                      referrals@estushealth.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground/70">Perth, Western Australia</p>
                    <p className="text-foreground/70">Telehealth Australia-wide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-foreground/70">Usually within 2-3 business days</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-display text-lg mb-4">Current Availability</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Nik (OT)</span>
                  <Badge variant="primary">Accepting</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nam (OT)</span>
                  <Badge variant="primary">Accepting</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Liam (OT)</span>
                  <Badge variant="outline">Assessments only</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-display text-lg mb-3">For Support Coordinators</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Need more detail for your referral? We have a dedicated page with 
                service agreements, NDIS line items, and everything you need.
              </p>
              <Button to="/for-referrers" variant="outline" className="w-full">
                Referrer Information
              </Button>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
