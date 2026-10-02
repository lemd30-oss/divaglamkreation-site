import fs from 'node:fs';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'DivaglamKreation — Who are you?';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const owlPath = path.join(process.cwd(), 'public/images/brand/glow-owl.png');
  const owlSrc = `data:image/png;base64,${fs.readFileSync(owlPath).toString('base64')}`;

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
          padding: '64px',
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
            padding: '48px 64px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={owlSrc} alt="" width={140} height={194} />
          <div style={{ fontFamily: 'Georgia', fontSize: 92, fontWeight: 700, marginTop: 18 }}>
            Who are you?
          </div>
          <div style={{ color: '#75675f', fontSize: 34, lineHeight: 1.35, marginTop: 22, maxWidth: 880 }}>
            A quiet invitation to pause, reflect, and remember that you matter.
          </div>
          <div
            style={{
              color: '#c6a15b',
              fontSize: 28,
              letterSpacing: 6,
              marginTop: 26,
              textTransform: 'uppercase',
            }}
          >
            DivaglamKreation · Faith. Flow. Flourish.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
