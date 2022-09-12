import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <>
      <div className="py-10">
        <div className="mx-28">
          <FooterTop />
        </div>
        <div className="border-t border-solid border-gray-700 my-2" />
        <div className="mx-28">
          <FooterBottom />
        </div>
      </div>
    </>
  );
};

export default Footer;
