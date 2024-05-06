import { createAsyncThunk } from "@reduxjs/toolkit";
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
// };

export const fetchJobsData = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ limit, offset }) => {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ limit, offset }),
      }
    );

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    return data;
  }
);
