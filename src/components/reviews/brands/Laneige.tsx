export default function Laneige() {
  return (
    <div className="flex-1 md:pt-20 lg:pt-28">
      <div className="block">
        <div className="grid grid-cols-2 w-full h-4/5">
          <div className="">
            <h1 className="flex justify-center align-middle text-lg text-royal-700 font-bold uppercase tracking-widest">
              Cream Skin Refiner
            </h1>
            <div className="text-sm tracking-tighter text-royal-700">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-royal-600 text-opacity-50">
                  <li>intensely hydrates the skin</li>
                  <li>soothes</li>
                  <li>calms</li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-royal-600 text-opacity-50">
                  <li>Pretty sure this product made my face go from really dry to the oiler side lol, which I'm very thankful for. 
                    My skin has never been parched since I started using this. You can use this when you don't feel like applying 
                    a lot of products</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Skin type</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">dry; and I cannot stress this enough</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Step of the routine</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">step 2 - toner</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Consistency & Texture</h3>
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">water</div>
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
                  <div className="list-disc text-sm mr-16 text-royal-600 text-opacity-50">10/10</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              className="object-cover md:h-full 2xl:h-4/5 float-right"
              src="/assets/img/reviews/Laneige/milk.png"
              alt="Green tea"
            />
          </div>
        </div>
      </div>

      <div className="block h-1/3 pt-32">
        <div className="grid grid-cols-2 h-4/5">
          <div className="overflow-hidden">
            <img
              className="object-cover h-full mx-auto"
              src="/assets/img/reviews/Laneige/centella.png"
              alt="Honey"
            />
          </div>
          <div className="">
            <h1 className="flex justify-center align-middle text-base text-pine-200 font-bold uppercase tracking-widest">
              Cica Sleeping Mask
            </h1>
            <div className="text-sm tracking-tighter text-pine-200">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-citron text-opacity-50">
                  <li>soothes</li>
                  <li>calms irritated skin</li>
                  <li>strengthens moisture barrier</li>
                  <li>retains skin hydration as you sleep</li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-citron text-opacity-50">
                  <li>In the summertime, this is a bit too heavy if you're using moisturizer as well. In the winter tho... chef's kiss.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Skin type</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">all</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Step of the routine</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">last - sleeping mask</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Consistency & Texture</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">water-gel, goopy, one of my favourite consistencies</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Fragrance</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">fragrance-free</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Season</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">All year round</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Rating</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">10/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}