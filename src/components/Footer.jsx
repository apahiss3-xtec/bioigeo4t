import { t } from '../t.js'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-y-1 text-sm text-[var(--muted)]">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-display uppercase tracking-wider">{t('common.footer')}</span>
          <span>{t('common.footerGdpr')}</span>
        </div>
        <span>{t('common.footerAttribution')}</span>
        <span className="text-xs">{t('common.footerLicense')}</span>
      </div>
    </footer>
  )
}
