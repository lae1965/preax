import { useRef } from "react";

export const useDebounce = (func, timeout) => {
  const ref = useRef(null);

  return (...args) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => func(...args), timeout);
  };
};
