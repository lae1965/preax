import logo from "@assets/img/logo-desktop.svg";
import clsx from "@utils/clsx";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.container)}>
        <a href="/">
          <img src={logo} alt="CAREER APP" />
        </a>
        <nav className={styles.nav}>
          <ul className={clsx("list", styles.navList)}>
            <li className={styles.navItem}>
              <a href="#" className={clsx(styles.navLink, styles.active)}>
                Поиск вакансий
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Избранные вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;