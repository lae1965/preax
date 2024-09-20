import clsx from "@utils/clsx";
import styles from "./FilterItem.module.css";
import ChevronRight from "@components/UI/icons/ChevronRight";
import Checkbox from "@components/UI/icons/Checkbox";
import CheckboxActive from "@components/UI/icons/CheckboxActive";
import RadioActive from "@components/UI/icons/RadioActive";
import Radio from "@components/UI/icons/Radio";
import { useClickOutside } from "@hooks/useClickOutside";
import { useState } from "react";

import Dropdown from "@components/UI/Dropdown";

const FilterItem = ({
  name,
  icon: Icon,
  expandable,
  option,
  list,
  recursion = false,
  data,
  setData,
  radioValue,
  setRadioValue
}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleCheckbox = (e) => {
    const index = data.indexOf(e.target.value)
    setData(index !== -1 ? [...data.slice(0, index), ...data.slice(index + 1)] : [...data, e.target.value])
  };

  const changeRadio = (e) => {
    setRadioValue(e.target.value)
  };

  const ref = useClickOutside(() => {
    setIsDropdownOpen(recursion ? isDropdownOpen : false)
  });


  return (
    <li className={styles.item}>
      <Dropdown setIsDropdownOpen={setIsDropdownOpen} ref={ref}>
        <button
          className={clsx("btn", styles.btn, isDropdownOpen && styles.open, recursion && styles.recursion)}
          onClick={() => { setIsDropdownOpen((prev) => !prev) }}
        >
          {Icon && <Icon />}
          <span className={styles.text}>{name}</span>
          {expandable && <ChevronRight className={styles.icon} />}
        </button>
        {isDropdownOpen &&
          <div className={clsx(styles.optionWrapper, recursion && styles.recursion)}>
            <ul className={styles.list}>
              {option?.type === 'radio' && option?.filterOption?.map((item) => {
                return (
                  <li className={styles.itemDrop} key={item.id}>
                    <label className={styles.label} >
                      <input
                        type="radio"
                        value={item.value}
                        checked={radioValue === item.value ? true : false}
                        className={styles.radio}
                        onChange={changeRadio}
                      />
                      {radioValue !== item.value && <Radio />}
                      {radioValue === item.value && <RadioActive />}
                      <span>{item.value}</span>
                    </label>
                  </li>
                )
              })}
              {option?.type === 'checkbox' && option?.filterOption?.map((item) => {
                return (
                  <li className={styles.itemDrop} key={item.id}>
                    <label className={styles.label}>
                      <input
                        className={clsx(styles.checkbox)}
                        type="checkbox"
                        value={item.value}
                        onChange={toggleCheckbox}
                        checked={data.includes(item.value)}
                      />
                      {!data.includes(item.value) && <Checkbox />}
                      {data.includes(item.value) && <CheckboxActive />}
                      <span>{item.value}</span>
                    </label>
                  </li>


                )
              })}
              {list?.map((filter) => {
                return (
                  <FilterItem
                    expandable={filter.expandable}
                    icon={filter.icon}
                    name={filter.name}
                    option={filter?.filterItem}
                    list={filter?.filterList}
                    key={filter.id}
                    recursion={true}
                    data={data}
                    setData={setData}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                  />
                )
              })}
            </ul>
          </div>}
      </Dropdown>
    </li>
  );
}

export default FilterItem;


{/* <li className={styles.itemDrop} key={item.id}>
<label className={styles.label} onClick={toggleCheckbox}>
  <span
    className={clsx(styles.checkbox, data.includes(item.value) ? styles.checked : '')}
    type="checkbox"
    value={item.value}
    onChange={toggleCheckbox}
  
  />
  <span>{item.value}</span>
</label>
</li> */}