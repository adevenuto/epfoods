import { Link } from 'react-router-dom'
import { ADDRESS, asset, DEPARTMENTS, HOURS, MAPS_EMBED_URL, MAPS_URL, NAV_LINKS, PHONE } from '../data/site.js'

const LEGAL_LINKS = ['Terms of Service', 'Privacy Statement', 'Cookie Settings', 'Website Accessibility Assistance']

export default function Footer() {
  return (
    <footer className="footer">
      <iframe
        className="footer__map"
        title="Map to EP Fresh Market"
        src={MAPS_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="footer__inner">
        <div className="footer__cols">
          <div className="footer__col footer__col--brand">
            <img src={asset('logo-white.png')} alt="EP Fresh Market" className="footer__logo" />
            <span className="footer__tagline">Your Neighborhood Market, Grown with Care</span>
          </div>
          <div className="footer__col">
            <span className="footer__label">Location and Hours</span>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="footer__link">
              {ADDRESS.full}
            </a>
            <a href={PHONE.href} className="footer__link">
              {PHONE.display}
            </a>
            <span className="footer__muted">{HOURS}</span>
          </div>
          <div className="footer__col">
            <span className="footer__label">Departments</span>
            {DEPARTMENTS.map((d) => (
              <Link key={d.to} to={d.to} className="footer__explore">
                {d.title}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <span className="footer__label">Explore</span>
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="footer__explore">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__legal">
          <span>Powered by Toast</span>
          <div className="footer__legal-links">
            {LEGAL_LINKS.map((label) => (
              <a key={label} href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
