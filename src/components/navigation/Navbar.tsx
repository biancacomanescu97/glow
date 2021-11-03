import { Disclosure, Menu } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import User from "./user/User";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigationItems: NavigationItem[] = [
  { name: "Explore", href: "/explore/brands", current: false },
  { name: "Routine", href: "/routine", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="fixed top-0 right-0 left-0 z-10">
      {({ open }) => (
        <>
          <div className="relative z-2 max-w-full border-t px-8 py-4">
            <div className="relative z-0 flex align-middle max-w-full">
              <div className="relative w-4/6 flex flex-nowrap flex-grow-1 flex-shrink-0">
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-citron-200 hover:text-citron-10 hover:bg-citron-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-citron-10">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 w-2/6">
                  <div className="m-0 w-4/6 text-2xl font-bold text-pine-200 rounded-md sm:items-center">
                    <Link
                      className="hidden lg:block"
                      to="/"
                      aria-current={true ? "page" : undefined}>
                      GLOW
                    </Link>
                    <Link
                      className="block lg:hidden"
                      to="/"
                      aria-current={true ? "page" : undefined}>
                      GLOW
                    </Link>
                  </div>
                  <div className="flex-1 hidden text-center sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-citron-700 text-pine-200"
                              : "text-pine-200 hover:bg-citron-400 hover:text-pine-200",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
                {/* Profile dropdown */}
                {/* <User />
                </div> */}
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-citron-900 text-pine-200"
                        : "text-pine-200 hover:bg-citron-400 hover:text-pine-200",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
