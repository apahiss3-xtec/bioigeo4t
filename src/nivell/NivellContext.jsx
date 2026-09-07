import { createContext, useContext, useState } from 'react'

// 4t ESO — Nivell de diferenciació de la fitxa: 3 nivells, A, B i C.
// Internament A = Ampliació, B = Estàndard i C = Adaptació, però a la interfície
// només es mostra la LLETRA: les paraules no apareixen enlloc (regla d'Albert).
//   A — més autonomia, raonaments oberts, menys bastida
//   B — base per a la majoria; bastida que decreix al llarg del curs (scaffoldFade) ← per defecte
//   C — bastida visual (04/09/2026, per als alumnes amb DIL): imatge + càpsula
//       «Per llegir» abans de cada pregunta, encercla amb opcions plausibles i el
//       mètode OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO per a l'escriptura.
//       Criteris: vault, «Nivell C - Criteris fitxes».
// No s'ha de confondre amb els nivells d'assoliment NA/AS/AN/AE de l'autoavaluació.
//
// ⚠️ De moment només la SA1 té materials C. A la resta de SA, `pickLevel` cau
// a la B (vegeu més avall) i `hasLevel` permet dir-ho a la interfície en
// comptes de fer passar una fitxa B per una C.
export const NIVELLS = ['A', 'B', 'C']
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

// Un valor és «per nivells» si és un objecte pla amb alguna clau A/B/C.
const esPerNivell = (value) =>
  !!value && typeof value === 'object' && !Array.isArray(value) &&
  ('A' in value || 'B' in value || 'C' in value)

// Tria el contingut adequat al nivell actual. Accepta:
//   - un valor pla → es mostra a tots els nivells
//   - un objecte { A, B, C } → tria pel nivell, amb fallback C → B → A
export const pickLevel = (value, nivell) => {
  if (esPerNivell(value)) {
    return value[nivell] ?? value.B ?? value.A
  }
  return value
}

// Diu si aquell nivell té contingut PROPI (no el que ve del fallback). La
// interfície l'ha de fer servir abans d'etiquetar res amb la lletra del nivell:
// si la SA encara no té materials C, val més dir-ho que no pas titular «Nivell C»
// una fitxa que és la B.
export const hasLevel = (value, nivell) =>
  esPerNivell(value) ? value[nivell] != null : value != null
