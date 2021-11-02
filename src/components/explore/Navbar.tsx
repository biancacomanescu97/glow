import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 flex items-center"
        aria-hidden="true">
        <div className="w-full border-t border-citron-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
          <Link
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-citron-300 bg-white text-sm font-medium text-citron-400 hover:bg-citron-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-citron-500 focus:border-citron-500"                    
            to="/explore/brands"
            aria-current={true ? "page" : undefined}>
            Brands
          </Link>
          <Link
            className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-citron-300 bg-white text-sm font-medium text-citron-400 hover:bg-citron-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-citron-500 focus:border-citron-500"                    
            to="/explore/ingredients"
            aria-current={true ? "page" : undefined}>
            Ingredients
          </Link>
        </span>
      </div>
    </div>
  );
}