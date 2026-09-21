import { useLocation, Link } from 'react-router-dom'
import { t } from '../t.js'
import { getSA } from '../data/sas.js'

export default function Footer() {
  // Enllac discret a l'ESPAI DOCENT de la SA on som (#/sa/saX/docent): guia
  // docent, fitxes de tots els nivells, dossiers, claus i apps. No s'anuncia a
  // l'alumnat (un «·» al 30 % d'opacitat), pero el professorat el te sempre a
  // ma des de qualsevol pagina de la SA. (Abans obria directament el .docx.)
  const { pathname } = useLocation()
  const match = pathname.match(/^\/sa\/([^/]+)/)
  const saDocent = match && getSA(match[1]) ? match[1] : null

  return (
    <footer className="border-t border-[var(--rule)] mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-y-1 text-sm text-[var(--muted)]">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-display uppercase tracking-wider">{t('common.footer')}</span>
          <span>{t('common.footerGdpr')}</span>
          {saDocent && (
            <Link
              to={`/sa/${saDocent}/docent`}
              aria-label="Espai docent (només per a professorat)"
              title="Espai docent"
              className="text-[10px] leading-none opacity-30 hover:opacity-70 transition-opacity no-underline"
            >
              ·
            </Link>
          )}
        </div>
        <span>{t('common.footerAttribution')}</span>
        <span className="text-xs">{t('common.footerLicense')}</span>
      </div>
    </footer>
  )
}
