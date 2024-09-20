import { useEffect } from "react";

const useOutsideClickObserver = (ref, callback) => {
  useEffect(() => {
    const clickHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [ref, callback]);
}

export default useOutsideClickObserver;
