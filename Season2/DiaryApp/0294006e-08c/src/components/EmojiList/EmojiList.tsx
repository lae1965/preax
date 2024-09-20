import styles from './EmojiList.module.css';
import { emoji } from '../../util/constants';
import { Emoji } from '../Emoji/Emoji';
import { Button } from '../Button/Button';
import { ClearEmoji } from '../Icons/ClearEmoji';

interface EmojiListProps extends React.HTMLAttributes<HTMLDivElement> {
  emojiNumber: number;
  setNewEmoji: (number: number) => void;
  // setEmojiNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const EmojiList: React.FC<EmojiListProps> = ({
  emojiNumber,
  setNewEmoji,
}) => {
  return (
    <div className={styles.emojiList}>
      <div className={styles.list}>
        {emoji.slice(1).map((item, index) => (
          <Emoji
            key={index}
            emoji={item}
            number={index + 1}
            setNewEmoji={setNewEmoji}
            isActive={emojiNumber === index + 1}
          />
        ))}
      </div>
      <Button
        icon={ClearEmoji}
        text='Убрать эмоцию'
        onClick={() => {
          setNewEmoji(0);
        }}
        className={styles.clearButton}
      />
    </div>
  );
};
