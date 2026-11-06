import { useMemo, useRef, useState } from 'react'
import { permutacioEstable } from '../utils.js'

// ── Autoavaluació · Versió fàcil (nivell C) ──
// Pensada perquè l'alumnat de nivell C no col·lapsi davant d'una pàgina
// llarga: UN sol pas per pantalla, frases curtes, emojis, cap bloc
// d'escriptura. Les dades viuen a `sa.avaluacio.c` (data/saN/avaluacio.js):
//   checklist  → 3-4 frases «Sé…», resposta 🙂 / 😕
//   preguntes  → 2-3 d'escollir, cadascuna amb imatge i càpsula «Per llegir»
//   completar  → 1 frase amb forats {0} {1} i banc de paraules
// Criteris: vault, «Nivell C - Criteris fitxes» (opcions sempre plausibles,
// imatge + Per llegir abans de cada pregunta, vocabulari planer).
// Els exit tiquets (estat i càlcul) són compartits amb la versió estàndard i
// arriben per props des de SAAvaluacioPage.

const FONT_C = "'Fira Sans Condensed', 'Fira Sans', sans-serif"

export const GRADE_STYLE = {
  NA: { color: '#b3261e', emoji: '🔴' },
  AS: { color: '#b86e00', emoji: '🟠' },
  AN: { color: '#2e7d32', emoji: '🟢' },
  AE: { color: '#1f5fa8', emoji: '🌟' }
}

// Ela geminada: amb Fira Sans Condensed el punt volat nu es llegeix com un
// espai («cèl lula»). Com a les fitxes C, s'embolcalla amb .gem (index.css).
export const gem = (text) => {
  if (typeof text !== 'string' || !text.includes('l·l')) return text
  const parts = text.split('l·l')
  return parts.flatMap((p, i) =>
    i === 0 ? [p] : [<span key={i} className="gem">l·l</span>, p]
  )
}

const FACES = [
  { id: 'si', emoji: '🙂', label: 'Ho sé', color: '#2e7d32' },
  { id: 'no', emoji: '😕', label: 'Encara no', color: '#b3261e' }
]

// Parteix «L'osmosi és el moviment de l'{0} a través de la {1}.»
const partsFrase = (frase) =>
  frase.split(/(\{\d+\})/).filter(Boolean).map((p) => {
    const m = p.match(/^\{(\d+)\}$/)
    return m ? { forat: Number(m[1]) } : { text: p }
  })

