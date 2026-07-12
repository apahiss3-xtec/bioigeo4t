import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../t.js'
import { getSA, getSession } from '../data/sas.js'
import { getCompetency } from '../data/competencies.js'
import { asset } from '../utils.js'
import T from '../translate/T.jsx'
import BiomeImage from '../components/BiomeImage.jsx'
import AppFrame from '../components/AppFrame.jsx'
import TheoryCard from '../components/TheoryCard.jsx'
import ExitTicketForm from '../components/ExitTicketForm.jsx'
import CountdownDays from '../components/CountdownDays.jsx'
import Accordion from '../components/Accordion.jsx'
import FitxaGuide from '../components/FitxaGuide.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import NivellSelector from '../components/NivellSelector.jsx'
import { useNivell, pickLevel } from '../nivell/NivellContext.jsx'
import NotFoundPage from './NotFoundPage.jsx'

// Fitxes/rúbriques ja convertides a PDF i presents a public/fitxes/.
// Mentre estigui buida, es mostra "Fitxa disponible a classe".
const DOWNLOADABLE_FILES = []

const SectionTitle = ({ children }) => (
  <h2 className="section-bar mb-6" style={{ background: 'var(--biome)' }}>
    {children}
  </h2>
)

const PHASE_LABEL = {
  engage: 'session.engage',
  explore: 'session.explore',
  explica: 'session.explica'
}

// Capçalera d'apartat numerada (mateixa lògica que el full imprès: cercle + nº).
// Vincula cada bloc del web amb l'apartat 0/1/2/3 de la fitxa.
const ApartatHeader = ({ num, phase, title, time }) => (
  <div className="mb-6 flex items-start gap-4">
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
      style={{ background: 'var(--biome)' }}
    >
      {num}
    </span>
    <div className="min-w-0">
      <p className="kicker" style={{ color: 'var(--biome-accent)' }}>
        {t('session.apartat')} {num}
        {PHASE_LABEL[phase] && <> · {t(PHASE_LABEL[phase])}</>}
        {time && <> · ⏱ {time}</>}
      </p>
      <h2 className="text-2xl md:text-3xl leading-tight">
        <T>{title}</T>
      </h2>
    </div>
  </div>
)

// Bastiment (B) o repte (A) d'un apartat, segons el nivell triat.
// A 4t hi ha 2 nivells: A (ampliació, repte) i B (estàndard, bastida).
// La bastida de B decreix al llarg del curs (vegeu scaffoldFade a cada sN.js).
const ApartatExtra = ({ extras, nivell }) => {
  if (!extras) return null
  if (nivell === 'B' && extras.scaffold) {
    return (
      <div
        className="mt-5 rounded-xl border-s-4 p-4"
        style={{ borderInlineStartColor: 'var(--teal, #3a9e8c)', background: 'var(--teal-tint, #e6f4f1)' }}
      >
        <p className="kicker mb-1" style={{ color: 'var(--teal, #3a9e8c)' }}>
          🪜 {t('nivell.scaffold')}
        </p>
        <p>
          <T>{extras.scaffold}</T>
        </p>
      </div>
    )
  }
  if (nivell === 'A' && extras.challenge) {
    return (
      <div
        className="mt-5 rounded-xl border-s-4 p-4"
        style={{ borderInlineStartColor: 'var(--orange)', background: 'var(--orange-tint, #fdf0e8)' }}
      >
        <p className="kicker mb-1" style={{ color: 'var(--orange)' }}>
          🚀 {t('nivell.challenge')}
        </p>
        <p>
          <T>{extras.challenge}</T>
        </p>
      </div>
    )
  }
  return null
}

