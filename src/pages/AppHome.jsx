import React from "react";
import { HomeCarousel, HomeExplore, HomeHeader } from "../components/home";

const AppHome = () => {
  return (
    <div>
      <HomeHeader />
      <HomeCarousel />
      <HomeExplore />
    </div>
  );
};

export default AppHome;
