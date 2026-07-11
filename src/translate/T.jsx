import { useTranslate } from './TranslateContext.jsx'
import { PHRASES, WORDS, MAX_PHRASE_LEN } from './glossary.js'

const RTL_LANGS = ['ar', 'ur']

// Separa text en paraules (amb · i apòstrofs interns) i no-paraules
const TOKEN_RE = /(\p{L}+(?:[·'’]\p{L}+)*)/u

// ──────────────────────────────────────────────────────────
// Ressaltat de paraules clau (estètica IE Temple · component Word)
// Sintaxi al text de les dades:
//   ==paraula==        → ressaltat amb l'accent de la SA (bioma)
//   ==paraula|o==      → color explícit (o=taronja, p=porpra,
//                         g=verd, r=carmí, b=aigua, a=accent)
// ──────────────────────────────────────────────────────────
const HL_RE = /==(.+?)==/g

const HL_COLORS = {
  a: 'var(--biome-accent)',
  p: 'var(--purple-ink)',
  o: 'var(--orange)',
  g: '#3e7c4f',
  r: '#c0392b',
  b: '#1f8ad0'
}

// Divideix el text en trossos normals i ressaltats
const parseHighlights = (text) => {
  const out = []
  let last = 0
  let m
  HL_RE.lastIndex = 0
  while ((m = HL_RE.exec(text)) !== null) {
    if (m.index > last) out.push({ hl: false, text: text.slice(last, m.index) })
    let content = m[1]
    let color = 'a'
    const cm = content.match(/^(.*?)\|([apogrb])$/)
    if (cm) {
      content = cm[1]
      color = cm[2]
    }
    out.push({ hl: true, color, text: content })
    last = m.index + m[0].length
  }
  if (last < text.length) out.push({ hl: false, text: text.slice(last) })
  return out
}

// Normalitza una paraula per buscar-la al glossari:
// minúscules i sense article apostrofat inicial (l'aigua → aigua)
const normalizeWord = (w) => {
  let s = w.toLowerCase()
  const m = s.match(/^([ldsnmt]['’])(.+)$/)
  if (m) s = m[2]
  return s
}

// Busca una entrada per a una paraula sola (amb fallback de plural simple)
const lookupWord = (norm) => {
  if (WORDS.has(norm)) return WORDS.get(norm)
  if (norm.endsWith('s') && WORDS.has(norm.slice(0, -1))) return WORDS.get(norm.slice(0, -1))
  return null
}

// Tokenitza i marca coincidències (expressions senceres primer)
const segment = (text) => {
  const parts = text.split(TOKEN_RE)
  // parts alterna: [no-paraula, paraula, no-paraula, paraula, ...]
  const tokens = parts.map((value, i) => ({
    value,
    isWord: i % 2 === 1,
    norm: i % 2 === 1 ? normalizeWord(value) : null
  }))

  const out = []
  let i = 0
  while (i < tokens.length) {
    const tk = tokens[i]
    if (!tk.isWord) {
      out.push({ text: tk.value })
      i++
      continue
    }
    // 1) intenta una expressió de diverses paraules (la més llarga primer)
    let matched = null
    let consumed = 0
    outer: for (const phrase of PHRASES) {
      const need = phrase.words.length
      if (need > MAX_PHRASE_LEN) continue
      let j = i
      let count = 0
      let endIdx = i
      while (count < need && j < tokens.length) {
        if (tokens[j].isWord) {
          if (tokens[j].norm !== phrase.words[count]) continue outer
          count++
          endIdx = j
        } else if (!/^\s+$/.test(tokens[j].value)) {
          // entre paraules d'una expressió només admetem un espai simple
          continue outer
        }
        j++
      }
      if (count === need) {
        matched = phrase
        consumed = endIdx - i + 1
        break
      }
    }
    if (matched) {
      const original = tokens
        .slice(i, i + consumed)
        .map((t) => t.value)
        .join('')
      out.push({ text: original, entry: matched })
      i += consumed
      continue
    }
    // 2) paraula sola
    const entry = lookupWord(tk.norm)
    out.push({ text: tk.value, entry: entry || undefined })
    i++
  }
  return out
}

// Renderitza un tros de text aplicant els tooltips del glossari
// (només quan hi ha idioma d'ajuda actiu)
const renderGloss = (text, helpLang, rtl, keyBase) => {
  const segments = segment(text)
  return segments.map((seg, i) =>
    seg.entry && seg.entry[helpLang] ? (
      <span
        key={`${keyBase}-${i}`}
        className={`gloss ${rtl ? 'gloss-rtl' : ''}`}
        tabIndex={0}
        data-tip={seg.entry[helpLang]}
      >
        {seg.text}
      </span>
    ) : (
      <span key={`${keyBase}-${i}`}>{seg.text}</span>
    )
  )
}

// Component de text traduïble:
// · sempre mostra el català i ressalta les paraules marcades amb ==…==
// · si hi ha idioma d'ajuda actiu, les paraules conegudes mostren la
//   traducció en un tooltip en passar-hi per sobre (o amb el teclat).
export default function T({ children }) {
  const { helpLang } = useTranslate()
  const text = typeof children === 'string' ? children : null

  if (text === null) return children

  const hasHL = text.includes('==')

  // Camí ràpid: ni ressaltat ni idioma d'ajuda → text pla
  if (!hasHL && !helpLang) return text

  const rtl = helpLang ? RTL_LANGS.includes(helpLang) : false
  const parts = hasHL ? parseHighlights(text) : [{ hl: false, text }]

  return (
    <>
      {parts.map((p, i) => {
        const inner = helpLang ? renderGloss(p.text, helpLang, rtl, `p${i}`) : p.text
        if (!p.hl) return <span key={i}>{inner}</span>
        return (
          <span key={i} className="word-hl" style={{ '--hl-color': HL_COLORS[p.color] || HL_COLORS.a }}>
            {inner}
          </span>
        )
      })}
    </>
  )
}
