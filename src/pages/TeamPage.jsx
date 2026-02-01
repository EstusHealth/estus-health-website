// Team.jsx
//
// Full page component for the team / clinicians page.
// Save as: app/team/page.jsx  (or wherever your team route lives)
//
// Liam is marked "Not currently accepting referrals" per scope Item 6.
// If you add or remove clinicians, just edit the TEAM array below —
// everything else renders automatically.

import { useState } from "react";

// ─── TEAM DATA ───────────────────────────────────────────────────────────────
// Edit this array to add/remove/update team members.
// Set "accepting" to false to show the "Not currently accepting referrals" label.
const team = [
  {
    name: "Liam",
    role: "Founder & Occupational Therapist",
    status: "false",
    bio: "Late-diagnosed autistic clinician with a PDA profile. Liam founded Estus Health to create the kind of support he wished existed — therapy that works with neurodivergent brains, not against them. His focus areas include PDA, gaming-informed therapy, executive function, and supporting adults through the unmasking process.",
    background: "Degrees in Occupational Therapy, Finance, Computer Science, and Machine Learning.",
    specialties: ["PDA Profiles", "Gaming-Informed Therapy", "Executive Function", "Unmasking Support"],
  },
  {
    name: "Nik",
    role: "Occupational Therapist",
    status: "Accepting referrals",
    bio: "Nik brings deep expertise in gaming-informed therapy and understands how to meet clients in the spaces they already feel comfortable. His approach prioritises building genuine connection before any therapeutic 'work' happens — because trust comes first.",
    background: "Background in gaming culture and neurodivergent-affirming practice.",
    specialties: ["Gaming-Informed Therapy", "Adolescents & Young Adults", "Executive Function"],
  },
  {
    name: "Nam",
    role: "Occupational Therapist",
    status: "Accepting referrals",
    bio: "Nam specialises in working with autistic teens and adults, with particular expertise in anime and gaming-informed approaches. She understands that interests aren't just hobbies — they're windows into how someone thinks, what they value, and where they feel most themselves.",
    background: "Passionate about anime, gaming, and neuroaffirming practice.",
    specialties: ["Anime-Informed Therapy", "Gaming", "Teens & Young Adults"],
  },
];
// ─── STYLES ──────────────────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    background: "hsl(0 0% 8%)",
    backgroundImage: "linear-gradient(180deg, hsl(0 0% 8%) 0%, hsl(0 0% 5%) 100%)",
    color: "hsl(40 10% 92%)",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  grain: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.03,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
    backgroundSize: "256px 256px",
  },
  wrap: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 2rem",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    padding: "5.5rem 0 3.5rem",
  },
  heroLabel: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.7rem",
    color: "hsl(24 90% 48%)",
    fontWeight: 500,
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  heroLabelLine: {
    width: "24px",
    height: "1px",
    background: "hsl(24 90% 48%)",
  },
  heroTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
    lineHeight: 1.1,
    fontWeight: 600,
    color: "hsl(40 10% 92%)",
    marginBottom: "1rem",
  },
  accentGradient: {
    background: "linear-gradient(135deg, #f47825, #cb580b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroBody: {
    fontFamily: "'Libre Baskerville', serif",
    fontStyle: "italic",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "hsl(40 10% 92% / 0.7)",
    maxWidth: "560px",
  },

  // ── Team grid ────────────────────────────────────────────────────────────
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    marginBottom: "4rem",
  },

  // ── Clinician card ───────────────────────────────────────────────────────
  card: {
    background: "hsl(0 0% 10%)",
    border: "1px solid hsl(0 0% 20%)",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.4)",
    overflow: "hidden",
    transition: "box-shadow 300ms cubic-bezier(.4,0,.2,1)",
  },
  cardAvatar: {
    height: "180px",
    background: "hsl(0 0% 13%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid hsl(0 0% 20%)",
  },
  avatarCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "hsl(0 0% 16%)",
    border: "2px solid hsl(0 0% 22%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "1.75rem",
    fontWeight: 500,
    color: "hsl(40 10% 92% / 0.5)",
  },
  cardBody: {
    padding: "1.5rem",
  },
  cardName: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "hsl(40 10% 92%)",
    marginBottom: "0.2rem",
  },
  cardRole: {
    fontSize: "0.82rem",
    color: "hsl(0 0% 60%)",
    marginBottom: "0.35rem",
  },
  // Liam's status — mid-gray, subtle, not an error state
  cardStatus: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.78rem",
    color: "hsl(0 0% 55%)",
    marginBottom: "0.75rem",
  },
  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "hsl(0 0% 45%)",
  },
  cardBio: {
    fontSize: "0.82rem",
    color: "hsl(40 10% 92% / 0.6)",
    lineHeight: 1.55,
    marginBottom: "1rem",
  },
  cardServices: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  serviceTag: {
    fontSize: "0.68rem",
    color: "hsl(40 10% 92% / 0.55)",
    background: "hsl(0 0% 14%)",
    border: "1px solid hsl(0 0% 20%)",
    borderRadius: "2px",
    padding: "0.25rem 0.55rem",
    fontFamily: "'Inter', sans-serif",
  },

  // ── CTA strip ────────────────────────────────────────────────────────────
  cta: {
    background: "hsl(0 0% 10%)",
    border: "1px solid hsl(0 0% 20%)",
    borderRadius: "4px",
    padding: "2.75rem 2rem",
    textAlign: "center",
    maxWidth: "680px",
  },
  ctaTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "hsl(40 10% 92%)",
    marginBottom: "0.6rem",
  },
  ctaBody: {
    fontSize: "0.88rem",
    color: "hsl(0 0% 60%)",
    marginBottom: "1.5rem",
    lineHeight: 1.55,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    background: "hsl(24 90% 48%)",
    color: "hsl(0 0% 100%)",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontSize: "0.78rem",
    fontWeight: 500,
    border: "none",
    borderRadius: "4px",
    padding: "0.7rem 1.75rem",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 300ms cubic-bezier(.4,0,.2,1)",
    boxShadow: "0 0 20px hsl(24 90% 48% / 0.2)",
  },
  ctaNote: {
    fontSize: "0.75rem",
    color: "hsl(0 0% 55%)",
    marginTop: "0.55rem",
  },
};

