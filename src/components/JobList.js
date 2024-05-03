import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import "../assets/JobList.css";
const JobList = ({ jobs, filterRole, filterLocation, filterExperience }) => {
  const filterJobs = (job) => {
    // console.log(job);
    return (
      job.jobRole.toLowerCase().includes(filterRole.toLowerCase()) &&
      job.location.toLowerCase().includes(filterLocation.toLowerCase()) &&
      job.minExp?.toString().includes(filterExperience)
    );
  };

  return (
    <div>
      <Grid container spacing={8}>
        {jobs.filter(filterJobs).map((job, index) => (
          <Grid
            item
            key={`${job.jdUid}-${job.location}-${index}`}
            xs={12}
            sm={6}
            md={4}
          >
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobList;
