import React from "react";
import styles from "./ImagesItem.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { CheckedIcon } from "./CheckedIcon";

const ImageItem = ({ image, isSelected, handleChoice }) => {
  const [orientation, setOrientation] = useState("album");

  useEffect(() => {
    if (image.height > image.width) setOrientation("portrait");
  }, [image.height, image.width, setOrientation]);

  return (
    <button
      className={[
        styles.imageItem,
        styles[orientation],
        typeof isSelected === "boolean" && !isSelected
          ? styles.notSelected
          : "",
      ].join(" ")}
      style={{ backgroundImage: `url(${image.imageUrl})` }}
      onClick={() => {
        handleChoice();
      }}
    >
      {isSelected && <CheckedIcon />}
    </button>
  );
};

export default ImageItem;
