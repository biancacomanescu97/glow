import {exfoliants} from "../data/ingredients";

export default function AHA() {
  const aha = exfoliants[0];

  return (
    <main className="">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover"
            src={aha.imgUrl}
            alt={aha.imgAlt}
          />
        </div>
        <div className="block p-32">
          <div className="block py-32"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              {aha.description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">TYPES OF AHA</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>Glycolic acid</li>
              <li>Lactic acid</li>
              <li>Mandelic acid</li>
              <li>Malic acid</li>
              <li>Citric acid</li>
              <li>Tartaric acid</li>
            </ul>
          </div>
        </div>

        {/*GLYCOLIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">GLYCOLIC ACID</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from sugarcanes</li>
            <li>the smallest molecular size of all the AHAs, which makes it easier to penetrate deeper into the skin</li>
            <li>works by smoothing out the skin’s surface layer</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-base uppercase font-bold tracking-tighter">Products that contain glycolic acid</h1>
          <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Krave Beauty</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Kale-Lalu-y AHA Glycolic Acid Toner (5.2%)</p>
              <p>great for begginers</p>
              <p>can be used 2-3 times per week</p>
            </div>
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>The Ordinary</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Glycolic Acid 7% Toning Solution</p>
            </div>
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Peter Thomas Roth</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Glycolic 8% Solution Toner</p>
            </div>
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Bliss</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">That’s Incredi-Peel Glycolic Resurfacing Pads</p>
            </div>
          </div>
          
          <h1 className="pt-10 text-royal-700 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
          <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Biossance</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Squalane and Glycolic Renewal Mask</p>
              <p>doesn't dry out the skin because of the squalane</p>
            </div>
          </div>
        </div>

        {/*LACTIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">LACTIC ACID</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from sour milk</li>
            <li>has a larger molecular size than glycolic acid</li>
            <li>can also retain moisture into the skin</li>
            <li>humectant: it has antimicrobial properties</li>
            <li>can fade hyperpigmentation</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-base uppercase font-bold tracking-tighter">Products that contain lactic acid</h1>
          <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>The Ordinary</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Lactic Acid 10% + HA</p>
            </div>
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Ren</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Ready Steady Glow Daily AHA Tonic</p>
            </div>
          </div>
          <h1 className="pt-10 text-royal-700 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
          <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Cosrx</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Refresh AHA BHA Vitamin C Daily Toner</p>
            </div>
          </div>
        </div>

        {/*MADELIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">MADELIC ACID</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from bitter almonds</li>
            <li>rich in antioxidants and has antibacterial properties</li>
            <li>for oily and acne-prone skin types</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-base uppercase font-bold tracking-tighter">Products that contain mandelic acid</h1>
          <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Dr. Wu</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Intensive Renewal Serum with Mandelic Acid 18%</p>
            </div>
            <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
              <p>Naturium</p>
            </div>
            <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
              <p className="font-bold">Mandelic Topical Acid 12%</p>
            </div>
          </div>
        </div>

         {/*MALIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">MALIC ACID</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>helps gently exfoliate and brighten the skin</li>
            <li>malic acid is often paired up with other stronger exfoliants</li>
            <li>can be found in many fruits and veggies, but apples are what malic acid is commonly associated with; 
              that's why you may find <i>apple cider vinegar</i> on the ingredients' list of your products
            </li>
          </ul>
        </div>
        <div></div>

         {/*CITRIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">CITRIC ACID</h1>
          <ul role="list" className="list-none list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>comes from citrus fruits</li>
            <li>commonly used alongside other exfoliants to brighten up the complexion</li>
            <li>acts as a preservative in your product: how you can squeeze a lemon onto an apple to keep it from oxidizing</li>
            <li>also works to regulate pH levels</li>
          </ul>
        </div>
        <div></div>

         {/*TARTARIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">TARTARIC ACID</h1>
          <ul role="list" className="list-none list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from grapes</li>
            <li>rich in antioxidants to protect the skin</li>
            <li>based on the current research, it can help moisturize the skin and promote healing (it isn't as widely researched as glycolic and lactic acids)</li>
          </ul>
        </div>
        <div></div>
      </div>
    </main>
  );
}