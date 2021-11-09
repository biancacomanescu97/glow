import {teas} from "../data/ingredients";

export default function GreenTea() {
  return (
    <main className="pb-10">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
        <div className="px-16 py-10">
          <img
            className="object-cover p-10"
            src="/assets/img/explore/GreenTea.png"
            alt="Green Tea"
          />
        </div>
        <div className="block py-32">
          <div className="block p-10"> 
            <h1 className="text-royal-700 text-opacity-90 text-lg font-bold tracking-wide">INTRODUCTION</h1>
            <ul role="list" className="list-none list-inside pl-3 space-y-2 text-sm text-royal-700 text-opacity-70 tracking-tight">
              {teas[2].description.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="block">
            <div className="block p-10">
              <h1 className="text-royal-700 text-opacity-90 text-base uppercase font-bold tracking-tighter">Products that contain green tea</h1>
              <div className="flex text-sm text-royal-700 text-opacity-80 tracking-tight">
                <div className="flex-initial pl-3">
                  <p className="uppercase flex-initial font-bold">Peach & Lily</p>
                  <p className="uppercase flex-initial font-bold">Benton</p>
                  <p className="uppercase flex-initial font-bold">Isntree</p>
                  <p className="uppercase flex-initial font-bold">Amorepacific</p>
                </div>
                <div className="flex-initial text-royal-700 text-opacity-60 pl-5">
                  <p className="font-bold">Matcha Pudding Antioxidant Cream</p>
                  <p className="font-bold">Deep Green Tea Toner</p>
                  <p className="font-bold">Isntree</p>
                  <p className="font-bold">Single Vintage Extract Essence </p>
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
                  <p className="font-bold">Calming Serum</p>
                  <ul role="list" className="flex-initial list-none list-inside space-y-1 text-sm text-royal-700 text-opacity-60 tracking-tight">
                    <li>also contains panthenol</li>
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