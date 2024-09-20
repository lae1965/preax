import styles from './Tag.module.css';
import { ClearText } from '../Icons/ClearText';
import { useState } from 'react';

interface TagProps extends React.LiHTMLAttributes<HTMLLIElement> {
  tag: string;
  handleDeleteTag: (tag: string) => void;
}

export const Tag: React.FC<TagProps> = ({ tag, handleDeleteTag }) => {
  const [isDeleteTagActive, setIsDeleteTagActive] = useState<boolean>(false);

  const handleDown = () => {
    setIsDeleteTagActive(true);
  };

  const handleUp = () => {
    setIsDeleteTagActive(false);
  };

  return (
    <li className={styles.tag} data-active={isDeleteTagActive}>
      <span>#{tag}</span>
      <button
        type='button'
        className={styles.button}
        onClick={() => {
          handleDeleteTag(tag);
        }}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseLeave={handleUp}
      >
        <ClearText />
      </button>
    </li>
  );
};
