import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  ClipboardList,
  Moon,
  MessageCircle,
  Car,
  Gamepad2,
  ArrowRight,
  Play,
  ExternalLink,
  Monitor,
  Users,
} from 'lucide-react';
import { Section, Button, ProcessStep } from '../components/ui';
import TeamSpotlight from '../components/TeamSpotlight';

// ─── Static data ───────────────────────────────────────────────────────────────

const STATS = [
  { value: '3', label: 'Specialist clinicians' },
  { value: '1,100+', label: 'Sessions delivered' },
  { value: 'AU-wide', label: 'Telehealth available' },
  { value: 'NDIS', label: 'Medicare + Private' },
];

const TEAM = [
  {
    name: 'Liam Fagan',
    role: 'Founder. Occupational therapist. Driving assessor. Top-four world speedrun ranking.',
    imageSrc: '/team-liam.jpg',
    initials: 'LF',
    photoPosition: 'left',
    personalParagraph:
      "Liam came to OT through accounting, finance, and library sciences before realising the thing he kept gravitating toward was helping people build systems that work for their brains. Being diagnosed autistic later in life reshaped everything. His sessions are direct, practical, and built around your real life, not textbook goals. If gaming is your thing, he'll use it. If spreadsheets are your thing, he'll use those too.",
    accentPills: ['PDA profiles', 'Gaming-informed therapy', 'Driving OT'],
    neutralPills: ['Executive function', 'Late diagnosis', 'Complex health'],
    actionLink: {
      text: 'Currently focused on driving OT certification. For therapy, book with Nik or Nam below.',
    },
  },
  {
    name: 'Nam',
    role: 'Occupational therapist. Clinical lead, gaming and anime-informed therapy. Multilingual.',
    imageSrc: '/team-nam.jpg',
    initials: 'N',
    photoPosition: 'right',
    personalParagraph:
      "Nam specialises in working with autistic youth and young adults through the things they already care about. Anime, gaming, and storytelling aren't rewards or bribes in his sessions. They're the medium. He understands that interests aren't just hobbies. They're windows into how someone thinks, what they value, and where they feel most themselves.",
    accentPills: ['Anime-informed therapy', 'Gaming-informed therapy', 'Youth and young adults'],
    neutralPills: ['Screen and gaming transitions', 'Daily living independence', 'Minecraft program'],
    actionLink: {
      text: 'Book a free 15 with Nam',
      href: 'https://calendar.app.google/vGXRQqSbPwSXsY8q9',
    },
  },
  {
    name: 'Nik',
    role: 'Occupational therapist. Clinical lead, executive function. Speaks Hindi, Gujarati, English, and Sinti.',
    imageSrc: '/team-nik.jpg',
    initials: 'NK',
    photoPosition: 'left',
    personalParagraph:
      "Nik turned down a place in medical school because he realised he didn't just want to treat illness. He wanted to improve the quality of life people actually live. He brings a gaming-informed, identity-respecting lens to his work, particularly with high-masking people who've spent years being told they're fine. If you've been dismissed before and need someone who leads with curiosity instead of labels, that's where he comes in.",
    accentPills: ['Executive function', 'ADHD', 'Adolescents and adults'],
    neutralPills: ['Sleep', 'Sensory profiles', 'Hypermobility and pain'],
    actionLink: {
      text: 'Book a free 15 with Nik',
      href: 'https://calendar.app.google/iLxEVkhaRCFEhsSC8',
    },
  },
];

