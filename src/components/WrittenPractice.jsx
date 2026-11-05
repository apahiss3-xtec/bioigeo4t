import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import T from '../translate/T.jsx'
import Hint from './Hint.jsx'
import { Figura, Grafic, Paragrafs, TaulaDades } from './AvalFigures.jsx'

// Assaig de prova escrita.
//
// Substitueix la feina que abans feia sol el test de transferència. El test
// de quatre opcions serveix per veure si es transfereix una idea, però no
// per preparar una prova que es respon ESCRIVINT: qui encerta quatre
// preguntes marcant una casella se'n va amb la sensació d'anar preparat i a
// la prova ha de redactar, i allà es veu que no sap construir la resposta.
//
// Aquí les preguntes són del mateix tipus que les de la prova escrita (i,
// quan la prova ja està feta, surten dels seus mateixos blocs: `source`).
// El fluix és deliberadament lent: full i bolígraf, resposta sencera a mà,
// i NOMÉS després s'obre el desplegable amb dues respostes model —una
// d'assoliment satisfactori i una d'excel·lent— perquè qui estudia pugui
// comparar la seva amb totes dues i veure què separa l'una de l'altra.
// `must` són els elements que la resposta ha de contenir sí o sí; es marquen
// un a un, i el recompte és el que acaba al PDF.

const SELF = [
  { id: 'no', label: 'No la sabia fer', color: '#8b1a1a' },
  { id: 'parcial', label: 'Em faltaven coses', color: '#b3661f' },
  { id: 'as', label: 'Com la resposta AS', color: '#3e7c4f' },
  { id: 'ae', label: 'Com la resposta AE', color: '#2f6b8f' }
]

export const SELF_LABELS = SELF

// Un apartat d'una pregunta (a, b, c…), amb la seva pista. Només s'usa si la
// pregunta declara `parts`; si no, es mostra `text` sencer com sempre.
function Apartat({ p }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
        style={{ background: 'var(--biome-accent)' }}
        aria-label={`Apartat ${p.id}`}
      >
        {p.id}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        {p.cita && (
          <blockquote className="mb-2 rounded-2xl rounded-ss-sm border border-[var(--rule-strong)] bg-[var(--bg-soft)] px-4 py-2">
            <strong>{p.cita.qui}:</strong> <em>«<T>{p.cita.text}</T>»</em>
          </blockquote>
        )}
        <p>
          <T>{p.text}</T>
        </p>
        <TaulaDades {...p.dades} />
        <Grafic chart={p.chart} />
        {p.hints?.length > 0 && <Hint hints={p.hints} />}
      </div>
    </div>
  )
}

