import React, { useEffect, useRef, useState } from 'react';

import style from './Selector.module.css';
import { reactions } from '../../../util/constants';
import smileMonthOpen from '../../../assets/img/smile-mouth-open.svg';
import { Emoji } from '../../Emoji';

export const Selector = () => {
  const [curReactionNumber, setCurReactionNumber] = useState(0);
  const selectorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    if (!isOpen) {
      document.addEventListener('click', clickOutsideHandler);
    }
    setIsOpen(() => !isOpen);
  };
  const hideDrop = () => {
    setIsOpen(false);
  };
  const clickOutsideHandler = (ev) => {
    if (!ev.target.closest('.selectorContainer')) {
      setIsOpen(false);
      document.removeEventListener('click', clickOutsideHandler);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') hideDrop();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSelectReaction = (index) => {
    setCurReactionNumber(index);
    hideDrop();
  };

  return (
    <div
      className={`${style.drop_down} selectorContainer`}
      ref={selectorRef}
      onClick={clickHandler}
    >
      <div className={style.select}>
        {curReactionNumber ? (
          <Emoji emoji={reactions[curReactionNumber]} />
        ) : (
          <img
            src={smileMonthOpen}
            alt='smile-mouth-open'
            className={style.img}
          />
        )}
      </div>
      {isOpen && (
        <ul className={`${style.options}`}>
          {reactions.map((reaction, index) => (
            <li
              key={index}
              onClick={() => handleSelectReaction(index)}
              className={index === curReactionNumber ? style.active : ''}
            >
              {index ? (
                <Emoji emoji={reaction} />
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
