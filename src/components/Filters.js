import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobList from "./JobList";
import { fetchJobsData } from "../utils/api";

const Filters = () => {
  const dispatch = useDispatch();
  const { jobs, hasMore } = useSelector((state) => state.jobs);
  const [filterRole, setFilterRole] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterExperience, setFilterExperience] = useState("");

  useEffect(() => {
    if (hasMore) {
      dispatch(fetchJobsData({ limit: 10, offset: 0 }));
    }
  }, [dispatch, hasMore]);
  //   console.log(jobs);

  //   console.log(hasMore);

  window.onscroll = function () {
    console.log(
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
    );
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (hasMore) {
        dispatch(fetchJobsData({ limit: 10, offset: jobs.length }));
      }
    }
  };

  const handleRoleChange = (e) => {
    setFilterRole(e.target.value);
  };

  const handleLocationChange = (e) => {
    setFilterLocation(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setFilterExperience(e.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "40px",
          gap: "50px",
        }}
      >
        <TextField
          type="text"
          name="role"
          label="Role"
          variant="outlined"
          value={filterRole}
          onChange={handleRoleChange}
        />
        <TextField
          type="text"
          name="location"
          label="Location"
          variant="outlined"
          value={filterLocation}
          onChange={handleLocationChange}
        />
        <TextField
          type="number"
          name="experience"
          label="Min Experience"
          variant="outlined"
          value={filterExperience}
          onChange={handleExperienceChange}
        />
      </Box>
      <JobList
        jobs={jobs}
        filterRole={filterRole}
        filterLocation={filterLocation}
        filterExperience={filterExperience}
      />
    </div>
  );
};

export default Filters;
