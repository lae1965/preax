export const normalizeDate = (dt, isLong) => {
  const format = isLong ? 'long' : 'short';

  let date = new Date(dt).toLocaleString('ru', {
    weekday: format,
    month: format,
    day: '2-digit',
    timezone: 'UTC',
    ...(isLong && { year: 'numeric' }),
  });

  return `${date.slice(0, -1)}${isLong ? 'ода' : ''}`;
};
