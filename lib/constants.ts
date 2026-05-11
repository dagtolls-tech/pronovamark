// ============================================================
// PRONOVAMARK — CONSTANTES DE CONTENIDO
// Sustituye los bloques marcados con // TODO por datos reales
// ============================================================

export const SITE_URL = 'https://www.pronovamark.com'
export const CONTACT_EMAIL = 'pronovamark@gmail.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/pronovamark/'
export const TIKTOK_URL = '#' // TODO: añadir URL de TikTok
export const LINKEDIN_URL = '#' // TODO: añadir URL de LinkedIn

// ── MÉTRICAS HERO ──────────────────────────────────────────
// TODO: reemplazar con cifras reales cuando las tengas
export const HERO_STATS = [
  { value: '+5M', label: 'Views generadas', suffix: '' },
  { value: '+30', label: 'Negocios escalados', suffix: '' },
  { value: '+40%', label: 'Conversión media', suffix: '' },
] as const

// ── CASOS DE ÉXITO ─────────────────────────────────────────
// TODO: reemplazar con casos reales. Estructura lista para añadir.
export interface Case {
  slug: string
  name: string
  sector: string
  location: string
  problem: string
  solution: string
  metrics: { value: string; label: string }[]
  imageAlt: string
  // image: string  // TODO: descomentar y añadir ruta real
  featured: boolean
}

export const CASES: Case[] = [
  {
    slug: 'restaurante-benidorm', // TODO: reemplazar con slug del caso real
    name: 'La Taberna del Mar', // TODO: reemplazar con nombre real
    sector: 'Restaurante',
    location: 'Benidorm, Alicante',
    problem: 'Llenos solo en temporada alta, sin presencia digital y dependientes de plataformas de delivery.',
    solution: 'Estrategia de contenido viral mostrando la cocina en directo y el ambiente del local. Embudo de WhatsApp para reservas automáticas.',
    metrics: [
      { value: '+450K', label: 'views/mes' },
      { value: '+2.300', label: 'seguidores en 60 días' },
      { value: '+38', label: 'reservas atribuidas' },
    ],
    imageAlt: 'Caso de éxito restaurante Benidorm', // TODO: añadir imagen real
    featured: true,
  },
  {
    slug: 'clinica-estetica-valencia', // TODO: reemplazar con slug del caso real
    name: 'Clínica Estética Belleza+', // TODO: reemplazar con nombre real
    sector: 'Clínica Estética',
    location: 'Valencia',
    problem: 'Agenda vacía los lunes y martes. Clientes captados solo por boca a boca.',
    solution: 'Reels de transformaciones (antes/después) con educación sobre tratamientos. Chatbot de IA para captar citas 24/7.',
    metrics: [
      { value: '+800K', label: 'views/mes' },
      { value: '+4.100', label: 'seguidores en 90 días' },
      { value: '+55', label: 'consultas nuevas/mes' },
    ],
    imageAlt: 'Caso de éxito clínica estética Valencia', // TODO: añadir imagen real
    featured: true,
  },
  {
    slug: 'gimnasio-alicante', // TODO: reemplazar con slug del caso real
    name: 'GymFlex Alicante', // TODO: reemplazar con nombre real
    sector: 'Gimnasio',
    location: 'Alicante',
    problem: 'Pérdida de socios en enero, captación casi nula fuera de la temporada de propósitos.',
    solution: 'Contenido de rutinas y transformaciones. Reto viral de 30 días. Secuencia de emails automatizada para conversión.',
    metrics: [
      { value: '+620K', label: 'views/mes' },
      { value: '+1.800', label: 'seguidores en 45 días' },
      { value: '+72', label: 'socios nuevos' },
    ],
    imageAlt: 'Caso de éxito gimnasio Alicante', // TODO: añadir imagen real
    featured: true,
  },
]

