import styles from './Modal.module.css';

import { ClearText } from '../Icons/ClearText';
import { useClickOutside } from '../../hooks/useClickOutside';

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  setIsOpenModal: (bool: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ children, setIsOpenModal }) => {
  const handleEscape = () => {
    setIsOpenModal(false);
  };

  const refElement = useClickOutside<HTMLDivElement>(() => {
    handleEscape();
  });

  return (
    <section className={styles.modalWrapper}>
      <button className={styles.escapeWrapper} onClick={handleEscape}>
        <ClearText className={styles.escape} />
      </button>
      <div className={styles.modal} tabIndex={0} ref={refElement}>
        {children}
      </div>
    </section>
  );
};
