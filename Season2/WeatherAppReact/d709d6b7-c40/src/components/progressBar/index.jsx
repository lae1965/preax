import clsx from "../../utils/clsx";
import styles from "./progressBar.module.css";

const ProgressBar = ({ current, type }) => {
  return (
    <div
      className={clsx(styles.progress, type && styles.gradient)}
      style={{ "--progress-value": `calc(${current}% - ${0.04 * current}px)` }}
    >
      <div></div>
    </div>
  );
};

export default ProgressBar;
