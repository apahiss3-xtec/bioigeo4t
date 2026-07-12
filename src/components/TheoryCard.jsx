import { motion } from 'framer-motion'
import T from '../translate/T.jsx'
import { asset } from '../utils.js'

// Targeta de teoria. El tipus decideix l'estil:
// keyequation → destacada amb fórmula; epistemic/preview → amb badge;
// synthesis → barra de bioma; concept/transfer → estàndard.
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
          <p className="text-[var(--text)]/90">
            <T>{point.text}</T>
          </p>
          {point.formula && (
            <p
              className="mt-4 rounded-xl bg-[var(--bg-soft)] px-4 py-3 text-center font-display text-xl md:text-2xl font-semibold"
              style={{ color: 'var(--biome-accent)' }}
            >
              {point.formula}
            </p>
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
