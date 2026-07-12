// Il·lustració animada de la divisió cel·lular (mitosi, funció-primer):
// una cèl·lula mare es divideix en dues filles idèntiques, en bucle.
export default function DivisioAnim() {
  return (
    <svg
      viewBox="0 0 640 240"
      role="img"
      aria-label="Animació de divisió cel·lular: una cèl·lula mare esdevé dues filles idèntiques"
      className="w-full max-w-xl mx-auto"
    >
      <style>{`
        .div-cell { fill: rgba(124,58,237,0.16); stroke: #8b5cf6; stroke-width: 3; }
        .div-chrom { stroke: #7c3aed; stroke-width: 5; stroke-linecap: round; }
        .div-label { font: 600 13px 'Fira Sans Extra Condensed', sans-serif; fill: #6b5e5e; letter-spacing: .05em; }
        @keyframes div-stretch {
          0%, 15% { rx: 70; }
          45% { rx: 120; }
          70%, 100% { rx: 120; }
        }
        .div-mare { animation: div-stretch 6s ease-in-out infinite; }
        @keyframes div-pinch {
          0%, 45% { transform: scaleY(0); opacity: 0; }
          60% { transform: scaleY(1); opacity: 1; }
          75%, 100% { transform: scaleY(1); opacity: 1; }
        }
        .div-septe { animation: div-pinch 6s ease-in-out infinite; transform-origin: 320px 120px; }
        @keyframes div-left { 0%, 15% { transform: translateX(0); } 45%, 100% { transform: translateX(-52px); } }
        @keyframes div-right { 0%, 15% { transform: translateX(0); } 45%, 100% { transform: translateX(52px); } }
        .div-cl { animation: div-left 6s ease-in-out infinite; }
        .div-cr { animation: div-right 6s ease-in-out infinite; }
        @keyframes div-fade { 0%, 80% { opacity: 0; } 90%, 100% { opacity: 1; } }
        .div-dues { animation: div-fade 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .div-mare, .div-septe, .div-cl, .div-cr, .div-dues { animation: none; }
        }
      `}</style>

      {/* cèl·lula mare que s'estira */}
      <ellipse className="div-cell div-mare" cx="320" cy="120" rx="70" ry="62" />

      {/* septe de citocinesi */}
      <line className="div-septe" x1="320" y1="62" x2="320" y2="178" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="6 6" />

      {/* material genètic separant-se (sense noms de fase) */}
      <g className="div-cl">
        <line className="div-chrom" x1="305" y1="100" x2="320" y2="125" />
        <line className="div-chrom" x1="320" y1="100" x2="305" y2="125" />
      </g>
      <g className="div-cr">
        <line className="div-chrom" x1="320" y1="115" x2="335" y2="140" />
        <line className="div-chrom" x1="335" y1="115" x2="320" y2="140" />
      </g>

      {/* etiqueta de resultat */}
      <g className="div-dues">
        <text className="div-label" x="225" y="215">CÈL·LULA MARE</text>
        <text className="div-label" x="355" y="215">→ 2 FILLES IDÈNTIQUES</text>
      </g>
    </svg>
  )
}
