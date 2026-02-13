import { useState } from "react";
const ARCHETYPES = {
  deepdiver: {
    name: "The Deep Diver",
    emoji: "\u{1F3AE}",
    tagline: "Gaming is your special interest - and that's a genuine strength",
    description: [
      "Gaming isn't just something you do - it's something you are. You bring the same depth, intensity, and passion to your gaming that characterises a true special interest. You don't just play games; you study them, master them, collect knowledge about them, and find profound satisfaction in the systems, stories, and skills they offer. This kind of deep engagement is a hallmark of autistic passion, and it's genuinely valuable.",
      "Your gaming knowledge is likely extensive and detailed. You might know game mechanics at a level most players never reach, have strong opinions about design philosophy, follow development studios and industry trends, or have built skills - strategic thinking, problem-solving, pattern recognition, reaction time - that transfer well beyond the screen.",
      "For you, gaming provides what every good special interest provides: a reliable source of flow state, intellectual stimulation, emotional regulation, and identity. It's not escapism - it's engagement. The world of gaming makes sense to your brain in a way that other domains might not, and that connection is something to be understood and supported, not pathologised."
    ],
    tips: [
      "Lean into your special interest with confidence - deep gaming knowledge and skills are genuinely valuable, whether for career paths, social connection, or personal fulfilment",
      "Use gaming as a conscious regulation tool: notice which genres, mechanics, or play styles help you decompress, focus, or regulate your emotions - this self-knowledge is powerful",
      "Watch for the 'obligation trap': if gaming starts to feel like a demand (streaming schedules, guild commitments, completion pressure), it can lose its regulatory benefit. Protect the joy",
      "Consider how your gaming expertise might connect to broader interests or opportunities - game design, community building, content creation, competitive play, or even therapeutic applications"
    ],
    insight: "Research increasingly recognises that autistic special interests serve crucial neurological functions: they regulate the nervous system, provide cognitive stimulation, build identity, and create social connection. Gaming as a special interest is no different from any other deep passion - it just happens to be one that's often dismissed or pathologised by people who don't understand its genuine value to your neurology.",
    nextResource: {
      title: "Want to explore how gaming fits into your bigger picture?",
      description: "At Estus Health, we use gaming-informed therapy approaches that honour your special interest. We help you leverage your gaming strengths while building a life that works for your whole neurology.",
      cta: "Get in touch with our team",
    },
  },
  escapist: {
    name: "The Escape Artist",
    emoji: "\u{1F6E1}\uFE0F",
    tagline: "Gaming is your shelter - but the storm is still outside",
    description: [
      "Gaming has become your primary way of avoiding things that feel overwhelming, distressing, or impossible to face. It's not that you don't care about the tasks, responsibilities, or problems you're avoiding - it's that gaming provides a reliable, predictable, controllable environment when everything else feels chaotic, demanding, or threatening. Your brain has found the most effective escape route it can, and it's using it.",
      "The avoidance pattern often looks like this: you know there are things you need to do. You might even want to do them. But the activation energy required to start feels enormous, while gaming requires almost none - it's immediately rewarding, reliably engaging, and demands nothing of you emotionally. So the gap between 'I should do this' and 'I'm gaming instead' keeps growing, and with it comes guilt, shame, and a deepening cycle.",
      "Here's the important reframe: your brain isn't being lazy or irresponsible. It's doing what overwhelmed nervous systems do - seeking the path of least resistance to safety. Gaming provides genuine neurological relief: predictable rules, controllable stimulation, clear feedback, and a temporary reprieve from demands. The problem isn't the gaming itself - it's that the underlying distress or demand overload isn't being addressed."
    ],
    tips: [
      "Name the avoidance without judgement: 'I'm gaming because the alternative feels overwhelming right now' is honest, not shameful. Understanding the function is the first step to changing the pattern",
      "Address the demand load, not the gaming: the most effective strategy isn't to restrict gaming - it's to reduce the overwhelm that's driving you toward it. What specific demands are you avoiding, and can any of them be reduced, delegated, or restructured?",
      "Try the 'ten-minute bridge': before gaming, commit to spending just ten minutes on one avoided task. Not to complete it - just to make contact with it. Often the hardest part is starting, and even brief engagement reduces the avoidance momentum",
      "Build awareness around your gaming sessions: notice when you're gaming from choice versus gaming from avoidance. They feel different internally, even if they look the same externally"
    ],
    insight: "Avoidance-driven gaming in autistic adults is often misdiagnosed as 'gaming addiction' when it's actually a symptom of demand overload, executive function challenges, or unaddressed burnout. The gaming isn't the problem - it's the most visible symptom of a nervous system that needs support. Treat the underlying overwhelm, and the compulsive quality of the gaming often resolves naturally.",
    nextResource: {
      title: "Let's address what's underneath the gaming",
      description: "Our team at Estus Health uses gaming-informed approaches to understand your relationship with gaming without judgement. We help you address the demands and distress driving the avoidance pattern.",
      cta: "Get in touch with our team",
    },
  },
  balanced: {
    name: "The Balanced Player",
    emoji: "\u{2696}\uFE0F",
    tagline: "Gaming serves you well - with a few patterns worth watching",
    description: [
      "Your relationship with gaming has elements of both genuine special interest and occasional avoidance, and overall you're managing the balance reasonably well. You enjoy gaming deeply and it provides real benefits to your wellbeing - regulation, stimulation, social connection, and joy. At the same time, you're honest enough to recognise that sometimes you game when you probably shouldn't, or use it to put off things that feel hard.",
      "This mixed profile is actually the most common one among autistic gamers, and it's not a problem to solve - it's a balance to maintain. Most people who have a genuine special interest in gaming will sometimes use it as an escape, just as someone whose special interest is reading might retreat into books when life gets hard. The question isn't whether this ever happens, but whether it's happening in a way that consistently undermines your wellbeing or goals.",
      "Your self-awareness about the dual nature of your gaming is a significant strength. You can distinguish between gaming that nourishes you and gaming that's hiding you, and that distinction is the key to maintaining a healthy, sustainable relationship with something you genuinely love."
    ],
    tips: [
      "Develop your personal 'check-in habit': before a gaming session, briefly ask yourself 'Am I choosing this or avoiding something?' No judgement either way - just awareness",
      "Protect the joy of gaming as a special interest by being honest about when it shifts into avoidance. The two feel different, and honouring that difference keeps gaming positive",
      "Use gaming as a deliberate reward and regulation tool: 'I'll do this task, then game for an hour' works well for many autistic brains because it pairs a demand with a reliable reward",
      "Monitor your baseline: if the balance starts tipping more toward avoidance than enjoyment, take it as a signal that your demand load needs attention, not that gaming needs restricting"
    ],
    insight: "The key insight for balanced gamers is that the goal isn't to eliminate the avoidance function of gaming - it's to ensure it doesn't become the primary function. A special interest that occasionally serves as a refuge is healthy. A refuge that occasionally feels like a special interest is a warning sign. You currently sit on the healthier side of that spectrum, and understanding what tips the balance helps you stay there.",
    nextResource: {
      title: "Want to optimise your gaming balance?",
      description: "At Estus Health, our gaming-informed therapists understand the nuance of your relationship with gaming. We can help you strengthen the patterns that serve you and address the ones that don't.",
      cta: "Get in touch with our team",
    },
  },
  burnedout: {
    name: "The Burnt Controller",
    emoji: "\u{1F6A8}",
    tagline: "Gaming has shifted from nourishing to numbing",
    description: [
      "Your gaming has moved past special interest and past occasional avoidance into something that's actively impacting your health, relationships, daily functioning, or sense of self. You might be gaming for hours longer than you intend, neglecting basic needs like sleep, food, hygiene, or responsibilities, and feeling worse - not better - after long sessions. The thing that used to help regulate you is now dysregulating you.",
      "This pattern often develops gradually. Gaming started as something genuinely enjoyable and regulating. Then life got harder - demands increased, burnout set in, mental health declined, or supports fell away - and gaming became the primary coping mechanism because nothing else was accessible. Over time, the dose needed to achieve the same relief kept increasing, while the relief itself kept decreasing. You're now gaming compulsively, not enjoyably.",
      "It's crucial to understand that this isn't a moral failing or a lack of willpower. Your nervous system found the most reliable source of dopamine, predictability, and escape available to it, and it's clinging to it because the alternatives feel impossible. The compulsive quality of your gaming is a symptom of unmet needs and overwhelm, not a character flaw."
    ],
    tips: [
      "Start with compassion, not restriction: trying to simply stop or reduce gaming without addressing what's driving it usually triggers more distress and stronger rebound gaming. Understand the 'why' first",
      "Identify your basic needs that gaming is displacing: sleep, nutrition, movement, hygiene, social connection. Pick the one that feels most manageable and commit to protecting it - not perfectly, just consistently",
      "Seek support specifically from someone who understands both gaming and neurodivergence - generic 'screen time' advice or addiction frameworks often miss the autistic context entirely",
      "Notice the difference between gaming that leaves you feeling regulated and gaming that leaves you feeling hollow. The first is still serving a function; the second is the compulsive pattern that needs attention"
    ],
    insight: "What's often labelled 'gaming addiction' in autistic adults is frequently a combination of autistic burnout, demand avoidance, executive function challenges, and a lack of alternative regulation strategies. The gaming isn't the core problem - it's the most visible symptom of a system under stress. Effective support addresses the underlying neurology, not just the screen time.",
    nextResource: {
      title: "You deserve support that actually understands this",
      description: "At Estus Health, we specialise in gaming-informed, neuro-affirming therapy. We won't tell you to just stop gaming - we'll help you understand what's driving the pattern and build genuine alternatives that work for your brain.",
      cta: "Get in touch with our team",
    },
  },
};
const QUESTIONS = [
  // Section 1: Your Gaming Patterns (3 questions)
  {
    text: "Think about a typical week. What best describes your gaming pattern?",
    section: 1,
    options: [
      { text: "I have dedicated gaming time that I look forward to - it's a valued part of my routine", scores: { deepdiver: 3 } },
      { text: "I often find myself gaming when I know there are other things I should be doing", scores: { escapist: 3 } },
      { text: "It varies - sometimes I game because I want to, sometimes because I'm avoiding something else", scores: { balanced: 3 } },
      { text: "I game for much longer than I intend to, and it's hard to stop even when I want to", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "When you sit down to game, what's usually driving the decision?",
    section: 1,
    options: [
      { text: "Genuine excitement about what I'm playing - a new challenge, a game I'm invested in, or a skill I'm developing", scores: { deepdiver: 3 } },
      { text: "The need to not think about something else - gaming quiets the noise of demands I can't face", scores: { escapist: 3 } },
      { text: "A mix - sometimes it's enthusiasm, sometimes it's 'I'll do that hard thing after one more game'", scores: { balanced: 3 } },
      { text: "I'm not always sure - I often end up gaming almost automatically, without a clear decision to start", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "How do you feel when you finish a gaming session?",
    section: 1,
    options: [
      { text: "Satisfied and recharged - like I've spent time doing something I genuinely value", scores: { deepdiver: 3 } },
      { text: "Temporarily relieved, but the things I was avoiding are still there - sometimes with added guilt", scores: { escapist: 3 } },
      { text: "Usually good, though occasionally I notice I used gaming to dodge something I should have dealt with", scores: { balanced: 3 } },
      { text: "Often drained, guilty, or hollow - the gaming didn't actually make me feel better, but I couldn't stop", scores: { burnedout: 3 } },
    ],
  },
  // Section 2: Motivation & Emotion (3 questions)
  {
    text: "What role does gaming play in your emotional life?",
    section: 2,
    options: [
      { text: "It's a rich source of joy, flow, and intellectual stimulation - I genuinely love the worlds and systems games offer", scores: { deepdiver: 3 } },
      { text: "It's primarily a way to escape distress, overwhelm, or the weight of real-life demands", scores: { escapist: 3 } },
      { text: "It serves both purposes - sometimes it's pure enjoyment, sometimes it's emotional shelter", scores: { balanced: 3 } },
      { text: "It used to bring joy but now it's more about numbing or filling time - the pleasure has faded but I keep going", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "How do you engage with gaming knowledge and culture outside of actually playing?",
    section: 2,
    options: [
      { text: "Extensively - I follow gaming news, discuss strategies, watch content, and build deep knowledge about games I love", scores: { deepdiver: 3 } },
      { text: "Not much - gaming is more about the in-the-moment relief than a broader interest I engage with outside sessions", scores: { escapist: 3 } },
      { text: "Moderately - I enjoy gaming content and conversations but it's one interest among several", scores: { balanced: 3 } },
      { text: "I used to, but I've lost interest in the broader gaming world - now I mostly just play to pass time or cope", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "If someone suggested you take a full week off from gaming, how would you honestly react?",
    section: 2,
    options: [
      { text: "I'd miss it like I'd miss any special interest, but I could manage - I'd find other things to engage with", scores: { deepdiver: 3 } },
      { text: "I'd feel anxious about losing my main coping strategy - what would I do when things feel overwhelming?", scores: { escapist: 3 } },
      { text: "I'd be a bit uncomfortable but could probably do it - I have other ways to unwind and regulate", scores: { balanced: 3 } },
      { text: "The thought is genuinely distressing - I'm not sure how I'd get through a day without it right now", scores: { burnedout: 3 } },
    ],
  },
  // Section 3: Impact on Daily Life (3 questions)
  {
    text: "How is gaming affecting your daily responsibilities and self-care?",
    section: 3,
    options: [
      { text: "It doesn't interfere - I manage my responsibilities and gaming fits around them comfortably", scores: { deepdiver: 3 } },
      { text: "I regularly delay or skip tasks because gaming feels easier - the avoidance is the bigger issue, not the gaming itself", scores: { escapist: 3 } },
      { text: "Mostly manageable, but I occasionally notice gaming eating into time I should spend on other things", scores: { balanced: 3 } },
      { text: "Basic things are slipping - sleep, meals, hygiene, work, or relationships are being affected by how much I game", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "What's happening with your sleep in relation to gaming?",
    section: 3,
    options: [
      { text: "I generally maintain good sleep habits and wrap up gaming at a reasonable time", scores: { deepdiver: 3 } },
      { text: "I sometimes stay up late gaming because I'm dreading the next day's demands", scores: { escapist: 3 } },
      { text: "Occasionally I lose track of time and stay up later than I planned, but it's not a frequent pattern", scores: { balanced: 3 } },
      { text: "My sleep is regularly disrupted by gaming - I often game late into the night and struggle to stop", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "How do the important people in your life view your gaming?",
    section: 3,
    options: [
      { text: "They understand it's a passion - even if they don't share it, they respect how important it is to me", scores: { deepdiver: 3 } },
      { text: "There's tension - they see me gaming when things aren't getting done and it causes friction", scores: { escapist: 3 } },
      { text: "Mixed - generally accepting, but occasionally concerned when they notice it increasing during stressful times", scores: { balanced: 3 } },
      { text: "It's a significant source of conflict - people close to me are worried, frustrated, or have pulled away", scores: { burnedout: 3 } },
    ],
  },
  // Section 4: Self-Awareness & Wellbeing (3 questions)
  {
    text: "When you're honest with yourself, which statement resonates most?",
    section: 4,
    options: [
      { text: "Gaming is one of the best things in my life - it brings genuine fulfilment and I'm proud of my knowledge and skills", scores: { deepdiver: 3 } },
      { text: "I know I'm using gaming to hide from things, but I don't know how else to cope with the overwhelm", scores: { escapist: 3 } },
      { text: "I enjoy gaming and mostly manage the balance, but I could be more honest about when it tips into avoidance", scores: { balanced: 3 } },
      { text: "Gaming isn't really making me happy anymore, but I can't seem to stop - something needs to change", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "How does your gaming relate to your physical health and wellbeing?",
    section: 4,
    options: [
      { text: "I'm reasonably aware of my physical needs and take breaks, move around, and look after myself alongside gaming", scores: { deepdiver: 3 } },
      { text: "I tend to ignore physical needs when I'm deep in gaming - eating, moving, and stretching fall away", scores: { escapist: 3 } },
      { text: "I'm usually okay but notice that during heavy gaming periods my physical habits slip a bit", scores: { balanced: 3 } },
      { text: "My physical health has noticeably declined - less movement, worse nutrition, more pain, disrupted sleep patterns", scores: { burnedout: 3 } },
    ],
  },
  {
    text: "What kind of support would be most helpful for you right now?",
    section: 4,
    options: [
      { text: "Validation that my gaming is a legitimate special interest and help connecting it to broader life goals", scores: { deepdiver: 3 } },
      { text: "Help addressing the demands and overwhelm that make me retreat into gaming - the gaming itself isn't the core issue", scores: { escapist: 3 } },
      { text: "Strategies for maintaining my current balance and catching early signs when gaming starts serving avoidance more than enjoyment", scores: { balanced: 3 } },
      { text: "Genuine, non-judgemental support to understand why gaming has become compulsive and to rebuild other parts of my life", scores: { burnedout: 3 } },
    ],
  },
];
const SECTION_TITLES = {
  1: "Your Gaming Patterns",
  2: "Motivation & Emotion",
  3: "Impact on Daily Life",
  4: "Self-Awareness & Wellbeing",
};
const REFERRAL_URL = "https://estushealth.com.au/referral";
export default function GamingQuiz() {
  const [screen, setScreen] = useState("landing");
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({ deepdiver: 0, escapist: 0, balanced: 0, burnedout: 0 });
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
    const finalScores = { deepdiver: 0, escapist: 0, balanced: 0, burnedout: 0 };
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
      setScores({ deepdiver: 0, escapist: 0, balanced: 0, burnedout: 0 });
      setResult(null);
      setSecondaryResult(null);
    });
  };
  const archetype = result ? ARCHETYPES[result] : null;
  const secondaryArchetype = secondaryResult ? ARCHETYPES[secondaryResult] : null;
  const shareText = archetype
    ? `I got ${archetype.name} on the Gaming & Wellbeing Quiz! ${archetype.tagline}. Take the quiz: ${REFERRAL_URL}`
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
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{"\u{1F3AE}"}</div>
              <h1>Gaming: Special Interest or&nbsp;Avoidance?</h1>
              <p className="subtitle">
                Explore your relationship with gaming - understand whether it's nourishing you,
                shielding you, or something that needs attention.
              </p>
              <div className="time-badge">{"\u{1F550}"} Takes ~3 minutes {"\u00B7"} 12 questions</div>
              <br />
              <div className="landing-notes">
                <strong style={{ color: "var(--dark)" }}>A note before you start:</strong> This quiz isn't about whether gaming is 'good' or 'bad' - it's about understanding the role it plays in your life right now. For many autistic people, gaming is a genuine special interest that provides regulation, joy, and connection. For others, it can become a primary avoidance strategy when demands feel overwhelming. Most gamers will recognise elements of more than one profile, and your relationship with gaming can change over time.
              </div>
              <button className="btn-primary" onClick={() => transition(() => setScreen("quiz"))}>
                Explore Your Gaming Profile
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
