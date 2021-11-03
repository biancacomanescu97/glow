export default function Home() {
  return (
    <div className="block">
      <div className="relative">
        <div className="relative inset-0 overflow-hidden">
          <img
            className="object-cover h-screen w-screen"
            src="/assets/img/bg2-warm.jpg"
            alt="Background image"
          />
        </div>
        <div className="absolute top-64 right-32 text-pine-200 text-right italic subpixel-antialiased tracking-wide font-thin">
          <div className="">
            <p>Life is pretty complicated at times</p>
            <p>Skincare doesn't have to be</p>
          </div>
        </div>
      </div>
      <div className="relative text-pine-200">
        <div className="relative inset-0 overflow-hidden">
          <img
            className="object-cover h-screen w-screen"
            src="/assets/img/bg2-warm.jpg"
            alt="Background image"
          />
        </div>
        <div className="absolute top-64 right-32 text-right">
          <div className="">
            <p>Life is pretty complicated at times</p>
            <p>Skincare doesn't have to be</p>
          </div>
        </div>
      </div>
    </div>
  );
}
