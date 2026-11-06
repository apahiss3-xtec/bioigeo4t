import { asset } from '../utils.js'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import T from '../translate/T.jsx'

// Peces visuals de l'autoavaluació (estàndard i fàcil). Totes són opcionals i
// les activa la dada de cada SA (`figure`, `dades`, `chart`): una SA que no
// les declara es continua veient igual.
//
// `render` permet canviar com es pinta el text: per defecte passa per <T>
// (glossari i marques ==paraula==); la versió C hi passa `gem` (ela geminada).

const perDefecte = (t) => <T>{t}</T>

const NEUTRE = '#c9c0d3'
const ACCENT = 'var(--biome-accent)'
const TEXT_EIX = { fill: 'var(--muted)', fontSize: 12 }

// L'espai és no separable: recharts parteix les etiquetes pels espais, i en una
// barra curta el «6 %» quedava en dues línies.
const formata = (v, unitat) =>
  `${String(v).replace('.', ',')}${unitat ? ` ${unitat}` : ''}`

// Imatge amb peu. Una imatge ample es llegeix malament reduïda a l'amplada
// d'un mòbil: en pantalla estreta conserva una amplada mínima i es desplaça
// dins el seu marc, sense fer lliscar tota la pàgina.
export function Figura({ src, alt = '', caption, maxW, render = perDefecte }) {
  if (!src) return null
  return (
    <figure className="my-4">
      <div className="overflow-x-auto rounded-xl border border-[var(--rule)] bg-white p-2">
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          className={`mx-auto block h-auto w-full ${maxW ? '' : 'min-w-[520px] sm:min-w-0'}`}
          style={maxW ? { maxWidth: maxW } : undefined}
        />
      </div>
      {caption && (
        <figcaption className="mt-1.5 text-sm text-[var(--muted)]">{render(caption)}</figcaption>
      )}
    </figure>
  )
}

