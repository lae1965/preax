import { KEYBOARD_SYSTEM_HOTKEY } from '../constants';

export const getSystemHotKey = () => {
  const isMacOS = navigator.userAgent.indexOf('Mac') !== -1;
  const hotKey = isMacOS
    ? KEYBOARD_SYSTEM_HOTKEY.MAC
    : KEYBOARD_SYSTEM_HOTKEY.WINDOWS;

  return hotKey;
};
