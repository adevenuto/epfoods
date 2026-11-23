import { ADDRESS, AMENITIES, asset, DEPARTMENTS, HERO_VIDEO, HOURS, MAPS_URL, PHONE } from '../data/site.js'
import PillButton from '../components/PillButton.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'

function scrollToDepartments(e) {
  e.preventDefault()
  const el = document.getElementById('departments')
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <video
          className="hero__video"
          src={HERO_VIDEO ?? undefined}
          poster={asset('produce.webp')}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero__gradient" />
        <div className="hero__tint" />
        <div className="hero__content">
          <div className="hero__main">
            <span className="glass-pill">
              <span className="dot dot--sun" />
              Edison Park, Chicago
            </span>
            <h1 className="display-h1">
              Your Neighborhood Market, <span className="text-sun">Grown with Care</span>
            </h1>
            <div className="btn-row">
              <PillButton to="/order" variant="sun" size="hero">
                Order Online
              </PillButton>
              <PillButton href="#departments" variant="outlineLight" size="hero" onClick={scrollToDepartments}>
                Explore the Market
              </PillButton>
            </div>
          </div>
          <div className="hero__card">
            <span className="hero__open">
              <span className="dot dot--leaf" />
              {HOURS}
            </span>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hero__address">
              {ADDRESS.street},
              <br />
              {ADDRESS.cityLine}
            </a>
            <a href={PHONE.href} className="hero__phone">
              {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      <section id="departments" className="section departments">
        <div className="container stack-40">
          <div className="split-header">
            <h2 className="section-h2 departments__title">Fresh every day, made right here.</h2>
            <p className="departments__lede">
              Produce, a bakery, a taqueria and kitchen, and a full-service deli under one roof.
            </p>
          </div>
          <div className="dept-grid">
            {DEPARTMENTS.map((d) => (
              <DepartmentCard key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section inside">
        <div className="container panel panel--mint inside__panel">
          <div className="inside__text">
            <h2 className="section-h2 section-h2--sm">More than just a grocery store.</h2>
            <p className="inside__body">
              Alongside our carefully selected produce and dairy, you’ll find a taqueria and kitchen, a bakery, a
              coffee and smoothie bar, and a cozy spot where kids can enjoy a cookie and color while families shop.
            </p>
            <PillButton to="/about" variant="forest" size="md">
              Our Story
            </PillButton>
          </div>
          <div className="chips">
            {AMENITIES.map((a) => (
              <span key={a.label} className="chip">
                <span className="chip__dot" style={{ background: a.dot }} />
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section taqueria">
        <div className="container panel panel--forest taqueria__panel">
          <div className="taqueria__text">
            <span className="eyebrow eyebrow--sun">EP Taqueria</span>
            <h2 className="section-h2 taqueria__title">Tacos, made daily. Order ahead.</h2>
            <p className="taqueria__body">Order from the EP Fresh Kitchen and Taqueria for pickup.</p>
            <div className="btn-row">
              <PillButton to="/order" variant="sun" size="band">
                Start an Order
              </PillButton>
              <PillButton to="/order" variant="ghostLight" size="band">
                View Taqueria Menu
              </PillButton>
            </div>
          </div>
          <div className="taqueria__img" role="img" aria-label="EP Fresh Kitchen" />
        </div>
      </section>
    </>
  )
}
