import T from '../translate/T.jsx'
import Hint from './Hint.jsx'

// Guia visual dels apartats reals del full imprès: per a cada apartat,
// la instrucció "omple l'apartat X" i, si cal, pistes progressives.
const PHASE_LABEL = {
  engage: 'Per començar',
  explore: 'Explora',
  explica: 'La teoria',
  elabora: 'Materials'
}

export default function FitxaGuide({ guide }) {
  if (!guide?.steps?.length) return null

  return (
    <div className="card p-6">
      <p className="kicker mb-1">📝 Guia del full</p>
      <p className="text-[var(--muted)] text-sm mb-5">
        <T>{guide.fitxaName}</T> · segueix els apartats en ordre
      </p>
      <ol className="space-y-5">
        {guide.steps.map((step) => (
          <li key={step.apartat} className="flex gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xl font-bold text-white"
              style={{ background: 'var(--biome)' }}
            >
              {step.apartat}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="font-display font-semibold text-lg leading-tight">
                <T>{step.title}</T>
                {step.time && (
                  <span className="ms-2 text-sm font-normal text-[var(--muted)]">
                    ⏱ {step.time}
                  </span>
                )}
                {PHASE_LABEL[step.phase] && (
                  <span className="ms-2 rounded-full border border-[var(--rule-strong)] px-2 py-0.5 text-xs uppercase tracking-wide text-[var(--muted)]">
                    {PHASE_LABEL[step.phase]}
                  </span>
                )}
              </p>
              <p className="mt-1">
                <T>{step.instruction}</T>
              </p>
              {step.hints?.length > 0 && <Hint hints={step.hints} />}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
