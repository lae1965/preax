import { ImageData } from '../types';

const ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=`;
const urlRandom = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=10`;

interface ResponseData {
  id: string;
  height: number;
  width: number;
  urls: {
    [key: string]: string;
  };
}

const fetchPictures = async (
  url: string,
  isRandom = false
): Promise<ImageData[] | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    const workData = isRandom ? data : data.results;
    if (!workData.length) return null;
    return workData.map((item: ResponseData) => ({
      id: item.id,
      height: item.height,
      width: item.width,
      imageUrl: item.urls.small,
    }));
  } catch {
    return null;
  }
};

export const fetchSearchPicture = async (
  query: string
): Promise<ImageData[] | null> => await fetchPictures(`${url}${query}`);

export const fetchGetRandomPictures = async (): Promise<ImageData[] | null> =>
  await fetchPictures(urlRandom, true);
