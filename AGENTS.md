# Mi App Page — Personal Portfolio

## Project Overview

Portfolio personal / ecosistema digital de **Erubanel Gallo**. Single-page application que muestra perfil profesional, proyectos, habilidades, testimonios, blog y contacto. Diseñada con enfoque en rendimiento, animaciones sutiles y experiencia de usuario premium.

- **Propósito:** Landing page profesional + portafolio interactivo
- **Autor:** Erubanel Gallo
- **Idioma:** Español (es-MX)
- **Soporte de tema:** Claro / Oscuro via `data-theme` attribute

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| React | ^19.2.6 | UI library |
| Vite | ^8.0.12 | Build tool / dev server |
| Tailwind CSS | ^4.3.0 | Estilos utilitarios |
| Framer Motion | ^12.40.0 | Animaciones |
| Lenis | ^1.3.23 | Smooth scrolling |
| Lucide React | ^0.475.0 | Iconos SVG |
| clsx | ^2.1.1 | Clases condicionales |
| tailwind-merge | ^3.6.0 | Merge de clases Tailwind |

---

## Project Structure

```
mi-app-page/
├── AGENTS.md                 # Instrucciones para agentes AI
├── index.html                # Entry HTML + Meta tags SEO
├── vite.config.js            # Configuración de Vite
├── eslint.config.js          # Configuración de ESLint
├── package.json
│
├── public/                   # Imágenes estáticas (NO MODIFICAR)
│   ├── Nueva_foto.png
│   ├── Logo Eru negro.png
│   ├── Codigo Maestro positivo.png
│   ├── Logo Costa Chica Reformatedo2.png
│   ├── foto.png
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Componente raíz (orquesta secciones)
│   ├── index.css             # Tailwind v4 + estilos globales
│   │
│   ├── lib/
│   │   └── utils.js          # cn() helper (clsx + twMerge)
│   │
│   ├── data/
│   │   └── siteData.js       # Todos los datos centralizados
│   │
│   ├── hooks/
│   │   ├── useActiveSection.js   # Scroll-based nav detection
│   │   ├── useMagnetic.js        # Magnetic button effect
│   │   └── useTilt.js            # 3D tilt card effect
│   │
│   └── components/
│       ├── Background.jsx        # Grid + gradient wash
│       ├── ParticlesBackground.jsx  # Canvas particles
│       ├── ScrollProgress.jsx    # Progress bar (top)
│       ├── Navbar.jsx            # Nav + mobile hamburger menu
│       ├── ThemeToggle.jsx       # Dark/Light mode
│       ├── SocialSidebar.jsx     # Floating social links
│       ├── BackToTop.jsx         # Floating back-to-top button
│       ├── Section.jsx           # Reusable section wrapper
│       ├── HeroSection.jsx       # Hero con typewriter + magnetic buttons
│       ├── TypewriterText.jsx    # Typewriter animation component
│       ├── AboutSection.jsx      # Perfil + skills
│       ├── SkillsSection.jsx     # Tech skills con barras animadas
│       ├── TimelineSection.jsx   # Línea de tiempo profesional
│       ├── PortfolioSection.jsx  # Proyectos con filtro + tilt 3D
│       ├── TestimonialsSection.jsx # Testimonios
│       ├── ClientsSection.jsx    # Clientes/colaboraciones
│       ├── BlogSection.jsx       # Artículos recientes
│       ├── PricingSection.jsx    # Paquetes de servicio
│       ├── ContactSection.jsx    # Formulario con validación
│       ├── Marquee.jsx           # Infinite marquee
│       └── Footer.jsx            # Footer + marquee
│
└── dist/                     # Build output (NO MODIFICAR)
```

---

## Commands

```bash
npm run dev       # Iniciar servidor de desarrollo (Vite)
npm run build     # Build de producción
npm run preview   # Preview del build
npm run lint      # ESLint check
```

---

## Code Style & Conventions

### Generales
- **Sin comentarios en el código.** El código debe ser auto-documentado.
- **Arrow functions** para componentes (`export const Component = () => ...`).
- Nombres de archivos en **PascalCase** para componentes.
- Nombres de hooks con prefijo `use` en **camelCase**.
- Utilizar `cn()` de `src/lib/utils.js` para combinar clases condicionalmente (usa `clsx` + `tailwind-merge`).

