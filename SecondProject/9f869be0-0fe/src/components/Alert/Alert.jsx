import { createPortal } from "react-dom";
import styles from "./Alert.module.css";
import Icon from "../UI/Icon/Icon";
import { useCallback, useEffect, useRef } from "react";

export function Alert({ message, type = "msg", closeFunction }) {
  const root = document.querySelector("#alert-root");
  const ref = useRef(null);

  const close = useCallback(() => {
    const alert = ref.current;
    if (alert) {
      alert.classList.remove(styles.open);
      alert.addEventListener("transitionend", closeFunction, { once: true });
    }
  }, [ref, closeFunction]);

  useEffect(() => {
    const alert = ref.current;
    let timeout;
    if (alert) {
      alert.classList.add(styles.open);
      timeout = setTimeout(close, 5000);
    }
    return () => clearTimeout(timeout);
  }, [ref, close]);

  if (!root) return null;
  return createPortal(
    <div className={[styles.container, styles[type]].join(" ")} ref={ref}>
      <button
        className={styles.closeBtn}
        aria-label="Закрыть сообщение"
        onClick={close}
      >
        <Icon name={"cross"} />
      </button>
      <span className={styles.message}>{message}</span>
    </div>,
    root
  );
}
