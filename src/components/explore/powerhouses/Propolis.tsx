import {power} from "../data/ingredients";

export default function Propolis() {
  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover opacity-80 p-10"
            src="/assets/img/explore/Propolis.png"
            alt="Propolis"
          />
        </div>
        <div className="block py-32">
          <div className="block p-10"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {power[2].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain ginseng</h1>
              <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Farmacy</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Honey Halo Ultra-Hydrating Ceramide Moisturizer</p>
                  <p className="font-bold">Honeymoon Glow Serum</p>
                </div>
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Cosrx</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Full Fit Propolis Light Ampoule</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Dr. Ceuracle</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Royal Vita Propolis 33 Ampoule</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Iunik</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Propolis Vitamin Synergy Serum</p>
                </div> 
              </div>
            </div>
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
              <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Beauty of Joseon</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Glow Serum</p>
                  <p>also contains niacinamide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}