import React, { useState } from "react";
import classes from "../modules/Search.module.scss";

const Search = (props) => {
  const [filterCountries, setFilterCountries] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const onArrowClickHandler = () => {
    setFilterCountries(!filterCountries);
  };

  const onRegionClickHandler = (region) => {
    props.onRegionChange(region);
    setFilterCountries(false);
  };

  const onSearchChangeHandler = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    props.onSearchChange(term);
  };

  return (
    <div className={classes["search-wrapper"]}>
      <input
        type="text"
        placeholder="🔍       Search for a country..."
        value={searchTerm}
        onChange={onSearchChangeHandler}
        className={classes[props.darkMode && "darkmode"]}
      />
      <div className={classes['filter-box']}>
        <div className={classes['filter-click']}>
        <p style={props.darkMode ? {color: 'white'} : {}}>Filter by Region</p>
        <p
          className={classes[filterCountries && "darkmode-p"]}
          onClick={onArrowClickHandler}
          style={{ cursor: "pointer" }}
        >
          ▼
        </p>
        </div>
       
        {filterCountries && (
           <div className={classes['filter-region']}>
          <ul className={classes["region-list"]}>
            {regions.map((region) => (
              <li key={region} onClick={() => onRegionClickHandler(region)}>
                {region}
              </li>
            ))}
          </ul>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default Search;


