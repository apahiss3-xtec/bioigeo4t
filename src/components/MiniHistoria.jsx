import { motion } from 'framer-motion'
import T from '../translate/T.jsx'

// Mini-història de la ciència (SA3·S2: Rosalind Franklin i la Foto 51).
// Si la imatge original no és lliure, NO s'hi enllaça: es DESCRIU amb
// paraules (camp `imatgeDescripcio`) i es diu on es pot consultar.
export default function MiniHistoria({ historia }) {
  if (!historia) return null
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="card border-s-4 p-6"
      style={{ borderInlineStartColor: 'var(--biome)' }}
    >
      <span className="mb-3 inline-block rounded-full border border-[var(--rule-strong)] px-3 py-0.5 text-xs font-semibold tracking-wide text-[var(--muted)]">
        {historia.badge || '🔎 Història de la ciència'}
      </span>
      <h3 className="text-2xl mb-2">
        <T>{historia.titol}</T>
      </h3>

      <ol className="mt-4 space-y-3">
        {(historia.fites || []).map((f) => (
          <li key={f.any} className="flex gap-4">
            <span
              className="shrink-0 pt-0.5 text-sm font-semibold tabular-nums"
              style={{ color: 'var(--biome-accent)' }}
            >
              {f.any}
            </span>
            <span className="text-[var(--text)]/90">
              <T>{f.text}</T>
            </span>
          </li>
        ))}
      </ol>

      {historia.imatgeDescripcio && (
        <div className="mt-5 rounded-lg border border-dashed border-[var(--rule-strong)] bg-[var(--bg-soft)] px-4 py-3">
          <p className="kicker mb-1">{historia.imatgeTitol || 'Com és la imatge'}</p>
          <p className="text-sm text-[var(--text)]/90">
            <T>{historia.imatgeDescripcio}</T>
          </p>
          {historia.imatgeLlicencia && (
            <p className="mt-2 text-xs text-[var(--muted)]">
              <T>{historia.imatgeLlicencia}</T>
            </p>
          )}
        </div>
      )}

      {historia.pregunta && (
        <p className="mt-5 text-sm italic text-[var(--muted)]">
          <T>{historia.pregunta}</T>
        </p>
      )}
    </motion.article>
  )
}
