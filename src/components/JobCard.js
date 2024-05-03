import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  border-radius: 20px;
  padding: 10px 5px;
  background-color: rgb(255, 255, 255);
  max-width: 360px;
  box-shadow: rgb(0, 0, 0, 0.25) 0px 1px 4px 0px;
  margin-left: 50px;
  margin-right: 20px;
  font-weight: 400;
  &:hover {
    transform: scale(1.1);
    background-color: white;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }
`;

const JobTitle = styled(Typography)`
  text-transform: capitalize;
`;

const Location = styled(Typography)`
  text-transform: capitalize;
`;

const ApplyButton = styled(Button)`
  cursor: pointer;
  width: 100%;
  background-color: rgb(85, 239, 196);
  border-radius: 0.5rem;
  border-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding: 8px 18px;
`;

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  const maxDescriptionLength = 100;
  //   console.log(job);
  return (
    <StyledCard>
      <CardContent>
        <JobTitle variant="h6">{job.jobRole}</JobTitle>
        <Location variant="body2">
          {job.company} {job.location}
        </Location>
        <Typography variant="body2">
          Estimated Salary: ${job.minJdSalary ? `${job.minJdSalary}000` : "NA"}{" "}
          - ${job.maxJdSalary ? job.maxJdSalary : "NA"}0000✅
        </Typography>
        <Typography>About Company:</Typography>
        <Collapse in={showMore} timeout="auto" unmountOnExit>
          <Typography variant="body2" paragraph>
            {job.jobDetailsFromCompany}
          </Typography>
        </Collapse>
        <Typography variant="body2" paragraph>
          {job.jobDetailsFromCompany.substring(0, maxDescriptionLength)}
          {job.jobDetailsFromCompany.length > maxDescriptionLength && (
            <span
              onClick={() => setShowMore(!showMore)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {showMore ? " Read Less..." : " Read More..."}
            </span>
          )}
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "7px" }}>
          Experience: {job.minExp ? job.minExp : "NA"} years
        </Typography>
        <ApplyButton variant="contained" color="primary" href={job.jdLink}>
          ⚡ Easy Apply
        </ApplyButton>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
