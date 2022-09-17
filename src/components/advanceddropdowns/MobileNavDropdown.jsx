import React, { useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";
import { CSSTransition } from "react-transition-group";
import { BsArrowRight } from "react-icons/bs";
// contains the dropdown root container
const MobileNavDropdown = () => {
  return (
    <>
      <div>
        <TransitionLayout />
      </div>
    </>
  );
};
const TransitionLayout = () => {
  const { flexCentered } = styles;
  const { navMobileShow, hideMobileNav, BsArrowRight } = useIcon();
  return (
    <>
      <div>
        <Transition appear show={navMobileShow} as={Fragment}>
          <Dialog as="div" className={`relative z-10`} onClose={hideMobileNav}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-0" />
            </Transition.Child>
            {/*  */}
            <div className="fixed top-20 overflow-y-auto scrollbar-thin scrollbar-track-rounded-full ">
              <div
                className={`flex min-h-full max-h-max max-w-screen-phone w-[90%] ${flexCentered} pb-4`}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-400"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={`overflow-y-auto scrollbar-thin scrollbar-track-rounded-full py-12 px-4  mr-2 bg-gradientBaseBg`}
                  >
                    <div>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Assumenda, nulla praesentium corrupti id temporibus
                      nesciunt mollitia nisi aut illo quibusdam.
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
/// incapsulate the root navbar item container
const Navbar = (props) => {
  return (
    <>
      <nav>
        <ul>{props.children}</ul>
      </nav>
    </>
  );
};
/// render the root navbar dropdown items --[shop & about]
const NavItem = (props) => {
  const { dropdownOpen, dropdownClose, DropdownOpen } = useIcon();
  return (
    <>
      <li>
        <a href="" onClick={dropdownOpen}></a>
        {DropdownOpen && props.children}
      </li>
    </>
  );
};
// render the dropdown menu that incompates the container and the headlessui transition
const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    setMenuHeight(dropdownRef.current.firstChild.offsetHeight);
  }, []);
  const calcHeight = (el) => {
    const height = el.offsetHeight;
    height > 0 && setMenuHeight(height);
  };
  const DropdownItem = (props) => {
    return (
      <>
        <a
          href=""
          onClick={() => props.gotoMenu && setMenuHeight(props.gotoMenu)}
        >
          {props.children}
          <span>{props.rightIcon}</span>
        </a>
      </>
    );
  };
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<BsArrowRight />}
            rightIcon={<BsArrowRight />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<BsArrowRight />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BsArrowRight />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BsArrowRight />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BsArrowRight />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BsArrowRight />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BsArrowRight />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
// render the dropdown items  ----- [shop -> artist, price, medium , subject, gift cards, discover all ]

export default MobileNavDropdown;
