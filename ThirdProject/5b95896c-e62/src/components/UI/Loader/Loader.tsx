import styles from './Loader.module.css'

export const Loader: React.FC = ({}) => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
