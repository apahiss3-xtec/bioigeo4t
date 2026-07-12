import { t } from '../t.js'
import { daysUntil } from '../utils.js'

// Indicador "Queden X dies" calculat amb la data actual.
// Si la data conté placeholders (2026-09-XX) mostra el text tal qual.
export default function CountdownDays({ deadline }) {
  if (!deadline) return null

  const days = daysUntil(deadline)

  if (days === null) {
    return (
      <span className="inline-block rounded-full border border-[var(--rule-strong)] px-3 py-0.5 text-sm text-[var(--muted)]">
        {t('homework.deadline')}: {deadline}
      </span>
    )
  }

  let label
  let cls
  if (days > 1) {
    label = t('homework.daysLeft', { count: days })
    cls = 'bg-[var(--purple-ink)] text-white'
  } else if (days === 1) {
    label = t('homework.daysLeft', { count: 1 })
    cls = 'bg-[var(--orange)] text-[#14121f]'
  } else if (days === 0) {
    label = t('homework.today')
    cls = 'bg-[var(--orange)] text-[#14121f]'
  } else {
    label = t('homework.overdue')
    cls = 'bg-[#8b1a1a] text-white'
  }

  return (
    <span className={`inline-block rounded-full px-3 py-0.5 text-sm font-semibold ${cls}`}>
      {label} · {deadline}
    </span>
  )
}
