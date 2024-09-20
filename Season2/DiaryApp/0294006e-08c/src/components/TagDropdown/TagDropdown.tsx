import { useRef } from 'react';
import styles from './TagDropdown.module.css';
import { useScrollDropdownTags } from '../../hooks/useScrollDropdownTags';

interface TagDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  tag: string;
  hintsList: string[];
  choiceHintNumber: number;
  handleChoiceTag: (index: number) => void;
}

export const TagDropdown: React.FC<TagDropdownProps> = ({
  tag,
  hintsList,
  choiceHintNumber,
  handleChoiceTag,
}) => {
  const dropDownRef = useRef(null);
  const dropDownListRef = useRef(null);

  useScrollDropdownTags(choiceHintNumber, dropDownRef, dropDownListRef);

  return (
    <div
      ref={dropDownRef}
      className={`${styles.dropDown} ${
        tag.length && hintsList.length ? styles.dropDownOpen : ''
      }`}
      tabIndex={0}
    >
      <p className={styles.hintTitle}>Нажми Enter для добавления тега</p>
      <ul ref={dropDownListRef}>
        {hintsList.map((hint, index) => (
          <li
            key={index}
            className={styles.hint}
            data-choiced={index === choiceHintNumber}
            onClick={() => {
              handleChoiceTag(index);
            }}
          >
            {hint}
          </li>
        ))}
      </ul>
    </div>
  );
};
