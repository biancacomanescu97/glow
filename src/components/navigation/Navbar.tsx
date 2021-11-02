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
    <div className="min-h-full">
      <div className="bg-citron pb-32">
        <Disclosure as="nav" className="bg-citron">
          {({ open }) => (
            <>
              <div className="max-w-full mx-auto sm:px-6 sm:py-0 lg:px-8 lg:py-4">
                <div className="border-b border-citron">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                    <div className="flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-citron-200 hover:text-citron-10 hover:bg-citron-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-citron-10">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex-shrink-0 flex w-auto items-center text-xl font-bold text-floralwhite rounded-md">
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
                      <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                          {navigationItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-citron-700 text-floralwhite"
                                  : "text-citron-50 hover:bg-citron-400 hover:text-floralwhite",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* Profile dropdown */}
                      <User />
                    </div>
                  </div>
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
                          ? "bg-citron-900 text-floralwhite"
                          : "text-citron-50 hover:bg-citron-400 hover:text-floralwhite",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
