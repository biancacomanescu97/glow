import {exfoliants} from "../data/ingredients";

export default function AHA() {
  return (
    <main className="">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover opacity-80 p-10"
            src="/assets/img/explore/AHA.png"
            alt="Alpha Hydroxy Acid (AHA)"
          />
        </div>
        <div className="block p-32">
          <div className="block py-32"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              {exfoliants[0].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">TYPES OF AHA</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
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
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from sugarcanes</li>
            <li>the smallest molecular size of all the AHAs, which makes it easier to penetrate deeper into the skin</li>
            <li>works by smoothing out the skin’s surface layer</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-base uppercase font-bold tracking-tighter">Products that contain glycolic acid</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li><b>KRAVE BEAUTY</b> Kale-Lalu-y AHA Glycolic Acid Toner (5.2%) - good starter; 2-3 times per week</li>
            <li><b>THE ORDINARY</b> Glycolic Acid 7% Toning Solution</li>
            <li><b>PETER THOMAS ROTH</b> 8% Glycolic Solution Toner</li>
            <li><b>BLISS</b> That’s Incredi-Peel Glycolic Resurfacing Pads </li>
          </ul>
          <h1 className="pt-10 text-royal-700 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li><b>BIOSSANCE</b> Squalane and Glycolic Renewal Mask</li>
          </ul>
        </div>

        {/*LACTIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">LACTIC ACID</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from sour milk</li>
            <li>has a larger molecular size than glycolic acid</li>
            <li>can also retain moisture into the skin</li>
            <li>humectant: it has antimicrobial properties</li>
            <li>can fade hyperpigmentation</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-base uppercase font-bold tracking-tighter">Products that contain lactic acid</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li><b>THE ORDINARY</b> Lactic Acid 10% + HA</li>
            <li><b>REN</b> Ready Steady Glow Daily AHA Tonic</li>
          </ul>
          <h1 className="pt-10 text-royal-700 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li><b>COSRX</b> Refresh AHA BHA Vitamin C Daily Toner</li>
          </ul>
        </div>

        {/*MADELIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">MADELIC ACID</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from bitter almonds</li>
            <li>rich in antioxidants and has antibacterial properties</li>
            <li>for oily and acne-prone skin types</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-base uppercase font-bold tracking-tighter">Products that contain mandelic acid</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li><b>DR. WU</b> Intensive Renewal Serum with Mandelic Acid 18%</li>
            <li><b>NATURIUM</b> Mandelic Topical Acid 12%</li>
          </ul>
        </div>

         {/*MALIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold tracking-wide">MALIC ACID</h1>
          <ul role="list" className="list-disc list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
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
          <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
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
          <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
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