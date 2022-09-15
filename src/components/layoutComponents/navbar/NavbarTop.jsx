import React from "react";
import { Link } from "react-router-dom";
import { artdey_logo } from "../../../assets";
import { useIcon } from "../../../services/OnIconContext";
import styles from "../../../styles/AppdeyCustomStyles";

const NavbarTop = () => {
  const {
    AiOutlineSearch,
    CgProfile,
    BsMinecartLoaded,
    openModal,
    AiOutlineMenu,
  } = useIcon();
  const { flexRowJustify, flexRow, transitions } = styles;
  return (
    <>
      <div className={`py-4`}>
        <div className={`${flexRowJustify}`}>
          <div>
            <AiOutlineSearch
              size={25}
              className={`font-light text-gray-500 hover:scale-105 ${transitions} hidden md:hidden lg:block`}
              onClick={openModal}
            />
            <AiOutlineMenu
              size={25}
              className={`font-light text-gray-500 hover:scale-105 ${transitions} phone:block tablet:block desktop:hidden Xdesktop:hidden`}
              onClick={openModal}
            />
          </div>
          <div>
            <Link to="/">
              <img src={artdey_logo} alt="artdey_logo" className={`w-56`} />
            </Link>
          </div>
          <div className={`${flexRow} space-x-6`}>
            <AiOutlineSearch
              size={25}
              className={`font-light text-gray-500 hover:scale-105 ${transitions} phone:block laptop:hidden desktop:hidden Xdesktop:hidden`}
              onClick={openModal}
            />
            <Link to={"/login"}>
              <CgProfile
                size={25}
                className={`hidden md:block font-light text-gray-500  hover:scale-105 ${transitions}`}
              />
            </Link>
            <Link to="/cart">
              <BsMinecartLoaded
                size={25}
                className={`font-light text-gray-500 hover:scale-105 ${transitions}`}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
