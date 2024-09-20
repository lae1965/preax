import { useMemo, useState } from 'react';
import clsx from '@/utils/clsx';

import { IconClear } from '../icons/IconClear';
import { IconEyeOpen } from '../icons/IconEyeOpen';
import { IconEyeClosed } from '../icons/IconEyeClosed';

import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
  label?: string;
  message?: string | null;
  btns?: boolean;
  success?: boolean;
  onClean?: () => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  hint,
  label,
  message,
  success,
  btns,
  id,
  type,
  value,
  onClean,
  ...otherProps
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const inputType = useMemo(
    () => (type === 'password' && isVisible ? 'text' : type),
    [isVisible, type],
  );

  return (
    <div
      className={clsx(
        styles.wrapper,
        message && (success ? styles.success : styles.error),
        className,
      )}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          value={value}
          className={styles.input}
          id={id}
          type={inputType}
          {...otherProps}
        />
        {btns && value !== '' && (
          <div className={styles.btnWrap}>
            <button type="button" onClick={onClean}>
              <IconClear />
            </button>
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {isVisible ? <IconEyeClosed /> : <IconEyeOpen />}
              </button>
            )}
          </div>
        )}
      </div>
      <span className={clsx(styles.message, message && styles.visible)}>
        {message}
      </span>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
};