### Import order (consistente)
1. React / hooks nativos
2. Librerías externas (framer-motion, lucide-react, lenis)
3. Componentes locales (`../components/...`)
4. Hooks locales (`../hooks/...`)
5. Data (`../data/siteData`)
6. Utils (`../lib/utils`)

### Tailwind CSS
- Usar `@apply` dentro de `@layer components` en `index.css` para estilos reutilizables.
- Clases utilitarias directamente en JSX para estilos únicos.
- Paleta de colores definida en `@theme` dentro de `index.css`.
- Soporte de tema claro con `[data-theme="light"]` sobreescrituras.
- **NO** usar `!important` en `@apply` (Tailwind v4 no lo soporta).

### Animaciones
- **Easing estándar:** `[0.16, 1, 0.3, 1]` (cubic-bezier profesional).
- **Framer Motion** para todas las animaciones.
- `viewport={{ once: true }}` para animaciones scroll-triggered.
- `whileInView` para entradas en secciones.
- Usar `AnimatePresence` para animaciones de salida/transiciones.

### Colores del theme (Tailwind)
| Variable | Hex (Dark) | Hex (Light) |
|---|---|---|
| `brand-background` | `#07090f` | `#f4f6f9` |
| `brand-ink` | `#f7f8fb` | `#0f111a` |
| `brand-muted` | `#9aa4b2` | `#6b7280` |
| `brand-line` | `#202633` | `#e2e6ef` |
| `brand-cyan` | `#22d3ee` | `#22d3ee` |
| `brand-blue` | `#3b82f6` | `#3b82f6` |
| `brand-green` | `#34d399` | `#34d399` |
| `brand-amber` | `#f59e0b` | `#f59e0b` |

---

## Key Patterns

### Secciones
Todas las secciones usan `Section` wrapper (de `src/components/Section.jsx`) que provee:
- Fade-in + slide-up en scroll (`whileInView`)
- Espaciado consistente (`section-space`)
- Contenedor responsivo (`container-wrap`)

### Navegación fluida
- `useActiveSection` hook detecta qué sección está visible vía scroll position.
- `Navbar` se actualiza con clase `nav-link-active`.
- Clic en nav hace scroll suave con Lenis (`lenisRef.current.scrollTo`).

### Tema claro/oscuro
- `ThemeToggle` cambia `data-theme` en `<html>` entre `"dark"` y `"light"`.
- CSS lo maneja via `[data-theme="light"]` overrides.
- Transición suave con `transition-colors duration-300`.

### Formulario
- Validación con función `validate()` (nombre, email regex, mensaje).
- Estados: `errors` (inline), `submitted` (feedback success).
- `noValidate` en `<form>` para control manual.

---

## Boundaries (NO MODIFICAR)

| Ruta | Razón |
|---|---|
| `public/` | Imágenes estáticas del proyecto |
| `dist/` | Build output generado por Vite |
| `node_modules/` | Dependencias |
| `package-lock.json` | Lock file generado automáticamente |
| `.git/` | Repositorio git |
| `vite-dev.err.log` | Logs de desarrollo |
| `vite-dev.log` | Logs de desarrollo |

---

## Git Workflow

- **NO hacer commits a menos que el usuario lo solicite explícitamente.**
- Verificar `git status` y `git diff` antes de cualquier commit.
- Mensajes de commit convencionales y descriptivos en español.
- No forzar push (`--force`), no amend, no commits vacíos.
- No modificar configuración de git.

---

## Dependencies (package.json)

### Producción
```json
"@tailwindcss/vite": "^4.3.0",
"clsx": "^2.1.1",
"framer-motion": "^12.40.0",
"lenis": "^1.3.23",
"lucide-react": "^0.475.0",
"react": "^19.2.6",
"react-dom": "^19.2.6",
"tailwind-merge": "^3.6.0"
```

### Dev
```json
"@eslint/js": "^10.0.1",
"@types/react": "^19.2.14",
"@types/react-dom": "^19.2.3",
"@vitejs/plugin-react": "^6.0.1",
"autoprefixer": "^10.5.0",
"eslint": "^10.3.0",
"eslint-plugin-react-hooks": "^7.1.1",
"eslint-plugin-react-refresh": "^0.5.2",
"globals": "^17.6.0",
"postcss": "^8.5.15",
"tailwindcss": "^4.3.0",
"vite": "^8.0.12"
```
