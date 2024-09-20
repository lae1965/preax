const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" });

  return formattedDate[0].toUpperCase() + formattedDate.slice(1);
}

export default formatDate;