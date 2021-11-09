import {exfoliants} from "../data/ingredients";

export default function PHA() {
  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover opacity-80 p-10"
            src="/assets/img/explore/PHA.png"
            alt="Beta Hydroxy Acid (PHA)"
          />
        </div>
        <div className="block py-32">
          <div className="block p-10"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {exfoliants[2].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block p-10">
          <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain glycolic acid</h1>
          <ul role="list" className="list-none list-inside p-3 space-y-1 text-sm text-royal-700 text-opacity-80 tracking-tight">
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Some By Mi</b>
                <ul role="list" className="flex-initial list-none list-inside pl-6 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">AHA BHA PHA 30 Days Miracle Toner</li>
                  <li>very soothing</li>
                  <li>shake before use</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Naturium</b>
                <ul role="list" className="flex-initial list-none list-inside pl-9 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">PHA Topical Acid 12%</li>
                  <li>also contains mandelic acid</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Purito</b>
                <ul role="list" className="flex-initial list-none list-inside pl-16 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">ABP Triple Synergy Liquid</li>
                  <li>long term progress, not an instant effect</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Farmacy</b>
                <ul role="list" className="flex-initial list-none list-inside pl-12 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">Honeymoon Glow AHA Resurfacing Night Serum</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Peach & Lily</b>
                <ul role="list" className="flex-initial list-none list-inside pl-4 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">Super Reboot Resurfacing Mask</li>
                </ul>
              </div>
            </li>
            
            <li>
              <div className="flex">
                <b className="uppercase flex-initial">Glow Recipe</b>
                <ul role="list" className="flex-initial list-none list-inside pl-3 space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                  <li className="font-bold">Watermelon Glow PHA + BHA Pore Tight Toner</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </main>
  );
}