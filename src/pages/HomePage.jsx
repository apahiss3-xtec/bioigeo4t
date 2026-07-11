import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { publishedSAs, upcomingSAs } from '../data/sas.js'
import BiomeImage from '../components/BiomeImage.jsx'

const cardMotion = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay: i * 0.06 }
})

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-12 md:py-16">
        <p className="kicker mb-3">{t('home.kicker')}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{t('home.title')}</h1>
        <p className="text-lg text-[var(--muted)] max-w-2xl">{t('home.intro')}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {publishedSAs.map((sa, i) => (
          <motion.div key={sa.id} {...cardMotion(i)}>
            <Link
              to={`/sa/${sa.id}`}
              className={`biome-${sa.biome} card group block overflow-hidden hover:border-[var(--biome-accent)] transition-colors`}
            >
              <div className="relative h-48 overflow-hidden">
                <BiomeImage
                  src={sa.portadaImage}
                  title={sa.title}
                  biome={sa.biome}
                  className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span
                  className="absolute top-3 start-3 section-bar"
                  style={{ background: 'var(--biome)' }}
                >
                  {sa.id.toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-3xl mb-1">{sa.title}</h2>
                <p className="italic text-[var(--muted)] mb-4">{sa.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">
                    {t('home.sessionsCount', { count: sa.sessions })}
                  </span>
                  <span
                    className="font-display font-semibold uppercase tracking-wider text-sm"
                    style={{ color: 'var(--biome-accent)' }}
                  >
                    {t('home.open')} →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {upcomingSAs.map((sa, i) => (
          <motion.div key={sa.id} {...cardMotion(publishedSAs.length + i)}>
            <div
              className={`biome-${sa.biome} card h-full p-6 opacity-70`}
              aria-label={`${sa.title} — ${t('home.comingSoon')}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="section-bar" style={{ background: 'var(--biome)' }}>
                  {sa.id.toUpperCase()}
                </span>
                <span className="rounded-full border border-[var(--rule-strong)] px-3 py-0.5 text-xs uppercase tracking-wider text-[var(--muted)]">
                  {t('home.comingSoon')}
                </span>
              </div>
              <h2 className="text-2xl mb-1">{sa.title}</h2>
              <p className="italic text-[var(--muted)]">{sa.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
