'use client'
import Image from "next/image";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { ClientReviews } from "../components/ui/client-reviews"
import { Example } from "../components/ui/header"

import { px } from "motion/react";
import { useState } from 'react'
export default function Home() {
  return (
  <div className="font-[family-name:var(--font-geist-sans)] bg-black">
    <nav className="bg-black/80 backdrop-blur-lg text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center relative">
        <Image
          src="/Red's-Auto-Spa.png"
          alt="Red's Auto Logo"
          width={470}
          height={200}
          quality={100}
          className="w-[200px] h-auto md:max-w-[150px] xl:max-w-[180px] object-contain"
        />

        <ul className="hidden absolute left-1/2 transform -translate-x-1/2 md:flex md:space-x-20 lg:space-x-30 text-xl">
          <li>
            <a className="group text-white transition-all duration-500 ease-in-out" href="#">
              <span className="font-Rugen bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group text-white transition-all duration-500 ease-in-out" href="#">
              <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Services
              </span>
            </a>
          </li>
          <li className="relative">
            <a className="group text-white transition-all duration-500 ease-in-out" href="#">
              <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact
              </span>
            </a>

          </li>
        </ul>

        <a href="#" className="ml-auto text-xl shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-[rgba(255, 255, 255, 0.9)] px-8 py-2 bg-[#ffffff] text-black transition duration-200 ease-linear">
          Get a Quote
        </a>
      </div>
    </nav>


  <div className="relative w-full h-screen grid grid-cols-8 md:grid-cols-8 grid-rows-7">
    <div className="col-start-3 col-span-4 md:col-start-2 md:col-span-3 xl:col-start-2 xl:col-span-2 row-start-2 md:row-start-2 md:row-span-2 flex justify-center items-center text-white z-2 mt-20">
      <Image
          src="/Red's-Auto-Spa-2.png"
          alt="Red's Auto Logo"
          width={670}
          height={400}
          quality={100}
          className="w-full md:w-[270px] md:h-[375px] xl:w-[375px] object-contain "
      />
    </div>

    <div className="col-start-3 col-span-4 m-3 md:col-start-5 md:col-span-3 md:mr-20 xl:mr-30 row-start-3 md:row-start-2 xl:mt-30 row-span-2 flex flex-col md:justify-start items-center md:items-end xl:text-xl text-white z-2 text-center md:text-right mt-30 md:mt-15">
      <p className="backdrop-blur-sm rounded-lg p-2 md:backdrop-blur-none md:p-0 sm:lg lg:text-2xl 3xl:text-4xl">Our expert detailing services ensure every inch of your vehicle looks and feels brand new, delivering unmatched care and lasting shine.</p>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <button className=" py-2 px-3 sm:px-7 bg-transparent border-1 shadow-[0_4px_14px_0_rgb(255,255,255,39%)] border-white text-white font-medium hover:bg-white hover:text-black transition duration-200 ease-linear"> Contact Us </button>
        <button className="ml-auto text-xl border-1 border-white shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-transparent px-8 py-2 bg-[#ffffff] hover:text-white hover:border-1  text-black transition duration-200 ease-linear"> Book Now</button>
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
  

      <h1 className="p-10 text-5xl md:text-7xl font-bold text-center text-[#EEEEF0] bg-black rounded-t-4xl">Our Clients</h1>

      <ClientReviews></ClientReviews>
      <Example></Example>
      <h1 className="p-10 text-5xl md:text-7xl font-bold text-center text-[#EEEEF0] bg-black rounded-t-4xl">Book here </h1>

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
