import { useRef, useState } from "react";
import useWeather from "../../hooks/useWeather";
import Input from "../input";
import Dropdown from "../dropdown";
import clsx from "../../utils/clsx";
import styles from "./weatherSearch.module.css";
import useOutsideClickObserver from "../../hooks/useOutsideClickObserver";

const WeatherSearch = ({ className }) => {
  const [value, setValue] = useState("");
  const weather = useWeather();
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useOutsideClickObserver(containerRef, () => {
    weather.onPanelClose();
  });

  const onChange = (e) => {
    const newValue = e.target.value;
    if (!/[A-Za-z]/g.test(newValue)) {
      setValue(newValue);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.length < 2) {
      console.log('Введите больше символов');
      return;
    }

    weather.fetchCity(value);
  }

  const onClear = () => {
    inputRef.current?.focus();
    setValue("");
    weather.reset();
  }

  const onDropdownItemClick = (city) => {
    setValue("");
    weather.fetchWeather(city);
    weather.onPanelClose();
  }

  return (
    <div ref={containerRef} className={clsx(styles.container, className)}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          className={styles.search}
          type="search"
          placeholder="Поиск по городу"
          value={value}
          onChange={onChange}
          onFocus={weather.onPanelOpen}
          onClear={onClear}
          disabled={weather.isLoading}
        />
      </form>
      <Dropdown
        isOpen={weather.isPanelOpen}
        isLoading={weather.isLoading}
        result={weather.cityInfo}
        onItemClick={onDropdownItemClick}
        history={weather.lastQueries}
        onHistoryClear={weather.clearHistory}
      />
    </div>
  );
}

export default WeatherSearch;
