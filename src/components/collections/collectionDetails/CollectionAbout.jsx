import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const CollectionAbout = () => {
  const { flexCol, flexStart, paragraphCustom } = styles;
  return (
    <>
      <div className={`${flexStart} mt-10`}>
        <div className={`${flexCol} space-y-6 max-w-[70%]`}>
          <h2
            className={`${paragraphCustom} text-gradientBaseAccent text-ellipsis tracking-wider text-5xl`}
          >
            Abiola daniels
          </h2>
          <div>
            <p
              className={`${paragraphCustom} text-gradientBaseAccent tracking-widest leading-7 text-lg w-full`}
            >
              Abiola Daniel Oluwapelumi has worked as a full-time studio artist
              at Ajataiye Art gallery since graduating from school in 2016.
              Daniel has been drawing since he was ten years old, before
              starting to paint. He works typically in acrylics on canvas, and
              his works are mainly Makoko seascapes and some landscapes, themes
              of resplendent horse rides and market scenes.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionAbout;
