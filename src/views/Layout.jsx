import React from "react";
import { BannerTop, Footer, Navbar } from "../components/layoutComponents";

const Layout = ({ children }) => {
  return (
    <>
      <BannerTop />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
