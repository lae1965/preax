import React, { useContext } from 'react';

import styles from './AddNote.module.css';
import Logo from '../UI/Logo/Logo';
import Input from '../UI/Input/Input';
import EmojiSelector from '../UI/EmojiSelector/EmojiSelectior';
import Textarea from '../UI/Textarea/Textarea';
import { Button } from '../UI/Button/Button';
import SelectionImg from './SelectionImg/SelectionImg';
import ImgIcon from '../../assets/svg/ImgIcon';
import {
  AddNoteContext,
  IsShowContext,
  NoteContext,
} from '../../utils/context';

const backgroundGrey = 'linear-gradient(137deg, #E9E9E9 31.13%, #C1C1C1 100%)';

const AddNote = () => {
  const {
    activeIndex,
    setActiveIndex,
    title,
    setTitle,
    date,
    setDate,
    text,
    setText,
    emoji,
    setEmoji,
  } = useContext(AddNoteContext);
  const { setIsShowAddNote, setIsShowSelectImageModal } =
    useContext(IsShowContext);
  const { notesList, setNotesList } = useContext(NoteContext);

  const clearNoteAndExit = () => {
    setIsShowSelectImageModal(false);
    setIsShowAddNote(false);
    setActiveIndex(0);
    setTitle('');
    setDate(new Date().toISOString().split('T')[0]);
    setText('');
    setEmoji(null);
  };

  const clickModalHandle = (e) => {
    e.preventDefault();
    setIsShowSelectImageModal(true);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!activeIndex || text === '' || title === '' || !emoji) {
      alert('Необходимо заполнить тектовые поля и выбрать фото и эмоджи');
      return;
    }

    setNotesList([
      ...notesList,
      {
        id: notesList.length + 1,
        title,
        date,
        emoji,
        note: text,
        foto: notesList[activeIndex - 1].foto,
      },
    ]);
    clearNoteAndExit();
  };

  const handleCancelNote = (e) => {
    e.preventDefault();
    clearNoteAndExit();
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <Logo />
      </header>
      <form className={styles.form}>
        <section className={styles.textFill}>
          <div className={styles.inputsButtonWrapper}>
            <div className={styles.inputFlexWrapper}>
              <Input
                placeholder='Название'
                inputValue={title}
                setInputValue={setTitle}
              />
              <div className={styles.selectorAndInput}>
                <EmojiSelector />
                <div className={styles.inputWrapper}>
                  <Input
                    type='date'
                    placeholder='Дата'
                    inputValue={date}
                    setInputValue={setDate}
                  />
                </div>
              </div>
            </div>
            <button className={styles.imgButton} onClick={clickModalHandle}>
              {(activeIndex && (
                <img
                  className={styles.frame}
                  src={notesList[activeIndex - 1].foto}
                  alt='Выбранное фото'
                />
              )) || <ImgIcon />}
            </button>
          </div>
          <Textarea />
          <div className={styles.addButtonsGroup}>
            <div className={`${styles.buttonWrapper} ${styles.buttonAdd}`}>
              <Button
                onClick={handleAddNote}
                text='Добавить запись'
                iconName='pen'
                mobileShortText='true'
              />
            </div>
            <div className={`${styles.buttonWrapper} ${styles.buttonCancel}`}>
              <Button
                onClick={handleCancelNote}
                text='Отменить добавление'
                iconName='exit'
                background={backgroundGrey}
                mobileShortText='true'
              />
            </div>
          </div>
        </section>
        <SelectionImg />
      </form>
    </div>
  );
};

export default AddNote;
