export default function Home() {
  return (
    <main className="block z-10 overflow-x-hidden">
      <div className="relative inset-0 overflow-hidden h-screen w-screen">
        <img
          className="object-cover h-screen w-screen"
          src="/assets/img/home/bg.png"
          alt="Background image"
        />
      </div>
      <div className="animate-pulse-bg-once absolute top-64 right-32 text-pine-200 text-right italic tracking-wide font-thin">
        <div className="">Life is pretty complicated at times</div>
        <div className="animate-pulse-bg-once">Skincare doesn't have to be</div>
      </div>
    </main>
  );
}
