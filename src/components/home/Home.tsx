export default function Home() {
  return (
    <main className="block z-10">
      <div className="relative">
        <div className="relative inset-0 overflow-hidden">
          <img
            className="object-cover h-screen w-screen"
            src="/assets/img/bg-floralwhite-100.jpg"
            alt="Background image"
          />
        </div>
        <div className="animate-pulse-bg-once absolute top-64 right-32 text-pine-200 text-right italic tracking-wide font-thin">
          <div className="">Life is pretty complicated at times</div>
          <div className="animate-pulse-bg-once">
            Skincare doesn't have to be
          </div>
        </div>
      </div>
    </main>
  );
}
