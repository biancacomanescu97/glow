export default function ImFrom() {
  return (
    <div className="flex-1 md:pt-20 lg:pt-28">
      <div className="block">
        <div className="grid grid-cols-2 w-full h-4/5">
          <div className="">
            <h1 className="flex justify-center align-middle text-lg text-pine-50 font-bold uppercase tracking-widest">
              Mugwort Essence
            </h1>
            <h2 className="flex justify-center align-middle text-xs text-citron-400 tracking-tighter">
              Artemisia Princeps (100% Mugwort Extract)
            </h2>
            <div className="text-sm tracking-tighter text-pine-50">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-citron text-opacity-50">
                  <li>anti-oxidant</li>
                  <li>nourishes</li>
                  <li>hydrates</li>
                  <li>soothes</li>
                  <li>calms</li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-citron text-opacity-50">
                  <li>I first bought the smaller container, and then went ahead and bought the biggest xdd</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">
                    Consistency & Texture
                  </h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">watery, but still a bit goopy; absorbs quickly</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Fragrance</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">earthy</div>
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
          <div className="overflow-hidden">
            <img
              className="object-cover md:h-full 2xl:h-4/5 float-right"
              src="/assets/img/reviews/ImFrom/mugwort.png"
              alt="Green tea"
            />
          </div>
        </div>
      </div>

      <div className="block h-1/3">
        <div className="grid grid-cols-2 h-4/5">
          <div className="overflow-hidden">
            <img
              className="object-cover h-full mx-auto"
              src="/assets/img/reviews/ImFrom/mugwort.png"
              alt="Honey"
            />
          </div>
          <div className="">
            <h1 className="flex justify-center align-middle text-base text-citron font-bold uppercase tracking-widest">
              Mugwort Mask
            </h1>
            <div className="text-sm tracking-tighter text-citron">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-citron text-opacity-50">
                  <li>hydrates</li>
                  <li>anti-aging properties</li>
                  <li>
                    delivers antioxidants to protect skin against UV damage
                  </li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-citron text-opacity-50">
                  <li>Overall, my complexion was brighter, however, I didn't really like how it felt on my face</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">
                    Consistency & Texture
                  </h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">jelly with pieces of mugwort, leaves the face a bit tacky</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Fragrance</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">earthy</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Season</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">All year round</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Rating</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">7/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}