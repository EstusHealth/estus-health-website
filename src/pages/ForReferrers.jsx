import { useState } from "react";

// ─── STYLES (CHARCOAL THEME) ────────────────────────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    background: "hsl(220 15% 16%)", // Charcoal
    backgroundImage: "linear-gradient(180deg, hsl(220 15% 16%) 0%, hsl(220 15% 14%) 100%)",
    color: "hsl(40 10% 94%)",
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
    color: "hsl(40 10% 94%)",
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
    color: "hsl(40 10% 94% / 0.7)",
    maxWidth: "580px",
  },

  // ── Self-referral callout ───────────────────────────────────────────────
  callout: {
    background: "hsl(220 15% 22%)", // Lighter Charcoal
    border: "1px solid hsl(24 90% 48% / 0.3)",
    borderRadius: "4px",
    boxShadow: "0 0 40px hsl(24 90% 48% / 0.07)",
    padding: "2rem 2.25rem",
    display: "flex",
    gap: "1.5rem",
    alignItems: "stretch",
    marginBottom: "3.5rem",
  },
  calloutBar: {
    width: "3px",
    background: "hsl(24 90% 48%)",
    borderRadius: "2px",
    flexShrink: 0,
  },
  calloutInner: {
    flex: 1,
  },
  calloutTag: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.65rem",
    color: "hsl(24 90% 48%)",
    fontWeight: 500,
    marginBottom: "0.5rem",
  },
  calloutTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "hsl(40 10% 94%)",
    marginBottom: "0.45rem",
    lineHeight: 1.4,
  },
  calloutBody: {
    fontSize: "0.88rem",
    color: "hsl(40 10% 94% / 0.65)",
    lineHeight: 1.6,
    marginBottom: "1rem",
  },
  calloutLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    color: "hsl(24 90% 48%)",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontSize: "0.72rem",
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 200ms cubic-bezier(.4,0,.2,1)",
  },

  // ── Section titles ───────────────────────────────────────────────────────
  sectionTag: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.65rem",
    color: "hsl(24 90% 48%)",
    fontWeight: 500,
    marginBottom: "0.4rem",
  },
  sectionTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: "hsl(40 10% 94%)",
    marginBottom: "1.25rem",
  },

  // ── Card ─────────────────────────────────────────────────────────────────
  card: {
    background: "hsl(220 15% 22%)",
    border: "1px solid hsl(220 15% 28%)",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3)",
    padding: "1.75rem 2rem",
  },

  // ── Step row ─────────────────────────────────────────────────────────────
  step: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
  },
  stepNum: {
    width: "28px",
    height: "28px",
    minWidth: "28px",
    borderRadius: "50%",
    background: "hsl(220 15% 26%)",
    border: "1px solid hsl(220 15% 30%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "hsl(24 90% 48%)",
  },
  stepTitle: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "hsl(40 10% 94%)",
    marginBottom: "0.2rem",
  },
  stepBody: {
    fontSize: "0.82rem",
    color: "hsl(220 10% 70%)",
    lineHeight: 1.55,
  },

  // ── Include list item ────────────────────────────────────────────────────
  includeRow: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-start",
    marginBottom: "0.85rem",
  },
  includeDot: {
    width: "6px",
    height: "6px",
    minWidth: "6px",
    borderRadius: "50%",
    background: "hsl(24 90% 48%)",
    marginTop: "6px",
  },
  includeText: {
    fontSize: "0.84rem",
    color: "hsl(40 10% 94% / 0.7)",
    lineHeight: 1.55,
  },

  // ── Funding badge ────────────────────────────────────────────────────────
  fundingBadge: {
    background: "hsl(220 15% 26%)",
    border: "1px solid hsl(220 15% 30%)",
    borderRadius: "4px",
    padding: "0.9rem 1.1rem",
    marginTop: "1.25rem",
  },
  fundingLabel: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.58rem",
    color: "hsl(220 10% 60%)",
    fontWeight: 500,
    marginBottom: "0.3rem",
  },
  fundingText: {
    fontFamily: "'Libre Baskerville', serif",
    fontStyle: "italic",
    fontSize: "0.87rem",
    color: "hsl(40 10% 94% / 0.8)",
    lineHeight: 1.5,
  },

  // ── CTA block at bottom ──────────────────────────────────────────────────
  cta: {
    background: "hsl(220 15% 22%)",
    border: "1px solid hsl(220 15% 28%)",
    borderRadius: "4px",
    padding: "2.75rem 2rem",
    textAlign: "center",
    marginTop: "3.5rem",
  },
  ctaTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "hsl(40 10% 94%)",
    marginBottom: "0.6rem",
  },
  ctaBody: {
    fontSize: "0.88rem",
    color: "hsl(220 10% 70%)",
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
    color: "hsl(220 10% 60%)",
    marginTop: "0.6rem",
  },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Referrers() {
  const [hoverCalloutLink, setHoverCalloutLink] = useState(false);
  const [hoverCtaBtn, setHoverCtaBtn] = useState(false);

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500;600&family=Libre+Baskerville:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={S.grain} />

      <div style={S.wrap}>

        {/* ════════════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════════════ */}
        <div style={S.hero}>
          <div style={S.heroLabel}>
            <div style={S.heroLabelLine} />
            For Referrers
          </div>
          <h1 style={S.heroTitle}>
            Referring <span style={S.accentGradient}>a client</span>
          </h1>
          <p style={S.heroBody}>
            Everything you need to know — whether you're a GP, support coordinator, or referring yourself.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            SELF-REFERRAL CALLOUT
        ════════════════════════════════════════════════════════════════════ */}
        <div style={S.callout}>
          <div style={S.calloutBar} />
          <div style={S.calloutInner}>
            <div style={S.calloutTag}>Good news</div>
            <div style={S.calloutTitle}>Self-referrals are welcome.</div>
            <p style={S.calloutBody}>
              You don't need a GP or another professional to get started. If you'd like to refer yourself or a family member, use the self-referral form — no referral letter required.
            </p>
            <a
              href="https://questot.forms.pracsuite.com/t/FOI8g8zzGUrDKFfbJkTKEke1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...S.calloutLink,
                color: hoverCalloutLink ? "hsl(24 90% 60%)" : "hsl(24 90% 48%)",
              }}
              onMouseEnter={() => setHoverCalloutLink(true)}
              onMouseLeave={() => setHoverCalloutLink(false)}
            >
              Open the self-referral form →
            </a>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════════════════════════════════ */}
        <div style={{ maxWidth: "720px", marginBottom: "2.75rem" }}>
          <div style={S.sectionTag}>How it works</div>
          <h2 style={S.sectionTitle}>The referral process</h2>

          <div style={S.card}>
            <div style={S.step}>
              <div style={S.stepNum}>1</div>
              <div>
                <div style={S.stepTitle}>Submit a referral</div>
                <div style={S.stepBody}>
                  Use the self-referral form if you're referring yourself or a family member. If you're a GP, support coordinator, or another professional, you can use the same form on behalf of your client — just fill in the "About the client" section with their details.
                </div>
              </div>
            </div>

            <div style={S.step}>
              <div style={S.stepNum}>2</div>
              <div>
                <div style={S.stepTitle}>We review and make contact</div>
                <div style={S.stepBody}>
                  We'll review the referral and get in touch within 24 hours to discuss next steps, confirm suitability, and arrange an initial appointment.
                </div>
              </div>
            </div>

            <div style={{ ...S.step, marginBottom: 0 }}>
              <div style={S.stepNum}>3</div>
              <div>
                <div style={S.stepTitle}>We keep you in the loop</div>
                <div style={S.stepBody}>
                  If you're a referring professional, we'll keep you updated on progress (with the client's consent) and send through any reports once the assessment or therapy is complete.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            WHAT TO INCLUDE + FUNDING WORDING
        ════════════════════════════════════════════════════════════════════ */}
        <div style={{ maxWidth: "720px" }}>
          <div style={S.sectionTag}>Helpful</div>
          <h2 style={S.sectionTitle}>What to include in your referral</h2>

          <div style={S.card}>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "hsl(40 10% 94%)" }}>Client's name and contact details</strong> — or yours, if you're referring yourself.
              </div>
            </div>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "hsl(40 10% 94%)" }}>What service you're enquiring about</strong> — NDIS Access Request Support, Functional Capacity Assessment, or Occupational Therapy.
              </div>
            </div>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "hsl(40 10% 94%)" }}>Funding type</strong> — Private, self-managed NDIS, or plan-managed NDIS.
              </div>
            </div>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "hsl(40 10% 94%)" }}>A brief description of the client's needs</strong> — even a few sentences helps us prepare.
              </div>
            </div>

            {/* Funding wording */}
            <div style={S.
