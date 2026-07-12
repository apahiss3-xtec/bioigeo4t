import T from '../translate/T.jsx'

// Petita icona de persona (es repeteix segons l'agrupament).
const Person = ({ size = 20 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden="true">
    <circle cx="8" cy="4.6" r="3" />
    <path d="M1.8 15c0-3.4 2.8-6 6.2-6s6.2 2.6 6.2 6z" />
  </svg>
)

// Agrupaments possibles → nombre de persones + etiqueta per defecte.
const MODES = {
  individual: { count: 1, label: 'Individual' },
  parelles: { count: 2, label: 'Per parelles' },
  grup2: { count: 2, label: 'Grups de 2' },
  grup3: { count: 3, label: 'Grups de 3' },
  grup4: { count: 4, label: 'Grups de 4' },
  classe: { count: 5, label: 'Tota la classe' }
}

// Mostra la icona d'agrupament + text. `who` pot ser:
//  - string  → només text (compat. antiga), amb icona genèrica de 2 persones
//  - { mode, label } → icona segons el mode + etiqueta (label opcional sobreescriu)
export default function WhoBadge({ who }) {
  if (!who) return null
  const isObj = typeof who === 'object'
  const mode = isObj ? who.mode : null
  const cfg = (mode && MODES[mode]) || null
  const label = isObj ? who.label || cfg?.label || '' : who
  const count = cfg ? cfg.count : 0

  return (
    <div className="flex items-center gap-3">
      {count > 0 && (
        <span
          className="flex shrink-0 items-center"
          style={{ color: 'var(--biome)' }}
          title={label}
        >
          {mode === 'classe' ? (
            // Tota la classe: cluster compacte de persones
            <span className="flex items-center -space-x-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Person key={i} size={16} />
              ))}
            </span>
          ) : (
            <span className="flex items-center gap-0.5">
              {Array.from({ length: count }).map((_, i) => (
                <Person key={i} size={20} />
              ))}
            </span>
          )}
        </span>
      )}
      {label && (
        <span>
          <T>{label}</T>
        </span>
      )}
    </div>
  )
}
