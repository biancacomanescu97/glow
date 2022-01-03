export default function HaruHaru() {
  return (
    <div className="flex-1 md:pt-20 lg:pt-28">
      <div className="block">
        <div className="grid grid-cols-2 w-full h-4/5">
          <div className="">
            <h1 className="flex justify-center align-middle text-lg text-pine-50 font-bold uppercase tracking-widest">
              Black Bamboo Mist
            </h1>
            <div className="text-sm tracking-tighter text-pine-50">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-citron text-opacity-50">
                  <li>hydrates</li>
                  <li>soothes</li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-citron text-opacity-50">
                  <li>I usually buy mists to spray after finishing my make-up to make it look dewier. Because of how this bottle sprays, I can't really use it like this. I pair up this with Hyaluronic Acid to have extra hydration.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">
                    Consistency & Texture
                  </h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">water</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Fragrance</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">lavander</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Season</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">All year round</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Rating</h3>
                  <div className="list-disc text-sm mr-16 text-citron text-opacity-50">8/10</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              className="object-cover md:h-full 2xl:h-4/5 float-right"
              src="/assets/img/reviews/HaruHaru/bamboo.png"
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
              src="/assets/img/reviews/HaruHaru/black-rice.png"
              alt="Honey"
            />
          </div>
          <div className="">
            <h1 className="flex justify-center align-middle text-base text-propolis font-bold uppercase tracking-widest">
              Black Rice Hyaluronic Anti-wrinkle Serum
            </h1>
            <div className="text-sm tracking-tighter text-propolis">
              <div className="m-20 text-base">
                <h3 className="font-bold tracking-wide">Benefits</h3>
                <ul className="list-disc list-inside text-sm text-propolis text-opacity-50">
                  <li>hydrates</li>
                  <li>anti-aging properties</li>
                  <li>
                    delivers antioxidants to protect skin against UV damage
                  </li>
                </ul>
                <h3 className="font-bold tracking-wide pt-10">Additional comments</h3>
                <ul className="list-none list-inside text-sm text-propolis text-opacity-50">
                  <li> Okay, I'll be honest and say that the container being shaped like a grain of rice made 40% of the reason why I bought this xddd</li>
                </ul>
              </div>
              <div className="grid grid-cols-2">
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">
                    Consistency & Texture
                  </h3>
                  <div className="list-disc text-sm mr-16 text-propolis text-opacity-50">water-gel, goopy, one of my favourite consistencies</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Fragrance</h3>
                  <div className="list-disc text-sm mr-16 text-propolis text-opacity-50">lavander, floral</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Season</h3>
                  <div className="list-disc text-sm mr-16 text-propolis text-opacity-50">All year round</div>
                </div>
                <div className="mx-20 my-5 text-base">
                  <h3 className="font-bold tracking-wide">Rating</h3>
                  <div className="list-disc text-sm mr-16 text-propolis text-opacity-50">10/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}