import React from "react";
import TermsofService from "../../components/policiesLayout/terms-of-service/TermsofService";
import { Layout } from "../../styles/AppdeyCustomStyles";

const AppTerms = () => {
  return (
    <Layout>
      <div className={`mx-4 md:mx-12 lg:mx-28 my-4 md:my-10 lg:my-20`}>
        <TermsofService />
      </div>
    </Layout>
  );
};

export default AppTerms;
