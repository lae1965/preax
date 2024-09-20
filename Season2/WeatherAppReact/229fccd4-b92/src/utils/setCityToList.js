export const setCityToList = (newCity, foundCitiesList) => {
  const newCityList = [...foundCitiesList];

  const findIndex = foundCitiesList.findIndex(city => city === newCity);
  if (findIndex === -1) {
    if (newCityList.length === 5) newCityList.pop();
  } else {
    newCityList.splice(findIndex, 1);
  }
  newCityList.unshift(newCity);
  localStorage.setItem('cityList240165', JSON.stringify(newCityList));
  return newCityList;
}