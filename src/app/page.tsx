'use client'
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconStarFilled } from "@tabler/icons-react";
import { px } from "motion/react";
export default function Home() {
  return (
  <div className="font-[family-name:var(--font-geist-sans)] ">
<nav className="absolute top-0 left-0 right-0 z-10 p-4 backdrop-blur-lg text-white">
  <div className="grid grid-cols-7 items-center justify-between w-full">
    <Image
      src="/Red's-Auto-Spa.png"
      alt="Red's Auto Logo"
      width={100}
      height={50}  // Ensure height is automatically adjusted based on width
      quality={100}
      className=" col-span-1 flex w-auto max-w-full md:max-w-[270px] xl:max-w-[375px] object-contain"
    />
    {/* Centering the middle items */}
    <div className="col-span-5 hidden md:flex justify-center space-x-30">
      <a href="#home" className="hover:text-gray-300">Home</a>
      <a href="#about" className="hover:text-gray-300">Pricing</a>
      <a href="#contact" className="hover:text-gray-300">Contact</a>
    </div>

    <div className="col-start-7 col-span-1 flex justify-end">End</div>
  </div>
</nav>


  <div className="relative w-full h-screen grid grid-cols-8 md:grid-cols-8 grid-rows-7">
    <div className="col-start-3 col-span-4 md:col-start-2 md:col-span-2 xl:col-start-2 xl:col-span-2 row-start-2 md:row-start-2 md:row-span-2 flex justify-center items-center text-white z-2 mt-20">
      <Image
          src="/Red's-Auto-Spa-2.png"
          alt="Red's Auto Logo"
          width={370}
          height={400}
          quality={100}
          className="w-full md:w-[270px] md:h-[375px] xl:w-[375px] object-contain "
      />
    </div>

    <div className="col-start-3 col-span-4 m-3 md:col-start-5 md:col-span-3 md:mr-20 xl:mr-30 row-start-3 md:row-start-2 xl:mt-30 row-span-2 flex flex-col md:justify-start items-center md:items-end xl:text-xl text-white z-2 text-center md:text-right mt-30 md:mt-15">
      <p className="backdrop-blur-sm rounded-lg p-2 md:backdrop-blur-none md:p-0">Our expert detailing services ensure every inch of your vehicle looks and feels brand new, delivering unmatched care and lasting shine.</p>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <button className=" py-1 px-3 sm:px-7 bg-transparent border-1 border-white text-white font-medium hover:bg-white hover:text-black"> Contact Us </button>
        <button className=" py-1 px-3 sm:px-7 bg-white border-1 border-white text-black font-medium hover:bg-transparent hover:text-white"> Book Now</button>
      </div>
    </div>



    <Image
      src="/porsche-side.jpg"
      alt="Car"
      layout="fill"
      className="z-0 inset-0 w-full h-full object-cover object-center hidden md:block" // Hide on mobile
      quality={100} 
    />
    
    <Image
      src="/porsche-mobile.jpg" // Image for mobile view
      alt="Car"
      layout="fill"
      className="absolute inset-0 w-full h-full object-cover object-center md:hidden" // Hide on desktop
      sizes="100vw"
      quality={100} //<div className="absolute inset-0 bg-gradient-to-r bg-radial from-transparent to-black  to-90% z-1"></div>
      style={{ objectPosition: "20% center " }} // This will shift the image slightly down
    />
  
    <div className="absolute inset-0 bg-linear-to-b from-tranparent to-black via-transparent z-1"></div>



  </div>
  

      <h1 className="p-10 text-5xl md:text-7xl font-bold text-center text-[#EEEEF0] bg-black rounded-t-4xl">Our Clients.</h1>
      
      <Marquee pauseOnHover gradient gradientColor="black" autoFill>
        <div className="flex justify-center items-center bg-[black] p-10">
          <div className=" inset-shadow-sm inset-shadow-white rounded-[22px] max-w-sm max-h-64 min-h-64 md:max-h-80 min-h-80 p-10 sm:p-10 bg-black mx-auto relative overflow-hidden shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] absolute inset-0 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out border-1">      
              <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                Josh Colon
              </p>
              <p className="text-sm text-neutral-400 dark:text-neutral-400">
                The guys at Red’s Auto Spa killed it! They were able to come take care of my car on short notice and went above and beyond. They got my interior and exterior looking great along with taking care of the small details that other detailers have missed in the past. Definitely highly recommend their services!
              </p>
              <button className="rounded-full px-2 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <IconStarFilled style={{ width: '15px' }} />
                <IconStarFilled style={{ width: '15px' }} />
                <IconStarFilled style={{ width: '15px' }} />
                <IconStarFilled style={{ width: '15px' }} />
                <IconStarFilled style={{ width: '15px' }} />
              </button>
          </div>
        </div>

        <div className="flex justify-center items-center bg-black p-10">
          <div className=" inset-shadow-sm inset-shadow-white rounded-[22px] max-w-sm max-h-80 min-h-80 p-12 sm:p-10 bg-black mx-auto relative overflow-hidden shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] absolute inset-0 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out border-1">      
            <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                Anthony Barragan
            </p>
            <p className="text-sm text-neutral-400 dark:text-neutral-400">
              Inside & out, very well done. Sebastian came on time and got straight to work, very professional. My other family members saw the results of my car and immediately lined up their cars to get the exact same service. 10/10 recommend these guys!!
            </p>
            <button className="rounded-full px-2 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center bg-black p-10">
          <div className=" inset-shadow-sm inset-shadow-white rounded-[22px] max-w-sm max-h-80 min-h-80 p-12 sm:p-10 bg-black mx-auto relative overflow-hidden shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] absolute inset-0 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out border-1">      
            <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
              Sonsiree Moreno
            </p>
            <p className="text-sm text-neutral-400 dark:text-neutral-400">
              Spectacular job!! My car-detailing was so worth it. Sebastian was very polite and professional and you can tell he’s an expert at what he does. Highly recommend Red’s Auto Spa for your next car detailing service!!
            </p>
            <button className="rounded-full px-2 py-1 text-white flex items-center space-x-1 bg-[#19191B] mt-4 text-xs font-bold dark:bg-zinc-800">
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
              <IconStarFilled style={{ width: '15px' }} />
            </button>
          </div>
        </div>
      </Marquee>
      <div className="flex w-full h-screen justify-center bg-black mt-10">
        <iframe src="https://app.urable.com/virtual-shop/FLvSSjZiaC1E3G42Z5Eb" width="80%" className="h-3/4 rounded-lg"></iframe>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
