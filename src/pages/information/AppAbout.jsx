import React from "react";
import { ContactAbout, ImageGrid, OurStory } from "../../components/aboutus";
import ImageGrids from "../../components/aboutus/refractor/ImageGrids";
import Layout from "../../views/Layout";

const AppAbout = () => {
  return (
    <Layout>
      <div className="my-4 md:my-16 lg:my-20">
        <OurStory />
        <div className="mx-4 md:mx-12  lg:mx-40">
          <ImageGrids />
          <ContactAbout />
        </div>
      </div>
    </Layout>
  );
};

export default AppAbout;
