import React from "react";
import styles, { Layout } from "../../../styles/AppdeyCustomStyles";
import ArtistDetailContent from "./ArtistDetailContent";
import ArtistDetailImage from "./ArtistDetailImage";

const ArtDetailLayout = () => {
  const { ProductDetailLayout, ProductDetailChild, ProductDetailChild2 } =
    Layout;
  const {} = styles;
  return (
    <>
      <div>
        <div className={`${ProductDetailLayout} items-center`}>
          <div className={`${ProductDetailChild2} `}>
            <div className={`relative`}>
              {/* layout for image section */}
              <ArtistDetailImage />
            </div>
          </div>

          <div className={`${ProductDetailChild}`}>
            {/* layout for  artdetail info and descriptions */}
            <div className={`mt-20`}>
              <ArtistDetailContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtDetailLayout;
