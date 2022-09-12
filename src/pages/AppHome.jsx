import React from "react";
import {
  HomeBanner,
  HomeCarousel,
  HomeExplore,
  HomeFeatured,
  HomeHeader,
  HomeInspiredCollections,
  HomeNewsLetter,
} from "../components/home";
import { HomeJournal } from "../components/home/homejournal";

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
        <div className="bg-gradientBaseBg2">
          <div className="mx-28">
            <HomeJournal />
          </div>
        </div>
      </div>
      <div className="mx-28 bg-gradientBaseBg">
        <HomeNewsLetter />
      </div>
    </div>
  );
};

export default AppHome;
