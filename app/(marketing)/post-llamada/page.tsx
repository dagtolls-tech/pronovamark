import type { Metadata } from 'next'
import { PostCallContent } from '@/components/sections/PostCallContent'

export const metadata: Metadata = {
  title: 'Último Paso | Pronovamark',
  description: 'Mira esta página antes de nuestra llamada. Prepárate para sacar el máximo provecho.',
  robots: { index: false, follow: false },
}

export default function PostLlamadaPage() {
  return <PostCallContent />
}
