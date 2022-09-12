import React from "react";
import { Link } from "react-router-dom";
import { artdey_logo } from "../../../assets";
import { useIcon } from "../../../services/OnIconContext";
import styles from "../../../styles/AppdeyCustomStyles";

const NavbarTop = () => {
  const { AiOutlineSearch, CgProfile, BsMinecartLoaded } = useIcon();
  const { flexRowJustify, flexRow } = styles;
  return (
    <>
      <div className={`py-4`}>
        <div className={`${flexRowJustify}`}>
          <div>
            <AiOutlineSearch size={25} className={`font-light text-gray-500`} />
          </div>
          <div>
            <Link to="/">
              <img src={artdey_logo} alt="artdey_logo" className={`w-56`} />
            </Link>
          </div>
          <div className={`${flexRow} space-x-6`}>
            <CgProfile size={25} className={`font-light text-gray-500`} />
            <BsMinecartLoaded
              size={25}
              className={`font-light text-gray-500`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
