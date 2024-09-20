import { Icon } from "../../Icon/Icon";

import styles from './logo.module.css'


export const Logo = ({ href, className, ...props }) => {
  return (
    <a
      href={href ?? '/'}
      className={`${styles.logo} ${className}`}
      aria-label={'Логотип'}
      {...props}
    >
      <Icon icon='logo' className={styles.logoIcon} />
      <Icon icon='logo-tablet' className={styles.logoIconTablet} />
    </a>
  )
}