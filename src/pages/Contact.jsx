import { ADDRESS, MAPS_URL, PHONE } from '../data/site.js'
import PillButton from '../components/PillButton.jsx'

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span className="eyebrow eyebrow--beet">Contact</span>
          <h1 className="page-h1 page-h1--lg contact-hero__title">Get in Touch with EP Fresh Market</h1>
          <p className="intro contact-hero__body">
            We're here to help with your shopping needs and welcome your feedback. Our friendly team is ready to assist
            you.
          </p>
          <PillButton variant="sun" size="band" disabled wrap className="pill--soft">
            Submit Inquiry &amp; Product Request (Coming Soon!)
          </PillButton>
        </div>
      </section>

      <section className="contact-cards-section">
        <div className="container contact-cards">
          <a href={PHONE.href} className="contact-card">
            <span className="contact-card__label">Call</span>
            <span className="contact-card__value">{PHONE.display}</span>
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-card__label">Visit</span>
            <span className="contact-card__value">{ADDRESS.full}</span>
          </a>
        </div>
      </section>
    </>
  )
}
