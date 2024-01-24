import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ initial, setInitial }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredData = initial.filter((data) => {
      return data.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log("filteredData", filteredData);
    setInitial(filteredData);
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
