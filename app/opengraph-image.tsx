import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config';

export const alt = `${siteConfig.name} · ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * This is what renders when the link is pasted into LinkedIn, WhatsApp or
 * Slack, so it does more work than most of the site while job hunting.
 * Bone ground, hairline rules, one brass accent, tabular figures. No icons,
 * no gradients: the same rules as every other surface.
 *
 * Only system fonts are available here without shipping a font binary, so
 * this leans on weight and tracking rather than trying to fake Archivo.
 */
const BONE = '#F4F1EA';
const INK = '#15140F';
const ASH = '#5C574C';
const LINE = '#D7D1C1';
const BRASS = '#8A6620';

/* What I build, not what one 2024-25 engagement measured. This is the first
   impression on LinkedIn, so it should say what I do. */
const figures = [
  ['AI Agents', 'Voice, chat, MCP'],
  ['Integrations', 'APIs that stay in sync'],
  ['Cloud', 'AWS, deployed'],
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: BONE,
          color: INK,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top rule: name left, availability right */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `1px solid ${LINE}`,
            paddingBottom: 22,
            fontSize: 19,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: ASH,
          }}
        >
          <span>{siteConfig.name}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 9, height: 9, borderRadius: 9, background: BRASS }} />
            <span>{siteConfig.availability.label}</span>
          </div>
        </div>

        {/* The statement */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -4.5,
              lineHeight: 0.94,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>SYSTEMS THAT RUN</span>
            <span style={{ color: BRASS }}>THEMSELVES.</span>
          </div>
          <div style={{ fontSize: 27, color: ASH, marginTop: 26, letterSpacing: -0.3 }}>
            {`${siteConfig.title} · ${siteConfig.location.city}, ${siteConfig.location.country}`}
          </div>
        </div>

        {/* Figures, on a hairline */}
        <div
          style={{
            display: 'flex',
            gap: 72,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 26,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: 56 }}>
            {figures.map(([value, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1.4 }}>{value}</span>
                <span
                  style={{
                    fontSize: 16,
                    letterSpacing: 2.4,
                    textTransform: 'uppercase',
                    color: ASH,
                    marginTop: 8,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <span style={{ fontSize: 19, letterSpacing: 2.4, color: BRASS }}>
            {siteConfig.url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
