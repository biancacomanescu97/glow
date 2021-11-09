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
              {power[1].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain ginseng</h1>
              <div className="flex text-sm text-royal-700 text-opacity-80 tracking-tight">
                <div className="flex-initial pl-3">
                  <p className="uppercase flex-initial font-bold">I’m From</p>
                  <p className="uppercase flex-initial font-bold">Donginbi</p>
                  <p className="uppercase flex-initial font-bold">Venn</p>
                  <p className="uppercase flex-initial font-bold">Beauty of Joseon</p>
                </div>
                <div className="flex-initial text-royal-700 text-opacity-60 pl-5">
                  <p className="font-bold">Ginseng Serum</p>
                  <p className="font-bold">1899 Single Essence</p>
                  <p className="font-bold">Age Reversing All-In-One Concentrate</p>
                  <p className="font-bold">Ginseng Essence Water</p>
                </div>
              </div>
            </div>
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Personal recommendations</h1>
              <div className="flex text-sm text-royal-700 text-opacity-80 tracking-tight">
                <div className="flex-initial pl-3">
                  <p className="uppercase flex-initial font-bold">Beauty of Joseon</p>
                </div>
                <div className="flex-initial text-royal-700 text-opacity-60 pl-5">
                  <p className="font-bold">Repair Serum</p>
                  <ul role="list" className="flex-initial list-none list-inside space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                    <li>also contains snail mucin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}