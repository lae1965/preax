import styles from "./tab.module.css";

const Tab = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`${styles.switchBtn} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
