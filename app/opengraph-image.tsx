import { ImageResponse } from 'next/og';

export const alt = 'DivaglamKreation — Faith, Flow, Flourish';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#fbf7f0',
          color: '#4b3a32',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            border: '3px solid #8f9a82',
            borderRadius: '48px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            padding: '64px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div style={{ color: '#c6a15b', fontSize: 34, letterSpacing: 8, textTransform: 'uppercase' }}>
            Faith • Flow • Flourish
          </div>
          <div style={{ fontFamily: 'Georgia', fontSize: 88, fontWeight: 700, marginTop: 26 }}>
            DivaglamKreation
          </div>
          <div style={{ color: '#75675f', fontSize: 38, lineHeight: 1.35, marginTop: 28, maxWidth: 900 }}>
            Faith-rooted journals, gentle gifts, and quiet encouragement for beginning softly.
          </div>
        </div>
      </div>
    ),
    size,
  );
}