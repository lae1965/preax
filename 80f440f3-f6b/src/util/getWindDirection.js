import { directions } from './constants';

export const getWindDirection = (deg) => {
  while (deg >= 360) deg -= 360;
  while (deg < 0) deg += 360;

  return directions[parseInt((deg + 22) / 45)];
};
