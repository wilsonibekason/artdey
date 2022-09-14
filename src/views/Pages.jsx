import React from "react";
import { Outlet } from "react-router-dom";
import { PagesLayout } from "../components/pagelayout";
import Layout from "./Layout";

const Pages = () => {
  return (
    <Layout>
      <div className={`my-20 mx-28`}>
        <PagesLayout>
          <Outlet />
        </PagesLayout>
      </div>
    </Layout>
  );
};

export default Pages;
