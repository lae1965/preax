import { useState } from "react";
import TabBar from "../tabBar/index.jsx";
import Icon from "../icon";
import styles from "./slider.module.css";
import clsx from "../../utils/clsx.js";

const Slider = ({ data: forecast }) => {
  const [activeWeather, setActiveWeather] = useState("hourly");

  const handleWeatherChange = (weatherType) => {
    setActiveWeather(weatherType);
  };

  const createForecastCard = (data, i) => {
    return (
      <li className={styles.sliderItem} key={i}>
        <article className={`${styles.card} ${styles.sliderCard}`}>
          <h3 className={`${styles.title} ${styles.cardTitle}`}>
            {data.date || data.time}
          </h3>
          <img
            className={styles.cardImg}
            src={require(`../../assets/img/${data.img}.svg`)}
            alt={data.description}
          />
          <p className={styles.cardTemp}>{data.temp}</p>
        </article>
      </li>
    );
  };

  return (
    <section className={styles.forecast}>
      <header className={styles.header}>
        <h2 className={clsx("title section-title", styles.title)}>Прогноз:</h2>
        <TabBar
          activeWeather={activeWeather}
          onWeatherChange={handleWeatherChange}
        />
      </header>
      <div className={styles.slider}>
        <button className={styles.navButton} disabled>
          <Icon name="chevron-left" width="24" height="24" />
        </button>
        <div className={styles.content}>
          {forecast &&
            Object.keys(forecast).map((key, i) => (
              <ul
                className={`${styles.sliderWrapper} ${
                  activeWeather === key ? styles.active : ""
                }`}
                data-weather={key}
                key={key}
              >
                {forecast?.[key]?.map((item, i) => createForecastCard(item, i))}
              </ul>
            ))}
        </div>
        <button className={styles.navButton}>
          <Icon name="chevron-right" width="24" height="24" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
