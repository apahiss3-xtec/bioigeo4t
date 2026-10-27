import { motion } from 'framer-motion'
import T from '../translate/T.jsx'
import { asset } from '../utils.js'

// Colors de les columnes de `compare` (mateixes lletres que ==text|x==)
const COL_COLORS = {
  a: 'var(--biome-accent)',
  p: 'var(--purple-ink)',
  o: 'var(--orange)',
  g: '#3e7c4f',
  r: '#c0392b',
  b: '#1f8ad0'
}

// Fórmula: text pla, o { lhs, num, den, tail } per pintar una fracció
// de debò (numerador a sobre, denominador a sota).
function Formula({ f }) {
  if (typeof f === 'string') return <T>{f}</T>
  return (
    <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
      {f.lhs && <span><T>{f.lhs}</T></span>}
      {f.lhs && <span>=</span>}
      {f.num ? (
        <span className="inline-flex flex-col items-center leading-tight">
          <span className="px-2 pb-1"><T>{f.num}</T></span>
          <span className="w-full border-t-2" style={{ borderColor: 'currentColor' }} />
          <span className="px-2 pt-1"><T>{f.den}</T></span>
        </span>
      ) : (
        f.rhs && <span><T>{f.rhs}</T></span>
      )}
      {f.tail && <span><T>{f.tail}</T></span>}
    </span>
  )
}

// Targeta de teoria. El tipus decideix l'estil:
// keyequation → destacada amb fórmula; epistemic/preview → amb badge;
// synthesis → barra de bioma; concept/transfer → estàndard.
// Camps visuals opcionals (per no fer paràgrafs compactes):
//   formula   → caixa centrada (text o fracció { lhs, num, den, tail })
//   bullets   → llista curta de punts sota el text
//   compare   → dues o tres columnes [{ title, color, items: [...] }]
//   formulaNote → línia petita sota la fórmula (exemple resolt)
export default function TheoryCard({ point, index }) {
  const isKey = point.type === 'keyequation'
  const isSynthesis = point.type === 'synthesis'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={`card p-6 ${isKey ? 'border-[var(--biome-accent)]' : ''} ${
        isSynthesis ? 'border-s-4' : ''
      }`}
      style={isSynthesis ? { borderInlineStartColor: 'var(--biome)' } : undefined}
    >
      {point.badge && (
        <span className="mb-3 inline-block rounded-full border border-[var(--rule-strong)] px-3 py-0.5 text-xs font-semibold tracking-wide text-[var(--muted)]">
          {point.badge}
        </span>
      )}
      <div className="flex gap-4">
        <span className="bignum decorative" style={{ color: 'var(--biome-accent)' }}>
          {index + 1}
        </span>
        <div className="min-w-0">
          <h3 className="text-2xl mb-2">
            <T>{point.heading}</T>
          </h3>
          {point.text && (
            <p className="text-[var(--text)]/90">
              <T>{point.text}</T>
            </p>
          )}
          {point.formula && (
            <div className="mt-4 rounded-xl bg-[var(--bg-soft)] px-4 py-3 text-center">
              <div
                className="font-display text-lg md:text-2xl font-semibold"
                style={{ color: 'var(--biome-accent)' }}
              >
                <Formula f={point.formula} />
              </div>
              {point.formulaNote && (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  <T>{point.formulaNote}</T>
                </p>
              )}
            </div>
          )}
          {point.bullets && (
            <ul className="mt-3 space-y-1.5">
              {point.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-[var(--text)]/90">
                  <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--biome-accent)' }} />
                  <span><T>{b}</T></span>
                </li>
              ))}
            </ul>
          )}
          {point.compare && (
            <div className={`mt-4 grid gap-3 ${point.compare.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {point.compare.map((col, i) => {
                const c = COL_COLORS[col.color] || COL_COLORS.a
                return (
                  <div key={i} className="rounded-xl border border-[var(--rule)] bg-[var(--bg-soft)] p-3 border-t-4" style={{ borderTopColor: c }}>
                    <p className="mb-2 font-semibold" style={{ color: c }}>
                      <T>{col.title}</T>
                    </p>
                    <ul className="space-y-1 text-sm text-[var(--text)]/90">
                      {col.items.map((it, j) => (
                        <li key={j} className="flex gap-2">
                          <span aria-hidden="true" style={{ color: c }}>›</span>
                          <span><T>{it}</T></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          )}
          {point.after && (
            <p className="mt-3 text-[var(--text)]/90">
              <T>{point.after}</T>
            </p>
          )}
          {point.image && (
            <figure className="mt-4 overflow-hidden rounded-xl border border-[var(--rule)] bg-white">
              <img src={asset(point.image)} alt={point.imageCaption || ''} className="block w-full" loading="lazy" />
              {point.imageCaption && (
                <figcaption className="px-4 py-2 text-xs text-[var(--muted)]">
                  <T>{point.imageCaption}</T>
                </figcaption>
              )}
            </figure>
          )}
          {point.video && (
            <figure className="mt-4 overflow-hidden rounded-xl border border-[var(--rule)] bg-black">
              <video
                src={asset(point.video)}
                className="w-full block"
                controls
                muted
                loop
                playsInline
                preload="metadata"
              />
              <figcaption className="px-4 py-2 text-xs text-[var(--muted)]">
                🎬 Animació: <T>{point.heading}</T>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </motion.article>
  )
}
