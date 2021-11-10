import {exfoliants} from "../data/ingredients";

export default function PHA() {
  const pha = exfoliants[2];

  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover"
            src={pha.imgUrl}
            alt={pha.imgAlt}
          />
        </div>
        <div className="block py-32">
          <div className="block p-10"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {pha.description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block p-10">
            <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain PHA</h1>
            <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
              <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                <p>Some By Mi</p>
              </div>
              <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                <p className="font-bold">AHA BHA PHA 30 Days Miracle Toner</p>
                <p>very soothing</p>
                <p>shake before use</p>
              </div>
              <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                <p>Naturium</p>
              </div>
              <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                <p className="font-bold">PHA Topical Acid 12%</p>
                <p>also contains mandelic acid</p>
              </div>
              <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                <p>Purito</p>
              </div>
              <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                <p className="font-bold">ABP Triple Synergy Liquid</p>
                <p>long term progress, not an instant effect</p>
              </div>
              <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                <p>Farmacy</p>
              </div>
              <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                <p className="font-bold">Honeymoon Glow AHA Resurfacing Night Serum</p>
              </div>
              <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                <p>Peach & Lily</p>
              </div>
              <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                <p className="font-bold">Super Reboot Resurfacing Mask</p>
              </div>
              <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                <p>Glow Recipe</p>
              </div>
              <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                <p className="font-bold">Watermelon Glow PHA + BHA Pore Tight Toner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}