import React from "react";
import { ContactAbout, ImageGrid } from "../../components/aboutus";
import { Faqs } from "../../components/pagelayout";

const AppFaq = () => {
  return (
    <Layout>
      <div>
        <Faqs />
        <ImageGrid />
        <ContactAbout />
      </div>
    </Layout>
  );
};

export default AppFaq;
