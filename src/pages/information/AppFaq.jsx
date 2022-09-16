import React from "react";
import { ContactAbout, ImageGrid } from "../../components/aboutus";
import ImageGrids from "../../components/aboutus/refractor/ImageGrids";
import { Faqs } from "../../components/pagelayout";
import Layout from "../../views/Layout";

const AppFaq = () => {
  return (
    <Layout>
      <div className={`my-4 md:my-12 lg:my-20`}>
        <Faqs />
        <div className="mx-4 md:mx-12  lg:mx-40">
          <ImageGrids />
          <ContactAbout />
        </div>
      </div>
    </Layout>
  );
};

export default AppFaq;
