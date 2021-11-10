import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import User from "./user/User";

type NavigationItem = {
  name: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  { name: "Explore", href: "/explore" },
  { name: "Reviews", href: "/reviews" },
  { name: "Routine", href: "/routine" },
];

export default function Navbar() {
  return (
    <Menu as="header" className="absolute z-10 inset-x-0 top-4">
      {({ open }) => (
        <>
          <div className="flex">
            {/* Mobile menu button */}
            <div className="absolute pl-4 flex items-center sm:hidden">
              <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-royal-700 hover:text-royal-100 hover:bg-royal-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-100">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Menu.Button>
            </div>

            {/* Header title */}
            <div className="hidden z-20 pl-4 sm:block sm:justify-start font-bold text-royal-700">
              <Link to="/" aria-current={true ? "page" : undefined}>
                GLOW
              </Link>
            </div>

            {/* Header title in mobile view */}
            <div className="flex-1 flex justify-center sm:hidden font-bold text-royal-700">
              <Link to="/" aria-current={true ? "page" : undefined}>
                GLOW
              </Link>
            </div>

            {/* Navitagation items */}
            <div className="hidden absolute w-full sm:flex justify-center text-sm font-medium text-royal-600">
              {navigationItems.map((item) => (
                <Link
                  to={item.href}
                  className="px-10 py-3 transition duration-500 ease-in-out border-b border-floralwhite-100 hover:border-royal-400">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Navitagation items in mobile view*/}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-300"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="p-4 min-h-screen text-royal-600 text-base font-medium bg-floralwhite-100">
              {navigationItems.map((item) => (
                <Menu.Item>
                    <Link
                      to={item.href}
                      className="block p-3 hover:text-royal-300">
                      {item.name}
                    </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
