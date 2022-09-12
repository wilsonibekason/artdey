import React from "react";
import styles, { Layout } from "../../../styles/AppdeyCustomStyles";
import { HomeJournalData } from "../../../utils/CarouselData";
import HomeJournalCard from "./HomeJournalCard";

const HomeJournal = () => {
  const { flexCol, ButtonStyle, flexCentered, paragraphCustom, transitions } =
    styles;
  const { gridLayoutSection, CollectionsLayout } = Layout;
  return (
    <>
      <div>
        <div className={`${flexCol} space-y-4`}>
          <div>
            <h4 className={`${paragraphCustom} text-black text-4xl py-10`}>
              journal
            </h4>
          </div>
          {/* card item */}
          <div>
            <div className={`${CollectionsLayout}`}>
              {HomeJournalData.map((item, index) => (
                <HomeJournalCard {...item} key={index} />
              ))}
            </div>

            {/*  */}
          </div>
          <div className={`${flexCentered}`}>
            <div className="pb-4">
              <button
                className={`${ButtonStyle} py-2.5 px-5 bg-gradientBaseAccent text-white text-md mt-10`}
              >
                view all
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeJournal;
