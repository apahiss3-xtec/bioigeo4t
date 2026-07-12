import { useEffect, useRef, useState } from 'react'

// Mesurador de so de l'aula: widget flotant amb 3 modes (cementiri / biblioteca /
// aula en treball), cadascun amb llindars propis de verd-groc-vermell. Mostra un
// "semàfor en viu": una barra vertical que puja i baixa amb el nivell de so real
// (micròfon) i canvia de color segons si se superen els decibels del mode triat.
//
// Tècnica: Web Audio API (getUserMedia + AnalyserNode + getFloatTimeDomainData),
// RMS → dBFS → aproximació a dB(A) amb un desplaçament de calibratge fix. No és
// un sonòmetre certificat: els valors són APROXIMATS i depenen del micròfon de
// cada dispositiu. Prou precisos per a l'ús pedagògic (donar feedback relatiu
// de "massa soroll" a l'aula), no per a mesures científiques exactes.
//
// Cap dependència externa: tot client-side amb les APIs natives del navegador.

const MODES = [
  { id: 'cementiri', icon: '🪦', label: 'Silenci de cementiri', green: 28, amber: 38 },
  { id: 'biblioteca', icon: '📚', label: 'Silenci de biblioteca', green: 42, amber: 55 },
  { id: 'aula', icon: '🧑‍🤝‍🧑', label: 'Ambient de treball d’aula', green: 60, amber: 75 }
]

const MIN_DISPLAY = 20 // dB aproximats que es mostren com a 0% de barra
const MAX_DISPLAY = 95 // dB aproximats que es mostren com a 100% de barra
const REFERENCE_OFFSET = 100 // calibratge aproximat dBFS → "dB" mostrats

const COLORS = {
  green: '#2f9e5c',
  amber: '#e8a52e',
  red: '#d6433f'
}

function zoneFor(mode, approxDb) {
  if (approxDb <= mode.green) return 'green'
  if (approxDb <= mode.amber) return 'amber'
  return 'red'
}

