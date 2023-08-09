import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function NavBarSytle() {
    return scrollPosition === 0
      ? "sticky top-0 bg-gray-50 w-screen z-20 border-b"
      : "sticky top-0 bg-gray-50 w-screen z-20 shadow-xl";
  }
  return (
    <Disclosure as="nav" className={NavBarSytle}>
      {({ open }) => (
        <>
          <div className="max-w9xl xs:m-auto mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-6 flex h-16 items-center sm:justify-between md:justify-between lg:justify-between">
              <div className="flex items-center">
                <div className="ml-6 flex-shrink-0">
                  <img
                    className="block h-9 w-auto lg:hidden"
                    src="blackWhiteSquareIcon.png" 
                    alt="Logo"
                  />
                  <img
                    className="hidden h-9 w-auto lg:block"
                    // src="https://i.imgur.com/ELBAyVb.png"
                    src="blackWhiteSquareIcon.png"
                    alt="Logo"
                  />
                </div>
                <h2 className="mt-2 pl-1 text-2xl font-bold">Reactime</h2>
                {/* {'className="mx-4 mt-2 inline-flex items-center rounded-full bg-red-200 px-2.5 py-0.5 text-xs font-medium text-red-800'} */}
                <span className="text-gren-800 mx-4 mt-2 inline-flex items-center rounded-full bg-green-200 px-2.5 py-0.5 text-xs font-medium">
                  v21.0.0
                </span>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="http://github.com/open-source-labs/reactime"
                    target="_blank"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Github
                  </a>
                  <a
                    href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US"
                    target="_blank"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import React from "react";