// Taula de dades. Un «?» a una cel·la indica el valor que ha de calcular qui respon.
export function TaulaDades({ caption, headers = [], rows = [], render = perDefecte }) {
  if (!rows.length) return null
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {caption && (
          <caption className="mb-1.5 text-start font-semibold">{render(caption)}</caption>
        )}
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`border-b-2 border-[var(--rule-strong)] px-3 py-2 font-semibold ${
                    i === 0 ? 'text-start' : 'text-center'
                  }`}
                >
                  {render(h)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((fila, r) => (
            <tr key={r} className="border-b border-[var(--rule)]">
              {fila.map((cel, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="px-3 py-2 text-start font-medium">
                    {render(String(cel))}
                  </th>
                ) : (
                  <td
                    key={c}
                    className={`px-3 py-2 text-center ${
                      cel === '?' ? 'font-bold text-[var(--biome-accent)]' : ''
                    }`}
                  >
                    {String(cel)}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Gràfic d'una sola sèrie: el títol ja la nomena, de manera que no porta
// llegenda. `destacat` marca la barra on cal mirar; la resta queda neutra.
//
// chart = { tipus: 'barres' | 'linia', titol, data: [{ name, value, destacat? }],
//           unitat, yMax, referencia: { value, label }, nota, horitzontal, serie }
export function Grafic({ chart, render = perDefecte }) {
  if (!chart?.data?.length) return null
  const {
    tipus = 'barres',
    titol,
    data,
    unitat = '',
    yMax,
    referencia,
    nota,
    horitzontal = false,
    serie = 'Valor'
  } = chart
  const fmt = (v) => formata(v, unitat)
  const hiHaDestacat = data.some((d) => d.destacat)
  const alcada = horitzontal ? data.length * 38 + 16 : 230
  const domini = [0, yMax ?? 'auto']
  // Amb un màxim fixat, recharts reparteix les marques de manera irregular
  // (0, 8, 16, 30): les donem nosaltres perquè l'eix es llegeixi de cop.
  const pas = yMax ? (yMax <= 50 ? 10 : yMax <= 100 ? 25 : yMax / 4) : null
  const marques = pas ? Array.from({ length: Math.floor(yMax / pas) + 1 }, (_, i) => i * pas) : undefined
  const tooltip = (
    <Tooltip
      formatter={(v) => [fmt(v), serie]}
      cursor={tipus === 'barres' ? { fill: 'rgba(124,58,237,0.06)' } : undefined}
      contentStyle={{ borderRadius: 8, fontSize: 13 }}
    />
  )

  const resum = data.map((d) => `${d.name}: ${fmt(d.value)}`).join('; ')

  return (
    <figure className="my-4 rounded-xl border border-[var(--rule)] bg-white p-3">
      {titol && <figcaption className="mb-2 text-sm font-semibold">{render(titol)}</figcaption>}
      <div role="img" aria-label={`${titol ? `${titol}. ` : ''}${resum}`}>
        <ResponsiveContainer width="100%" height={alcada}>
          {tipus === 'linia' ? (
            <LineChart data={data} margin={{ top: 22, right: 18, bottom: 0, left: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(74,63,63,0.10)" />
              <XAxis dataKey="name" tick={TEXT_EIX} tickLine={false} axisLine={{ stroke: 'rgba(74,63,63,0.25)' }} interval={0} padding={{ left: 36, right: 36 }} />
              <YAxis domain={domini} ticks={marques} width={34} tick={TEXT_EIX} tickLine={false} axisLine={false} />
              {tooltip}
              {referencia && (
                <ReferenceLine
                  y={referencia.value}
                  stroke="var(--muted)"
                  strokeDasharray="5 4"
                  label={{ value: referencia.label, position: 'insideTopRight', fill: 'var(--muted)', fontSize: 12 }}
                />
              )}
              <Line
                type="linear"
                dataKey="value"
                stroke={ACCENT}
                strokeWidth={2}
                dot={{ r: 5, fill: ACCENT, stroke: '#fff', strokeWidth: 2 }}
                activeDot={{ r: 7 }}
                isAnimationActive={false}
              >
                {/* Una mica a l'esquerra: en una línia que puja, l'etiqueta centrada queda travessada. */}
                <LabelList dataKey="value" position="top" dx={-12} formatter={fmt} style={{ fill: 'var(--text)', fontSize: 13, fontWeight: 600 }} />
              </Line>
            </LineChart>
          ) : horitzontal ? (
            <BarChart data={data} layout="vertical" margin={{ top: 0, right: 48, bottom: 0, left: 0 }}>
              <XAxis type="number" hide domain={domini} />
              <YAxis type="category" dataKey="name" width={124} tick={TEXT_EIX} tickLine={false} axisLine={{ stroke: 'rgba(74,63,63,0.25)' }} interval={0} />
              {tooltip}
              <Bar dataKey="value" barSize={18} radius={[0, 4, 4, 0]} isAnimationActive={false}>
                {data.map((d, i) => (
                  <Cell key={i} fill={!hiHaDestacat || d.destacat ? ACCENT : NEUTRE} />
                ))}
                <LabelList dataKey="value" position="right" formatter={fmt} style={{ fill: 'var(--text)', fontSize: 13, fontWeight: 600 }} />
              </Bar>
            </BarChart>
          ) : (
            <BarChart data={data} margin={{ top: 22, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(74,63,63,0.10)" />
              <XAxis dataKey="name" tick={TEXT_EIX} tickLine={false} axisLine={{ stroke: 'rgba(74,63,63,0.25)' }} interval={0} />
              <YAxis domain={domini} ticks={marques} width={34} tick={TEXT_EIX} tickLine={false} axisLine={false} />
              {tooltip}
              <Bar dataKey="value" barSize={38} radius={[4, 4, 0, 0]} isAnimationActive={false}>
                {data.map((d, i) => (
                  <Cell key={i} fill={!hiHaDestacat || d.destacat ? ACCENT : NEUTRE} />
                ))}
                <LabelList dataKey="value" position="top" formatter={fmt} style={{ fill: 'var(--text)', fontSize: 13, fontWeight: 600 }} />
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      {nota && <p className="mt-1.5 text-xs text-[var(--muted)]">{render(nota)}</p>}
    </figure>
  )
}

// Text amb salts de línia: cada línia és un paràgraf i, si comença per «a) »,
// la lletra es destaca. Serveix perquè una resposta model llarga no sigui un bloc.
export function Paragrafs({ text, render = perDefecte, className = 'text-sm' }) {
  const linies = String(text ?? '').split('\n').filter((l) => l.trim())
  if (linies.length < 2) return <p className={className}>{render(text)}</p>
  return (
    <div className="space-y-2">
      {linies.map((l, i) => {
        const m = l.match(/^([a-z])\)\s+(.*)$/s)
        return (
          <p key={i} className={className}>
            {m ? (
              <>
                <strong>{m[1]})</strong> {render(m[2])}
              </>
            ) : (
              render(l)
            )}
          </p>
        )
      })}
    </div>
  )
}
