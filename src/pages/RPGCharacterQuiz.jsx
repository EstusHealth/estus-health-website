import { useState } from "react";
const ARCHETYPES = {
  paladin: {
    name: "The Paladin",
    emoji: "\u{1F6E1}\uFE0F",
    tagline: "Heart of gold, spine of steel - you protect what matters",
    description: [
      "You're the one people turn to when things fall apart. Not because you have all the answers, but because you show up - reliably, steadily, and with a moral compass that rarely wavers. In a D&D party, you'd be the one standing between the dragon and your friends, not out of recklessness, but because protecting people is wired into who you are. Your loyalty isn't performative. It's structural.",
      "Your sense of justice runs deep. You notice when things aren't fair - in systems, in relationships, in how people are treated - and it genuinely bothers you. This can be a tremendous strength: you advocate fiercely, you hold boundaries others won't, and you bring a sense of safety to the people around you. But it can also be exhausting. Carrying the shield for everyone means you sometimes forget to check your own HP.",
      "For many neurodivergent people, the Paladin archetype reflects a pattern of hypervigilance around fairness and responsibility that developed early. You learned to be the reliable one, the protector, the person who holds things together. That's admirable - and it's also worth asking who's holding things together for you."
    ],
    tips: [
      "Your protective instincts are a genuine strength - but remember that even Paladins need to rest at the inn. You can't tank every encounter if your own resources are depleted",
      "Notice when your sense of justice becomes a demand you place on yourself. Fighting every battle isn't noble - it's unsustainable. Pick the quests that matter most",
      "Let other party members carry weight sometimes. Delegating isn't abandoning your role - it's trusting your allies, and that's its own kind of strength",
      "Your consistency and reliability are rare gifts. Make sure you're extending that same loyalty and care to yourself, not just everyone around you"
    ],
    insight: "The Paladin archetype in neurodivergent people often maps to a strong sense of justice sensitivity - the deep, sometimes overwhelming awareness of unfairness that many autistic people experience. This isn't a character flaw or being 'too sensitive.' It's a neurological trait that, when understood and channelled well, becomes one of your greatest assets. The key is learning when to raise the shield and when to set it down.",
    nextResource: {
      title: "Ready to explore your strengths with someone who gets it?",
      description: "At Estus Health, we understand that the traits that make you a protector can also leave you running on empty. We help you build sustainable strategies that honour your values without burning through your hit points.",
      cta: "Get in touch with our team",
    },
  },
  rogue: {
    name: "The Rogue",
    emoji: "\u{1F5E1}\uFE0F",
    tagline: "You don't follow the path - you find a better one",
    description: [
      "You see angles that other people miss. While the rest of the party is debating whether to charge through the front door, you've already found the window, mapped the guard rotation, and identified three escape routes. Your brain works fast, laterally, and with a healthy disregard for 'the way things are supposed to be done.' In a world built for linear thinkers, you're beautifully diagonal.",
      "Adaptability is your superpower. You can read a room, shift your approach mid-conversation, and improvise solutions that nobody else would think of. You're resourceful under pressure and you thrive when you have autonomy. Rules that don't make sense? You'll find a workaround. Systems that are broken? You'll hack them. You're not being defiant - you're being efficient.",
      "The shadow side of the Rogue is that this constant adaptation can be isolating. You might feel like you're always operating slightly outside the group, even when you're technically part of it. Your independent streak is genuine, but it can sometimes mask a need for connection that you've learned to downplay. The lone wolf thing works - until it doesn't."
    ],
    tips: [
      "Your ability to see alternative paths is genuinely valuable - trust it. You're not being difficult when you question the obvious approach; you're often seeing something others have missed",
      "Watch for the 'stealth tax': constantly adapting and masking to fit different situations is exhausting. Find spaces where you can drop the disguise and just be yourself",
      "Independence is a strength, but isolation is a risk. You don't have to join every party, but having at least a few trusted allies makes the adventure significantly better",
      "Your pattern recognition and lateral thinking are cognitive gifts. Consider channelling them into problems that genuinely interest you - you'll be surprised how far they take you"
    ],
    insight: "The Rogue archetype often reflects the autistic experience of navigating a world that wasn't designed for your operating system. The adaptability, the pattern recognition, the slight outsider perspective - these aren't signs of not fitting in. They're signs of a brain that processes differently, and often more creatively, than the mainstream expects. Many Rogues have spent years masking without realising it. Understanding this can be genuinely liberating.",
    nextResource: {
      title: "Want to stop masking and start strategising?",
      description: "At Estus Health, we help Rogues channel their adaptability intentionally rather than reactively. We understand the cognitive load of constant adaptation and can help you build a life that requires less stealth and more authenticity.",
      cta: "Get in touch with our team",
    },
  },
  wizard: {
    name: "The Wizard",
    emoji: "\u{1F9D9}",
    tagline: "Knowledge is your magic - and your brain never stops casting",
    description: [
      "Your mind is a library that never closes. You collect knowledge the way other people collect belongings - voraciously, systematically, and with a depth that genuinely surprises people. In a D&D party, you're the one who knows the lore, understands the mechanics, and has probably read the Monster Manual cover to cover. Twice. Your special interests aren't hobbies - they're deep dives into entire knowledge systems.",
      "You think in systems. Where others see isolated events, you see patterns, connections, and underlying structures. This makes you exceptional at analysis, problem-solving, and understanding complex topics at a level that most people never reach. You might be the person everyone comes to when they need something explained, researched, or figured out - because your brain doesn't just learn things, it maps them.",
      "The challenge for Wizards is that your intellectual intensity can sometimes feel alienating. You might struggle with small talk when your brain wants to discuss the deep stuff. You might feel frustrated when others don't share your need for accuracy or depth. And you might find it hard to switch off - because a brain that loves learning doesn't come with an off switch."
    ],
    tips: [
      "Your deep knowledge and systematic thinking are genuine cognitive strengths. Don't dim them down because others find them intimidating - find people who appreciate the depth",
      "Create deliberate 'spellbook time' for your special interests. Scheduling deep-dive sessions protects them from being crowded out by demands, and gives your brain the stimulation it needs",
      "Watch for analysis paralysis: sometimes you need to cast the spell before you've read every scroll. Good enough is sometimes better than perfect, especially for low-stakes decisions",
      "Your need for accuracy and depth isn't pedantic - it's how your brain builds understanding. But learn to gauge when others need the full lecture versus the executive summary"
    ],
    insight: "The Wizard archetype maps directly to what researchers call 'monotropism' - the tendency toward deep, focused attention on specific interests. This isn't a deficit in attention. It's a different distribution of attention, one that allows for extraordinary depth at the cost of breadth. Understanding this about yourself can transform how you approach work, study, relationships, and self-care. Your brain isn't scattered or obsessive - it's specialised.",
    nextResource: {
      title: "Ready to understand your cognitive architecture?",
      description: "At Estus Health, we help Wizards understand and leverage their unique cognitive profile. We don't try to make you more 'balanced' - we help you build a life that works with your deep-focus brain, not against it.",
      cta: "Get in touch with our team",
    },
  },
  bard: {
    name: "The Bard",
    emoji: "\u{1F3B6}",
    tagline: "You feel everything deeply - and turn it into something meaningful",
    description: [
      "You experience the world at high resolution. Emotions, atmospheres, subtexts, the energy in a room - you pick up on things that others walk straight past. In a D&D party, you're the one who notices the NPC is lying, who smooths over the argument between the Fighter and the Cleric, and who somehow makes the whole group feel like they belong. Your emotional intelligence isn't just a skill - it's a sensory system.",
      "Creativity flows naturally from you, whether that looks like art, music, writing, problem-solving, humour, or simply the way you connect with people. You have an intuitive understanding of narrative - in stories, in relationships, in life. You see meaning where others see randomness, and you have a gift for helping others see it too. People are often drawn to you because you make them feel understood.",
      "The Bard's challenge is intensity. Feeling everything deeply is a gift until it becomes overwhelming. You might absorb other people's emotions, struggle to set boundaries, or find yourself performing for others at the expense of your own needs. Sensory and emotional overwhelm can hit hard when you're always running with the volume turned up. Your empathy is a superpower, but it needs its own HP management."
    ],
    tips: [
      "Your emotional depth and creativity are genuine strengths - not weaknesses to manage. The world needs people who feel things deeply and can translate those feelings into connection and meaning",
      "Build in regular 'long rest' time for sensory and emotional recovery. You process more than most people, and that processing needs space. Solitude isn't antisocial for you - it's maintenance",
      "Learn to distinguish between your emotions and others' emotions. You likely absorb feelings from people around you without realising it. Regular check-ins ('Is this mine?') can be genuinely transformative",
      "Your ability to read people and situations is a real skill. Trust it. But also learn when to turn the perception dial down - not every room needs to be fully read, and not every subtext needs to be decoded"
    ],
    insight: "The Bard archetype often reflects heightened interoception and emotional processing that many neurodivergent people experience. This isn't being 'too sensitive' or 'too emotional' - it's having a nervous system that processes social and emotional information at a higher bandwidth than average. Research shows this kind of empathic depth is neurologically real, not imagined. Understanding it as a feature of your neurology, rather than a personality flaw, changes everything.",
    nextResource: {
      title: "Want to harness your emotional depth without burning out?",
      description: "At Estus Health, we help Bards build sustainable strategies for managing their high-bandwidth emotional processing. We understand that your sensitivity is a strength - and we help you protect it.",
      cta: "Get in touch with our team",
    },
  },
};
const QUESTIONS = [
  // Section 1: Your Adventuring Style (3 questions)
  {
    text: "Your party arrives at a fork in the dungeon. One path is well-lit and mapped. The other is dark, unmapped, but you can hear something interesting. What do you do?",
    section: 1,
    options: [
      { text: "Take the mapped path - no point risking the party's safety on curiosity alone", scores: { paladin: 3, rogue: 0, wizard: 1, bard: 0 } },
      { text: "Scout the dark path alone first - if it's dangerous, only I'm at risk", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Investigate that sound carefully - unknown paths often hold the most valuable discoveries", scores: { paladin: 0, rogue: 1, wizard: 3, bard: 0 } },
      { text: "Ask the group how they're feeling about it - the best path is the one everyone's comfortable with", scores: { paladin: 1, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "You find a mysterious spellbook in an abandoned tower. The text is in a language you don't know. Your instinct is to...",
    section: 1,
    options: [
      { text: "Secure it carefully and bring it back to someone who can translate it safely - unknown magic is dangerous", scores: { paladin: 3, rogue: 0, wizard: 1, bard: 0 } },
      { text: "Pocket it quietly - could be valuable, could be useful, either way it's better in my hands than left here", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Sit down and start trying to decode it immediately - this is the most exciting thing that's happened all week", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 1 } },
      { text: "Read it aloud and see what happens - life's too short for caution when there's magic involved", scores: { paladin: 0, rogue: 1, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "In real life, when you face a new challenge or unfamiliar situation, your first move is usually to...",
    section: 1,
    options: [
      { text: "Figure out who might be affected and what I need to do to make sure things go smoothly for everyone", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "Assess the situation quickly, identify my options, and stay flexible - plans change, and I adapt", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Research it thoroughly before acting - I need to understand something before I can engage with it properly", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 0 } },
      { text: "Check in with my gut feeling and the people around me - I trust my instincts and I read the room", scores: { paladin: 1, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  // Section 2: Party Dynamics (3 questions)
  {
    text: "Two members of your adventuring party are having a heated argument about strategy. You...",
    section: 2,
    options: [
      { text: "Step in and mediate - someone needs to keep this group together, and that someone is usually me", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "Let them sort it out while I quietly work on a backup plan in case their argument delays us", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Point out that both arguments have logical flaws and suggest a third option based on the actual evidence", scores: { paladin: 0, rogue: 1, wizard: 3, bard: 0 } },
      { text: "Read the emotional undercurrent - the argument probably isn't really about strategy. Address what's actually going on", scores: { paladin: 1, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "Your ideal role in any group - real life or game - is best described as...",
    section: 2,
    options: [
      { text: "The anchor. I'm the one people count on to be steady, fair, and present when things get difficult", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "The wild card. I bring ideas and solutions nobody else would think of, and I work best with freedom", scores: { paladin: 0, rogue: 3, wizard: 0, bard: 1 } },
      { text: "The strategist. I see the big picture, understand the systems at play, and plan the best path forward", scores: { paladin: 0, rogue: 1, wizard: 3, bard: 0 } },
      { text: "The heart. I keep the group connected, motivated, and aware of each other's needs", scores: { paladin: 1, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "A friend messages you at midnight saying they're having a really hard time. You...",
    section: 2,
    options: [
      { text: "Drop everything and respond immediately - when someone needs help, that takes priority over my own comfort", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "Respond with something practical and helpful - empathy is good, but what they probably need is a solution", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Try to understand the full context first before responding - I want to give advice that's actually accurate, not just comforting", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 0 } },
      { text: "Send a voice message letting them know I hear them and I'm here - sometimes people just need to feel less alone", scores: { paladin: 0, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  // Section 3: Your Inner Quest (3 questions)
  {
    text: "If your brain were a D&D stat block, your highest stat would honestly be...",
    section: 3,
    options: [
      { text: "Constitution - I can endure things that would break other people. I keep going when it gets hard", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "Dexterity - I'm quick, adaptive, and I can dodge problems that would hit others head-on", scores: { paladin: 0, rogue: 3, wizard: 0, bard: 0 } },
      { text: "Intelligence - I learn fast, think deeply, and understand systems that confuse most people", scores: { paladin: 0, rogue: 1, wizard: 3, bard: 0 } },
      { text: "Charisma - I connect with people naturally, express myself well, and feel things at full volume", scores: { paladin: 0, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "What tends to drain your 'mana' (energy) the fastest in everyday life?",
    section: 3,
    options: [
      { text: "Seeing injustice or unfairness and not being able to fix it - it genuinely weighs on me", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "Being stuck in rigid systems or routines with no room to do things my own way", scores: { paladin: 0, rogue: 3, wizard: 0, bard: 0 } },
      { text: "Shallow conversations and environments where curiosity or depth isn't valued", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 1 } },
      { text: "Absorbing other people's stress and emotions - I pick up on everything and it's exhausting", scores: { paladin: 1, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "The quest reward you'd value most in real life is...",
    section: 3,
    options: [
      { text: "Knowing the people I care about are safe, supported, and okay - that's worth more than gold", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 1 } },
      { text: "Freedom and autonomy - the ability to live life on my own terms without arbitrary rules", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Mastery - becoming genuinely excellent at something I care deeply about", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 0 } },
      { text: "Connection - deep, authentic relationships where I can be fully myself", scores: { paladin: 0, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  // Section 4: Battle Strategy (3 questions)
  {
    text: "You're in a boss fight (metaphorical or literal) and things aren't going well. Your response is to...",
    section: 4,
    options: [
      { text: "Dig in and protect the group - I'll take the hits if it means everyone else survives", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 0 } },
      { text: "Look for the exploit - there's always a weakness, a shortcut, or an angle that hasn't been tried yet", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Step back and analyse - what went wrong, what's the pattern, and what's the optimal strategy from here?", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 0 } },
      { text: "Rally the team - morale matters more than tactics when things are desperate. Inspire first, strategise second", scores: { paladin: 1, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "After a long, draining day (your 'daily dungeon'), you recover best by...",
    section: 4,
    options: [
      { text: "Doing something useful for someone else - helping others actually restores me, even when I'm tired", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 0 } },
      { text: "Complete solitude and freedom to do whatever I want with zero obligations or expectations", scores: { paladin: 0, rogue: 3, wizard: 1, bard: 0 } },
      { text: "Diving into a special interest - learning, reading, gaming, or working on a project that fascinates me", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 1 } },
      { text: "Music, creative expression, or a deep conversation with someone who actually gets me", scores: { paladin: 0, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
  {
    text: "If you could add one passive ability to your real-life character sheet, it would be...",
    section: 4,
    options: [
      { text: "Unbreakable Resolve - I can endure any hardship without losing sight of what's right", scores: { paladin: 3, rogue: 0, wizard: 0, bard: 0 } },
      { text: "Shadow Step - I can slip through any situation unnoticed and always find the exit", scores: { paladin: 0, rogue: 3, wizard: 0, bard: 0 } },
      { text: "Perfect Recall - I can remember and connect every piece of information I've ever learned", scores: { paladin: 0, rogue: 0, wizard: 3, bard: 1 } },
      { text: "Emotional Resonance - I can feel what others feel and help them process it", scores: { paladin: 0, rogue: 0, wizard: 0, bard: 3 } },
    ],
  },
];
const SECTION_TITLES = {
  1: "Your Adventuring Style",
  2: "Party Dynamics",
  3: "Your Inner Quest",
  4: "Battle Strategy",
};
const REFERRAL_URL = "https://estushealth.com.au/referral";
export default function RPGCharacterQuiz() {
  const [screen, setScreen] = useState("landing");
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({ paladin: 0, rogue: 0, wizard: 0, bard: 0 });
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
    const finalScores = { paladin: 0, rogue: 0, wizard: 0, bard: 0 };
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
      setScores({ paladin: 0, rogue: 0, wizard: 0, bard: 0 });
      setResult(null);
      setSecondaryResult(null);
    });
  };
  const archetype = result ? ARCHETYPES[result] : null;
  const secondaryArchetype = secondaryResult ? ARCHETYPES[secondaryResult] : null;
  const shareText = archetype
    ? `I got ${archetype.name} on the RPG Character Build Quiz! ${archetype.tagline}. Take the quiz: ${REFERRAL_URL}`
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
        .class-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          max-width: 420px;
          margin: 0 auto 2.5rem;
        }
        .class-card {
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .class-card .class-emoji { font-size: 1.8rem; margin-bottom: 0.35rem; }
        .class-card .class-name { font-weight: 600; color: var(--dark); font-family: 'Playfair Display', serif; }
        @media (max-width: 600px) {
          .quiz-container { padding: 1rem; }
          .landing-hero { padding: 2.5rem 0.5rem 2rem; }
          .question-card { padding: 1.25rem 1rem; }
          .results-hero { padding: 2rem 1.25rem; }
          .cta-box { padding: 2rem 1.25rem; }
          .landing-notes { padding: 1.25rem 1.5rem; }
          .class-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
        }
      `}</style>
      <div className="quiz-container">
        {/* LANDING SCREEN */}
        {screen === "landing" && (
          <div className={`fade-${fadeState}`}>
            <div className="landing-hero">
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{"\u{2694}\uFE0F"}</div>
              <h1>What RPG Class Are&nbsp;You?</h1>
              <p className="subtitle">
                Roll for insight. Discover which classic RPG archetype matches your personality,
                strengths, and the way your brain navigates the world.
              </p>
              <div className="time-badge">{"\u{1F3B2}"} Takes ~3 minutes {"\u00B7"} 12 questions</div>
              <br />
              <div className="class-grid">
                <div className="class-card">
                  <div className="class-emoji">{"\u{1F6E1}\uFE0F"}</div>
                  <div className="class-name">Paladin</div>
                  <div>The Protector</div>
                </div>
                <div className="class-card">
                  <div className="class-emoji">{"\u{1F5E1}\uFE0F"}</div>
                  <div className="class-name">Rogue</div>
                  <div>The Strategist</div>
                </div>
                <div className="class-card">
                  <div className="class-emoji">{"\u{1F9D9}"}</div>
                  <div className="class-name">Wizard</div>
                  <div>The Scholar</div>
                </div>
                <div className="class-card">
                  <div className="class-emoji">{"\u{1F3B6}"}</div>
                  <div className="class-name">Bard</div>
                  <div>The Connector</div>
                </div>
              </div>
              <div className="landing-notes">
                <strong style={{ color: "var(--dark)" }}>A note before you roll:</strong> This isn't a clinical assessment - it's a personality-flavoured exploration using RPG archetypes as a lens. The questions blend D&D scenarios with real-life situations to reveal patterns in how you approach challenges, relationships, and your own inner world. Most people will see elements of multiple classes in themselves, and that's by design. Your character build is uniquely yours.
              </div>
              <button className="btn-primary" onClick={() => transition(() => setScreen("quiz"))}>
                Begin Your Quest
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
                {currentSection < totalSections ? "Continue \u2192" : "Reveal My Class"}
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
              <h2>Your Character Profile</h2>
              {archetype.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="insight-box">
              <strong>{"\u{1F4A1}"} The insight most adventurers miss</strong>
              {archetype.insight}
            </div>
            <div className="results-section">
              <h2>Strategies for Your Build</h2>
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
