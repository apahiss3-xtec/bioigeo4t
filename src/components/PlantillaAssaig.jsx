import T from '../translate/T.jsx'

// Plantilla d'escriptura argumentativa (SA3·S4·B): postura → raó → prova.
// No dona el text fet: dona l'ESTRUCTURA i un inici de frase per a cada peça,
// que és el que decau al llarg del curs (scaffoldFade).
export default function PlantillaAssaig({ plantilla }) {
  if (!plantilla) return null
  return (
    <div className="rounded-xl border border-[var(--rule-strong)] bg-[var(--surface-2)] p-4">
      <p className="kicker mb-1">📝 <T>{plantilla.titol}</T></p>
      {plantilla.intro && (
        <p className="mb-3 text-sm text-[var(--muted)]">
          <T>{plantilla.intro}</T>
        </p>
      )}
      <ol className="space-y-3">
        {(plantilla.passos || []).map((p, i) => (
          <li key={p.etiqueta} className="flex gap-3">
            <span
              className="shrink-0 text-sm font-semibold tabular-nums"
              style={{ color: 'var(--biome-accent)' }}
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="font-semibold">
                <T>{p.etiqueta}</T>
              </p>
              {p.que && (
                <p className="text-sm text-[var(--text)]/90">
                  <T>{p.que}</T>
                </p>
              )}
              {p.inici && (
                <p className="mt-1 text-sm italic text-[var(--muted)]">
                  «<T>{p.inici}</T>…»
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      {plantilla.avis && (
        <p className="mt-3 text-sm italic text-[var(--muted)]">
          <T>{plantilla.avis}</T>
        </p>
      )}
    </div>
  )
}
