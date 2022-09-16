import React from "react";
import { useIcon } from "../../../services/OnIconContext";
import styles, {
  uniqueStyleComponents,
} from "../../../styles/AppdeyCustomStyles";

const CollectionFilter = () => {
  const { flexRowJustify, flexRow } = styles;
  const { text } = uniqueStyleComponents;
  const { AiOutlineDown } = useIcon();
  return (
    <>
      <div className="my-8 hidden md:block">
        <div className={`${flexRowJustify}`}>
          <div className={`${flexRow} space-x-6`}>
            <p className={`${text} capitalize`}>filter:</p>
            <div className={`${flexRow} items-center space-x-2 `}>
              <p className={`${text} capitalize`}>availability</p>
              <AiOutlineDown className="text-gradientBaseAccent " size={15} />
            </div>
            <div className={`${flexRow} items-center space-x-2`}>
              <p className={`${text} capitalize`}>Price</p>
              <AiOutlineDown className="text-gradientBaseAccent" size={15} />
            </div>
          </div>
          <div className={`${flexRow} space-x-6`}>
            <p className={`${text} capitalize`}>Sort by :</p>
            <div className={`${flexRow} items-center space-x-6 `}>
              <p className={`${text} capitalize`}>best selling </p>
              <AiOutlineDown className="text-gradientBaseAccent " size={15} />
            </div>
            <p className={`${text} capitalize`}>
              2 product<span className="lowercase">(s)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionFilter;
