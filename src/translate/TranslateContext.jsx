import { createContext, useContext, useState } from 'react'

// Idioma d'ajuda actiu (null = desactivat, la web sempre és en català).
// Quan és actiu, les paraules del glossari mostren la traducció en hover.
const TranslateContext = createContext({ helpLang: null, setHelpLang: () => {} })

const STORAGE_KEY = 'portal-bio-helplang'

export function TranslateProvider({ children }) {
  const [helpLang, setHelpLangState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || null
    } catch {
      return null
    }
  })

  const setHelpLang = (lang) => {
    setHelpLangState(lang)
    try {
      if (lang) localStorage.setItem(STORAGE_KEY, lang)
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      // localStorage no disponible: ignorem
    }
  }

  return (
    <TranslateContext.Provider value={{ helpLang, setHelpLang }}>
      {children}
    </TranslateContext.Provider>
  )
}

export const useTranslate = () => useContext(TranslateContext)
