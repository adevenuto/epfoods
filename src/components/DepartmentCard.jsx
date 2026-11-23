import { Link } from 'react-router-dom'

export default function DepartmentCard({ title, body, cta, img, to, variant }) {
  return (
    <Link to={to} className={`dept-card dept-card--${variant}`}>
      <div className="dept-card__text">
        <h3 className="dept-card__title">{title}</h3>
        <p className="dept-card__body">{body}</p>
        <span className="pill pill--card dept-card__cta">{cta}</span>
      </div>
      <div className="dept-card__img" style={{ backgroundImage: `url('${img}')` }} role="img" aria-label={title} />
    </Link>
  )
}
