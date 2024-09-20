import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from '@/utils/clsx';
import styles from './tab.module.css';

interface TabProps extends React.HTMLAttributes<HTMLElement> {
  link: string;
  label: string;
  isActive: boolean;
}

export const Tab: React.FC<TabProps> = ({
  link,
  label,
  isActive,
  className,
  ...otherProps
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isActive) setActive(isActive);
  }, [isActive]);

  return (
    <li {...otherProps}>
      <Link
        to={link}
        className={clsx(styles.link, active && styles.active, className)}
      >
        {label}
      </Link>
    </li>
  );
};
