import styles from './styles.module.css';
import logo from '../../img/logo.png';
import logoSm from '../../img/logo_tablet.png';
import logoXs from '../../img/logo_mobile.png';

const Logo = () => {
  return (
    <a href="/" className={styles.link}>
      <picture>
        <source srcSet={logoXs} media="(max-width: 699.98px)"/>
        <source srcSet={logoSm} media="(max-width: 991.98px)"/>
        <img className={styles.logo} src={logo} alt="WeatherApp"/>
      </picture>
    </a>
  );
};

export default Logo;