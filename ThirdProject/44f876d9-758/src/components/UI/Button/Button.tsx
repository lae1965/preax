import styles from './button.module.css';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  classes?: string[];
  primary?: boolean;
  description?: string;
  boldDescription?: string;
  load?: boolean;
  descriptionColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  onClick,
  classes,
  primary,
  children,
  description,
  boldDescription,
  disabled,
  descriptionColor,
  className,
  load,
  ...props
}) => {
  const cls = classes ? classes.map((item) => styles[item]).join(' ') : '';

  return (
    <div className={styles.wrapper}>
      <button
        className={`
          ${primary ? styles.button + ' ' + cls : styles.reset + ' ' + cls}
          ${disabled ? styles.disabled : ''}
          ${className}
        `}
        type={type}
        disabled={disabled}
        onClick={(e) => onClick?.(e)}
        {...props}
      >
        {children}
      </button>
      {description && (
        <p
          className={`
            ${styles.btn_descr}
            ${disabled ? styles.disabled : ''}
            ${descriptionColor ?? ''}
          `}
        >
          {description} <span className={styles.bold}>{boldDescription}</span>
        </p>
      )}
    </div>
  );
};

export default Button;
