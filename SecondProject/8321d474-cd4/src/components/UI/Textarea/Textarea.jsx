import React, { useContext, useState } from 'react';

import styles from './Textarea.module.css';
import { AddNoteContext } from '../../../utils/context';

const Textarea = () => {
  const { text, setText } = useContext(AddNoteContext);
  const [textareaHeight, setTextareaHeight] = useState(400);

  const handleChange = (e) => {
    setText(e.target.value);
    setTextareaHeight(e.target.scrollHeight);
  };

  return (
    <>
      <textarea
        style={{ height: `${textareaHeight}px` }}
        placeholder='Описание'
        onChange={handleChange}
        className={styles.textarea}
        value={text}
      >
        {text}
      </textarea>
    </>
  );
};

export default Textarea;
