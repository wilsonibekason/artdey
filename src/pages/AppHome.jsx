import React from "react";
import {
  HomeBanner,
  HomeCarousel,
  HomeExplore,
  HomeFeatured,
  HomeHeader,
  HomeInspiredCollections,
} from "../components/home";

const AppHome = () => {
  return (
    <div>
      <div className="mx-28 bg-gradientBaseBg">
        <HomeHeader />
        <HomeCarousel />
        <HomeExplore />
        <HomeBanner />
        <HomeFeatured />
      </div>
      <div className="bg-gradientBaseAccent ">
        <HomeInspiredCollections />
      </div>
    </div>
  );
};

export default AppHome;
