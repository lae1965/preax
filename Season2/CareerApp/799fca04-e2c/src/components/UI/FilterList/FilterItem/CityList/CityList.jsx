import { Checkbox } from '@components/UI/Checkbox/Checkbox';
import useOutsideClickObserver from '@hooks/useOutsideClickObserver';

export const CityList = ({
  cities,
  inputRef,
  textItems,
  clearInputValue,
  isCheckedCityList = false,
  className,
}) => {
  const ref = useOutsideClickObserver(() => {
    if (clearInputValue) clearInputValue();
  });

  const renderCheckboxes = (data) => (
    <ul className={className} ref={ref}>
      {data.map(([id, name]) => (
        <li key={id}>
          <Checkbox
            id={id}
            name='area'
            text={name}
            value={id}
            focusRef={inputRef}
            isCheckedCityList={isCheckedCityList}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {Array.isArray(cities)
        ? renderCheckboxes(cities.map((id) => [id, textItems[id]]))
        : renderCheckboxes(Object.entries(cities))}
    </>
  );
};
