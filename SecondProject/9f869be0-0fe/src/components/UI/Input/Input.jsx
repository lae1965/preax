import styles from './Input.module.css';

const Input = ({
  type = 'text',
  placeholder,
  inputValue,
  handleChange,
  isFocused,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${isFocused ? styles.focus : ''}`}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
