import { useState } from "react";

// ─── STYLES (UPDATED HIGH CONTRAST THEME) ────────────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    background: "#EFEDE6", // New Warm Background
    color: "#1A1A1A",      // New Soft Black Text
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  grain: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.04,
    mixBlendMode: "multiply",
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
    color: "#E85D04", // Brand Orange
    fontWeight: 500,
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  heroLabelLine: {
    width: "24px",
    height: "1px",
    background: "#E85D04",
  },
  heroTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
    lineHeight: 1.1,
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: "1rem",
  },
  accentGradient: {
    background: "linear-gradient(135deg, #E85D04, #C24D00)", // Orange Gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroBody: {
    fontFamily: "'Libre Baskerville', serif",
    fontStyle: "italic",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#4A4A4A", // Dark Grey
    maxWidth: "580px",
  },

  // ── Self-referral callout ───────────────────────────────────────────────
  callout: {
    background: "#FFFFFF", // Pure White
    border: "1px solid #C2B5A8", // Dark Sand Border
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    padding: "2rem 2.25rem",
    display: "flex",
    gap: "1.5rem",
    alignItems: "stretch",
    marginBottom: "3.5rem",
  },
  calloutBar: {
    width: "4px",
    background: "#E85D04",
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
    color: "#E85D04",
    fontWeight: 500,
    marginBottom: "0.5rem",
  },
  calloutTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: "0.45rem",
    lineHeight: 1.4,
  },
  calloutBody: {
    fontSize: "0.88rem",
    color: "#4A4A4A",
    lineHeight: 1.6,
    marginBottom: "1rem",
  },
  calloutLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    color: "#E85D04",
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
    color: "#E85D04",
    fontWeight: 500,
    marginBottom: "0.4rem",
  },
  sectionTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: "#1A1A1A",
    marginBottom: "1.25rem",
  },

  // ── Card ─────────────────────────────────────────────────────────────────
  card: {
    background: "#FFFFFF",
    border: "1px solid #C2B5A8",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
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
    background: "#EBE9E4",
    border: "1px solid #C2B5A8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "#E85D04",
  },
  stepTitle: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: "0.2rem",
  },
  stepBody: {
    fontSize: "0.82rem",
    color: "#4A4A4A",
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
    background: "#E85D04",
    marginTop: "6px",
  },
  includeText: {
    fontSize: "0.84rem",
    color: "#4A4A4A",
    lineHeight: 1.55,
  },

  // ── Funding badge ────────────────────────────────────────────────────────
  fundingBadge: {
    background: "#EBE9E4",
    border: "1px solid #C2B5A8",
    borderRadius: "6px",
    padding: "0.9rem 1.1rem",
    marginTop: "1.25rem",
  },
  fundingLabel: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.58rem",
    color: "#5C5C5C",
    fontWeight: 500,
    marginBottom: "0.3rem",
  },
  fundingText: {
    fontFamily: "'Libre Baskerville', serif",
    fontStyle: "italic",
    fontSize: "0.87rem",
    color: "#1A1A1A",
    lineHeight: 1.5,
  },

  // ── CTA block at bottom ──────────────────────────────────────────────────
  cta: {
    background: "#FFFFFF",
    border: "1px solid #C2B5A8",
    borderRadius: "8px",
    padding: "2.75rem 2rem",
    textAlign: "center",
    marginTop: "3.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  },
  ctaTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: "0.6rem",
  },
  ctaBody: {
    fontSize: "0.88rem",
    color: "#4A4A4A",
    marginBottom: "1.5rem",
    lineHeight: 1.55,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    background: "#E85D04",
    color: "#FFFFFF",
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
    boxShadow: "0 4px 14px rgba(232, 93, 4, 0.25)",
  },
  ctaNote: {
    fontSize: "0.75rem",
    color: "#5C5C5C",
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
                color: hoverCalloutLink ? "#C24D00" : "#E85D04",
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
                <strong style={{ color: "#1A1A1A" }}>Client's name and contact details</strong> — or yours, if you're referring yourself.
              </div>
            </div>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "#1A1A1A" }}>What service you're enquiring about</strong> — NDIS Access Request Support, Functional Capacity Assessment, or Occupational Therapy.
              </div>
            </div>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "#1A1A1A" }}>Funding type</strong> — Private, self-managed NDIS, or plan-managed NDIS.
              </div>
            </div>
            <div style={S.includeRow}>
              <div style={S.includeDot} />
              <div style={S.includeText}>
                <strong style={{ color: "#1A1A1A" }}>A brief description of the client's needs</strong> — even a few sentences helps us prepare.
              </div>
            </div>

            {/* Funding wording */}
            <div style={S.fundingBadge}>
              <div style={S.fundingLabel}>Funding</div>
              <div style={S.fundingText}>
                Accepting private, self-managed, and plan-managed NDIS clients.
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════════════════════════ */}
        <div style={S.cta}>
          <h2 style={S.ctaTitle}>Ready to get started?</h2>
          <p style={S.ctaBody}>
            Whether you're referring yourself or a client, the self-referral form is the quickest way in.
          </p>
          <a
            href="https://questot.forms.pracsuite.com/t/FOI8g8zzGUrDKFfbJkTKEke1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...S.ctaBtn,
              background: hoverCtaBtn ? "#C24D00" : "#E85D04",
              boxShadow: hoverCtaBtn
                ? "0 0 40px rgba(232, 93, 4, 0.5)"
                : "0 0 20px rgba(232, 93, 4, 0.2)",
            }}
            onMouseEnter={() => setHoverCtaBtn(true)}
            onMouseLeave={() => setHoverCtaBtn(false)}
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
