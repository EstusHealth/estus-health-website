import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  ArrowLeft,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Clock,
  Coffee,
  Brain,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { Section, Card, CardContent, Button } from '../components/ui';

// ─── Quiz questions ──────────────────────────────────────────────────────────

const questions = [
  {
    id: 1,
    question: "If you had no obligations tomorrow, when would you naturally wake up?",
    icon: Sunrise,
    options: [
      { label: "Before 6:00 am", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 1 } },
      { label: "6:00 – 7:30 am", scores: { lion: 2, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "7:30 – 9:00 am", scores: { lion: 0, bear: 2, wolf: 2, dolphin: 2 } },
      { label: "After 9:00 am", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 1 } },
    ],
  },
  {
    id: 2,
    question: "When do you feel most mentally sharp and focused?",
    icon: Brain,
    options: [
      { label: "Early morning (6–9 am)", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 0 } },
      { label: "Mid-morning (9 am – 12 pm)", scores: { lion: 2, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "Afternoon (12–4 pm)", scores: { lion: 0, bear: 2, wolf: 1, dolphin: 2 } },
      { label: "Evening or late at night", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 2 } },
    ],
  },
  {
    id: 3,
    question: "How do you feel within the first 30 minutes of waking up?",
    icon: Coffee,
    options: [
      { label: "Alert and ready to go", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 0 } },
      { label: "A bit groggy, but functional after a few minutes", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "Foggy and slow, need significant warm-up time", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
      { label: "Depends on the day — sometimes fine, sometimes terrible", scores: { lion: 0, bear: 0, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 4,
    question: "If you could choose your ideal bedtime, when would you go to sleep?",
    icon: Moon,
    options: [
      { label: "Before 9:30 pm", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 0 } },
      { label: "9:30 – 11:00 pm", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "11:00 pm – 12:30 am", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
      { label: "After 12:30 am", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 2 } },
    ],
  },
  {
    id: 5,
    question: "How would you describe your energy across the day?",
    icon: Zap,
    options: [
      { label: "High in the morning, fading by evening", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 0 } },
      { label: "Steady through the day with a slight afternoon dip", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 0 } },
      { label: "Low in the morning, building through the day, peaking at night", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 1 } },
      { label: "Unpredictable — it varies a lot day to day", scores: { lion: 0, bear: 1, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 6,
    question: "How easily do you fall asleep at night?",
    icon: Moon,
    options: [
      { label: "Very easily — I'm usually out within minutes", scores: { lion: 3, bear: 2, wolf: 0, dolphin: 0 } },
      { label: "Usually within 15–20 minutes", scores: { lion: 1, bear: 3, wolf: 1, dolphin: 0 } },
      { label: "It takes a while — my mind tends to be active", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 1 } },
      { label: "It's a struggle — I often lie awake or have restless sleep", scores: { lion: 0, bear: 0, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 7,
    question: "How do you feel about early morning commitments (e.g., 7 am meeting)?",
    icon: Clock,
    options: [
      { label: "No problem — I'm already up and productive", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 1 } },
      { label: "Manageable with an alarm, but not ideal", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "Painful — it takes a lot of effort to function", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
      { label: "Depends on how I slept — sometimes okay, sometimes impossible", scores: { lion: 0, bear: 0, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 8,
    question: "When do you prefer to exercise or do physical activity?",
    icon: Zap,
    options: [
      { label: "First thing in the morning", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 0 } },
      { label: "Late morning or lunchtime", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "Afternoon or evening", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
      { label: "Whenever I have the energy — no consistent preference", scores: { lion: 0, bear: 0, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 9,
    question: "How would you describe your sleep quality overall?",
    icon: Moon,
    options: [
      { label: "Deep and restorative — I rarely wake during the night", scores: { lion: 3, bear: 2, wolf: 0, dolphin: 0 } },
      { label: "Generally good — the occasional rough night", scores: { lion: 1, bear: 3, wolf: 1, dolphin: 0 } },
      { label: "Decent once I get to sleep, but getting there is the hard part", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 1 } },
      { label: "Light and easily disrupted — I often feel unrested", scores: { lion: 0, bear: 0, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 10,
    question: "How do you respond to changes in your routine or schedule?",
    icon: Clock,
    options: [
      { label: "I prefer structure and find disruption frustrating", scores: { lion: 3, bear: 1, wolf: 0, dolphin: 1 } },
      { label: "I can adapt fairly easily", scores: { lion: 1, bear: 3, wolf: 1, dolphin: 0 } },
      { label: "I'm naturally flexible — I don't love rigid schedules", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 0 } },
      { label: "I find routine hard to maintain but know I need it", scores: { lion: 0, bear: 0, wolf: 1, dolphin: 3 } },
    ],
  },
  {
    id: 11,
    question: "If you could do your most important creative or thinking work at any time, when would it be?",
    icon: Brain,
    options: [
      { label: "Dawn or very early morning", scores: { lion: 3, bear: 0, wolf: 0, dolphin: 1 } },
      { label: "Mid-morning to early afternoon", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "Late afternoon into the evening", scores: { lion: 0, bear: 1, wolf: 2, dolphin: 1 } },
      { label: "Late at night when everything is quiet", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 2 } },
    ],
  },
  {
    id: 12,
    question: "How would others describe your personality?",
    icon: Sun,
    options: [
      { label: "Driven, disciplined, and goal-oriented", scores: { lion: 3, bear: 0, wolf: 0, dolphin: 1 } },
      { label: "Friendly, steady, and easy-going", scores: { lion: 0, bear: 3, wolf: 0, dolphin: 0 } },
      { label: "Creative, impulsive, and a bit of a night owl", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 1 } },
      { label: "Analytical, cautious, and detail-oriented", scores: { lion: 0, bear: 0, wolf: 0, dolphin: 3 } },
    ],
  },
];

// ─── Chronotype result data ──────────────────────────────────────────────────

const chronotypes = {
  lion: {
    name: "Lion",
    icon: Sunrise,
    tagline: "The Early Riser",
    colour: "text-amber-700",
    colourBg: "bg-amber-700/10",
    colourBorder: "border-amber-700/30",
    summary:
      "Lions wake early and hit peak performance before most people have finished breakfast. Your biological rhythm front-loads energy, focus, and drive into the first half of the day.",
    strengths: [
      "High morning productivity and mental clarity",
      "Natural discipline with routines and structure",
      "Consistent sleep-wake cycles with early bedtimes",
      "Strong executive function during peak hours",
    ],
    challenges: [
      "Energy drops significantly in the afternoon and evening",
      "Social events and late commitments can clash with your rhythm",
      "May push through fatigue signals in the evening",
      "Early wake times can become rigidly entrenched even when rest is needed",
    ],
    sleepTip:
      "Your circadian system is wired to wind down early. Protect your evening transition time — avoid stimulating activities after 8 pm and lean into the natural drop. Fighting it creates the illusion of a 'second wind' that costs you sleep quality.",
  },
  bear: {
    name: "Bear",
    icon: Sun,
    tagline: "The Steady Performer",
    colour: "text-primary",
    colourBg: "bg-primary/10",
    colourBorder: "border-primary/30",
    summary:
      "Bears follow a solar-aligned rhythm that tracks closely with the rise and fall of daylight. This is the most common chronotype. Your energy is steady, your sleep is generally reliable, and you perform well during conventional hours.",
    strengths: [
      "Steady, predictable energy throughout the day",
      "Flexible enough to adapt to most schedules",
      "Generally good sleep quality and duration",
      "Peak cognitive performance mid-morning to early afternoon",
    ],
    challenges: [
      "Afternoon energy dip can impact focus and productivity",
      "May underestimate the impact of poor sleep because baseline is 'okay'",
      "Risk of drifting into irregular patterns without structure",
      "Can mask sleep debt because daytime function stays passable",
    ],
    sleepTip:
      "Your greatest risk isn't dramatic sleep failure — it's gradual erosion. Small compromises (late screens, inconsistent bedtimes, weekend sleep-ins) accumulate into chronic under-performance. Consistency is your highest-leverage tool.",
  },
  wolf: {
    name: "Wolf",
    icon: Sunset,
    tagline: "The Night Thinker",
    colour: "text-indigo-700",
    colourBg: "bg-indigo-700/10",
    colourBorder: "border-indigo-700/30",
    summary:
      "Wolves come alive when the rest of the world slows down. Your circadian rhythm is shifted later — you peak cognitively in the afternoon and evening, and mornings are genuinely difficult, not just inconvenient.",
    strengths: [
      "High creativity and focus in the evening",
      "Naturally suited to deep work when distractions fade",
      "Comfortable with flexible and non-traditional schedules",
      "Often strong lateral thinking and problem-solving ability",
    ],
    challenges: [
      "Morning obligations create ongoing circadian conflict",
      "Sleep onset is naturally late, making early nights difficult",
      "Social and work norms often punish your natural rhythm",
      "Higher risk of sleep deprivation in a 9-to-5 world",
    ],
    sleepTip:
      "The solution isn't forcing yourself into an early schedule. It's building structure around your actual biology. Strategic light exposure in the morning, careful caffeine timing, and a gradual wind-down protocol can shift your window without fighting your wiring.",
  },
  dolphin: {
    name: "Dolphin",
    icon: Moon,
    tagline: "The Light Sleeper",
    colour: "text-teal-700",
    colourBg: "bg-teal-700/10",
    colourBorder: "border-teal-700/30",
    summary:
      "Dolphins are light sleepers with irregular rhythms. Your sleep is easily disrupted, your energy fluctuates, and you may feel like you've never quite figured out a pattern that works. This is especially common in neurodivergent profiles.",
    strengths: [
      "High alertness and environmental awareness",
      "Detail-oriented with strong analytical thinking",
      "Can function across varied schedules when supported",
      "Often highly attuned to sensory input and subtle changes",
    ],
    challenges: [
      "Difficulty falling and staying asleep consistently",
      "Energy levels are unpredictable day to day",
      "Sensory sensitivity can disrupt sleep (light, sound, temperature)",
      "Higher vulnerability to sleep debt and its cognitive effects",
    ],
    sleepTip:
      "Your sleep system needs more scaffolding than most. Environment control (blackout, white noise, temperature regulation), strict wind-down protocols, and sensory management aren't optional — they're foundational. A structured approach makes the biggest difference for dolphins.",
  },
};

// ─── Scoring logic ───────────────────────────────────────────────────────────

function calculateResult(answers) {
  const totals = { lion: 0, bear: 0, wolf: 0, dolphin: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null && questions[questionIndex]) {
      const scores = questions[questionIndex].options[answerIndex].scores;
      Object.keys(scores).forEach((type) => {
        totals[type] += scores[type];
      });
    }
  });

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  return {
    primary: sorted[0][0],
    scores: totals,
    total: sorted[0][1],
  };
}

// ─── Component: Progress bar ─────────────────────────────────────────────────

function ProgressBar({ current, total }) {
  const pct = ((current) / total) * 100;
  return (
    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// ─── Component: Intro screen ─────────────────────────────────────────────────

function QuizIntro({ onStart }) {
  return (
    <section className="relative py-16 lg:py-24 grain-overlay border-b border-border">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
            Sleep Performance
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
            What's Your
            <br />
            <span className="text-gradient-accent">Chronotype?</span>
          </h1>
          <p className="font-serif text-xl text-foreground/80 italic mb-6">
            Your chronotype is your biological preference for when you sleep, wake, and perform at your best.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4 max-w-2xl mx-auto">
            Understanding your chronotype changes how you approach sleep. Instead of fighting
            your biology with generic advice, you can build a schedule and environment that
            works with your natural rhythm.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            This quiz takes about 2 minutes. Answer based on what feels natural to you, not
            what your current schedule demands.
          </p>
          <button
            onClick={onStart}
            className="inline-flex items-center justify-center font-display uppercase tracking-wide transition-all duration-200 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-strong h-12 px-8 text-sm"
          >
            Start the Quiz
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
            {[
              { icon: Clock, label: "12 questions" },
              { icon: Brain, label: "Evidence-informed" },
              { icon: Moon, label: "No account needed" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/70 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Component: Question screen ──────────────────────────────────────────────

function QuizQuestion({ question, questionIndex, totalQuestions, selectedAnswer, onAnswer, onNext, onBack }) {
  const Icon = question.icon;

  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-foreground/60 font-display uppercase tracking-wide">
              Question {questionIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-foreground/40">
              {Math.round(((questionIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <ProgressBar current={questionIndex + 1} total={totalQuestions} />
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl md:text-2xl font-display leading-tight">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-10">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                selectedAnswer === idx
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-card hover:border-primary/30 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    selectedAnswer === idx
                      ? 'border-primary bg-primary'
                      : 'border-border'
                  }`}
                >
                  {selectedAnswer === idx && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>
                <span className={`text-sm leading-relaxed ${selectedAnswer === idx ? 'text-foreground' : 'text-foreground/80'}`}>
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 text-sm font-display uppercase tracking-wide transition-colors ${
              questionIndex === 0
                ? 'text-foreground/30 cursor-not-allowed'
                : 'text-foreground/60 hover:text-foreground'
            }`}
            disabled={questionIndex === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={onNext}
            disabled={selectedAnswer === null}
            className={`inline-flex items-center justify-center font-display uppercase tracking-wide transition-all duration-200 rounded-lg h-10 px-5 text-sm ${
              selectedAnswer === null
                ? 'bg-secondary text-foreground/40 cursor-not-allowed'
                : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-strong'
            }`}
          >
            {questionIndex === totalQuestions - 1 ? 'See Results' : 'Next'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}

// ─── Component: Results screen ───────────────────────────────────────────────

function QuizResults({ result, onRestart }) {
  const type = chronotypes[result.primary];
  const Icon = type.icon;

  // Calculate percentage breakdown
  const maxPossible = questions.length * 3;
  const breakdown = Object.entries(result.scores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, score]) => ({
      key,
      name: chronotypes[key].name,
      score,
      pct: Math.round((score / maxPossible) * 100),
      icon: chronotypes[key].icon,
    }));

  return (
    <>
      {/* Hero result */}
      <section className="relative py-16 lg:py-24 grain-overlay border-b border-border">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-display text-sm uppercase tracking-widest mb-4">
              Your Chronotype
            </p>
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${type.colourBg} mb-6`}>
              <Icon className={`w-10 h-10 ${type.colour}`} />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight mb-4">
              You're a{' '}
              <span className="text-gradient-accent">{type.name}</span>
            </h1>
            <p className="font-serif text-xl text-foreground/80 italic mb-6">
              {type.tagline}
            </p>
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              {type.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Score breakdown */}
      <Section className="bg-card/50 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-display mb-6">Your Score Breakdown</h2>
          <div className="space-y-4">
            {breakdown.map(({ key, name, pct, icon: BreakdownIcon }) => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BreakdownIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-display uppercase tracking-wide">{name}</span>
                    <span className="text-sm text-foreground/60">{pct}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        key === result.primary ? 'bg-primary' : 'bg-primary/40'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Strengths & challenges */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-display mb-4">Strengths</h2>
              <div className="space-y-3">
                {type.strengths.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-display mb-4">Common Challenges</h2>
              <div className="space-y-3">
                {type.challenges.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary/40 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sleep tip */}
      <Section className="bg-card/50">
        <div className="max-w-3xl mx-auto">
          <Card className={`${type.colourBorder}`}>
            <CardContent className="p-6 lg:p-8">
              <h2 className="font-display text-lg mb-4 flex items-center gap-2">
                <Moon className="w-5 h-5 text-primary" />
                Sleep Tip for {type.name}s
              </h2>
              <p className="text-foreground/80 leading-relaxed font-serif italic">
                {type.sleepTip}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="border-border">
            <CardContent>
              <p className="text-foreground/60 text-sm leading-relaxed">
                <strong className="text-foreground/80">A note on this quiz:</strong> This is an
                educational tool based on chronotype research. It gives you a useful starting point
                for understanding your biological rhythm, but it's not a clinical assessment. Factors
                like neurodivergence, medication, shift work, and health conditions all influence sleep
                patterns in ways a short quiz can't capture. For a comprehensive, personalised sleep
                assessment, that's what our Sleep Performance Program is for.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA — link to referral form */}
      <Section className="bg-card border-y border-border">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-display mb-4">
            Ready to Work With Your Rhythm?
          </h2>
          <p className="text-foreground/70 mb-8">
            Knowing your chronotype is the first step. Our Sleep Performance Program builds
            a personalised system around your biology — not generic advice. Four sessions.
            Real protocols. Built for your actual life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="https://questot.forms.pracsuite.com/t/FOI8g8zzGUrDKFfbJkTKEke1"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Start a Referral
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button to="/services/sleep-program" variant="outline" size="lg">
              Learn About the Program
            </Button>
          </div>
        </div>
      </Section>

      {/* Retake / related */}
      <Section>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onRestart}
            className="text-sm text-foreground/60 font-display uppercase tracking-wide hover:text-primary transition-colors"
          >
            Retake Quiz
          </button>
          <Link
            to="/services/sleep-program"
            className="inline-flex items-center text-primary text-sm font-medium"
          >
            Explore the Sleep Performance Program <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}

// ─── Main quiz component ─────────────────────────────────────────────────────

export default function ChronotypeQuiz() {
  const [phase, setPhase] = useState('intro'); // intro | quiz | results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);

  function handleStart() {
    setPhase('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleAnswer(optionIndex) {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  }

  function handleNext() {
    if (answers[currentQuestion] === null) return;

    if (currentQuestion === questions.length - 1) {
      const res = calculateResult(answers);
      setResult(res);
      setPhase('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleRestart() {
    setPhase('intro');
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Helmet>
        <title>Chronotype Quiz | Estus Health</title>
        <meta
          name="description"
          content="Discover your sleep chronotype — Lion, Bear, Wolf, or Dolphin. A free, evidence-informed quiz from Estus Health to help you understand your biological sleep rhythm."
        />
      </Helmet>

      {phase === 'intro' && <QuizIntro onStart={handleStart} />}

      {phase === 'quiz' && (
        <QuizQuestion
          question={questions[currentQuestion]}
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {phase === 'results' && result && (
        <QuizResults result={result} onRestart={handleRestart} />
      )}
    </>
  );
}
