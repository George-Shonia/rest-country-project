import { useEffect, useState } from "react";
import classes from "../modules/CountryList.module.scss";
import axios from "axios";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data.slice(0, 8))
      .then((limitCountry) => setCountries(limitCountry));
  }, []);

  return (
    <div className={classes["country-list-wrapper"]}>
      <div className={classes["country-row"]}>
        {countries.slice(0, 4).map((country) => (
          <div key={country.cca2} className={classes["country-item"]}>
            <img src={country.flags.png} alt="" />
            <h2>{country.name.common}</h2>
            <ul>
              <li>Population: {country.population}</li>
              <li>Region: {country.region}</li>
              <li>Capital: {country.capital}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className={classes["country-row"]}>
        {countries.slice(4, 8).map((country) => (
          <div key={country.cca2} className={classes["country-item"]}>
            <img src={country.flags.png} alt="" />
            <h2>{country.name.common}</h2>
            <ul>
              <li>Population: {country.population}</li>
              <li>Region: {country.region}</li>
              <li>Capital: {country.capital}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
