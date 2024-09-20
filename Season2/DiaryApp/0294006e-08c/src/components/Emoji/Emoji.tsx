import styles from './Emoji.module.css';

interface EmojiProps extends React.HTMLAttributes<HTMLDivElement> {
  emoji: string;
  number: number;
  isActive: boolean;
  setNewEmoji: (number: number) => void;
}

export const Emoji: React.FC<EmojiProps> = ({
  emoji,
  setNewEmoji,
  number,
  isActive,
}) => {
  return (
    <div
      className={`${styles.emoji} ${isActive ? styles.active : ''}`}
      onClick={() => setNewEmoji(number)}
    >
      {emoji}
    </div>
  );
};
