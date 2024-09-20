const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const convertDate = (data, format) => {
  const locale = 'ru-RU';
  const date = new Date(data);

  const optionsShort = { weekday: 'short', day: 'numeric', month: 'short' };
  const optionsLong = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

  const formattedDate =
    format === 'short'
      ? date.toLocaleDateString(locale, optionsShort).slice(0, -1)
      : date.toLocaleDateString(locale, optionsLong).slice(0, -2) + ' года';

  return capitalizeFirstLetter(formattedDate);
};

export default convertDate;
