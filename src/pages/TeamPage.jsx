import { useState } from 'react';
import { Section, Hero, Badge, Button, CTABanner } from '../components/ui';
import { ArrowRight, ChevronDown } from 'lucide-react';

const CLINICIANS = [
  {
    id: 'nik',
    name: 'Nik',
    initials: 'NK',
    role: 'Occupational Therapist',
    pronouns: 'he/him',
    clinicalLead: 'Executive Function & Goal Achievement',
    livedExperience: 'ADHD, diagnosed',
    availability: {
      accepting: true,
      note: 'Accepting new clients (children, adolescents & adults)',
    },
    accentColor: '30 30% 50%',
    bio: "I moved to Australia from India six years ago and have called it home since. I speak Hindi, Gujarati, English, and Sinti. I turned down a place in medical school because I realised I didn't just want to treat illness. I wanted to improve the quality of life people actually live. We're here for a short time, so it should mean something.",
    approach: "I bring a gaming-informed, identity-respecting lens to my work, particularly with high-masking, high-functioning people who've spent years being told they're fine. I don't just accommodate neurodivergence. I work from within it. If you've been dismissed before and need someone who leads with curiosity instead of labels, that's where I come in.",
    personalStuff: [
      'Currently deep into The Finals, and always up for learning a new game with clients.',
      'I play Minecraft, Dead by Daylight, and Rocket League (badly, but my clients love teaching me tricks).',
      'Catan is my all-time favourite board game. Love tabletop games in general.',
      'Anything related to fitness, macros, nutrition, and supplements. I love the science of how bodies work.',
      'Lifelong learner. I experiment on myself first before recommending anything.',
      'Big into tech, AI, and coding outside of clinical work.',
    ],
    worksWith: [
      { label: 'ADHD', category: 'presentation' },
      { label: 'Executive Function', category: 'focus-area' },
      { label: 'Task Initiation', category: 'focus-area' },
      { label: 'Goal Achievement', category: 'focus-area' },
      { label: 'High Masking', category: 'presentation' },
      { label: 'Gaming-Informed Therapy', category: 'modality' },
      { label: 'Culturally Sensitive', category: 'modality' },
    ],
    cta: { label: 'Book a Discovery Call with Nik', to: '/contact' },
    redirectNote: null,
  },
  {
    id: 'nam',
    name: 'Nam',
    initials: 'NL',
    role: 'Occupational Therapist',
    pronouns: 'he/him',
    clinicalLead: 'Sensory Profiles & Late-Diagnosed Adults',
    livedExperience: 'ADHD, late-diagnosed',
    availability: {
      accepting: true,
      note: 'Accepting new clients (children, adolescents & adults)',
    },
    accentColor: '20 35% 40%',
    bio: "I was only diagnosed with ADHD last year, and working through what that means has been one of the most important experiences of my life. That process shapes how I show up for my clients. I know what it's like to suddenly reframe your entire history through a new lens, and I bring that understanding into every session.",
    approach: "I'm friendly, collaborative, and genuinely interested in the occupations that matter to you. I do thorough sensory profiling and then apply it to the real environments where you're struggling, whether that's a busy office, a classroom, or your own home. I also use anime and storytelling as therapeutic tools, because the best lessons often come from characters we connect with.",
    personalStuff: [
      'Anime fan. I use storytelling from anime to explore real-life lessons and situations with clients.',
      'Keen sportsperson. Futsal, gym, and currently training for a half marathon.',
      'PC and Xbox gamer. Minecraft, Roblox, Sea of Thieves, Repo, and always open to co-op.',
      'Currently building a new PC (with a wood grain case, naturally).',
      'I believe recovery is part of the work, not separate from it.',
    ],
    worksWith: [
      { label: 'ADHD', category: 'presentation' },
      { label: 'Late Diagnosis', category: 'focus-area' },
      { label: 'Sensory Profiles', category: 'focus-area' },
      { label: 'Gaming-Informed Therapy', category: 'modality' },
      { label: 'Paediatrics', category: 'age-group' },
      { label: 'Young Adults', category: 'age-group' },
      { label: 'Anime-Informed', category: 'modality' },
    ],
    cta: { label: 'Book a Discovery Call with Nam', to: '/contact' },
    redirectNote: null,
  },
  {
    id: 'liam',
    name: 'Liam Fagan',
    initials: 'LF',
    role: 'Founder & Occupational Therapist',
    pronouns: 'he/him',
    clinicalLead: 'Driving OT & Gaming-Informed Therapy',
    livedExperience: 'Autistic, late-diagnosed',
    availability: {
      accepting: false,
      note: 'Currently focused on driving OT certification and not accepting new therapy referrals. For ongoing therapy, book a discovery call with Nik or Nam.',
    },
    accentColor: '25 40% 45%',
    bio: "I came to occupational therapy through an unusual path. I started in accounting and finance, worked in library sciences, and eventually realised that the thing I kept gravitating toward was helping people build systems that actually work for their brains. Being diagnosed autistic later in life reshaped everything I thought I understood about myself, and that experience is at the core of how I practise.",
    approach: "I'm direct, practical, and genuinely interested in what makes you tick. My sessions are built around your real life, not textbook goals. If gaming is your thing, we'll use it. If spreadsheets are your thing, we'll use those too.",
    personalStuff: [
      "I hold a top-four world record speedrun on two maps in Tony Hawk's Pro Skater. 20+ years of competitive gaming.",
      'I liked Dark Souls so much that I named this company after the healing item in it.',
      'I find spreadsheets relaxing and do budgeting for fun.',
      "Deeply interested in machine learning, AI, and how they'll reshape healthcare.",
    ],
    worksWith: [
      { label: 'Autism', category: 'presentation' },
      { label: 'PDA Profiles', category: 'presentation' },
      { label: 'Executive Function', category: 'focus-area' },
      { label: 'Gaming-Informed Therapy', category: 'modality' },
      { label: 'Driving OT', category: 'modality' },
      { label: 'Complex Health', category: 'focus-area' },
      { label: 'Late Diagnosis', category: 'focus-area' },
    ],
    cta: null,
    redirectNote: 'Liam is not currently accepting new therapy referrals. For therapy enquiries, please book a discovery call with Nik or Nam.',
  },
];

