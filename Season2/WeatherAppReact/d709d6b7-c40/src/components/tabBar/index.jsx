import Tab from "../tab";
import styles from "./tabBar.module.css";

const TabBar = ({ activeWeather, onWeatherChange }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Tab
            isActive={activeWeather === "hourly"}
            onClick={() => onWeatherChange("hourly")}
          >
            на 24 часа
          </Tab>
        </li>
        <li>
          <Tab
            isActive={activeWeather === "week"}
            onClick={() => onWeatherChange("week")}
          >
            на 5 дней
          </Tab>
        </li>
      </ul>
    </nav>
  );
};

export default TabBar;
