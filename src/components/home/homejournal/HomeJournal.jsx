import React from "react";
import styles, {
  Layout,
  uniqueStyleComponents,
} from "../../../styles/AppdeyCustomStyles";
import { HomeJournalData } from "../../../utils/CarouselData";
import HomeJournalCard from "./HomeJournalCard";

const HomeJournal = () => {
  const {
    flexCol,
    ButtonStyle,
    flexCentered,
    paragraphCustom,
    transitions,
    flexRowJustify,
  } = styles;
  const { CollectionsLayout, JournalCollectionsLayout } = Layout;
  const { paragraphUnderlined } = uniqueStyleComponents;
  return (
    <>
      <div className={`pb-10 md:pb-10 lg:pb-0`}>
        <div className={`${flexCol} space-y-4`}>
          <div className={`${flexRowJustify}`}>
            <h4 className={`${paragraphCustom} text-black text-4xl py-10`}>
              journal
            </h4>
            <p
              className={`${paragraphUnderlined} ${transitions} phone:hidden tablet:block laptop:hidden desktop:hidden Xdesktop:hidden`}
            >
              {" "}
              view more
            </p>
          </div>
          {/* card item */}
          <div>
            <div className={`${JournalCollectionsLayout}`}>
              {HomeJournalData.map((item, index) => (
                <HomeJournalCard {...item} key={index} />
              ))}
            </div>

            {/*  */}
          </div>
          <div className={`${flexCentered} hidden md:hidden lg:block`}>
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
