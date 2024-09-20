import { useEffect, useState } from "react";
import Icon from "../icon";
import Loader from "../loader";
import clsx from "../../utils/clsx";
import styles from "./dropdown.module.css";

const Dropdown = ({ isOpen, isLoading, result, onItemClick, history, onHistoryClear }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(isOpen);
    }, 150);
  }, [isOpen]);

  const title = isLoading ? "Ищем..." : result === undefined ? "Недавно смотрели" : result ? "Результат поиска" : "Упс! Город не найден";
  const isClearBtnVisible = !isLoading && result === undefined;
  const historyOutput = !history.length ? (
    <p className={styles.emptyMessage}>
      История поиска пустая.
    </p>
  ) : (
    <ul className={clsx("list", styles.queriesList)}>
      {history.map((city) => (
        <li key={city.name} className={styles.queryItem}>
          <button className={clsx("btn", styles.queryBtn)} onClick={() => onItemClick(city)}>
            {city.name}
          </button>
        </li>
      ))}
    </ul>
  );
  const mainContent = isLoading ? (
    <div style={{ textAlign: "center" }}>
      <Loader />
    </div>
  ) : result === undefined ? (
    historyOutput
  ) : result ? (
    <button className={clsx("btn", styles.queryBtn)} onClick={() => onItemClick(result)}>
      {result?.name}
    </button>
  ) : (
    <p className={styles.emptyMessage}>
      Попробуйте другое название.
    </p>
  )

  return (
    isOpen && (
      <div className={clsx(styles.container, isVisible && styles.visible)}>
        <header className={styles.header}>
          <h3 className={styles.title}>
            {title}
          </h3>
          {isClearBtnVisible && (
            <button className={clsx("btn", styles.clearBtn)} onClick={onHistoryClear} disabled={!history.length}>
              <Icon name="delete" width="24" height="24" />
            </button>
          )}
        </header>
        {mainContent}
      </div>
    )
  );
}

export default Dropdown;
