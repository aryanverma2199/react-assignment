import React from "react";
import { useSelector } from "react-redux";

const SearchHistory = () => {
  const { history } = useSelector((state) => state.search);

  return (
    <div>
      <h4>Search History</h4>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <strong>{item.query}</strong> - {new Date(item.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
