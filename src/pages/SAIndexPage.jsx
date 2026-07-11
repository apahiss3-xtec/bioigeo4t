import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../t.js'
import { getSA } from '../data/sas.js'
import { getCompetency } from '../data/competencies.js'
import T from '../translate/T.jsx'
import BiomeImage from '../components/BiomeImage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

export default function SAIndexPage() {
  const { saId } = useParams()
  const sa = getSA(saId)

  if (!sa) return <NotFoundPage />

  // SA encara no publicada → Pròximament
  if (!sa.published) {
    return (
      <div className={`biome-${sa.biome} mx-auto max-w-3xl px-4 py-24 text-center`}>
        <span className="section-bar mb-6 inline-block" style={{ background: 'var(--biome)' }}>
          {sa.id.toUpperCase()}
        </span>
        <h1 className="text-5xl mb-3">{sa.title}</h1>
        <p className="italic text-[var(--muted)] text-lg mb-8">{sa.subtitle}</p>
        <p className="font-display text-2xl mb-2">⏳ {t('common.proximament')}</p>
        <p className="text-[var(--muted)] mb-10">{t('common.proximamentText')}</p>
        <Link to="/" className="text-[var(--purple)] hover:underline font-semibold">
          ← {t('common.backHome')}
        </Link>
      </div>
    )
  }

  return (
    <div className={`biome-${sa.biome}`}>
      {/* Capçalera amb portada */}
      <div className="relative">
        <BiomeImage
          src={sa.portadaImage}
          title={sa.title}
          biome={sa.biome}
          className="h-64 md:h-80 w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--bg) 5%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 -mt-20 relative">
        <span className="section-bar" style={{ background: 'var(--biome)' }}>
          {sa.id.toUpperCase()}
        </span>
        <h1 className="text-5xl md:text-6xl mt-3 mb-2">{sa.title}</h1>
        <p className="italic text-xl text-[var(--muted)] max-w-3xl mb-6">
          <T>{sa.subtitle}</T>
        </p>
        <p className="max-w-3xl mb-10">
          <T>{sa.description}</T>
        </p>

        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          {/* Objectius */}
          <div className="card p-6 lg:col-span-2">
            <p className="kicker mb-4">{t('sa.objectives')}</p>
            <ul className="space-y-4">
              {sa.objectives.map((oa) => (
                <li key={oa.id} className="flex gap-4">
                  <span
                    className="bignum"
                    style={{ color: 'var(--biome-accent)' }}
                  >
                    {oa.id.replace('OA', '')}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-lg">
                      <T>{oa.text}</T>
                    </p>
                    <p className="text-[var(--muted)] text-sm">
                      <T>{oa.desc}</T>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Producte + competències */}
          <div className="space-y-6">
            <div className="card p-6">
              <p className="kicker mb-2">{t('sa.product')}</p>
              <p>{sa.product}</p>
            </div>
            <div className="card p-6">
              <p className="kicker mb-3">{t('sa.competencies')}</p>
              <ul className="space-y-2">
                {sa.competencies.map((ce) => {
                  const c = getCompetency(ce)
                  return (
                    <li key={ce} className="flex items-center gap-2 text-sm">
                      <span aria-hidden="true">{c.emoji}</span>
                      <span className="font-semibold">{ce}</span>
                      <span className="text-[var(--muted)]">· {c.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Enigmes (SA2) */}
        {sa.enigmas && (
          <div className="mb-12">
            <p className="kicker mb-4">🧩 {t('sa.enigmas')}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {sa.enigmas.map((e) => (
                <div
                  key={e.id}
                  className="card p-6 border-s-4"
                  style={{ borderInlineStartColor: 'var(--biome-accent)' }}
                >
                  <h3 className="text-xl mb-2">{e.title}</h3>
                  <p className="text-[var(--muted)] text-sm">{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aula invertida */}
        {sa.flippedClassroom && (
          <p className="mb-12 rounded-xl border border-[var(--rule-strong)] bg-[var(--surface)] px-5 py-3 text-sm">
            📚 <strong>{t('sa.flipped')}:</strong> {sa.flippedNote}
          </p>
        )}

        {/* Llista de sessions */}
        <p className="kicker mb-4">{t('sa.sessions')}</p>
        <div className="grid gap-4 md:grid-cols-2 pb-8">
          {sa.sessionsData.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                to={`/sa/${sa.id}/${s.id}`}
                className="card group flex items-stretch gap-0 overflow-hidden hover:border-[var(--biome-accent)] transition-colors"
              >
                <div
                  className="flex items-center justify-center px-5 font-display font-bold text-3xl text-white shrink-0"
                  style={{ background: 'var(--biome)' }}
                >
                  {s.sessionNumber}
                </div>
                <div className="p-4 min-w-0">
                  <p className="font-display font-semibold text-lg leading-snug group-hover:text-[var(--biome-accent)] transition-colors">
                    <T>{s.title}</T>
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {s.duration}
                    {s.isFinalSession && <> · 🏁 {t('sa.finalSession')}</>}
                    {s.isKeySession && <> · ★ {t('sa.keySession')}</>}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Apartat final: autoavaluació de la SA */}
        <div className="pb-12">
          <Link
            to={`/sa/${sa.id}/autoavaluacio`}
            className="card group flex items-center gap-5 p-6 hover:border-[var(--biome-accent)] transition-colors"
          >
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl"
              style={{ background: 'var(--biome)' }}
            >
              🎯
            </span>
            <div className="min-w-0">
              <p className="font-display font-semibold text-xl group-hover:text-[var(--biome-accent)] transition-colors">
                {t('auto.title')}
              </p>
              <p className="text-sm text-[var(--muted)]">
                Comprova si vas preparat/da: checklist, gràfic per objectiu i un cas pràctic nou.
              </p>
            </div>
            <span
              className="ms-auto font-display font-semibold uppercase tracking-wider text-sm shrink-0"
              style={{ color: 'var(--biome-accent)' }}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
