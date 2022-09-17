import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useIcon } from "../../services/OnIconContext";
import styles, { dropdownStylesLayout } from "../../styles/AppdeyCustomStyles";
import { AdvanceNavContentData, FooterTopData } from "../../utils/CarouselData";

export default function DropdownMenu() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { BsArrowLeft, BsArrowRight } = useIcon();
  const { border_radius, bg } = dropdownStylesLayout;
  const { flexRowJustify, paragraphCustom, transitions, flexRow } = styles;
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
        className={`${flexRowJustify} ${paragraphCustom} text-gradientBaseAccent text-md text-ellipsis tracking-wide leading-9 `}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className={`${flexRow} space-x-2 items-center`}>
          {props.leftIcon}
          <p
            onClick={() =>
              navigate(`/collection/${props.link}`, { replace: true })
            }
          >
            {" "}
            {props.children}
          </p>
        </span>

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="relative z-10">
      <div
        className={`absolute top-[10px] w-[320px]  bg-gradientBaseBg px-4 py-20 overflow-hidden transition min-h-screen h-screen`}
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
            <DropdownItem>Art2Cash</DropdownItem>
            <DropdownItem
              //   leftIcon={<BsArrowLeft />}
              rightIcon={<BsArrowRight />}
              goToMenu="shop"
            >
              Shop
            </DropdownItem>
            <DropdownItem
              //   leftIcon="🦧"
              rightIcon={<BsArrowRight />}
              goToMenu="about"
            >
              About
            </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "shop"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="main" leftIcon={<BsArrowLeft />}>
              <h2>Shop</h2>
            </DropdownItem>
            <DropdownItem goToMenu="artist" rightIcon={<BsArrowRight />}>
              Artist
            </DropdownItem>
            <DropdownItem goToMenu="price" rightIcon={<BsArrowRight />}>
              Price
            </DropdownItem>
            <DropdownItem goToMenu="medium" rightIcon={<BsArrowRight />}>
              Medium
            </DropdownItem>
            <DropdownItem goToMenu="subject" rightIcon={<BsArrowRight />}>
              Subject!
            </DropdownItem>
            <DropdownItem rightIcon={<BsArrowRight />}>Gift Cards</DropdownItem>
            <DropdownItem rightIcon={<BsArrowRight />}>
              Discover all art
            </DropdownItem>
          </div>
        </CSSTransition>
        {/* displaying about page */}

        <CSSTransition
          in={activeMenu === "about"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="main" leftIcon={<BsArrowLeft />}>
              <h2>About</h2>
            </DropdownItem>
            {/* dynamically display about links */}
            {[...FooterTopData[0].members].map((item, index) => (
              <DropdownItem key={item.id} link={item.link}>
                {item.name}
              </DropdownItem>
            ))}
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

        {/* for displaying all artists */}
        <CSSTransition
          in={activeMenu === "artist"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="shop" leftIcon={<BsArrowLeft />}>
              <h2>Artists</h2>
            </DropdownItem>
            {/* dynamically display artists */}
            {[...AdvanceNavContentData[0].collections]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <DropdownItem key={index + 1} link={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
          </div>
        </CSSTransition>
        {/* for displaying all price */}
        <CSSTransition
          in={activeMenu === "price"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="shop" leftIcon={<BsArrowLeft />}>
              <h2>Price</h2>
            </DropdownItem>
            {/* dynamically display price */}
            {[...AdvanceNavContentData[1].collections]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <DropdownItem key={index + 1} link={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
          </div>
        </CSSTransition>

        {/* for displaying all medium */}
        <CSSTransition
          in={activeMenu === "medium"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="shop" leftIcon={<BsArrowLeft />}>
              <h2>Medium</h2>
            </DropdownItem>
            {/* dynamically display subject */}
            {[...AdvanceNavContentData[2].collections]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <DropdownItem key={index + 1} link={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
          </div>
        </CSSTransition>
        {/* for displaying all Subject */}
        <CSSTransition
          in={activeMenu === "subject"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md ">
            <DropdownItem goToMenu="shop" leftIcon={<BsArrowLeft />}>
              <h2>Subject</h2>
            </DropdownItem>
            {/* dynamically display Subject */}
            {[...AdvanceNavContentData[3].collections]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <DropdownItem key={index + 1} link={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
