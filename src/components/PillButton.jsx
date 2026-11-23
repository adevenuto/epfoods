import { Link } from 'react-router-dom'

// variant: sun | outlineLight | forest | ghostLight | dark | white | outlineMuted
// size: nav | hero | band | card | md
// Pass `to` for an internal route, `href` for an external/anchor link,
// or neither for a non-interactive "Coming Soon" pill.
export default function PillButton({
  variant = 'sun',
  size = 'band',
  disabled = false,
  wrap = false,
  to,
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'pill',
    `pill--${variant}`,
    `pill--${size}`,
    disabled && 'pill--disabled',
    wrap && 'pill--wrap',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (disabled || (!to && !href)) {
    return (
      <span className={classes} aria-disabled={disabled || undefined} {...rest}>
        {children}
      </span>
    )
  }
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}
