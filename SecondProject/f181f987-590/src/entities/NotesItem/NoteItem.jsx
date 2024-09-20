import React from 'react';

import styles from './NoteItem.module.css';
import { convertDate } from '../../utils/convertDate';

export function NoteItem({ item, cardWidth }) {
  return (
    <article
      style={{
        backgroundImage: `url(${item.foto})`,
      }}
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.description}>
          <h3 className={styles.heading}>{item.title}</h3>
          <span className={styles.date}>{convertDate(item.date)}</span>
        </div>
        <p className={styles.text}>{item.note}</p>
      </div>
      <div className={styles.circle}>{item.emoji}</div>
    </article>
  );
}
