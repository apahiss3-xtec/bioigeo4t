import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import T from '../translate/T.jsx'

// Test de transferència: cas pràctic amb context NOU (diferent del de la
// prova) per comprovar que l'alumne infereix i no només recorda.
// Dona feedback orientador per opció, sense puntuar com una nota.
export default function TransferTest({ test }) {
  const [answers, setAnswers] = useState({})

  if (!test?.questions?.length) return null

  const choose = (qid, oi) =>
    setAnswers((prev) => (prev[qid] === oi ? prev : { ...prev, [qid]: oi }))

  const answered = Object.keys(answers).length
  const correct = test.questions.filter((q) => answers[q.id] === q.correct).length

  return (
    <div className="space-y-5">
      <div
        className="rounded-xl border-s-4 bg-[var(--surface-2)] p-4"
        style={{ borderInlineStartColor: 'var(--biome-accent)' }}
      >
        <p className="kicker mb-1">🧪 Posa't a prova amb un cas nou</p>
        <p>
          <T>{test.context}</T>
        </p>
      </div>

      {test.questions.map((q, i) => {
        const chosen = answers[q.id]
        const isAnswered = chosen !== undefined
        const isCorrect = chosen === q.correct
        return (
          <div key={q.id} className="card p-5">
            <p className="mb-3 flex gap-3">
              <span className="bignum">{i + 1}</span>
              <span className="pt-1.5">
                <T>{q.text}</T>
              </span>
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                let stateCls = 'border-[var(--rule)] hover:border-[var(--purple-deep)]'
                if (isAnswered && oi === q.correct) {
                  stateCls = 'border-[#3e7c4f] bg-[rgba(62,124,79,0.14)]'
                } else if (isAnswered && oi === chosen) {
                  stateCls = 'border-[#8b1a1a] bg-[rgba(139,26,26,0.14)]'
                }
                return (
                  <button
                    key={oi}
                    onClick={() => choose(q.id, oi)}
                    disabled={isAnswered}
                    className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2 text-start transition-colors ${stateCls} ${
                      isAnswered ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <span className="font-display font-bold text-[var(--muted)]">
                      {String.fromCharCode(97 + oi)})
                    </span>
                    <span>
                      <T>{opt}</T>
                    </span>
                    {isAnswered && oi === q.correct && <span className="ms-auto">✓</span>}
                    {isAnswered && oi === chosen && oi !== q.correct && (
                      <span className="ms-auto">✗</span>
                    )}
                  </button>
                )
              })}
            </div>
            <AnimatePresence>
              {isAnswered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mt-3 rounded-xl px-4 py-3 text-sm ${
                    isCorrect
                      ? 'bg-[rgba(62,124,79,0.14)]'
                      : 'bg-[rgba(238,141,58,0.1)]'
                  }`}
                >
                  <strong>{isCorrect ? '✓ Molt bé. ' : '↻ Repensa-ho. '}</strong>
                  <T>{isCorrect ? q.feedback.correct : q.feedback.wrong}</T>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      {answered === test.questions.length && (
        <p className="card p-4 text-center font-display text-lg">
          Has encertat <span className="text-[var(--biome-accent)] font-bold">{correct}</span> de{' '}
          {test.questions.length}.{' '}
          {correct === test.questions.length
            ? 'Domines la transferència: vas preparat/da! 🎉'
            : 'Repassa els casos que has fallat amb les pistes i torna-hi.'}
        </p>
      )}
    </div>
  )
}
