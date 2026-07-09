'use client'

import { useState } from 'react'
import { Instagram } from 'lucide-react'

interface BeforeAfterProps {
  beforeSrc: string
  beforeAlt: string
  beforeStat: string
  beforeCaption: string
  afterSrc: string
  afterAlt: string
}

export function BeforeAfter({
  beforeSrc,
  beforeAlt,
  beforeStat,
  beforeCaption,
  afterSrc,
  afterAlt,
}: BeforeAfterProps) {
  const [beforeError, setBeforeError] = useState(false)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* ANTES */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">Antes</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>
        {beforeError ? (
          // Fallback si aún no existe la imagen del "antes"
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/3] flex flex-col items-center justify-center text-center p-6">
            <Instagram className="w-7 h-7 text-neutral-600 mb-4" />
            <p className="font-editorial font-bold text-brand-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}>
              {beforeStat}
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm mt-2">{beforeCaption}</p>
          </div>
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
