import clsx from "@utils/clsx";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={clsx("container", styles.container)}>
        <p className={clsx("descr", styles.copyrights)}>
          Проект выполнен в рамках стажировки <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">PREAX</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;