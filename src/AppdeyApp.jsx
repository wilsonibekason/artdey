import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArtistDetail, Home, Login, PageUnknown, Register } from "./views";
const AppdeyApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageUnknown />} />
        <Route path="/art/:id" element={<ArtistDetail />} />
      </Routes>
    </>
  );
};

export default AppdeyApp;
