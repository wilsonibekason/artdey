import React from "react";
import CollectionContents from "./collectionContents/CollectionContents";

const CollectionLayout = () => {
  return (
    <>
      <div className="mx-10 md:mx-12 lg:mx-28 my-5 md:my-10 lg:my-20">
        <CollectionContents />
      </div>
    </>
  );
};

export default CollectionLayout;
