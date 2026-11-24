import { ADDRESS, MAPS_URL } from '../data/site.js'
import PillButton from '../components/PillButton.jsx'

// Placeholder page shared by Bakery, Produce and Kitchen & Deli.
export default function Department({ title, heading, body, img, variant, teaser, orderCta }) {
  return (
    <>
      <section className="page-top about-hero">
        <div className="container about-hero__grid">
          <div className="stack-22">
            <span className="eyebrow eyebrow--beet">{title}</span>
            <h1 className="page-h1">{heading}</h1>
            <p className="intro">{body}</p>
            {orderCta && (
              <div className="btn-row">
                <PillButton to="/order" variant="sun" size="band">
                  Start an Order
                </PillButton>
              </div>
            )}
          </div>
          <div
            className={`about-hero__img dept-hero__img--${variant}`}
            style={{ backgroundImage: `url('${img}')` }}
            role="img"
            aria-label={heading}
          />
        </div>
      </section>

      <section className="dept-soon">
        <div className="container panel panel--mint dept-soon__panel">
          <h2 className="section-h2 section-h2--sm">{teaser}</h2>
          <p className="dept-soon__body">In the meantime, stop by and see it in person at {ADDRESS.full}.</p>
          <PillButton href={MAPS_URL} variant="forest" size="md" target="_blank" rel="noreferrer">
            Get Directions
          </PillButton>
        </div>
      </section>
    </>
  )
}
