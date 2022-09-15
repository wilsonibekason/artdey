import React from "react";
import styles, {
  Layout,
  uniqueStyleComponents,
} from "../../../styles/AppdeyCustomStyles";
import { HomeJournalData } from "../../../utils/CarouselData";
import HomeJournalCard from "./HomeJournalCard";
import HomeJournalMobileCard from "./HomeJournalMobileCard";

const HomeJournal = () => {
  const {
    flexCol,
    ButtonStyle,
    flexCentered,
    paragraphCustom,
    transitions,
    flexRowJustify,
    flexRow,
  } = styles;
  const { CollectionsLayout, JournalCollectionsLayout } = Layout;
  const { paragraphUnderlined } = uniqueStyleComponents;
  return (
    <>
      <div className={`pb-10 md:pb-10 lg:pb-0`}>
        <div className={`${flexCol} space-y-4`}>
          <div className={`${flexRowJustify}`}>
            <h4
              className={`${paragraphCustom} text-black text-xl md:text-4xl py-10`}
            >
              journal
            </h4>
            <p
              className={`${paragraphCustom} text-md md:text-lg hover:underline cursor-pointer text-gradientBaseAccent tracking-wider ${transitions} block md:block lg:hidden`}
            >
              {" "}
              view more
            </p>
          </div>
          {/* card item */}
          <div className={`hidden md:block lg:block`}>
            <div className={`${JournalCollectionsLayout}`}>
              {HomeJournalData.map((item, index) => (
                <HomeJournalCard {...item} key={index} />
              ))}
            </div>

            {/*  */}
          </div>

          <div
            className={` ${flexRow} flex-nowrap gap-x-10 w-full overflow-x-auto scrollbar-none block lg:hidden`}
          >
            {HomeJournalData.map((item, index) => (
              <HomeJournalMobileCard {...item} key={index} />
            ))}
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
