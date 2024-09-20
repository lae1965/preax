import { useMemo } from 'react';
import { Profile } from '@/components/Profile';
import { Logo, TabBar, TabItem } from '@/UI';
import clsx from '@/utils/clsx';
import styles from './mainheader.module.css';

interface MainHeaderProps extends React.HTMLAttributes<HTMLElement> { }

export const MainHeader: React.FC<MainHeaderProps> = ({
  className,
  ...otherProps
}) => {
  const routes = useMemo<TabItem[]>(
    () => [
      {
        label: 'Главная',
        link: '/main',
      },
      {
        label: 'Рейтинг',
        link: '/rating',
      },
    ],
    [],
  );

  return (
    <header className={clsx(styles.header, className)} {...otherProps}>
      <Logo className={styles.logo} />
      <div className={styles.right}>
        <TabBar items={routes} />
        <Profile />
      </div>
    </header>
  );
};
