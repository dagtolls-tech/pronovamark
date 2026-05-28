import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          borderRadius: '22%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 900,
          color: '#FAF7F2',
          fontSize: 300,
          letterSpacing: '-0.05em',
        }}
      >
        pm
        {/* Punto coral arriba a la derecha de la "m" */}
        <span
          style={{
            position: 'absolute',
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: '#E8665A',
            top: 105,
            right: 110,
            display: 'block',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
