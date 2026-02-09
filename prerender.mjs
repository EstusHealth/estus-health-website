/**
 * prerender.mjs — Static pre-rendering for Estus Health SPA
 * 
 * Runs after `vite build`, visits every route in a headless browser,
 * and saves the fully-rendered HTML so crawlers see real content.
 * 
 * Usage: node prerender.mjs
 * 
 * Add to package.json scripts:
 *   "build": "vite build && node prerender.mjs"
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 4173;

// ── All routes from your React Router config ──────────────────────────
const ROUTES = [
  '/',
  '/services/occupational-therapy',
  '/services/gaming-informed-therapy',
  '/services/minecraft-program',
  '/services/assessments-reports',
  '/services/sleep-program',
  '/services/executive-function-support',
  '/about/approach',
  '/about/team',
  '/learn/understanding-pda',
  '/learn/late-autism-diagnosis',
  '/learn/executive-function-complex-health',
  '/contact',
  '/for-referrers',
];

// ── Per-page SEO meta (title + description) ───────────────────────────
const PAGE_META = {
  '/': {
    title: 'Estus Health | Neuro-Affirming & Gaming-Informed OT in Perth',
    description: 'Neuro-affirming occupational therapy in Perth for autistic adults, teens, and PDA profiles. Gaming-informed therapy, executive function support, NDIS & telehealth.',
  },
  '/services/occupational-therapy': {
    title: 'Occupational Therapy Perth | NDIS & Private | Estus Health',
    description: 'Evidence-based, neuro-affirming occupational therapy in Perth. Daily living skills, sensory regulation, executive function support. NDIS, private & telehealth.',
  },
  '/services/gaming-informed-therapy': {
    title: 'Gaming-Informed Therapy Perth | Estus Health',
    description: 'Gaming-informed occupational therapy for autistic youth and adults in Perth. Using gaming interests as therapeutic tools — not rewards. NDIS funded.',
  },
  '/services/minecraft-program': {
    title: 'Minecraft Therapy Program Perth | Estus Health',
    description: 'Structured Minecraft program for skill-building, social participation, and leadership. Clinician-facilitated digital environment for neurodivergent clients.',
  },
  '/services/assessments-reports': {
    title: 'OT Assessments & Reports Perth | Functional Capacity | Estus Health',
    description: 'Functional capacity assessments, NDIS access request support, and therapy reports. Clear, actionable documentation that translates into real outcomes.',
  },
  '/services/executive-function-support': {
    title: 'Executive Function Support Perth | Estus Health',
    description: 'Executive function coaching for autistic adults and teens. Routines, planning, energy management, and daily living strategies. NDIS & private.',
  },
  '/services/sleep-program': {
    title: 'Sleep Performance Program Perth | Neurodivergent Sleep Support | Estus Health',
    description: 'Clinician-led sleep intervention for neurodivergent adults. Chronotype assessment, sleep architecture, circadian alignment, and personalised protocols. 4-session OT program in Perth.',
  },
  '/about/approach': {
    title: 'Our Approach | Neuro-Affirming OT | Estus Health',
    description: 'Autonomy over compliance. We don\'t fix people — we fix the environment. Neuro-affirming, evidence-informed occupational therapy in Perth.',
  },
  '/about/team': {
    title: 'Our Team | Liam, Nam & Nik | Estus Health',
    description: 'Meet the Estus Health team. Occupational therapists specialising in gaming-informed, neuro-affirming practice for autistic adults and teens in Perth.',
  },
  '/learn/understanding-pda': {
    title: 'Understanding PDA (Pathological Demand Avoidance) | Estus Health',
    description: 'What is PDA? Understanding demand avoidance in autism. Why traditional approaches fail and what actually helps. Perth-based OT perspective.',
  },
  '/learn/late-autism-diagnosis': {
    title: 'Late Autism Diagnosis in Adults | Estus Health',
    description: 'Navigating a late autism diagnosis. Understanding masking, grief, identity, and finding community. Support from neuro-affirming OTs in Perth.',
  },
  '/learn/executive-function-complex-health': {
    title: 'Executive Function & Chronic Illness | Estus Health',
    description: 'Executive function challenges with chronic illness, ME/CFS, and complex health conditions. Energy accounting, capacity management, and OT strategies.',
  },
  '/contact': {
    title: 'Contact & Referrals | Estus Health Perth',
    description: 'Refer a client or enquire about occupational therapy at Estus Health. Accepting private, self-managed, and plan-managed NDIS clients in Perth.',
  },
  '/for-referrers': {
    title: 'For Referrers & Support Coordinators | Estus Health',
    description: 'Referral information for GPs, support coordinators, and allied health professionals. Clear communication, practical recommendations, fast turnaround.',
  },
};

// ── Structured Data (JSON-LD) — injected into every page ──────────────
const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': 'Estus Health',
    'url': 'https://www.estushealth.com',
    'description': 'Neuro-affirming, gaming-informed occupational therapy for autistic adults, teens, and PDA profiles in Perth, Western Australia.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Perth',
      'addressRegion': 'WA',
      'addressCountry': 'AU',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Perth',
    },
    'medicalSpecialty': 'Occupational Therapy',
    'knowsAbout': [
      'Autism',
      'Pathological Demand Avoidance',
      'Executive Function',
      'Gaming-Informed Therapy',
      'NDIS',
      'Neurodiversity-Affirming Practice',
    ],
    'sameAs': [
      'https://www.linkedin.com/in/liam-f-b50636273/',
    ],
  },
};

// ── Simple static file server ─────────────────────────────────────────
function serve(dir, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(dir, req.url === '/' ? 'index.html' : req.url);
      
      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath)) {
        filePath = join(dir, 'index.html');
      }
      
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const types = {
          html: 'text/html', js: 'application/javascript', css: 'text/css',
          json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
          svg: 'image/svg+xml', ico: 'image/x-icon', woff2: 'font/woff2',
        };
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    server.listen(port, () => resolve(server));
  });
}

// ── Inject SEO tags into rendered HTML ────────────────────────────────
function injectSEO(html, route) {
  const meta = PAGE_META[route] || PAGE_META['/'];
  const canonical = `https://www.estushealth.com${route === '/' ? '' : route}`;
  const ogImage = 'https://www.estushealth.com/og-image.jpg'; // Create this!

  // Build meta tags to inject
  const seoTags = `
    <!-- SEO Meta -->
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${canonical}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Estus Health" />
    <meta property="og:locale" content="en_AU" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${ogImage}" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">${JSON.stringify(STRUCTURED_DATA.organization)}</script>
  `;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Remove existing meta description (we'll add an optimised one)
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    ''
  );

  // Inject SEO tags before </head>
  html = html.replace('</head>', `${seoTags}\n</head>`);

  return html;
}

// ── Main pre-render loop ──────────────────────────────────────────────
async function prerender() {
  console.log('🔧 Starting pre-render...\n');

  // 1. Start local server
  const server = await serve(DIST, PORT);
  console.log(`  Server running on http://localhost:${PORT}`);

  // 2. Launch headless browser
  const browser = await chromium.launch();
  const context = await browser.newContext({
    userAgent: 'EstusHealth-Prerender/1.0',
  });

  let rendered = 0;

  for (const route of ROUTES) {
    const page = await context.newPage();
    const url = `http://localhost:${PORT}${route}`;
    
    try {
      // Visit the page and wait for React to render
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      
      // Wait a bit more for any lazy content
      await page.waitForTimeout(1000);
      
      // Get the fully rendered HTML
      let html = await page.content();
      
      // Inject SEO meta tags
      html = injectSEO(html, route);
      
      // Determine output path
      const outputPath = route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route, 'index.html');
      
      // Ensure directory exists
      mkdirSync(dirname(outputPath), { recursive: true });
      
      // Write the pre-rendered HTML
      writeFileSync(outputPath, html, 'utf-8');
      
      rendered++;
      console.log(`  ✓ ${route}`);
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // 3. Cleanup
  await browser.close();
  server.close();

  console.log(`\n✅ Pre-rendered ${rendered}/${ROUTES.length} pages`);
  console.log('   Output: ./dist/\n');
}

prerender().catch(console.error);
