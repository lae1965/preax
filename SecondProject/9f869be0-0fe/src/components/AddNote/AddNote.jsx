import React, { useContext, useEffect, useState } from "react";
import styles from "./AddNote.module.css";
import Logo from "../UI/Logo/Logo";
import Input from "../UI/Input/Input";
import EmojiSelector from "../UI/EmojiSelector/EmojiSelector";
import Textarea from "../UI/Textarea/Textarea";
import ButtonPrime from "../UI/ButtonPrime/ButtonPrime";
import Icon from "../UI/Icon/Icon";
import ImagesList from "./ImagesList/ImagesList";
import { Alert } from "../Alert";
import { NotesContext } from "src/model/slices/Notes";
import { fetchGetRandomPictures, fetchSearchPicture } from "src/api/api";
import { useDebounce } from "../hooks/hooks";

const AddNote = ({ setIsAddNoteOpen }) => {
  const [nameValue, setNameValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [noteText, setNoteText] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [isSearchPictureMode, setIsSearchPictureMode] = useState(false);
  const [img, setImg] = useState(null);
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [pictures, setPictures] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { value: notes, addNote } = useContext(NotesContext);
  const [validationError, setValidationError] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains(styles.addNote))
        setIsSearchPictureMode(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setPictures(await fetchGetRandomPictures());
      setIsLoading(false);
    })();
  }, []);

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
  };

  const handleDateValue = (e) => {
    setDateValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError(null);
    const note = {
      title: nameValue,
      note: noteText,
      date: dateValue,
      foto: img,
    };
    if (Object.values(note).some((v) => !v)) {
      setValidationError("Необходимо заполнить все поля и выбрать картинку.");
      return;
    }
    note.emoji = typeof selectedEmoji === "string" ? selectedEmoji : null;
    note.id = !notes.length ? 0 : notes[notes.length - 1].id + 1;
    addNote(note);
    setIsAddNoteOpen(false);
    setImg(null);
  };

  const searchPictures = async (value = searchValue) => {
    if (value === "") return;
    setIsLoading(true);
    const data = await fetchSearchPicture(value);
    setPictures(data);
    if (!data) setImg(null);
    setIsLoading(false);
  };
  const debuanceSearchPictures = useDebounce(searchPictures, 1000);

  const handleSearchValue = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    debuanceSearchPictures(value);
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    await searchPictures();
    setSearchValue("");
  };

  return (
    <section
      className={`${styles.addNote} ${
        isSearchPictureMode ? styles.bgGray : ""
      }`}
    >
      <div
        onClick={() => {
          setIsAddNoteOpen(false);
        }}
        className={isSearchPictureMode ? styles.unActive : ""}
      >
        <Logo />
      </div>
      <div className={styles.content}>
        <form
          className={`${styles.eventInfo} ${
            isSearchPictureMode ? styles.unActive : ""
          }`}
        >
          <div className={styles.nameInput}>
            <Input
              placeholder="Название"
              inputValue={nameValue}
              handleChange={handleNameValue}
            />
          </div>
          <div className={styles.dateEmoji}>
            <div className={styles.emoji}>
              <EmojiSelector
                selectedEmoji={selectedEmoji}
                setSelectedEmoji={setSelectedEmoji}
              />
            </div>
            <div className={styles.dateInput}>
              <Input
                type="date"
                placeholder=""
                inputValue={dateValue}
                handleChange={handleDateValue}
              />
            </div>
          </div>
          <div className={styles.areaButton}>
            <Textarea value={noteText} setValue={setNoteText} />
            <div className={styles.actions}>
              <ButtonPrime
                iconName={"pen"}
                isTextAlways="true"
                onClick={handleSubmit}
              >
                <span>Добавить запись</span> <span>Добавить</span>
              </ButtonPrime>
              <ButtonPrime
                iconName={"cross"}
                isTextAlways={"true"}
                type="secondary"
                onClick={() => setIsAddNoteOpen(false)}
              >
                <span>Отменить добавление </span> <span>Отменить</span>
              </ButtonPrime>
            </div>
          </div>
          <div
            className={styles.imageChoice}
            onClick={() => {
              setIsSearchPictureMode(true);
            }}
          >
            {img ? (
              <img className={styles.currentImg} src={img} alt="" />
            ) : (
              <Icon name="photo" />
            )}
          </div>
        </form>
        <div
          className={`${styles.searchPictures} ${
            !isSearchPictureMode ? styles.unActive : ""
          }`}
        >
          <form className={styles.searchQuery} onSubmit={handleSubmitSearch}>
            <Input
              placeholder="Поиск"
              inputValue={searchValue}
              handleChange={handleSearchValue}
            />
            <button className={styles.searchIcon} type="submit">
              <Icon name="search" />
            </button>
          </form>
          <ImagesList
            isLoading={isLoading}
            imagesList={pictures}
            handleChoice={(src) => {
              setImg(src);
              setIsSearchPictureMode(false);
            }}
          />
        </div>
      </div>
      {validationError && (
        <Alert
          message={validationError}
          type="error"
          closeFunction={() => setValidationError(null)}
        />
      )}
    </section>
  );
};

export default AddNote;
