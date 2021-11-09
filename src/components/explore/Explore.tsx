import { Link } from "react-router-dom";
import {abc, exfoliants, power, teas} from "./data/ingredients";

export default function Explore() {
  return (
    <div className="block max-w-full">
      <div className="py-16">
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
                  className="object-cover"
                  src={item.imgUrl}
                  alt={item.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-16">
        <h1 className="flex align-middle justify-center text-royal-10 text-md">
          POWER HOUSES
        </h1>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10 px-20 py-20">
          {power.map((item) => (
            <div className="relative flex align-middle justify-center">
              <Link to={item.href}>
                <img
                  className="object-cover"
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
                  className="object-cover"
                  src={item.imgUrl}
                  alt={item.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div> 

      <div className="pb-16">
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
                  className="object-cover"
                  src={item.imgUrl}
                  alt={item.imgAlt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
