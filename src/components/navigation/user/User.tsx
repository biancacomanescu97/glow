import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function User() {
  return (
    <Menu as="div" className="ml-3 relative z-50">
      <div>
        <Menu.Button className="bg-citron-700 flex text-sm rounded-full focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-floralwhite-100">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="/assets/img/user.jpg"
            alt="User profile"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md py-1 bg-floralwhite-100 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/user/profile"
                className={classNames(
                  active ? "bg-floralwhite-100" : "",
                  "block px-4 py-2 text-sm text-citron-700 hover:text-citron"
                )}>
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/user/settings"
                className={classNames(
                  active ? "bg-floralwhite-100" : "",
                  "block px-4 py-2 text-sm text-citron-700 hover:text-citron"
                )}>
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="#"
                className={classNames(
                  active ? "bg-floralwhite-100" : "",
                  "block px-4 py-2 text-sm text-citron-700 hover:text-citron"
                )}>
                Sign out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
