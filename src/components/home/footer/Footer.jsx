import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <>
      <div className="py-20">
        <div className="mx-4  md:mx-12 lg:mx-28 mb-12">
          <FooterTop />
        </div>
        <div className="border-t border-solid border-gray-300 my-2" />
        <div className="mx-4 md:mx-12 lg:mx-28">
          <FooterBottom />
        </div>
      </div>
    </>
  );
};

export default Footer;
