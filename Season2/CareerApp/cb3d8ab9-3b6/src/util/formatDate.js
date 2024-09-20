export const formatDate = (date) => {
  const formatedDate = new Date(date);
  const today = new Date(Date.now());
  const locale = 'ru-RU';
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  const stringDate = formatedDate.toLocaleDateString(locale, options);
  let outDate = '';
  if (stringDate === today.toLocaleDateString(locale, options)) outDate += 'Сегодня, ';
  if (formatedDate.getFullYear() === today.getFullYear()) outDate += stringDate.split(' ').slice(0, -2).join(' ');
  else outDate += stringDate;
  return outDate;
}