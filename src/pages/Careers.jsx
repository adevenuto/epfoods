import PillButton from '../components/PillButton.jsx'

export default function Careers() {
  return (
    <>
      <section className="careers-hero">
        <div className="container careers-hero__card">
          <div className="careers-hero__overlay" />
          <div className="careers-hero__content">
            <span className="eyebrow eyebrow--sun">Careers</span>
            <h1 className="careers-hero__title">Join Our Team</h1>
            <p className="careers-hero__body">
              Be part of a friendly neighborhood market where every team member makes a difference in our community.
            </p>
            <PillButton variant="glass" size="band">
              View Open Positions (Coming Soon!)
            </PillButton>
          </div>
        </div>
      </section>

      <section className="careers-apply">
        <div className="container panel panel--mint careers-apply__panel">
          <h2 className="section-h2 careers-apply__title">Ready to Apply?</h2>
          <PillButton variant="forest" size="band" disabled>
            Start Application (Coming Soon!)
          </PillButton>
        </div>
      </section>
    </>
  )
}
