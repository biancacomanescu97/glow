import brands from "./data/brands";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="mt-4 rounded-lg bg-citron-200 overflow-hidden shadow divide-y divide-citron-200 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px">
      {brands.map((brand, brandIdx) => (
        <div
          key={brand.name}
          className={classNames(
            brandIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            brandIdx === 2 ? "sm:rounded-tr-lg" : "",
            brandIdx === brands.length - 2 ? "sm:rounded-bl-none" : "",
            brandIdx === brands.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group bg-white p-6 hover:bg-citron-10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-citron-500"
          )}>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-citron-700">
              <a href={brand.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {brand.name}
              </a>
            </h3>
            <p className="mt-2 text-sm text-citron-500">
              {/* I can add description here */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
