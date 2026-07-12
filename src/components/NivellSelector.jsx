import { t } from '../t.js'
import { NIVELLS, useNivell } from '../nivell/NivellContext.jsx'

// Selector A/B (4t ESO: només 2 nivells). Adapta els objectius i el bastiment
// de la sessió al nivell de la fitxa. NOMÉS es mostra la lletra; el `short`
// és buit expressament (les paraules "Ampliació"/"Estàndard" no s'exposen).
export default function NivellSelector({ className = '' }) {
  const { nivell, setNivell } = useNivell()

  return (
    <div className={className}>
      <p className="kicker mb-2">🎚️ {t('nivell.label')}</p>
      <div
        className="inline-flex gap-1 rounded-full border border-[var(--rule-strong)] bg-[var(--surface)] p-1"
        role="group"
        aria-label={t('nivell.label')}
      >
        {NIVELLS.map((n) => (
          <button
            key={n}
            onClick={() => setNivell(n)}
            aria-pressed={nivell === n}
            title={t(`nivell.${n}.help`)}
            className={`flex flex-col items-center rounded-full px-4 py-1.5 transition-colors ${
              nivell === n
                ? 'bg-[var(--purple-ink)] text-white'
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            <span className="font-display text-base font-bold leading-none">{n}</span>
            <span className="mt-0.5 text-[0.65rem] uppercase tracking-wide leading-none">
              {t(`nivell.${n}.short`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
