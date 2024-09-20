import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styles from './Tab.module.css'

interface ITabProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text: string
  path: string
  isActive: boolean
}

export const Tab: React.FC<ITabProps> = ({ text, path, isActive }) => {
  return (
    <Link to={path}>
      <span className={isActive ? styles.navActive : styles.navNotActive}>{text}</span>
    </Link>
  )
}
