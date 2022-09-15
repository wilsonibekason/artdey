import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";
import { useIcon } from "../../services/OnIconContext";
import { AdvanceNavContentData } from "../../utils/CarouselData";
import { Link } from "react-router-dom";

const NavDropdown = () => {
  const { paragraphCustom, transitions } = styles;
  const { AdvanceNavLayout } = Layout;
  const { showNavContent, hideNav } = useIcon();
  const [hover, setHover] = useState(null);
  return (
    <>
      <div>
        <Transition appear show={showNavContent} as={Fragment}>
          <Dialog as="div" className={"relative z-10"} onClose={hideNav}>
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
            <div className=" fixed top-44 overflow-y-auto">
              <div className="flex min-h-full max-h-max w-screen items-center justify-center py-4 text-center">
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
                    className={` w-full mx-16 transform overflow-y-auto  bg-gradientBaseBg py-12 px-4  text-center align-middle  transition-all `}
                  >
                    <div>
                      <div className={`${AdvanceNavLayout}`}>
                        {AdvanceNavContentData.map((item, index) => (
                          <>
                            <p>
                              <Link
                                to={item.link}
                                key={item.id}
                                className={`${paragraphCustom} text-md tracking-tight  text-gray-500 ${
                                  hover === item.id ? "underline" : ""
                                } ${transitions}`}
                                onMouseEnter={() => setHover(item.id)}
                                onMouseLeave={() => setHover(null)}
                              >
                                {item.title}
                              </Link>

                              <ul className={" mt-4"}>
                                {[...item.collections]
                                  .sort((a, b) => a.name.localeCompare(b.name))
                                  .map((list, index) => (
                                    <li
                                      key={list.id}
                                      className={`${paragraphCustom} text-md tracking-tight text-gray-500 leading-8 ${
                                        hover === list.id ? "underline" : ""
                                      } ${transitions}`}
                                      onMouseEnter={() => setHover(list.id)}
                                      onMouseLeave={() => setHover(null)}
                                    >
                                      {list.name}
                                    </li>
                                  ))}
                              </ul>
                            </p>
                          </>
                        ))}

                        {/*  */}
                      </div>
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

export default NavDropdown;
