import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './ThemeList.module.css';
import { ThemeItem } from '..';
import { Theme } from '../../types';

interface IThemeListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  themesList: Theme[];
  selectList: number[];
  setSelectList: (idList: number[]) => void;
}

function ThemeList({ themesList, selectList, setSelectList }: IThemeListProps) {
  const isSelected = (id: number) => {
    return selectList.findIndex((itemId) => itemId === id) !== -1;
  };

  const onClickImage = (id: number) => {
    if (isSelected(id)) {
      if (selectList.length > 0)
        setSelectList(selectList.filter((itemId) => itemId !== id));
    } else {
      if (selectList.length < 3) setSelectList([...selectList, id]);
    }
  };

  return (
    <div className={styles.wrapper}>
      {themesList.map((item) => (
        <ThemeItem
          key={item.id}
          id={item.id.toString()}
          name={item.name}
          onClickImg={onClickImage}
          isSelected={isSelected(item.id)}
        />
      ))}
    </div>
  );
}

export default ThemeList;
