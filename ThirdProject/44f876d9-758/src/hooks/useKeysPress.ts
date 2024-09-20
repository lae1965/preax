import { useEffect } from 'react';

export const useKeysPress = (
  [modifierKey, mainKey]: string[],
  callback: () => void,
  condition?: boolean,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent & { [key: string]: any }) => {
      if (!condition || event.repeat) {
        return;
      }
      const isSystemKeyPressed = event.getModifierState(modifierKey);
      if (condition && isSystemKeyPressed && event.key === mainKey) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, condition]);
};