// ── TESTIMONIOS ────────────────────────────────────────────
// TODO: reemplazar con testimonios reales de clientes
// Estos son placeholders para mostrar la estructura. Eliminar cuando tengas reales.
export interface Testimonial {
  id: string
  name: string // TODO: nombre real del cliente
  role: string // TODO: cargo/negocio real
  business: string // TODO: nombre del negocio real
  quote: string // TODO: cita real del cliente
  // avatar: string  // TODO: descomentar y añadir foto real
  avatarInitials: string
  sector: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'María García', // TODO: nombre real
    role: 'Propietaria',
    business: 'Clínica Estética BeautyPlus, Valencia', // TODO: negocio real
    quote: 'En 3 meses pasamos de 500 a más de 8.000 seguidores y las consultas online se duplicaron. Lo mejor es que no tuve que tocar nada, ellos lo gestionaron todo.', // TODO: cita real
    avatarInitials: 'MG',
    sector: 'Clínica Estética',
  },
  {
    id: '2',
    name: 'Carlos Martínez', // TODO: nombre real
    role: 'Dueño',
    business: 'Restaurante La Marina, Benidorm', // TODO: negocio real
    quote: 'Tenía miedo de que las redes no fueran para mi tipo de negocio. Me equivocaba. Ahora tenemos lista de espera los fines de semana y eso antes era impensable.', // TODO: cita real
    avatarInitials: 'CM',
    sector: 'Restaurante',
  },
  {
    id: '3',
    name: 'Laura Sánchez', // TODO: nombre real
    role: 'Directora',
    business: 'Centro de Fisioterapia Movimiento, Alicante', // TODO: negocio real
    quote: 'Lo que más me sorprendió fue el sistema de citas automáticas. Entran mensajes en Instagram y salen citas confirmadas sin que yo haga nada. Eso es real.', // TODO: cita real
    avatarInitials: 'LS',
    sector: 'Fisioterapia',
  },
]

// ── SERVICIOS ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'crecimiento-organico',
    icon: 'TrendingUp',
    title: 'Crecimiento orgánico en redes',
    subtitle: 'Instagram + TikTok',
    description:
      'Creamos y publicamos contenido que consigue views reales de personas que luego se convierten en clientes. Sin comprar seguidores, sin atajos.',
    bullets: [
      'Estrategia de contenido mensual adaptada a tu negocio',
      'Producción y edición de vídeo incluida',
      'Publicación y gestión completa de las cuentas',
      'Análisis de tendencias semanales',
      'Reportes de rendimiento claros y sin tecnicismos',
    ],
  },
  {
    id: 'embudos-ia',
    icon: 'Bot',
    title: 'Embudos de venta con IA',
    subtitle: 'Automatizaciones que convierten',
    description:
      'Cada persona que ve tu contenido es una oportunidad. Ponemos sistemas automáticos que capturan esa atención y la convierten en reservas o consultas.',
    bullets: [
      'Chatbots para WhatsApp e Instagram DM',
      'Captación automática de leads 24/7',
      'Secuencias de seguimiento personalizadas',
      'Integración con tu sistema de reservas',
      'Sin que tú tengas que estar pendiente del móvil',
    ],
  },
  {
    id: 'estrategia-reporting',
    icon: 'BarChart3',
    title: 'Estrategia y reportes',
    subtitle: 'Decisiones con datos, no con intuición',
    description:
      'Cada mes te explicamos qué está funcionando, qué no, y qué vamos a cambiar. Sin dashboards imposibles ni jerga que no entiende nadie.',
    bullets: [
      'Reunión mensual de estrategia y resultados',
      'Reporte en formato claro (PDF o Notion)',
      'Métricas que importan: clientes, no solo seguidores',
      'Ajuste continuo de la estrategia',
      'Acceso directo a tu gestor de cuenta',
    ],
  },
]

// ── PROCESO ────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: '01',
    icon: 'Search',
    title: 'Diagnóstico gratuito',
    description:
      'Analizamos tu negocio, tu competencia y tu potencial en redes. Saldrás con un plan claro aunque no empieces con nosotros.',
  },
  {
    number: '02',
    icon: 'Lightbulb',
    title: 'Estrategia personalizada',
    description:
      'Diseñamos el tipo de contenido que conecta con tus clientes ideales. No copias de lo que hace la competencia, sino lo que funciona para tu negocio concreto.',
  },
  {
    number: '03',
    icon: 'Video',
    title: 'Producción constante',
    description:
      'Creamos y publicamos el contenido en Instagram y TikTok de forma regular. Tú te centras en tu negocio, nosotros en que te vean.',
  },
  {
    number: '04',
    icon: 'Zap',
    title: 'IA que convierte visitas',
    description:
      'Activamos los sistemas automáticos que capturan cada interacción y la convierten en una conversación con un cliente potencial. Sin perder ni un lead.',
  },
]

// ── POR QUÉ PRONOVAMARK ────────────────────────────────────
export const WHY_US = [
  {
    icon: 'Store',
    title: 'Solo negocios y Marcas Personales',
    description:
      'No trabajamos con todo el mundo. Nos especializamos en negocios con producto o servicio real y en marcas personales que quieren monetizar su audiencia. Eso hace que entendamos tu situación de verdad.',
  },
  {
    icon: 'Layers',
    title: 'Contenido + IA bajo el mismo techo',
    description:
      'Muchas agencias hacen redes sociales. Otras hacen automatizaciones. Nosotros hacemos las dos cosas y las conectamos para que una refuerce a la otra.',
  },
  {
    icon: 'LineChart',
    title: 'Resultados medibles',
    description:
      'No te venderemos más seguidores si esos seguidores no se convierten en clientes. Lo que medimos es lo que importa: reservas, consultas, ventas reales.',
  },
  {
    icon: 'Handshake',
    title: 'Sin permanencias absurdas',
    description:
      'Confiamos en nuestros resultados. No necesitamos atarte con contratos de 12 meses para retenerte. Nos quedamos porque funciona, no porque no puedas irte.',
  },
]

