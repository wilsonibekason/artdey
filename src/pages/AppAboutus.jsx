import React from "react";
import { ContactAbout, ImageGrid, OurStory } from "../components/aboutus";

const AppAboutus = () => {
  return (
    <>
      <div className={`bg-gradientBaseBg mx-28`}>
        <OurStory />
        <ImageGrid />
        <ContactAbout />
      </div>
    </>
  );
};

export default AppAboutus;