// ─── CLINICIAN CARD ──────────────────────────────────────────────────────────
function ClinicianCard({ member }) {
  const [hovered, setHovered] = useState(false);
  const initials = member.name.charAt(0);

  return (
    <div
      style={{
        ...S.card,
        boxShadow: hovered
          ? "0 10px 15px -3px rgba(0,0,0,0.5)"
          : "0 4px 6px -1px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={S.cardAvatar}>
        <div style={S.avatarCircle}>{initials}</div>
      </div>
      <div style={S.cardBody}>
        <div style={S.cardName}>{member.name}</div>
        <div style={S.cardRole}>{member.role}</div>

        {/* Status label — only shows when accepting is false */}
        {!member.accepting && (
          <div style={S.cardStatus}>
            <div style={S.statusDot} />
            Not currently accepting referrals
          </div>
        )}

        <p style={S.cardBio}>{member.bio}</p>

        <div style={S.cardServices}>
          {member.services.map((s, i) => (
            <span key={i} style={S.serviceTag}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Team() {
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500;600&family=Libre+Baskerville:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={S.grain} />

      <div style={S.wrap}>

        {/* ════════════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════════════ */}
        <div style={S.hero}>
          <div style={S.heroLabel}>
            <div style={S.heroLabelLine} />
            The practice
          </div>
          <h1 style={S.heroTitle}>
            Meet the <span style={S.accentGradient}>team</span>
          </h1>
          <p style={S.heroBody}>
            A small team of experienced clinicians and support staff, working together to provide personalised care for youth and adults.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            TEAM GRID
        ════════════════════════════════════════════════════════════════════ */}
        <div className="team-grid" style={S.grid}>
          {TEAM.map((member, i) => (
            <ClinicianCard key={i} member={member} />
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════════════════════════ */}
        <div style={S.cta}>
          <h2 style={S.ctaTitle}>Want to get started?</h2>
          <p style={S.ctaBody}>
            Use the self-referral form to get in touch — no GP referral needed. We'll match you with the right clinician.
          </p>
          <a
            href="/forms"
            style={{
              ...S.ctaBtn,
              background: hoverBtn ? "hsl(24 90% 58%)" : "hsl(24 90% 48%)",
              boxShadow: hoverBtn
                ? "0 0 40px hsl(24 90% 48% / 0.5)"
                : "0 0 20px hsl(24 90% 48% / 0.2)",
            }}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
          >
            Open the self-referral form →
          </a>
          <div style={S.ctaNote}>Response time within 24 hours</div>
        </div>

        <div style={{ height: "5rem" }} />
      </div>
    </div>
  );
}
