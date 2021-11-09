import {teas} from "../data/ingredients";

export default function Mugwort() {
  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover p-10"
            src="/assets/img/explore/Mugwort.png"
            alt="Mugwort"
          />
        </div>
        <div className="block py-32">
          <div className="block p-10"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {teas[1].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain mugwort</h1>
              <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>I’m From</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Mugwort Mask</p>
                  <p className="font-bold">Mugwort Cream</p>
                </div>
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Holika Holika</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Pure Essence Mugwort Foam Cleanser</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Round Lab</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Mugwort Calming Cream</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Isntree</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Spot Saver Mugwort Ampoule</p>
                </div> 
              </div>
            </div>
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
              <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>I’m From</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Mugwort Essence</p>
                  <p>contains only one ingredient: artemisia princeps extract</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}