export default function SoundMeter() {
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem('portal-bio-soundmeter-open') === '1'
    } catch {
      return false
    }
  })
  const [modeId, setModeId] = useState(() => {
    try {
      return localStorage.getItem('portal-bio-soundmeter-mode') || 'aula'
    } catch {
      return 'aula'
    }
  })
  const [listening, setListening] = useState(false)
  const [error, setError] = useState(null)
  const [readout, setReadout] = useState({ db: null, zone: 'green' })

  const mode = MODES.find((m) => m.id === modeId) || MODES[2]

  const barFillRef = useRef(null)
  const dotRef = useRef(null)
  const ctxRef = useRef(null)
  const streamRef = useRef(null)
  const analyserRef = useRef(null)
  const rafRef = useRef(null)
  const smoothedRef = useRef(MIN_DISPLAY)
  const lastUiUpdateRef = useRef(0)
  const modeRef = useRef(mode)
  modeRef.current = mode

  useEffect(() => {
    try {
      localStorage.setItem('portal-bio-soundmeter-open', open ? '1' : '0')
    } catch {
      /* localStorage no disponible: ignorem */
    }
  }, [open])

  useEffect(() => {
    try {
      localStorage.setItem('portal-bio-soundmeter-mode', modeId)
    } catch {
      /* ignorem */
    }
  }, [modeId])

  const paint = (pct, zone) => {
    if (barFillRef.current) {
      barFillRef.current.style.height = `${pct}%`
      barFillRef.current.style.background = COLORS[zone]
    }
    if (dotRef.current) {
      dotRef.current.style.background = COLORS[zone]
      dotRef.current.style.boxShadow = `0 0 10px ${COLORS[zone]}`
    }
  }

  const tick = () => {
    const analyser = analyserRef.current
    if (!analyser) return
    const buf = new Float32Array(analyser.fftSize)
    analyser.getFloatTimeDomainData(buf)
    let sum = 0
    for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i]
    const rms = Math.sqrt(sum / buf.length)
    const dbfs = 20 * Math.log10(rms + 1e-8)
    const approxDb = Math.min(120, Math.max(0, REFERENCE_OFFSET + dbfs))

    // Ballistics d'agulla de VU-metre: puja ràpid, baixa lent.
    const prev = smoothedRef.current
    smoothedRef.current = approxDb > prev ? prev * 0.35 + approxDb * 0.65 : prev * 0.9 + approxDb * 0.1

    const shown = smoothedRef.current
    const pct = Math.min(100, Math.max(0, ((shown - MIN_DISPLAY) / (MAX_DISPLAY - MIN_DISPLAY)) * 100))
    const zone = zoneFor(modeRef.current, shown)
    paint(pct, zone)

    const now = performance.now()
    if (now - lastUiUpdateRef.current > 200) {
      lastUiUpdateRef.current = now
      setReadout({ db: Math.round(shown), zone })
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  const stop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop())
      streamRef.current = null
    }
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {})
      ctxRef.current = null
    }
    analyserRef.current = null
    smoothedRef.current = MIN_DISPLAY
    paint(0, 'green')
    setListening(false)
    setReadout({ db: null, zone: 'green' })
  }

  const start = async () => {
    setError(null)
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const ctx = new Ctx()
      const source = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 1024
      source.connect(analyser)

      streamRef.current = stream
      ctxRef.current = ctx
      analyserRef.current = analyser
      setListening(true)
      rafRef.current = requestAnimationFrame(tick)
    } catch {
      setError('No s’ha pogut accedir al micròfon. Cal donar-hi permís des del navegador.')
      setListening(false)
    }
  }

  useEffect(() => () => stop(), []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="fixed end-4 top-1/2 z-40 -translate-y-1/2 flex flex-col items-end gap-2">
      {open && (
        <div
          className="w-[210px] rounded-2xl border p-3 shadow-lg"
          style={{ borderColor: 'var(--rule-strong)', background: 'var(--surface)' }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-sm font-semibold" style={{ color: 'var(--text)' }}>
              🔊 Mesurador de so
            </span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full px-1.5 text-sm font-bold leading-none hover:bg-[var(--bg-soft)]"
              style={{ color: 'var(--muted)' }}
              aria-label="Tanca el mesurador de so"
            >
              ✕
            </button>
          </div>

          {/* Selector de mode */}
          <div className="mt-2 flex flex-col gap-1">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setModeId(m.id)}
                className="rounded-lg px-2 py-1 text-left text-xs font-semibold transition-colors"
                style={
                  modeId === m.id
                    ? { background: 'var(--purple-ink)', color: '#fff' }
                    : { color: 'var(--muted)', background: 'var(--bg-soft)' }
                }
              >
                {m.icon} {m.label}
              </button>
            ))}
          </div>

          {/* Semàfor en viu: barra vertical + punt de color */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <div
              className="relative h-32 w-7 overflow-hidden rounded-full"
              style={{ background: 'var(--bg-soft)', border: '1px solid var(--rule)' }}
              role="img"
              aria-label="Nivell de so en viu"
            >
              <div
                ref={barFillRef}
                className="absolute bottom-0 left-0 w-full rounded-full transition-[height] duration-150 ease-out"
                style={{ height: '0%', background: COLORS.green }}
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span
                ref={dotRef}
                className="h-5 w-5 rounded-full transition-colors duration-150"
                style={{ background: COLORS.green }}
                aria-hidden="true"
              />
              <span className="font-display text-xs tabular-nums" style={{ color: 'var(--muted)' }}>
                {readout.db != null ? `${readout.db} dB` : '—'}
              </span>
            </div>
          </div>

          {/* Llegenda de llindars del mode actiu */}
          <p className="mt-2 text-center text-[11px] leading-tight" style={{ color: 'var(--muted)' }}>
            🟢 ≤{mode.green} dB · 🟡 ≤{mode.amber} dB · 🔴 &gt;{mode.amber} dB
          </p>

          {/* Activar/aturar micròfon */}
          <button
            onClick={listening ? stop : start}
            className="mt-2 w-full rounded-xl px-3 py-1.5 text-xs font-semibold text-white transition-colors"
            style={{ background: listening ? 'var(--muted)' : 'var(--biome)' }}
          >
            {listening ? '⏹ Atura el micròfon' : '🎤 Activa el micròfon'}
          </button>

          {error && (
            <p className="mt-1.5 text-[11px] leading-tight" style={{ color: COLORS.red }}>
              {error}
            </p>
          )}

          <p className="mt-1.5 text-center text-[10px] leading-tight" style={{ color: 'var(--muted)' }}>
            Valors aproximats (no és un sonòmetre calibrat).
          </p>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
          style={{ background: 'var(--surface)', border: '1px solid var(--rule-strong)' }}
          aria-label="Obre el mesurador de so"
          title="Mesurador de so"
        >
          <span className="text-xl" aria-hidden="true">
            🔊
          </span>
        </button>
      )}
    </div>
  )
}
