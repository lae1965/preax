import { useEffect, useState } from "react";
import clsx from "../../utils/clsx";
import styles from "./card.module.css";
import ProgressBar from "../progressBar";

/* eslint-disable no-useless-computed-key */
export const directionAngles = {
  ["Северный"]: 0,
  ["Северо-восточный"]: 45,
  ["Восточный"]: 90,
  ["Юго-восточный"]: 135,
  ["Южный"]: 180,
  ["Юго-западный"]: 225,
  ["Западный"]: 270,
  ["Северо-западный"]: 315,
};

const Card = ({
  title,
  img,
  value,
  pbValue,
  units,
  min,
  max,
  gradientPb,
  description,
}) => {
  const [progressValue, setProgressValue] = useState("50%");

  function getAngleForDirection(direction) {
    return directionAngles[direction] + 45 + 180;
  }

  const windRotation =
    title === "Сила ветра" ? `${getAngleForDirection(description)}` : 0;

  useEffect(() => {
    if (pbValue) {
      setTimeout(() => {
        setProgressValue(pbValue);
      }, 100);
    }
  }, [pbValue]);

  return (
    <li className={styles.item}>
      <article className={clsx("card", styles.card)}>
        <h2 className={clsx("title", styles.title)}>{title}</h2>
        <img
          className={styles.img}
          src={img}
          alt="иконка"
          style={{ transform: `rotate(${windRotation}deg)` }}
        />
        <span className={styles.value}>
          {value}
          {units ? " " + units : ""}
        </span>
        <div className={styles.bottom}>
          {pbValue && <ProgressBar current={progressValue} type={gradientPb} />}
          <div
            className={clsx(
              styles.info,
              typeof min === "number" &&
                typeof max === "number" &&
                styles.interval
            )}
          >
            {typeof min === "number" && typeof max === "number" ? (
              <>
                <span>0%</span>
                <span>100%</span>
              </>
            ) : (
              description
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default Card;
