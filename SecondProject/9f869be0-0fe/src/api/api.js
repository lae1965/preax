const url = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=`;
const urlRandom = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=10`;

const fetchPictures = async (url, isRandom = false) => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    const workData = isRandom ? data : data.results;
    if (!workData.length) return null;
    return workData.map((item) => ({
      id: item.id,
      height: item.height,
      width: item.width,
      imageUrl: item.urls.small,
    }));
  } catch {
    return null;
  }
};

export const fetchSearchPicture = async (query) => {
  return await fetchPictures(`${url}${query}`);
};

export const fetchGetRandomPictures = async () => {
  return await fetchPictures(urlRandom, true);
};
