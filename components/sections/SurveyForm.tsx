'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Cal, { getCalApi } from '@calcom/embed-react'

type Step =
  | { type: 'choice'; question: string; options: string[] }
  | { type: 'text'; question: string; placeholder: string; hint?: string; icon?: 'mail' | 'phone' }
  | { type: 'final-text'; question: string; placeholder: string }

const STEPS: Step[] = [
  {
    type: 'choice',
    question: '¿En qué sector estás?',
    options: ['Marketing', 'Salud', 'Real State', 'Psicología & desarrollo pesonal', 'Finanzas y negocios', 'Otros negocios'],
  },
  { type: 'text', question: '¿Cómo te llamas?', placeholder: 'Tu nombre' },
  { type: 'text', question: '¿Cuál es tu telefono?', placeholder: '600 00 00 00', hint: 'Usa un numero que tengas Whatsapp', icon: 'phone' },
  { type: 'text', question: '¿Cuál es tu email?', placeholder: 'tu@email.com', icon: 'mail' },
  { type: 'text', question: 'Usuario de Instagram', placeholder: '@usuario' },
  {
    type: 'choice',
    question: '¿Cual es tu mayor reto ahora mismo con tu negocio?',
    options: [
      'No consigo ganar seguidores.',
      'Mis videos tienen pocas visitas.',
      'Me cuesta vender por falta de autoridad y posicionamiento.',
      'Gasto dinero en anuncios y no veo resultados.',
      'Ya tengo una audiencia pero no sé cómo venderles.',
    ],
  },
  {
    type: 'choice',
    question: '¿Cuánto dinero facturas mensualmente con tu negocio?',
    options: ['+10,000€ / mes', '3,000€ - 10,000€ / mes', '1,000€ - 3,000€ / mes', '- 1,000€'],
  },
  {
    type: 'choice',
    question: 'Si te garantizamos 10.000 seguidores (mínimo) y mas ventas cualificadas en los próximos 90 días....¿Cuánto dinero tienes ahora mismo para invertir en conseguir esto?',
    options: ['+ 5,000€', '2,000€ - 5,000€', '1,000€ - 2,000€', '- 1,000€'],
  },
  {
    type: 'choice',
    question: '¿Esta decisión depende al 100% de ti o debes preguntarle a algun socio / padres / pareja?',
    options: ['Depende de mi al 100%', 'Tengo que consultarlo con alguien'],
  },
  {
    type: 'final-text',
    question: '¿Qué tiene tu proyecto de especial para que David lo considere por encima de los otros cientos que aplican todos los días? Dame 3 razones para elegir tu marca.',
    placeholder: 'Escribe aquí tus 3 razones...',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

const COUNTRIES = [
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+51', flag: '🇵🇪', name: 'Peru' },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: '+58', flag: '🇻🇪', name: 'Venezuela' },
  { code: '+507', flag: '🇵🇦', name: 'Panama' },
  { code: '+506', flag: '🇨🇷', name: 'Costa Rica' },
  { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: '+503', flag: '🇸🇻', name: 'El Salvador' },
  { code: '+502', flag: '🇬🇹', name: 'Guatemala' },
  { code: '+504', flag: '🇭🇳', name: 'Honduras' },
  { code: '+505', flag: '🇳🇮', name: 'Nicaragua' },
  { code: '+53', flag: '🇨🇺', name: 'Cuba' },
  { code: '+1', flag: '🇩🇴', name: 'Dominican Republic' },
  { code: '+1', flag: '🇵🇷', name: 'Puerto Rico' },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+36', flag: '🇭🇺', name: 'Hungary' },
  { code: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+972', flag: '🇮🇱', name: 'Israel' },
]

export function SurveyForm() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [phase, setPhase] = useState<'survey' | 'loading' | 'calendar'>('survey')
  const [direction, setDirection] = useState(1)
  const [phoneCountry, setPhoneCountry] = useState(COUNTRIES[0])
  const [showCountryPicker, setShowCountryPicker] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const pickerRef = useRef<HTMLDivElement>(null)

  const step = STEPS[current]

  useEffect(() => {
    if (!showCountryPicker) return
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowCountryPicker(false)
        setCountrySearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showCountryPicker])

  const filteredCountries = countrySearch
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.includes(countrySearch))
    : COUNTRIES

  useEffect(() => {
    if (phase !== 'calendar') return
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#E86040' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [phase])

  const goNext = useCallback(() => {
    if (current < STEPS.length - 1) {
      setDirection(1)
      setSelected(null)
      setCurrent((c) => (c < STEPS.length - 1 ? c + 1 : c))
      setTimeout(() => {
        inputRef.current?.focus()
        textareaRef.current?.focus()
      }, 400)
    }
  }, [current])

  const handleChoice = (option: string) => {
    setSelected(option)
    setAnswers((a) => ({ ...a, [current]: option }))
    setTimeout(() => goNext(), 350)
  }

  const handleTextNext = () => {
    const val = answers[current]?.trim()
    if (!val) return
    goNext()
  }

  const handleSubmit = () => {
    const val = answers[current]?.trim()
    if (!val) return
    setPhase('loading')
    fetch('/api/survey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers, phoneCode: phoneCountry.code }),
    }).catch(() => {})
    setTimeout(() => setPhase('calendar'), 2800)
  }

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
  }

  if (phase === 'loading') {
    return (
      <div className="fixed inset-0 bg-brand-black flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <span className="font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
            PRONOVAMARK<span className="text-brand-coral">.</span>
          </span>
          <div className="mt-10 flex justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-neutral-700 border-t-brand-coral animate-spin" />
          </div>
          <p className="mt-6 text-neutral-400 text-sm font-medium tracking-wide">Respuesta Recibida</p>
        </motion.div>
      </div>
    )
  }

  if (phase === 'calendar') {
    return (
      <div className="fixed inset-0 bg-brand-black flex flex-col z-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex justify-center py-6 flex-shrink-0"
        >
          <span className="font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
            PRONOVAMARK<span className="text-brand-coral">.</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="flex-1 overflow-y-auto px-4 pb-12"
        >
          <Cal
            calLink="pronovamark-ii3rst/llamada-de-descubrimiento"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{
              layout: 'month_view',
              theme: 'dark',
              ...(answers[1] ? { name: answers[1] } : {}),
              ...(answers[3] ? { email: answers[3] } : {}),
            }}
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-brand-black flex flex-col z-50 overflow-hidden">
      {/* Background — subtle silhouette effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[70%] h-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(ellipse at 70% 40%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative z-10 flex justify-center pt-8 sm:pt-12 pb-4">
        <span className="font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
          PRONOVAMARK<span className="text-brand-coral">.</span>
        </span>
      </div>

      {/* Question area */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-[620px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease }}
            >
              <h2 className="font-bold text-brand-cream text-lg sm:text-xl lg:text-2xl leading-snug mb-6">
                {step.question} <span className="text-brand-coral">*</span>
              </h2>

              {step.type === 'choice' && (
                <div className="flex flex-col gap-2.5">
                  {step.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleChoice(opt)}
                      className={`text-left w-full px-5 py-3.5 rounded-lg border text-sm sm:text-base text-brand-cream transition-all duration-200 ${
                        selected === opt
                          ? 'border-brand-coral bg-brand-coral/10'
                          : 'border-white/15 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {step.type === 'text' && (
                <div>
                  <div className="relative">
                    {step.icon === 'phone' && (
                      <div className="absolute left-0 top-0 h-full flex items-center z-10" ref={pickerRef}>
                        <button
                          type="button"
                          onClick={() => { setShowCountryPicker(!showCountryPicker); setCountrySearch('') }}
                          className="flex items-center gap-1.5 h-full pl-4 pr-2 text-sm text-neutral-300 hover:text-brand-cream transition-colors"
                        >
                          <span>{phoneCountry.flag}</span>
                          <span className="text-neutral-500 text-xs">{phoneCountry.code}</span>
                          <svg className={`w-3 h-3 text-neutral-600 transition-transform ${showCountryPicker ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {showCountryPicker && (
                          <div className="absolute top-full left-0 mt-1 w-64 max-h-52 overflow-y-auto rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl shadow-black/50 z-50">
                            <div className="sticky top-0 bg-neutral-900/95 backdrop-blur-xl p-2 border-b border-white/5">
                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                placeholder="Buscar país..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-brand-cream placeholder:text-neutral-600 focus:outline-none focus:border-white/20"
                                autoFocus
                              />
                            </div>
                            {filteredCountries.map((c, i) => (
                              <button
                                key={`${c.code}-${c.name}-${i}`}
                                type="button"
                                onClick={() => { setPhoneCountry(c); setShowCountryPicker(false); setCountrySearch(''); inputRef.current?.focus() }}
                                className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-white/5 ${phoneCountry.name === c.name && phoneCountry.code === c.code ? 'bg-white/[0.03] text-brand-cream' : 'text-neutral-400'}`}
                              >
                                <span className="text-base">{c.flag}</span>
                                <span className="flex-1 truncate">{c.name}</span>
                                <span className="text-xs text-neutral-600">{c.code}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {step.icon === 'mail' && (
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    )}
                    <input
                      ref={inputRef}
                      type={step.icon === 'mail' ? 'email' : step.icon === 'phone' ? 'tel' : 'text'}
                      value={answers[current] || ''}
                      onChange={(e) => {
                        let val = e.target.value
                        if (step.icon === 'phone') {
                          const digits = val.replace(/\D/g, '').slice(0, 15)
                          const parts = [digits.slice(0, 3), digits.slice(3, 5), digits.slice(5, 7), digits.slice(7, 9), digits.slice(9)].filter(Boolean)
                          val = parts.join(' ')
                        }
                        setAnswers((a) => ({ ...a, [current]: val }))
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleTextNext()}
                      placeholder={step.placeholder}
                      className={`w-full bg-transparent border border-white/20 rounded-lg py-3.5 text-brand-cream text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-white/40 transition-colors ${
                        step.icon === 'phone' ? 'pl-[105px] pr-4' : step.icon ? 'pl-12 pr-4' : 'px-4'
                      }`}
                      autoFocus
                    />
                  </div>
                  {step.hint && (
                    <p className="text-neutral-500 text-xs mt-2">{step.hint}</p>
                  )}
                </div>
              )}

              {step.type === 'final-text' && (
                <div>
                  <textarea
                    ref={textareaRef}
                    value={answers[current] || ''}
                    onChange={(e) => setAnswers((a) => ({ ...a, [current]: e.target.value }))}
                    placeholder={step.placeholder}
                    rows={3}
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3.5 text-brand-cream text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    autoFocus
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-[620px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Progress */}
          <div className="flex items-center gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i <= current ? 'bg-brand-coral w-5' : 'bg-white/10 w-3'
                }`}
              />
            ))}
          </div>

          {step.type === 'final-text' ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!answers[current]?.trim()}
              className="px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide uppercase transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #F13030 0%, #C41818 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 16px rgba(230,35,35,0.35)',
              }}
            >
              ENVIAR
            </button>
          ) : step.type !== 'choice' ? (
            <button
              type="button"
              onClick={handleTextNext}
              disabled={!answers[current]?.trim()}
              className="px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide uppercase transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #F13030 0%, #C41818 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 16px rgba(230,35,35,0.35)',
              }}
            >
              SIGUIENTE
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={!selected}
              className="px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide uppercase transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #F13030 0%, #C41818 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 16px rgba(230,35,35,0.35)',
              }}
            >
              SIGUIENTE
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
