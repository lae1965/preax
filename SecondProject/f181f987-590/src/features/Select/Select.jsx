import styles from "./Select.module.css";
import { Icon } from "../../shared/Icon/Icon";
import { useEffect, useRef, useState } from "react";
import { iconsArr } from "../../utils/iconsArr";
import { generateRandomString } from "../../utils/generateRandomString";

export function Select() {
  const [icon, setIcon] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef();

  const openClick = () => {
    setIsOpen(() => !isOpen);
  };

  const clickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", clickOutside);
      return () => {
        document.removeEventListener("click", clickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div
      className={styles.select}
      aria-label={"Emotion select"}
      onClick={openClick}
      ref={clickRef}
    >
      {icon ? (
        <span className={styles.emoji}>{icon}</span>
      ) : (
        <Icon name={"defaultSmile"} />
      )}
      <span style={{ rotate: `${isOpen ? 180 : 0}deg` }}>
        <Icon name={"arrow"} />
      </span>
      {isOpen && (
        <ul className={styles.list}>
          {iconsArr.map((icon) => (
            <li
              key={generateRandomString()}
              className={styles.listItem}
              onClick={() => {
                setIcon(icon);
              }}
            >
              <span>{icon ? icon : <Icon name={"defaultSmile"} />}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
