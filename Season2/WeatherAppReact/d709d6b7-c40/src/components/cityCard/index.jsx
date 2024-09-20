import clsx from "../../utils/clsx";
import styles from "./cityCard.module.css";

const CityCard = ({ data }) => {
  const { city, temperature, feelsLike, iconUrl, date, time, description } =
    data;
  return (
    <section className={styles.cityCard}>
      <h1 className={clsx("title section-title", styles.city)}>{city}</h1>
      <span className={styles.date}>{date}</span>
      <span className={styles.time}>{time}</span>
      <span className={styles.tempFact}>{temperature}°</span>
      <span className={styles.condition}>
        <img src={iconUrl} alt="картинка" />
        {description}
      </span>
      <span className={styles.tempFeelsLike}>Ощущается как {feelsLike}°</span>
    </section>
  );
};

export default CityCard;
