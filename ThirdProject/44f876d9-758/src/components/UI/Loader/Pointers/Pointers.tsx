import { HTMLAttributes } from 'react';
import styles from './pointers.module.css';

interface IPointers
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Pointers: React.FC<IPointers> = () => {
  return (
    <div className={styles.pointersWrapper}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Pointers;
