// components/SearchBar.js

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  const handleSearch = () => {
    onSearch(query, filterOption);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <select
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option value="all">All</option>
        <option value="name">Company Name</option>
        <option value="modeltype">Model Type</option>
        <option value="price">Price</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
