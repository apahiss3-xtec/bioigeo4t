import { motion } from 'framer-motion'
import T from '../translate/T.jsx'

// Cas real presentat com una NOTÍCIA (SA3·S1, «bebès editats» 2018).
// A la fitxa el cas és un text; aquí s'ha de veure com el que és —una peça
// de premsa—, perquè l'alumnat hi apliqui la mirada crítica de l'apartat 4:
// qui ho signa, amb quina intenció i què se'n pot verificar.
export default function CasNoticia({ cas }) {
  if (!cas) return null
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="card overflow-hidden"
    >
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b px-6 py-2 text-xs font-semibold uppercase tracking-widest"
        style={{
          borderColor: 'var(--rule)',
          background: 'var(--bg-soft)',
          color: 'var(--muted)',
        }}
      >
        <span style={{ color: 'var(--biome-accent)' }}>{cas.seccio}</span>
        {cas.data && <span className="normal-case tracking-normal">{cas.data}</span>}
        {cas.lloc && <span className="normal-case tracking-normal">{cas.lloc}</span>}
      </div>

      <div className="px-6 py-5">
        <h3 className="text-3xl leading-tight">
          <T>{cas.titular}</T>
        </h3>
        {cas.entradeta && (
          <p className="mt-3 text-lg text-[var(--text)]/90">
            <T>{cas.entradeta}</T>
          </p>
        )}

        {cas.fets?.length > 0 && (
          <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {cas.fets.map((f) => (
              <div key={f.etiqueta} className="border-s-2 ps-3" style={{ borderColor: 'var(--biome)' }}>
                <dt className="kicker">{f.etiqueta}</dt>
                <dd className="text-sm text-[var(--text)]/90">
                  <T>{f.text}</T>
                </dd>
              </div>
            ))}
          </dl>
        )}

        {cas.reaccio && (
          <p className="mt-5 rounded-lg border border-[var(--rule)] bg-[var(--bg-soft)] px-4 py-3 text-sm">
            <T>{cas.reaccio}</T>
          </p>
        )}
      </div>

      <div
        className="border-t px-6 py-3 text-sm text-[var(--muted)]"
        style={{ borderColor: 'var(--rule)' }}
      >
        {cas.font && (
          <p>
            <span className="kicker me-2">font</span>
            <T>{cas.font}</T>
          </p>
        )}
        {cas.pregunta && (
          <p className="mt-2 italic">
            <T>{cas.pregunta}</T>
          </p>
        )}
      </div>
    </motion.article>
  )
}
