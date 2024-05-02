import React, { useEffect } from "react";
import JobList from "../components/JobList";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div>
      <h1>Jobs</h1>
      <JobList />
    </div>
  );
};

export default Jobs;
