import PillButton from '../components/PillButton.jsx'

export default function About() {
  return (
    <>
      <section className="page-top about-hero">
        <div className="container about-hero__grid">
          <div className="stack-22">
            <span className="eyebrow eyebrow--beet">About us</span>
            <h1 className="page-h1">Welcome to EP Fresh Market</h1>
            <p className="intro">
              EP Fresh Market is a family-owned business built on more than 40 years of experience in the grocery
              industry. After decades of serving customers, we decided it was time to reimagine what a neighborhood
              market could be — and bring something truly special to Edison Park.
            </p>
          </div>
          <div className="about-hero__img" role="img" aria-label="Fresh produce at EP Fresh Market" />
        </div>
      </section>

      <section className="about-body">
        <div className="prose">
          <p>
            We’re dedicated to bringing our neighborhood fresh, high-quality produce along with foods that feel a
            little more personal than what you’ll find at a typical grocery store. From homemade dressings, salsas and
            dips to fresh salads, sides and other prepared foods, so much of what we offer is made from scratch right
            here at EP Fresh Market — including recipes and favorites you simply won’t find anywhere else. We’re also
            proud to support local Chicago businesses, filling our shelves with products from some of the city’s best
            makers, bakeries and longtime favorites. Our goal is to give Edison Park a place where fresh food, local
            flavor and neighborhood convenience all come together under one roof.
          </p>
          <h2 className="prose__h2">About EP Fresh Market</h2>
          <p>
            From day one, our goal has been simple: create a welcoming space where families can shop, gather, and enjoy
            fresh food together. We’ve thoughtfully designed EP Fresh Market to be more than just a grocery store.
            Alongside our carefully selected produce and dairy, you’ll find a taqueria and kitchen, a bakery, a coffee
            and smoothie bar, and a cozy spot where kids can enjoy a cookie and color while families shop.
          </p>
          <p>
            We’ve taken our time to build this market with intention — focusing on quality, detail, and creating an
            experience that feels warm and personal. Produce is our pride and strength, and we’re committed to offering
            a wide variety of fresh fruits and vegetables that reflect the tastes and needs of our community.
          </p>
          <p>
            The welcome we’ve received from Edison Park has meant the world to us. We truly believe this neighborhood is
            the perfect home for EP Fresh Market, and we are excited to grow alongside you.
          </p>
          <p>
            We want to be your market — one that listens, adapts, and serves. Your feedback, suggestions, and ideas are
            always welcome. Follow us on Facebook and stay connected as we continue building something special
            together.
          </p>
          <p className="prose__closing">We can’t wait to open our doors and welcome you in.</p>
          <div>
            <PillButton variant="outlineMuted" size="md" disabled>
              Weekly deals coming soon
            </PillButton>
          </div>
        </div>
      </section>
    </>
  )
}
