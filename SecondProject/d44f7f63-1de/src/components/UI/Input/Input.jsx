import styles from './Input.module.css';

const Input = ({ inputValue, handleBlur, handleChange, handleFocus, isFocused, setInputValue }) => {
  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type='text'
        placeholder='Поиск'
        value={inputValue}
        className={`${styles.input} ${isFocused ? styles.focus : ''}`}
        onChange={handleChange}
        onFocus={() => {
          handleFocus();
        }}
        onBlur={() => {
          handleBlur();
        }}
      />
      {inputValue && (
        <button className={styles.clearButton} onClick={handleClearInput}>
          &#215;
        </button>
      )}
    </div>
  );
};

export default Input;
