import { forwardRef } from "react";
import Icon from "../icon";
import clsx from "../../utils/clsx";
import styles from "./input.module.css";

const Input = forwardRef((props, ref) => {
  const { type, id, value, className, onClear, ...otherProps } = props;

  return (
    <div className={styles.wrapper} htmlFor={id}>
      <input ref={ref} id={id} type={type} className={clsx(styles.input, value && styles.hasValue, className)} value={value} {...otherProps} />
      {onClear && (
        <button type="button" className={clsx("btn", styles.clearBtn)} onClick={onClear}>
          <Icon name="close" width="24" height="24" />
        </button>
      )}
    </div>
  )
})

export default Input;
