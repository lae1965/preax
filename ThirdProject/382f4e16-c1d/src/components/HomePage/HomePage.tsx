import styles from './homePage.module.css';

interface IHomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<IHomePageProps> = ({ children }) => {
  return <div className={styles.homePage}>{children}</div>;
};

export default HomePage;
