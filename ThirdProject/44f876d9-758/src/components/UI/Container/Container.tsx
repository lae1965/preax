import styles from './container.module.css';

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
