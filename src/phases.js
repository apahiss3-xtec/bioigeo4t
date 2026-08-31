import { t } from './t.js'

// Etiqueta de fase (5E) de cada apartat del full.
//
// Viu aquí i no dins de cada component perquè el 31/08/2026 la revisió
// d'alumne va trobar que `SessionPage.jsx` i `FitxaGuide.jsx` en tenien
// dues taules diferents: el MATEIX apartat sortia com a «Aplica-ho» a la
// capçalera i com a «Materials» a la guia del full, i les fases "explain"
// i "evaluate" no tenien etiqueta enlloc.
//
// "explain" és una variant heretada d'"explica" (la fan servir SA6 i SA7).
const PHASE_KEY = {
  engage: 'session.engage',
  explore: 'session.explore',
  explica: 'session.explica',
  explain: 'session.explica',
  elabora: 'session.phaseElabora',
  evaluate: 'session.phaseEvaluate',
  prova: 'session.phaseProva'
}

export const phaseLabel = (phase) => (PHASE_KEY[phase] ? t(PHASE_KEY[phase]) : null)
