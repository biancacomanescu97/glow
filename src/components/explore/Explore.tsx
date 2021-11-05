import exfoliants from "./data/ingredients";

export default function Explore() {
  return (
    <div className="max-w-full">
      {/* Not as harsh as you may think */}
      <div className="bg-floralwhite-100">
        <h1 className="pt-10 flex align-middle justify-center text-floralwhite-300 text-md">
          Not as harsh as they sound
        </h1>
        <div className="px-40 pt-10 pb-20 grid grid-cols-3 gap-10">
          {exfoliants.map((ingredient) => (
            <div className="relative flex align-middle justify-center">
              <img
                className="object-cover rounded-t-full"
                src="/assets/img/explore/Alpha Hydroxy Acid (AHA).jpg"
                alt="Background image"
              />
              {/* <div className="absolute bg-pine h-50 bg-opacity-30">
                <div className="text-md text-pine-700 align-middle justify-center">
                  {ingredient.name}
                </div>
                <ul role="list" className="space-y-2 text-sm">
                  {ingredient.description.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div> */}
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
