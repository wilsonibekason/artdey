import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "../../styles/AppdeyCustomStyles";
import { useIcon } from "../../services/OnIconContext";
import { FooterTopData } from "../../utils/CarouselData";

const AboutContentDropdown = () => {
  const { paragraphCustom, transitions, flexStart, flexCol, listStyles } =
    styles;
  const { showAboutModal, showAboutDropdown, hideAboutModal } = useIcon();

  const [aboutHover, setAboutHover] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Transition appear show={showAboutDropdown} as={Fragment}>
          <Dialog as="div" className={"relative z-10"} onClose={hideAboutModal}>
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
                    className={` w-full mx-16 transform overflow-y-auto  bg-gradientBaseBg py-12 px-4  text-start align-middle  transition-all `}
                  >
                    <div>
                      {FooterTopData.map((item) =>
                        [...item.members]
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((data, i) => (
                            <li
                              key={i}
                              className={`${listStyles} ${
                                aboutHover === data.id ? "underline" : ""
                              } ${transitions} list-none`}
                              onMouseEnter={() => setAboutHover(data.id)}
                              onMouseLeave={() => setAboutHover(null)}
                              onClick={() => navigate(`${data.link}`)}
                            >
                              {data.name}
                            </li>
                          ))
                      )}
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

export default AboutContentDropdown;
