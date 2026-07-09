'use client'

import { useState } from 'react'

interface BeforeAfterProps {
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
}

// Réplica del perfil de Instagram "antes" (Óptica Ibiza, 172 seguidores).
// Se muestra si aún no existe el archivo real /casos/cati/antes-instagram.jpg
function AntesMock() {
  const stats = [
    { n: '33', l: 'publicaciones' },
    { n: '172', l: 'seguidores' },
    { n: '258', l: 'seguidos' },
  ]
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0d0d0d]">
      <div className="p-4 sm:p-5">
        {/* Cabecera perfil */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at 30% 30%, #2a2a2a, #050505)' }}>
            {/* confeti tipo avatar */}
            <div className="flex flex-wrap gap-0.5 w-8 justify-center">
              {['#E8665A','#4ade80','#facc15','#60a5fa','#f472b6','#fff'].map((c,i)=>(
                <span key={i} className="w-1.5 h-1.5 rounded-[1px]" style={{ background: c }} />
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-brand-cream text-sm font-semibold truncate">Óptica Ibiza</p>
            <div className="flex gap-4 mt-1.5">
              {stats.map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-brand-cream text-sm font-bold leading-none">{s.n}</p>
                  <p className="text-neutral-500 text-[10px] leading-tight">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bio */}
        <div className="mt-3 text-[11px] leading-snug text-neutral-400">
          <p className="text-brand-cream font-semibold">Óptica</p>
          <p>👓 Óptica y Audiología</p>
          <p>+33 años de experiencia profesional</p>
        </div>
      </div>
      {/* Grid de reels apagado */}
      <div className="grid grid-cols-3 gap-0.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="aspect-[9/13] bg-white/[0.03] flex items-center justify-center">
            <span className="text-neutral-700 text-[10px]">▶ {[167, 142, 141][i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BeforeAfter({ beforeSrc, beforeAlt, afterSrc, afterAlt }: BeforeAfterProps) {
  const [beforeError, setBeforeError] = useState(false)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
      {/* ANTES */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">Antes</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>
        {beforeError ? (
          <AntesMock />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={beforeSrc}
            alt={beforeAlt}
            onError={() => setBeforeError(true)}
            className="rounded-2xl border border-white/10 w-full h-auto"
            loading="lazy"
          />
        )}
      </div>

      {/* DESPUÉS */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-coral">Después</span>
          <span className="flex-1 h-px bg-brand-coral/30" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="rounded-2xl border border-brand-coral/25 w-full h-auto"
          loading="lazy"
          style={{ boxShadow: '0 12px 40px rgba(232,102,90,0.18)' }}
        />
      </div>
    </div>
  )
}
