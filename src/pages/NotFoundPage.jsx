import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-display text-7xl font-bold text-[var(--purple)] mb-4">404</p>
      <p className="text-lg text-[var(--muted)] mb-8">{t('common.notFound')}</p>
      <Link to="/" className="text-[var(--purple)] hover:underline font-semibold">
        ← {t('common.backHome')}
      </Link>
    </div>
  )
}
