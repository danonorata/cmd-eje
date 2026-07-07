# CMD Eje — sitio web

Sitio one-page bilingüe (ES/EN) para la consultoría CMD Eje. Construido con Next.js 14 (App Router), Tailwind CSS y next-intl.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completar con tus claves reales (Tawk.to, formulario, etc.)
npm run dev
```

Abre `http://localhost:3000/es` o `http://localhost:3000/en`.

## Estructura del proyecto

```
src/
├── app/[locale]/       → páginas por idioma (layout.tsx, page.tsx)
├── components/         → Navbar, Hero, Services, Methodology, ContactCTA, etc.
├── locales/             → es.json, en.json — todos los textos del sitio
├── i18n.ts              → configuración de next-intl
└── middleware.ts         → enrutamiento automático /es /en
```

## Editar contenido (sin tocar código)

Todos los textos visibles del sitio viven en:

- `src/locales/es.json`
- `src/locales/en.json`

Edita el valor de cualquier campo y el texto cambia en el sitio. No es necesario tocar los componentes `.tsx` para cambiar textos.

## Variables de entorno

Ver `.env.example`. Se necesitan para activar:

- Chat en vivo (Tawk.to)
- Formulario de contacto
- Agendamiento (Calendly/Cal.com)
- Analítica (GA4)

## Despliegue

1. Sube este repositorio a GitHub (ver instrucciones abajo).
2. Conecta el repositorio en [vercel.com/new](https://vercel.com/new).
3. Agrega las variables de entorno del `.env.example` en el panel de Vercel (Settings → Environment Variables).
4. Cada `git push` a `main` despliega automáticamente a producción.

## Primeras subida a GitHub

```bash
git remote add origin https://github.com/TU-USUARIO/cmd-eje.git
git branch -M main
git push -u origin main
```

## Stack

- Next.js 14 (App Router, export estático compatible)
- Tailwind CSS
- next-intl (i18n ES/EN)
- React Hook Form + Zod (validación de formularios)
- Tawk.to (chat en vivo)
