import { useLocation } from 'react-router-dom';
import { Tab } from './Tab/Tab';
import styles from './tabbar.module.css';
import clsx from '@/utils/clsx';

export interface TabItem {
  label: string;
  link: string;
}

interface TabBarProps extends React.HTMLAttributes<HTMLElement> {
  items: TabItem[];
}

export const TabBar: React.FC<TabBarProps> = ({
  items,
  className,
  ...otherProps
}) => {
  const location = useLocation();

  return (
    <nav>
      <ul className={clsx(styles.list, className)} {...otherProps}>
        {items.map((item) => (
          <Tab
            key={item.link}
            label={item.label}
            link={item.link}
            isActive={item.link === location.pathname}
          />
        ))}
      </ul>
    </nav>
  );
};
