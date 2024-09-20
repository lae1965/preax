import citiesJson from '../data/cities.json';

export const formatCitiesJson = () => {
  let citiesList = {};

  const formatCitiesList = (areas) => {
    areas.forEach(item => {
      if (item.areas.length) formatCitiesList(item.areas);
      citiesList[item.id] = item.name;
    })
  }

  formatCitiesList(citiesJson);
  return citiesList;
}