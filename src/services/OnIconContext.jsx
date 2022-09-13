import React, { createContext, useContext, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsMinecartLoaded, BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdOutlineCancel } from "react-icons/md";

const IconContext = createContext({});

export const IconProvider = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [showNavContent, setShowNavContents] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const closeModal = () => setIsOpen((prev) => !prev);
  const openModal = () => setIsOpen((prev) => !prev);
  const openNav = () => setShowNavContents((prev) => !prev);
  const hideNav = () => setShowNavContents((prev) => !prev);
  const showAboutModal = () => setShowAboutDropdown((prev) => !prev);
  const hideAboutModal = () => setShowAboutDropdown((prev) => !prev);
  //// about dropdown simple navbar logic
  return (
    <IconContext.Provider
      value={{
        AiOutlineSearch,
        CgProfile,
        BsMinecartLoaded,
        MdOutlineKeyboardArrowDown,
        BsArrowRight,
        MdOutlineCancel,
        AiOutlineClose,
        /// end of icons export
        isOpen,
        setIsOpen,
        openModal,
        closeModal,
        showNavContent,
        setShowNavContents,
        openNav,
        hideNav,
        showAboutModal,
        showAboutDropdown,
        hideAboutModal,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};

export const useIcon = () => useContext(IconContext);
