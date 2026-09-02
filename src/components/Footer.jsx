import { useLocation } from 'react-router-dom'
import { t } from '../t.js'
import { getSA } from '../data/sas.js'
import { asset } from '../utils.js'

export default function Footer() {
  // Enllac discret a la guia docent de la SA on som (patro de 3r): no s'anuncia
  // a l'alumnat, pero el professorat el te sempre a ma des de qualsevol pagina
  // de la SA. Nomes surt si la SA declara `guiaDocent`.
  const { pathname } = useLocation()
  const match = pathname.match(/^\/sa\/([^/]+)/)
  const guia = match ? getSA(match[1])?.guiaDocent : null

  return (
    <footer className="border-t border-[var(--rule)] mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-y-1 text-sm text-[var(--muted)]">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-display uppercase tracking-wider">{t('common.footer')}</span>
          <span>{t('common.footerGdpr')}</span>
          {guia && (
            <a
              href={asset(guia)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guia docent (només per a professorat)"
              title="Guia docent"
              className="text-[10px] leading-none opacity-30 hover:opacity-70 transition-opacity no-underline"
            >
              ·
            </a>
          )}
        </div>
        <span>{t('common.footerAttribution')}</span>
        <span className="text-xs">{t('common.footerLicense')}</span>
      </div>
    </footer>
  )
}
