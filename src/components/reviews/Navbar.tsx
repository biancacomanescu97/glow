import { Link } from "react-router-dom";

type NavigationItem = {
  name: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  { name: "All time favourites", href: "fav"},
  { name: "Beauty of Joseon", href: "joseon"},
  { name: "Cosrx", href: "cosrx"},
  { name: "Fresh", href: "fresh"},
  { name: "HaruHaru", href: "haruharu"},
  { name: "I’m From", href: "imfrom"},
  { name: "Laneige", href: "laneige"},
  { name: "Make P:rem", href: "makeprem"},
  { name: "Paula's Choice", href: "paulaschoice"},
  { name: "Sioris", href: "sioris"},
  { name: "The Inkey List", href: "theinkeylist"},
  { name: "The Ordinary", href: "theordinary"},
];

export default function Navbar() {
  return (
    <div className="hidden md:flex md:flex-col md:px-6 md:py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-shrink-0">
          <div className="flex-1 text-base text-pine-300 font-bold">
            BRANDS
          </div>
        </div>
        <div className="mt-5 flex-1 flex flex-col">
          <nav className="flex-1 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex py-2 text-pine text-sm
                  transition duration-500 ease-out transform hover:text-pine-200 hover:translate-x-3">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}