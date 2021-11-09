import {exfoliants} from "../data/ingredients";

export default function BHA() {
  return (
    <main className="">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover opacity-80 p-10"
            src="/assets/img/explore/BHA.png"
            alt="Beta Hydroxy Acid (BHA)"
          />
        </div>
        <div className="block p-28">
          <div className="block py-32"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {exfoliants[1].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">TYPES OF BHA</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              <li>Salicylic acid</li>
              <li>Willowbark (Salix Alba) / Wintergreen Leaves / Sweet Birch Bark Extracts</li>
              <li>Betaine salicylate</li>
              <li>Lipohydroxy acid</li>
            </ul>
          </div>
        </div>

        {/*SALICYLIC ACID */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">SALICYLIC ACID</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-70 tracking-tight">
            <li>decreases the secretion of sebum in acne-prone skin</li>
            <li>helps with open/closed comedones (pores or hair follicles that have gotten blocked with bacteria, oil, and dead skin cells), Post-inflammatory erythema (PIE), and hyperpigmentation</li>
          </ul>
        </div>
        <div className="block p-16">
          <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain glycolic acid</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Farmacy</b>
                <ul role="list" className="flex-initial list-none list-inside pl-7 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">Deep Sweep 2% BHA BHA Pore Cleaning Toner</li>
                  <li>most gentle from them all</li>
                  <li>contains papaya extract</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Naturium</b>
                <ul role="list" className="flex-initial list-none list-inside pl-4 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">BHA Liquid Exfoliant 2%</li>
                  <li>encapsulated SA (less chances of irritation in the skin by slowly releasing active ingredients)</li>
                  <li>fruit acid: caviar</li>
                  <li>contains  citrus, which helps with brightening</li>
                  <li>pore cleansing by soaking up a cotton pad onto the nose for a little DIY mask</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Beauty Pie</b>
                <ul role="list" className="flex-initial list-none list-inside pl-3 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">Oxygen Instant Facial Refueling Mask</li>
                  <li>if used as a mask; wash it off and then mosturize</li>
                  <li>if overnight; put after mosturizer</li>
                </ul>
              </div>
            </li>
          </ul>
          <h1 className="pt-10 text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Paula’s Choice</b>
                <ul role="list" className="flex-initial list-none list-inside pl-4 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">BHA Liquid Exfoliant 2%</li>
                  <li>I keep buying it since I first discovered it</li>
                  <li>contains green tea</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/*Willowbark */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-opacity-90 text-lg uppercase font-bold tracking-wide">Willowbark (Salix Alba) / Wintergreen Leaves / <br />Sweet Birch Bark Extracts</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>contain salicylates – also known as the salt or esters of salicylic acid</li>
            <li>gentler forms of SA that can offer exfoliation properties without the irritation</li>
          </ul>
        </div>
        <div></div>

        {/*Betaine salicylate */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold uppercase tracking-wide">Betaine salicylate</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>derived from sugar beets</li>
          </ul>
        </div>
        <div></div>

         {/*Lipohydroxy acid */}
        <div className="block p-16"> 
          <h1 className="text-royal-700 text-lg font-bold uppercase tracking-wide">Lipohydroxy acid</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>has a larger molecular size which means that it's gentle for sensitive skin types</li>
          </ul>
        </div>
        <div></div>
      </div>
    </main>
  );
}