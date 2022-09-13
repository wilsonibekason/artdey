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
import { NavDropdown } from "../components/navContent";
import MyModal from "../components/searchInput/SearchInput";

const AppHome = () => {
  return (
    <div>
      <div className="mx-28 bg-gradientBaseBg">
        <NavDropdown />
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
        <HomeBannerMore />
      </div>
      <div>
        <MyModal />
      </div>
      <div className="bg-gradientBaseBg2 ">
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppHome;
