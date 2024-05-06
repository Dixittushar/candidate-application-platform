import React from "react";

import Filters from "../components/Filters";
import { Typography } from "@mui/material";

const Jobs = () => {
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          fontWeight: "bold",
          paddingTop: "15px",
        }}
      >
        Candidate Application Platform
      </Typography>
      <Filters />
    </div>
  );
};

export default Jobs;
