import { useEffect, useRef } from 'react';
import { Section } from './ui';
import { Instagram, ArrowRight } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/estus_health/';
const POST_URL = 'https://www.instagram.com/p/DWlPvFJk2vY/';

export default function InstagramEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Instagram embed script if not already present
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <Section className="bg-noctua-bone/30">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-noctua-russet font-display text-sm uppercase tracking-widest mb-4 font-semibold">
          Follow Along
        </p>
        <h2 className="text-2xl md:text-4xl font-display mb-4 text-noctua-brown">
          Latest from Instagram
        </h2>
        <p className="text-noctua-brown/70">
          Tips, insights, and behind-the-scenes from our team.
        </p>
      </div>

      <div ref={containerRef} className="flex justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={`${POST_URL}?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%',
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href={`${POST_URL}?utm_source=ig_embed&utm_campaign=loading`}
              style={{
                background: '#FFFFFF',
                lineHeight: 0,
                padding: 0,
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }} />
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }} />
                </div>
              </div>
              <div style={{ padding: '19% 0' }} />
              <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                <Instagram className="w-[50px] h-[50px] text-noctua-brown/30" />
              </div>
              <div style={{ paddingTop: '8px' }}>
                <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>
                  View this post on Instagram
                </div>
              </div>
              <div style={{ padding: '12.5% 0' }} />
            </a>
            <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <a
                href={`${POST_URL}?utm_source=ig_embed&utm_campaign=loading`}
                style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                A post shared by Liam Fagan (@estus_health)
              </a>
            </p>
          </div>
        </blockquote>
      </div>

      <div className="text-center mt-8">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-noctua-russet font-display text-sm uppercase tracking-wide font-semibold hover:gap-3 transition-all"
        >
          Follow @estus_health on Instagram <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}
