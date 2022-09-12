import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

// componet  for the entire dropdown
export default function App() {
  <Navbar>
    <NavItem>
      <DropdownMenu />
    </NavItem>
  </Navbar>;
}

function Navbar(props) {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <a href="" onClick={setOpen(true)}>
        {props.icons}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    setMenuHeight(dropdownRef.current.firstChild.offsetHeight);
  }, []);
  function calcHeight(el) {
    const height = el.offsetHeight;
    if (height > 0) {
      setMenuHeight(height);
    }
  }
  ////declaring dropdoen Item
  function DropdownItem(props) {
    return (
      <a
        href=""
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span>{props.leftIcon}</span>
        {props.children}
        <span>{props.rightIcon}</span>
      </a>
    );
  }
  ////// declarimg  the main posts
  return (
    <CSSTransition
      in={activeMenu === "main"}
      timeout={500}
      classNames="menu"
      unmountOnExit
      onEnter={calcHeight}
    ></CSSTransition>
  );
}
