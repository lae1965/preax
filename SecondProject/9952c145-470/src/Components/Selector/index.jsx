import React, { useEffect, useState } from 'react';

import style from './Selector.module.css';
import { reactions } from '../../util/constants';
import smileMonthOpen from '../../assets/img/smile-mouth-open.svg';

export const Selector = () => {
  const [curReactionNumber, setCurReactionNumber] = useState(0);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isDropDownClass, setIsDropDownClass] = useState(false);

  const hideDrop = () => {
    setIsDropDownClass(false);
    setTimeout(() => {
      setIsDropDown(false);
    }, 400);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') hideDrop();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleToggleDrop = () => {
    if (isDropDown) {
      hideDrop();
    } else {
      setIsDropDown(true);
      setTimeout(() => {
        setIsDropDownClass(true);
      }, 10);
    }
  };

  const handleSelectReaction = (index) => {
    setCurReactionNumber(index);
    hideDrop();
  };

  return (
    <div className={style.drop_down}>
      <div className={style.select} onClick={handleToggleDrop}>
        {curReactionNumber ? (
          reactions[curReactionNumber]
        ) : (
          <img
            src={smileMonthOpen}
            alt='smile-mouth-open'
            className={style.img}
          />
        )}
      </div>
      {isDropDown && (
        <ul className={`${style.options} ${isDropDownClass ? style.drop : ''}`}>
          {reactions.map((reaction, index) => (
            <li
              key={index}
              onClick={() => handleSelectReaction(index)}
              className={index === curReactionNumber ? style.active : ''}
            >
              {index ? (
                reaction
              ) : (
                <img
                  src={smileMonthOpen}
                  alt='smile-mouth-open'
                  className={`${style.img} ${style.mb10}`}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
