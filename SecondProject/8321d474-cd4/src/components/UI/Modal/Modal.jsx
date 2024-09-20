import React, { useEffect, useState } from 'react';
import Exit from '../../../assets/svg/Exit';
import styles from './Modal.module.css';
import convertDate from '../../../utils/convertDate';
import Emoji from '../Emoji/Emoji';

const Modal = ({note, setIsOpen}) => {
  const [isActive, setIsActive] = useState(false);

  const closeModal = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains(styles.modal)) closeModal();
    };
    setIsActive(true);
    window.addEventListener('click', handleCloseModal);
    return () => window.removeEventListener('click', handleCloseModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
			<section className={`${styles.modal} ${isActive ? styles.modalActive : ''}`}>
				<div className={styles.content}>
					<div className={styles.header}>
						<div className={`${styles.photoMobile} ${styles.photo}`}>
							<img className={`${styles.imgMobile}`} src={note.foto} alt={note.title}/>
							<div className={styles.emoji}>
								<Emoji size='small' symbol={note.emoji} />
							</div>
						</div>
						<h2 className={styles.heading}>{note.title}</h2>
						<button className={styles.exit} onClick={closeModal}>
							<Exit />
						</button>
					</div>
					<article className={styles.article}>
						<div>
							<p className={styles.date}>{convertDate(note.date, 'long')}</p>
							<div className={`${styles.photoTablet} ${styles.photo}`} style={{ backgroundImage: `url(${note.foto})` }}>
								<div className={styles.emoji}>
									<Emoji size='big' symbol={note.emoji} />
								</div>
							</div>
							<p className={styles.text}>{note.note}</p>
						</div>
						<div className={`${styles.photoDesktop} ${styles.photo}`} style={{ backgroundImage: `url(${note.foto})` }}>
							<div className={styles.emoji}>
								<Emoji size='big' symbol={note.emoji} />
							</div>
						</div>
					</article>
				</div>
			</section>
  );
};

export default Modal;
