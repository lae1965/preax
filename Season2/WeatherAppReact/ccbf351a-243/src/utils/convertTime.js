export const convertTime = (date, hoursDigitsCount = 2) =>
  (new Date(date)).toLocaleTimeString([], {
    hour: hoursDigitsCount === 2 ? '2-digit' : 'numeric',
    minute: '2-digit',
  });