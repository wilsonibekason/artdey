import React from "react";
import { Outlet } from "react-router-dom";
import PolicesLayout from "../components/policiesLayout/PolicesLayout";
import Layout from "./Layout";

const Policy = () => (
  <>
    <Layout>
      <PolicesLayout>
        <Outlet />
      </PolicesLayout>
    </Layout>
  </>
);

export default Policy;
