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
  { name: "Explore", href: "/explore", current: false },
  { name: "Reviews", href: "/reviews", current: false },
  { name: "Routine", href: "/routine", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="z-10 top-0 right-0 left-0">
      {({ open }) => (
        <>
          <div className="relative z-2 w-full px-8 py-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex z-0 w-full items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-pine-200 hover:text-citron-10 hover:bg-pine-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pine-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Header title */}
              <div className="flex flex-auto items-center justify-center text-2xl font-bold text-pine-300 sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    className="block lg:hidden w-auto"
                    to="/"
                    aria-current={true ? "page" : undefined}>
                    GLOW
                  </Link>
                  <Link
                    className="hidden lg:block w-auto"
                    to="/"
                    aria-current={true ? "page" : undefined}>
                    GLOW
                  </Link>
                </div>
              </div>

              {/* Navitagation items */}
              <div className="flex flex-1 items-center justify-center">
                <div className="hidden sm:block sm:ml-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-pine-200"
                          : "text-pine-300 transition duration-500 ease-in-out border-b border-floralwhite-100 hover:border-pine-100",
                        "px-5 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Profile dropdown */}
              <div className="flex items-center justify-end sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex-auto">
                {/* <User /> */}
              </div>
            </div>

            {/* Hide navitagation items when in mobile view*/}
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
