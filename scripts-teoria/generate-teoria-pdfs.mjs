// Generador de PDFs de teoria de 4t ESO (SA2–SA4) — IE Temple
// Llegeix directament les dades de sessió (theoryPoints/graphicResources) i genera
// un PDF compacte i visual per a cada sessió, amb Playwright (Chromium headless).
import { chromium } from 'playwright-core'
import { pathToFileURL, fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const webRoot = path.resolve(__dirname, '..')
const publicDir = path.join(webRoot, 'public')
const outDir = path.join(publicDir, 'teoria')
fs.mkdirSync(outDir, { recursive: true })

const SITE = 'https://templeobert.cat/bio-geo-4t/'
const framesDir = path.join(__dirname, 'frames')
const sessionUrl = (s) => `${SITE}#/sa/${s.saId}/${s.id}`
const plain = (t) => String(t || '').replace(/==/g, '').replace(/\|[apogrb]/g, '')

// Fotograma d'una animació HyperFrames (extret dels MP4 de public/animacions) com a miniatura
function frameFor (video) {
  if (!video) return null
  const f = path.join(framesDir, path.basename(video, '.mp4') + '.jpg')
  return fs.existsSync(f) ? `data:image/jpeg;base64,${fs.readFileSync(f).toString('base64')}` : null
}

// Avís clicable: el full és de paper, la peça interactiva viu al web
function webNote (kind, session, label, frame) {
  const what = kind === 'app' ? 'una app interactiva' : 'una animació'
  const thumb = frame ? `<span class="wn-thumb"><img src="${frame}" alt="" /><i>▶</i></span>` : `<span class="wn-ico">${kind === 'app' ? '🧪' : '▶'}</span>`
  return `<a class="web-note" href="${sessionUrl(session)}">${thumb}<span class="wn-txt"><b>Per entendre-ho millor</b>: tens ${what} al web — <b>${escapeHtml(session.saLabelShort)}, sessió ${session.sessionNumber}</b>${label ? ` (${escapeHtml(label)})` : ''}.<em>templeobert.cat/bio-geo-4t</em></span></a>`
}

const SA_LABEL = { sa2: 'La cèl·lula', sa3: 'El codi de la vida', sa4: 'Herència: el que passa de pares a fills' }
// Color = color.primary de data/saN/index.js (el fons és blanc: el primary té prou contrast com a text)
const SA_ACCENT = { sa2: '#7B3F9E', sa3: '#2E4A9E', sa4: '#1E7A70' }
const SA_ACCENT_SOFT = { sa2: 'rgba(123,63,158,0.08)', sa3: 'rgba(46,74,158,0.08)', sa4: 'rgba(30,122,112,0.08)' }

const HL_COLORS = {
  a: null, // es resol per SA
  p: '#7c3aed',
  o: '#e8872e',
  g: '#3e7c4f',
  r: '#c0392b',
  b: '#1f8ad0'
}

const TYPE_META = {
  keyequation: { label: '⭐ Idea clau', border: (a) => a },
  epistemic: { label: null, border: () => '#e8872e' },
  synthesis: { label: '🔄 Síntesi', border: () => '#7c3aed' },
  concept: { label: null, border: (a) => 'rgba(74,63,63,0.14)' },
  transfer: { label: '🔗 Connexió', border: (a) => a }
}

function escapeHtml (str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function hexToRgba (hex, alpha) {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

// Replica la sintaxi ==paraula== / ==paraula|x== de src/translate/T.jsx
function renderHighlighted (text, accentHex) {
  if (!text) return ''
  const escaped = escapeHtml(text).replace(/&lt;em&gt;(.*?)&lt;\/em&gt;/g, '<em>$1</em>')
  const HL_RE = /==(.+?)==/g
  let out = ''
  let last = 0
  let m
  while ((m = HL_RE.exec(escaped)) !== null) {
    if (m.index > last) out += escaped.slice(last, m.index)
    let content = m[1]
    let colorCode = 'a'
    const cm = content.match(/^(.*?)\|([apogrb])$/)
    if (cm) {
      content = cm[1]
      colorCode = cm[2]
    }
    const color = colorCode === 'a' ? accentHex : HL_COLORS[colorCode] || accentHex
    out += `<span class="hl" style="background:${hexToRgba(color, 0.22)}">${content}</span>`
    last = m.index + m[0].length
  }
  if (last < escaped.length) out += escaped.slice(last)
  return out
}

const MIME_BY_EXT = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.gif': 'image/gif' }

function resolveAsset (src) {
  if (!src) return null
  const rel = src.replace(/^\//, '')
  const abs = path.join(publicDir, rel)
  if (!fs.existsSync(abs)) {
    console.warn(`  ⚠ imatge no trobada, s'omet: ${src}`)
    return null
  }
  const mime = MIME_BY_EXT[path.extname(abs).toLowerCase()] || 'application/octet-stream'
  const b64 = fs.readFileSync(abs).toString('base64')
  return `data:${mime};base64,${b64}`
}

function apartatKey (v) {
  if (v === undefined || v === null || v === '') return 9999
  const n = Number(v)
  return Number.isNaN(n) ? 9998 : n
}

function imageCard (res, accent, session) {
  const url = res.embed ? null : resolveAsset(res.src)
  const titleHtml = renderHighlighted(res.title || '', accent)
  const noteHtml = res.note ? `<span class="note">${renderHighlighted(res.note, accent)}</span>` : ''
  return `<figure class="card img-card">
    ${url ? `<img src="${url}" alt="${escapeHtml(res.title || '')}" />` : ''}
    <figcaption><strong>${escapeHtml(res.id || '')}</strong>${res.id ? ' — ' : ''}${titleHtml}${noteHtml ? `<br/>${noteHtml}` : ''}${(res.embed || /animació/i.test(res.title || '')) ? webNote('video', session, '', null) : ''}</figcaption>
  </figure>`
}

function textCard (tp, accent, session) {
  const meta = TYPE_META[tp.type] || TYPE_META.concept
  const borderColor = meta.border(accent)
  const chipText = tp.badge || meta.label
  const chip = chipText ? `<div class="chip">${escapeHtml(chipText)}</div>` : ''
  const dashed = tp.type === 'epistemic' ? ' dashed' : ''
  const formula = tp.formula
    ? `<div class="formula" style="border-color:${accent}">${escapeHtml(tp.formula)}</div>`
    : ''
  const inlineImg = tp.image && !tp.imageWide ? (() => {
    const url = resolveAsset(tp.image)
    return url ? `<img class="inline-img" src="${url}" alt="" />` : ''
  })() : ''
  // imageWide: figura gran (moltes etiquetes): no cap en una columna, va a pàgina completa al final
  const wideRef = tp.image && tp.imageWide
    ? `<div class="wide-ref">→ Figura a continuació: ${escapeHtml(tp.imageTitle || 'esquema')}</div>`
    : ''
  return `<div class="card text-card${dashed}" style="border-left-color:${borderColor}">
    ${chip}
    <h3>${renderHighlighted(tp.heading, accent)}</h3>
    <p>${renderHighlighted(tp.text, accent)}</p>
    ${formula}
    ${inlineImg}
    ${wideRef}
    ${tp.video ? webNote('video', session, plain(tp.heading), frameFor(tp.video)) : ''}
  </div>`
}

function buildHtml (session) {
  session.saLabelShort = session.saId.toUpperCase()
  const accent = SA_ACCENT[session.saId]
  const accentSoft = SA_ACCENT_SOFT[session.saId]
  const saLabel = SA_LABEL[session.saId]
  const theoryPoints = session.theoryPoints || []
  // Les figures «versió C» són bastides de fitxa, no teoria: fora del PDF
  const graphicResources = (session.graphicResources || []).filter((r) => !/versió C/i.test(r.title || ''))

  const groups = new Map()
  const addToGroup = (apartat, html) => {
    const key = apartatKey(apartat)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(html)
  }
  for (const tp of theoryPoints) addToGroup(tp.apartat, textCard(tp, accent, session))
  // Figures grans: ocupen tot l'ample però just després del bloc d'apartat que les cita (no pàgina sencera)
  const wideByKey = new Map()
  for (const tp of theoryPoints.filter((t) => t.image && t.imageWide)) {
    const url = resolveAsset(tp.image)
    if (!url) continue
    const cap = tp.imageCaption ? `<figcaption>${renderHighlighted(tp.imageCaption, accent)}</figcaption>` : ''
    const title = tp.imageTitle ? `<div class="wide-title" style="color:${accent}">${escapeHtml(tp.imageTitle)}</div>` : ''
    const k = apartatKey(tp.apartat)
    if (!wideByKey.has(k)) wideByKey.set(k, [])
    wideByKey.get(k).push(`<figure class="wide-fig">${title}<img src="${url}" alt="" />${cap}</figure>`)
  }
  for (const res of graphicResources) addToGroup(res.apartat, imageCard(res, accent, session))

  const sortedKeys = [...groups.keys()].sort((a, b) => a - b)
  const multipleGroups = sortedKeys.filter((k) => k < 9998).length > 1

  const body = sortedKeys.map((key) => {
    const list = groups.get(key)
    const figs = (wideByKey.get(key) || []).join('\n')
    if (key >= 9998 || !multipleGroups) return list.join('\n') + figs
    // La xapa d'apartat va dins del mateix bloc que el primer element: així no queda orfe al final d'una columna
    const [first, ...rest] = list
    return `<div class="apartat-first"><div class="apartat-chip">Apartat ${key}</div>${first}</div>${rest.join('\n')}${figs}`
  }).join('\n')

  return `<!doctype html>
<html lang="ca">
<head>
<meta charset="utf-8" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Quicksand:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #fff; color: #4a3f3f; font-family: 'Quicksand', sans-serif; }
  body { font-size: 10px; line-height: 1.42; }

  .hero {
    background: linear-gradient(135deg, ${accentSoft}, transparent 70%);
    border-bottom: 2.5px solid ${accent};
    padding: 3mm 0 3mm 0;
    margin-bottom: 4mm;
  }
  .kicker {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-size: 8px;
    font-weight: 700;
    color: ${accent};
  }
  .hero-row { display: flex; align-items: baseline; justify-content: space-between; margin-top: 1mm; }
  .hero h1 {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 700;
    font-size: 19px;
    line-height: 1.1;
    margin: 0;
    letter-spacing: -0.01em;
    max-width: 155mm;
  }
  .hero .duration {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: #6b5e5e;
    white-space: nowrap;
  }
  .hero .sess {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #6b5e5e;
    margin-top: 0.5mm;
  }

  .flow { column-count: 2; column-gap: 6mm; }

  .apartat-first { break-inside: avoid-column; }
  .apartat-chip {
    break-after: avoid-column;
    break-inside: avoid-column;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 700;
    font-size: 9.5px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #fff;
    background: ${accent};
    display: inline-block;
    padding: 1.2mm 3mm;
    border-radius: 3mm;
    margin: 2mm 0 2mm 0;
  }

  .card {
    break-inside: avoid-column;
    margin: 0 0 3.2mm 0;
    padding: 2.4mm 3mm;
    background: #fff;
    border-radius: 2mm;
    box-shadow: 0 1px 2px rgba(74,63,63,0.08);
  }
  .text-card { border-left: 3px solid; }
  .text-card.dashed { border-left-style: dashed; background: ${accentSoft}; }
  .text-card h3 {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 12.5px;
    font-weight: 700;
    line-height: 1.15;
    margin: 0.5mm 0 1mm 0;
  }
  .text-card p { margin: 0; font-size: 9.5px; }
  .chip {
    display: inline-block;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 7.5px;
    font-weight: 600;
    color: #6b5e5e;
    background: rgba(74,63,63,0.07);
    border-radius: 2mm;
    padding: 0.6mm 2mm;
    margin-bottom: 1mm;
  }
  .formula {
    margin-top: 1.5mm;
    text-align: center;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 600;
    font-size: 10.5px;
    background: #f6f1fa;
    border: 1.2px dashed;
    border-radius: 1.5mm;
    padding: 1.2mm;
  }
  .inline-img {
    display: block;
    width: 100%;
    height: 30mm;
    object-fit: contain;
    margin-top: 1.5mm;
    border-radius: 1.5mm;
  }

  .wide-ref { margin-top: 1.5mm; font-size: 9px; font-weight: 600; font-style: italic; color: #6b5e5e; }
  .wide-title { font-family: 'Fira Sans Extra Condensed', sans-serif; font-weight: 700; font-size: 11.5px; text-align: left; margin-bottom: 1.5mm; }
  .wide-fig {
    column-span: all;
    break-inside: avoid;
    margin: 1mm 0 4mm 0;
    border: 1px solid rgba(74,63,63,0.12);
    border-radius: 1.5mm;
    padding: 2mm 3mm;
    text-align: center;
  }
  .wide-fig img { display: block; width: auto; max-width: 100%; max-height: 70mm; margin: 0 auto; object-fit: contain; }
  .wide-fig figcaption { font-size: 8.5px; color: #6b5e5e; text-align: left; line-height: 1.3; margin-top: 1.5mm; }

  .web-note {
    display: flex; align-items: center; gap: 2.5mm;
    margin: 2mm 0 0 0; padding: 1.6mm 2.4mm;
    border: 1.2px solid ${accent}; border-radius: 2mm;
    background: ${accentSoft}; color: #4a3f3f; text-decoration: none;
    font-size: 8.5px; line-height: 1.3; break-inside: avoid;
  }
  .web-note b { color: ${accent}; }
  .web-note em { display: block; font-style: normal; font-size: 7.5px; color: #6b5e5e; margin-top: 0.4mm; }
  .wn-thumb { position: relative; flex: 0 0 26mm; }
  .wn-thumb img { display: block; width: 26mm; height: auto; border: 1px solid rgba(74,63,63,0.2); border-radius: 1mm; }
  .wn-thumb i { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 6mm; height: 6mm; line-height: 6mm; text-align: center; font-style: normal; font-size: 8px; color: #fff; background: ${accent}; border-radius: 50%; opacity: 0.92; }
  .wn-ico { flex: 0 0 auto; font-size: 13px; }
  .hero + .web-note { margin: 0 0 3mm 0; }
  .img-card .web-note { text-align: left; margin-top: 1.2mm; }

  .img-card { border: 1px solid rgba(74,63,63,0.12); text-align: center; }
  .img-card img {
    display: block;
    width: 100%;
    max-height: 42mm;
    object-fit: contain;
    margin-bottom: 1mm;
    border-radius: 1mm;
  }
  .img-card figcaption { font-size: 8px; color: #6b5e5e; text-align: left; line-height: 1.3; }
  .img-card figcaption strong { color: ${accent}; }
  .img-card .note { font-style: italic; }

  .hl {
    color: #4a3f3f;
    font-weight: 600;
    padding: 0 0.18em;
    border-radius: 0.3em;
  }
</style>
</head>
<body>
  <div class="hero">
    <div class="kicker">IE Temple · Biologia i Geologia 4t ESO · ${escapeHtml(saLabel)}</div>
    <div class="hero-row">
      <div>
        <div class="sess">Sessió ${session.sessionNumber} · Teoria</div>
        <h1>${renderHighlighted(session.title, accent)}</h1>
      </div>
    </div>
  </div>
  ${session.appSrc ? webNote('app', session, 'apartat Explora', null) : ''}
  <div class="flow">
    ${body}
  </div>
</body>
</html>`
}

const SA_SESSIONS = { sa2: 4, sa3: 4, sa4: 5 }
// Ús: node generate-teoria-pdfs.mjs [sa3 sa4 ...]  (sense arguments: totes)
const only = process.argv.slice(2)
const SESSIONS = Object.entries(SA_SESSIONS)
  .filter(([saId]) => !only.length || only.includes(saId))
  .flatMap(([saId, n]) => Array.from({ length: n }, (_, i) => ({ saId, id: `s${i + 1}` })))

async function main () {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  for (const { saId, id } of SESSIONS) {
    const modPath = path.join(webRoot, 'src', 'data', saId, `${id}.js`)
    const mod = await import(pathToFileURL(modPath).href)
    const exportName = `${saId}${id}`
    const session = mod[exportName]
    if (!session) {
      console.error(`✗ No s'ha trobat l'export ${exportName} a ${modPath}`)
      continue
    }
    const html = buildHtml(session)
    await page.setContent(html, { waitUntil: 'networkidle' })
    await page.evaluate(() => Promise.all(
      Array.from(document.images).map(img => img.decode().catch(() => {}))
    ))
    const outPath = path.join(outDir, `${saId}-${id}-teoria.pdf`)
    await page.pdf({
      path: outPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '8mm', bottom: '13mm', left: '10mm', right: '10mm' },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `<div style="font-size:7px;width:100%;text-align:center;color:#9b8f8f;">IE Temple · Biologia i Geologia 4t ESO — <span class="pageNumber"></span>/<span class="totalPages"></span></div>`
    })
    const pageCount = await getPdfPageCount(outPath)
    console.log(`✓ ${saId}-${id}-teoria.pdf (${pageCount} pàg.)`)
  }

  await browser.close()
}

async function getPdfPageCount (filePath) {
  const buf = fs.readFileSync(filePath)
  const matches = buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g)
  return matches ? matches.length : '?'
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
