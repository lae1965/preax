import styles from './AddNote.module.css';

import { Button } from '../Button/Button';
import { Calendar } from '../Calendar/Calendar';
import { Edit24SVG } from '../Icons/Edit24SVG';
import { Image } from '../Image/Image';
import { Input } from '../Input/Input';
import { Selector } from '../Selector/Selector';
import { Textarea } from '../Textarea/Textarea';
import { TagSelector } from '../TagSelector/TagSelector';
import { useInput } from '../../hooks/useInput';
import { ImageProvider } from '../../context/ImageContext';

export const AddNote = () => {
  const titleInput = useInput('title');
  const descriptionInput = useInput('description');
  const dateInput = useInput(
    'date',
    new Date(Date.now())
      .toLocaleDateString('zh-Hans-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '-')
  );

  return (
    <form
      className={styles.addNote}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.data}>
        <Input placeholder='Заголовок' {...titleInput} />
        <div className={styles.dateEmoji}>
          <Calendar {...dateInput} />
          <Selector />
        </div>
        <Textarea {...descriptionInput} />
        <ImageProvider>
          <Image />
        </ImageProvider>
        <TagSelector />
      </div>
      <div className={styles.buttons}>
        <Button
          icon={Edit24SVG}
          text='Создать запись'
          type='submit'
          className={styles.button}
        />
        <Button
          text={'Отменить'}
          className={`${styles.button} ${styles.greyButton}`}
        />
      </div>
    </form>
  );
};
