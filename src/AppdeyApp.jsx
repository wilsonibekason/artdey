import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArtistDetail, Home, Login, Register } from "./views";
const AppdeyApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
        <Route path="/art/:id" element={<ArtistDetail />} />
      </Routes>
    </>
  );
};

export default AppdeyApp;