export default function AutoavaluacioC({
  sa, curs, name, setName, grades, exitDone, setExitDone, exitGrades, setExitGrades,
  chartData, globalLevel, downloadPdf
}) {
  const c = sa.avaluacio.c
  const checklist = c.checklist || []
  const preguntes = c.preguntes || []
  const completar = c.completar || null

  const [step, setStep] = useState(0)
  const [cares, setCares] = useState({})
  const [triades, setTriades] = useState({})
  const [forats, setForats] = useState([])
  const [foratActiu, setForatActiu] = useState(0)
  const [comprovat, setComprovat] = useState(false)
  const pdfRef = useRef(null)
  const topRef = useRef(null)

  const perms = useMemo(() => {
    const m = {}
    preguntes.forEach((q) => { m[q.id] = permutacioEstable(q.id + '|' + q.text, q.options.length) })
    return m
  }, [preguntes])

  const steps = [
    'nom', 'checklist', 'exit',
    ...preguntes.map((q) => `p:${q.id}`),
    ...(completar ? ['completar'] : []),
    'final'
  ]
  const cur = steps[step]
  const go = (d) => {
    setStep((s) => Math.min(steps.length - 1, Math.max(0, s + d)))
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const encerts = preguntes.filter((q) => triades[q.id] === q.correct).length
  const foratsOk = completar
    ? completar.respostes.filter((r, i) => forats[i] === r).length
    : 0
  const totalPreg = preguntes.length + (completar ? completar.respostes.length : 0)
  const repassar = checklist.filter((it) => cares[it.id] === 'no')
  const fets = sa.sessionsData.filter((s) => exitDone[s.id])

  // Pot passar al pas següent? Només bloquegem on cal una tria per avançar.
  const canNext =
    cur === 'checklist' ? checklist.every((it) => cares[it.id]) :
    cur.startsWith('p:') ? triades[cur.slice(2)] != null :
    cur === 'completar' ? comprovat :
    true

  const posaParaula = (w) => {
    if (comprovat || !completar) return
    const next = [...forats]
    next[foratActiu] = w
    setForats(next)
    const buit = completar.respostes.findIndex((_, i) => !next[i])
    setForatActiu(buit === -1 ? foratActiu : buit)
  }

  const bigBtn =
    'min-h-[52px] rounded-2xl px-5 py-3 text-lg font-semibold transition-colors border-2'

  return (
    <div ref={topRef} style={{ fontFamily: FONT_C }} className="versio-c scroll-mt-4">
      {/* Progrés */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-base font-semibold text-[var(--muted)] shrink-0">
          Pas {step + 1} de {steps.length}
        </span>
        <div className="flex flex-1 gap-1.5" aria-hidden="true">
          {steps.map((s, i) => (
            <span
              key={s}
              className="h-2.5 flex-1 rounded-full"
              style={{ background: i <= step ? sa.color.primary : 'rgba(124,58,237,0.15)' }}
            />
          ))}
        </div>
      </div>

      <section className="card p-5 sm:p-7 mb-5 text-lg leading-relaxed min-h-[320px]">
        {cur === 'nom' && (
          <div>
            <p className="text-3xl font-bold mb-2">👋 Hola!</p>
            <p className="mb-5">Anem a mirar què saps. Una cosa cada vegada. Sense presses.</p>
            <label className="block max-w-sm">
              <span className="block font-semibold mb-2">✏️ Com et dius?</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border-2 border-[var(--rule-strong)] bg-[var(--bg-soft)] px-4 py-3 text-lg focus:outline-none focus:border-[var(--purple)]"
              />
            </label>
          </div>
        )}

        {cur === 'checklist' && (
          <div>
            <p className="text-2xl font-bold mb-1">🤔 Què sé?</p>
            <p className="mb-5 text-[var(--muted)]">Llegeix cada frase. Tria una cara.</p>
            <div className="space-y-4">
              {checklist.map((it) => (
                <div key={it.id} className="rounded-2xl border-2 border-[var(--rule-strong)] p-4">
                  <p className="mb-3 font-semibold">
                    <span className="me-2 text-2xl align-middle">{it.icon}</span>
                    {gem(it.text)}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {FACES.map((f) => {
                      const on = cares[it.id] === f.id
                      return (
                        <button
                          key={f.id}
                          onClick={() => setCares((p) => ({ ...p, [it.id]: f.id }))}
                          aria-pressed={on}
                          className={`${bigBtn} ${on ? 'text-white' : 'bg-white'}`}
                          style={{ borderColor: f.color, background: on ? f.color : undefined, color: on ? '#fff' : f.color }}
                        >
                          <span className="text-2xl me-1.5 align-middle">{f.emoji}</span>
                          {f.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {cur === 'exit' && (
          <div>
            <p className="text-2xl font-bold mb-1">🎟️ Els teus exit tiquets</p>
            <p className="mb-5 text-[var(--muted)]">
              1. Marca els que <strong>has fet</strong>. 2. Tria la nota que hi vas treure.
            </p>
            <div className="space-y-3">
              {sa.sessionsData.map((s) => {
                const done = !!exitDone[s.id]
                return (
                  <div
                    key={s.id}
                    className="rounded-2xl border-2 p-4 transition-colors"
                    style={{ borderColor: done ? sa.color.primary : 'var(--rule-strong)' }}
                  >
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={(e) => setExitDone((p) => ({ ...p, [s.id]: e.target.checked }))}
                        className="h-7 w-7 shrink-0"
                        style={{ accentColor: sa.color.primary }}
                      />
                      <span>
                        <strong>Sessió {s.sessionNumber}</strong> · {gem(s.title)}
                      </span>
                    </label>
                    {done && (
                      <div className="mt-3 grid grid-cols-4 gap-2">
                        {grades.map((g) => {
                          const on = exitGrades[s.id] === g
                          const st = GRADE_STYLE[g]
                          return (
                            <button
                              key={g}
                              onClick={() => setExitGrades((p) => ({ ...p, [s.id]: g }))}
                              aria-pressed={on}
                              className="min-h-[52px] rounded-xl border-2 text-lg font-bold"
                              style={{ borderColor: st.color, background: on ? st.color : '#fff', color: on ? '#fff' : st.color }}
                            >
                              <span className="block text-xl leading-none">{st.emoji}</span>
                              {g}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {fets.length === 0 && (
              <p className="mt-4 text-base text-[var(--muted)]">
                Si encara no n'has fet cap, pots passar al següent pas.
              </p>
            )}
          </div>
        )}

        {cur.startsWith('p:') && (() => {
          const q = preguntes.find((x) => x.id === cur.slice(2))
          const num = preguntes.indexOf(q) + 1
          const triada = triades[q.id]
          return (
            <div>
              <p className="text-2xl font-bold mb-3">❓ Pregunta {num}</p>
              {q.llegir && (
                <p className="mb-4 rounded-2xl bg-[var(--bg-soft)] p-4">
                  <strong>📖 Per llegir · </strong>{gem(q.llegir)}
                </p>
              )}
              {q.img && (
                <img
                  src={q.img}
                  alt={q.alt || ''}
                  className="mx-auto mb-4 max-h-64 w-auto rounded-xl border border-[var(--rule)]"
                />
              )}
              <p className="mb-4 text-xl font-semibold">{gem(q.text)}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {perms[q.id].map((oi) => {
                  const chosen = triada === oi
                  const answered = triada != null
                  const ok = oi === q.correct
                  let border = 'var(--rule-strong)'
                  let bg = '#fff'
                  if (answered && ok) { border = '#2e7d32'; bg = '#e8f5e9' }
                  else if (chosen) { border = '#b3261e'; bg = '#fdecea' }
                  return (
                    <button
                      key={oi}
                      disabled={answered}
                      onClick={() => setTriades((p) => ({ ...p, [q.id]: oi }))}
                      className={`${bigBtn} text-left`}
                      style={{ borderColor: border, background: bg, color: 'var(--text)' }}
                    >
                      {answered && ok && '✅ '}
                      {chosen && !ok && '❌ '}
                      {gem(q.options[oi])}
                    </button>
                  )
                })}
              </div>
              {triada != null && (
                <p className="mt-4 font-semibold">
                  {triada === q.correct
                    ? '🎉 Molt bé!'
                    : '🤔 No és aquesta. Mira la verda i torna a llegir el «Per llegir».'}
                </p>
              )}
            </div>
          )
        })()}

        {cur === 'completar' && completar && (
          <div>
            <p className="text-2xl font-bold mb-3">🧩 Completa la frase</p>
            {completar.llegir && (
              <p className="mb-4 rounded-2xl bg-[var(--bg-soft)] p-4">
                <strong>📖 Per llegir · </strong>{gem(completar.llegir)}
              </p>
            )}
            <p className="mb-2 text-base text-[var(--muted)]">
              Toca un forat i després una paraula.
            </p>
            <p className="mb-5 text-xl leading-[2.4]">
              {partsFrase(completar.frase).map((p, i) =>
                p.text != null ? (
                  <span key={i}>{gem(p.text)}</span>
                ) : (
                  <button
                    key={i}
                    disabled={comprovat}
                    onClick={() => {
                      setForatActiu(p.forat)
                      if (forats[p.forat]) {
                        const n = [...forats]; n[p.forat] = undefined; setForats(n)
                      }
                    }}
                    className="mx-1 inline-block min-w-[110px] rounded-lg border-2 border-dashed px-3 py-0.5 font-bold align-middle leading-normal"
                    style={{
                      borderColor: comprovat
                        ? (forats[p.forat] === completar.respostes[p.forat] ? '#2e7d32' : '#b3261e')
                        : foratActiu === p.forat ? sa.color.primary : 'var(--rule-strong)',
                      background: foratActiu === p.forat && !comprovat ? 'var(--bg-soft)' : '#fff'
                    }}
                  >
                    {forats[p.forat] || '   ?   '}
                    {comprovat && (forats[p.forat] === completar.respostes[p.forat] ? ' ✅' : ' ❌')}
                  </button>
                )
              )}
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="me-1 self-center font-semibold">🧺</span>
              {completar.banc.map((w) => (
                <button
                  key={w}
                  disabled={comprovat}
                  onClick={() => posaParaula(w)}
                  className="min-h-[48px] rounded-full border-2 px-5 text-lg font-semibold disabled:opacity-50"
                  style={{ borderColor: sa.color.primary, color: sa.color.primary, background: forats.includes(w) ? 'var(--bg-soft)' : '#fff' }}
                >
                  {gem(w)}
                </button>
              ))}
            </div>
            {!comprovat ? (
              <button
                disabled={completar.respostes.some((_, i) => !forats[i])}
                onClick={() => setComprovat(true)}
                className={`${bigBtn} text-white disabled:opacity-40`}
                style={{ background: sa.color.primary, borderColor: sa.color.primary }}
              >
                ✔️ Comprova
              </button>
            ) : (
              <p className="font-semibold">
                {foratsOk === completar.respostes.length
                  ? '🎉 Perfecte!'
                  : <>🤔 La frase bona és: «{gem(completar.frase.replace(/\{(\d+)\}/g, (_, n) => completar.respostes[n]))}»</>}
              </p>
            )}
          </div>
        )}

        {cur === 'final' && (
          <div>
            <p className="text-3xl font-bold mb-4">🏁 Ja has acabat{name ? `, ${name}` : ''}!</p>
            <div className="grid gap-3 sm:grid-cols-2 mb-5">
              <div className="rounded-2xl bg-[var(--bg-soft)] p-4">
                <p className="text-base text-[var(--muted)]">❓ Preguntes</p>
                <p className="text-3xl font-bold">{encerts + foratsOk} de {totalPreg} ✅</p>
              </div>
              <div className="rounded-2xl bg-[var(--bg-soft)] p-4">
                <p className="text-base text-[var(--muted)]">🎟️ Exit tiquets ({fets.length} fets)</p>
                <p className="text-3xl font-bold">
                  {globalLevel ? <>{GRADE_STYLE[globalLevel].emoji} {globalLevel}</> : '—'}
                </p>
              </div>
            </div>
            {chartData.some((d) => d.graded) && (
              <div className="mb-5 space-y-2">
                {chartData.map((d) => (
                  <div key={d.name}>
                    <p className="text-base"><strong>{d.name}</strong> · {gem(d.label)}</p>
                    <div className="h-4 rounded-full bg-[var(--bg-soft)] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${d.value}%`, background: d.graded ? sa.color.accent : 'transparent' }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {repassar.length > 0 ? (
              <div className="mb-5 rounded-2xl border-2 p-4" style={{ borderColor: '#b86e00' }}>
                <p className="font-bold mb-2">📌 Repassa això:</p>
                <ul className="space-y-1">
                  {repassar.map((it) => (
                    <li key={it.id}>{it.icon} {gem(it.text)}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mb-5 font-semibold">💪 Has dit 🙂 a tot. Molt bé!</p>
            )}
            <button
              onClick={() => downloadPdf(pdfRef.current)}
              className="w-full sm:w-auto rounded-2xl bg-[var(--purple-ink)] px-8 py-4 text-xl font-bold text-white hover:bg-[var(--purple-deep)]"
            >
              ⬇ Descarrega el PDF
            </button>
            <p className="mt-2 text-base text-[var(--muted)]">Envia'l al teu professor/a.</p>
          </div>
        )}
      </section>

      {/* Navegació */}
      <div className="mb-12 flex gap-3">
        {step > 0 && (
          <button
            onClick={() => go(-1)}
            className={`${bigBtn} bg-white border-[var(--rule-strong)] text-[var(--text)]`}
          >
            ⬅ Enrere
          </button>
        )}
        {cur !== 'final' && (
          <button
            onClick={() => go(1)}
            disabled={!canNext}
            className={`${bigBtn} ms-auto text-white disabled:opacity-40`}
            style={{ background: sa.color.primary, borderColor: sa.color.primary }}
          >
            Següent ➜
          </button>
        )}
      </div>

      {/* Plantilla PDF de la versió fàcil (fora de pantalla) */}
      <div style={{ position: 'fixed', left: '-10000px', top: 0 }} aria-hidden="true">
        <div
          ref={pdfRef}
          style={{
            width: '718px', boxSizing: 'border-box', padding: '0 6px',
            background: '#ffffff', color: '#1a1a2e',
            fontFamily: FONT_C, fontSize: '14px', lineHeight: 1.45
          }}
        >
          <p style={pk}>Biologia i Geologia · {curs} · IE Temple · Versió fàcil</p>
          <h1 style={ph1}>Autoavaluació — {sa.id.toUpperCase()}: {gem(sa.title)}</h1>
          <p style={{ color: '#555', margin: '0 0 10px' }}>
            {name || '________________'} · Data: {new Date().toLocaleDateString('ca-ES')}
          </p>

          <div className="pdf-block">
            <h2 style={ph2}>🤔 Què sé?</h2>
            <table style={pt}>
              <tbody>
                {checklist.map((it) => {
                  const f = FACES.find((x) => x.id === cares[it.id])
                  return (
                    <tr key={it.id}>
                      <td style={ptd}>{it.icon} {gem(it.text)}</td>
                      <td style={{ ...ptd, width: 120, fontWeight: 700 }}>{f ? `${f.emoji} ${f.label}` : '—'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="pdf-block">
            <h2 style={ph2}>🎟️ Exit tiquets</h2>
            <table style={pt}>
              <tbody>
                {sa.sessionsData.map((s) => {
                  const g = exitDone[s.id] ? exitGrades[s.id] : null
                  return (
                    <tr key={s.id}>
                      <td style={ptd}>Sessió {s.sessionNumber} · {gem(s.title)}</td>
                      <td style={{ ...ptd, width: 120, fontWeight: 700 }}>
                        {!exitDone[s.id] ? 'No fet' : g ? `${GRADE_STYLE[g].emoji} ${g}` : 'Fet, sense nota'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {globalLevel && (
              <p style={{ margin: '6px 0 0' }}>Nivell estimat (només tiquets fets): <strong>{globalLevel}</strong></p>
            )}
          </div>

          <div className="pdf-block">
            <h2 style={ph2}>❓ Preguntes · {encerts + foratsOk} de {totalPreg}</h2>
            <table style={pt}>
              <tbody>
                {preguntes.map((q, i) => (
                  <tr key={q.id}>
                    <td style={ptd}>
                      <strong>{i + 1}.</strong> {gem(q.text)}<br />
                      <span style={{ color: '#555' }}>
                        La teva: {triades[q.id] != null ? gem(q.options[triades[q.id]]) : '—'}
                      </span>
                    </td>
                    <td style={{ ...ptd, width: 40, textAlign: 'center', fontWeight: 700 }}>
                      {triades[q.id] == null ? '—' : triades[q.id] === q.correct ? '✓' : '✗'}
                    </td>
                  </tr>
                ))}
                {completar && (
                  <tr>
                    <td style={ptd}>
                      <strong>{preguntes.length + 1}.</strong>{' '}
                      {gem(completar.frase.replace(/\{(\d+)\}/g, (_, n) => `[${forats[n] || '…'}]`))}
                    </td>
                    <td style={{ ...ptd, width: 40, textAlign: 'center', fontWeight: 700 }}>
                      {comprovat ? `${foratsOk}/${completar.respostes.length}` : '—'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {repassar.length > 0 && (
            <div className="pdf-block">
              <h2 style={ph2}>📌 He de repassar</h2>
              {repassar.map((it) => (
                <p key={it.id} style={{ margin: '0 0 3px' }}>{it.icon} {gem(it.text)}</p>
              ))}
            </div>
          )}

          <p style={pfoot}>Autoavaluació feta al portal de Biologia i Geologia · Versió fàcil.</p>
        </div>
      </div>
    </div>
  )
}

const pk = {
  textTransform: 'uppercase', letterSpacing: '0.06em', color: '#5a4aa0',
  fontWeight: 600, margin: '0 0 4px', fontSize: '12px'
}
const ph1 = { fontSize: '26px', fontWeight: 700, margin: '0 0 4px' }
const ph2 = {
  background: '#5a4aa0', color: '#fff', fontSize: '15px', fontWeight: 600,
  padding: '3px 10px', borderRadius: 4, margin: '14px 0 6px', display: 'inline-block'
}
const pt = { width: '100%', borderCollapse: 'collapse' }
const ptd = { borderBottom: '1px solid #eae6f6', padding: '4px 6px', verticalAlign: 'top' }
const pfoot = { marginTop: 10, paddingTop: 6, borderTop: '1px solid #eae6f6', color: '#666', fontSize: '11px' }
