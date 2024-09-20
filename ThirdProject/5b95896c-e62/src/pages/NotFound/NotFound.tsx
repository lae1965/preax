import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Logo } from '../../components'
import { ROUTE_PATHS } from '../../constants'
import { useKeysPress } from '../../hooks'

import lost from '/lost.svg'
import styles from './NotFound.module.css'

export const NotFound: React.FC = () => {
  const navigate = useNavigate()
  useKeysPress(() => navigate(ROUTE_PATHS.AUTH))

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Ой, кажется такой страницы не существует</h1>
        <div className={styles.footerWrapper}>
          <Button
            text='На главную'
            type='button'
            onClick={() => navigate(ROUTE_PATHS.AUTH)}
            alternativeKeyboardShortcut={true}
          />
        </div>
        <Logo to={'/'} className={styles.logo} />
        <img className={styles.formImg} src={lost} alt='lost' />
      </div>
    </div>
  )
}
