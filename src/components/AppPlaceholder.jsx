import { t } from '../t.js'
import T from '../translate/T.jsx'
import CirculacioAnim from './anim/CirculacioAnim.jsx'

// Apps pendents: mentre no existeixen, mostrem una il·lustració
// científica animada (SVG) del concepte que animaran.
const PENDING_APPS = {
  'app_sistema_circulatori.html': {
    name: 'Animació del sistema circulatori',
    description:
      "Seguirà el recorregut de l'O₂ des de l'alvèol pulmonar fins al mitocondri d'una cèl·lula muscular, passant per la petita i la gran circulació (les 4 cavitats del cor).",
    Anim: CirculacioAnim
  }
}

export default function AppPlaceholder({ appSrc }) {
  const file = appSrc ? appSrc.split('/').pop() : ''
  const info = PENDING_APPS[file] || { name: file, description: '', Anim: null }
  const Anim = info.Anim

  return (
    <div className="card border-dashed border-[var(--rule-strong)] p-6 text-center">
      <p className="kicker mb-3">{info.name}</p>
      {Anim && (
        <div className="mb-4">
          <Anim />
        </div>
      )}
      {info.description && (
        <p className="text-[var(--muted)] max-w-xl mx-auto mb-3">
          <T>{info.description}</T>
        </p>
      )}
      <p className="font-display font-semibold">⏳ {t('session.appComingSoonTitle')}</p>
    </div>
  )
}
