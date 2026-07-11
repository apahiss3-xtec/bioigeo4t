import { useState } from 'react'
import { t } from '../t.js'
import { useTranslate } from '../translate/TranslateContext.jsx'

// Idiomes d'AJUDA: la web sempre és en català. Activar ES/AR/UR fa que,
// en passar per sobre de paraules i expressions del glossari, aparegui
// la traducció. CA = ajuda desactivada.
const HELP_LANGS = [
  { code: null, label: 'CA' },
  { code: 'es', label: 'ES' },
  { code: 'ar', label: 'AR' },
  { code: 'ur', label: 'UR' }
]

export default function TranslationBar() {
  const { helpLang, setHelpLang } = useTranslate()
  const [simplified, setSimplified] = useState(() =>
    document.body.classList.contains('simplified')
  )

  const toggleSimplified = () => {
    const next = !simplified
    setSimplified(next)
    document.body.classList.toggle('simplified', next)
    try {
      localStorage.setItem('portal-bio-simplified', next ? '1' : '0')
    } catch {
      // localStorage no disponible: ignorem
    }
  }

  return (
    <div
      className="fixed bottom-4 end-4 z-50 flex items-center gap-1 rounded-full border border-[var(--rule-strong)] bg-[var(--surface)] px-2 py-1.5 shadow-lg"
      role="group"
      aria-label="Ajuda de traducció i accessibilitat"
    >
      {HELP_LANGS.map(({ code, label }) => (
        <button
          key={label}
          onClick={() => setHelpLang(code)}
          className={`font-display text-sm font-semibold rounded-full px-2.5 py-1 transition-colors ${
            helpLang === code
              ? 'bg-[var(--purple-ink)] text-white'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
          }`}
          aria-pressed={helpLang === code}
          title={
            code
              ? `Ajuda de traducció: passa per sobre de les paraules subratllades (${label})`
              : 'Sense ajuda de traducció'
          }
        >
          {label}
        </button>
      ))}
      <span className="mx-1 h-5 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
      <button
        onClick={toggleSimplified}
        className={`font-display text-sm font-semibold rounded-full px-2.5 py-1 transition-colors ${
          simplified
            ? 'bg-[var(--orange)] text-[#14121f]'
            : 'text-[var(--muted)] hover:text-[var(--text)]'
        }`}
        aria-pressed={simplified}
        title={t('bar.simplify')}
      >
        📋 {t('bar.simplify')}
      </button>
    </div>
  )
}
