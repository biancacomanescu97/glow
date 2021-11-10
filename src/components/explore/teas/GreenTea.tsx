import {teas} from "../data/ingredients";

export default function GreenTea() {
  const greentea = teas[2];

  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover"
            src={greentea.imgUrl}
            alt={greentea.imgAlt}
          />
        </div>
        <div className="block py-32">
          <div className="block p-10"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {greentea.description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain green tea</h1>
              <div className="grid grid-cols-4 p-3 text-sm tracking-tight">
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Peach & Lily</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Matcha Pudding Antioxidant Cream</p>
                </div>
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Benton</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Deep Green Tea Toner</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Isntree</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Green Tea Fresh Toner</p>
                </div> 
                <div className="col-span-1 uppercase font-bold text-royal-700 text-opacity-80">
                  <p>Amorepacific</p>
                </div>
                <div className="col-span-3 pb-3 text-royal-700 text-opacity-60">
                  <p className="font-bold">Single Vintage Extract Essence</p>
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
                  <p className="font-bold">Calming Serum</p>
                  <p>also contains panthenol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}