// ── FAQ ────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 'resultados',
    question: '¿En cuánto tiempo veo resultados?',
    answer:
      'Los primeros resultados en redes (views y seguidores) suelen verse entre las semanas 3 y 6. El contenido que funciona empieza a generar audiencia real bastante rápido. Los clientes que llegan al negocio a través de los embudos, dependiendo del sector, se empiezan a ver entre el mes 1 y el mes 2.',
  },
  {
    id: 'necesitais',
    question: '¿Qué necesitáis de mí para empezar?',
    answer:
      'Muy poco. En la mayoría de casos solo necesitamos acceso a tus cuentas de redes sociales y una llamada inicial para entender tu negocio, tu cliente ideal y tus objetivos. Si hay algo que necesitemos de tu parte, te lo comunicamos con antelación y te explicamos exactamente qué hacer.',
  },
  {
    id: 'camara',
    question: '¿Tengo que salir yo en los vídeos?',
    answer:
      'No es obligatorio. Muchos de nuestros clientes no aparecen en el contenido y aun así consiguen resultados excelentes. Mostramos el producto, el servicio, el proceso o el equipo. Si quieres aparecer tú, perfecto, funciona muy bien. Pero si no quieres o no puedes, lo resolvemos igual.',
  },
  {
    id: 'precio',
    question: '¿Cuánto cuesta?',
    answer:
      'Depende del nivel de servicio que necesites y del estado actual de tu negocio. No tenemos paquetes genéricos porque cada negocio es diferente. Por eso el diagnóstico inicial es gratuito: para que podamos darte un precio real ajustado a lo que necesitas, no uno inflado con servicios que no vas a usar.',
  },
  {
    id: 'mi-negocio',
    question: '¿Funciona para mi tipo de negocio?',
    answer:
      'Trabajamos con negocios que tienen un producto o servicio real que vender, y con marcas personales que quieren convertir su audiencia en ingresos. Si no estás seguro de si encajamos, cuéntanos qué haces en el diagnóstico y te decimos con honestidad si podemos ayudarte.',
  },
  {
    id: 'sin-resultados',
    question: '¿Qué pasa si no veo resultados?',
    answer:
      'Antes de empezar a trabajar juntos, establecemos objetivos claros y medibles. Si al final del primer periodo no hemos cumplido los objetivos acordados, revisamos la estrategia juntos y tomamos decisiones. No somos de los que se esconden detrás de métricas vacías cuando algo no funciona.',
  },
  {
    id: 'vs-community-manager',
    question: '¿En qué se diferencia esto de un community manager?',
    answer:
      'Un community manager publica contenido y gestiona comentarios. Nosotros hacemos eso, pero además diseñamos la estrategia completa, producimos el contenido con criterio de viralidad, y añadimos los sistemas de IA que convierten esa audiencia en clientes. Es la diferencia entre tener presencia en redes y tener un canal de captación real.',
  },
  {
    id: 'embudos-ia',
    question: '¿Qué es eso de los embudos con IA?',
    answer:
      'Cuando alguien ve tu contenido y manda un mensaje por Instagram o WhatsApp, ese mensaje puede quedar sin respuesta horas o días. Con nuestros sistemas, ese mensaje se responde automáticamente de forma personalizada, se captura el contacto, y se guía a la persona hacia una reserva o consulta. Todo eso sin que tú estés pendiente del móvil.',
  },
]

// ── PAIN POINTS (sección problema) ────────────────────────
export const PAIN_POINTS = [
  {
    icon: 'Eye',
    title: 'Publicas y nadie ve nada',
    description:
      'Subes contenido, esperas, y las estadísticas no se mueven. El algoritmo no te favorece porque el contenido no está diseñado para viral.',
  },
  {
    icon: 'Wallet',
    title: 'Gastas en anuncios sin retorno',
    description:
      'Pagas publicidad, consigues clics, pero nadie llama ni reserva. El problema no son los anuncios, es el sistema detrás.',
  },
  {
    icon: 'UserX',
    title: 'Tienes seguidores pero no clientes',
    description:
      'Quizás tienes algunos seguidores, pero no se traducen en visitas al local ni en reservas. La audiencia existe pero no convierte.',
  },
]
