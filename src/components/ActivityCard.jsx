import T from '../translate/T.jsx'
import Timer from './Timer.jsx'
import WhoBadge from './WhoBadge.jsx'
import { t } from '../t.js'
import { useNivell, pickLevel } from '../nivell/NivellContext.jsx'

// Instruccions senzilles d'una activitat d'aula: QUÈ farem, QUI ho fa
// (individual / parelles / grups / tota la classe) i el TEMPS, amb un
// temporitzador fixable per fer servir en directe a classe.
export default function ActivityCard({ activity }) {
  const { nivell } = useNivell()
  if (!activity) return null
  const { what, who, note, apartats } = activity
  // `time` pot ser un número (igual per als dos nivells) o { A, B }: hi ha
  // activitats que duren diferent segons el nivell i el cronòmetre de classe
  // ha de dir el temps de qui el mira.
  const time = typeof activity.time === 'object' ? pickLevel(activity.time, nivell) : activity.time

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
            {/* Moltes activitats d'ABP no ocupen l'apartat 1 del full, i llavors
                el cronòmetre no quadra amb els minuts de la capçalera de dalt.
                Aquí es diu, en una frase, a quin apartat correspon. */}
            {apartats && (
              <p className="mt-2 text-sm text-[var(--muted)]">
                {t(/\bi\b|,/.test(apartats) ? 'activity.apartatsPlural' : 'activity.apartatsSingular', {
                  apartats
                })}
              </p>
            )}
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
