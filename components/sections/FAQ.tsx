'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FAQS } from '@/lib/constants'

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div className="border-b border-white/6 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className={`font-display font-semibold text-base transition-colors duration-200 ${isOpen ? 'text-brand-coral' : 'text-brand-cream group-hover:text-brand-coral'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isOpen ? 'bg-brand-coral text-white' : 'bg-white/6 text-neutral-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-neutral-500 text-sm leading-relaxed pb-5 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('resultados')
  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <section id="faq" className="bg-brand-black py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

          <AnimatedSection className="lg:sticky lg:top-28">
            <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
              Preguntas frecuentes
            </span>
            <h2 id="faq-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4 leading-tight">
              Todo lo que{' '}
              <span className="text-brand-coral">necesitas saber</span>{' '}
              antes de llamarnos
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-6 text-lg">
              Resolvemos aquí las dudas más habituales. Si queda alguna, la aclaramos en el diagnóstico gratuito.
            </p>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-brand-coral text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-coral-dark transition-all duration-200 text-sm hover:shadow-coral"
            >
              Reservar diagnóstico gratis
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="rounded-3xl p-6 sm:p-8"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {FAQS.map((faq) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
