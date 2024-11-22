import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setResults, addHistory } from "../store/searchSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (query.trim()) {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
      dispatch(setResults(response.data.hits)); // Update results in Redux
      dispatch(addHistory({ query })); // Add search to history
    } else {
      alert("Please enter a search term!");
    }
  };

  return (
    <div style={{ margin: "10px", height: "40px", display: "flex" }}>
      <input
        type="text"
        placeholder="Search Hacker News"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
