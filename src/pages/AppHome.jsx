import React from "react";
import {
  HomeBanner,
  HomeBannerMore,
  HomeCarousel,
  HomeExplore,
  HomeFeatured,
  HomeHeader,
  HomeInspiredCollections,
  HomeNewsLetter,
} from "../components/home";
import Footer from "../components/home/footer/Footer";
import { HomeJournal } from "../components/home/homejournal";
import { MainFooter } from "../components/layoutComponents";
import { AboutContentDropdown, NavDropdown } from "../components/navContent";
import MyModal from "../components/searchInput/SearchInput";

const AppHome = () => {
  return (
    <div>
      <div className="mx-2 md:mx-12 lg:mx-28 bg-gradientBaseBg">
        {/* <NavDropdown /> */}
        {/* <AboutContentDropdown /> */}
        <HomeHeader />
        <HomeCarousel />
        <HomeExplore />
        <HomeBanner />
        <HomeFeatured />
      </div>
      <div className="bg-gradientBaseAccent ">
        <HomeInspiredCollections />
        <div className="bg-gradientBaseBg2">
          <div className="mx-2 md:mx-12 lg:mx-28">
            <HomeJournal />
          </div>
        </div>
      </div>
      <div className="mx-2 md:mx-12 lg:mx-28 bg-gradientBaseBg">
        <HomeNewsLetter />
        <HomeBannerMore />
      </div>
      <div>{/* <MyModal /> */}</div>
      {/* <div className="bg-gradientBaseBg2 ">
        <div className="">
          <MainFooter />
        </div>
      </div> */}
    </div>
  );
};

export default AppHome;
