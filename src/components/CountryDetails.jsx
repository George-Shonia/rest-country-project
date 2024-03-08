import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../modules/CountryDetails.module.scss";

const Country = (props) => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => setCountry(res.data[0]));
  }, [name]);

  if (!country) {
    return (
      <div
        className={classes["loading-page"]}
        style={props.darkMode ? { color: "white" } : {}}
      >
        Loading...
      </div>
    );
  }

  const renderNativeNames = () => {
    const nativeNames = [];

    for (const langCode in country.name.nativeName) {
      const nativeName = country.name.nativeName[langCode].common;
      nativeNames.push(nativeName);
    }

    return nativeNames.join(" , ");
  };

  const renderCurrencies = () => {
    const currencies = [];

    for (const currencyCode in country.currencies) {
      const currency = country.currencies[currencyCode];
      currencies.push(
        <span
          key={currencyCode}
          style={props.darkMode ? { color: "gray" } : {}}
        >
          {currency.name}
        </span>
      );
    }

    return currencies;
  };

  const renderLanguages = () => {
    const languages = [];

    for (const langCode in country.languages) {
      const language = country.languages[langCode];
      languages.push(language);
    }

    return languages.join(", ");
  };

  return (
    <div className={classes["country-details-wrapper"]}>
      <section>
        <img src={country.flags.png} alt="detailed country flag image" />
      </section>
      <div className={classes["country-details"]}>
        <h1 style={props.darkMode ? { color: "white" } : {}}>
          {country.name.common}
        </h1>
        <div className={classes["country-lists"]}>
          <ul>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Native Names:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {renderNativeNames()}
              </span>
            </li>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Population:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {country.population}
              </span>
            </li>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Region:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {country.region}
              </span>
            </li>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Sub Region:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {country.subregion}
              </span>
            </li>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Capital:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {" "}
                {country.capital}
              </span>
            </li>
          </ul>
          <ul>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Top Level Domain:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {country.tld && country.tld.join(", ")}
              </span>
            </li>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Currencies: {renderCurrencies()}
            </li>
            <li style={props.darkMode ? { color: "white" } : {}}>
              Languages:{" "}
              <span style={props.darkMode ? { color: "gray" } : {}}>
                {renderLanguages()}
              </span>
            </li>
          </ul>
        </div>
        <div style={props.darkMode ? {color: 'white'} : {}}>Border Countries :</div>
      </div>
    </div>
  );
};

export default Country;
