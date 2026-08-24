import ca from './locales/ca.json'

// La interfície és sempre en català. Aquest mòdul substitueix i18next:
// la "traducció" per a nouvinguts és el glossari per hover (src/translate/).
//
// ⚠️ `locales/es.json`, `ar.json` i `ur.json` NO s'importen enlloc: són codi
// mort heretat del clon de 3r d'ESO i editar-los no canvia res. Vegeu
// `locales/README.md`. La traducció real es fa a `translate/glossary.js`.
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
