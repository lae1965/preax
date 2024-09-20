import React, { useState } from 'react';
import { ClearValue, EyePass, EyeOffPass } from '../../SVG';
import { Button } from '..';
import styles from './input.module.css';

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  description?: string;
  onClear?: () => void;
}

const Input: React.FC<IInputProps> = ({
  type,
  label = '',
  description,
  value,
  className,
  children,
  onClear,
  ...props
}) => {
  const [showInputPassword, setShowInputPassword] = useState<boolean>(false);

  return (
    <div>
      <label className={styles.label}>
        {label}
        <div className={styles.input_wrapper}>
          <input
            value={value}
            type={showInputPassword ? 'text' : type}
            className={`
            ${styles.input} 
            ${type === 'password' ? styles.extraPadding : ''} 
            ${className}`}
            {...props}
          />
          {value && (
            <div className={styles.additional_block}>
              <Button
                className={styles.additional_block_clear}
                aria-label="Очистить поле"
                onClick={onClear}
                tabIndex={-1}
              >
                <ClearValue />
              </Button>
              {type === 'password' && (
                <Button
                  className={styles.additional_block_clear}
                  aria-label={
                    !showInputPassword ? 'Скрыть пароль' : 'Показать пароль'
                  }
                  onClick={() => setShowInputPassword(!showInputPassword)}
                  tabIndex={-1}
                >
                  {!showInputPassword ? <EyePass /> : <EyeOffPass />}
                </Button>
              )}
            </div>
          )}
        </div>
      </label>
      {children}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Input;
