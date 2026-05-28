import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pronovamark — Contenido viral + embudos de venta para tu negocio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          color: '#FAF7F2',
        }}
      >
        {/* Glow coral decorativo arriba derecha */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,102,90,0.35) 0%, transparent 70%)',
            display: 'block',
          }}
        />

        {/* HEADER — logo + badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 72,
                height: 72,
                background: '#0A0A0A',
                border: '2px solid rgba(255,255,255,0.15)',
                borderRadius: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                fontWeight: 900,
                fontSize: 38,
                letterSpacing: '-0.05em',
              }}
            >
              pm
              <span
                style={{
                  position: 'absolute',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#E8665A',
                  top: 10,
                  right: 12,
                  display: 'block',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>Pronovamark</span>
              <span style={{ fontSize: 13, color: '#7C766E', letterSpacing: '0.25em', fontWeight: 600 }}>
                MARKETING AGENCY
              </span>
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 999,
              padding: '10px 20px',
              fontSize: 16,
              fontWeight: 600,
              color: '#ADA79C',
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
            Costa Blanca · Toda Alicante
          </div>
        </div>

        {/* HEADLINE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 1000 }}>
          <h1
            style={{
              fontSize: 92,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              margin: 0,
              color: '#FAF7F2',
            }}
          >
            Contenido <span style={{ color: '#E8665A', fontStyle: 'italic' }}>viral.</span>
            <br />
            Clientes <span style={{ fontStyle: 'italic' }}>reales.</span>
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#ADA79C',
              margin: 0,
              lineHeight: 1.4,
              maxWidth: 850,
            }}
          >
            Embudos de venta + contenido que convierte para negocios físicos y online.
          </p>
        </div>

        {/* FOOTER — URL + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontSize: 22, color: '#7C766E', fontWeight: 600, letterSpacing: '-0.01em' }}>
            pronovamark.com
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: '#E8665A',
              color: '#FFFFFF',
              borderRadius: 999,
              padding: '14px 24px',
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Reservar diagnóstico gratis →
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
