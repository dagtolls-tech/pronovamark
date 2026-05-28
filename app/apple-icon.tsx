import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 900,
          color: '#FAF7F2',
          fontSize: 105,
          letterSpacing: '-0.05em',
        }}
      >
        pm
        <span
          style={{
            position: 'absolute',
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: '#E8665A',
            top: 38,
            right: 40,
            display: 'block',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
