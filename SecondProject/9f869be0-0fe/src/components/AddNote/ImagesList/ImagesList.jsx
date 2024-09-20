import React, { useState } from "react";
import styles from "./ImagesList.module.css";
import ImageItem from "./ImagesItem/ImagesItem";

const ImagesList = ({ isLoading, imagesList, handleChoice }) => {
  const [selected, setSelected] = useState(undefined);

  return (
    <>
      {(isLoading && <p className={styles.text}>Загрузка...</p>) ||
        (!!imagesList && (
          <div className={styles.imagesList}>
            {imagesList.map((item) => (
              <ImageItem
                key={item.id}
                image={item}
                isSelected={
                  typeof selected === "undefined"
                    ? selected
                    : selected === item.imageUrl
                }
                handleChoice={() => {
                  if (item.imageUrl === selected) {
                    setSelected(undefined);
                    handleChoice(null);
                  } else {
                    setSelected(item.imageUrl);
                    handleChoice(item.imageUrl);
                  }
                }}
              />
            ))}
          </div>
        )) ||
        (imagesList === null && (
          <p className={styles.text}>Ничего не найдено по данному запросу</p>
        ))}
    </>
  );
};

export default ImagesList;
