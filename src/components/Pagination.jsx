import React, { useState } from "react";
import axios from "axios";

const Pagination = ({ setSearchResults }) => {
  const [page, setPage] = useState(0);

  const fetchPage = async (newPage) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?page=${newPage}`);
    setSearchResults(response.data.hits);
    setPage(newPage);
  };

  return (
    <div style={{ margin: "10px" }}>
      <button disabled={page === 0} onClick={() => fetchPage(page - 1)}>
        Previous
      </button>
      <span> Page {page + 1} </span>
      <button onClick={() => fetchPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
