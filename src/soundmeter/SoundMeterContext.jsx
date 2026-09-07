import { createContext, useContext, useEffect, useState } from 'react'

// Estat compartit d'obertura del sonòmetre flotant. Cal que Layout el conegui
// per poder reservar espai a la dreta quan el panell és obert (si no, el panell
// (a la dreta) es solapa amb el text de la pàgina).
//
// El mesurador NOMÉS existeix en pantalles d'ordinador/tauleta: en mòbil no hi
// cap i no té sentit pedagògic (és una eina de gestió d'aula projectada). Per
// això el context exposa `enabled`, i Layout ni tan sols renderitza el widget
// quan és fals (així no s'obre el micròfon ni corre cap requestAnimationFrame).
const STORAGE_KEY = 'portal-bio-soundmeter-open'
const DESKTOP_QUERY = '(min-width: 768px)'

const SoundMeterContext = createContext({ open: false, setOpen: () => {}, enabled: false })

export function SoundMeterProvider({ children }) {
  const [openState, setOpenState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true
    return window.matchMedia(DESKTOP_QUERY).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia(DESKTOP_QUERY)
    const sync = (e) => setEnabled(e.matches)
    mq.addEventListener('change', sync)
    setEnabled(mq.matches)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const setOpen = (next) => {
    setOpenState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
    } catch {
      // localStorage no disponible: ignorem
    }
  }

  return (
    <SoundMeterContext.Provider value={{ open: enabled && openState, setOpen, enabled }}>
      {children}
    </SoundMeterContext.Provider>
  )
}

export const useSoundMeter = () => useContext(SoundMeterContext)
