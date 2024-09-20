import styles from './Selector.module.css';

import { useEffect, useState } from 'react';
import { DefaultEmoji } from '../Icons/DefaultEmoji';
import { Arrow } from '../Icons/Arrow';
import { emoji } from '../../util/constants';
import { EmojiList } from '../EmojiList/EmojiList';
import { useClickOutside } from '../../hooks/useClickOutside';

export const Selector: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const initial = localStorage.getItem('emoji');
  const [emojiNumber, setEmojiNumber] = useState<number>(
    initial ? +initial : 0
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('emoji', emojiNumber.toString());
  }, [emojiNumber]);

  const refElement = useClickOutside<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
  });

  const handleToggleEmoji = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setNewEmoji = (newNumber: number) => {
    setEmojiNumber(newNumber);
    setIsDropdownOpen(false);
  };
  return (
    <div
      className={styles.wrapper}
      data-opened={isDropdownOpen ? 'true' : 'false'}
      ref={refElement}
    >
      <button
        type='button'
        className={styles.selector}
        onClick={handleToggleEmoji}
      >
        {(emojiNumber === 0 && <DefaultEmoji />) || emoji[emojiNumber]}
        <div className={styles.arrowWrapper}>
          <Arrow />
        </div>
      </button>
      {isDropdownOpen && (
        <EmojiList emojiNumber={emojiNumber} setNewEmoji={setNewEmoji} />
      )}
    </div>
  );
};
