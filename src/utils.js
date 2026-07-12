// Resol rutes d'assets respectant la base de Vite ('./' per a
// GitHub Pages i Netlify). Les dades usen rutes absolutes (/images/...).
export const asset = (path) => {
  if (!path) return path
  return import.meta.env.BASE_URL + String(path).replace(/^\//, '')
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
