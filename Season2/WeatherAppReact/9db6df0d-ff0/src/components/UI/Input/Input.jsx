import { useRef, useEffect } from 'react';
import styles from './input.module.css';

export const Input = ({
  type,
  value,
  onChange,
  onClick,
  setInputRef,
  className,
  children,
  ...props
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef?.current) setInputRef(inputRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current]);

  return (
    <label className={styles.label}>
      <input
        value={value}
        type={type ?? 'text'}
        onChange={onChange}
        onClick={onClick}
        ref={inputRef}
        className={`
          ${styles.input} 
          ${className}`}
        {...props}
      />
      {children}
    </label>
  );
};
