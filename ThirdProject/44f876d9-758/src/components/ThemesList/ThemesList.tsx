import styles from './ThemesList.module.css';
import type { TTheme } from '../../types/theme';
import ThemesItem from '../ThemesItem/ThemesItem';

interface IThemesListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  list: TTheme[];
}

function ThemesList({ list }: IThemesListProps) {
  return (
    <ul className={styles.list}>
      {list.length &&
        list.map((item) => (
          <ThemesItem item={item} image={`${item.name}.jpg`} key={item.id} />
        ))}
    </ul>
  );
}

export default ThemesList;
