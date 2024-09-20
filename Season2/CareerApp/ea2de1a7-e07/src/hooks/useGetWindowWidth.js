import { useState } from "react"
import { useResize } from "./useResize";

export const useGetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useResize(() => {
    setWindowWidth(window.innerWidth);
  });

  return windowWidth;
}