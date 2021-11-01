import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function User() {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-citron-700 flex text-sm rounded-full focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-citron-100">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md py-1 bg-floralwhite focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-floralwhite" : "",
                  "block px-4 py-2 text-sm text-citron-700 hover:text-citron"
                )}>
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-floralwhite" : "",
                  "block px-4 py-2 text-sm text-citron-700 hover:text-citron"
                )}>
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-floralwhite" : "",
                  "block px-4 py-2 text-sm text-citron-700 hover:text-citron"
                )}>
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