export default function SessionPage() {
  const { saId, sessionId } = useParams()
  const { nivell } = useNivell()
  const sa = getSA(saId)
  const session = getSession(saId, sessionId)

  if (!sa || !session) return <NotFoundPage />

  const idx = sa.sessionsData.findIndex((s) => s.id === session.id)
  const prev = sa.sessionsData[idx - 1]
  const next = sa.sessionsData[idx + 1]

  const fileAvailable = (url) => url && DOWNLOADABLE_FILES.includes(url)

  // ── Apartats numerats com al full ───────────────────────────
  // Títol/temps de cada apartat surten de la guia del full (font única).
  const apartatMeta = {}
  session.fitxaGuide?.steps?.forEach((s) => {
    apartatMeta[s.apartat] = s
  })
  // Una sessió segueix l'estructura per apartats si la teoria hi està vinculada.
  const hasApartats = session.theoryPoints?.some((p) => p.apartat)
  const theoryByApartat = (n) => session.theoryPoints?.filter((p) => p.apartat === n) || []
  const graphicsByApartat = (n) => session.graphicResources?.filter((g) => g.apartat === n) || []
  // Gràfiques que han d'anar ABANS de la teoria de l'apartat (ordre lògic:
  // p. ex. mostrar els nivells d'organització abans de justificar res).
  const graphicsBefore = (n) => graphicsByApartat(n).filter((g) => g.before)
  const graphicsAfter = (n) => graphicsByApartat(n).filter((g) => !g.before)
  // Apartats de teoria (2, 3, …): exclou l'1 (va dins d'Explora) i ordena.
  const theoryApartatNums = hasApartats
    ? [...new Set(session.theoryPoints.filter((p) => p.apartat && p.apartat !== '1').map((p) => p.apartat))].sort()
    : []
  const exploreEpistemic = hasApartats ? theoryByApartat('1') : []
  const looseGraphics = hasApartats
    ? session.graphicResources?.filter((g) => !g.apartat) || []
    : session.graphicResources || []

  const GraphicFigure = ({ g }) => (
    <figure className="card overflow-hidden">
      <img src={asset(g.src)} alt={g.title} className="w-full bg-white" loading="lazy" />
      <figcaption className="px-5 py-3 text-sm text-[var(--muted)]">
        <strong className="text-[var(--text)]">
          {g.id} · {g.title}
        </strong>{' '}
        — {g.note}
      </figcaption>
    </figure>
  )

  return (
    <div className={`biome-${sa.biome}`}>
      {/* ── SECCIÓ 1 · ENGANXA ─────────────────────────────── */}
      <section className="relative">
        <BiomeImage
          src={session.engageImage}
          title={session.title}
          biome={sa.biome}
          className="h-72 md:h-[26rem] w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--bg) 8%, transparent 75%)' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 inset-x-0">
          <div className="mx-auto max-w-4xl px-4 pb-6">
            <p className="kicker" style={{ color: 'var(--biome-accent)' }}>
              {sa.id.toUpperCase()} · {t('sa.session')} {session.sessionNumber} · {session.duration}
              {session.isFinalSession && <> · 🏁 {t('sa.finalSession')}</>}
              {session.isKeySession && <> · ★ {t('sa.keySession')}</>}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4">
        {/* Bandeau aula invertida */}
        {session.flippedReading && (
          <p className="mt-6 rounded-xl border border-[var(--rule-strong)] bg-[var(--surface)] px-5 py-3 text-sm">
            📚 <strong>{t('session.flippedReading')}:</strong> {session.flippedReading}
          </p>
        )}

        {/* L'ENGANXADA: la pregunta provocadora al principi de la sessió */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-10"
        >
          <p className="kicker mb-3" style={{ color: 'var(--biome-accent)' }}>👋 {t('session.comencem')}</p>
          <h1 className="text-4xl md:text-5xl leading-tight mb-5">
            <T>{session.engageQuestion}</T>
          </h1>
          {session.engageContext && (
            <p className="italic text-[var(--muted)] max-w-2xl">
              <T>{session.engageContext}</T>
            </p>
          )}
          {session.engageChallenge && (
            <div
              className="mt-6 rounded-2xl border-s-4 p-5"
              style={{ borderInlineStartColor: 'var(--biome)', background: 'var(--bg-soft)' }}
            >
              <p className="kicker mb-1" style={{ color: 'var(--biome-accent)' }}>⚡ Provem-ho</p>
              <p className="text-lg">
                <T>{session.engageChallenge}</T>
              </p>
            </div>
          )}
          {session.engageVideo && (
            <div className="mt-6 rounded-2xl overflow-hidden border border-[var(--rule)]">
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                {session.engageVideo.type === 'youtube' ? (
                  <iframe
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                    src={`https://www.youtube.com/embed/${session.engageVideo.youtubeId}?rel=0${
                      session.engageVideo.start ? `&start=${session.engageVideo.start}` : ''
                    }${session.engageVideo.end ? `&end=${session.engageVideo.end}` : ''}`}
                    title={session.engageVideo.title || t('session.comencem')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset(session.engageVideo.src)}
                    controls
                    playsInline
                  />
                )}
              </div>
              {session.engageVideo.note && (
                <p className="px-4 py-2 text-xs text-[var(--muted)]" style={{ background: 'var(--bg-soft)' }}>
                  🎬 <T>{session.engageVideo.note}</T>
                </p>
              )}
            </div>
          )}
        </motion.section>

        {/* ── OBJECTIUS PER NIVELL + selector A/B/C ───────────── */}
        {session.levelObjectives && (
          <section className="pb-12">
            <div className="card p-6">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="kicker mb-1" style={{ color: 'var(--biome-accent)' }}>
                    🎯 {t('nivell.objectives')}
                  </p>
                  <p className="text-sm text-[var(--muted)]">{t('nivell.objectivesHint')}</p>
                </div>
                <NivellSelector />
              </div>
              <ul className="space-y-2">
                {(pickLevel(session.levelObjectives, nivell) || []).map((o, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-[var(--biome-accent)]" aria-hidden="true">
                      ○
                    </span>
                    <p>
                      <T>{o}</T>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── APARTAT 0 · IDEES PRÈVIES (abans de tocar teoria) ── */}
        {session.ideesPrevies && (
          <section className="pb-12">
            <ApartatHeader
              num="0"
              phase={apartatMeta['0']?.phase || 'engage'}
              title={apartatMeta['0']?.title || t('session.ideesPrevies')}
              time={apartatMeta['0']?.time}
            />
            <div className="card p-6">
              {session.ideesPrevies.startPoint && (
                <div
                  className="mb-6 rounded-xl border-s-4 p-4"
                  style={{ borderInlineStartColor: 'var(--biome)', background: 'var(--bg-soft)' }}
                >
                  <p className="kicker mb-1">🔗 {t('session.startPoint')}</p>
                  <p>
                    <T>{session.ideesPrevies.startPoint}</T>
                  </p>
                </div>
              )}
              <ol className="space-y-5">
                {session.ideesPrevies.prompts.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="bignum" style={{ color: 'var(--biome-accent)' }}>
                      {i + 1}
                    </span>
                    <p className="min-w-0 flex-1 pt-1">
                      <T>{p.text}</T>
                    </p>
                    {false && (
                        <div className="mt-3 flex min-h-[7rem] items-center justify-center rounded-xl border-2 border-dashed border-[var(--rule-strong)] text-sm text-[var(--muted)]">
                          {t('session.apartatFullRef', { n: '0' })}
                        </div>
                      )}
                    {false && (
                        // Inici de frase: només a NIVELL C (suport). B/A escriuen lliure.
                        <p className="mt-2 border-b border-[var(--rule-strong)] pb-1 text-[var(--muted)]">
                          {nivell === 'C' && p.starter ? p.starter : ' '}
                        </p>
                      )}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm italic text-[var(--muted)]">
                {t('session.ideesPreviesNote')}
              </p>
            </div>
          </section>
        )}

        {/* ── APARTAT 1 · EXPLORA (l'app interactiva i les hipòtesis) ── */}
        {(session.exploreInstructions || session.appSrc) && (
          <section className="pb-12">
            {apartatMeta['1'] ? (
              <ApartatHeader
                num="1"
                phase={apartatMeta['1'].phase || 'explore'}
                title={apartatMeta['1'].title}
                time={apartatMeta['1'].time || session.exploreDuration}
              />
            ) : (
              <SectionTitle>{t('session.explore')}</SectionTitle>
            )}

            {/* Instruccions senzilles per projectar: Què / Qui / Temps + temporitzador */}
            {session.exploreActivity && (
              <div className="mb-8">
                <ActivityCard activity={session.exploreActivity} />
              </div>
            )}

            {session.appSrc && (
              <div className="mb-8">
                <AppFrame appSrc={session.appSrc} title={session.title} />
              </div>
            )}

            {session.exploreInstructions && (
              <div className="card p-6">
                {!apartatMeta['1'] && session.exploreDuration && (
                  <div className="mb-5 text-sm text-[var(--muted)]">
                    ⏱ <strong>{t('session.duration')}:</strong> {session.exploreDuration}
                  </div>
                )}
                <ol className="space-y-4">
                  {session.exploreInstructions.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="bignum" style={{ color: 'var(--biome-accent)' }}>
                        {i + 1}
                      </span>
                      <p className="pt-1">
                        <T>{step}</T>
                      </p>
                    </li>
                  ))}
                </ol>
                {session.exploreMaterials && (
                  <div className="mt-6 rule pt-4">
                    <p className="kicker mb-2">{t('session.materials')}</p>
                    <ul className="flex flex-wrap gap-2">
                      {session.exploreMaterials.map((m, i) => (
                        <li
                          key={i}
                          className="rounded-full bg-[var(--bg-soft)] border border-[var(--rule)] px-3 py-1 text-sm"
                        >
                          <T>{m}</T>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {session.exploreNote && (
                  <p className="mt-5 text-sm italic text-[var(--muted)]">{session.exploreNote}</p>
                )}
              </div>
            )}

            {/* Moment epistèmic durant l'exploració (apartat 1 de la teoria) */}
            {exploreEpistemic.length > 0 && (
              <div className="mt-6 space-y-5">
                {exploreEpistemic.map((p, i) => (
                  <TheoryCard key={p.id} point={p} index={i} />
                ))}
              </div>
            )}
            <ApartatExtra extras={session.apartatExtras?.['1']} nivell={nivell} />
          </section>
        )}

        {/* ── APARTATS 2…N · LA TEORIA (vinculada als apartats del full) ── */}
        {hasApartats ? (
          theoryApartatNums.map((num) => (
            <section key={num} className="pb-12">
              <ApartatHeader
                num={num}
                phase={apartatMeta[num]?.phase || 'explica'}
                title={apartatMeta[num]?.title || t('session.explica')}
                time={apartatMeta[num]?.time}
              />
              {graphicsBefore(num).length > 0 && (
                <div className="mb-8 grid gap-6">
                  {graphicsBefore(num).map((g) => (
                    <GraphicFigure key={g.id} g={g} />
                  ))}
                </div>
              )}
              <div className="space-y-5">
                {theoryByApartat(num).map((p, i) => (
                  <TheoryCard key={p.id} point={p} index={i} />
                ))}
              </div>
              {graphicsAfter(num).length > 0 && (
                <div className="mt-8 grid gap-6">
                  {graphicsAfter(num).map((g) => (
                    <GraphicFigure key={g.id} g={g} />
                  ))}
                </div>
              )}
              <ApartatExtra extras={session.apartatExtras?.[num]} nivell={nivell} />
            </section>
          ))
        ) : (
          <section className="pb-12">
            <SectionTitle>{t('session.explica')}</SectionTitle>
            <div className="space-y-5">
              {session.theoryPoints.map((p, i) => (
                <TheoryCard key={p.id} point={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Gràfiques no vinculades a cap apartat */}
        {looseGraphics.length > 0 && (
          <section className="pb-12">
            <p className="kicker mb-4">📈 {t('session.graphicResources')}</p>
            <div className="grid gap-6">
              {looseGraphics.map((g) => (
                <GraphicFigure key={g.id} g={g} />
              ))}
            </div>
          </section>
        )}

        {/* ── PISTES PER A LA FITXA (després de la teoria) ────── */}
        {session.fitxaGuide && (
          <section className="pb-12">
            <SectionTitle>{t('session.pistesTitle')}</SectionTitle>
            <p className="mb-6 text-[var(--muted)]">{t('session.pistesIntro')}</p>
            <FitxaGuide guide={session.fitxaGuide} />
          </section>
        )}

        {/* ── SECCIÓ 4 · ELABORA (materials i descàrregues) ───── */}
        <section className="pb-12">
          <SectionTitle>{t('session.elabora')}</SectionTitle>

          <div className="card p-6">
            <div className="flex flex-wrap gap-3">
              {session.fitxaUrl &&
                (fileAvailable(session.fitxaUrl) ? (
                  <a
                    href={asset(session.fitxaUrl)}
                    className="rounded-xl bg-[var(--purple-ink)] px-5 py-2.5 font-display font-semibold text-white hover:bg-[var(--purple-deep)] transition-colors"
                    download
                  >
                    ⬇ {t('session.downloadFitxa')}
                  </a>
                ) : (
                  <span className="rounded-xl border border-[var(--rule-strong)] px-5 py-2.5 text-[var(--muted)]">
                    📄 {t('session.fitxaAtClass')}
                  </span>
                ))}
              {session.rubricUrl &&
                (fileAvailable(session.rubricUrl) ? (
                  <a
                    href={asset(session.rubricUrl)}
                    className="rounded-xl bg-[var(--purple-ink)] px-5 py-2.5 font-display font-semibold text-white hover:bg-[var(--purple-deep)] transition-colors"
                    download
                  >
                    ⬇ {t('session.downloadRubrica')}
                  </a>
                ) : (
                  <span className="rounded-xl border border-[var(--rule-strong)] px-5 py-2.5 text-[var(--muted)]">
                    📋 {t('session.downloadRubrica')} — {t('session.fitxaAtClass').toLowerCase()}
                  </span>
                ))}
              {session.teoriaPdfUrl ? (
                <a
                  href={asset(session.teoriaPdfUrl)}
                  className="rounded-xl bg-[var(--purple-ink)] px-5 py-2.5 font-display font-semibold text-white hover:bg-[var(--purple-deep)] transition-colors"
                  download
                >
                  ⬇ {t('session.downloadTeoria')}
                </a>
              ) : (
                <span className="rounded-xl border border-dashed border-[var(--rule-strong)] px-5 py-2.5 text-[var(--muted)]">
                  ⏳ {t('session.teoriaSoon')}
                </span>
              )}
            </div>
            {session.elaborateNote && (
              <p className="mt-5 italic text-[var(--muted)]">
                <T>{session.elaborateNote}</T>
              </p>
            )}
          </div>
        </section>

        {/* ── SECCIÓ 5 · EXIT TIQUET ───────────────────────── */}
        <section className="pb-12">
          <SectionTitle>{t('session.exitTicket')}</SectionTitle>
          {session.exitTicketNote && (
            <p className="mb-4 italic text-[var(--muted)]">{session.exitTicketNote}</p>
          )}
          {session.exitTicketType === 'paper' ? (
            <div className="space-y-4">
              <p className="card px-5 py-4">✏️ {t('session.exitPaperNote')}</p>
              <Accordion title={`🏠 ${t('session.exitAbsentAccordion')}`}>
                <ExitTicketForm session={session} />
              </Accordion>
            </div>
          ) : (
            <div className="card p-6">
              <ExitTicketForm session={session} />
            </div>
          )}
        </section>

        {/* Estructura informe (SA2 S7) */}
        {session.reportStructure && (
          <section className="pb-12">
            <SectionTitle>{session.reportStructure.title}</SectionTitle>
            <div className="card p-6">
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-xl bg-[var(--bg-soft)] p-4">
                  <p className="kicker mb-1">{t('session.roleA')}</p>
                  <p className="text-sm">{session.reportStructure.roles.A}</p>
                </div>
                <div className="rounded-xl bg-[var(--bg-soft)] p-4">
                  <p className="kicker mb-1">{t('session.roleB')}</p>
                  <p className="text-sm">{session.reportStructure.roles.B}</p>
                </div>
              </div>
              <ol className="space-y-2">
                {session.reportStructure.sections.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[var(--biome-accent)] font-display font-bold">•</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* ── SECCIÓ 6 · FEINA A CASA ──────────────────────── */}
        <section className="pb-12">
          <SectionTitle>{t('session.homework')}</SectionTitle>
          <div className="card p-6 space-y-4">
            {session.deliverables && (
              <div className="rounded-xl border border-[var(--rule-strong)] bg-[var(--surface-2)] p-4">
                <p className="kicker mb-2">📦 {t('session.deliverables')}</p>
                <ul className="space-y-1">
                  {session.deliverables.map((d, i) => (
                    <li key={i}>
                      <strong><T>{d.name}</T></strong>
                      {d.note && (
                        <span className="text-[var(--muted)]">
                          {' '}— <T>{d.note}</T>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {session.homework?.description && session.homework.description !== 'Cap.' ? (
              <>
                <p className="text-lg">
                  <T>{session.homework.description}</T>
                </p>
                {session.homework.secondTask && (
                  <p>
                    <strong>{t('homework.also')}:</strong> <T>{session.homework.secondTask}</T>
                  </p>
                )}
                {session.homework.note && (
                  <p className="italic text-[var(--orange)]">
                    ⚠️ <T>{session.homework.note}</T>
                  </p>
                )}
                <CountdownDays deadline={session.homework.deadline} />
              </>
            ) : (
              <p className="text-[var(--muted)]">
                {session.homework?.description === 'Cap.'
                  ? session.homework.description + ' ' + (session.homework.note || '')
                  : t('homework.none')}
              </p>
            )}
          </div>
        </section>

        {/* ── SECCIÓ 7 · HAS FALTAT? ───────────────────────── */}
        <section className="pb-12">
          <Accordion title={`🏠 ${t('session.recovery')}`} defaultOpen={false}>
            <p className="kicker mb-4">{t('session.recoverySteps')}</p>
            <ol className="space-y-4">
              {session.recoveryInstructions.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bignum" style={{ color: 'var(--biome-accent)' }}>
                    {i + 1}
                  </span>
                  <p className="pt-1">
                    <T>{step}</T>
                  </p>
                </li>
              ))}
            </ol>
          </Accordion>
        </section>

        {/* Competències i OA de la sessió */}
        <section className="pb-10 flex flex-wrap gap-2">
          {session.oaLinks.map((oa) => (
            <span
              key={oa}
              className="rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ background: 'var(--biome)' }}
            >
              {oa}
            </span>
          ))}
          {session.competencies.map((ce) => {
            const c = getCompetency(ce)
            return (
              <span
                key={ce}
                className="rounded-full border border-[var(--rule-strong)] px-3 py-1 text-xs text-[var(--muted)]"
                title={c.name}
              >
                {c.emoji} {ce}
              </span>
            )
          })}
        </section>

        {/* Navegació prev / següent */}
        <nav className="rule flex items-center justify-between gap-4 py-6 pb-10">
          <Link to={`/sa/${sa.id}`} className="text-[var(--purple)] hover:underline text-sm">
            ← {t('session.backToSA')}
          </Link>
          <div className="flex gap-3">
            {prev && (
              <Link
                to={`/sa/${sa.id}/${prev.id}`}
                className="rounded-xl border border-[var(--rule-strong)] px-4 py-2 text-sm hover:border-[var(--biome-accent)] transition-colors"
              >
                ← {t('session.prevSession')}
              </Link>
            )}
            {next && (
              <Link
                to={`/sa/${sa.id}/${next.id}`}
                className="rounded-xl border border-[var(--rule-strong)] px-4 py-2 text-sm hover:border-[var(--biome-accent)] transition-colors"
              >
                {t('session.nextSession')} →
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}