const SERVICES = [
  {
    icon: Brain,
    title: 'Occupational therapy',
    description:
      'Functional assessment, goal setting, and intervention that respects your autonomy and works with your nervous system.',
    href: '/services/occupational-therapy',
  },
  {
    icon: ClipboardList,
    title: 'Assessments and reports',
    description:
      'Functional capacity assessments, NDIS reports, and documentation that translates into meaningful action.',
    href: '/services/assessments-reports',
  },
  {
    icon: Moon,
    title: 'Sleep program',
    description:
      "A structured, evidence-based approach to sleep that starts with understanding your chronotype, not just telling you to put your phone down.",
    href: '/services/sleep-program',
  },
  {
    icon: MessageCircle,
    title: 'Drop-in sessions',
    description:
      "Free 15-minute calls. No referral needed. Ask a question, get clarity, decide if we're the right fit.",
    href: '/contact',
  },
  {
    icon: Car,
    title: 'Driving OT',
    description:
      'On-road and off-road assessment for people with conditions that affect driving. Perth-based, Flinders-certified.',
    href: '/services/driving-ot',
  },
  {
    icon: Gamepad2,
    title: 'Gaming-informed therapy',
    description: 'Therapy through a channel that actually works. We meet people in the games they love.',
    href: '/services/gaming-informed-therapy',
    accent: true,
  },
];

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Book a free 15-minute call',
    description:
      "Pick the clinician who fits. No referral needed. No commitment. Just a conversation to see if we're the right match.",
  },
  {
    number: '02',
    title: 'We build your plan together',
    description:
      'Goals that make sense for your actual life. Session format, frequency, and focus areas designed around you.',
  },
  {
    number: '03',
    title: 'Start sessions',
    description:
      "Telehealth or in-person in Perth. NDIS plan-managed, self-managed, Medicare, or private. We'll sort the admin.",
  },
];

const FRICTION_PILLS = [
  'No referral needed',
  'NDIS + Medicare welcome',
  'Telehealth Australia-wide',
  "New to therapy? That's fine.",
];

