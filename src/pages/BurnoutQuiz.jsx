import { useState } from "react";
const ARCHETYPES = {
  smouldering: {
    name: "The Smouldering Ember",
    emoji: "\u{1F525}",
    tagline: "You've been burning low for longer than you realise",
    description: [
      "Your burnout didn't arrive with a dramatic crash - it crept in slowly, like a fire burning down to embers. You've been running on fumes for so long that this depleted state has started to feel normal. You might not even recognise it as burnout because there was no single breaking point - just a gradual erosion of capacity, interest, and energy that's been building for months or even years.",
      "You've probably noticed that things you used to manage easily now feel disproportionately hard. Your tolerance for sensory input, social interaction, and everyday demands has been quietly shrinking. Skills you once had on autopilot - cooking, replying to messages, keeping track of appointments - now require conscious effort that leaves you drained.",
      "The tricky thing about chronic burnout is that it rewrites your baseline. You may have forgotten what it feels like to have capacity, so you keep measuring yourself against your current depleted state rather than recognising how far you've drifted from your actual potential."
    ],
    tips: [
      "Start by accepting that your current capacity is real, not a character flaw - you can't recover from burnout while judging yourself for being in it",
      "Audit your 'invisible demands': the social masking, sensory processing, executive function tasks, and emotional labour that don't appear on any to-do list but drain your battery every day",
      "Lower the bar deliberately - not as failure, but as strategy. Recovery requires operating below your current maximum, not at it",
      "Track your energy patterns over a week. You may discover that certain times, environments, or activities drain you disproportionately - this data is your recovery roadmap"
    ],
    insight: "Here's what most people miss about chronic autistic burnout: it's not caused by doing too much of one thing - it's caused by the cumulative, invisible cost of navigating a world that wasn't designed for your neurology. The masking, the sensory processing, the constant translation between your internal experience and external expectations - these are full-time jobs that nobody sees, including you.",
    nextResource: {
      title: "Ready to start rebuilding?",
      description: "Our team at Estus Health specialises in autistic burnout recovery. We use neuro-affirming, occupational therapy approaches that help you identify what's draining your battery and build a sustainable way forward - at your pace.",
      cta: "Get in touch with our team",
    },
  },
  shutdown: {
    name: "The Sudden Shutdown",
    emoji: "\u{1F50C}",
    tagline: "Your system hit the emergency brake",
    description: [
      "Your burnout feels like it came out of nowhere - one day you were functioning, and the next your brain pulled the emergency stop. You may have lost skills you've relied on for years: speaking fluently, managing your emotions, tolerating environments that were previously fine, or simply getting through a normal day. It feels sudden, but the pressure was likely building long before the shutdown.",
      "In this state, your nervous system is in deep protection mode. It's not that you're choosing to withdraw or can't be bothered - your brain has literally reduced operations to preserve core function. You might experience increased meltdowns or shutdowns, regression in communication or self-care skills, heightened sensory sensitivity, or a profound need to retreat from the world.",
      "The sudden shutdown is actually your brain's most assertive act of self-preservation. It's saying: the demands have exceeded capacity, and I'm taking emergency action. This is not weakness - it's your neurology doing exactly what it's designed to do under unsustainable pressure."
    ],
    tips: [
      "Treat this like a genuine neurological event, not a motivational problem - your brain needs recovery conditions, not pep talks",
      "Reduce sensory and social demands to the absolute minimum possible. This is triage, not laziness",
      "Don't try to recover by doing more or pushing through - the shutdown happened because that strategy failed. Recovery means genuinely resting",
      "Communicate to safe people what you need: 'My brain is in recovery mode. I need reduced demands and patience, not solutions or encouragement to push through'"
    ],
    insight: "Research on autistic burnout shows that sudden shutdowns are often preceded by a period of increased masking or demand load that went unrecognised. Your brain was sending warning signals - fatigue, irritability, sensory overload, reduced tolerance - but the external pressure to keep performing overrode them. Understanding this pattern is crucial for prevention.",
    nextResource: {
      title: "Your brain is asking for help",
      description: "At Estus Health, we understand that autistic shutdown isn't something you can willpower your way out of. Our OTs work with your nervous system to create genuine recovery conditions and build early warning systems for the future.",
      cta: "Get in touch with our team",
    },
  },
  masked: {
    name: "The Masked Flame",
    emoji: "\u{1F3AD}",
    tagline: "You're burning out behind a perfect performance",
    description: [
      "You're experiencing burnout, but nobody around you would know it. You've built such effective compensation strategies and masking skills that your external performance barely shows the internal deterioration. You still show up, still deliver, still seem capable - but the cost of maintaining that facade is accelerating your burnout rather than resolving it.",
      "The cruel irony of masked burnout is that your competence is being used as evidence that you're fine. Because you can still function in public, people assume you have capacity to spare. But what they don't see is the complete collapse that happens when you're alone - the hours of recovery needed after social interaction, the executive function debt you're accumulating, the slowly shrinking list of things you can actually enjoy.",
      "Your masking ability is genuinely impressive - it represents years of learning, adapting, and performing. But it's also the very thing preventing you from getting the support and rest you need, because it hides the severity of your burnout from others and sometimes from yourself."
    ],
    tips: [
      "Start tracking the gap between your public performance and your private experience - this gap is the true measure of your burnout, not how well you're functioning externally",
      "Practice selective unmasking with safe people: let them see the cost. 'I managed that meeting, but I'm now completely depleted' is honest, not dramatic",
      "Challenge the belief that coping equals being okay. Surviving is not thriving, and your ability to push through doesn't mean you should have to",
      "Build 'decompression protocols' into your schedule - not as optional extras but as non-negotiable recovery time that's as important as any meeting or commitment"
    ],
    insight: "Studies on late-diagnosed autistic adults consistently find that the highest-masking individuals experience the most severe burnout - not because they're more vulnerable, but because their masking delays recognition and intervention. The better you are at hiding it, the longer the burnout continues unchecked. Giving yourself permission to be visibly struggling is paradoxically one of the most powerful recovery tools.",
    nextResource: {
      title: "Let's look behind the mask together",
      description: "Our team at Estus Health specialises in working with high-masking autistic adults who are burning out invisibly. We help you quantify the hidden costs and build a more sustainable way of moving through the world.",
      cta: "Get in touch with our team",
    },
  },
  recovering: {
    name: "The Rising Phoenix",
    emoji: "\u{1F331}",
    tagline: "You're rebuilding - and learning what sustainable actually looks like",
    description: [
      "You've been through burnout - possibly more than once - and you're now in a phase of recovery and rebuilding. You're starting to understand your autistic neurology better and making deliberate choices about how you spend your energy. This isn't a return to your pre-burnout self; it's the construction of something more sustainable and more authentically you.",
      "Recovery from autistic burnout isn't linear. You likely have days where you feel like yourself again and days where the depletion returns with force. This variability isn't a sign of failure - it's a normal part of neurological recovery. Your brain is recalibrating, and that process has its own timeline that doesn't respond to impatience or pressure.",
      "What makes your current phase powerful is the self-knowledge you've gained. You now have data about your limits, your warning signs, and what genuine rest looks like for your neurology. This knowledge - hard-won through difficult experience - is the foundation for a life that works with your brain rather than against it."
    ],
    tips: [
      "Resist the urge to fill recovering capacity with new demands. Having energy doesn't mean you need to spend it immediately - building a buffer is how you prevent the next burnout",
      "Create a personal 'burnout early warning system': a checklist of your specific warning signs (sleep changes, sensory sensitivity increases, skill regression, social withdrawal) and check in with it regularly",
      "Redefine productivity on your own terms. Recovery is productive. Rest is productive. Understanding yourself is productive. Don't let neurotypical productivity metrics define your progress",
      "Build your new baseline around 70% of your capacity, not 100%. The remaining 30% is your buffer for unexpected demands, bad days, and the invisible processing your brain does constantly"
    ],
    insight: "Many autistic adults who've recovered from burnout describe it as a turning point - not because the burnout was positive, but because the recovery process forced them to understand their neurology in ways they never had before. You're not just recovering; you're building a more informed, more boundaried, more authentically autistic life. That's genuinely transformative.",
    nextResource: {
      title: "Let's build your sustainable future",
      description: "At Estus Health, we work with autistic adults at every stage of burnout and recovery. Our OTs can help you consolidate what you've learned and build robust systems that protect your energy long-term.",
      cta: "Get in touch with our team",
    },
  },
};
const QUESTIONS = [
  // Section 1: Your Energy & Capacity (3 questions)
  {
    text: "How would you describe your energy levels over the past few months compared to your usual self?",
    section: 1,
    options: [
      { text: "Gradually declining - I've been running on less and less for a long time now", scores: { smouldering: 3 } },
      { text: "Dropped suddenly - I went from managing to barely functioning in a short period", scores: { shutdown: 3 } },
      { text: "I seem fine to others, but privately I'm exhausted beyond what anyone would guess", scores: { masked: 3 } },
      { text: "Variable - some days I feel like I'm coming back, other days the depletion hits hard", scores: { recovering: 3 } },
    ],
  },
  {
    text: "When you think about your daily tasks and responsibilities, what best describes your experience?",
    section: 1,
    options: [
      { text: "Things that used to be easy now require enormous effort - the bar keeps getting lower", scores: { smouldering: 3 } },
      { text: "I've lost the ability to do things I could previously do without thinking", scores: { shutdown: 3 } },
      { text: "I can still do them, but each one costs far more than it should - and nobody sees that cost", scores: { masked: 3 } },
      { text: "I'm slowly getting some skills back, but I'm being more careful about how I spend my energy", scores: { recovering: 3 } },
    ],
  },
  {
    text: "How does your capacity change throughout a typical day?",
    section: 1,
    options: [
      { text: "I start low and stay low - there's not much variation because everything is depleted", scores: { smouldering: 3 } },
      { text: "I can barely get through essential tasks - any additional demand feels impossible", scores: { shutdown: 3 } },
      { text: "I perform well during the day but completely collapse when I'm finally alone", scores: { masked: 3 } },
      { text: "I have windows of genuine capacity, but I'm learning not to overdo it when they appear", scores: { recovering: 3 } },
    ],
  },
  // Section 2: Sensory & Emotional Experience (3 questions)
  {
    text: "How has your sensory experience changed recently?",
    section: 2,
    options: [
      { text: "My tolerance has been slowly shrinking - things that were manageable are becoming harder to bear", scores: { smouldering: 3 } },
      { text: "I'm overwhelmed by things that never bothered me before - it's like my filters have completely failed", scores: { shutdown: 3 } },
      { text: "I manage in public but need to retreat to a controlled environment to recover from sensory exposure", scores: { masked: 3 } },
      { text: "I'm more aware of my sensory needs now and actively managing my environment to protect my capacity", scores: { recovering: 3 } },
    ],
  },
  {
    text: "What best describes your emotional state lately?",
    section: 2,
    options: [
      { text: "Flat and disconnected - I don't feel much of anything anymore, including joy", scores: { smouldering: 3 } },
      { text: "Intense and dysregulated - small things trigger big emotional responses I can't control", scores: { shutdown: 3 } },
      { text: "Contained in public, but volatile or numb in private - the contrast surprises even me", scores: { masked: 3 } },
      { text: "More regulated than before, but I still have unexpected emotional waves related to what I've been through", scores: { recovering: 3 } },
    ],
  },
  {
    text: "How do you feel about social interaction right now?",
    section: 2,
    options: [
      { text: "I've been gradually withdrawing - socialising has become more draining than it used to be", scores: { smouldering: 3 } },
      { text: "I can barely tolerate any social contact - even messages or calls feel overwhelming", scores: { shutdown: 3 } },
      { text: "I can still socialise when I have to, but the masking required is becoming unsustainable", scores: { masked: 3 } },
      { text: "I'm being more selective about social energy - choosing connection that genuinely nourishes me", scores: { recovering: 3 } },
    ],
  },
  // Section 3: Daily Functioning & Skills (3 questions)
  {
    text: "Thinking about skills you've relied on - cooking, cleaning, personal care, managing admin - what's happening with them?",
    section: 3,
    options: [
      { text: "They're declining slowly - each week I seem to manage a little less than the week before", scores: { smouldering: 3 } },
      { text: "Several have disappeared almost overnight - I genuinely can't do things I could do recently", scores: { shutdown: 3 } },
      { text: "I maintain them in visible areas of my life but have let go of everything behind closed doors", scores: { masked: 3 } },
      { text: "Some are coming back, others haven't returned yet - I'm learning which ones to prioritise", scores: { recovering: 3 } },
    ],
  },
  {
    text: "How are you managing with executive function tasks like planning, organising, and decision-making?",
    section: 3,
    options: [
      { text: "Everything requires more steps, more reminders, more effort than it should - my brain feels foggy all the time", scores: { smouldering: 3 } },
      { text: "I can barely make simple decisions - my brain feels like it's running in safe mode", scores: { shutdown: 3 } },
      { text: "I still appear organised to others, but I'm using every compensatory strategy I have just to keep up appearances", scores: { masked: 3 } },
      { text: "I'm rebuilding my systems with more self-knowledge - simpler structures that match my actual capacity", scores: { recovering: 3 } },
    ],
  },
  {
    text: "What's your relationship with your special interests or hobbies right now?",
    section: 3,
    options: [
      { text: "They don't bring me the joy or engagement they used to - I go through the motions but the spark is dimmer", scores: { smouldering: 3 } },
      { text: "I've lost access to them almost entirely - I can't engage with things I used to love", scores: { shutdown: 3 } },
      { text: "I use them strategically to recover from masking, but even they feel more like medicine than pleasure", scores: { masked: 3 } },
      { text: "They're starting to feel enjoyable again - reconnecting with my interests feels like finding myself", scores: { recovering: 3 } },
    ],
  },
  // Section 4: Identity & Recovery (3 questions)
  {
    text: "How do you feel about your autistic identity in relation to what you're experiencing?",
    section: 4,
    options: [
      { text: "I'm starting to realise that what I thought was 'just how life is' might actually be burnout that's been building for years", scores: { smouldering: 3 } },
      { text: "I'm struggling to recognise myself - I feel like I've lost the person I was before this happened", scores: { shutdown: 3 } },
      { text: "I understand I'm autistic, but I still feel pressure to perform neurotypically - and that pressure is part of the problem", scores: { masked: 3 } },
      { text: "I'm developing a more honest relationship with my neurology - learning what I actually need versus what I've been told I should need", scores: { recovering: 3 } },
    ],
  },
  {
    text: "When you imagine recovery, what comes to mind?",
    section: 4,
    options: [
      { text: "I'm not sure I'd recognise recovery - I've been depleted for so long that I've forgotten what full capacity feels like", scores: { smouldering: 3 } },
      { text: "I just want to get back to being able to do basic things again - recovery feels very far away", scores: { shutdown: 3 } },
      { text: "I want to stop having to perform wellness - I want to actually feel as okay as I look", scores: { masked: 3 } },
      { text: "I'm in it - it's not what I expected, but I can see progress when I look at where I was versus where I am now", scores: { recovering: 3 } },
    ],
  },
  {
    text: "What kind of support feels most relevant to where you are right now?",
    section: 4,
    options: [
      { text: "Help recognising that this is burnout and understanding why it's been happening so gradually I didn't see it", scores: { smouldering: 3 } },
      { text: "Practical support to reduce demands and create conditions where my nervous system can begin to recover", scores: { shutdown: 3 } },
      { text: "Permission and strategies to lower the mask - and support to handle the consequences of being more visibly autistic", scores: { masked: 3 } },
      { text: "Guidance on building a sustainable life that prevents the next burnout while consolidating my recovery", scores: { recovering: 3 } },
    ],
  },
];
const SECTION_TITLES = {
  1: "Your Energy & Capacity",
  2: "Sensory & Emotional Experience",
  3: "Daily Functioning & Skills",
  4: "Identity & Recovery",
};
const REFERRAL_URL = "https://estushealth.com.au/referral";
export default function BurnoutQuiz() {
  const [screen, setScreen] = useState("landing");
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({ smouldering: 0, shutdown: 0, masked: 0, recovering: 0 });
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
    const finalScores = { smouldering: 0, shutdown: 0, masked: 0, recovering: 0 };
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
      setScores({ smouldering: 0, shutdown: 0, masked: 0, recovering: 0 });
      setResult(null);
      setSecondaryResult(null);
    });
  };
  const archetype = result ? ARCHETYPES[result] : null;
  const secondaryArchetype = secondaryResult ? ARCHETYPES[secondaryResult] : null;
  const shareText = archetype
    ? `I got ${archetype.name} on the Autistic Burnout Quiz! ${archetype.tagline}. Take the quiz: ${REFERRAL_URL}`
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
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{"\u{1F525}"}</div>
              <h1>Are You Experiencing Autistic&nbsp;Burnout?</h1>
              <p className="subtitle">
                Understand your burnout pattern - and discover strategies that work
                with your neurology, not against it.
              </p>
              <div className="time-badge">{"\u{1F550}"} Takes ~3 minutes {"\u00B7"} 12 questions</div>
              <br />
              <div className="landing-notes">
                <strong style={{ color: "var(--dark)" }}>A note before you start:</strong> This quiz isn't a diagnostic tool - it's a reflection exercise designed to help autistic adults (diagnosed or self-identified) understand their relationship with burnout. Autistic burnout is a recognised experience characterised by long-term exhaustion, loss of skills, and reduced tolerance to stimuli. Every result has genuine value, and most people will relate to more than one profile.
              </div>
              <button className="btn-primary" onClick={() => transition(() => setScreen("quiz"))}>
                Explore Your Burnout Profile
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
