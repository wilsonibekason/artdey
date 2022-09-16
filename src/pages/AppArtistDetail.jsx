import React from "react";
import {
  Artist,
  GuarranteedCheckout,
  SimilarArtistLayout,
} from "../components/details";
import { ArtDetailLayout } from "../components/details/ArtistDetail";

const AppArtistDetail = () => {
  return (
    <>
      <div className="bg-gradientBaseBg mx-4 md:mx-12 lg:mx-28 my-10">
        <ArtDetailLayout />
        <GuarranteedCheckout />
        <Artist />
        <SimilarArtistLayout />
      </div>
    </>
  );
};

export default AppArtistDetail;
