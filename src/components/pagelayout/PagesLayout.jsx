import React from "react";
import { ContactAbout, ImageGrid } from "../aboutus";

const PagesLayout = ({ children }) => {
  return (
    <>
      <div>
        {children}
        <ImageGrid />
        <ContactAbout />
      </div>
    </>
  );
};

export default PagesLayout;
