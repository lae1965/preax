import { ButtonHTMLAttributes, useEffect } from 'react';
import styles from './Button.module.css';
import { clsx } from '../../../lib';
import { useHotKeys } from '../../../hooks/useHotKeys';
interface IButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | string;
  keyDesctiption?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
}

const Button = ({
  children,
  className,
  onClick,
  keyDesctiption = false,
  ...props
}: IButtonProps) => {
  const { hotKeyText, hotKeyActive, setHotKeyActive } = useHotKeys();

  useEffect((): void => {
    if (!props.disabled && keyDesctiption) {
      if (hotKeyActive === true && onClick) {
        onClick();
      }
    }
    setHotKeyActive(false);
  }, [hotKeyActive, props.disabled, setHotKeyActive]);

  return (
    <div className={clsx(className, styles.button)}>
      <button className={styles.button__body} onClick={onClick} {...props}>
        {children}
      </button>
      {keyDesctiption && (
        <p className={styles.button__description}>
          {'или нажмите '}
          <span className={styles.button__keyDesctiption}>{hotKeyText}</span>
        </p>
      )}
    </div>
  );
};

export default Button;
