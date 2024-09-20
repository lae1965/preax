import clsx from "@utils/clsx";
import FilterItem from "./FilterItem";
import styles from "./FilterList.module.css";
import Location from "@components/UI/icons/Location";

import { useState } from "react";
import Clear from "../icons/Clear";

const FilterList = ({ items }) => {

  const [value, setValue] = useState('')
  const [radioValue, setRadioValue] = useState(null);
  const [data, setData] = useState([])

  const clear = () => {
    setData([])
    setRadioValue(null)
    setValue('')
  }

  return (

    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input className={styles.input} placeholder="Город" value={value} onChange={(e) => setValue(e.target.value)} />
        <Location className={styles.extraIcon} />
        {value && <Clear className={styles.clearIcon} onClick={() => setValue('')} />}
      </label>
      <ul className={clsx("list", styles.list)}>

        {items.map((filter) => (
          <FilterItem
            key={filter.id}
            name={filter.name}
            icon={filter.icon}
            expandable={filter.expandable}
            data={data}
            setData={setData}
            option={filter?.filterItem}
            list={filter?.filterList}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
        ))}
      </ul>

      <button className={styles.clearFilter} onClick={clear}>Сбросить все фильтры</button>
    </div>


  );
}

export default FilterList;