import { useEffect, useState } from 'react';

export const useHotKeys = () => {
  const [hotKeyText, setHotKey] = useState('Alt/Option + Enter ↵');
  const [hotKeyActive, setHotKeyActive] = useState(false);

  useEffect(() => {
    // Список ОС для проверки
    const checkLostOS = [
      { index: 'Windows NT 10.0', OS: 'Windows 10' },
      { index: 'Windows NT 6.3', OS: 'Windows 8.1' },
      { index: 'Windows NT 6.2', OS: 'Windows 8' },
      { index: 'Windows NT 6.1', OS: 'Windows 7' },
      { index: 'Windows NT 6.0', OS: 'Windows Vista' },
      { index: 'Windows NT 5.1', OS: 'Windows XP' },
      { index: 'Windows NT 5.0', OS: 'Windows 2000' },
      { index: 'Mac', OS: 'Mac/iOS' },
      { index: 'X11', OS: 'UNIX' },
      { index: 'Linux', OS: 'Linux' },
    ];

    // Проверка на ОС
    checkLostOS.forEach(({ index, OS }) => {
      if (window.navigator.userAgent.indexOf(index) != -1) {
        if (OS.includes('Mac/iOS')) return setHotKey(`Option + Enter ↵`);
      } else {
        return setHotKey(`Alt + Enter ↵`);
      }
    });
  }, [hotKeyActive, setHotKeyActive]);

  // Проверяется на комбинацию калвиш
  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      if (e.code == 'Enter' && (e.altKey || e.metaKey)) {
        setHotKeyActive(!hotKeyActive);
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });

  return { hotKeyText, hotKeyActive, setHotKeyActive };
};
