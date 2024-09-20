import React from "react";
import SelectorDefaultSmile from "src/assets/svg/SelectorDefaultSmile";
import styles from "./Emoji.module.css";

const Emoji = ({ size, symbol }) => {
  return (
    <div
      className={`${styles.commonEmoji} ${
        size === "big" ? styles.bigEmoji : styles.smallEmoji
      }`}
    >
      {typeof symbol === "string" ? symbol : <SelectorDefaultSmile />}
    </div>
  );
};

export default Emoji;
