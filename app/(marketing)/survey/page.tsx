import type { Metadata } from 'next'
import { SurveyForm } from '@/components/sections/SurveyForm'

export const metadata: Metadata = {
  title: 'Agendar Consultoría | Pronovamark',
  description: 'Agenda tu consultoría 1 a 1 con Pronovamark. Responde unas preguntas rápidas y reserva tu llamada.',
  robots: { index: false, follow: false },
}

export default function SurveyPage() {
  return <SurveyForm />
}
