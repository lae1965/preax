import styles from './styles.module.css';

export const Tab = ({active=false, text="", aria="", onClick}) => {
  return (
    <button onClick={onClick} className={`${styles.block} ${active ? styles.active:''}`} tabIndex="0" aria-label={aria}>{text}</button>
  );
};
