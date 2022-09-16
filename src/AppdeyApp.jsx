import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutMain,
  Faqs,
  Policies,
  TermsOfServices,
} from "./components/pagelayout";
import TermsofService from "./components/policiesLayout/terms-of-service/TermsofService";
import ScrollToTop from "./hooks/scrollToTop";
import { AppAbout, AppFaq, AppPolicy, AppTerms } from "./pages";
import {
  Aboutus,
  ArtistDetail,
  Cart,
  CollectionsView,
  Home,
  Login,
  Pages,
  PageUnknown,
  Policy,
  Register,
} from "./views";
import Collections from "./views/collection/Collections";
const AppdeyApp = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<PageUnknown />} />
          <Route path="/art/:id" element={<ArtistDetail />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="pages/about-us" element={<AppAbout />} />
          <Route path="pages/faqs" element={<AppFaq />} />

          <Route path="policy/terms-of-service" element={<AppTerms />} />
          <Route path="policy/refund-policy" element={<AppPolicy />} />

          <Route path="/collections" element={<Collections />} />
          <Route path="/collection/:id" element={<CollectionsView />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default AppdeyApp;