export default function WrittenPractice({ escrita, onChange, ambProva = true }) {
  const [open, setOpen] = useState({})
  const [self, setSelf] = useState({})
  const [checks, setChecks] = useState({})

  if (!escrita?.questions?.length) return null

  const report = (nextSelf, nextChecks) =>
    onChange?.(
      escrita.questions.map((q) => ({
        id: q.id,
        self: nextSelf[q.id] || null,
        must: (q.must || []).map((m, mi) => ({
          text: m,
          done: !!nextChecks[`${q.id}:${mi}`]
        }))
      }))
    )

  const setSelfFor = (qid, value) => {
    const next = { ...self, [qid]: value }
    setSelf(next)
    report(next, checks)
  }

  const toggleCheck = (key) => {
    const next = { ...checks, [key]: !checks[key] }
    setChecks(next)
    report(self, next)
  }

  return (
    <div className="space-y-5">
      <div
        className="rounded-xl border-s-4 bg-[var(--surface-2)] p-4"
        style={{ borderInlineStartColor: 'var(--biome-accent)' }}
      >
        <p className="kicker mb-1">
          ✍️ Full, bolígraf i el rellotge a la vista
          {escrita.passos?.length > 0 && escrita.minutes ? ` · ${escrita.minutes} min` : ''}
        </p>
        {escrita.passos?.length > 0 ? (
          <>
            {escrita.cas && (
              <p className="mb-3">
                <T>{escrita.cas}</T>
              </p>
            )}
            <ol className="space-y-1.5">
              {escrita.passos.map((pas, n) => (
                <li key={n} className="flex items-start gap-2.5">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: 'var(--biome-accent)' }}
                  >
                    {n + 1}
                  </span>
                  <span>
                    <T>{pas}</T>
                  </span>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <p>
            <T>
              {escrita.intro ||
                (ambProva
                  ? "Aquestes preguntes són del mateix tipus que les de la prova. Escriu cada resposta SENCERA a mà, en un full, sense mirar els apunts. Quan l'hagis acabada —i no abans— obre la solució i compara-la amb la teva."
                  : "Escriu cada resposta SENCERA a mà, en un full, sense mirar els apunts. Quan l'hagis acabada —i no abans— obre la solució i compara-la amb la teva.")}
            </T>
          </p>
        )}
      </div>

      {escrita.questions.map((q, i) => {
        const isOpen = !!open[q.id]
        return (
          <div key={q.id} className="card p-5">
            {q.parts?.length ? (
              <>
                <div className="mb-3 flex items-start gap-3">
                  <span className="bignum">{i + 1}</span>
                  <div className="min-w-0 flex-1 pt-1">
                    {q.titol && (
                      <h3 className="font-display text-lg font-bold leading-snug">
                        <T>{q.titol}</T>
                      </h3>
                    )}
                    <p className="mt-0.5 text-xs text-[var(--muted)]">
                      {[q.oa, q.minutes ? `⏱ ${q.minutes} min` : null, q.source]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  </div>
                </div>
                {q.escena && (
                  <p className="mb-2">
                    <T>{q.escena}</T>
                  </p>
                )}
                <Figura {...q.figure} />
                <TaulaDades {...q.dades} />
                <Grafic chart={q.chart} />
                <div className="mb-4 mt-4 space-y-4">
                  {q.parts.map((p) => (
                    <Apartat key={p.id} p={p} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="mb-2 flex gap-3">
                  <span className="bignum">{i + 1}</span>
                  <span className="pt-1.5">
                    <T>{q.text}</T>
                  </span>
                </p>
                <p className="mb-4 ms-[3.25rem] text-xs text-[var(--muted)]">
                  {[q.oa, q.source]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </>
            )}

            {!isOpen && (
              <button
                onClick={() => setOpen((p) => ({ ...p, [q.id]: true }))}
                className="rounded-lg border border-[var(--rule-strong)] px-4 py-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:border-[var(--purple-deep)] hover:text-[var(--text)]"
              >
                Ja l'he escrita — mostra les respostes model
              </button>
            )}

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 overflow-hidden"
                >
                  <div className="rounded-xl bg-[rgba(62,124,79,0.12)] px-4 py-3">
                    <p className="kicker mb-1">Assoliment satisfactori (AS)</p>
                    <Paragrafs text={q.model.as} />
                  </div>
                  <div className="rounded-xl bg-[rgba(47,107,143,0.12)] px-4 py-3">
                    <p className="kicker mb-1">Assoliment excel·lent (AE)</p>
                    <Paragrafs text={q.model.ae} />
                    {q.aeWhy && (
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        <strong>Què hi afegeix l'AE:</strong> <T>{q.aeWhy}</T>
                      </p>
                    )}
                  </div>

                  {q.must?.length > 0 && (
                    <div>
                      <p className="kicker mb-2">
                        Repassa el teu full: ho tens, això?
                      </p>
                      <div className="space-y-1.5">
                        {q.must.map((m, mi) => {
                          const key = `${q.id}:${mi}`
                          return (
                            <label
                              key={key}
                              className="flex cursor-pointer items-start gap-2 text-sm"
                            >
                              <input
                                type="checkbox"
                                checked={!!checks[key]}
                                onChange={() => toggleCheck(key)}
                                className="mt-1 accent-[var(--purple-ink)]"
                              />
                              <span>
                                <T>{m}</T>
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="kicker mb-2">Com t'ha quedat?</p>
                    <div className="flex flex-wrap gap-1.5">
                      {SELF.map((lvl) => (
                        <button
                          key={lvl.id}
                          onClick={() => setSelfFor(q.id, lvl.id)}
                          className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                            self[q.id] === lvl.id
                              ? 'border-transparent text-white'
                              : 'border-[var(--rule-strong)] text-[var(--muted)] hover:text-[var(--text)]'
                          }`}
                          style={
                            self[q.id] === lvl.id ? { background: lvl.color } : undefined
                          }
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
