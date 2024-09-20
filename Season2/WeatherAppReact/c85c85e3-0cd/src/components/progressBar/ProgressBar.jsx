import { useRef, useState, useEffect } from 'react';

import styles from './ProgressBar.module.css';

function ProgressBar({ current, type }) {
  const [validCurrent, setValidCurrent] = useState();
  const mask = useRef(null);

  useEffect(() => {
    if (current < 0) setValidCurrent(0);
    else if (current > 100) setValidCurrent(100);
    else setValidCurrent(current);
  }, [current]);

  useEffect(() => {
    mask.current = `radial-gradient(circle at ${validCurrent}%, transparent 6px, black 0)`;
  }, [validCurrent]);

  return (
    <>
      <div
        className={styles.barTumbler}
        style={{ marginLeft: `calc(${validCurrent}% - 4px)` }}
      ></div>
      <div
        className={styles.barStripe}
        style={{
          background:
            type === 'normal'
              ? getComputedStyle(document.documentElement).getPropertyValue(
                  '--card-bar-bg-white'
                )
              : `radial-gradient(
                50% 9453.13% at 50% 50%,
                rgba(84, 84, 84, 0.4) 0%,
                rgba(138, 138, 138, 0.4) 45.12%,
                #dadada 100%,
                rgba(218, 218, 218, 0.4) 100%
              )`,
          mask: mask.current,
          WebkitMask: mask.current,
        }}
      ></div>
    </>
  );
}

export default ProgressBar;
