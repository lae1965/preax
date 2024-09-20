import LogoDesktop from "../../assets/img/logo.svg";
import LogoTablet from "../../assets/img/logo-tablet.svg";
import LogoMobile from "../../assets/img/logo-mobile.svg";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <picture>
        <source srcSet={LogoMobile} media="(max-width: 767px)" />
        <source srcSet={LogoTablet} media="(max-width: 1023px)" />
        <img src={LogoDesktop} alt="WeatherApp" />
      </picture>
    </a>
  );
}

export default Logo;
