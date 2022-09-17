import React from "react";
import DropdownMenu from "../components/advanceddropdowns/DropdownNavMobile";
import MobileNavDropdown from "../components/advanceddropdowns/MobileNavDropdown";
import { BannerTop, MainFooter, Navbar } from "../components/layoutComponents";
import { AboutContentDropdown, NavDropdown } from "../components/navContent";
import MyModal from "../components/searchInput/SearchInput";
import { useIcon } from "../services/OnIconContext";

const Layout = ({ children }) => {
  const { DropdownOpen } = useIcon();
  return (
    <>
      <BannerTop />
      <div className={`bg-gradientBaseBg`}>
        <div className={`mx-2 md:mx-12 lg:mx-28`}>
          <Navbar />
        </div>
        <NavDropdown />
        <AboutContentDropdown />
        <MyModal />
        {/*  */}
        {DropdownOpen && <DropdownMenu />}
        {/* <MobileNavDropdown /> */}
        <div className={``}>{children}</div>
        <div className={``}>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default Layout;