const INSTAGRAM_PLACEHOLDERS = [
  {
    tag: 'Gaming-informed',
    caption: 'Why the controller belongs in the clinic room. A thread on gaming as a therapeutic medium.',
  },
  {
    tag: 'PDA explainer',
    caption: 'What is PDA and why does it matter for occupational therapy? Our clinicians explain.',
  },
  {
    tag: 'Behind the scenes',
    caption: 'A look at how we build sessions around what actually matters to each person.',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const scrollToTeam = (e) => {
    e.preventDefault();
    document.getElementById('team-spotlights')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Estus Health | Neuroaffirming Occupational Therapy Perth</title>
        <meta
          name="description"
          content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estushealth.com/" />
        <meta property="og:title" content="Estus Health | Neuroaffirming Occupational Therapy Perth" />
        <meta
          property="og:description"
          content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide."
        />
        <meta property="og:image" content="https://estushealth.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Estus Health - Neuroaffirming and Gaming-Informed OT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estus Health | Neuroaffirming Occupational Therapy Perth" />
        <meta
          name="twitter:description"
          content="Neuroaffirming occupational therapy for autistic adults, teens, and people with PDA profiles. Perth and telehealth Australia-wide."
        />
        <meta name="twitter:image" content="https://estushealth.com/og-image.png" />
        <script type="application/ld+json">
          {`{
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
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "08:00",
              "closes": "19:00"
            }]
          }`}
        </script>
      </Helmet>

      {/* ── 01 HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 grain-overlay">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
              NEUROAFFIRMING OCCUPATIONAL THERAPY · PERTH + TELEHEALTH
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-none mb-6">
              Finally, OTs who
              <br />
              <span className="text-gradient-accent">actually get it.</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl italic text-foreground/80 mb-6">
              A small team of neurodivergent clinicians who build sessions around how your brain actually works.
            </p>
            <p className="text-lg text-foreground/70 max-w-2xl mb-8 leading-relaxed">
              You shouldn't have to explain what masking is, why eye contact is hard, or that your PDA isn't
              laziness. We already know. Because most of us have been on the other side of that conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Book a free 15-minute call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToTeam}>
                Meet the team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 TRUST BAR ────────────────────────────────────────────────────── */}
      <div className="bg-card border-y border-border py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display text-gradient-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wide font-display">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 03 TEAM SPOTLIGHTS ──────────────────────────────────────────────── */}
      <Section id="team-spotlights">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">YOUR CLINICIANS</p>
          <h2 className="text-2xl md:text-4xl font-display mb-4">Real people. Real specialisms.</h2>
          <p className="font-serif italic text-foreground/70 text-lg">
            Every clinician here chose this work because it matters to them.
          </p>
        </div>
        <div className="space-y-8">
          {TEAM.map((member) => (
            <TeamSpotlight key={member.name} {...member} />
          ))}
        </div>
      </Section>

      {/* ── 04 SERVICES GRID ────────────────────────────────────────────────── */}
      <Section className="bg-card border-y border-border">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">WHAT WE DO</p>
          <h2 className="text-2xl md:text-4xl font-display mb-4">Built around how your brain works.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`bg-card rounded-lg border shadow-md transition-all duration-300 hover:scale-[1.02] p-6 flex flex-col ${
                  svc.accent ? 'border-primary/20' : 'border-border'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{svc.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1 mb-4">
                  {svc.description}
                </p>
                <Link
                  to={svc.href}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 05 GAMING-INFORMED CALLOUT ──────────────────────────────────────── */}
      <Section>
        <div className="bg-primary/5 border border-primary/15 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] gap-10 items-center">
            <div>
              <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
                WHAT MAKES US DIFFERENT
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                The controller belongs in the clinic room.
              </h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed mb-6">
                <p>
                  Most OT practices see gaming as the problem. We see it as the solution. Gaming-informed
                  therapy uses the games your child (or you) already loves as the therapeutic medium. Not as
                  a reward. Not as a bribe. As the actual work.
                </p>
                <p>
                  Our clinicians don't just understand games from a textbook. They play them. They compete in
                  them. They've built Minecraft servers, run Discord communities, and held world rankings.
                </p>
              </div>
              <Button to="/services/gaming-informed-therapy" variant="outline" size="lg">
                Learn how it works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="rounded-lg bg-secondary/50 flex items-center justify-center p-10 min-h-[180px]">
              <div className="flex gap-6 text-primary/40">
                <Gamepad2 className="w-10 h-10" />
                <Monitor className="w-10 h-10" />
                <Users className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 06 INSTAGRAM FEED ───────────────────────────────────────────────── */}
      <Section className="bg-card border-y border-border">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
            FROM THE ESTUS FEED
          </p>
          <h2 className="text-2xl md:text-4xl font-display">See how we work.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {INSTAGRAM_PLACEHOLDERS.map((post) => (
            <div key={post.tag} className="rounded-lg overflow-hidden border border-border">
              <div className="aspect-square bg-secondary flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Play className="w-6 h-6 text-primary ml-0.5" />
                </div>
              </div>
              <div className="p-4 bg-secondary">
                <span className="text-xs font-display uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block mb-2">
                  {post.tag}
                </span>
                <p className="text-sm text-foreground/60 leading-snug">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/estus_health/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
          >
            Follow @estus_health on Instagram <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Section>

      {/* ── 07 HOW IT WORKS ─────────────────────────────────────────────────── */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">GETTING STARTED</p>
          <h2 className="text-2xl md:text-4xl font-display">Three steps. No hoops.</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-8 mb-10">
          {HOW_IT_WORKS.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {FRICTION_PILLS.map((pill) => (
            <span
              key={pill}
              className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/60 border border-border"
            >
              {pill}
            </span>
          ))}
        </div>
      </Section>

      {/* ── 08 CTA BANNER ───────────────────────────────────────────────────── */}
      <Section className="bg-card border-y border-border">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-display mb-4">You deserve an OT who gets it.</h2>
          <p className="text-foreground/70 mb-8">
            No referral needed. No waitlist for discovery calls. Book a free 15-minute conversation with Nik
            or Nam and find out if we're the right fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <Button to="/contact" size="lg">
              Book a free call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Make a referral
            </Button>
          </div>
          <Link
            to="/about/approach"
            className="text-sm text-foreground/50 hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            or learn more about our approach <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </Section>
    </>
  );
}
