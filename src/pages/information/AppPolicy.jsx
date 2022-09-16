import React from "react";
import { Policies } from "../../components/pagelayout";
import Layout from "../../views/Layout";

const AppPolicy = () => {
  return (
    <Layout>
      <div className={`mx-4 md:mx-12 lg:mx-28 my-4 md:my-10 lg:my-20`}>
        <Policies />
      </div>
    </Layout>
  );
};

export default AppPolicy;
