export const convertDate = (date) => {
  const stdDate = new Date(date);
  return `${stdDate.getDate().toString().padStart(2, '0')}.${(
    stdDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${stdDate.getFullYear().toString()}`;
};
