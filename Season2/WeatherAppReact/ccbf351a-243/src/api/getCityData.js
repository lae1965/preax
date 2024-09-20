export const getCityData = async (query) => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`);
    if (!response.ok) {
      throw new Error('Server Error')
    }
    const data = await response.json();
    if (!data.length) {
      return []
    }
    const id = new Date().toISOString();
    const res = { lon: data[0].lon, lat: data[0].lat, apiCity: data[0].name, valueCity: query, id: id }
    return res;
  } catch (error) {
    console.log('Отсутствует связь со сторонним сервисом', error.message)
  }
}