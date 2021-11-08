import { Link } from "react-router-dom";
import exfoliants from "./data/ingredients";

export default function Explore() {
  return (
    <div className="max-w-full">
      <div className="py-16">
        <h1 className="flex align-middle justify-center text-propolis text-md">
          Chemical exfoliants
        </h1>
        <h2 className="flex animate-pulse-bg-once align-middle justify-center text-magenta text-opacity-70 text-sm">
          Not as harsh as they sound
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10 px-20 py-20">
          {exfoliants.map((ingredient) => (
            <div className="relative flex align-middle justify-center">
              <Link to={ingredient.href}>
                <img
                  className="object-cover rounded-t-full"
                  src={ingredient.imgUrl}
                  alt={ingredient.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* The ABCs */}
      <div className="p-20">
        <h1 className="flex align-middle justify-center text-pine-400 text-md">
          The ABCs
        </h1>
        <div className="grid grid-cols-3 gap-10 p-20">
          <div className="flex align-middle justify-center">
            <img
              className="object-cover rounded-t-full"
              src="/assets/img/explore/window.jpg"
              alt="Background image"
            />
          </div>
          <div className="flex align-middle justify-center">
            <img
              className="object-cover rounded-t-full"
              src="/assets/img/explore/window.jpg"
              alt="Background image"
            />
          </div>
          <div className="flex align-middle justify-center">
            <img
              className="object-cover rounded-t-full"
              src="/assets/img/explore/window.jpg"
              alt="Background image"
            />
          </div>
        </div>
      </div>

      {/* 5 o'clock */}
      <div className="p-20">
        <h1 className="flex align-middle justify-center text-pine-400 text-md">
          It's 5 o'clock somewhere
        </h1>
        <div className="grid grid-cols-3 gap-10 p-20">
          <div className="flex align-middle justify-center">
            <img
              className="object-cover rounded-t-full"
              src="/assets/img/explore/window.jpg"
              alt="Background image"
            />
          </div>
          <div className="flex align-middle justify-center">
            <img
              className="object-cover rounded-t-full"
              src="/assets/img/explore/window.jpg"
              alt="Background image"
            />
          </div>
          <div className="flex align-middle justify-center">
            <img
              className="object-cover rounded-t-full"
              src="/assets/img/explore/window.jpg"
              alt="Background image"
            />
          </div>
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
