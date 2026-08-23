import type { MouseEventHandler, ReactNode } from 'react'
import styles from './ButtonLink.module.css'

interface ButtonLinkProps {
  readonly children: ReactNode
  readonly href: `#${string}`
  readonly variant?: 'primary' | 'secondary'
  readonly className?: string
  readonly onClick?: MouseEventHandler<HTMLAnchorElement>
  readonly tabIndex?: number
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  tabIndex,
}: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </a>
  )
}
