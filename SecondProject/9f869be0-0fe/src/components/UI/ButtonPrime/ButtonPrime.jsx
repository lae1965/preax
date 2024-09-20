import styles from "./ButtonPrime.module.css";
import Icon from "../Icon/Icon";

const ButtonPrime = ({
  iconName,
  text,
  isTextAlways,
  className = "",
  type = "primary",
  onClick = (e) => {
    e.preventDefault();
  },
  children,
}) => {
  return (
    <button
      className={[
        styles.button,
        isTextAlways ? "" : styles.shortButton,
        type === "secondary" ? styles.secondary : "",
        className,
      ].join(" ")}
      aria-label={"Logo button"}
      onClick={onClick}
    >
      {iconName && <Icon name={iconName} />}
      {text && <span className={isTextAlways ? "" : styles.text}>{text}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

export default ButtonPrime;
