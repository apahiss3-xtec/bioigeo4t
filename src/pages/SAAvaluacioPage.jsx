import { useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts'
import { t } from '../t.js'
import { getSA } from '../data/sas.js'
import T from '../translate/T.jsx'
import TransferTest from '../components/TransferTest.jsx'
import WrittenPractice, { SELF_LABELS } from '../components/WrittenPractice.jsx'
import NotFoundPage from './NotFoundPage.jsx'

const GRADES = ['NA', 'AS', 'AN', 'AE']
const GRADE_SCORE = { NA: 25, AS: 50, AN: 75, AE: 100 }

// Nivell de confiança de la checklist (autoconeixement)
const KNOW_LEVELS = [
  { id: 'no', label: 'No ho sé', color: '#8b1a1a' },
  { id: 'si', label: 'Ho sé', color: '#b3661f' },
  { id: 'explica', label: 'Ho sé i ho sabria explicar a un company/a', color: '#3e7c4f' }
]

// Amplada útil d'un A4 amb marges de 10 mm: (210 - 20) mm = 190 mm =
// 190/25.4*96 ≈ 718 px. La plantilla del PDF s'hi ha d'ajustar exactament.
const PDF_WIDTH = 718

const scoreToLevel = (s) => (s >= 87.5 ? 'AE' : s >= 62.5 ? 'AN' : s >= 37.5 ? 'AS' : 'NA')

export default function SAAvaluacioPage() {
  const { saId } = useParams()
  const sa = getSA(saId)
  const [name, setName] = useState('')
  const [exitGrades, setExitGrades] = useState({})
  const [know, setKnow] = useState({})
  const [reflections, setReflections] = useState({ q1: '', q2: '', q3: '' })
  const [written, setWritten] = useState([])
  const [testResults, setTestResults] = useState([])
  const pdfRef = useRef(null)

  if (!sa || !sa.published) return <NotFoundPage />

  const chartData = useMemo(
    () =>
      sa.objectives.map((oa) => {
        const linked = sa.sessionsData.filter((s) => s.oaLinks.includes(oa.id))
        const scores = linked
          .map((s) => exitGrades[s.id])
          .filter((g) => g && g !== 'notDone')
          .map((g) => GRADE_SCORE[g])
        const value = scores.length
          ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
          : 0
        return { name: oa.id, label: oa.text, value, graded: scores.length > 0 }
      }),
    [sa, exitGrades]
  )

  const gradedScores = sa.sessionsData
    .map((s) => exitGrades[s.id])
    .filter((g) => g && g !== 'notDone')
    .map((g) => GRADE_SCORE[g])
  const globalLevel = gradedScores.length
    ? scoreToLevel(gradedScores.reduce((a, b) => a + b, 0) / gradedScores.length)
    : null

  const checklist = sa.avaluacio?.checklist || []
  const escrita = sa.avaluacio?.escrita || null
  const knowCount = checklist.filter((c) => know[c.id]).length
  const weak = checklist.filter((c) => know[c.id] === 'no')

  const today = new Date().toLocaleDateString('ca-ES')

  const downloadPdf = () => {
    if (!window.html2pdf || !pdfRef.current) return
    window
      .html2pdf()
      .set({
        margin: [10, 10, 10, 10],
        filename: `autoavaluacio-${sa.id}-${(name || 'alumne').replace(/\s+/g, '-').toLowerCase()}.pdf`,
        image: { type: 'jpeg', quality: 0.95 },
        // windowWidth fixa l'amplada amb què html2canvas recalcula el layout.
        // Sense això el clon es re-maquetava a l'amplada útil de l'A4
        // (190 mm ≈ 718 px) mentre la plantilla en demanava 760, i cada fila
        // perdia ~40 px pel marge dret.
        html2canvas: { scale: 2, backgroundColor: '#ffffff', windowWidth: PDF_WIDTH },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        // 'avoid-all' evita que un bloc quedi tallat entre dues pàgines;
        // sense 'legacy' html2pdf afegeix una pàgina buida al final quan el
        // contingut acaba just al límit de pàgina.
        pagebreak: { mode: ['css', 'avoid-all'], avoid: ['tr', '.pdf-block'] }
      })
      .from(pdfRef.current)
      .save()
  }

  return (
    <div className={`biome-${sa.biome} mx-auto max-w-4xl px-4`}>
      <section className="py-10">
        <Link to={`/sa/${sa.id}`} className="text-[var(--purple)] hover:underline text-sm">
          ← {sa.id.toUpperCase()} · {sa.title}
        </Link>
        <h1 className="text-4xl md:text-5xl mt-3 mb-3">{t('auto.title')}</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          <T>{t('auto.intro')}</T>
        </p>
      </section>

      {/* Nom per al PDF */}
      <section className="card p-6 mb-6">
        <label className="block max-w-sm">
          <span className="kicker">{t('auto.yourName')}</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-[var(--rule-strong)] bg-[var(--bg-soft)] px-3 py-2 focus:outline-none focus:border-[var(--purple)]"
          />
        </label>
      </section>

      {/* 1 · Checklist d'autoconeixement */}
      <section className="card p-6 mb-6">
        <p className="kicker mb-1">1 · {t('auto.checklistTitle')}</p>
        <p className="text-sm text-[var(--muted)] mb-4">{t('auto.checklistIntro')}</p>
        <div className="space-y-3">
          {checklist.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-2 rule pt-3 first:pt-0 first:border-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm max-w-lg">
                <span className="text-[var(--muted)] me-1">{c.oa}</span>
                <T>{c.text}</T>
              </p>
              <div className="flex gap-1.5 shrink-0 flex-wrap">
                {KNOW_LEVELS.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setKnow((p) => ({ ...p, [c.id]: lvl.id }))}
                    className={`rounded-full px-3 py-1 text-xs font-semibold border transition-colors ${
                      know[c.id] === lvl.id
                        ? 'text-white border-transparent'
                        : 'border-[var(--rule-strong)] text-[var(--muted)] hover:text-[var(--text)]'
                    }`}
                    style={know[c.id] === lvl.id ? { background: lvl.color } : undefined}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {knowCount > 0 && (
          <p className="mt-4 text-sm">
            {weak.length === 0
              ? '✅ No has marcat cap punt com a «No ho sé». Bona senyal!'
              : `⚠️ Tens ${weak.length} punt(s) marcats com a «No ho sé». Repassa'ls amb les sessions abans de la prova.`}
          </p>
        )}
      </section>

      {/* 2 · Notes dels exit tiquets → gràfic OA */}
      <section className="card p-6 mb-6">
        <p className="kicker mb-1">2 · {t('auto.exitSection')}</p>
        <p className="text-sm text-[var(--muted)] mb-4">{t('auto.exitIntro')}</p>
        <div className="space-y-3 mb-6">
          {sa.sessionsData.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-2 rule pt-3 first:pt-0 first:border-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm max-w-md">
                <strong>S{s.sessionNumber}:</strong> <T>{s.title}</T>{' '}
                <span className="text-[var(--muted)]">({s.oaLinks.join(', ')})</span>
              </p>
              <div className="flex gap-1.5 shrink-0 flex-wrap">
                {[...GRADES, 'notDone'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setExitGrades((p) => ({ ...p, [s.id]: g }))}
                    className={`rounded-full px-3 py-1 text-sm font-semibold border transition-colors ${
                      exitGrades[s.id] === g
                        ? 'text-white border-transparent'
                        : 'border-[var(--rule-strong)] text-[var(--muted)] hover:text-[var(--text)]'
                    }`}
                    style={
                      exitGrades[s.id] === g
                        ? { background: g === 'notDone' ? '#555066' : sa.color.primary }
                        : undefined
                    }
                  >
                    {g === 'notDone' ? t('auto.notDone') : g}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="kicker mb-3">{t('auto.chartTitle')}</p>
        <div className="h-64" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(74,63,63,0.12)" />
              <XAxis dataKey="name" stroke="#6b5e5e" />
              <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} stroke="#6b5e5e" />
              <Tooltip
                formatter={(v, _n, item) => [`${v} / 100`, item?.payload?.label]}
                contentStyle={{
                  background: '#ffffff',
                  border: '1px solid rgba(124,58,237,0.28)',
                  borderRadius: 12,
                  color: '#4a3f3f',
                  boxShadow: '0 10px 32px rgba(74,63,63,0.12)'
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {chartData.map((d) => (
                  <Cell key={d.name} fill={d.graded ? sa.color.accent : 'rgba(168,163,189,0.3)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-3 grid gap-1 sm:grid-cols-2 text-sm text-[var(--muted)]">
          {sa.objectives.map((oa) => (
            <li key={oa.id}>
              <strong className="text-[var(--text)]">{oa.id}</strong> · <T>{oa.text}</T>
            </li>
          ))}
        </ul>
        {globalLevel && (
          <p className="mt-4 text-lg">
            {t('auto.estimateText')}{' '}
            <span className="font-display font-bold text-2xl" style={{ color: sa.color.accent }}>
              {globalLevel}
            </span>
          </p>
        )}
      </section>

      {/* 3 · Assaig de prova escrita (paper i boli) */}
      {escrita && (
        <section className="card p-6 mb-6">
          <p className="kicker mb-1">3 · Assaig de prova escrita</p>
          <p className="text-sm text-[var(--muted)] mb-4">
            Marcar la casella bona no és el mateix que saber respondre. Aquí
            hauràs d'escriure la resposta sencera a mà i comparar-la després
            amb dos models: un d'assoliment satisfactori i un d'excel·lent.
          </p>
          <WrittenPractice escrita={escrita} onChange={setWritten} />
        </section>
      )}

      {/* 4 · Test de transferència (cas nou) */}
      {sa.avaluacio?.test && (
        <section className="card p-6 mb-6">
          <p className="kicker mb-1">4 · {t('auto.testTitle')}</p>
          <p className="text-sm text-[var(--muted)] mb-4">{t('auto.testIntro')}</p>
          <TransferTest test={sa.avaluacio.test} onChange={setTestResults} />
        </section>
      )}

      {/* 5 · Reflexió */}
      <section className="card p-6 mb-6">
        <p className="kicker mb-4">5 · {t('auto.reflectionTitle')}</p>
        <div className="space-y-5">
          {['q1', 'q2', 'q3'].map((q, i) => (
            <label key={q} className="block">
              <span className="mb-2 flex gap-3">
                <span className="bignum">{i + 1}</span>
                <span className="pt-1.5">
                  <T>{t(`auto.${q}`)}</T>
                </span>
              </span>
              <textarea
                value={reflections[q]}
                onChange={(e) => setReflections((p) => ({ ...p, [q]: e.target.value }))}
                rows={3}
                className="w-full rounded-lg border border-[var(--rule-strong)] bg-[var(--bg-soft)] px-3 py-2 focus:outline-none focus:border-[var(--purple)]"
              />
            </label>
          ))}
        </div>
      </section>

      {/* 6 · PDF */}
      <section className="pb-12 text-center">
        <button
          onClick={downloadPdf}
          className="rounded-xl bg-[var(--purple-ink)] px-8 py-3.5 font-display font-bold text-xl text-white hover:bg-[var(--purple-deep)] transition-colors"
        >
          ⬇ {t('auto.downloadPdf')}
        </button>
        <p className="mt-3 text-sm text-[var(--muted)]">{t('auto.pdfFooter')}</p>
      </section>

      {/* Plantilla PDF (fora de pantalla, estètica IE Temple sobre crema) */}
      <div style={{ position: 'fixed', left: '-10000px', top: 0 }} aria-hidden="true">
        <div
          ref={pdfRef}
          style={{
            width: `${PDF_WIDTH}px`, background: '#ffffff', color: '#1a1a2e',
            fontFamily: "'Quicksand', sans-serif", fontSize: '13px', lineHeight: 1.5
          }}
        >
          <p style={pdfKicker}>Biologia i Geologia · 4t ESO · IE Temple</p>
          <h1 style={pdfH1}>
            {t('auto.title')} — {sa.id.toUpperCase()}: {sa.title}
          </h1>
          <p style={{ color: '#666', marginBottom: 16 }}>
            {name || '________________'} · {t('auto.date')}: {today}
            {globalLevel && (
              <> · {t('auto.level')}: <strong>{globalLevel}</strong></>
            )}
          </p>

          <h2 style={pdfH2}>{t('auto.checklistTitle')}</h2>
          <table style={pdfTable}>
            <tbody>
              {checklist.map((c) => (
                <tr key={c.id}>
                  <td style={pdfTd}>{c.text}</td>
                  <td style={{ ...pdfTd, width: 150, fontWeight: 700 }}>
                    {KNOW_LEVELS.find((l) => l.id === know[c.id])?.label || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={pdfH2}>{t('auto.chartTitle')}</h2>
          {chartData.map((d) => (
            <div key={d.name} style={{ marginBottom: 8 }}>
              <span style={{ fontWeight: 700 }}>
                {d.name} · {d.label} — {d.graded ? `${d.value}/100` : t('auto.notDone')}
              </span>
              <div style={{ height: 12, background: '#efeaf5', borderRadius: 6, overflow: 'hidden', marginTop: 3 }}>
                <div style={{ width: `${d.value}%`, height: '100%', background: d.graded ? '#5a4aa0' : '#c8c2dd' }} />
              </div>
            </div>
          ))}

          {escrita && (
            <div className="pdf-block">
              <h2 style={pdfH2}>Assaig de prova escrita</h2>
              {escrita.questions.map((q, i) => {
                const mine = written.find((w) => w.id === q.id)
                const self = SELF_LABELS.find((l) => l.id === mine?.self)
                const fets = mine?.must.filter((m) => m.done).length ?? 0
                return (
                  <div key={q.id} style={pdfCard} className="pdf-block">
                    <p style={{ fontWeight: 700, margin: '0 0 2px' }}>
                      {i + 1}. {q.text}
                    </p>
                    <p style={pdfMeta}>
                      {[q.oa, q.source, q.minutes ? `~${q.minutes} min` : null]
                        .filter(Boolean)
                        .join(' · ')}
                      {' · '}
                      <strong>{self ? self.label : 'sense valorar'}</strong>
                      {q.must?.length ? ` · ${fets}/${q.must.length} elements` : ''}
                    </p>
                    <p style={{ margin: '4px 0 0' }}>
                      <strong>AS · </strong>
                      {q.model.as}
                    </p>
                    <p style={{ margin: '4px 0 0' }}>
                      <strong>AE · </strong>
                      {q.model.ae}
                    </p>
                    {q.must?.length > 0 && (
                      <p style={{ ...pdfMeta, marginTop: 4 }}>
                        Hi ha de sortir: {q.must.join(' · ')}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {testResults.length > 0 && (
            <div className="pdf-block">
              <h2 style={pdfH2}>{t('auto.testTitle')}</h2>
              <table style={pdfTable}>
                <tbody>
                  {testResults.map((r, i) => (
                    <tr key={r.id}>
                      <td style={pdfTd}>
                        <strong>{i + 1}.</strong> {r.text}
                        <br />
                        <span style={pdfMeta}>
                          La teva: {r.chosen || '—'}
                          {!r.ok && r.chosen ? ` · Correcta: ${r.correct}` : ''}
                        </span>
                      </td>
                      <td style={{ ...pdfTd, width: 34, fontWeight: 700, textAlign: 'center' }}>
                        {r.chosen ? (r.ok ? '✓' : '✗') : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <h2 style={pdfH2}>{t('auto.reflectionTitle')}</h2>
          {['q1', 'q2', 'q3'].map((q, i) => (
            <div key={q} style={{ marginBottom: 10 }}>
              <p style={{ fontWeight: 700, margin: '0 0 2px' }}>
                {i + 1}. {t(`auto.${q}`)}
              </p>
              <p style={{ margin: 0, borderBottom: '1px solid #c8c2dd', minHeight: 18 }}>
                {reflections[q] || ' '}
              </p>
            </div>
          ))}

          <p style={pdfFoot}>{t('auto.pdfFooter')}</p>
        </div>
      </div>
    </div>
  )
}

const pdfKicker = {
  fontFamily: "'Fira Sans Extra Condensed', sans-serif", textTransform: 'uppercase',
  letterSpacing: '0.07em', color: '#5a4aa0', fontWeight: 600, marginBottom: 4
}
const pdfH1 = { fontFamily: "'Fira Sans Extra Condensed', sans-serif", fontSize: '30px', fontWeight: 700, margin: '0 0 4px' }
const pdfH2 = {
  fontFamily: "'Fira Sans Extra Condensed', sans-serif", background: '#5a4aa0', color: '#fff',
  textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '14px', fontWeight: 600,
  padding: '4px 10px', borderRadius: 4, margin: '18px 0 8px', display: 'inline-block'
}
const pdfTable = { width: '100%', borderCollapse: 'collapse' }
const pdfTd = { borderBottom: '1px solid #eae6f6', padding: '4px 6px', verticalAlign: 'top' }
// marginTop petit: amb 24 px el peu queia just al límit de la caixa de
// pàgina i html2pdf generava un full en blanc al final.
const pdfFoot = { marginTop: 10, paddingTop: 6, borderTop: '1px solid #eae6f6', color: '#666', fontSize: '11px' }
const pdfCard = { border: '1px solid #eae6f6', borderRadius: 6, padding: '6px 8px', marginBottom: 8 }
const pdfMeta = { color: '#666', fontSize: '11px', margin: 0 }
