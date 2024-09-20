import { useEffect, useRef } from "react";
import Icon from "../../../../UI/Icon/Icon";
import styles from "./CheckedIcon.module.css";

export function CheckedIcon() {
  const ref = useRef(null);
  useEffect(() => {
    const icon = ref.current;
    if (icon) icon.classList.add(styles.show);
  }, [ref]);
  return (
    <div className={styles.icon} ref={ref}>
      <Icon name="check" />
    </div>
  );
}
