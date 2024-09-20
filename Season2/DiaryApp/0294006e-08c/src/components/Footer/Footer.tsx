import styles from './Footer.module.css';

export const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  return (
    <footer>
      <p className={styles.text}>
        Проект выполнен в рамках стажировки{' '}
        <a href='https://preax.ru/' target='_blank'>
          PREAX
        </a>
      </p>
    </footer>
  );
};
