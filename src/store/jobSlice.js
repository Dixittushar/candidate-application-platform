import { createSlice } from "@reduxjs/toolkit";
import { fetchJobsData } from "../utils/api";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    startFetching(state) {
      state.isLoading = true;
      state.error = null;
    },
    setJobs(state, action) {
      state.jobs.push(...action.payload);
      state.isLoading = false;
    },

    setFetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const fetchJobs = () => async (dispatch, getState) => {
  dispatch(startFetching());
  try {
    const data = await fetchJobsData();
    dispatch(setJobs(data.jdList));
  } catch (error) {
    dispatch(setFetchError("Error Fetching"));
  }
};

export const { startFetching, setJobs, setFetchError } = jobsSlice.actions;
export default jobsSlice.reducer;
