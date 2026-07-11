// Il·lustració animada d'osmosi: l'aigua (punts cian) travessa la
// membrana semipermeable cap al medi amb més solut (punts taronja);
// la cèl·lula del medi hipotònic s'infla, la del hipertònic s'encongeix.
export default function OsmosiAnim() {
  return (
    <svg
      viewBox="0 0 640 240"
      role="img"
      aria-label="Animació d'osmosi: l'aigua travessa la membrana cap on hi ha més solut"
      className="w-full max-w-xl mx-auto"
    >
      <style>{`
        .osm-water { fill: #1f8ad0; }
        .osm-solut { fill: #e8872e; }
        .osm-cell { fill: rgba(124,58,237,0.18); stroke: #8b5cf6; stroke-width: 3; }
        .osm-label { font: 600 13px 'Fira Sans Extra Condensed', sans-serif; fill: #6b5e5e; letter-spacing: .05em; }
        @keyframes osm-cross {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(210px); opacity: 0; }
        }
        .osm-mol { animation: osm-cross 4s linear infinite; }
        .osm-mol.d1 { animation-delay: -1s; }
        .osm-mol.d2 { animation-delay: -2s; }
        .osm-mol.d3 { animation-delay: -3s; }
        @keyframes osm-grow { 0%,100% { transform: scale(1); } 50% { transform: scale(1.12); } }
        @keyframes osm-shrink { 0%,100% { transform: scale(1); } 50% { transform: scale(0.85); } }
        .osm-infla { animation: osm-grow 4s ease-in-out infinite; transform-origin: 150px 120px; }
        .osm-encongeix { animation: osm-shrink 4s ease-in-out infinite; transform-origin: 490px 120px; }
        @media (prefers-reduced-motion: reduce) {
          .osm-mol, .osm-infla, .osm-encongeix { animation: none; }
        }
      `}</style>

      {/* compartiments */}
      <rect x="10" y="30" width="300" height="180" rx="14" fill="rgba(31,138,208,0.10)" />
      <rect x="330" y="30" width="300" height="180" rx="14" fill="rgba(232,135,46,0.12)" />

      {/* membrana semipermeable (porus) */}
      <line x1="320" y1="30" x2="320" y2="95" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" />
      <line x1="320" y1="115" x2="320" y2="150" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" />
      <line x1="320" y1="170" x2="320" y2="210" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" />

      {/* cèl·lula que s'infla (aigua pura) */}
      <g className="osm-infla">
        <circle className="osm-cell" cx="150" cy="120" r="48" />
      </g>
      {/* cèl·lula que s'encongeix (aigua amb molt solut) */}
      <g className="osm-encongeix">
        <circle className="osm-cell" cx="490" cy="120" r="48" />
      </g>

      {/* solut: poques partícules a l'esquerra, moltes a la dreta */}
      <circle className="osm-solut" cx="60" cy="60" r="5" />
      <circle className="osm-solut" cx="255" cy="185" r="5" />
      {[
        [365, 60], [395, 180], [425, 70], [455, 190], [555, 60],
        [585, 175], [610, 110], [560, 130], [605, 55], [575, 200]
      ].map(([x, y], i) => (
        <circle key={i} className="osm-solut" cx={x} cy={y} r="5" />
      ))}

      {/* molècules d'aigua creuant la membrana (esquerra → dreta) */}
      <g>
        <circle className="osm-water osm-mol" cx="215" cy="105" r="6" />
        <circle className="osm-water osm-mol d1" cx="200" cy="160" r="6" />
        <circle className="osm-water osm-mol d2" cx="225" cy="130" r="6" />
        <circle className="osm-water osm-mol d3" cx="205" cy="185" r="6" />
      </g>

      <text className="osm-label" x="60" y="225">AIGUA PURA (HIPOTÒNIC)</text>
      <text className="osm-label" x="455" y="225">MOLT SOLUT (HIPERTÒNIC)</text>
      <text className="osm-label" x="290" y="20">MEMBRANA</text>
    </svg>
  )
}
