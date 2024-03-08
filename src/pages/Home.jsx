import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import CountryList from "../components/CountryList";

const Home = ({ darkMode, onDarkModeClick }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onClick={onDarkModeClick} darkMode={darkMode} />
      <Search
        darkMode={darkMode}
        onRegionChange={handleRegionChange}
        onSearchChange={handleSearchChange}
      />
      <CountryList
        darkMode={darkMode}
        selectedRegion={selectedRegion}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;

