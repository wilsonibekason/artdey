import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useIcon } from "../../services/OnIconContext";
import styles, { dropdownStylesLayout } from "../../styles/AppdeyCustomStyles";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { BsArrowLeft, BsArrowRight } = useIcon();
  const { border_radius, bg } = dropdownStylesLayout;
  const { flexRowJustify, paragraphCustom } = styles;
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className={`${flexRowJustify} ${paragraphCustom} text-gradientBaseAccent text-md text-ellipsis tracking-wide leading-7 `}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {/* <span className="icon-button">{props.leftIcon}</span> */}

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="relative z-10">
      <div
        className={`absolute top-[10px] w-[320px]  bg-gradientBaseBg px-8 py-20 overflow-hidden transition min-h-screen h-screen`}
        style={{ height: menuHeight }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<BsArrowLeft />}
              rightIcon={<BsArrowRight />}
              goToMenu="settings"
            >
              Shop
            </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<BsArrowRight />}
              goToMenu="animals"
            >
              About
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
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="main" leftIcon={<BsArrowLeft />}>
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
          <div className="w-full">
            <DropdownItem goToMenu="main" leftIcon={<BsArrowLeft />}>
              <h2>Animals</h2>
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
            <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
