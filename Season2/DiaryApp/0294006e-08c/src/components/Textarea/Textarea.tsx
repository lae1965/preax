import styles from './Textarea.module.css';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <textarea
      placeholder='Описание'
      name={name}
      value={value}
      onChange={onChange}
      className={styles.textarea}
    />
  );
};
