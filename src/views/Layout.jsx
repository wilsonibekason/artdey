import React from "react";
import { BannerTop, MainFooter, Navbar } from "../components/layoutComponents";
import { AboutContentDropdown, NavDropdown } from "../components/navContent";
import MyModal from "../components/searchInput/SearchInput";

const Layout = ({ children }) => {
  return (
    <>
      <BannerTop />
      <div className={`bg-gradientBaseBg`}>
        <div className={`mx-10 md:mx-12 lg:mx-28`}>
          <Navbar />
        </div>
        <NavDropdown />
        <AboutContentDropdown />
        <MyModal />
        <div className={``}>{children}</div>
        <div className={``}>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default Layout;
