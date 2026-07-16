import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────
// Esta página usa elementos HTML comunes (<button>, <input>, <div>...) con
// clases de Tailwind que ya usan los NOMBRES de tokens semánticos del design
// system (bg-primary, text-primary-foreground, bg-muted, border-border, etc.).
//
// Ahora mismo esas clases no hacen nada — no existe ningún preset de Tailwind
// que las defina, así que la página se ve sin colores, con el estilo default
// del navegador. Es intencional: así se ve "antes" de exportar.
//
// Cuando exportes el design system desde la app en modo "Agregar a mi
// proyecto" apuntando a este mismo repo, va a llegar un Pull Request que
// agrega design-system/tailwind-preset.js — y tailwind.config.js de este
// proyecto ya está armado para tomarlo solo (ver el comentario ahí). Sin
// tocar una línea de este archivo, estas mismas clases van a empezar a
// pintarse con los colores y la tipografía reales de la marca.
//
// Un paso opcional, para más adelante: reemplazar estos <button>/<input>
// planos por los componentes reales (import { Button } from
// './design-system/components/Button'), para tener también los estados
// (hover, disabled, error) que la IA generó. No hace falta para esta prueba.
// ─────────────────────────────────────────────────────────────────────────

const FEATURES = [
  'IA generativa (Gemini)',
  'Accesibilidad WCAG AA',
  'Código React real',
  'Sin paquete que instalar',
]

const STEPS = [
  {
    title: 'Contás tu marca por chat',
    description:
      'Describís el tono, los valores y, si ya los tenés, colores y tipografías exactas.',
  },
  {
    title: 'Generás tokens y componentes',
    description:
      'Se crea la paleta, la tipografía y 5 componentes ya validados contra WCAG AA.',
  },
  {
    title: 'Elegís "Agregar a mi proyecto"',
    description:
      'En vez de un repo aparte, la app apunta directo a este repo y arma un Pull Request.',
  },
  {
    title: 'El PR agrega design-system/',
    description:
      'Tokens, componentes y el preset de Tailwind quedan dentro de tu propio proyecto.',
  },
]

export default function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Sección 1: Por qué ───────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
          Proyecto de prueba — modo "Agregar a mi proyecto"
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight">
          Este es mi proyecto, no un paquete instalado
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          El design system no se instala por npm acá — se agrega directo como código dentro de
          este mismo repo, en la carpeta <code>design-system/</code>.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {FEATURES.map((feature) => (
            <span
              key={feature}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-8 max-w-xl mx-auto text-left border border-border rounded-lg p-4">
          <p className="font-semibold text-error">Todavía sin estilos</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Si estás viendo esta página sin colores ni tipografía de marca, es lo esperado — el
            design system todavía no se exportó en modo "Agregar a mi proyecto" sobre este repo.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground"
            onClick={() => document.getElementById('acceso')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Empezar ahora
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-medium border border-border"
            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver cómo funciona
          </button>
        </div>
      </section>

      {/* ── Sección 2: Cómo funciona ─────────────────────────────────────── */}
      <section id="como-funciona" className="bg-muted py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Cómo funciona</h2>
          <p className="mt-2 text-center text-muted-foreground">
            De la conversación con la IA a un Pull Request en este mismo repo, en 4 pasos.
          </p>

          <ol className="mt-10 space-y-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4 items-start">
                <span className="w-6 h-6 shrink-0 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Sección 3: Acceso / Descarga ─────────────────────────────────── */}
      <section id="acceso" className="py-16">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Probalo en tu proyecto</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Dejanos tu contacto y te mandamos la guía de instalación paso a paso.
          </p>

          {submitted ? (
            <div className="mt-8 border border-border rounded-lg p-4">
              <p className="font-semibold text-primary">¡Listo!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Recibimos tu contacto. En cuanto el Pull Request de design-system/ esté mergeado,
                esta misma página va a mostrar los colores reales de la marca.
              </p>
            </div>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                placeholder="Tu nombre"
                className="w-full px-3 py-2 rounded-lg border border-border bg-background"
              />
              <input
                placeholder="tu@email.com"
                className="w-full px-3 py-2 rounded-lg border border-border bg-background"
              />
              <textarea
                placeholder="Contanos brevemente tu proyecto"
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground"
              >
                Quiero acceso
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Web de prueba para validar el modo "Agregar a mi proyecto" — no es un producto real.
      </footer>
    </div>
  )
}
