'use client'

import { MapPin, Globe, Plane } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function CostaBlanca() {
  return (
    <section
      id="ubicacion"
      className="relative bg-brand-black overflow-hidden"
      aria-labelledby="costa-blanca-heading"
    >
      <AnimatedSection>
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden">

          {/* Vídeo de fondo (YouTube embed muteado y en loop) */}
          <div className="absolute inset-0 overflow-hidden" style={{ contain: 'paint layout' }}>
            <iframe
              src="https://www.youtube.com/embed/OaEKZSj53YE?autoplay=1&mute=1&loop=1&playlist=OaEKZSj53YE&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&disablekb=1"
              title="Benidorm Costa Blanca - vista aérea"
              allow="autoplay; encrypted-media"
              aria-hidden="true"
              tabIndex={-1}
              loading="lazy"
              className="absolute pointer-events-none"
              style={{
                top: '50%',
                left: '50%',
                width: '177.78vh',
                minWidth: '100%',
                height: '56.25vw',
                minHeight: '100%',
                transform: 'translate(-50%, -50%) scale(1.25) translateZ(0)',
                border: 0,
                willChange: 'transform',
              }}
            />
          </div>

          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.2) 100%), linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)',
            }}
          />

          {/* Contenido superpuesto */}
          <div className="relative h-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-brand-coral text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3">
                <MapPin className="w-3 h-3" />
                Dónde estamos
              </span>
              <h2
                id="costa-blanca-heading"
                className="font-editorial font-bold text-brand-cream tracking-tight leading-[0.95]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                <span className="italic text-brand-coral">Costa Blanca.</span>
                <br />
                <span className="text-brand-cream/95">Toda Alicante.</span>
              </h2>
              <p className="text-brand-cream/85 text-sm sm:text-base leading-relaxed mt-4 max-w-md font-medium"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
                No tenemos oficina física. Operamos 100% online para ser más rápidos y eficientes. Si necesitas vernos en persona, nos desplazamos a tu negocio.
              </p>

              {/* Mini tags */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-cream bg-white/10 border border-white/15 rounded-full px-3 py-1.5 backdrop-blur-sm">
                  <Globe className="w-3 h-3 text-brand-coral" />
                  100% online
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-cream bg-white/10 border border-white/15 rounded-full px-3 py-1.5 backdrop-blur-sm">
                  <Plane className="w-3 h-3 text-brand-coral" />
                  Nos desplazamos si hace falta
                </span>
              </div>
            </div>
          </div>

          {/* Decoración esquina inferior derecha — etiqueta video */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 pointer-events-none hidden sm:block">
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cream/60">
              ◉ Benidorm · Costa Blanca
            </span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
