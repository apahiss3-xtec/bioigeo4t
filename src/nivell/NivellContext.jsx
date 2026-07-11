import { createContext, useContext, useState } from 'react'

// 4t ESO — Nivell de diferenciació de la fitxa: NOMÉS 2 nivells, A i B.
// Internament A = Ampliació i B = Estàndard, però a la interfície només es
// mostra la LLETRA ("A"/"B"): les paraules no apareixen enlloc (regla d'Albert).
//   A — més autonomia, raonaments oberts, menys bastida
//   B — base per a la majoria; bastida que decreix al llarg del curs (scaffoldFade) ← per defecte
// No s'ha de confondre amb els nivells d'assoliment NA/AS/AN/AE de l'autoavaluació.
export const NIVELLS = ['A', 'B']
export const DEFAULT_NIVELL = 'B'

const STORAGE_KEY = 'portal-bio4t-nivell'

const NivellContext = createContext({ nivell: DEFAULT_NIVELL, setNivell: () => {} })

export function NivellProvider({ children }) {
  const [nivell, setNivellState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return NIVELLS.includes(saved) ? saved : DEFAULT_NIVELL
    } catch {
      return DEFAULT_NIVELL
    }
  })

  const setNivell = (n) => {
    if (!NIVELLS.includes(n)) return
    setNivellState(n)
    try {
      localStorage.setItem(STORAGE_KEY, n)
    } catch {
      // localStorage no disponible: ignorem
    }
  }

  return (
    <NivellContext.Provider value={{ nivell, setNivell }}>{children}</NivellContext.Provider>
  )
}

export const useNivell = () => useContext(NivellContext)

// Tria el contingut adequat al nivell actual. Accepta:
//   - un valor pla → es mostra a tots els nivells
//   - un objecte { A, B } → tria pel nivell (amb fallback B → A)
export const pickLevel = (value, nivell) => {
  if (value && typeof value === 'object' && !Array.isArray(value) &&
      ('A' in value || 'B' in value)) {
    return value[nivell] ?? value.B ?? value.A
  }
  return value
}
