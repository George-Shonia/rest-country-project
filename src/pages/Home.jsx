import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import CountryList from "../components/CountryList";

const Home = ({ darkMode, onDarkModeClick }) => {
  return (
    <div>
      <Navbar onClick={onDarkModeClick} darkMode={darkMode} />
      <Search darkMode={darkMode} />
      <CountryList darkMode={darkMode} />
    </div>
  );
};

export default Home;
