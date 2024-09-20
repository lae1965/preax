import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        {'Проект выполнен в рамках стажировки '}
        <a href='https://preax.ru' target='_blank' rel='noreferrer'>
          {'PREAX'}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
