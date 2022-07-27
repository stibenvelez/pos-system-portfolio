import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";

export default function Modal({ modalOpen, onCancel, children }) {
    
    return (
        <>
            <Transition appear show={modalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onCancel}>
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-end px-3 pt-3">
                                        <button
                                            className="hover:bg-gray-100 p-1 cursor-pointer rounded-full  hover:border-gray-300 focus:outline  focus:outline-none "
                                            type="button"
                                            onClick={onCancel}
                                        >
                                            <XIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="px-6 pb-6">{children}</div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
