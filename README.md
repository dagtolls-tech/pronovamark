# Pronovamark — Web Oficial

Landing page de alta conversión para Pronovamark, agencia de marketing digital en Benidorm.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React Hook Form + Zod** para el formulario de contacto
- **lucide-react** para iconos
- **Google Fonts** — Syne (titulares) + Inter (body)

---

## Cómo arrancar

### 1. Instalar Node.js (si no lo tienes)

Descarga e instala Node.js 18+ desde: https://nodejs.org/es/download

### 2. Instalar dependencias

```bash
cd pronovamark
npm install
```

### 3. Arrancar en desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en el navegador.

### 4. Build para producción

```bash
npm run build
npm start
```

---

## Deploy en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En https://vercel.com, importa el repositorio.
3. Vercel detecta Next.js automáticamente — haz clic en **Deploy**.
4. Añade las variables de entorno (ver abajo).

---

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Para envío de emails (Opción A — Resend)
RESEND_API_KEY=re_xxxxxx

# Para webhook de n8n/Make (Opción B)
WEBHOOK_URL=https://tu-webhook.n8n.cloud/webhook/xxxxx

# URL del site (para metadatos y sitemap)
NEXT_PUBLIC_SITE_URL=https://www.pronovamark.com
```

En Vercel, añádelas desde **Settings → Environment Variables**.

---

## Dónde reemplazar los placeholders

Todos los TODO están en `lib/constants.ts`. Busca `// TODO` en ese archivo y sustituye:

### Métricas del hero
```ts
// lib/constants.ts — HERO_STATS
export const HERO_STATS = [
  { value: '+5M', label: 'Views generadas' },       // ← cifra real
  { value: '+30', label: 'Negocios escalados' },    // ← cifra real
  { value: '+40%', label: 'Conversión media' },     // ← cifra real
]
```

### Casos de éxito
En `CASES`, reemplaza cada entrada con:
- `name`: nombre real del negocio
- `sector` y `location`: sector y ciudad
- `problem`, `solution`: texto real
- `metrics`: números reales

Para añadir imagen al caso:
1. Sube la imagen a `/public/images/casos/[slug].jpg`
2. Descomenta `image` en la interfaz `Case` de `constants.ts`
3. En `components/sections/Cases.tsx` y `app/(marketing)/casos/[slug]/page.tsx`, sustituye el placeholder por `<Image src={caso.image} ... />`

### Testimonios
En `TESTIMONIALS`, reemplaza con datos reales. Para fotos:
1. Sube la foto a `/public/images/testimonios/[id].jpg`
2. Descomenta `avatar` en la interfaz `Testimonial`
3. En `components/sections/Testimonials.tsx`, sustituye el avatar de iniciales por `<Image />`

### Redes sociales
```ts
// lib/constants.ts
export const TIKTOK_URL = 'https://www.tiktok.com/@pronovamark'   // ← añadir
export const LINKEDIN_URL = 'https://www.linkedin.com/company/pronovamark' // ← añadir
```

### Logo
El logo está implementado como componente SVG/CSS en `components/shared/Logo.tsx`.
Si tienes el logo en PNG/SVG, puedes:
1. Subirlo a `/public/logos/pronovamark-logo.svg`
2. Reemplazar el componente `Logo` con `<Image src="/logos/pronovamark-logo.svg" ... />`

### Aviso legal y política de privacidad
Están en `app/(marketing)/aviso-legal/page.tsx` y `app/(marketing)/politica-privacidad/page.tsx`.
Busca `TODO: completar` y añade los datos fiscales reales.

### Formulario de contacto — activar envío de emails
En `app/api/contact/route.ts`:
- **Opción A (Resend):** Descomenta el bloque de Resend y añade `RESEND_API_KEY` al `.env.local`
- **Opción B (n8n/Make):** Descomenta el bloque de webhook y añade `WEBHOOK_URL` al `.env.local`

---

## Estructura de carpetas

```
pronovamark/
├── app/
│   ├── (marketing)/         ← páginas principales
│   │   ├── page.tsx          ← home
│   │   ├── casos/page.tsx
│   │   ├── casos/[slug]/page.tsx
│   │   ├── aviso-legal/page.tsx
│   │   └── politica-privacidad/page.tsx
│   ├── api/contact/route.ts  ← endpoint del formulario
│   ├── layout.tsx            ← layout raíz + fuentes
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── sections/             ← Nav, Hero, Problem, Process, Services,
│   │                           Cases, Testimonials, WhyUs, FAQ, CTAFinal, Footer
│   └── shared/               ← Logo, AnimatedSection, PhoneMockup
├── lib/
│   ├── constants.ts          ← TODOS los datos del sitio
│   ├── seo.ts                ← metadata y schema.org
│   └── utils.ts
└── public/
    ├── robots.txt
    └── images/               ← aquí van las imágenes reales
```

---

## Checklist de lanzamiento

- [ ] Instalar Node.js y ejecutar `npm install`
- [ ] Reemplazar métricas del hero en `lib/constants.ts`
- [ ] Añadir al menos 1 caso real con datos reales
- [ ] Añadir al menos 1 testimonio real
- [ ] Completar datos fiscales en aviso legal y política de privacidad
- [ ] Configurar envío del formulario (Resend o webhook)
- [ ] Añadir `RESEND_API_KEY` o `WEBHOOK_URL` en Vercel
- [ ] Conectar dominio `pronovamark.com` en Vercel
- [ ] Verificar en Google Search Console
- [ ] Probar en móvil (375px) antes de publicar
- [ ] Revisar Lighthouse ≥ 95 en producción
```
