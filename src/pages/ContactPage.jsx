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
    padding: "5.5rem 0 3rem",
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
    maxWidth: "520px",
    marginBottom: "0.75rem",
  },
  heroResponseTime: {
    fontSize: "0.78rem",
    color: "hsl(220 10% 60%)",
    letterSpacing: "0.01em",
  },

  // ── Layout ───────────────────────────────────────────────────────────────
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "2rem",
    alignItems: "start",
    maxWidth: "900px",
  },

  // ── Form card (left) ─────────────────────────────────────────────────────
  card: {
    background: "hsl(220 15% 22%)", // Lighter Charcoal
    border: "1px solid hsl(220 15% 28%)",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3)",
    padding: "2.25rem",
  },
  cardTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.35rem",
    fontWeight: 600,
    color: "hsl(40 10% 94%)",
    marginBottom: "0.5rem",
  },
  cardBody: {
    fontSize: "0.87rem",
    color: "hsl(40 10% 94% / 0.6)",
    lineHeight: 1.6,
    marginBottom: "1.75rem",
  },
  ctaBtn: {
    display: "block",
    textAlign: "center",
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
    textAlign: "center",
    marginTop: "0.55rem",
  },

  // ── Sidebar (right) ──────────────────────────────────────────────────────
  sidebar: {
    background: "hsl(220 15% 22%)",
    border: "1px solid hsl(220 15% 28%)",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3)",
    padding: "1.75rem",
  },
  sideTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.78rem",
    fontWeight: 500,
    color: "hsl(40 10% 94%)",
    marginBottom: "1rem",
    paddingBottom: "0.7rem",
    borderBottom: "1px solid hsl(220 15% 28%)",
  },
  sideRow: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-start",
    marginBottom: "1rem",
  },
  sideIcon: {
    width: "34px",
    height: "34px",
    minWidth: "34px",
    borderRadius: "4px",
    background: "hsl(220 15% 26%)",
    border: "1px solid hsl(220 15% 30%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.82rem",
    color: "hsl(40 10% 94%)",
  },
  sideLabel: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontSize: "0.62rem",
    color: "hsl(220 10% 60%)",
    fontWeight: 500,
    marginBottom: "0.15rem",
  },
  sideValue: {
    fontSize: "0.83rem",
    color: "hsl(40 10% 94% / 0.8)",
    lineHeight: 1.4,
  },
  sideLink: {
    color: "hsl(24 90% 48%)",
    textDecoration: "none",
    transition: "color 200ms cubic-bezier(.4,0,.2,1)",
    cursor: "pointer",
  },
  sideDivider: {
    border: "none",
    borderTop: "1px solid hsl(220 15% 28%)",
    margin: "0.9rem 0",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faqWrap: {
    maxWidth: "720px",
    marginTop: "3.5rem",
  },
  faqTag: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.65rem",
    color: "hsl(24 90% 48%)",
    fontWeight: 500,
    marginBottom: "0.4rem",
  },
  faqTitle: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: "hsl(40 10% 94%)",
    marginBottom: "1.25rem",
  },
  faqItem: {
    borderBottom: "1px solid hsl(220 15% 28%)",
    paddingBottom: "1rem",
    marginBottom: "1rem",
  },
  faqQ: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "hsl(40 10% 94%)",
    cursor: "pointer",
    userSelect: "none",
  },
  faqToggle: {
    fontSize: "0.65rem",
    color: "hsl(220 10% 60%)",
    transition: "transform 200ms cubic-bezier(.4,0,.2,1)",
  },
  faqA: {
    fontSize: "0.83rem",
    color: "hsl(220 10% 70%)",
    lineHeight: 1.6,
    marginTop: "0.5rem",
  },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Contact() {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const FAQS = [
    {
      q: "Do I need a GP referral?",
      a: "No. Self-referrals are welcome for all of our services. You can refer yourself or a family member directly using the self-referral form — no GP letter needed.",
    },
    {
      q: "How quickly will someone get back to me?",
      a: "We aim to respond to all enquiries within 24 hours. If you submit outside of business hours, you'll hear from us on the next business day.",
    },
    {
      q: "What funding types do you accept?",
      a: "We accept private, self-managed NDIS, and plan-managed NDIS clients across all of our services.",
    },
    {
      q: "What if I'm not sure which service I need?",
      a: "That's completely fine — just get in touch and we'll help you work out the right fit. The contact form is the quickest way to start that conversation.",
    },
  ];

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500;600&family=Libre+Baskerville:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 700px) {
          .contact-layout { grid-template-columns: 1fr !important; }
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
            Get in touch
          </div>
          <h1 style={S.heroTitle}>
            Contact <span style={S.accentGradient}>us</span>
          </h1>
          <p style={S.heroBody}>
            Have a question, or ready to get started? We're here to help.
          </p>
          <div style={S.heroResponseTime}>Response time within 24 hours</div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            MAIN LAYOUT
        ════════════════════════════════════════════════════════════════════ */}
        <div className="contact-layout" style={S.layout}>

          {/* Left: card */}
          <div style={S.card}>
            <h2 style={S.cardTitle}>Send us a message</h2>
            <p style={S.cardBody}>
              Use the contact form to ask a question or let us know you're interested. If you're ready to refer yourself or a family member, the self-referral form gives us everything we need to get started quickly.
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
              Open the contact form →
            </a>
            <div style={S.ctaNote}>Response time within 24 hours</div>
          </div>

          {/* Right: sidebar */}
          <div style={S.sidebar}>
            <div style={S.sideTitle}>Other ways to reach us</div>

            <div style={S.sideRow}>
              <div style={S.sideIcon}>✉</div>
              <div>
                <div style={S.sideLabel}>Email</div>
                <a
                  href="mailto:hello@estushealth.com"
                  style={{
                    ...S.sideValue,
                    ...S.sideLink,
                    color: hoverEmail ? "hsl(24 90% 60%)" : "hsl(24 90% 48%)",
                  }}
                  onMouseEnter={() => setHoverEmail(true)}
                  onMouseLeave={() => setHoverEmail(false)}
                >
                  hello@estushealth.com
                </a>
              </div>
            </div>

            <hr style={S.sideDivider} />

            <div style={S.sideRow}>
              <div style={S.sideIcon}>📍</div>
              <div>
                <div style={S.sideLabel}>Location</div>
                <div style={S.sideValue}> Perth Metro & Telehealth available nationwide</div>
              </div>
            </div>

            <hr style={S.sideDivider} />

            <div style={S.sideRow}>
              <div style={S.sideIcon}>🕐</div>
              <div>
                <div style={S.sideLabel}>Response time</div>
                <div style={S.sideValue}>Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════════ */}
        <div style={S.faqWrap}>
          <div style={S.faqTag}>Questions</div>
          <h2 style={S.faqTitle}>Common questions</h2>

          {FAQS.map((faq, i) => (
            <div key={i} style={S.faqItem}>
              <div style={S.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <span style={{
                  ...S.faqToggle,
                  transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                }}>
                  ▼
                </span>
              </div>
              {openFaq === i && <div style={S.faqA}>{faq.a}</div>}
            </div>
          ))}
        </div>

        <div style={{ height: "5rem" }} />
      </div>
    </div>
  );
}
