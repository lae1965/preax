const digitToString = digit => (Math.floor(digit)).toString().padStart(2, '0');

export const dateDifference = (curDate, comparedDate) => {
  const dateDifference = Math.abs(curDate - comparedDate);
  const toMinutes = 1000 * 60;
  const toHours = toMinutes * 60;

  return `${curDate > comparedDate ? 'Прошло' : 'Осталось'}: ${digitToString(dateDifference / toHours)}:${digitToString((dateDifference % toHours) / toMinutes)}`;
}
