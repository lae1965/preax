import { forwardRef } from 'react';
import styles from './dropdown.module.css'
import clsx from '@utils/clsx';


const Dropdown = forwardRef((props, ref) => {

  const { className, children } = props
  return (
    <div className={clsx(styles.dropdown, className)} ref={ref}>
      {children}
    </div>
  )
})

export default Dropdown;