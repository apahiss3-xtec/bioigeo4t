import { Link, useParams } from 'react-router-dom'
import { getSA } from '../data/sas.js'
import { getCriteri } from '../data/criteris.js'
import { asset } from '../utils.js'
import NotFoundPage from './NotFoundPage.jsx'

// ── ESPAI DOCENT · #/sa/:saId/docent ─────────────────────────────────────
// Petició d'Albert (21/09/2026): la guia docent, els casos i TOTS els
// materials d'una SA en un sol lloc, «mig amagadet» per a l'alumnat però a mà
// per al professorat. No surt a cap menú: s'hi arriba pel «·» discret del peu
// de qualsevol pàgina de la SA (Footer.jsx).
//
// Es construeix sol a partir de les dades de cada sessió, així que serveix per
// a totes les SA sense tocar res: fitxaUrl, retallablesUrl, exitTicketUrl,
// appSrc, rubricUrl i sessionMaterials (inclosos els marcats who: 'docent',
// que la pàgina de sessió de l'alumnat no mostra).

const NIVELLS = ['A', 'B', 'C']

// Llista les variants per nivell d'un camp {A,B,C} (o una cadena sola),
// agrupant les que apunten al mateix fitxer: {A:x, B:x, C:y} → [A·B → x, C → y].
function perNivell(value) {
  if (!value) return []
  if (typeof value === 'string') return [{ etiqueta: '', url: value }]
  const grups = []
  NIVELLS.forEach((n) => {
    if (!value[n]) return
    const g = grups.find((x) => x.url === value[n])
    if (g) g.nivells.push(n)
    else grups.push({ url: value[n], nivells: [n] })
  })
  return grups.map((g) => ({ etiqueta: g.nivells.join('·'), url: g.url }))
}

const Enllac = ({ href, children, intern }) =>
  intern ? (
    <Link to={href} className="rounded-lg border border-[var(--rule-strong)] px-3 py-1.5 text-sm font-semibold hover:bg-[var(--paper-2)] transition-colors">
      {children}
    </Link>
  ) : (
    <a
      href={asset(href)}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-[var(--rule-strong)] px-3 py-1.5 text-sm font-semibold hover:bg-[var(--paper-2)] transition-colors"
    >
      {children}
    </a>
  )

const Fila = ({ titol, children }) => (
  <div className="flex flex-wrap items-center gap-2 py-2 border-t border-[var(--rule)] first:border-t-0">
    <span className="w-40 shrink-0 text-sm font-semibold text-[var(--muted)]">{titol}</span>
    {children}
  </div>
)

export default function DocentPage() {
  const { saId } = useParams()
  const sa = getSA(saId)
  if (!sa || !sa.published) return <NotFoundPage />

  return (
    <div className={`biome-${sa.biome} mx-auto max-w-5xl px-4 py-10`}>
      <span className="section-bar" style={{ background: 'var(--biome)' }}>
        {sa.id.toUpperCase()} · Espai docent
      </span>
      <h1 className="text-4xl md:text-5xl mt-3 mb-2">{sa.title}</h1>
      <p className="text-[var(--muted)] mb-8 max-w-3xl">
        Tot el material de la SA en un sol lloc, per imprimir i preparar les sessions. Aquesta pàgina no apareix als
        menús: s'hi arriba pel punt discret del peu de pàgina.
      </p>

      <div className="card p-6 mb-8">
        <p className="kicker mb-3" style={{ color: 'var(--biome-accent)' }}>La SA sencera</p>
        <div className="flex flex-wrap gap-2">
          {sa.guiaDocent ? (
            <a
              href={asset(sa.guiaDocent)}
              className="rounded-xl bg-[var(--purple-ink)] px-5 py-2.5 font-display font-semibold text-white hover:bg-[var(--purple-deep)] transition-colors"
              download
            >
              📘 Guia docent (.docx)
            </a>
          ) : (
            <span className="rounded-xl border border-dashed border-[var(--rule-strong)] px-5 py-2.5 text-[var(--muted)]">
              📘 Guia docent: encara no disponible
            </span>
          )}
          <Enllac href={`/sa/${sa.id}`} intern>🗺️ Pàgina de la SA (alumnat)</Enllac>
          {sa.avaluacio && <Enllac href={`/sa/${sa.id}/autoavaluacio`} intern>✅ Autoavaluació pre-examen</Enllac>}
        </div>
        {sa.product && (
          <p className="mt-4 text-sm">
            <strong>Producte final:</strong> {sa.product}
          </p>
        )}
      </div>

      {sa.sessionsData.map((s) => {
        const materials = s.sessionMaterials || []
        return (
          <section key={s.id} className="card p-6 mb-6">
            <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
              <p className="kicker" style={{ color: 'var(--biome-accent)' }}>
                Sessió {s.sessionNumber} · {s.duration}
              </p>
              <Link to={`/sa/${sa.id}/${s.id}`} className="text-sm text-[var(--purple)] hover:underline">
                obre la pàgina de la sessió →
              </Link>
            </div>
            <h2 className="text-2xl mb-3">{s.title}</h2>
            {s.teacherNotes && (
              <p className="mb-4 rounded-lg bg-[var(--bg-soft)] px-4 py-3 text-sm">
                <strong>Guió docent:</strong> {s.teacherNotes}
              </p>
            )}

            {s.fitxaUrl && (
              <Fila titol="📄 Fitxa">
                {perNivell(s.fitxaUrl).map((f) => (
                  <Enllac key={f.url} href={f.url}>{f.etiqueta ? `Versió ${f.etiqueta}` : 'Fitxa'}</Enllac>
                ))}
              </Fila>
            )}
            {s.exitTicketUrl && (
              <Fila titol="🎟️ Exit tiquet">
                {perNivell(s.exitTicketUrl).map((f) => (
                  <Enllac key={f.url} href={f.url}>{f.etiqueta ? `Versió ${f.etiqueta}` : 'Tiquet'}</Enllac>
                ))}
                {s.exitTicketCriteri && getCriteri(s.exitTicketCriteri) && (
                  <span className="text-xs text-[var(--muted)]">📐 criteri {s.exitTicketCriteri}</span>
                )}
              </Fila>
            )}
            {s.retallablesUrl && (
              <Fila titol="✂️ Retallables">
                <Enllac href={s.retallablesUrl}>Retallables</Enllac>
              </Fila>
            )}
            {s.appSrc && (
              <Fila titol="💻 App">
                <Enllac href={s.appSrc}>{s.appSrc.split('/').pop()}</Enllac>
              </Fila>
            )}
            {s.rubricUrl && (
              <Fila titol="📋 Rúbrica">
                <Enllac href={s.rubricUrl}>Rúbrica</Enllac>
              </Fila>
            )}
            {materials.length > 0 && (
              <Fila titol="📎 Materials">
                {materials.map((m) => (
                  <Enllac key={m.id} href={m.url}>
                    {m.who === 'docent' ? '🔑 ' : ''}
                    {m.title}
                  </Enllac>
                ))}
              </Fila>
            )}
            {s.criterisAvaluacio?.length > 0 && (
              <Fila titol="📐 Criteris">
                <span className="text-sm">{s.criterisAvaluacio.join(' · ')}</span>
              </Fila>
            )}
          </section>
        )
      })}
    </div>
  )
}
