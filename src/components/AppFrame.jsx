import { asset } from '../utils.js'
import AppPlaceholder from './AppPlaceholder.jsx'

// Apps HTML que existeixen a public/apps/
const AVAILABLE_APPS = ['app_celula.html', 'app_mitosi_meiosi.html', 'app_osmosi.html']

export default function AppFrame({ appSrc, title }) {
  if (!appSrc) return null

  const file = appSrc.split('/').pop()
  if (!AVAILABLE_APPS.includes(file)) {
    return <AppPlaceholder appSrc={appSrc} />
  }

  return (
    <div className="card overflow-hidden">
      <iframe
        src={asset(appSrc)}
        title={title || file}
        className="w-full border-0"
        style={{ height: 'min(80vh, 720px)' }}
        loading="lazy"
        allowFullScreen
      />
      <div className="px-4 py-2 border-t border-[var(--rule)] text-end">
        <a
          href={asset(appSrc)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--purple)] hover:underline"
        >
          ⤢ Obre l'app a pantalla completa
        </a>
      </div>
    </div>
  )
}
