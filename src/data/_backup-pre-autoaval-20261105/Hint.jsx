import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import T from '../translate/T.jsx'

// Pista progressiva: guia sense desvetllar la resposta. Tancada per
// defecte perquè l'alumne ho intenti primer pel seu compte.
export default function Hint({ hints }) {
  const list = Array.isArray(hints) ? hints : [hints]
  const [shown, setShown] = useState(0)

  if (!list.length) return null

  return (
    <div className="mt-3">
      {shown === 0 ? (
        <button
          onClick={() => setShown(1)}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)] px-4 py-1.5 text-sm font-semibold text-[var(--orange)] hover:bg-[rgba(238,141,58,0.12)] transition-colors"
        >
          💡 Necessites una pista?
        </button>
      ) : (
        <div className="space-y-2">
          <AnimatePresence>
            {list.slice(0, shown).map((h, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border-s-4 border-[var(--orange)] bg-[rgba(238,141,58,0.08)] px-4 py-2.5 text-sm"
              >
                <span className="font-semibold text-[var(--orange)]">Pista {i + 1}:</span>{' '}
                <T>{h}</T>
              </motion.p>
            ))}
          </AnimatePresence>
          {shown < list.length && (
            <button
              onClick={() => setShown(shown + 1)}
              className="text-sm font-semibold text-[var(--orange)] hover:underline"
            >
              💡 Una altra pista
            </button>
          )}
        </div>
      )}
    </div>
  )
}
