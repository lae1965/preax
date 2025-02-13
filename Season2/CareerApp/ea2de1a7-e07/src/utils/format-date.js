export const formatTitleDate = (strDate='') => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const blockDate = new Date(strDate);

  let result = '';

  const parameters = {
    day: 'numeric',
    month: 'long'
  };

  if(blockDate.getFullYear() !== today.getFullYear()) {
    parameters.year= 'numeric';
  }

  const formatDate = new Intl.DateTimeFormat('ru', parameters).format(blockDate);

  if(blockDate.toLocaleDateString() == today.toLocaleDateString()){
    result = `Сегодня, ${formatDate}`;
  } else if (blockDate.toLocaleDateString() == yesterday.toLocaleDateString()) {
    result = `Вчера, ${formatDate}`;
  } else {
    result = formatDate;
  }

  return result;
};


