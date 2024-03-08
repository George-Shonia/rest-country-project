import { useState } from "react";
import classes from "../modules/Search.module.scss";

const Search = (props) => {
  const [filterCountries, setFilterCountries] = useState(false);

  const onArrowClickHandler = () => {
     setFilterCountries(!filterCountries);
     console.log(filterCountries)
  }
  return (
    <div className={classes["search-wrapper"]}>
      <input
        type="text"
        placeholder="🔍       Search for a country..."
        className={classes[props.darkMode && "darkmode"]}
      />
      <div>
        <p>Filter by Region</p>
        <p className={classes[filterCountries && 'darkmode-p']} onClick={onArrowClickHandler} style={{cursor: 'pointer'}}>▼</p>
      </div>
    </div>
  );
};

export default Search;
