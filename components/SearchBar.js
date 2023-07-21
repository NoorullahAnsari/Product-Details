import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  const handleSearch = () => {
    onSearch(query, filterOption);
  };

  return (
    <div className="container mx-auto py-20 px-8 max-w-sm">
      <div class="relative mt-2 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          name="search"
          id="search"
          class="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
            id="cars"
            name="cars"
            class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="name">Company Name</option>
            <option value="modeltype">Model Type</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button
          class="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

// // components/SearchBar.js

// import { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");
//   const [filterOption, setFilterOption] = useState("all");

//   const handleSearch = () => {
//     onSearch(query, filterOption);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search..."
//       />
//       <select
//         value={filterOption}
//         onChange={(e) => setFilterOption(e.target.value)}
//       >
//         <option value="all">All</option>
//         <option value="name">Company Name</option>
//         <option value="modeltype">Model Type</option>
//         <option value="price">Price</option>
//       </select>
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
