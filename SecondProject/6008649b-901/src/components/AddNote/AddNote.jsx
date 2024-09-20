import React, { useState } from 'react';
import styles from './AddNote.module.css';
import Logo from '../UI/Logo/Logo';
import Input from '../UI/Input/Input';
import EmojiSelector from '../UI/EmojiSelector/EmojiSelector';
import Textarea from '../UI/Textarea/Textarea';
import ButtonPrime from '../UI/ButtonPrime/ButtonPrime';
import Icon from '../UI/Icon/Icon';
import ImagesList from './ImagesList/ImagesList';

const AddNote = ({ setIsAddNoteOpen }) => {
  const [nameValue, setNameValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isSearchPictureMode, setIsSearchPictureMode] = useState(false);
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split('T')[0]
  );

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDateValue = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <section
      className={`${styles.addNote} ${
        isSearchPictureMode ? styles.bgGray : ''
      }`}
    >
      <div
        onClick={() => {
          setIsAddNoteOpen(false);
        }}
        className={isSearchPictureMode ? styles.unActive : ''}
      >
        <Logo />
      </div>
      <div className={styles.content}>
        <form
          className={`${styles.eventInfo} ${
            isSearchPictureMode ? styles.unActive : ''
          }`}
        >
          <div className={styles.nameInput}>
            <Input
              placeholder='Название'
              inputValue={nameValue}
              handleChange={handleNameValue}
            />
          </div>
          <div className={styles.dateEmoji}>
            <div className={styles.emoji}>
              <EmojiSelector />
            </div>
            <div className={styles.dateInput}>
              <Input
                type='date'
                placeholder=''
                inputValue={dateValue}
                handleChange={handleDateValue}
              />
            </div>
          </div>
          <div className={styles.areaButton}>
            <Textarea />
            <ButtonPrime
              text={'Добавить запись'}
              iconName={'pen'}
              isTextAlways='true'
            />
          </div>
          <div
            className={styles.imageChoice}
            onClick={() => {
              setIsSearchPictureMode(true);
            }}
          >
            <Icon name='photo' />
          </div>
        </form>
        <div
          className={`${styles.searchPictures} ${
            !isSearchPictureMode ? styles.unActive : ''
          }`}
        >
          <div className={styles.searchQuery}>
            <Input
              placeholder='Поиск'
              inputValue={searchValue}
              handleChange={handleSearchValue}
            />
            <div
              className={styles.searchIcon}
              onClick={() => {
                setIsSearchPictureMode(false);
              }}
            >
              <Icon name='search' />
            </div>
          </div>
          <ImagesList />
        </div>
      </div>
    </section>
  );
};

export default AddNote;
