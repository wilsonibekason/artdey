import React from "react";
import {
  CollectionAbout,
  CollectionByArtist,
  CollectionFilter,
} from "../components/collections";

const AppCollectionContents = () => {
  return (
    <>
      <div>
        <CollectionAbout />
        <CollectionFilter />
        <CollectionByArtist />
      </div>
    </>
  );
};

export default AppCollectionContents;
