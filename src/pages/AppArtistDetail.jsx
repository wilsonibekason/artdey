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
      <div className="bg-gradientBaseBg mx-28">
        <ArtDetailLayout />
        <GuarranteedCheckout />
        <Artist />
        <SimilarArtistLayout />
      </div>
    </>
  );
};

export default AppArtistDetail;
