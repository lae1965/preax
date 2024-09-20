import React from "react";
import { useState } from "react";
import Logo from "../UI/Logo/Logo";
import Input from "../UI/Input/Input";
import EmojiSelector from "../UI/EmojiSelector/EmojiSelector";
import styles from "./Header.module.css";
import ButtonPrime from "../UI/ButtonPrime/ButtonPrime";
import { createPortal } from "react-dom";
import AddNote from "../AddNote/AddNote";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <Logo />
          <form id="search" className={styles.inputGroup}>
            <div className={styles.inputContainer}>
              <Input
                placeholder="Поиск"
                inputValue={inputValue}
                handleChange={handleChange}
              />
            </div>
            <EmojiSelector
              selectedEmoji={selectedEmoji}
              setSelectedEmoji={setSelectedEmoji}
            />
          </form>
        </div>

        <div className={styles.buttonContainer}>
          <ButtonPrime
            text={"Добавить запись"}
            iconName={"pen"}
            onClick={() => {
              setIsAddNoteOpen(true);
            }}
          />
        </div>
      </header>
      {isAddNoteOpen &&
        createPortal(
          <AddNote setIsAddNoteOpen={setIsAddNoteOpen} />,
          document.getElementById("modal")
        )}
    </>
  );
};

export default Header;
