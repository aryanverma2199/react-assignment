import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import Pagination from "./Pagination";

const Dashboard = () => {
  const { username } = useSelector((state) => state.user);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center", backgroundColor:"color(srgb 1 0.39 0)", marginBottom: "16px" }}>
      <header style={{ padding: "10px" }}>
        <h3>Welcome, {username || "Search Hacker News"}</h3>
      </header>
      <SearchBar setSearchResults={setSearchResults} />
      </div>
      <Filters setSearchResults={setSearchResults} />
      <main>
        {searchResults.length > 0 ? (
          searchResults.map((item) => (
            <div key={item.objectID}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </main>
      <Pagination setSearchResults={setSearchResults} />
    </div>
  );
};

export default Dashboard;
