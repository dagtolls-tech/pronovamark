'use client'

import { motion } from 'framer-motion'

export function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* ── Grid de fondo con efecto de profundidad ── */}
      <div
        className="absolute inset-0 scale-[1.8]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,102,90,0.13) 1px, transparent 1px),
            linear-gradient(to right, rgba(232,102,90,0.13) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 55% 50%, black 10%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 55% 50%, black 10%, transparent 75%)',
        }}
      />

      {/* Glow coral de fondo */}
      <div className="absolute w-72 h-72 bg-brand-coral/10 rounded-full blur-3xl" />
      <div className="absolute w-48 h-48 bg-brand-coral/6 rounded-full blur-2xl translate-y-12" />

      {/* Teléfono principal */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="relative w-[258px] xs:w-[272px] z-10"
      >
        {/* Marco del teléfono */}
        <div
          className="relative rounded-[2.8rem] p-[7px]"
          style={{
            background: 'linear-gradient(160deg, #2a2a2a, #111)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Notch */}
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] rounded-full z-20" />

          {/* Pantalla */}
          <div className="rounded-[2.2rem] overflow-hidden bg-white">
            {/* Barra de estado */}
            <div className="bg-[#111] flex items-center justify-between px-6 pt-7 pb-2">
              <span className="text-white text-[11px] font-semibold">9:41</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-[2px] items-end">
                  {[5, 8, 11].map((h) => (
                    <div key={h} className="w-[3px] bg-white rounded-sm" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <svg className="w-3 h-3" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" />
                </svg>
                <div className="w-5 h-[10px] border border-white/60 rounded-[2px] flex items-center px-[1.5px]">
                  <div className="h-[6px] w-[70%] bg-white rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Header Instagram */}
            <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full p-[2px]" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366)' }}>
                  <div className="w-full h-full rounded-full bg-white p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 to-brand-coral" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-neutral-900 leading-tight">restaurante_ejemplo</p>
                  <p className="text-[9px] text-neutral-400 leading-tight">Benidorm · hace 2h</p>
                </div>
              </div>
              <span className="text-neutral-300 text-base">···</span>
            </div>

            {/* Vídeo / Reel */}
            <div className="relative h-52 overflow-hidden" style={{ background: 'linear-gradient(160deg, #7c2d12, #a16207, #b45309)' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              {/* Elementos decorativos */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white/10 blur-xl" />

              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Views badge */}
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm rounded-full px-2 py-[3px] flex items-center gap-1">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
                <span className="text-white text-[9px] font-bold">1.2M</span>
              </div>

              {/* Acciones */}
              <div className="absolute right-2.5 bottom-10 flex flex-col items-center gap-3 text-white">
                <div className="text-center">
                  <svg className="w-[18px] h-[18px] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-[8px] font-bold block mt-0.5">4.2K</span>
                </div>
                <div className="text-center">
                  <svg className="w-[18px] h-[18px] mx-auto" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <span className="text-[8px] font-bold block mt-0.5">312</span>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-2.5 left-3">
                <p className="text-white text-[9px] font-bold">🔥 El truco del aceite que cambia...</p>
                <p className="text-white/60 text-[8px] mt-0.5">#restaurante #viral #cocina</p>
              </div>
            </div>

            {/* WhatsApp header */}
            <div className="bg-[#075E54] px-3 py-1.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-white text-[9px] font-semibold">Restaurante Ejemplo · en línea</span>
            </div>

            {/* Chat WhatsApp */}
            <div className="bg-[#ECE5DD] px-3 py-3 space-y-2 min-h-[96px]">
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-[78%] shadow-sm">
                  <p className="text-[9px] text-neutral-800 leading-relaxed">Hola! Vi vuestro reel y quiero reservar para el sábado 🙌</p>
                  <p className="text-[8px] text-neutral-400 text-right mt-0.5">12:34 ✓✓</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[78%] shadow-sm">
                  <p className="text-[9px] text-neutral-800 leading-relaxed">¡Perfecto! ¿Para cuántas personas? 😊</p>
                  <p className="text-[8px] text-neutral-400 text-right mt-0.5">12:34 ✓✓</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-[78%] shadow-sm">
                  <p className="text-[9px] text-neutral-800">Para 4, a las 21:00 👌</p>
                  <p className="text-[8px] text-neutral-400 text-right mt-0.5">12:35 ✓✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Badges flotantes */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute -right-4 top-[22%] bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 px-3 py-2 z-20"
        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
      >
        <p className="text-[11px] font-bold text-white leading-tight">📈 +1.2M views</p>
        <p className="text-[9px] text-white/50 mt-0.5">este reel</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -left-4 bottom-[25%] bg-brand-coral rounded-2xl px-3 py-2 z-20"
        style={{ boxShadow: '0 8px 32px rgba(232,102,90,0.4)' }}
      >
        <p className="text-[11px] font-bold text-white leading-tight">🎉 +38 reservas</p>
        <p className="text-[9px] text-white/70 mt-0.5">este mes</p>
      </motion.div>
    </div>
  )
}
