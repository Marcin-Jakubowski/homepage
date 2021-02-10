import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    repositories: [],
    status: "loading",
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setRepositories: (state, { payload }) => {
        state.repositories = payload;
    },
    initialFetchAPI: () => {}
  },
});

export const {
    initialFetchAPI,
    setRepositories,
    setStatus
} = portfolioSlice.actions;

export const selectPortfolio = state => state.portfolio;
export const selectStatus = (state) => selectPortfolio(state).status;
export const selectRepositories = (state) => selectPortfolio(state).repositories;
export default portfolioSlice.reducer;
