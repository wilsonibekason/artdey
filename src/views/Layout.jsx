import React from "react";
import { BannerTop, Footer, Navbar } from "../components/layoutComponents";

const Layout = ({ children }) => {
  return (
    <>
      <BannerTop />
      <div className={`mx-28`}>
        <Navbar />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
