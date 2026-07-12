import { NavLink, Link } from 'react-router-dom'
import { t } from '../t.js'
import { asset } from '../utils.js'

const linkClass = ({ isActive }) =>
  `font-display uppercase tracking-wider text-sm px-3 py-1.5 rounded-md transition-colors ${
    isActive
      ? 'bg-[var(--purple-ink)] text-white'
      : 'text-[var(--muted)] hover:text-[var(--text)]'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--bg)]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={asset('/images/logo-ie-temple.png')}
            alt="IE Temple"
            className="h-11 w-auto object-contain shrink-0"
          />
          <div className="leading-tight border-s border-[var(--rule)] ps-3">
            <span className="font-display font-bold text-lg block truncate">
              Biologia i Geologia
            </span>
            <span className="kicker block">4t ESO</span>
          </div>
        </Link>
        <nav className="ms-auto flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            {t('nav.home')}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
