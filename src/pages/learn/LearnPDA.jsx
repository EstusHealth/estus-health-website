import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  AlertTriangle,
  Heart,
  CheckCircle,
  XCircle,
  BookOpen
} from 'lucide-react';
import { Section, Card, CardContent, Button, Badge } from '../../components/ui';

export default function LearnPDA() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 grain-overlay border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="primary">Learn</Badge>
              <Badge variant="outline">PDA</Badge>
              <Badge variant="outline">Autism</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Understanding PDA
            </h1>
            <p className="font-serif text-xl text-foreground/80 italic mb-6">
              Pathological Demand Avoidance — what it is, how it shows up, and what actually helps
            </p>
            <p className="text-foreground/70 leading-relaxed">
              PDA is a profile of autism where the nervous system perceives everyday demands as 
              threats. It's not defiance or "bad behaviour." It's a survival response. And what 
              helps isn't more structure — it's less pressure.
            </p>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <Section className="bg-card/50 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/30">
            <CardContent className="p-6 lg:p-8">
              <h2 className="font-display text-lg mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                The Short Version
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                PDA — Pathological Demand Avoidance — is a profile of autism where the nervous 
                system perceives everyday demands as threats. It's not defiance or "bad behaviour." 
                It's a survival response. What helps isn't more structure — it's less pressure.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            
            {/* What is PDA */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                What is PDA?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Pathological Demand Avoidance (PDA) is a profile of autism first described by 
                Elizabeth Newson in the 1980s. The core feature is an anxiety-driven need to 
                avoid demands — not out of defiance or laziness, but because demands feel 
                genuinely threatening to the nervous system.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The word "pathological" is contested — many in the PDA community prefer terms 
                like "Pervasive Drive for Autonomy" or simply "PDA profile." Whatever you call 
                it, the experience is the same: ordinary expectations that most people navigate 
                easily can feel impossible, overwhelming, or even dangerous.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                This isn't about being "oppositional." People with PDA often want to do the 
                thing — they just can't, not when it's framed as a demand. The demand itself 
                triggers a threat response.
              </p>
            </section>

            {/* How PDA Shows Up */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                How PDA Shows Up
              </h2>
              
              <h3 className="font-display text-xl mb-4 text-primary">In Children</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">School refusal</strong> — not "won't go" but genuinely can't. The demand of school attendance triggers overwhelm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Meltdowns over "easy" tasks</strong> — brushing teeth, getting dressed, homework that they clearly know how to do.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Social masking</strong> — appearing to cope in public, then falling apart at home where it feels safe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Role play and fantasy</strong> — using imaginative play to process demands or create control.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Surface sociability</strong> — unlike "classic" autism presentations, PDA children often appear socially engaged but struggle with the hidden rules of interaction.</span>
                </li>
              </ul>

              <h3 className="font-display text-xl mb-4 text-primary">In Adults</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Burnout cycles</strong> — periods of pushing through followed by complete collapse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Employment difficulties</strong> — struggling with workplace demands, hierarchies, and schedules even when the work itself is enjoyable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Relationship strain</strong> — partners, family, and friends not understanding why "simple" requests feel so hard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Avoiding even things you want to do</strong> — the demand itself is the problem, not the activity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Difficulty with self-care</strong> — eating, showering, medical appointments become demands too.</span>
                </li>
              </ul>

              <h3 className="font-display text-xl mb-4 text-primary">The Role of Perceived vs Actual Demands</h3>
              <p className="text-foreground/80 leading-relaxed">
                It's important to understand that PDA responds to perceived demands, not just 
                explicit ones. An internal expectation ("I should really..."), a suggestion 
                framed as helpful, even praise (which can feel like pressure to repeat the 
                performance) — all of these can trigger demand avoidance. The nervous system 
                doesn't distinguish between "you must" and "you could."
              </p>
            </section>

            {/* PDA vs Other Presentations */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                PDA vs Other Presentations
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-display text-foreground">Feature</th>
                      <th className="text-left py-3 px-4 font-display text-foreground">PDA</th>
                      <th className="text-left py-3 px-4 font-display text-foreground">ODD</th>
                      <th className="text-left py-3 pl-4 font-display text-foreground">"Classic" Autism</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Root cause</td>
                      <td className="py-3 px-4">Anxiety / nervous system threat response</td>
                      <td className="py-3 px-4">Often trauma, attachment, or conduct issues</td>
                      <td className="py-3 pl-4">Neurological differences in processing</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Response to demands</td>
                      <td className="py-3 px-4">Avoidance driven by overwhelm</td>
                      <td className="py-3 px-4">Active defiance / oppositional behaviour</td>
                      <td className="py-3 pl-4">May struggle but often responds to structure</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Social presentation</td>
                      <td className="py-3 px-4">Often appears socially engaged (surface level)</td>
                      <td className="py-3 px-4">Varies</td>
                      <td className="py-3 pl-4">May have more obvious social differences</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground">What helps</td>
                      <td className="py-3 px-4">Reducing demands, increasing autonomy</td>
                      <td className="py-3 px-4">Boundaries, consistency, addressing root causes</td>
                      <td className="py-3 pl-4">Often benefits from structure and routine</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-4 border-l-2 border-primary bg-primary/5">
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">Why this matters:</strong> PDA is frequently 
                  misdiagnosed as ODD (Oppositional Defiant Disorder), leading to interventions that 
                  make things worse. Behaviour-focused approaches that rely on consequences, rewards, 
                  and compliance often backfire dramatically with PDA — because the avoidance isn't 
                  a choice. It's a nervous system response.
                </p>
              </Card>
            </section>

            {/* What Helps */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                What Helps
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl mb-3 text-primary">Low-Demand Approaches</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    This doesn't mean "no expectations" — it means reducing unnecessary demands and 
                    being strategic about essential ones. Questions to ask:
                  </p>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Does this actually need to happen right now?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Does it need to happen this way, or is there flexibility?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Who says this is a requirement? (Is it actually, or is it a social expectation?)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>What's the cost of not doing this vs the cost of forcing it?</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-xl mb-3 text-primary">Autonomy and Collaboration Over Compliance</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    PDA responds well to feeling in control. This might look like:
                  </p>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Offering genuine choices (not "do this or else")</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Negotiating rather than directing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Indirect language: "I wonder if..." instead of "You need to..."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Letting the person set the pace where possible</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-xl mb-3 text-primary">Why Traditional Behaviour Strategies Backfire</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Approaches that work for other presentations often make PDA worse:
                  </p>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Reward charts</strong> — turn activities into demands with performance pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Consequences</strong> — escalate anxiety without addressing the root cause</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Countdowns and timers</strong> — create urgency that increases threat response</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Praise</strong> — can feel like pressure to repeat performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Rigid routines</strong> — become demands themselves</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl mb-3 text-primary">The Importance of Nervous System Regulation</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    At its core, PDA is about a nervous system that's easily triggered into 
                    fight/flight/freeze by demands. Helping someone with PDA means helping their 
                    nervous system feel safe. This might include sensory accommodations, reducing 
                    environmental stressors, building in recovery time, and prioritising co-regulation 
                    (calm presence) over correction.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Work With PDA */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                How We Work With PDA at Estus Health
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our entire approach is built around what actually helps PDA — not what the 
                textbooks say should work. This means:
              </p>
              
              <div className="grid gap-4">
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">"We don't force change. We walk alongside."</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Our philosophy isn't about compliance or pushing through. It's about reducing 
                    pressure until the next step feels possible — however long that takes.
                  </p>
                </Card>
                
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Gaming-Informed Therapy as a Low-Demand Entry Point</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Traditional therapy is full of demands — sit here, talk about this, do this 
                    exercise. Gaming-informed therapy meets people in a space that already feels 
                    safe, where engagement happens naturally rather than being demanded.
                  </p>
                </Card>
                
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Resistance Breaker Support</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Our trained support workers specialise in that moment where knowing and doing 
                    don't connect. Through body doubling, co-regulation, and gentle presence, they 
                    help bridge the gap — without adding pressure.
                  </p>
                </Card>
                
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Lived Experience on the Team</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Several of our team members have PDA profiles themselves, or parent children 
                    with PDA. We understand this from the inside — not just from textbooks.
                  </p>
                </Card>
              </div>
            </section>

            {/* Further Learning */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                Further Learning
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For more information about PDA, we recommend:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">PDA Society</strong> (pdasociety.org.uk) — the leading resource for PDA information and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">At Peace Parents</strong> — resources for low-demand parenting</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">"The Family Experience of PDA"</strong> by Eliza Fricker — an accessible, illustrated guide</span>
                </li>
              </ul>
            </section>

          </article>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4">
            Looking for PDA-Informed Support?
          </h2>
          <p className="text-foreground/70 mb-8">
            We understand why traditional approaches haven't worked. Our team specialises 
            in support that actually helps — for PDA children, teens, and adults.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Make a Referral
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button to="/services/gaming-informed-therapy" variant="outline" size="lg">
              Gaming-Informed Therapy
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section>
        <h2 className="text-xl font-display mb-6">Related Reading</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card hover>
            <CardContent>
              <h3 className="font-display text-lg mb-2">Late Autism Diagnosis</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Why autism gets missed and what late diagnosis means for understanding yourself.
              </p>
              <Link 
                to="/learn/late-autism-diagnosis" 
                className="inline-flex items-center text-primary text-sm font-medium"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
          <Card hover>
            <CardContent>
              <h3 className="font-display text-lg mb-2">Executive Function & Complex Health</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Managing POTS, hEDS, MCAS, or ME/CFS alongside neurodivergence.
              </p>
              <Link 
                to="/learn/executive-function-complex-health" 
                className="inline-flex items-center text-primary text-sm font-medium"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}>
                  <h3 className="font-display text-xl mb-3 text-primary">Why Traditional Behaviour Strategies Backfire</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Approaches that work for other children or other autism presentations often 
                    make PDA worse:
                  </p>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Reward charts</strong> — create a demand to earn the reward</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Consequences</strong> — increase anxiety and threat response</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Firm boundaries without flexibility</strong> — trigger fight/flight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Praise for compliance</strong> — can feel like pressure to repeat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Rigid routines</strong> — become demands in themselves</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl mb-3 text-primary">Nervous System Regulation</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Because PDA is fundamentally an anxiety-driven response, supporting nervous 
                    system regulation is key. This might include sensory supports, co-regulation 
                    (being calm alongside someone rather than trying to make them calm), reducing 
                    environmental stressors, and building in genuine rest — not as a reward, but 
                    as a baseline need.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Work With PDA */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                How We Work With PDA at Estus Health
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our entire approach is built around understanding PDA — not as an afterthought, 
                but as a core consideration. Many of our team have lived experience of PDA, and 
                all of our interventions are designed to work with the nervous system, not against it.
              </p>
              
              <div className="grid gap-4">
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Our Philosophy</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    "We don't force change. We walk alongside until the next step feels possible." 
                    This isn't just a tagline — it's how we structure every session.
                  </p>
                </Card>
                
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Gaming-Informed Therapy</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Gaming offers a low-demand entry point where the person has control. We meet 
                    people in the spaces where they already feel safe — and work from there.
                  </p>
                </Card>
                
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Resistance Breaker Support</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Our Resistance Breakers specialise in that moment of paralysis — gently 
                    helping bridge the gap between wanting to do something and being able to 
                    start. No pressure. No judgement. Just presence.
                  </p>
                </Card>
                
                <Card className="p-4 border-primary/20">
                  <h3 className="font-display text-lg mb-2">Flexible, Adaptive Sessions</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    If today isn't a therapy day, it isn't a therapy day. We adapt to capacity 
                    rather than forcing a structure that increases demand.
                  </p>
                </Card>
              </div>
            </section>

            {/* Further Learning */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                Further Learning
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We recommend these resources for deeper understanding:
              </p>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">PDA Society</strong> — pdasociety.org.uk — research, resources, and community</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">"Understanding Pathological Demand Avoidance Syndrome in Children"</strong> by Phil Christie et al.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">"The Family Experience of PDA"</strong> by Eliza Fricker</span>
                </li>
              </ul>
            </section>

          </article>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4">
            Looking for PDA-Informed Support?
          </h2>
          <p className="text-foreground/70 mb-8">
            We specialise in working with PDA profiles — for children, teens, and adults. 
            Our approach is built from the ground up to work with demand avoidance, not against it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Make a Referral
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button to="/services/gaming-informed-therapy" variant="outline" size="lg">
              Gaming-Informed Therapy
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section>
        <h2 className="text-xl font-display mb-6">Related Reading</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card hover>
            <CardContent>
              <h3 className="font-display text-lg mb-2">Late Autism Diagnosis</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Why autism gets missed and what it means to be diagnosed as an adult.
              </p>
              <Link 
                to="/learn/late-autism-diagnosis" 
                className="inline-flex items-center text-primary text-sm font-medium"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
          <Card hover>
            <CardContent>
              <h3 className="font-display text-lg mb-2">Executive Function & Complex Health</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Managing POTS, hEDS, MCAS, or ME/CFS alongside neurodivergence.
              </p>
              <Link 
                to="/learn/executive-function-complex-health" 
                className="inline-flex items-center text-primary text-sm font-medium"
              >
                Read guide <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
