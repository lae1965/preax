const key = '33cdff2ae2562beb863c55b714eb14c4';

const fetchAPI = async (query) => {
  try {
    const response = await fetch(query);
    if (!response.ok) throw new Error('Отсутствует связь со сторонним сервисом');
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export const getWeather = async (city) => {
  if (!city) return;
  try {
    const responseCity = await fetchAPI(`https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1`);
    if (!responseCity.length) throw new Error(`Упс... Город ${city} не найден.`);
    const { lat, lon } = responseCity[0];
    console.log(responseCity[0]);

    const responseWeather = await fetchAPI(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`);
    console.log(responseWeather);
  } catch (e) {
    console.log(e.message);
  }
}