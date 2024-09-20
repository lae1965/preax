import { forwardRef } from 'react';
import styles from './dropdown.module.css'

const Dropdown = forwardRef((props, ref) => {
  const { className, children } = props
  return (
    <div className={`${styles.dropdown} ${className}`} ref={ref}>
      {children}
    </div>
  )
})

export default Dropdown;