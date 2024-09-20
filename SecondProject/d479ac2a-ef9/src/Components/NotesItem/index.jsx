import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import style from './NotesItem.module.css';

import { normalizeDate } from '../../util/normalizeDate';
import { Modal } from '../Modal';
import { Emoji } from '../Emoji';

export const NotesItem = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = (ev) => {
    setIsOpen(true);
  };

  return (
    <>
      <article onClick={clickHandler} className={style.card}>
        <div
          className={style.backgroundContainer}
          style={{
            background: `url(${note.foto}) lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <div className={style.circle}>
          <figure>
            <Emoji emoji={note.emoji} />
          </figure>
        </div>
        <footer className={style.footer}>
          <div className={style.hWrapper}>
            <h2 className={style.h2}>{note.title}</h2>
            <p className={style.date}>{normalizeDate(note.date, false)}</p>
          </div>
          <div className={style.wrapperDescription}>
            <p className={style.description}>{note.note}</p>
          </div>
        </footer>
      </article>

      {isOpen &&
        createPortal(
          <Modal note={note} setIsOpen={setIsOpen} />,
          document.getElementById('modal')
        )}
    </>
  );
};
