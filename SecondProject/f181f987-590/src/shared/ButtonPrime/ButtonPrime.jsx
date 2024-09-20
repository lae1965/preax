import styles from "./ButtonPrime.module.css";
import { Icon } from "../Icon/Icon";

export function ButtonPrime({ iconName, text, pw, ph }) {
  return (
    <button
      style={{
        padding: `${pw ? pw : "0"} ${ph ? ph : "0"} ${pw ? pw : "0"}  ${
          ph ? ph : "0"
        }`,
      }}
      className={styles.button}
      aria-label={"Logo button"}
    >
      {iconName && <Icon name={iconName} />}
      {text && text}
    </button>
  );
}
