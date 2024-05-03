import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobList from "./JobList";

const Filters = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filterRole, setFilterRole] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterExperience, setFilterExperience] = useState("");

  //   console.log(jobs);
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
