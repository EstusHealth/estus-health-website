import { Section, Card, CardContent, Button, CTABanner } from '../../components/ui';
import { Gamepad2, Users, Shield, Lock, CheckCircle, Brain, Target } from 'lucide-react';

export default function MinecraftProgram() {
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
              Minecraft Program
            </h1>
            <p className="font-serif text-xl text-foreground/80 italic mb-6">
              A structured digital environment for skill-building, leadership, and participation
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Minecraft is one of the most widely used digital environments by young people today. 
              For many of our clients, it is already a place where communication, problem-solving, 
              persistence, and social interaction naturally occur.
            </p>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-display mb-6">What This Is</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This program uses a <strong>private Minecraft SMP (Survival Multiplayer) server</strong> as 
                a structured, clinician-informed environment to support functional skill development 
                and participation.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our Minecraft program provides <strong>free access</strong> to a moderated SMP server 
                for <strong>current clients</strong>. It is not a standalone therapy service and is 
                not open to the public.
              </p>
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/90">
                  <strong>Safe & Intentional:</strong> A digital space designed for practicing social 
                  interaction, collaborative problem-solving, and autonomy within clear boundaries.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Card className="p-5">
                <h3 className="font-display text-lg mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Structured Environment
                </h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Private and invitation-only
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Moderated by staff
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Clear rules, roles, and expectations
                  </li>
                </ul>
              </Card>

              <Card className="p-5">
                <h3 className="font-display text-lg mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Psychological Safety
                </h3>
                <p className="text-sm text-foreground/70">
                  Rather than being purely recreational, the environment is structured to support 
                  predictability, cooperative play, and meaningful participation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">Leadership & Participation</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            A key part of the program is a <strong>client-led leadership pathway</strong>. 
            Some current clients are actively participating in a leadership and moderation program, 
            creating real opportunities to practice responsibility, perspective-taking, and 
            communication under pressure.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg mb-2">What Leaders Do</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Help shape server environments</li>
                <li>• Contribute to event planning</li>
                <li>• Support community norms and rules</li>
                <li>• Assist with peer moderation under guidance</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg mb-2">Skills Practiced</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Responsibility & accountability</li>
                <li>• Boundary-setting</li>
                <li>• Conflict resolution</li>
                <li>• Leadership roles are supported, not assumed</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Minecraft */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-6">Why Minecraft?</h2>
          <div className="prose prose-invert max-w-none text-foreground/80">
            <p className="leading-relaxed mb-6">
              For many young people, Minecraft is familiar, motivating, social, and flexible. 
              Using a digital environment that clients are already engaged in allows skill 
              development to occur <strong>without forcing artificial tasks</strong> or unfamiliar settings.
            </p>
            <p className="leading-relaxed mb-8">
              This aligns with an environmental approach to participation: rather than trying to 
              change the person in isolation, we focus on <strong>shaping the environment</strong> in 
              which skills are expressed.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
            <h3 className="font-display text-xl mb-4">Who This Is For</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Current clients only</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Primarily youth and young people already engaged in therapy</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Access is considered on an individual basis depending on suitability, goals, and readiness</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Important Notes */}
      <Section className="bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-display mb-6 text-foreground/60 uppercase tracking-widest">Important Notes</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex gap-4">
               <div className="w-1.5 h-full bg-primary/30 rounded-full" />
               <div>
                 <h4 className="font-bold text-foreground mb-1">Not Therapy Replacement</h4>
                 <p className="text-sm text-foreground/70">This is a supportive environment, not a replacement for clinical therapy sessions.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-1.5 h-full bg-primary/30 rounded-full" />
               <div>
                 <h4 className="font-bold text-foreground mb-1">Not Public</h4>
                 <p className="text-sm text-foreground/70">This is not an open or public server. It is exclusively for current Estus Health clients.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-1.5 h-full bg-primary/30 rounded-full" />
               <div>
                 <h4 className="font-bold text-foreground mb-1">Moderated</h4>
                 <p className="text-sm text-foreground/70">Participation does not involve unsupervised or unmoderated chat spaces.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-1.5 h-full bg-primary/30 rounded-full" />
               <div>
                 <h4 className="font-bold text-foreground mb-1">Skill Focused</h4>
                 <p className="text-sm text-foreground/70">The server exists to support real-world skill development, not just competitive gaming.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Interested in Joining?"
        description="If you are a current client or caregiver and would like to know whether this environment is appropriate, this can be discussed as part of ongoing therapy."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
