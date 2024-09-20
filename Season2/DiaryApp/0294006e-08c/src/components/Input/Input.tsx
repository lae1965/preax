import { useEffect, useRef } from 'react';
import styles from './Input.module.css';
import { ClearText } from '../Icons/ClearText';

interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
  isFocus?: boolean;
  isClearButton?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  value,
  onChange,
  onEnterPress,
  className = '',
  isFocus = false,
  isClearButton = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterPress) {
      e.preventDefault();
      onEnterPress();
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange({
      target: { name, value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={styles.wrapper}>
      <input
        placeholder={placeholder}
        type='text'
        name={name}
        onChange={onChange}
        value={value}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        autoComplete='off'
        className={`${styles.input} ${className}`}
      />
      {isClearButton && !!value && (
        <button onClick={handleClear} className={styles.button}>
          <ClearText className={styles.clear} />
        </button>
      )}
    </div>
  );
};
