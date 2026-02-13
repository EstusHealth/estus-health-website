import { useState } from "react";
const ARCHETYPES = {
  sprinter: {
    name: "The Sprinter",
    emoji: "\u{1F3CE}\uFE0F",
    tagline: "You run hot, then hit the wall",
    description: [
      "Your brain operates in bursts. When you're on, you're really on - hyperfocused, productive, creative, unstoppable. But that intensity comes at a cost. The crash that follows isn't a failure of willpower. It's your nervous system collecting on the energy debt your brain just racked up.",
      "You probably know the pattern well: a surge of motivation hits, you ride it hard, get an impressive amount done, and then... nothing. The tank is empty. Recovery can take hours or days, and during that time even basic tasks feel impossible. Other people might call this inconsistent, but it's actually a very consistent pattern - just not the one most productivity advice is built for.",
      "The sprint-crash cycle isn't something you need to eliminate entirely. Your ability to lock in and produce at high intensity is a genuine strength. The goal is to make the sprints more intentional and the recovery less brutal."
    ],
    tips: [
      "Set a 'sprint budget' for each day or week - decide in advance how many high-intensity blocks you can afford, and protect your recovery time just as fiercely",
      "Use the 'halfway rule': when you feel like you could keep going for another two hours, stop after one. Leaving fuel in the tank prevents the worst crashes",
      "Build transition rituals between sprint and rest - a walk, a snack, a change of environment. Hard stops are easier on your nervous system than running until you collapse",
      "Track your sprint-to-crash ratio over a few weeks. Most Sprinters discover they need roughly equal time recovering as they spend in high gear"
    ],
    insight: "Here's what most people miss about the sprint-crash pattern: it's not a discipline problem. Research on cognitive energy suggests that brains wired for intense focus actually consume glucose and neurotransmitters at a higher rate during those bursts. Your crashes are neurochemical, not motivational.",
    nextResource: {
      title: "Want help building a sustainable rhythm?",
      description: "Our team at Estus Health specialises in helping brains like yours find a pace that works. We use energy mapping and environmental design to help you sprint smarter, not harder.",
      cta: "Get in touch with our team",
    },
  },
  drifter: {
    name: "The Drifter",
    emoji: "\u{1F30A}",
    tagline: "Starting is the hardest part",
    description: [
      "Your biggest challenge isn't doing the work - it's getting started. There's a gap between wanting to do something and actually beginning it, and that gap can feel enormous. You might spend hours circling a task, knowing exactly what needs to happen, but unable to bridge the distance between intention and action.",
      "Once you do get going, something shifts. The resistance melts, focus arrives, and you can often sustain effort for a decent stretch. This is what makes the initiation struggle so frustrating - you know you're capable, because you've proven it every time you manage to start. The problem isn't ability. It's activation.",
      "The Drifter pattern is closely linked to how your brain handles dopamine and task salience. Your executive function system needs a stronger signal than average to switch from 'thinking about it' to 'doing it'. This isn't procrastination in the traditional sense. It's a neurological threshold issue."
    ],
    tips: [
      "Lower the entry point: instead of 'write the report', try 'open the document and type one sentence'. Your brain needs a tiny, friction-free first step to cross the activation threshold",
      "Use body-doubling (working alongside someone else, even virtually) to borrow external activation energy. Many Drifters find that another person's presence provides just enough signal to get started",
      "Pair initiation with sensory input - music, movement, a specific drink, a change of location. These act as activation cues that help your brain shift gears",
      "Schedule your most important tasks for whenever your natural activation energy is highest. Don't waste your best starting energy on emails"
    ],
    insight: "The gap between intention and action that you experience has a name in neuroscience: task inertia. It's related to the prefrontal cortex's role in initiating voluntary action, and it's significantly more pronounced in neurodivergent brains. Knowing this can help you stop blaming yourself and start designing better launch sequences.",
    nextResource: {
      title: "Let's close the intention-action gap",
      description: "At Estus Health, we help you build personalised activation strategies that work with your brain's initiation style. No willpower required.",
      cta: "Get in touch with our team",
    },
  },
  juggler: {
    name: "The Juggler",
    emoji: "\u{1F3AA}",
    tagline: "Your brain wants to do everything at once",
    description: [
      "You don't lack energy or motivation - you have plenty of both. The challenge is that your brain distributes them across too many things simultaneously. You start projects with genuine enthusiasm, pivot to something new when inspiration strikes, and end up with fifteen open tabs (literally and metaphorically) and nothing quite finished.",
      "This isn't a focus problem in the traditional sense. You can focus intensely - just not on one thing for long enough to complete it before the next interesting thing pulls you away. Your brain is wired for novelty and variety, which makes you excellent at generating ideas, making connections, and adapting to change. But it makes linear task completion genuinely difficult.",
      "The Juggler pattern often comes with a side of guilt - the sense that you should be able to just pick one thing and stick with it. But your brain doesn't work that way, and forcing it into a single-track mode usually backfires. The goal isn't to stop juggling. It's to juggle fewer balls at once and finish the important ones."
    ],
    tips: [
      "Use a 'parking lot' system: when a new idea or task pops up mid-flow, write it down somewhere specific and return to what you were doing. This satisfies the novelty hit without derailing your current task",
      "Limit your active projects to three at a time. Everything else goes on a 'next up' list. You can rotate projects in and out, but the cap stays at three",
      "Build variety into your schedule intentionally - switching between different types of tasks (creative, admin, physical) can satisfy your novelty drive without scattering your energy",
      "Celebrate completions loudly. Your brain is wired to reward starting, not finishing, so you need to create artificial completion rewards to retrain the loop"
    ],
    insight: "The Juggler pattern is strongly associated with divergent thinking - the cognitive style that generates multiple solutions and makes unexpected connections. Research shows this is one of the most valuable cognitive traits in creative and strategic work. Your challenge isn't that your brain works wrong. It's that most systems are designed for convergent thinkers.",
    nextResource: {
      title: "Ready to juggle smarter?",
      description: "Our team at Estus Health helps you harness your divergent thinking without the scattered energy. We build systems that work with your novelty-seeking brain, not against it.",
      cta: "Get in touch with our team",
    },
  },
  conserver: {
    name: "The Conserver",
    emoji: "\u{1F50B}",
    tagline: "You manage a limited energy budget with precision",
    description: [
      "You've learned - probably through hard experience - that your energy is a finite and sometimes unpredictable resource. So you've become strategic about how you spend it. You say no to things others say yes to. You plan ahead. You protect your reserves. From the outside, this can look like avoidance or low motivation, but it's actually sophisticated self-management.",
      "The Conserver pattern often develops after repeated experiences of overcommitting and paying the price. You've felt the cost of running on empty, and your brain has adapted by installing a more conservative energy management system. This is intelligent - your nervous system is trying to keep you functional across the long term rather than burning bright and flaming out.",
      "The trade-off is that you might hold back from opportunities, social events, or challenges that could be rewarding because the energy cost feels too uncertain. Your world can gradually shrink as you optimise for safety. The goal isn't to spend recklessly, but to find opportunities where the investment is worth it."
    ],
    tips: [
      "Create an 'energy budget' each week with three categories: essentials (non-negotiable), investments (things that cost energy now but pay off later), and treats (purely enjoyable). Make sure investments and treats don't get cut every week",
      "Distinguish between protective rest and avoidant rest. Protective rest (planned recovery) is healthy. Avoidant rest (not doing things because they might be tiring) can shrink your world over time",
      "Build 'energy experiments' into your routine - small, low-stakes activities that test whether something costs as much energy as you expect. You might find some things are cheaper than your brain predicts",
      "Watch for the conservation trap: sometimes spending energy on the right things actually generates more energy (exercise, social connection, meaningful work). Not every expenditure is a loss"
    ],
    insight: "The Conserver pattern is often misread as laziness or depression, but it's actually a highly functional adaptation. Your brain has essentially built an energy management system that prioritises sustainability. The research on spoon theory and energy envelope management validates this approach - the key is calibrating it so you're not over-conserving.",
    nextResource: {
      title: "Let's optimise your energy budget",
      description: "At Estus Health, we help you find the right balance between conservation and investment. Our OTs specialise in energy management strategies that expand your capacity without burning you out.",
      cta: "Get in touch with our team",
    },
  },
};
const QUESTIONS = [
  // Section 1: Energy Patterns (3 questions)
  {
    text: "Think about a typical week. How would you describe your energy pattern?",
    section: 1,
    options: [
      { text: "Intense bursts of high energy followed by significant crashes", scores: { sprinter: 3 } },
      { text: "Low and flat most of the time, with occasional windows of momentum", scores: { drifter: 3 } },
      { text: "High and scattered - I have energy, but it goes in ten directions at once", scores: { juggler: 3 } },
      { text: "Carefully rationed - I protect what I have and spend it strategically", scores: { conserver: 3 } },
    ],
  },
  {
    text: "When you wake up in the morning, what's your most common experience?",
    section: 1,
    options: [
      { text: "Some mornings I'm fired up and ready to go, other mornings I can barely move - it depends on yesterday", scores: { sprinter: 3 } },
      { text: "I know what I need to do, but there's a heavy gap between knowing and doing", scores: { drifter: 3 } },
      { text: "My brain is already buzzing with ideas and plans before I've even got out of bed", scores: { juggler: 3 } },
      { text: "I mentally scan the day ahead and calculate whether I have enough energy for it", scores: { conserver: 3 } },
    ],
  },
  {
    text: "How do you relate to the concept of 'pacing yourself'?",
    section: 1,
    options: [
      { text: "I understand it intellectually but in the moment I can't resist going all in", scores: { sprinter: 3 } },
      { text: "Pacing isn't really my issue - getting moving in the first place is", scores: { drifter: 3 } },
      { text: "I pace myself on individual tasks but take on too many things overall", scores: { juggler: 3 } },
      { text: "Pacing is my superpower - maybe too much. I sometimes hold back more than I need to", scores: { conserver: 3 } },
    ],
  },
  // Section 2: Task Engagement (3 questions)
  {
    text: "You have an important task that needs to get done today. What's most likely to happen?",
    section: 2,
    options: [
      { text: "I wait for the energy surge, then blast through it in one intense session", scores: { sprinter: 3 } },
      { text: "I circle it for hours, then either start late in the day or push it to tomorrow", scores: { drifter: 3 } },
      { text: "I start it, get pulled into three other things, and come back to it later", scores: { juggler: 3 } },
      { text: "I plan exactly when and how to do it so I don't waste energy on decision-making", scores: { conserver: 3 } },
    ],
  },
  {
    text: "What happens when you're halfway through a task that's going well?",
    section: 2,
    options: [
      { text: "I push harder and try to finish in one go while the momentum lasts", scores: { sprinter: 3 } },
      { text: "I'm relieved I started and try to keep the momentum going as long as possible", scores: { drifter: 3 } },
      { text: "A new idea or task catches my attention and I'm tempted to switch", scores: { juggler: 3 } },
      { text: "I check in with my energy levels to decide if I should keep going or save some for later", scores: { conserver: 3 } },
    ],
  },
  {
    text: "How do you typically handle a long to-do list?",
    section: 2,
    options: [
      { text: "I attack it in a marathon session and try to clear as much as possible in one burst", scores: { sprinter: 3 } },
      { text: "I stare at it, feel overwhelmed, and struggle to pick where to start", scores: { drifter: 3 } },
      { text: "I cherry-pick the most interesting items and bounce between them", scores: { juggler: 3 } },
      { text: "I prioritise ruthlessly and accept that some things won't get done", scores: { conserver: 3 } },
    ],
  },
  // Section 3: Recovery & Downtime (3 questions)
  {
    text: "After a particularly productive or demanding day, what does the next day look like?",
    section: 3,
    options: [
      { text: "Often a write-off. I've used everything and need time to recharge", scores: { sprinter: 3 } },
      { text: "About the same as any other day - the struggle to start continues regardless", scores: { drifter: 3 } },
      { text: "I'm usually fine - I just redirect my energy to whatever's next", scores: { juggler: 3 } },
      { text: "I deliberately schedule lighter days after big ones to stay balanced", scores: { conserver: 3 } },
    ],
  },
  {
    text: "When you have genuine free time with no obligations, how do you spend it?",
    section: 3,
    options: [
      { text: "Either doing something intensely or doing absolutely nothing - no middle ground", scores: { sprinter: 3 } },
      { text: "I have things I want to do but often can't get started on any of them", scores: { drifter: 3 } },
      { text: "I fill it immediately with projects, hobbies, or new ideas to explore", scores: { juggler: 3 } },
      { text: "I guard it carefully and rest, even if I could probably do more", scores: { conserver: 3 } },
    ],
  },
  {
    text: "How do you know when you've pushed too far?",
    section: 3,
    options: [
      { text: "I crash hard - complete shutdown, brain fog, sometimes physical symptoms", scores: { sprinter: 3 } },
      { text: "Everything feels even more impossible than usual, and guilt piles up", scores: { drifter: 3 } },
      { text: "I start dropping balls - forgetting things, missing details, making careless mistakes", scores: { juggler: 3 } },
      { text: "I rarely push that far. I've learned to stop well before that point", scores: { conserver: 3 } },
    ],
  },
  // Section 4: Self-Perception & Support (3 questions)
  {
    text: "Which statement do you most relate to?",
    section: 4,
    options: [
      { text: "\"I can do amazing things, but I pay for it afterwards\"", scores: { sprinter: 3 } },
      { text: "\"I know what I need to do, I just can't make myself start\"", scores: { drifter: 3 } },
      { text: "\"I have so many ideas and interests, I can't stick to just one\"", scores: { juggler: 3 } },
      { text: "\"I've had to learn the hard way to protect my energy\"", scores: { conserver: 3 } },
    ],
  },
  {
    text: "What kind of support would make the biggest difference for you right now?",
    section: 4,
    options: [
      { text: "Help finding a sustainable rhythm so I stop swinging between extremes", scores: { sprinter: 3 } },
      { text: "Strategies to get started without needing motivation or the perfect conditions", scores: { drifter: 3 } },
      { text: "A system for finishing things without killing the creative energy that starts them", scores: { juggler: 3 } },
      { text: "Permission and guidance to expand my world without risking burnout", scores: { conserver: 3 } },
    ],
  },
  {
    text: "If a friend described your relationship with productivity, what would they most likely say?",
    section: 4,
    options: [
      { text: "\"They're either in beast mode or completely offline - there's no in between\"", scores: { sprinter: 3 } },
      { text: "\"They talk about doing things way more than they actually do them\"", scores: { drifter: 3 } },
      { text: "\"They've always got ten projects going and somehow keep starting new ones\"", scores: { juggler: 3 } },
      { text: "\"They're careful about what they commit to and always seem to have a plan\"", scores: { conserver: 3 } },
    ],
  },
];
const SECTION_TITLES = {
  1: "Your Energy Patterns",
  2: "How You Engage with Tasks",
  3: "Recovery & Downtime",
  4: "Self-Perception & Support",
};
const REFERRAL_URL = "https://estushealth.com.au/referral";
export default function EnergyQuiz() {
  const [screen, setScreen] = useState("landing");
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({ sprinter: 0, drifter: 0, juggler: 0, conserver: 0 });
  const [result, setResult] = useState(null);
  const [secondaryResult, setSecondaryResult] = useState(null);
  const [fadeState, setFadeState] = useState("in");
  const totalSections = 4;
  const transition = (callback) => {
    setFadeState("out");
    setTimeout(() => {
      callback();
      setFadeState("in");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 350);
  };
  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };
  const calculateResult = () => {
    const finalScores = { sprinter: 0, drifter: 0, juggler: 0, conserver: 0 };
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
      setScores({ sprinter: 0, drifter: 0, juggler: 0, conserver: 0 });
      setResult(null);
      setSecondaryResult(null);
    });
  };
  const archetype = result ? ARCHETYPES[result] : null;
  const secondaryArchetype = secondaryResult ? ARCHETYPES[secondaryResult] : null;
  const shareText = archetype
    ? `I got ${archetype.name} on the Energy & Executive Function Quiz! ${archetype.tagline}. Take the quiz: ${REFERRAL_URL}`
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
        {screen === "landing" && (
          <div className={`fade-${fadeState}`}>
            <div className="landing-hero">
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{"\u26A1"}</div>
              <h1>How Does Your Brain Manage Energy&nbsp;&&nbsp;Action?</h1>
              <p className="subtitle">
                Discover your executive function and energy profile - and learn strategies
                built for the way your brain actually works.
              </p>
              <div className="time-badge">{"\u{1F550}"} Takes ~3 minutes {"\u00B7"} 12 questions</div>
              <br />
              <div className="landing-notes">
                <strong style={{ color: "var(--dark)" }}>Before you start:</strong> This isn't about how productive you are. It's about understanding your brain's natural energy patterns and how you move from intention to action. Every profile has real strengths, and most people will recognise themselves in more than one. There are no wrong answers.
              </div>
              <button className="btn-primary" onClick={() => transition(() => setScreen("quiz"))}>
                Discover Your Profile
              </button>
            </div>
          </div>
        )}
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