import styles from './menuDropdown.module.css';
import React, { useState } from 'react';
import Icon from '../../Icon/Icon';

export const MenuDropdown = ({ option, extraIcon, index }) => {
  const [openedIndexes, setOpenedIndexes] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const handleButtonClick = (index) => {
    setOpenedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const handleRadioChange = (index) => {
    setSelectedRadio(index);
  };

  const handleCheckboxChange = (value, index) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [`${index}-${value}`]: !prev[`${index}-${value}`],
    }));
  };

  return (
    <>
      <li
        key={index}
        className={styles.menuButton}
        onClick={() => handleButtonClick(index)}
      >
        <Icon name={option.icon} className={styles.iconStyles} />
        <span
          className={`${styles.text} ${
            openedIndexes.includes(index) ? styles.textBlack : ''
          }`}
        >
          {option.name}
        </span>
        {extraIcon && (
          <Icon
            name={extraIcon}
            className={openedIndexes.includes(index) ? styles.transform : ''}
          />
        )}
      </li>
      {openedIndexes.includes(index) && (
        <ul className={styles.dropdownContent}>
          {option.values.map((value, i) => (
            <li className={styles.menuItem} key={i}>
              {option.type === 'radio' ? (
                <label className={styles.itemContainer}>
                  <input
                    type='radio'
                    name={option.name}
                    checked={selectedRadio === `${index}-${i}`}
                    onChange={() => handleRadioChange(`${index}-${i}`)}
                  />
                  {value}
                </label>
              ) : (
                <label className={styles.itemContainer}>
                  <input
                    type='checkbox'
                    checked={selectedCheckboxes[`${index}-${value}`] || false}
                    onChange={() => handleCheckboxChange(value, index)}
                    className={styles.checkboxInput}
                  />
                  <div
                    className={`${styles.customCheckbox} ${
                      selectedCheckboxes[`${index}-${value}`]
                        ? styles.checked
                        : ''
                    }`}
                  ></div>
                  {value}
                </label>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
