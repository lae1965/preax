import { useRef, useState } from 'react';

import styles from './TagSelector.module.css';

import { Input } from '../Input/Input';
import { useKeydown } from '../../hooks/useKeydown';
import { useHintsList } from '../../hooks/useHintsList';
import { useSaveTagsList } from '../../hooks/useSaveTagsList';
import { TagList } from '../TagList/TagList';
import { TagDropdown } from '../TagDropdown/TagDropdown';

const getListFromLocalStorage = (itemName: string): string[] => {
  const value = localStorage.getItem(itemName);

  return value ? JSON.parse(value) : [];
};

export const TagSelector: React.FC = () => {
  const [tag, setTag] = useState<string>('');
  const [tagsList, setTagsList] = useState<string[]>(
    getListFromLocalStorage('tagsList')
  );
  const hintsList = useHintsList(tag, tagsList);
  const [choiceHintNumber, setChoiceHintNumber] = useState<number>(-1);

  const hoveredItemRef = useRef<HTMLDivElement | null>(null);

  useSaveTagsList(tagsList);

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    hoveredItemRef.current = event.currentTarget;
  };

  const handleMouseOut = () => {
    hoveredItemRef.current = null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
    setChoiceHintNumber(-1);
  };

  const handleEnterPress = (val?: string) => {
    const value =
      choiceHintNumber !== -1 && hoveredItemRef.current
        ? hintsList[choiceHintNumber]
        : val;
    if (!value) return;

    const find = tagsList.findIndex((item) => item === value);
    if (find === -1) setTagsList((prev) => [...prev, value]);

    setChoiceHintNumber(-1);
    setTag('');
    document.body.focus();
  };

  const handleDeleteTag = (item: string) => {
    setTagsList(tagsList.filter((tagItem) => tagItem !== item));
  };

  const handleChoiceTag = (index: number) => {
    setChoiceHintNumber(index);
  };

  useKeydown('ArrowDown', () => {
    if (hoveredItemRef.current) {
      setChoiceHintNumber((prev) => {
        if (prev < hintsList.length - 1) return prev + 1;
        return 0;
      });
    }
  });

  useKeydown('ArrowUp', () => {
    if (hoveredItemRef.current) {
      setChoiceHintNumber((prev) => {
        if (prev < 1) return hintsList.length - 1;
        return prev - 1;
      });
    }
  });

  useKeydown('Enter', () => {
    if (hoveredItemRef.current) {
      handleEnterPress();
    }
  });

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.inputGroup}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Input
          placeholder='#теги'
          name='tags'
          value={tag}
          onChange={handleChange}
          onEnterPress={() => {
            handleEnterPress(tag);
          }}
          className={styles.tagInput}
          isClearButton
        />

        <TagDropdown
          tag={tag}
          hintsList={hintsList}
          choiceHintNumber={choiceHintNumber}
          handleChoiceTag={handleChoiceTag}
        />
      </div>
      <TagList tagsList={tagsList} handleDeleteTag={handleDeleteTag} />
    </div>
  );
};
