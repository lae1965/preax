import { useEffect } from 'react';

export const useScrollDropdownTags = (
  choiceHintNumber: number,
  dropDownRef: React.MutableRefObject<HTMLDivElement | null>,
  dropDownListRef: React.MutableRefObject<HTMLUListElement | null>
) => {
  useEffect(() => {
    if (
      choiceHintNumber === -1 ||
      !dropDownRef.current ||
      !dropDownListRef.current
    )
      return;
    const choicedElement = dropDownListRef.current.children[
      choiceHintNumber
    ] as HTMLDivElement;
    if (choicedElement) {
      const { top, bottom, height } = choicedElement.getBoundingClientRect();
      const { top: dropdownTop, bottom: dropdownBottom } =
        dropDownRef.current.getBoundingClientRect();

      let scrollTop = -1;
      if (choiceHintNumber <= 2) scrollTop = 0;
      else if (top < dropdownTop) scrollTop = 40 + height * choiceHintNumber;
      else if (bottom > dropdownBottom)
        scrollTop =
          40 +
          height * choiceHintNumber -
          (dropdownBottom - dropdownTop - (height + 40));

      if (scrollTop !== -1)
        dropDownRef.current.scrollTo({ behavior: 'smooth', top: scrollTop });
    }
  }, [choiceHintNumber]);
};
