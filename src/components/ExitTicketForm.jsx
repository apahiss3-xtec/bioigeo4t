import { useState } from 'react'
import { t } from '../t.js'
import T from '../translate/T.jsx'
import Hint from './Hint.jsx'

// Construeix l'URL de composició de Gmail amb les respostes.
// Cap dada surt del navegador fins que l'alumne envia el correu manualment.
const buildGmailUrl = (sessionData, formValues) => {
  const subject = encodeURIComponent(
    `[Exit tiquet] ${sessionData.saId.toUpperCase()} ${sessionData.id.toUpperCase()} · ${formValues.nom} ${formValues.cognom} · Grup ${formValues.grup}`
  )
  const lines = [
    `Assignatura: Biologia i Geologia 4t ESO`,
    `Sessió: ${sessionData.title}`,
    `Alumne/a: ${formValues.nom} ${formValues.cognom} — Grup ${formValues.grup}`,
    `Autoavaluació: ${formValues.autoavaluacio || 'No indicada'}`,
    ``,
    ...sessionData.exitTicketQuestions.map(
      (q, i) =>
        `Pregunta ${i + 1}: ${q.text}\nResposta: ${formValues.respostes[q.id] || '(sense resposta)'}`
    )
  ]
  const body = encodeURIComponent(lines.join('\n'))
  return `https://mail.google.com/mail/?view=cm&to=albertpahissa%40ietemple.cat&su=${subject}&body=${body}`
}

const AUTO_LEVELS = ['NA', 'AS', 'AN', 'AE']

export default function ExitTicketForm({ session }) {
  const [nom, setNom] = useState('')
  const [cognom, setCognom] = useState('')
  const [grup, setGrup] = useState('')
  const [autoavaluacio, setAutoavaluacio] = useState('')
  const [respostes, setRespostes] = useState({})
  const [status, setStatus] = useState(null) // null | 'error' | 'sent'

  const setResposta = (qid, value) =>
    setRespostes((prev) => ({ ...prev, [qid]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nom.trim() || !cognom.trim() || !grup) {
      setStatus('error')
      return
    }
    const url = buildGmailUrl(session, {
      nom: nom.trim(),
      cognom: cognom.trim(),
      grup,
      autoavaluacio,
      respostes
    })
    window.open(url, '_blank')
    setStatus('sent')
  }

  const inputCls =
    'w-full rounded-lg border border-[var(--rule-strong)] bg-[var(--bg-soft)] px-3 py-2 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--purple)]'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="kicker">{t('exitForm.nom')} *</span>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className={inputCls}
            autoComplete="given-name"
          />
        </label>
        <label className="block">
          <span className="kicker">{t('exitForm.cognom')} *</span>
          <input
            type="text"
            value={cognom}
            onChange={(e) => setCognom(e.target.value)}
            className={inputCls}
            autoComplete="family-name"
          />
        </label>
        <label className="block">
          <span className="kicker">{t('exitForm.grup')} *</span>
          <select
            value={grup}
            onChange={(e) => setGrup(e.target.value)}
            className={inputCls}
          >
            <option value="">—</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </label>
      </div>

      {session.exitTicketQuestions.map((q, i) => (
        <div key={q.id}>
          <p className="mb-2 flex gap-3">
            <span className="bignum">{i + 1}</span>
            <span className="pt-1.5">
              <T>{q.text}</T>
            </span>
          </p>
          {q.type === 'multiple' ? (
            <div className="space-y-2 ps-12">
              {q.options.map((opt, oi) => (
                <label
                  key={oi}
                  className="flex items-start gap-3 cursor-pointer rounded-lg border border-[var(--rule)] px-3 py-2 hover:border-[var(--purple-deep)] transition-colors"
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    checked={respostes[q.id] === opt}
                    onChange={() => setResposta(q.id, opt)}
                    className="mt-1.5 accent-[#c084fc]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          ) : (
            <textarea
              value={respostes[q.id] || ''}
              onChange={(e) => setResposta(q.id, e.target.value)}
              placeholder={t('exitForm.answerPlaceholder')}
              rows={4}
              className={`${inputCls} ms-12 w-[calc(100%-3rem)]`}
            />
          )}
          {q.hint && (
            <div className="ms-12">
              <Hint hints={q.hint} />
            </div>
          )}
        </div>
      ))}

      {session.metacognition && (
        <div className="rounded-xl border border-[var(--rule-strong)] bg-[var(--surface-2)] p-4">
          <p className="kicker mb-1">💭 {t('session.metacognition')}</p>
          <p className="mb-2">{session.metacognition.prompt}</p>
          <textarea
            value={respostes.metacognition || ''}
            onChange={(e) => setResposta('metacognition', e.target.value)}
            placeholder={t('exitForm.answerPlaceholder')}
            rows={3}
            className={inputCls}
          />
        </div>
      )}

      <div>
        <p className="kicker mb-2">{t('exitForm.autoavaluacio')}</p>
        <div className="flex flex-wrap gap-2">
          {AUTO_LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setAutoavaluacio(autoavaluacio === lvl ? '' : lvl)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition-colors ${
                autoavaluacio === lvl
                  ? 'bg-[var(--purple-ink)] border-[var(--purple)] text-white'
                  : 'border-[var(--rule-strong)] text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {t(`exitForm.autoOptions.${lvl}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          className="rounded-xl bg-[var(--purple-ink)] px-6 py-3 font-display font-bold text-lg text-white hover:bg-[var(--purple-deep)] transition-colors"
        >
          ✉️ {t('exitForm.send')}
        </button>
        {status === 'error' && (
          <p className="text-[var(--orange)] font-semibold">{t('exitForm.requiredFields')}</p>
        )}
        {status === 'sent' && (
          <p className="rounded-xl border border-[var(--rule-strong)] bg-[var(--surface-2)] p-4">
            ✅ {t('exitForm.sent')}
          </p>
        )}
        <p className="text-sm text-[var(--muted)]">{t('exitForm.gdprNote')}</p>
      </div>
    </form>
  )
}
