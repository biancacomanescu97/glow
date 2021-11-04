import { Link } from "react-router-dom";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigationItems: NavigationItem[] = [
  { name: "Affiliate", href: "/affiliate", current: false },
  { name: "FAQs", href: "/faqs", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <footer className="bottom-0 w-full items-center justify-center text-floralwhite-100 bg-pine text-sm font-medium">
      <div className="flex flex-1 items-center justify-center p-10 text-sm font-medium divide-x">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.current
                ? "text-pine-200"
                : "text-floralwhite-100 hover:text-pine-100 px-10 py-2"
            )}
            aria-current={item.current ? "page" : undefined}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 items-center px-8 pb-4">
        <div className="flex flex-1 justify-start">
          © Glow, Inc. All rights reserved
        </div>
        <div className="flex flex-1 justify-end">
          <a href="https://github.com/biancacomanescu97" target="_blank">
            <img
              className="h-8 w-8 rounded-full object-cover p-1 mx-4 border border-pine hover:border-floralwhite-100"
              src="/assets/icon/github.png"
              alt="User profile"
            />
          </a>
          <a href="https://www.instagram.com/bianca.coms" target="_blank">
            <img
              className="h-8 w-8 rounded-lg object-cover p-1 mx-4 border border-pine hover:border-floralwhite-100"
              src="/assets/icon/instagram.png"
              alt="User profile"
            />
          </a>
          <a href="https://www.linkedin.com/in/bianca-comanescu/" target="_blank">
            <img
              className="h-8 w-8 rounded-lg object-cover p-1 mx-4 border border-pine hover:border-floralwhite-100"
              src="/assets/icon/linkedin.png"
              alt="User profile"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
