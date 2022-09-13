import React from "react";
import { BannerTop, MainFooter, Navbar } from "../components/layoutComponents";

const Layout = ({ children }) => {
  return (
    <>
      <BannerTop />
      <div className={`bg-gradientBaseBg`}>
        <div className={`mx-28 `}>
          <Navbar />
        </div>
        <div className={``}>{children}</div>
        <div className={``}>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default Layout;
