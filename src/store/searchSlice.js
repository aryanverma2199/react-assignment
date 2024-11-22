import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [], // To store the current search results
    history: [], // To store the search history with query and timestamp
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload; // Update the search results
    },
    addHistory: (state, action) => {
      state.history.push({
        query: action.payload.query,
        timestamp: new Date().toISOString(),
      }); // Add new search query and timestamp to history
    },
    clearHistory: (state) => {
      state.history = []; // Clear all search history
    },
  },
});

export const { setResults, addHistory, clearHistory } = searchSlice.actions;
export default searchSlice.reducer;
