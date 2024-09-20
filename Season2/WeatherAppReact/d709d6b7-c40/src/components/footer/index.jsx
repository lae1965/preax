import clsx from "../../utils/clsx";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={clsx("descr", styles.descr)}>
        Проект выполнен в рамках стажировки <a className={styles.link} href="https://preax.ru" target="_blank" rel="noreferrer">PREAX</a>
      </p>
    </footer>
  );
}

export default Footer;
