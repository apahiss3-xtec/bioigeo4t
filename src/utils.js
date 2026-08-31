// Resol rutes d'assets respectant la base de Vite ('./' per a
// GitHub Pages i Netlify). Les dades usen rutes absolutes (/images/...).
export const asset = (path) => {
  if (!path) return path
  return import.meta.env.BASE_URL + String(path).replace(/^\//, '')
}

// Minuts d'un apartat SEGONS EL NIVELL triat.
//
// Els fitxers de sessió escriuen el temps del nivell B i, si el nivell A en
// fa uns altres, els posen entre parèntesis: "25 min (A: 30)". La guia del
// web és única per als dos nivells, i fins al 31/08/2026 ensenyava la
// cadena sencera: qui és de B llegia un número seu i un altre etiquetat amb
// una lletra que no és la seva, i qui és d'A havia de saber que el número
// de fora no li tocava. Pitjor encara, el nivell A tant pot durar MÉS com
// MENYS que el B segons l'apartat, o sigui que no hi havia cap regla que
// es pogués deduir. Ara el selector A/B també canvia els minuts i només
// se'n mostra un.
//
// Formats que NO es toquen (no porten "(A: …)"): "25 min + 8 de defensa
// oral", "20 min a classe (s'acaba a casa)".
export const tempsNivell = (time, nivell = 'B') => {
  if (!time) return time
  const m = String(time).match(/^(.*?)\s*\(A:\s*(\d+)\s*\)\s*$/)
  if (!m) return time
  if (nivell !== 'A') return m[1]
  // Conserva el que hi hagi després dels minuts del nivell B
  // ("35 min a classe (A: 30)" → "30 min a classe").
  const sufix = m[1].replace(/^\s*\d+\s*min\s*/, '')
  return `${m[2]} min${sufix ? ' ' + sufix : ''}`
}

// Permutació DETERMINISTA de n elements a partir d'una llavor de text.
//
// Serveix per barrejar les opcions de les preguntes de resposta múltiple
// (test de transferència i exit tiquets) sense tocar cap dada dels fitxers
// de sessió. Motiu (2026-08-18): en auditar el material acabat es va veure
// que qui redacta tendeix a escriure primer la resposta correcta i a
// fer-la més llarga i completa que els distractors. Als exit tiquets, 19
// de 29 preguntes tenien la correcta a la posició a) i cap a la d); al
// test de transferència passava a les 28. Amb això, marcar sempre la
// primera opció ja donava una part important dels encerts sense llegir res.
// Repartir-les a mà arregla el material d'avui però no evita que el biaix
// torni amb material nou; barrejar-les aquí sí.
//
// La permutació surt d'un hash FNV-1a de la llavor i d'un LCG, no de
// Math.random(): la mateixa pregunta ensenya SEMPRE les opcions en el
// mateix ordre, per a tothom i a cada visita. Això importa perquè a classe
// es pugui parlar de «la resposta b)» sense que cadascú en vegi una de
// diferent, i perquè cap re-render (triar una opció, canviar d'idioma amb
// <T>) no reordeni les opcions sota el dit de qui està responent.
export const permutacioEstable = (seed, n) => {
  let h = 2166136261
  const s = String(seed)
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  let state = (h >>> 0) || 1
  const next = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0
    return state / 4294967296
  }
  const idx = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1))
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  return idx
}

// Dies restants fins a una data ISO (YYYY-MM-DD). Retorna null si la
// data no és vàlida o conté placeholders (p. ex. "2026-09-XX").
export const daysUntil = (isoDate) => {
  if (!isoDate || /X/i.test(isoDate)) return null
  const target = new Date(`${isoDate}T23:59:59`)
  if (Number.isNaN(target.getTime())) return null
  const now = new Date()
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24))
}
