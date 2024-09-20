import styles from "./Logo.module.css";
import { ButtonPrime } from "../ButtonPrime/ButtonPrime";

export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <ButtonPrime iconName={"tree"} pw={"13px"} ph={"13px"} />
      <h1 className={styles.logoTitle}>Дневник</h1>
    </div>
  );
}
