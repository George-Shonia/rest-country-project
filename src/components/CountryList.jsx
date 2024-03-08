import React, { useEffect, useState } from "react";
import classes from "../modules/CountryList.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const CountryList = (props) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (props.selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === props.selectedRegion
      );
    }

    if (props.searchTerm) {
      const searchTerm = props.searchTerm.toLowerCase();
      filtered = filtered.filter((country) => {
        const commonName = country.name.common.toLowerCase();
        const nativeName =
          country.name.nativeName &&
          country.name.nativeName[
            Object.keys(country.name.nativeName)[0]
          ].common.toLowerCase();

        return (
          commonName.includes(searchTerm) ||
          (nativeName && nativeName.includes(searchTerm))
        );
      });
    }

    setFilteredCountries(filtered);
  }, [props.selectedRegion, props.searchTerm, countries]);

  return (
    <div className={classes["country-list-wrapper"]}>
      {filteredCountries.map((country) => (
        <Link
          to={`/country/${country.name.common}`}
          key={country.cca2}
          className={classes["country-item"]}
          style={
            props.darkMode
              ? { backgroundColor: "hsl(209, 23%, 22%)", color: "white" }
              : {}
          }
        >
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <h2>{country.name.common}</h2>
          <ul>
            <li>
              Population:{" "}
              <span style={{ color: "grey", fontWeight: "500" }}>
                {country.population}
              </span>
            </li>
            <li>
              Region:{" "}
              <span style={{ color: "gray", fontWeight: "500" }}>
                {country.region}
              </span>
            </li>
            <li>
              Capital:{" "}
              <span style={{ color: "gray", fontWeight: "500" }}>
                {country.capital}
              </span>
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
