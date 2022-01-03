export default function MakePrem() {
  return (
    <div className="flex-1 md:pt-20 lg:pt-28">
      <div className="block">
        <div className="grid grid-cols-2 w-full h-4/5">
          <div className="">
            <h1 className="flex justify-center align-middle text-lg text-royal-700 font-bold uppercase tracking-widest">
            Safe me Relief Moisture Cream
            </h1>
            <div className="text-sm tracking-tighter text-royal-700">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-royal-600 text-opacity-50">
                  <li>hydrates</li>
                  <li>nourishes</li>
                  <li>rebuilds skin barrier</li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-royal-600 text-opacity-50">
                  <li>This is God sent product in the wintertime for my dry skin pals. I don't really like the smell; kinda doesn't smell like anything, kinda smells a bit chemical, not even sure how to fully describe it.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Skin type</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">dry</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Step of the routine</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">step 4 - moisturizer</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Consistency & Texture</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">very thick</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Fragrance</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">fragrance-free</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Season</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">autumn/winter or in a colder environment, when you need a plus of hydration</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Rating</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">9/10</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              className="object-cover md:h-full 2xl:h-4/5 float-right"
              src="/assets/img/reviews/Make Prem/moisturizer.png"
              alt="Green tea"
            />
          </div>
        </div>
      </div>
    </div>
  );
}