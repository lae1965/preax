import style from './Button.module.css';

const Button = ({ btnType, content, onClick, className, disabled, ...rest }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style.default} ${btnType ? style[btnType] : ''} ${className || ''}`}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
