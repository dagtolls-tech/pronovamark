'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animate?: boolean
}

export function Logo({ variant = 'light', size = 'md', className, animate = false }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-9 h-9', text: 'text-[13px]', wordmark: 'text-[17px]', label: 'text-[8px]', radius: 'rounded-[10px]' },
    md: { icon: 'w-11 h-11', text: 'text-[15px]', wordmark: 'text-[19px]', label: 'text-[9px]', radius: 'rounded-[13px]' },
    lg: { icon: 'w-16 h-16', text: 'text-[22px]', wordmark: 'text-[28px]', label: 'text-[10px]', radius: 'rounded-[18px]' },
  }

  const s = sizes[size]

  const IconWrapper = animate ? motion.div : 'div'
  const iconProps = animate
    ? {
        initial: { scale: 0.5, opacity: 0, rotate: -8 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.1 },
      }
    : {}

  return (
    <Link href="/" className={cn('flex items-center gap-3 group', className)} aria-label="Pronovamark - Ir al inicio">
      {/* App icon — cuadrado con esquinas redondeadas */}
      <IconWrapper
        {...(iconProps as object)}
        className={cn(
          s.icon, s.radius,
          'relative flex-shrink-0 flex items-center justify-center font-display font-bold',
          'shadow-lg transition-transform duration-200 group-hover:scale-105',
          variant === 'light'
            ? 'bg-brand-cream'
            : 'bg-brand-black border border-white/10',
        )}
      >
        {/* Fondo con brillo sutil */}
        <div
          className={cn(
            'absolute inset-0 rounded-inherit opacity-60',
            variant === 'light'
              ? 'bg-gradient-to-br from-white/80 to-brand-cream'
              : 'bg-gradient-to-br from-white/[0.06] to-transparent'
          )}
          style={{ borderRadius: 'inherit' }}
        />

        {/* Texto pm */}
        <span
          className={cn(
            s.text, 'relative z-10 tracking-tight font-bold',
            variant === 'light' ? 'text-brand-black' : 'text-brand-cream'
          )}
        >
          pm
        </span>

        {/* Punto coral */}
        <span
          className={cn(
            'absolute rounded-full bg-brand-coral z-10',
            size === 'sm' ? 'w-1.5 h-1.5 top-1 right-1' : 'w-2 h-2 top-1.5 right-1.5'
          )}
        />

        {/* Glow coral sutil */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            borderRadius: 'inherit',
            boxShadow: 'inset 0 0 12px rgba(232,102,90,0.15)',
          }}
        />
      </IconWrapper>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display font-bold tracking-tight',
            s.wordmark,
            variant === 'light' ? 'text-brand-black' : 'text-brand-cream'
          )}
        >
          Pronovamark
        </span>
        <span
          className={cn(
            s.label,
            'font-sans font-semibold tracking-[0.2em] uppercase mt-0.5',
            variant === 'light' ? 'text-neutral-400' : 'text-neutral-500'
          )}
        >
          Marketing Agency
        </span>
      </div>
    </Link>
  )
}