function ClinicianCard({ clinician, isExpanded, onToggle }) {
  const firstName = clinician.name.split(' ')[0];

  return (
    <article
      className="bg-card border border-border rounded-lg shadow-md overflow-hidden
                 hover:shadow-[0_0_20px_rgba(139,90,60,0.15)] transition-shadow duration-300"
    >
      {/* Accent line */}
      <div
        className="h-[3px]"
        style={{
          background: `linear-gradient(to right, hsl(${clinician.accentColor}), hsl(var(--primary)))`,
        }}
      />

      <div className="p-6 lg:p-8">
        {/* Collapsed content (always visible) */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, hsl(${clinician.accentColor}), hsl(var(--primary)))`,
            }}
          >
            <span className="text-2xl lg:text-3xl font-display text-white font-bold">
              {clinician.initials}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h2
                  id={`name-${clinician.id}`}
                  className="text-xl lg:text-2xl font-display font-bold"
                >
                  {clinician.name}
                </h2>
                <p className="text-foreground/70 text-sm">{clinician.role}</p>
              </div>
              <Badge variant={clinician.availability.accepting ? 'primary' : 'outline'}>
                {clinician.availability.accepting && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mr-1.5 inline-block" />
                )}
                {clinician.availability.accepting ? 'Accepting Clients' : 'Not Accepting Referrals'}
              </Badge>
            </div>

            <p className="text-xs font-display uppercase tracking-widest text-primary mb-2">
              Clinical Lead: {clinician.clinicalLead}
            </p>

            <p className="text-sm text-foreground/60 mb-2">
              {clinician.availability.note}
            </p>

            <p className="text-sm text-foreground/60 font-serif italic mb-4">
              Lived experience: {clinician.livedExperience}
            </p>

            <p className="text-foreground/80 leading-relaxed">
              {clinician.bio}
            </p>

            {/* Expand toggle */}
            <button
              onClick={onToggle}
              className="flex items-center gap-2 mt-4 text-primary text-sm font-medium
                         hover:text-primary/80 transition-colors focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                         rounded-sm"
              aria-expanded={isExpanded}
              aria-controls={`profile-${clinician.id}`}
            >
              <span>{isExpanded ? 'Show less' : `Read more about ${firstName}`}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Expandable content */}
            <div
              id={`profile-${clinician.id}`}
              role="region"
              aria-labelledby={`name-${clinician.id}`}
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pt-6 space-y-6">
                  {/* Approach */}
                  <div>
                    <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-3">
                      Approach
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {clinician.approach}
                    </p>
                  </div>

                  {/* The personal stuff */}
                  <div>
                    <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-3">
                      The Personal Stuff
                    </h3>
                    <ul className="space-y-2">
                      {clinician.personalStuff.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-foreground/70 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Works with */}
                  <div>
                    <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-3">
                      Works With
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {clinician.worksWith.map((tag, i) => (
                        <Badge key={i} variant="primary">
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA or redirect note */}
                  {clinician.cta ? (
                    <Button to={clinician.cta.to} className="w-full sm:w-auto">
                      {clinician.cta.label}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : clinician.redirectNote ? (
                    <p className="text-foreground/60 text-sm italic border-l-2 border-primary/30 pl-4">
                      {clinician.redirectNote}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamPage() {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCard = (id) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      <Hero
        eyebrow="OUR TEAM"
        title="Real people. Real brains."
        titleAccent="Real experience."
        subtitle="Every therapist here is an OT, an experienced gamer, and has lived experience of neurodivergence."
      />

      {/* Team Photo */}
      <Section className="!pt-0 !pb-12 lg:!pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-md group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] bg-card">
              <img
                src="/team-photo.jpeg"
                alt="The Estus Health Team"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="text-white font-display text-2xl md:text-3xl mb-1 drop-shadow-md">
                  The Estus Health Team
                </h3>
                <p className="text-white/80 font-serif italic text-sm md:text-base drop-shadow-md">
                  Liam, Nam & Nik
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto space-y-8">
          {CLINICIANS.map((clinician) => (
            <ClinicianCard
              key={clinician.id}
              clinician={clinician}
              isExpanded={expandedCards.has(clinician.id)}
              onToggle={() => toggleCard(clinician.id)}
            />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Ready to take the next step?"
        description="Book a free 15-minute discovery call. No referral needed, no commitment. Just a conversation."
        primaryCTA={{ label: 'Book a Discovery Call', href: '/contact' }}
        secondaryCTA={{ label: 'Learn About Our Approach', href: '/about/approach' }}
      />
    </>
  );
}
