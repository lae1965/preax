import useWeather from "../../hooks/useWeather";
import clsx from "../../utils/clsx";
import Logo from "../logo";
import WeatherSearch from "../weatherSearch";
import styles from "./header.module.css";

const Header = () => {
  const { isPanelOpen } = useWeather();

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <WeatherSearch className={styles.weatherSearch} />
      </header>
      <div className={clsx(styles.bg, isPanelOpen && styles.panelOpened)} />
    </>
  );
}

export default Header;
