import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views";
const AppdeyApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppdeyApp;
