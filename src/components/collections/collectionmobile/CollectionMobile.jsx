import React from "react";
import { useIcon } from "../../../services/OnIconContext";
import styles from "../../../styles/AppdeyCustomStyles";

const CollectionFilterMobile = () => {
  const { flexRowJustify, flexRow, flexCentered } = styles;
  const { FiFilter } = useIcon();
  return (
    <>
      <div className={`block md:hidden `}>
        <div className={`${flexRowJustify}`}>
          <div className={`${flexRow} space-x-2 items-center`}>
            <FiFilter />
            <p>Filter and sort</p>
          </div>
          <div>
            <p>2 products</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionFilterMobile;
