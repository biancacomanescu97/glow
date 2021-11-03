import ingredients from "./data/ingredients";

export default function Ingredients() {
  return (
    <ul role="list" className="mt-4 space-y-3">
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
    </ul>
  );
}
