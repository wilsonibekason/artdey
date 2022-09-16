import React from "react";
import { ContactAbout, ImageGrid, OurStory } from "../../components/aboutus";
import Layout from "../../views/Layout";

const AppAbout = () => {
  return (
    <Layout>
      <div>
        <OurStory />
        <ImageGrid />
        <ContactAbout />
      </div>
    </Layout>
  );
};

export default AppAbout;
