import React from "react";
import { BannerTop, Footer, Navbar } from "../components/layoutComponents";

const Layout = ({ children }) => {
  return (
    <>
      <BannerTop />
      <div className={`bg-gradientBaseBg`}>
        <div className={`mx-28 `}>
          <Navbar />
        </div>
        <div className={`mx-28`}>{children}</div>
        <div className={``}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
