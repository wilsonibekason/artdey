import React from "react";
import {
  CollectionAbout,
  CollectionByArtist,
  CollectionFilter,
} from "../components/collections";

const AppCollectionContents = () => {
  return (
    <>
      <div className="mx-28 my-20">
        <CollectionAbout />
        <CollectionFilter />
        <CollectionByArtist />
      </div>
    </>
  );
};

export default AppCollectionContents;
