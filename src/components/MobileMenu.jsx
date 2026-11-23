import { NavLink } from 'react-router-dom'
import { NAV_LINKS, PHONE } from '../data/site.js'

export default function MobileMenu({ onNavigate }) {
  return (
    <div id="mobile-menu" className="mobile-menu">
      {NAV_LINKS.map((l) => (
        <NavLink key={l.to} to={l.to} className="mobile-menu__link" onClick={onNavigate}>
          {l.label}
        </NavLink>
      ))}
      <a href={PHONE.href} className="mobile-menu__phone">
        {PHONE.display}
      </a>
    </div>
  )
}
