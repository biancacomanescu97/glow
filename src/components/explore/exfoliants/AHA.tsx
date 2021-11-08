import {exfoliants} from "../data/ingredients";

export default function AHA() {
  return (
    <main className="">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover p-10"
            src="/assets/img/explore/AHA.png"
            alt="Alpha Hydroxy Acid (AHA)"
          />
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">GLYCOLIC ACID</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>derived from sugarcanes</li>
              <li>the smallest molecular size of all the AHAs, which makes it easier to penetrate deeper into the skin</li>
              <li>works by smoothing out the skin’s surface layer</li>
            </ul>
          </div>
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">LACTIC ACID</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>derived from sour milk</li>
              <li>has a larger molecular size than glycolic acid</li>
              <li>can also retain moisture into the skin</li>
              <li>humectant: it has antimicrobial properties</li>
              <li>can fade hyperpigmentation</li>
            </ul>
          </div>
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">MALIC ACID</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>helps gently exfoliate and brighten the skin</li>
              <li>malic acid is often paired up with other stronger exfoliants</li>
              <li>can be found in many fruits and veggies, but apples are what malic acid is commonly associated with</li>
            </ul>
          </div>
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">MADELIC ACID</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>derived from bitter almonds</li>
              <li>rich in antioxidants and has antibacterial properties</li>
              <li>for oily and acne-prone skin types</li>
            </ul>
          </div>
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">CITRIC ACID</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>comes from citrus fruits</li>
              <li>commonly used alongside other exfoliants to brighten up the complexion</li>
              <li>acts as a preservative in your product: how you can squeeze a lemon onto an apple to keep it from oxidizing</li>
              <li>also works to regulate pH levels</li>
            </ul>
          </div>
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">TARTARIC ACID</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>derived from grapes</li>
              <li>rich in antioxidants to protect the skin</li>
              <li>based on the current research, it can help moisturize the skin and promote healing (it isn't as widely researched as glycolic and lactic acids)</li>
            </ul>
          </div>
        </div>

        <div className="block p-32">
          <div className="block p-16"> 
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              {exfoliants[0].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block p-16">
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">TYPES OF AHA</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>Citric acid</li>
              <li>Glycolic acid</li>
              <li>Lactic acid</li>
              <li>Malic acid</li>
              <li>Mandelic acid</li>
              <li>Tartaric acid</li>
            </ul>
          </div>
          <div className="block p-16">
            <h1 className="text-royal-700 text-lg font-bold tracking-wide">PRODUCTS</h1>
            <ul role="list" className="list-disc list-inside space-y-2 text-sm text-royal-700 text-opacity-80 tracking-tight">
              <li>Citric acid</li>
              <li>Glycolic acid</li>
              <li>Lactic acid</li>
              <li>Malic acid</li>
              <li>Mandelic acid</li>
              <li>Tartaric acid</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}