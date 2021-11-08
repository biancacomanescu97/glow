import { Link } from "react-router-dom";
import {exfoliants, abc, teas} from "./data/ingredients";

export default function Explore() {
  return (
    <div className="block max-w-full">
      <div className="pt-16">
        <h1 className="flex align-middle justify-center text-propolis text-md">
          CHEMICAL EXFOLIANTS
        </h1>
        <h2 className="flex animate-pulse-bg-once align-middle justify-center text-magenta text-opacity-70 text-sm">
          Not as harsh as they sound
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10 px-20 py-20">
          {exfoliants.map((item) => (
            <div className="relative flex align-middle justify-center">
              <Link to={item.href}>
                <img
                  className="object-cover rounded-t-full"
                  src={item.imgUrl}
                  alt={item.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h1 className="flex align-middle justify-center text-pine-800 text-md">
          TEAS
        </h1>
        <h2 className="flex animate-pulse-bg-once align-middle justify-center text-pine text-opacity-70 text-sm">
          It's 5 o'clock somewhere
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10 px-20 py-20">
          {teas.map((item) => (
            <div className="relative flex align-middle justify-center">
              <Link to={item.href}>
                <img
                  className="object-cover rounded-t-full"
                  src={item.imgUrl}
                  alt={item.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-16">
        <h1 className="flex align-middle justify-center text-propolis-400 text-md">
          THE ABCs
        </h1>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10 px-20 py-20">
          {abc.map((item) => (
            <div className="relative flex align-middle justify-center">
              <Link to={item.href}>
                <img
                  className="object-cover rounded-t-full"
                  src={item.imgUrl}
                  alt={item.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      

      {/* <ul role="list" className="mt-4 space-y-3">
          {ingredients.map((ingredient) => (
            <li className="relative bg-floralwhite-200 shadow px-4 py-4 sm:px-6 sm:rounded-md">
              <h3 className="text-md font-medium text-citron-700">
                <a href={ingredient.href} className="hover:text-citron-400">
                  {ingredient.name}
                </a>
              </h3>
              <p className="m-4 text-sm text-citron-600">
                <ul role="list" className="list-disc space-y-2">
                  {ingredient.description.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </p>
            </li>
          ))}
        </ul> */}
    </div>
  );
}
