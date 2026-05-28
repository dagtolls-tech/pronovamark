'use client'

interface MarqueeProps {
  text?: string
  speed?: number // segundos para una pasada completa
  className?: string
  variant?: 'dark' | 'light'
}

export function Marquee({
  text = 'PRONOVAMARK',
  speed = 35,
  className = '',
  variant = 'dark',
}: MarqueeProps) {
  // Duplicamos el contenido para loop infinito sin saltos
  const items = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div
      className={`relative overflow-hidden py-6 lg:py-10 ${
        variant === 'dark' ? 'bg-brand-black' : 'bg-brand-cream'
      } ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap animate-marquee will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Copia 1 */}
        <div className="flex shrink-0">
          {items.map((i) => (
            <span
              key={`a-${i}`}
              className={`font-editorial font-bold italic mx-6 lg:mx-10 ${
                variant === 'dark' ? 'text-brand-cream' : 'text-brand-black'
              }`}
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
            >
              {text}
              <span className="text-brand-coral">®</span>
            </span>
          ))}
        </div>
        {/* Copia 2 (igual, para loop) */}
        <div className="flex shrink-0">
          {items.map((i) => (
            <span
              key={`b-${i}`}
              className={`font-editorial font-bold italic mx-6 lg:mx-10 ${
                variant === 'dark' ? 'text-brand-cream' : 'text-brand-black'
              }`}
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
            >
              {text}
              <span className="text-brand-coral">®</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
