import React from 'react';
import style from './MainContainer.module.css';

const MainContainer = ({ children }) => {
  return <div className={style.mainContainer}>{children}</div>;
};

export default MainContainer;
