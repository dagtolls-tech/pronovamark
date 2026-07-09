'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface BeforeAfterProps {
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
}

// Réplica del perfil de Instagram "antes" (Óptica Ibiza, 172 seguidores).
// Solo se muestra si NO existe el archivo real /casos/cati/antes-instagram.jpg
function AntesMock() {
  const stats = [
    { n: '33', l: 'publicaciones' },
    { n: '172', l: 'seguidores' },
    { n: '258', l: 'seguidos' },
  ]
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0d0d0d]">
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at 30% 30%, #2a2a2a, #050505)' }}>
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
        <div className="mt-3 text-[11px] leading-snug text-neutral-400">
          <p className="text-brand-cream font-semibold">Óptica</p>
          <p>👓 Óptica y Audiología</p>
          <p>+33 años de experiencia profesional</p>
        </div>
      </div>
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
    <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-3">

      {/* ANTES */}
      <figure className="relative w-full sm:flex-1">
        <span className="absolute z-10 top-3 left-3 text-[11px] font-bold tracking-[0.15em] uppercase text-brand-cream bg-black/55 backdrop-blur-sm rounded-full px-3 py-1 border border-white/15">
          Antes
        </span>
        {beforeError ? (
          <AntesMock />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={beforeSrc}
            alt={beforeAlt}
            onError={() => setBeforeError(true)}
            className="rounded-2xl border border-white/10 w-full h-auto block"
            loading="lazy"
          />
        )}
      </figure>

      {/* Flecha central antes → después */}
      <div className="flex-shrink-0 z-20 my-1 sm:my-0 sm:-mx-6">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-coral flex items-center justify-center rotate-90 sm:rotate-0"
          style={{ boxShadow: '0 8px 28px rgba(232,102,90,0.5), 0 0 0 5px rgba(10,10,10,0.6)' }}
        >
          <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* DESPUÉS */}
      <figure className="relative w-full sm:flex-1">
        <span className="absolute z-10 top-3 left-3 text-[11px] font-bold tracking-[0.15em] uppercase text-white bg-brand-coral rounded-full px-3 py-1">
          Después
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="rounded-2xl border border-brand-coral/25 w-full h-auto block"
          loading="lazy"
          style={{ boxShadow: '0 12px 40px rgba(232,102,90,0.18)' }}
        />
      </figure>
    </div>
  )
}
