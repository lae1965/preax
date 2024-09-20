import { Link, LinkProps } from 'react-router-dom'
import { LogoIcon } from '../../icons'

import styles from './Logo.module.css'

interface ILogoProps extends LinkProps {
  className?: string
}

export function Logo({ to = '/themes', className, ...props }: ILogoProps) {
  return (
    <Link to={to} className={styles.wrapper} aria-label='Логотип' {...props}>
      <LogoIcon className={className} />
    </Link>
  )
}
