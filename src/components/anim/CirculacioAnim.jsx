// Il·lustració animada de la doble circulació: petita circulació
// (cor → pulmons → cor) i gran circulació (cor → cos → cor).
// Punts vermells = sang oxigenada; punts blaus = sang desoxigenada.
export default function CirculacioAnim() {
  return (
    <svg
      viewBox="0 0 640 320"
      role="img"
      aria-label="Animació de la doble circulació: el cor bomba sang als pulmons i al cos"
      className="w-full max-w-xl mx-auto"
    >
      <style>{`
        .cir-label { font: 600 13px 'Fira Sans Extra Condensed', sans-serif; fill: #6b5e5e; letter-spacing: .05em; }
        .cir-organ { fill: rgba(139,26,26,0.18); stroke: #c0392b; stroke-width: 2.5; }
        .cir-path { fill: none; stroke-width: 3; opacity: .45; }
        @media (prefers-reduced-motion: reduce) { .cir-dot animateMotion { display: none; } }
      `}</style>

      {/* pulmons */}
      <ellipse className="cir-organ" cx="250" cy="55" rx="55" ry="32" />
      <ellipse className="cir-organ" cx="390" cy="55" rx="55" ry="32" />
      <text className="cir-label" x="290" y="60">PULMONS</text>

      {/* cor amb 4 cavitats */}
      <g>
        <rect x="270" y="130" width="100" height="80" rx="18" fill="rgba(139,26,26,0.5)" stroke="#f39c12" strokeWidth="3" />
        <line x1="320" y1="132" x2="320" y2="208" stroke="#f39c12" strokeWidth="3" />
        <line x1="272" y1="170" x2="368" y2="170" stroke="#f39c12" strokeWidth="2" strokeDasharray="4 4" />
        <text className="cir-label" x="282" y="158">AD</text>
        <text className="cir-label" x="340" y="158">AE</text>
        <text className="cir-label" x="282" y="198">VD</text>
        <text className="cir-label" x="340" y="198">VE</text>
      </g>

      {/* cos (músculs) */}
      <ellipse className="cir-organ" cx="320" cy="285" rx="110" ry="28" />
      <text className="cir-label" x="295" y="290">COS · MÚSCULS</text>

      {/* petita circulació: VD → pulmons (blau) i pulmons → AE (vermell) */}
      <path id="cir-p1" className="cir-path" stroke="#5fa8c4" d="M 295 130 C 290 95, 270 80, 250 80" />
      <path id="cir-p2" className="cir-path" stroke="#c44a52" d="M 390 80 C 370 80, 350 95, 345 130" />
      {/* gran circulació: VE → cos (vermell) i cos → AD (blau) */}
      <path id="cir-g1" className="cir-path" stroke="#c44a52" d="M 345 210 C 360 240, 380 255, 380 275" />
      <path id="cir-g2" className="cir-path" stroke="#5fa8c4" d="M 260 275 C 260 255, 280 240, 295 210" />

      {/* sang en moviment */}
      {[0, 1.3].map((d, i) => (
        <circle key={`p1${i}`} className="cir-dot" r="6" fill="#5fa8c4">
          <animateMotion dur="2.6s" begin={`${d}s`} repeatCount="indefinite">
            <mpath href="#cir-p1" />
          </animateMotion>
        </circle>
      ))}
      {[0.4, 1.7].map((d, i) => (
        <circle key={`p2${i}`} className="cir-dot" r="6" fill="#c44a52">
          <animateMotion dur="2.6s" begin={`${d}s`} repeatCount="indefinite">
            <mpath href="#cir-p2" />
          </animateMotion>
        </circle>
      ))}
      {[0.2, 1.5].map((d, i) => (
        <circle key={`g1${i}`} className="cir-dot" r="6" fill="#c44a52">
          <animateMotion dur="2.6s" begin={`${d}s`} repeatCount="indefinite">
            <mpath href="#cir-g1" />
          </animateMotion>
        </circle>
      ))}
      {[0.6, 1.9].map((d, i) => (
        <circle key={`g2${i}`} className="cir-dot" r="6" fill="#5fa8c4">
          <animateMotion dur="2.6s" begin={`${d}s`} repeatCount="indefinite">
            <mpath href="#cir-g2" />
          </animateMotion>
        </circle>
      ))}

      <text className="cir-label" x="120" y="105">PETITA CIRCULACIÓ</text>
      <text className="cir-label" x="430" y="245">GRAN CIRCULACIÓ</text>
    </svg>
  )
}
