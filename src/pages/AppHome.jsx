import React from "react";
import {
  HomeBanner,
  HomeCarousel,
  HomeExplore,
  HomeFeatured,
  HomeHeader,
} from "../components/home";

const AppHome = () => {
  return (
    <div>
      <HomeHeader />
      <HomeCarousel />
      <HomeExplore />
      <HomeBanner />
      <HomeFeatured />
    </div>
  );
};

export default AppHome;
