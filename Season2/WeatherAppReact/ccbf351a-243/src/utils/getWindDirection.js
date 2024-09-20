const directions = ['Северный', 'Северо-восточный', 'Восточный', 'Юго-восточный', 'Южный', 'Юго-западный', 'Западный', 'Северо-западный', 'Северный'];

export const getWindDirection = (deg) => {
  deg %= 360;
  if (deg < 0) deg += 360;

  return directions[parseInt((deg + 22) / 45)];
};
