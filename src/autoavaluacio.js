import { t } from './t.js'

// ── Textos de la pàgina d'autoavaluació segons si la SA té prova pròpia ──
// La majoria de SA de 4t acaben amb la prova final i la pàgina es diu
// «Autoavaluació pre-examen». Les SA SENSE prova escrita pròpia ho declaren
// a les seves dades amb `teProva: false` (data/saN/index.js) i reben els
// textos de `auto.senseProva.*` (locales/ca.json): cap referència a «la prova».
// Decisió d'Albert (24/09/2026) per a la SA1. No fer servir `sa.id` aquí.
export const ambProva = (sa) => sa?.teProva !== false

export const tAuto = (sa, key, params) => {
  if (!ambProva(sa)) {
    const k = `auto.senseProva.${key}`
    const v = t(k, params)
    if (v !== k) return v
  }
  return t(`auto.${key}`, params)
}
