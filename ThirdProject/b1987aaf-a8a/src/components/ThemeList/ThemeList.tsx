import { useCallback, useMemo } from 'react';
import { ThemeItem } from './ThemeItem';
import clsx from '@/utils/clsx';
import { ThemeData } from '@/types';
import styles from "./ThemeList.module.css";

interface ThemeListProps extends React.HTMLAttributes<HTMLUListElement> {
  data: ThemeData[] | null;
  selectedThemes: number[];
  onThemeSelect: (id: number) => void;
}

export const ThemeList: React.FC<ThemeListProps> = ({
  className,
  data,
  selectedThemes,
  onThemeSelect,
  ...otherProps
}) => {
  const isFull = useMemo(() => selectedThemes.length >= 3, [selectedThemes]);
  const isSelected = useCallback(
    (id: number) => !!selectedThemes.find((item) => item === id),
    [selectedThemes],
  );
  const isNotSelected = useCallback(
    (id: number) => !selectedThemes.find((item) => item === id) && isFull,
    [selectedThemes, isFull],
  );

  if (!data) {
    return null;
  }

  return (
    <ul className={clsx(styles.list, className)} {...otherProps}>
      {data?.map((theme) => (
        <li key={theme.id}>
          <ThemeItem
            data={theme}
            isSelected={isSelected(theme.id)}
            isNotSelected={isNotSelected(theme.id)}
            onClick={() => onThemeSelect(theme.id)}
            disabled={isNotSelected(theme.id) && isFull}
          />
        </li>
      ))}
    </ul>
  );
};
