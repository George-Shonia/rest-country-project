import { useEffect, useState } from "react";
import classes from "../modules/CountryList.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const CountryList = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className={classes["country-list-wrapper"]}>
      {countries.map((country) => (
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
          <img src={country.flags.png} alt="" />
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
      ;
    </div>
  );
};

export default CountryList;
