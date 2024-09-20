import { forwardRef, useRef } from 'react';
import { XMarkSolidSVG } from '../IconsSVG/XMarkSolidSVG';
import clsx from '@utils/clsx';
import styles from './Input.module.css';
import dropdownStyles from '../Dropdown/Dropdown.module.css';
import { useGetFiltersCount } from '@hooks/useGetFiltersCount';

export const Input = forwardRef(
  (
    {
      type = 'text',
      name,
      placeholder,
      icon: Icon,
      value,
      onChange,
      className,
      ...rest
    },
    ref
  ) => {
    const isClearBtnShown = type === 'text' && !!value;

    const onClear = () => {
      onChange({ target: { value: '' } });
      ref.current?.focus();
    };

    const count = useGetFiltersCount(name);

    return (
      <div
        className={clsx(
          styles.inputWrapper,
          isClearBtnShown && styles.clearBtnShown
        )}
      >
        <Icon className={styles.icon} />
        <input
          ref={ref}
          type={type}
          className={clsx(className, styles.input)}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {!!count && !value.length && (
          <div className={clsx(dropdownStyles.counter, styles.counter)}>
            {count}
          </div>
        )}
        {isClearBtnShown && (
          <button className={clsx('btn', styles.clearBtn)} onClick={onClear}>
            <XMarkSolidSVG />
          </button>
        )}
      </div>
    );
  }
);
