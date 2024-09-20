const formatCurrency = (currency) => {
  switch (currency) {
    case "RUR":
      return "₽";
    case "USD":
      return "$";

    default:
      return currency;
  }
}

export default formatCurrency;