import { Info, ClipboardList, Users, MessageCircle } from 'lucide-react';
import { Section, Card, CardContent } from './ui';

const useCases = [
  {
    icon: Info,
    title: 'Quick questions',
    copy:
      "Not sure if OT is the right fit? Ask. We'd rather spend 15 minutes pointing you somewhere useful than have you go through a full intake that isn't right for you.",
  },
  {
    icon: ClipboardList,
    title: 'Assessment guidance',
    copy:
      "Been told you need a functional assessment or NDIS access report, but not sure what that actually involves? Thinking about sleep, sensory, or executive function but don't know where to begin? We can walk you through your options before you commit to anything.",
    tags: [
      'Functional assessments',
      'NDIS access',
      'Sleep',
      'Sensory',
      'Executive function',
    ],
  },
  {
    icon: Users,
    title: 'Parent consults',
    copy:
      "Something's going on with your child and you're not sure where to start. We can help you understand what you're seeing and what, if anything, to do next.",
  },
  {
    icon: MessageCircle,
    title: 'Discovery calls',
    copy:
      "Ready to start but want to talk to someone first? This is the call. No intake forms before you've decided we're a good fit. Just a conversation.",
  },
];

export default function Free15Section() {
  return (
    <Section className="!pb-12 lg:!pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Intro block */}
        <div className="max-w-3xl">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-5">
            Free 15-Minute Sessions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.05] mb-6">
            Some questions don't need
            <br />
            <span className="text-gradient-accent">A full assessment</span>
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
            So we made the first 15 minutes free for everyone.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 py-2 mb-8">
            <p className="font-serif italic text-base md:text-lg text-foreground/80 leading-relaxed">
              We kept noticing the same thing. By the time referrals were in,
              service agreements signed, and admin cleared, the original
              question had sat unanswered for weeks. Sometimes longer. And the
              thing that brought someone to us had often gotten significantly
              worse. A lot of it could have been sorted in a five-minute
              conversation. So we stopped making people wait for that.
            </p>
          </blockquote>
          <p className="text-foreground/80 leading-relaxed max-w-2xl">
            One booking system. Four reasons to use it. No referral needed, no
            obligation to continue. Just a direct line to an OT who actually
            understands your situation.
          </p>
        </div>

        {/* Four use-case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {useCases.map(({ icon: Icon, title, copy, tags }) => (
            <Card key={title} hover className="h-full">
              <CardContent className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg mb-3">{title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {copy}
                </p>
                {tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary text-xs font-display uppercase tracking-wide rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
