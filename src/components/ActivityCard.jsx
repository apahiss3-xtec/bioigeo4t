import T from '../translate/T.jsx'
import Timer from './Timer.jsx'
import WhoBadge from './WhoBadge.jsx'
import { t } from '../t.js'

// Instruccions senzilles d'una activitat d'aula: QUÈ farem, QUI ho fa
// (individual / parelles / grups / tota la classe) i el TEMPS, amb un
// temporitzador fixable per fer servir en directe a classe.
export default function ActivityCard({ activity }) {
  if (!activity) return null
  const { what, who, time, note } = activity

  return (
    <div className="card p-6">
      <div className="grid gap-5 md:grid-cols-2">
        {/* QUÈ */}
        {what && (
          <div className="md:col-span-2">
            <p className="kicker mb-1" style={{ color: 'var(--biome-accent)' }}>
              🎯 {t('activity.what')}
            </p>
            <p className="text-lg">
              <T>{what}</T>
            </p>
          </div>
        )}

        {/* QUI */}
        {who && (
          <div>
            <p className="kicker mb-2" style={{ color: 'var(--biome-accent)' }}>
              👥 {t('activity.who')}
            </p>
            <WhoBadge who={who} />
          </div>
        )}

        {/* TEMPS */}
        {time != null && (
          <div>
            <p className="kicker mb-2" style={{ color: 'var(--biome-accent)' }}>
              ⏱ {t('activity.time')}
            </p>
            <Timer minutes={time} />
          </div>
        )}
      </div>

      {note && (
        <p className="mt-4 text-sm italic text-[var(--muted)]">
          <T>{note}</T>
        </p>
      )}
    </div>
  )
}
