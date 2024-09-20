import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Logo, Form } from '../../components'

import styles from './Home.module.css'

interface IHomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Home({ ...props }: IHomeProps) {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.formContainer}>
        <Logo to={'/'} />
        <Form />
      </div>
    </div>
  )
}
