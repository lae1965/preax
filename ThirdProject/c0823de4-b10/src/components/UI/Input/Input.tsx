import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import { ValidationStatus } from '../../../types';
import { Sprites } from '../Sprites/Sprites';
import { clsx } from '../../../lib';
interface IInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  hint?: string;
  helpText?: string;
  validationStatus?: ValidationStatus;
  clearPool?: () => void;
  showPool?: () => void;
}

function Input({
  required,
  helpText,
  hint,
  title,
  validationStatus = 'regular',
  clearPool,
  showPool,
  ...props
}: IInputProps) {
  let statusClass = styles.regular;
  if (validationStatus === 'success') {
    statusClass = styles.success;
  } else if (validationStatus === 'error') {
    statusClass = styles.error;
  } else {
    statusClass = styles.regular;
  }

  return (
    <>
      <Sprites />
      <label className={styles.label}>
        {title ? <span className={styles.title}>{title}</span> : null}
        <input
          className={clsx(styles.input, statusClass)}
          required={required}
          {...props}
        />
        {props.value !== '' && (
          <div className={styles.miniButtonsBlock}>
            {
              <button
                onClick={clearPool}
                type="button"
                className={clsx(styles.miniButton, styles.showPassword)}
              >
                <svg height="24" width="24">
                  <use xlinkHref="#x-circle"></use>
                </svg>
              </button>
            }
            {showPool && (
              <button
                onClick={showPool}
                type="button"
                className={clsx(styles.miniButton, styles.clearBtn)}
              >
                {props.type === 'password' ? (
                  <svg height="24" width="24">
                    <use xlinkHref="#eye"></use>
                  </svg>
                ) : (
                  <svg height="24" width="24">
                    <use xlinkHref="#eye-off"></use>
                  </svg>
                )}
              </button>
            )}
          </div>
        )}

        {helpText ? (
          <p className={clsx(styles.helpText, statusClass)}>{helpText}</p>
        ) : null}
        {hint ? <p className={styles.hint}>{hint}</p> : null}
      </label>
    </>
  );
}

export default Input;
