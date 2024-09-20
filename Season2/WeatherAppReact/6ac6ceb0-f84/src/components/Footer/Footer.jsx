import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Проект выполнен в рамках стажировки{' '}
      <a href='https://preax.ru' target='_blank' rel='noreferrer'>
        PREAX
      </a>
    </p>
  </footer>
);
