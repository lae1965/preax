import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';
import { Icon } from '../Icon/Icon';
import { useAppWidth } from '../../../hooks/useAppWidth';

export function Button({
  onClick = () => {},
  iconName,
  text,
  background,
  mobileShortMode,
  mobileShortText,
}) {
  const [renderText, setRenderText] = useState(text);
  const width = useAppWidth();

  useEffect(() => {
    if (mobileShortText) {
      if (width < 765) setRenderText(text.split(' ')[0]);
      else setRenderText(text);
    }
  }, [mobileShortText, text, width]);

  return (
    <button
      style={background ? { background } : {}}
      type='button'
      onClick={onClick}
      className={`${styles.button} ${mobileShortMode ? '' : styles.w100}`}
      aria-label={'Logo button'}
    >
      {iconName && <Icon name={iconName} />}
      <span className={`${mobileShortMode ? styles.withoutText : ''}`}>
        {renderText}
      </span>
    </button>
  );
}
