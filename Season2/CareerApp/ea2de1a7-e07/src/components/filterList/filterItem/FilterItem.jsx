import Icon from '@components/icon/Icon';
import styles from './FilterItem.module.css';
import { clsx } from '@utils/clsx';
import { FilterCounter } from '../filterCounter/filterCounter';
import { useClickOutside } from '@hooks/useClickOutside';
import { forwardRef, useEffect, useState } from 'react';

const FilterItem = forwardRef((props, ref) => {
  const {
    iconName,
    text,
    isOpenFilter,
    onClick,
    level,
    children,
    className,
    count,
    fullWidth = false,
    hidden = false,
  } = props;

  const [shortWidth, setShortWidth] = useState(false);

  useEffect(() => {
    setShortWidth(!isOpenFilter && level === 'high');
  }, [isOpenFilter, level]);

  return (
    <li
      className={clsx(
        styles.wrapper,
        className,
        shortWidth ? (!!count ? styles.withCount : styles.withoutCount) : ''
      )}
      onClick={onClick}
      data-level={level}
      data-short={shortWidth}
      data-fullwidth={fullWidth}
      data-hidden={hidden}
      ref={ref}
    >
      <div
        className={styles.title}
        data-active={isOpenFilter}
        data-short={shortWidth}
      >
        <Icon name={iconName} className={styles.icon} />
        <span
          className={styles.input}
          data-short={shortWidth}
          data-count={!!count}
        >
          {text}
        </span>
        <FilterCounter
          count={count}
          shortWidth={shortWidth}
          className={styles.counter}
        />
        <Icon
          name='chevron'
          className={clsx(
            styles.chevron,
            isOpenFilter && styles.active,
            shortWidth && styles.noDisplay
          )}
        />
      </div>
      {isOpenFilter && children}
    </li>
  );
});

export default FilterItem;
