import { DetailedHTMLProps, LiHTMLAttributes, useState } from 'react';
import { addTheme, removeTheme } from '../../redux/slices/themesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TTheme } from '../../types/theme';
import styles from './ThemesItem.module.css';
import CheckCircle from '../SVG/CheckCircle';

interface IThemesItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: TTheme;
  image: string;
}

function ThemesItem({ item, image }: IThemesItemProps) {
  const limit = useAppSelector((state) => state.themes.limit);
  const dispatch = useAppDispatch();
  const [choose, setChoose] = useState(false);
  const css =
    (limit && !choose ? styles.less : '') +
    ' ' +
    styles.item +
    ' ' +
    (choose ? styles.selected : styles.notSelected);

  const onChoose = () => {
    if (choose) {
      setChoose(false);
      dispatch(removeTheme(item.id));
    } else if (limit) return;
    else {
      setChoose(true);
      dispatch(addTheme(item));
    }
  };

  return (
    <li
      className={css}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onChoose}
    >
      <button className={styles.btn}> {item.name}</button>
      {choose && <CheckCircle />}
    </li>
  );
}

export default ThemesItem;
