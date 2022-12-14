import React, { createContext, useContext, useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsMinecartLoaded, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdOutlineCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FiDownload, FiFilter } from "react-icons/fi";
const IconContext = createContext({});

export const IconProvider = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [showNavContent, setShowNavContents] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [navMobileShow, setNavMobileShow] = useState(false);
  const [DropdownOpen, setDropdownOpen] = useState(false);
  /// navbar visibility
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const closeModal = () => setIsOpen((prev) => !prev);
  const openModal = () => setIsOpen((prev) => !prev);
  const openNav = () => setShowNavContents((prev) => !prev);
  const hideNav = () => setShowNavContents((prev) => !prev);
  const showAboutModal = () => setShowAboutDropdown((prev) => !prev);
  const hideAboutModal = () => setShowAboutDropdown((prev) => !prev);
  ////////
  const hideMobileNav = () => setNavMobileShow((prev) => !prev);
  const showMobileNav = () => setNavMobileShow((prev) => !prev);
  //////
  const dropdownOpen = () => setDropdownOpen((prev) => !prev);
  const dropdownClose = () => setDropdownOpen((prev) => !prev);
  //// about dropdown simple navbar logic
  return (
    <IconContext.Provider
      value={{
        AiOutlineSearch,
        CgProfile,
        BsMinecartLoaded,
        MdOutlineKeyboardArrowDown,
        BsArrowRight,
        BsArrowLeft,
        MdOutlineCancel,
        AiOutlineClose,
        FiDownload,
        MdDelete,
        AiOutlineDown,
        AiOutlineMenu,
        FiFilter,
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
        show,
        /////
        navMobileShow,
        setNavMobileShow,
        hideMobileNav,
        showMobileNav,
        ///
        DropdownOpen,
        dropdownOpen,
        dropdownClose,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};

export const useIcon = () => useContext(IconContext);
