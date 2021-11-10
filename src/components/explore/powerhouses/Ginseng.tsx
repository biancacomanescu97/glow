import {power} from "../data/ingredients";

export default function Ginseng() {
  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover opacity-80 p-10"
            src="/assets/img/explore/Ginseng.png"
            alt="Ginseng"
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
                  <p>I’m From</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Ginseng Serum</p>
                </div>
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Donginbi</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">1899 Single Essence</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Venn</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Age Reversing All-In-One Concentrate</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Beauty of Joseon</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Ginseng Essence Water</p>
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
                  <p className="font-bold">Repair Serum</p>
                  <p>also contains snail mucin</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}