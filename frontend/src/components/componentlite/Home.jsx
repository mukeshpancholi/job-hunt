import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Categories />
      <LatestJobs />
    </div>
  );
};

export default Home;
