import { scrollToSection } from "../../../lib/utils";
export const Hero = () => {
    return (
      <div className="relative w-full h-screen grid grid-cols-8 md:grid-cols-8 grid-rows-7" id="home-section">
        <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-3 xl:col-start-2 xl:col-span-2 row-start-2 md:row-start-2 md:row-span-2 flex justify-center items-center text-white z-2 mt-0">
          <img
            src="/Red's-Auto-Spa-2.png"
            alt="Red's Auto Logo"
            className="w-full max-w-[300px] md:max-w-none md:w-[270px] md:h-[375px] xl:w-[375px] object-contain"
          />
        </div>
  
        <div className="col-start-2 col-span-6 m-3 md:col-start-5 md:col-span-3 lg:col-start-5 lg:col-span-3 md:mr-20 xl:mr-30 row-start-3 md:row-start-2 xl:mt-10 row-span-2 flex flex-col md:justify-start items-center md:items-end xl:text-xl text-white z-2 text-center md:text-right mt-15 md:mt-15">
          <p className="p-2 md:backdrop-blur-none md:p-0 text-lg lg:text-2xl 3xl:text-4xl font-medium md:font-light">
            Our expert detailing services ensure every inch of your vehicle looks and feels brand new, delivering unmatched care and lasting shine.
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-10">
            <button
              onClick={() => scrollToSection("contact-section")}
              className="py-2 px-4 md:px-4 lg:px-7 bg-transparent border border-white shadow-[0_4px_14px_0_rgb(255,255,255,39%)] text-white font-medium hover:bg-white hover:text-black transition duration-200 ease-linear"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection("service-section")}
              className="ml-auto text-md border border-white shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-transparent px-4 md:px-4 lg:px-7 py-2 bg-white hover:text-white hover:border text-black transition duration-200 ease-linear"
            >
              Book Now
            </button>
          </div>
        </div>
  
        {/* Desktop background image */}
        <img
          src="/porsche-side.jpg"
          alt="Car"
          className="z-0 absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        />
  
        {/* Mobile background image */}
        <img
          src="/porsche-front.jpg"
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
          style={{ objectPosition: "20% center" }}
        />
  
        {/* Overlay gradient */}
        <div className="absolute inset-0  z-1 bg-black/50 md:bg-black/20"></div>
      </div>
    );
  };
  