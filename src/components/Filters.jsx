import React from "react";
import axios from "axios";

const Filters = ({ setSearchResults }) => {
  const applyFilter = async (filter) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=${filter}`);
    setSearchResults(response.data.hits);
  };

  return (
    <div style={{ margin: "10px", height: "40px", display:"flex" }}>
      <button onClick={() => applyFilter("story")}>Stories</button>
      <button onClick={() => applyFilter("comment")}>Comments</button>
    </div>
  );
};

export default Filters;
