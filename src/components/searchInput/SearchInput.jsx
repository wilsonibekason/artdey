import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";

export default function MyModal() {
  const { flexRow, flexCentered, inputStyles, labelStyleCustom } = styles;
  const { AiOutlineClose, AiOutlineSearch, isOpen, closeModal } = useIcon();

  return (
    <>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed top-6 overflow-y-auto">
            <div className="flex min-h-full max-h-max w-screen items-center justify-center py-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen transform overflow-hidden  bg-gradientBaseBg py-12 px-4  text-center align-middle shadow-sm transition-all">
                  <div className={`${flexCentered} `}>
                    <div className={`${flexRow} items-center space-x-2`}>
                      <div>
                        <div className={`relative  group   `}>
                          <span
                            className={`absolute right-2 top-4 focus-within:text-gray-700`}
                          >
                            <AiOutlineSearch
                              size={20}
                              className="text-gray-500"
                            />
                          </span>
                          <input
                            type="text"
                            placeholder="search"
                            autoComplete="search"
                            required
                            className={`${inputStyles}`}
                          />
                          <label
                            htmlFor="email"
                            className={`${labelStyleCustom}`}
                          >
                            Search
                          </label>
                        </div>
                      </div>
                      <AiOutlineClose
                        className={`font-extralight font-electra text-gray-500`}
                        size={30}
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
