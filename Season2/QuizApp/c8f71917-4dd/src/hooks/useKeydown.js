import { useContext, useEffect } from "react"
import { ButtonContext, QuizzContext } from "../context/context";
import { pages } from "../util/constants";

export const useKeydown = (handleEnter, handleDigit, handleBackspace, dependencies) => {
  const { page } = useContext(QuizzContext);
  const { isLoader } = useContext(ButtonContext);

  useEffect(() => {
    const handleDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleEnter && handleEnter();
      }
      else if (page === pages.QUESTIONS) {
        e.preventDefault();
        if (!isLoader) {
          if (/[1-4]/.test(e.key)) handleDigit && handleDigit(+e.key - 1)
          else if (e.key === 'Backspace') handleBackspace && handleBackspace()
        }
      }
    }

    window.addEventListener('keydown', handleDown);
    return () => window.removeEventListener('keydown', handleDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}