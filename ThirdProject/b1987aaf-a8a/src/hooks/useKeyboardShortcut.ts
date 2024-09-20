import { useCallback, useEffect } from 'react';

type Modifier = 'shiftKey' | 'altKey' | 'ctrlKey' | 'metaKey';

// Принимает "Alt + Enter", либо ["Alt", "Enter"]
const useKeyboardShortcut = (keys: string | string[], callback: () => void) => {
  const formattedKeys = (typeof keys === 'string' ? keys.split('+') : keys).map(
    (item) => item.trim().toLowerCase(),
  );

  const modifiers = formattedKeys.slice(0, -1).map((item) => {
    if (item === 'alt' || item === 'opt' || item === 'option') {
      return 'altKey';
    }
    if (item === 'cmd' || item === 'command') {
      return 'metaKey';
    }
    return item + 'Key';
  });

  const handler = useCallback((e: KeyboardEvent) => {
    const isAllModifiersClicked = modifiers.reduce(
      (prev, cur) => prev && e[cur as Modifier],
      true,
    );

    if (
      isAllModifiersClicked &&
      formattedKeys[formattedKeys.length - 1] === e.key.toLowerCase()
    ) {
      callback();
    }
  }, [callback, modifiers, formattedKeys]);

  useEffect(() => {
    document.body.addEventListener('keydown', handler, true);
    return () => document.body.removeEventListener('keydown', handler, true);
  }, [handler]);
};

export default useKeyboardShortcut;
