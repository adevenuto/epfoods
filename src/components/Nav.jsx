import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, PHONE, asset } from '../data/site.js'
import PillButton from './PillButton.jsx'
import MobileMenu from './MobileMenu.jsx'

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Close the sheet if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px)')
    const onChange = (e) => e.matches && setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const overHero = pathname === '/' && !scrolled && !menuOpen

  return (
    <>
      <header className={`nav ${overHero ? 'nav--hero' : 'nav--solid'}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo" aria-label="EP Fresh Market home">
            <img src={asset('logo.png')} alt="EP Fresh Market" />
          </Link>

          <nav className="nav__links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className="nav__link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <a href={PHONE.href} className="nav__phone">
              {PHONE.display}
            </a>
            <PillButton to="/order" variant="sun" size="nav" className="nav__order">
              Order Online
            </PillButton>
            <button
              type="button"
              className="nav__menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}
    </>
  )
}
