import { useEffect, useRef, useState } from 'react'

// Temporitzador d'aula: es fixa en el moment (min/seg o presets),
// botó per començar el compte enrere i una petita musiqueta en acabar.
// Tot client-side, sense dependències externes (Web Audio API).
// Hi ha activitats d'ABP de 45, 50, 55 i 60 min (fira de casos, coavaluació,
// laboratori): sense presets llargs, clicar-ne un feia perdre el temps fixat
// per l'activitat i s'havia de tornar a pujar de minut en minut.
const PRESETS = [5, 10, 15, 20, 30, 45, 60]

const pad = (n) => String(n).padStart(2, '0')

// Acord ascendent agradable quan s'acaba el temps.
function playChime() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    const now = ctx.currentTime
    const notes = [523.25, 659.25, 783.99, 1046.5] // C5 E5 G5 C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      const start = now + i * 0.18
      gain.gain.setValueAtTime(0.0001, start)
      gain.gain.exponentialRampToValueAtTime(0.25, start + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.55)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(start)
      osc.stop(start + 0.6)
    })
    setTimeout(() => ctx.close(), 1800)
  } catch {
    /* silenci si el navegador no ho permet */
  }
}

export default function Timer({ minutes = 10 }) {
  const initial = Math.max(1, Math.round(minutes)) * 60
  const [total, setTotal] = useState(initial) // segons fixats
  const [left, setLeft] = useState(initial) // segons restants
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const ref = useRef(null)

  // Si canvia el temps de l'activitat (p. ex. en canviar de nivell A/B, que
  // a algunes sessions dura més o menys), el rellotge s'ha de refixar sol:
  // sense això la capçalera deia 47 min i el cronòmetre es quedava a 40:00
  // fins que es recarregava la pàgina.
  useEffect(() => {
    setRunning(false)
    setDone(false)
    setTotal(initial)
    setLeft(initial)
  }, [initial])

  // Tic del compte enrere.
  useEffect(() => {
    if (!running) return
    ref.current = setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          clearInterval(ref.current)
          setRunning(false)
          setDone(true)
          playChime()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(ref.current)
  }, [running])

  const setMinutes = (m) => {
    const secs = Math.max(60, Math.round(m) * 60)
    setRunning(false)
    setDone(false)
    setTotal(secs)
    setLeft(secs)
  }

  const bump = (deltaMin) => setMinutes(Math.max(1, total / 60 + deltaMin))

  const toggle = () => {
    if (left === 0) {
      setLeft(total)
      setDone(false)
      setRunning(true)
      return
    }
    setDone(false)
    setRunning((r) => !r)
  }

  const reset = () => {
    setRunning(false)
    setDone(false)
    setLeft(total)
  }

  const mm = Math.floor(left / 60)
  const ss = left % 60
  const pct = total > 0 ? (left / total) * 100 : 0

  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        borderColor: 'var(--rule-strong)',
        background: done ? 'color-mix(in oklab, var(--biome) 12%, var(--surface))' : 'var(--surface)'
      }}
    >
      <div className="flex flex-wrap items-center gap-4">
        {/* Display */}
        <div className="flex items-baseline gap-1 tabular-nums">
          <span
            className="font-display font-bold leading-none"
            style={{ fontSize: '2.6rem', color: done ? 'var(--biome)' : 'var(--text)' }}
            aria-live="polite"
          >
            {pad(mm)}:{pad(ss)}
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-xl px-4 py-2 font-display font-semibold text-white transition-colors"
            style={{ background: 'var(--biome)' }}
          >
            {running ? '⏸ Pausa' : left === 0 ? '↻ Repeteix' : '▶ Comença'}
          </button>
          <button
            onClick={reset}
            className="rounded-xl border px-3 py-2 text-sm font-semibold transition-colors hover:bg-[var(--bg-soft)]"
            style={{ borderColor: 'var(--rule-strong)', color: 'var(--muted)' }}
          >
            ↺ Reinicia
          </button>
        </div>
      </div>

      {/* Barra de progrés */}
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full" style={{ background: 'var(--bg-soft)' }}>
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-linear"
          style={{ width: `${pct}%`, background: 'var(--biome)' }}
        />
      </div>

      {/* Fixar el temps: − [presets] + en una sola fila (no es trenca) */}
      <div className="mt-3 flex items-center gap-1.5 overflow-x-auto">
        <button
          onClick={() => bump(-1)}
          className="h-7 w-7 shrink-0 rounded-full border text-base font-bold leading-none hover:bg-[var(--bg-soft)]"
          style={{ borderColor: 'var(--rule-strong)', color: 'var(--muted)' }}
          aria-label="Un minut menys"
        >
          −
        </button>
        {PRESETS.map((m) => (
          <button
            key={m}
            onClick={() => setMinutes(m)}
            className="shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors"
            style={
              total / 60 === m
                ? { background: 'var(--biome)', color: '#fff', borderColor: 'var(--biome)' }
                : { borderColor: 'var(--rule-strong)', color: 'var(--muted)' }
            }
          >
            {m}′
          </button>
        ))}
        <button
          onClick={() => bump(1)}
          className="h-7 w-7 shrink-0 rounded-full border text-base font-bold leading-none hover:bg-[var(--bg-soft)]"
          style={{ borderColor: 'var(--rule-strong)', color: 'var(--muted)' }}
          aria-label="Un minut més"
        >
          +
        </button>
        {done && <span className="ms-1 shrink-0 text-sm font-semibold" style={{ color: 'var(--biome)' }}>⏰ Temps!</span>}
      </div>
    </div>
  )
}
