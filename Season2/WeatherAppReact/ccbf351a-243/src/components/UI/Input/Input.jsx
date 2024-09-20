import styles from './input.module.css'

export const Input = ({ type, value, onChange, className, onClear, disabled, children, ...props }) => {
  return (
    <label onClick={onClear} className={styles.label}>
      <input
        value={value}
        type={type ?? 'text'}
        onChange={onChange}
        className={`
           ${styles.input} 
           ${className}`}
        disabled={disabled}
        {...props}
      />
      {children}
    </label>
  )
}