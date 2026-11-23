import { ADDRESS, TOAST_URL } from '../data/site.js'

export default function Order() {
  return (
    <section className="order">
      <div className="container stack-36">
        <div className="split-header">
          <div className="stack-16">
            <span className="eyebrow eyebrow--beet">Order online</span>
            <h1 className="page-h1 page-h1--lg">EP Taqueria &amp; Kitchen</h1>
          </div>
          <p className="order__pickup">Pickup at {ADDRESS.street}</p>
        </div>
        {TOAST_URL ? (
          <iframe className="toast-slot toast-slot--live" title="Order from EP Taqueria & Kitchen" src={TOAST_URL} />
        ) : (
          <div className="toast-slot">
            <span className="toast-slot__title">Toast online ordering</span>
            <span className="toast-slot__note">The Toast ordering experience mounts here.</span>
          </div>
        )}
      </div>
    </section>
  )
}
