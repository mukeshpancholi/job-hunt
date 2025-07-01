import React from "react";
import JobCard from "./JobCard";

const randumjob = [
  "Frontend Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "DevOps Engineer",
  "React Developer",
  "Node.js Developer",
  "UI/UX Designer",
  "Product Manager",
  "QA Tester",
  "Technical Writer",
  "Mobile App Developer",
  "Cloud Architect",
  "Data Analyst",
  "AI Engineer",
  "Database Administrator",
  "Cybersecurity Analyst",
  "System Administrator",
  "Scrum Master",
  "Business Analyst",
  "Support Engineer",
];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#faa2e0]">Latest &</span> Top Job Openings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 text-[#614948]">
        {randumjob.slice(0, 8).map((job, index) => (
          <JobCard key={index}>{job}</JobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
