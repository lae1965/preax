import { useRef } from 'react';
import styles from './Card.module.css';

export const Card = ({ card }) => {
  const pointPosition = useRef(card.progressRange?.pointPosition / 1.26);
  const mask = useRef(
    `radial-gradient(circle at ${pointPosition.current}%, transparent 6px, black 0)`
  );
  return (
    <div className={styles.item}>
      <h2 className={styles.name}>{card.name}</h2>
      <img
        className={styles.icon}
        src={`${process.env.PUBLIC_URL}/img/${card.icon}.svg`}
        alt={card.icon}
      />
      <span className={styles.value}>{card.value}</span>
      <div className={styles.descriptionWrapper}>
        {card.progressRange && (
          <>
            <div
              className={styles.point}
              style={{ marginLeft: `calc(${pointPosition.current}% - 4px)` }}
            ></div>
            <div
              className={styles.stripe}
              style={{
                background: card.progressRange.background,
                mask: mask.current,
                WebkitMask: mask.current,
              }}
            ></div>
          </>
        )}
        <div
          className={styles.description}
          style={{
            justifyContent:
              typeof card.description === 'string' ? 'center' : 'space-between',
          }}
        >
          {(typeof card.description === 'string' && card.description) || (
            <>
              <span>{card.description?.left}</span>
              <span>{card.description?.right}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
