const convertDate = (data) => {
  const date = new Date(data);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getFullYear()}`;
  return formattedDate;
};

export default convertDate;
