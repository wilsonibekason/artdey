import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Aboutus,
  ArtistDetail,
  Home,
  Login,
  PageUnknown,
  Register,
} from "./views";
const AppdeyApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageUnknown />} />
        <Route path="/art/:id" element={<ArtistDetail />} />
        <Route path="/pages/about-us" element={<Aboutus />} />
      </Routes>
    </>
  );
};

export default AppdeyApp;
