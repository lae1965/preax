import { Button, ListItem } from '../UI';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside.js';
import styles from './filterItem.module.css';
import { useFilter } from '../../hooks/useFilterContext.js';
import { MenuDropdown } from './MenuDropdown/MenuDropdown.jsx';
import Icon from '../Icon/Icon.jsx';
import { useVacancyStore } from '../../store/index.js';

export const FilterItem = ({
  text,
  icon,
  type,
  options,
  focused,
  filterId,
  extraIcon,
  setFocused,
}) => {
  const { city, setCity, workDuration, setWorkDuration } = useFilter();
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const fetchVacancy = useVacancyStore((store) => store.fetchVacancy);

  const handleButtonClick = () => {
    if (type !== 'Input') {
      if (focused) setFocused(null);
    } else {
      inputRef.current.focus();
      setFocused(filterId);
      fetchVacancy(city);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleOptionClick = (option) => {
    const isSelected = workDuration.includes(option);
    if (isSelected) {
      setWorkDuration(
        workDuration.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setWorkDuration([...workDuration, option]);
    }
  };

  const renderSmallDropdown = () => {
    if (!focused) return null;
    return options.map((option, index) => (
      <li
        key={index}
        className={styles.option}
        onClick={() => handleOptionClick(option)}
      >
        <input
          type='checkbox'
          checked={workDuration.includes(option)}
          className={styles.checkboxInput}
          onChange={() => {}}
        />
        <div
          className={`${styles.customCheckbox} ${
            workDuration.includes(option) ? styles.checked : ''
          }`}
        ></div>
        {option}
      </li>
    ));
  };

  useClickOutside(buttonRef, () => setFocused(null), focused);

  switch (type) {
    case 'Input':
      return (
        <ListItem className={styles.item}>
          <div
            className={`${styles.button} ${focused ? styles.focused : ''}`}
            onClick={(event) => handleButtonClick(event)}
            ref={buttonRef}
          >
            <Icon name={icon} />
            <input
              type='text'
              ref={inputRef}
              placeholder={text}
              className={styles.input}
              value={city}
              onChange={handleInputChange}
            />
            {extraIcon && <Icon name={extraIcon} />}
          </div>
        </ListItem>
      );
    case 'Dropdown':
      return (
        <ListItem className={styles.item} ref={buttonRef}>
          <Button
            className={`${styles.button} ${
              focused ? styles.focusedBorder : ''
            }`}
            onClick={(event) => handleButtonClick(event)}
          >
            <Icon name={icon} />
            <span
              className={`${styles.text} ${focused ? styles.textBlack : ''}`}
            >
              {text}
            </span>
            {extraIcon && (
              <Icon
                name={extraIcon}
                className={`${focused ? styles.transform : ''}`}
              />
            )}
          </Button>
          {focused && (
            <ul className={styles.dropdownWrapper}>{renderSmallDropdown()}</ul>
          )}
        </ListItem>
      );
    case 'ExtraDropdown':
      return (
        <ListItem className={styles.item} ref={buttonRef}>
          <Button
            className={`${styles.button} ${
              focused ? styles.focusedBorder : ''
            }`}
            onClick={(event) => handleButtonClick(event)}
          >
            <Icon name={icon} />
            <span
              className={`${styles.text} ${focused ? styles.textBlack : ''}`}
            >
              {text}
            </span>
            {extraIcon && (
              <Icon
                name={extraIcon}
                className={`${focused ? styles.transform : ''}`}
              />
            )}
          </Button>
          {focused && (
            <ul className={styles.bigDropdownWrapper}>
              {options.map((option, i) => (
                <MenuDropdown
                  key={i}
                  index={i}
                  option={option}
                  extraIcon={extraIcon}
                />
              ))}
            </ul>
          )}
        </ListItem>
      );
    default:
      return (
        <ListItem className={styles.item}>
          <Button className={styles.button}>
            <Icon name={icon} />
            <span className={styles.text}>{text}</span>
            {extraIcon && <Icon name={extraIcon} />}
          </Button>
        </ListItem>
      );
  }
};
