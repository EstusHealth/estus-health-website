import { useState } from "react";
const ARCHETYPES = {
  negotiator: {
    name: "The Negotiator",
    emoji: "\u{1F91D}",
    tagline: "Autonomy is your operating system",
    description: [
      "Your brain is wired to need a sense of choice and control in everything you do. It's not that you're being difficult - your nervous system genuinely functions better when you feel like a co-author of your life rather than following someone else's script. When demands are framed as options or invitations, something clicks and you can move forward with energy and purpose.",
      "You likely have a strong internal compass and clear preferences about how things should be done. You may find yourself instinctively rephrasing instructions in your own words before acting on them - not to be defiant, but because your brain needs to 'own' the task before it can engage. This is actually a sophisticated self-regulation strategy.",
      "In relationships and work, you thrive when others collaborate with you rather than direct you. You're often incredibly capable and motivated - but only when the path forward feels genuinely chosen rather than imposed."
    ],
    tips: [
      "Reframe tasks as choices: 'I'm choosing to do this because...' - even small reframes can reduce the demand load on your nervous system",
      "Build 'negotiation rituals' into your day - give yourself permission to adjust how and when tasks happen, even if the task itself is non-negotiable",
      "Communicate your needs to others: 'I work best when I have options' is a powerful self-advocacy statement, not an excuse",
      "Watch for the 'invisible demands' - even self-imposed expectations can trigger demand sensitivity. Be gentle with your own to-do lists"
    ],
    insight: "Here's something most people don't realize: your need for autonomy isn't a character flaw - it's actually linked to a heightened awareness of social dynamics and power imbalances. Your brain is constantly monitoring fairness and consent, which is an incredibly valuable trait.",
    nextResource: {
      title: "Ready to explore what this means for you?",
      description: "Our team at Estus Health specializes in working with brains like yours. We use neuro-affirming, strengths-based approaches that honour your need for autonomy while helping you build sustainable strategies.",
      cta: "Get in touch with our team",
    },
  },
  avoider: {
    name: "The Avoider",
    emoji: "\u{1F6E1}\uFE0F",
    tagline: "Your nervous system has a powerful protection system",
    description: [
      "Your brain has a deeply embedded protective response to perceived demands. When something feels like an expectation - even a simple, reasonable one - your nervous system can hit the brakes hard. This isn't laziness or defiance. It's your brain's threat detection system misfiring on everyday tasks, treating demands like dangers.",
      "You might notice that the harder you try to push through, the more stuck you feel. That's because demand avoidance operates below conscious control - it's a nervous system response, not a mindset problem. Tasks you genuinely want to do can become impossible the moment they feel like obligations. Even enjoyable activities can lose their appeal once they carry an expectation.",
      "The good news? Understanding this pattern is the first step to working with your brain instead of against it. Your avoidance isn't random - it has a logic, and once you understand that logic, you can start designing your environment to reduce demand load."
    ],
    tips: [
      "Drop the pressure: when you feel paralysed, the goal isn't to 'push through' - it's to reduce the perceived demand until your nervous system relaxes enough to engage",
      "Try the 'novelty hack': approaching a task in a completely new way (different location, different time, different order) can bypass the demand response because it feels like a new choice",
      "Build recovery into your day - demand avoidance often intensifies when you're depleted. Rest isn't a reward for productivity; it's a prerequisite",
      "Use 'demand disguises': timers, games, music, body-doubling, or pairing tasks with something enjoyable can lower the demand signature of necessary tasks"
    ],
    insight: "Here's something counterintuitive: the strength of your avoidance response is often proportional to your sensitivity and intelligence. Your brain is processing more demand signals than most people's, which is exhausting - but also means you're picking up on things others miss.",
    nextResource: {
      title: "You don't have to figure this out alone",
      description: "At Estus Health, we work with demand-sensitive brains every day. Our OTs use strategies built around your nervous system - not against it. No 'just do it' advice, we promise.",
      cta: "Get in touch with our team",
    },
  },
  masker: {
    name: "The Masker",
    emoji: "\u{1F3AD}",
    tagline: "You perform compliance - at a cost",
    description: [
      "From the outside, you might look like you're coping brilliantly. You meet deadlines, follow instructions, show up when expected. But inside, the effort of overriding your demand-sensitive nervous system is enormous. You've learned to mask your discomfort so well that others - and sometimes even you - don't realize how much energy it costs.",
      "Masking demand sensitivity often means you experience the crash later: after work, after school, after social events. You might find yourself shutting down, withdrawing, or having intense emotional reactions in safe spaces (usually home) that seem disproportionate to what triggered them. This isn't overreacting - it's the accumulated cost of sustained compliance.",
      "Your ability to mask is actually a remarkable skill - it shows adaptability, social awareness, and resilience. But it's not sustainable long-term without support. The goal isn't to stop masking entirely (sometimes it's genuinely useful), but to reduce how often you need to do it and build in proper recovery."
    ],
    tips: [
      "Track your 'compliance cost': notice when you're performing okayness rather than feeling it. The gap between appearance and internal experience is your demand load",
      "Build 'decompression zones' into your schedule - dedicated time after high-demand situations where nothing is expected of you. This isn't optional; it's essential maintenance",
      "Start small with unmasking: practice saying 'I need a moment' or 'that's harder for me than it looks' with safe people. Letting others see the real cost reduces isolation",
      "Watch for burnout signals: increased irritability, physical tension, sleep disruption, and loss of interest in usually enjoyable activities are all signs your masking budget is overdrawn"
    ],
    insight: "Research increasingly shows that masking PDA traits correlates with higher rates of burnout and mental health challenges - not because of the PDA itself, but because of the sustained effort of hiding it. Giving yourself permission to drop the mask, even partially, is genuinely therapeutic.",
    nextResource: {
      title: "Let's build a more sustainable approach",
      description: "Our team at Estus Health understands the hidden cost of masking. We help you develop strategies that reduce demand load so you don't have to perform your way through every day.",
      cta: "Get in touch with our team",
    },
  },
  adapter: {
    name: "The Adapter",
    emoji: "\u{1F504}",
    tagline: "Context is everything for your brain",
    description: [
      "Your demand sensitivity isn't constant - it shifts significantly depending on the context, the person, the environment, and your internal state. Some days you can handle a packed schedule with ease; other days, being asked to make a simple decision feels overwhelming. This variability isn't inconsistency - it's your nervous system reading environmental cues and adjusting its tolerance in real time.",
      "You've likely noticed that who asks matters as much as what they ask. A request from someone you trust might feel collaborative, while the exact same request from someone else triggers resistance. Similarly, demands in environments where you feel safe land differently than those in unfamiliar or stressful settings. Your brain is doing sophisticated social and environmental processing.",
      "The adaptive pattern can be confusing - both for you and for others. People may wonder why you 'can' do something in one context but 'can't' in another. But this variability is actually a clue to what your nervous system needs: safety, trust, predictability, and the right conditions to engage."
    ],
    tips: [
      "Map your demand tolerance: track which contexts, people, and internal states make demands easier or harder. You'll start seeing patterns that help you plan your energy",
      "Create 'anchor environments' - spaces and routines where your demand tolerance is reliably higher. Use these for your most important tasks",
      "Communicate your variability to safe people: 'My capacity changes depending on context' helps others understand you're not being inconsistent - you're being responsive",
      "On low-tolerance days, lean hard into environmental supports: familiar spaces, trusted people, reduced novelty, and maximum predictability"
    ],
    insight: "Your context-dependent demand sensitivity is actually a sign of a highly attuned nervous system. You're not unreliable - you're responsive. The key is learning which contextual levers to pull so you can set yourself up for success more consistently.",
    nextResource: {
      title: "Let's decode your patterns together",
      description: "At Estus Health, we help you map your demand tolerance landscape and build personalised strategies for your unique context-dependent profile. No cookie-cutter approaches.",
      cta: "Get in touch with our team",
    },
  },
};
const QUESTIONS = [
  // Section 1: Responding to Demands (3 questions)
  {
    text: "Someone asks you to do something straightforward - like putting out the bins or replying to an email. What's your most common internal reaction?",
    section: 1,
    options: [
      { text: "I'll do it, but I need to decide when and how - on my terms", scores: { negotiator: 3 } },
      { text: "An immediate wave of 'I can't' - even though I know it's simple", scores: { avoider: 3 } },
      { text: "I do it straight away, but feel drained or resentful afterwards", scores: { masker: 3 } },
      { text: "It depends entirely on who's asking and how I'm feeling that day", scores: { adapter: 3 } },
    ],
  },
  {
    text: "When you have a list of tasks to get through, what typically happens?",
    section: 1,
    options: [
      { text: "I rewrite the list in my own order and do it my way", scores: { negotiator: 3 } },
      { text: "I look at the list and feel paralysed - even if the tasks are easy", scores: { avoider: 3 } },
      { text: "I power through everything, then collapse once it's done", scores: { masker: 3 } },
      { text: "Some items feel fine, others feel impossible - it's unpredictable", scores: { adapter: 3 } },
    ],
  },
  {
    text: "A friend suggests plans for the weekend. How do you typically respond?",
    section: 1,
    options: [
      { text: "I'm keen - as long as I have some say in what we actually do", scores: { negotiator: 3 } },
      { text: "Even fun plans can feel like pressure once they're 'locked in'", scores: { avoider: 3 } },
      { text: "I say yes, show up, enjoy it - but need to recover alone afterwards", scores: { masker: 3 } },
      { text: "Some weeks I'm all in, other weeks the same plan feels unbearable", scores: { adapter: 3 } },
    ],
  },
  // Section 2: Internal Experience (3 questions)
  {
    text: "Think about a task you genuinely enjoy - like a hobby or creative project. What happens when it starts to feel like an obligation?",
    section: 2,
    options: [
      { text: "I can still do it if I tweak it or approach it differently", scores: { negotiator: 3 } },
      { text: "I lose all interest - the enjoyment evaporates completely", scores: { avoider: 3 } },
      { text: "I keep doing it but it stops being fun and starts being work", scores: { masker: 3 } },
      { text: "Sometimes it's fine, sometimes the obligation feeling ruins it", scores: { adapter: 3 } },
    ],
  },
  {
    text: "How would you describe the demands you place on yourself (self-imposed goals, routines, expectations)?",
    section: 2,
    options: [
      { text: "I set my own goals but need flexibility in how I achieve them", scores: { negotiator: 3 } },
      { text: "Even my own expectations can feel like demands I want to avoid", scores: { avoider: 3 } },
      { text: "I hold myself to high standards and rarely let myself off the hook", scores: { masker: 3 } },
      { text: "My self-expectations fluctuate - strict some days, non-existent others", scores: { adapter: 3 } },
    ],
  },
  {
    text: "After a day full of demands (work, appointments, social obligations), what's your usual state?",
    section: 2,
    options: [
      { text: "Tired, but okay - especially if I had some control over my schedule", scores: { negotiator: 3 } },
      { text: "Completely shut down - I need to withdraw and do absolutely nothing", scores: { avoider: 3 } },
      { text: "I seem fine to others, but at home I fall apart or become irritable", scores: { masker: 3 } },
      { text: "It really depends on the type of demands - some drain me, others don't", scores: { adapter: 3 } },
    ],
  },
  // Section 3: Patterns & Relationships (3 questions)
  {
    text: "When someone gives you unsolicited advice or tells you the 'right' way to do something, how do you respond?",
    section: 3,
    options: [
      { text: "I listen, but I'll adapt their advice to fit my own approach", scores: { negotiator: 3 } },
      { text: "I feel a strong urge to do the opposite - even if their advice is good", scores: { avoider: 3 } },
      { text: "I nod and agree in the moment, even if inside I'm resisting", scores: { masker: 3 } },
      { text: "Sometimes I welcome it, sometimes it triggers instant resistance", scores: { adapter: 3 } },
    ],
  },
  {
    text: "How consistent is your ability to handle demands across different areas of life?",
    section: 3,
    options: [
      { text: "Pretty consistent - I can manage most things if I have autonomy", scores: { negotiator: 3 } },
      { text: "I find most demands difficult regardless of the area", scores: { avoider: 3 } },
      { text: "I manage well publicly but struggle privately - people would be surprised", scores: { masker: 3 } },
      { text: "Wildly inconsistent - I never know which version of me will show up", scores: { adapter: 3 } },
    ],
  },
  {
    text: "Which statement resonates most with how people in your life perceive you?",
    section: 3,
    options: [
      { text: "\"They always have their own way of doing things\"", scores: { negotiator: 3 } },
      { text: "\"They seem to shut down or avoid things for no clear reason\"", scores: { avoider: 3 } },
      { text: "\"They seem so capable - I had no idea they were struggling\"", scores: { masker: 3 } },
      { text: "\"They're so different depending on the day or situation\"", scores: { adapter: 3 } },
    ],
  },
  // Section 4: Coping & Support (3 questions)
  {
    text: "What strategy works best for you when you're facing a demand you're resisting?",
    section: 4,
    options: [
      { text: "Finding a way to make it feel like my own idea or choice", scores: { negotiator: 3 } },
      { text: "Removing all pressure and waiting until my nervous system is ready", scores: { avoider: 3 } },
      { text: "Just pushing through and dealing with the fallout later", scores: { masker: 3 } },
      { text: "Changing the context - different time, place, or person helping", scores: { adapter: 3 } },
    ],
  },
  {
    text: "When you think about getting support for demand sensitivity, what feels most important?",
    section: 4,
    options: [
      { text: "Being treated as a partner, not a patient - working together on my terms", scores: { negotiator: 3 } },
      { text: "Someone who understands that 'I can't' is different from 'I won't'", scores: { avoider: 3 } },
      { text: "Help seeing the cost of my coping before I burn out completely", scores: { masker: 3 } },
      { text: "Strategies that work across my different contexts and states", scores: { adapter: 3 } },
    ],
  },
  {
    text: "If you could change one thing about how people respond to your demand sensitivity, what would it be?",
    section: 4,
    options: [
      { text: "Stop telling me what to do - ask me how I'd like to approach it", scores: { negotiator: 3 } },
      { text: "Stop assuming I'm choosing not to do things - it's not that simple", scores: { avoider: 3 } },
      { text: "Notice that I'm struggling even when I look like I'm coping", scores: { masker: 3 } },
      { text: "Accept that my capacity genuinely changes - I'm not being inconsistent on purpose", scores: { adapter: 3 } },
    ],
  },
];
const SECTION_TITLES = {
  1: "How You Respond to Demands",
  2: "Your Internal Experience",
  3: "Patterns & Relationships",
  4: "Coping & Support",
};
const REFERRAL_URL = "https://estushealth.com.au/referral";
export default function PDAQuiz() {
  const [screen, setScreen] = useState("landing");
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({ negotiator: 0, avoider: 0, masker: 0, adapter: 0 });
  const [result, setResult] = useState(null);
  const [secondaryResult, setSecondaryResult] = useState(null);
  const [fadeState, setFadeState] = useState("in");
  const totalSections = 4;
  const transition = (callback) => {
    setFadeState("out");
    setTimeout(() => {
      callback();
      setFadeState("in");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350);
  };
  const handleAnswer = (questionIndex, optionIndex) => {
    const newAnswers = { ...answers, [questionIndex]: optionIndex };
    setAnswers(newAnswers);
  };
  const calculateResult = () => {
    const finalScores = { negotiator: 0, avoider: 0, masker: 0, adapter: 0 };
    Object.entries(answers).forEach(([qIdx, optIdx]) => {
      const option = QUESTIONS[parseInt(qIdx)].options[optIdx];
      Object.entries(option.scores).forEach(([arch, pts]) => {
        finalScores[arch] += pts;
      });
    });
    setScores(finalScores);
    const sorted = Object.entries(finalScores).sort((a, b) => b[1] - a[1]);
    const primary = sorted[0];
    const secondary = sorted[1];
    setResult(primary[0]);
    const maxScore = primary[1];
    if (maxScore > 0 && secondary[1] / maxScore >= 0.85) {
      setSecondaryResult(secondary[0]);
    }
  };
  const sectionQuestions = QUESTIONS.filter((q) => q.section === currentSection);
  const sectionComplete = sectionQuestions.every(
    (_, i) => answers[QUESTIONS.indexOf(sectionQuestions[i])] !== undefined
  );
  const handleNext = () => {
    if (currentSection < totalSections) {
      transition(() => setCurrentSection(currentSection + 1));
    } else {
      calculateResult();
      transition(() => setScreen("results"));
    }
  };
  const handleRestart = () => {
    transition(() => {
      setScreen("landing");
      setCurrentSection(1);
      setAnswers({});
      setScores({ negotiator: 0, avoider: 0, masker: 0, adapter: 0 });
      setResult(null);
      setSecondaryResult(null);
    });
  };
  const archetype = result ? ARCHETYPES[result] : null;
  const secondaryArchetype = secondaryResult ? ARCHETYPES[secondaryResult] : null;
  const shareText = archetype
    ? `I got ${archetype.name} on the PDA Profile Quiz! ${archetype.tagline}. Take the quiz: ${REFERRAL_URL}`
    : "";
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;700&display=swap');
        :root {
          --primary: #76543E;
          --primary-light: rgba(118, 84, 62, 0.08);
          --dark: #2E2519;
          --cream: #E5DCCC;
          --cream-light: #F5F0E8;
          --accent: #BFA88E;
          --accent-light: rgba(191, 168, 142, 0.15);
          --text: #2E2519;
          --text-muted: #8B7355;
          --bg: #FFFFFF;
          --bg-light: #F5F0E8;
          --border: #E5DCCC;
        }
        .quiz-container {
          font-family: 'DM Sans', -apple-system, sans-serif;
          color: var(--text);
          max-width: 760px;
          margin: 0 auto;
          padding: 1.5rem;
          min-height: 100vh;
          background: var(--bg);
        }
        .fade-in { opacity: 1; transform: translateY(0); transition: opacity 0.4s ease, transform 0.4s ease; }
        .fade-out { opacity: 0; transform: translateY(12px); transition: opacity 0.3s ease, transform 0.3s ease; }
        h1, h2, h3 { font-family: 'Playfair Display', Georgia, serif; color: var(--dark); }
        .landing-hero {
          text-align: center;
          padding: 4rem 1rem 3rem;
        }
        .landing-hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1rem;
        }
        .landing-hero .subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .landing-hero .time-badge {
          display: inline-block;
          background: var(--cream-light);
          border: 1px solid var(--border);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .landing-notes {
          max-width: 480px;
          margin: 0 auto 2.5rem;
          text-align: left;
          background: var(--cream-light);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        .btn-primary {
          display: inline-block;
          background: var(--primary);
          color: #fff;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: var(--dark); transform: translateY(-1px); }
        .btn-primary:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
        .btn-secondary {
          display: inline-block;
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 0.85rem 2rem;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-secondary:hover { background: var(--primary-light); }
        .progress-bar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          padding: 0 0.5rem;
        }
        .progress-segment {
          flex: 1;
          height: 4px;
          border-radius: 4px;
          background: var(--border);
          transition: background 0.3s ease;
        }
        .progress-segment.active { background: var(--primary); }
        .progress-segment.completed { background: var(--accent); }
        .section-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .section-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .question-card {
          background: var(--bg);
          border-radius: 12px;
          padding: 1.75rem 2rem;
          margin-bottom: 1.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          border-left: 4px solid var(--accent);
        }
        .question-text {
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.55;
          margin-bottom: 1rem;
        }
        .option-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.9rem 1.25rem;
          margin: 0.45rem 0;
          border: 2px solid var(--border);
          border-radius: 8px;
          background: var(--bg-light);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text);
          transition: all 0.2s ease;
        }
        .option-btn:hover { border-color: var(--accent); background: var(--accent-light); transform: translateX(3px); }
        .option-btn.selected { border-color: var(--primary); background: var(--primary-light); font-weight: 500; }
        .nav-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 1.5rem;
          gap: 1rem;
        }
        .results-hero {
          text-align: center;
          background: linear-gradient(135deg, var(--cream-light) 0%, var(--bg) 100%);
          border-radius: 16px;
          padding: 3rem 2rem;
          margin-bottom: 2.5rem;
          border: 1px solid var(--border);
        }
        .results-emoji { font-size: 4rem; margin-bottom: 1rem; }
        .results-hero h1 {
          font-size: clamp(1.8rem, 4.5vw, 2.8rem);
          font-weight: 900;
          margin-bottom: 0.5rem;
        }
        .results-tagline {
          font-size: 1.15rem;
          color: var(--text-muted);
          font-style: italic;
        }
        .results-section {
          margin-bottom: 2.5rem;
        }
        .results-section h2 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--cream);
        }
        .results-section p {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .tips-list {
          list-style: none;
          padding: 0;
        }
        .tips-list li {
          position: relative;
          padding: 1rem 1rem 1rem 2.5rem;
          margin-bottom: 0.75rem;
          background: var(--cream-light);
          border-radius: 8px;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .tips-list li::before {
          content: '\u2192';
          position: absolute;
          left: 1rem;
          color: var(--primary);
          font-weight: 700;
        }
        .insight-box {
          background: var(--primary-light);
          border-left: 4px solid var(--primary);
          border-radius: 0 12px 12px 0;
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--text);
        }
        .insight-box strong {
          display: block;
          margin-bottom: 0.5rem;
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
        }
        .secondary-card {
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          margin-bottom: 2.5rem;
        }
        .secondary-card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .secondary-card p { font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; }
        .cta-box {
          background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
          color: #fff;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        .cta-box h2 { color: #fff; font-size: 1.5rem; margin-bottom: 0.75rem; }
        .cta-box p { color: rgba(255,255,255,0.85); margin-bottom: 1.5rem; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.6; font-size: 0.95rem; }
        .cta-box .btn-cta {
          display: inline-block;
          background: #fff;
          color: var(--primary);
          padding: 0.9rem 2rem;
          border-radius: 8px;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s;
        }
        .cta-box .btn-cta:hover { transform: translateY(-1px); }
        .share-row {
          text-align: center;
          margin-bottom: 2rem;
        }
        .restart-row {
          text-align: center;
          padding-bottom: 3rem;
        }
        @media (max-width: 600px) {
          .quiz-container { padding: 1rem; }
          .landing-hero { padding: 2.5rem 0.5rem 2rem; }
          .question-card { padding: 1.25rem 1rem; }
          .results-hero { padding: 2rem 1.25rem; }
          .cta-box { padding: 2rem 1.25rem; }
          .landing-notes { padding: 1.25rem 1.5rem; }
        }
      `}</style>
      <div className="quiz-container">
        {/* LANDING SCREEN */}
        {screen === "landing" && (
          <div className={`fade-${fadeState}`}>
            <div className="landing-hero">
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{"\u{1F9E0}"}</div>
              <h1>How Does Your Brain Respond&nbsp;to&nbsp;Demands?</h1>
              <p className="subtitle">
                Discover your PDA profile - and learn practical strategies that work
                with your nervous system, not against it.
              </p>
              <div className="time-badge">{"\u{1F550}"} Takes ~3 minutes {"\u00B7"} 12 questions</div>
              <br />
              <div className="landing-notes">
                <strong style={{ color: "var(--dark)" }}>A note before you start:</strong> This quiz isn't a diagnostic tool - it's a reflection exercise to help you understand your relationship with demands. There's no right or wrong result, and every profile has genuine strengths. PDA (Pathological Demand Avoidance, also called Persistent Drive for Autonomy) exists on a spectrum, and most people show traits of more than one profile.
              </div>
              <button className="btn-primary" onClick={() => transition(() => setScreen("quiz"))}>
                Discover Your Profile
              </button>
            </div>
          </div>
        )}
        {/* QUIZ SCREEN */}
        {screen === "quiz" && (
          <div className={`fade-${fadeState}`}>
            <div className="progress-bar">
              {Array.from({ length: totalSections }, (_, i) => (
                <div
                  key={i}
                  className={`progress-segment ${
                    i + 1 === currentSection ? "active" : i + 1 < currentSection ? "completed" : ""
                  }`}
                />
              ))}
            </div>
            <div className="section-label">
              Section {currentSection} of {totalSections}
            </div>
            <h2 className="section-title">{SECTION_TITLES[currentSection]}</h2>
            {sectionQuestions.map((q, i) => {
              const globalIndex = QUESTIONS.indexOf(q);
              return (
                <div className="question-card" key={globalIndex}>
                  <div className="question-text">{q.text}</div>
                  {q.options.map((opt, oi) => (
                    <button
                      key={oi}
                      className={`option-btn ${answers[globalIndex] === oi ? "selected" : ""}`}
                      onClick={() => handleAnswer(globalIndex, oi)}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              );
            })}
            <div className="nav-row">
              {currentSection > 1 && (
                <button
                  className="btn-secondary"
                  onClick={() => transition(() => setCurrentSection(currentSection - 1))}
                >
                  {"\u2190"} Back
                </button>
              )}
              <button className="btn-primary" disabled={!sectionComplete} onClick={handleNext}>
                {currentSection < totalSections ? "Continue \u2192" : "See My Results"}
              </button>
            </div>
          </div>
        )}
        {/* RESULTS SCREEN */}
        {screen === "results" && archetype && (
          <div className={`fade-${fadeState}`}>
            <div className="results-hero">
              <div className="results-emoji">{archetype.emoji}</div>
              <h1>{archetype.name}</h1>
              <p className="results-tagline">{archetype.tagline}</p>
              {secondaryArchetype && (
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
                  with {secondaryArchetype.name} tendencies
                </p>
              )}
            </div>
            <div className="results-section">
              <h2>What This Means</h2>
              {archetype.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="insight-box">
              <strong>{"\u{1F4A1}"} The insight most people miss</strong>
              {archetype.insight}
            </div>
            <div className="results-section">
              <h2>Strategies That Work for Your Profile</h2>
              <ul className="tips-list">
                {archetype.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
            {secondaryArchetype && (
              <div className="secondary-card">
                <h3>
                  {secondaryArchetype.emoji} You also show traits of {secondaryArchetype.name}
                </h3>
                <p>{secondaryArchetype.description[0]}</p>
              </div>
            )}
            <div className="cta-box">
              <h2>{archetype.nextResource.title}</h2>
              <p>{archetype.nextResource.description}</p>
              <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="btn-cta">
                {archetype.nextResource.cta} {"\u2192"}
              </a>
            </div>
            <div className="share-row">
              <button
                className="btn-secondary"
                onClick={() => {
                  navigator.clipboard.writeText(shareText);
                  alert("Result copied to clipboard!");
                }}
              >
                {"\u{1F4CB}"} Share Your Result
              </button>
            </div>
            <div className="restart-row">
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: "underline",
                }}
                onClick={handleRestart}
              >
                Retake the quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}