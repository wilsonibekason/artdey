import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutMain,
  Faqs,
  Policies,
  TermsOfServices,
} from "./components/pagelayout";
import {
  Aboutus,
  ArtistDetail,
  Home,
  Login,
  Pages,
  PageUnknown,
  Policy,
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
        {/* <Route path="/pages/about-us" element={<Aboutus />} /> */}
        <Route path="/pages" element={<Pages />}>
          {/*appdeyApp pages child routes  */}
          <Route path="about-us" element={<AboutMain />} />
          <Route path="faqs" element={<Faqs />} />
          {/* <Route path="terms-of-service" element={<Policies />} /> */}
          {/* <Route path="refund-policy" element={<TermsOfServices />} /> */}
        </Route>
        <Route path="/policy" element={<Policy />}>
          <Route path="terms-of-service" element={<Policies />} />
          <Route path="refund-policy" element={<TermsOfServices />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppdeyApp;
