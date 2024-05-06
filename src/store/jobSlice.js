import { createSlice } from "@reduxjs/toolkit";
import { fetchJobsData } from "../utils/api";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    status: "idle",
    error: null,
    page: 0,
    hasMore: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobsData.fulfilled, (state, action) => {
        state.status = "succeeded";

        const { jdList } = action.payload;
        if (Array.isArray(jdList)) {
          state.jobs.push(...jdList);
          state.hasMore = jdList.length > 0;
          state.page += 1;
        } else {
          console.error(
            "Payload does not contain a valid job list:",
            action.payload
          );
        }
      })

      .addCase(fetchJobsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
