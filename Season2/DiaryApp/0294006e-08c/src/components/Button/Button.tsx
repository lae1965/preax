import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  text?: string | null;
  icon?: React.ComponentType<React.HTMLAttributes<HTMLOrSVGElement>>;
  className?: string;
  onClick?: (() => void) | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  icon: Icon,
  text,
  className,

  onClick,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon />}
      {!!text && text}
    </button>
  );
};
