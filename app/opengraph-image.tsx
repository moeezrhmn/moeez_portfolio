import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Moeez Rehman — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111827',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: '#ea580c',
          }}
        />

        {/* Top-right decorative circle */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(234, 88, 12, 0.08)',
          }}
        />

        {/* Monogram badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '72px',
            height: '72px',
            borderRadius: '18px',
            background: '#1f2937',
            border: '2px solid rgba(234, 88, 12, 0.4)',
            marginBottom: '36px',
          }}
        >
          <span style={{ color: '#ea580c', fontSize: '32px', fontWeight: '800' }}>M</span>
        </div>

        {/* Name */}
        <div
          style={{
            color: '#ffffff',
            fontSize: '68px',
            fontWeight: '800',
            letterSpacing: '-2px',
            lineHeight: '1',
            marginBottom: '16px',
          }}
        >
          Moeez Rehman
        </div>

        {/* Title */}
        <div
          style={{
            color: '#ea580c',
            fontSize: '28px',
            fontWeight: '600',
            marginBottom: '32px',
          }}
        >
          Software Engineer — Backend &amp; Infrastructure
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#9ca3af',
            fontSize: '22px',
            maxWidth: '780px',
            lineHeight: '1.5',
            marginBottom: '48px',
          }}
        >
          Building complete solutions — from the backend API to the frontend dashboard to the server it runs on.
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Python', 'Laravel', 'FastAPI', 'React / Next.js', 'Docker', 'AWS'].map((tag) => (
            <div
              key={tag}
              style={{
                background: '#1f2937',
                border: '1px solid #374151',
                color: '#d1d5db',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 18px',
                borderRadius: '8px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            color: '#4b5563',
            fontSize: '18px',
            fontWeight: '500',
          }}
        >
          moeezrehman.quanter.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
