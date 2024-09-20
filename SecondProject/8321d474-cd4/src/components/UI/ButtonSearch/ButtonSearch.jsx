import React from 'react';

import styles from './ButtonSearch.module.css'
import SearchIcon from '../../../assets/svg/SearchIcon';

const ButtonSearch = () => {
  const handleClick = (e) => {
    e.preventDefault();

  }

  return (
    <button
      onClick={handleClick}
      type='button'
      className={styles.buttonSearch}
    >
      <SearchIcon />
    </button>
  );
};

export default ButtonSearch;
