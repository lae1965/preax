import React, { useState, useEffect, useRef, useContext } from 'react';

import SelectorArrow from '../../../assets/svg/SelectorArrow';
import SelectorDefaultSmile from '../../../assets/svg/SelectorDefaultSmile';

import styles from './EmojiSelector.module.css';
import { AddNoteContext } from '../../../utils/context';

const EmojiSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { emoji, setEmoji } = useContext(AddNoteContext);
  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const emojis = [
    <SelectorDefaultSmile />,
    '😌',
    '😊',
    '😄',
    '🤣',
    '😰',
    '🥰',
    '🙃',
    '😔',
    '😇',
    '🤔',
    '😩',
    '😭',
    '😤',
    '😵',
    '🤒',
    '🤤',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectEmoji = (emj) => {
    setEmoji(emj);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectorRef}
      className={`${styles.selector} ${isOpen ? styles.open : ''} ${
        isOpen ? styles.focus : ''
      }`} // Добавляем условие для класса 'focus'
      onClick={toggleDropdown}
    >
      <div className={styles.emoji}>{emoji || <SelectorDefaultSmile />}</div>
      <div className={styles.arrow}>
        <SelectorArrow />
      </div>
      <div className={styles.dropdown}>
        {emojis.map((option, index) => (
          <div key={index} onClick={() => selectEmoji(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSelector;