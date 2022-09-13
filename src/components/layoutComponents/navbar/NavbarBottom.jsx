import React from "react";
import { useIcon } from "../../../services/OnIconContext";
import styles from "../../../styles/AppdeyCustomStyles";

const NavbarBottom = () => {
  const { MdOutlineKeyboardArrowDown, openNav } = useIcon();
  const { itemsCenter, flexRow, paragraph, transitions } = styles;
  return (
    <div className={`${itemsCenter} py-2`}>
      <div className={`${flexRow} space-x-4`}>
        <div className={`${flexRow} space-x-2 items-center`}>
          <p
            className={`${paragraph} hover:underline hover:text-gray-700 ${transitions}`}
            onClick={openNav}
          >
            Shop
          </p>
          <MdOutlineKeyboardArrowDown
            className="text-gray-500 font-thin"
            size={20}
          />
        </div>
        <div className={`${flexRow} space-x-2 items-center`}>
          <p
            className={`${paragraph} hover:underline hover:text-gray-700 ${transitions}`}
          >
            About
          </p>
          <MdOutlineKeyboardArrowDown
            className="text-gray-500 font-thin"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
