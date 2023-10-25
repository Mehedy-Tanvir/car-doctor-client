const Banner = () => {
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full rounded-lg carousel-item">
        <img
          src="/assets/images/banner/banner1.jpg"
          className="w-full rounded-lg"
        />
        <div className="h-full w-full absolute flex flex-col gap-5 justify-center px-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <h2 className="text-6xl font-bold">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h2>
          <p className="max-w-[522px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="text-white border-white btn btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-5 transform right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full rounded-lg carousel-item">
        <img
          src="/assets/images/banner/banner2.jpg"
          className="w-full rounded-lg"
        />
        <div className="h-full w-full absolute flex flex-col gap-5 justify-center px-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <h2 className="text-6xl font-bold">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h2>
          <p className="max-w-[522px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="text-white border-white btn btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-5 transform right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full rounded-lg carousel-item">
        <img
          src="/assets/images/banner/banner3.jpg"
          className="w-full rounded-lg"
        />
        <div className="h-full w-full absolute flex flex-col gap-5 justify-center px-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <h2 className="text-6xl font-bold">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h2>
          <p className="max-w-[522px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="text-white border-white btn btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-5 transform right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full rounded-lg carousel-item">
        <img
          src="/assets/images/banner/banner4.jpg"
          className="w-full rounded-lg"
        />
        <div className="h-full w-full absolute flex flex-col gap-5 justify-center px-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <h2 className="text-6xl font-bold">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h2>
          <p className="max-w-[522px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="text-white border-white btn btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-5 transform right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
