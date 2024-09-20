import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './IconButton.module.css'
import { LogOut } from '..'

interface IIconButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const IconButton: React.FC<IIconButtonProps> = ({ ...props }) => {
  return (
    <button className={styles.button} type='button' {...props}>
      <LogOut />
    </button>
  )
}
