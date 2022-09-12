import React, { createContext, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsMinecartLoaded, BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const IconContext = createContext({});

export const IconProvider = ({ children }) => {
  return (
    <IconContext.Provider
      value={{
        AiOutlineSearch,
        CgProfile,
        BsMinecartLoaded,
        MdOutlineKeyboardArrowDown,
        BsArrowRight,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};

export const useIcon = () => useContext(IconContext);
