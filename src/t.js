import ca from './locales/ca.json'

// La interfície és sempre en català. Aquest mòdul substitueix i18next:
// la "traducció" per a nouvinguts és el glossari per hover (src/translate/).
export const t = (key, params = {}) => {
  // Variant _one per a singulars (p. ex. homework.daysLeft_one)
  if (params.count === 1) {
    const one = resolve(`${key}_one`)
    if (one) return interpolate(one, params)
  }
  const value = resolve(key)
  return value ? interpolate(value, params) : key
}

const resolve = (key) =>
  key.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), ca)

const interpolate = (str, params) =>
  str.replace(/\{\{(\w+)\}\}/g, (_, name) => (params[name] !== undefined ? params[name] : ''))
