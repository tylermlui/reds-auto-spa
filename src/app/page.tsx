'use client'
import Image from "next/image";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { ClientReviews } from "../components/ui/client-reviews"
import { ServiceCard } from "../components/ui/services"
import { AddOns } from "../components/ui/add-ons"
import { Contact } from "../components/ui/contact"

import { Example } from "../components/ui/header"
import { NavBar } from "../components/ui/nav-bar"
import { px } from "motion/react";
import { useState } from 'react'

export default function Home() {
  return (
  <div className="font-[family-name:var(--font-geist-sans)] bg-black">
  <NavBar></NavBar>
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
      <ServiceCard 
        header="OUR SERVICES"
        title="RED'S REFRESH DETAIL"
        price="$90-$140"
        description="Red’s Refresh Detail is the perfect solution for a quick, yet high-quality clean. We’ll wash, dry, and shine your vehicle inside and out, leaving it looking fresh in no time. Ideal for busy schedules, our refresh service ensures your car gets the care it deserves without the wait."
        background="/Reds-Refresh-Detail.jpg"
        additionalFees="*Additional Fees for: Pet Hair, Sand, Heavy Staining"
        features={[
          "Exterior Spray Foamed",
          "Exterior Hand Wash and Rinse",
          "Tire and Wheel Cleaning",
          "Touchless Blow Dry If Applicable / Towel Dry",
          "All Glass Cleaned",
          "Interior Compressed Air Blowout",
          "Interior Vacuum (Seats, Floor-mats, High visibility spots)",
          "UV Protectant Dressing / Conditioner applied to plastics and leather",
          "Tire Shined",
          "Spray Sealant on Paint for 1-3 months of Protection",
        ]}
      />
      <ServiceCard 
        title="RED'S RESTORE AND SHINE"
        price="$190-$260"
        description="Red’s Restore & Shine is designed to bring your vehicle back to its best with a thorough exterior wash and rinse, followed by a professional Clay Bar Treatment to remove contaminants. We finish off with a Premium Polish and Sealant, giving your car a smooth, glossy finish and long-lasting protection. Perfect for restoring that like-new shine and keeping your vehicle looking its best."
        background="/Reds-Restore-Shine.jpg"
        additionalFees="*Additional Fees for: Pet Hair, Sand, Heavy Staining"
        features = {[
          "All services from Red's Refresh Detail",
          "Exterior Iron Decontamination",
          "Clay Bar / Towel Treatment to Entire Exterior",
          "Professional Machine Polish",
          "Paint Enhancement Service",
          "Wheel Sealant to Repel Brake Dust",
          "6-12 Month Sealant Applied to Exterior for Maintained Protection"
        ]}
      />
      <ServiceCard 
        title="RED'S MAINTENANCE"
        price="$75-$105"
        description="Red’s Maintenance Package is the ideal way to keep your vehicle looking great and performing at its best with regular detailing services. Whether it’s a Monthly,Bi-Weekly, Weekly we’ll handle routine exterior washes and interior details. Ideal for customers who want to keep their car in top condition without the hassle of frequent bookings"
        background="/Reds-Maintenance.jpg"
        additionalFees="*Additional Fees for: Pet Hair, Sand, Heavy Staining"
        additionalInfo="*Must Book one of the 3 Scheduled Packages to receive this Discounted Maintenance Price"
        features = {[
          "Maintaining any Polish/Wax Protectants",
          "Exterior Spray Foamed",
          "Exterior Hand Wash and Rinse",
          "Tire and Wheel Cleaning",
          "Wheel Sealants Re-Applied",
          "Touchless Blow Dry (if applicable)",
          "All Glass Cleaned/Sealed",
          "Interior Compressed Air Blowout",
          "Interior Vacuum (seats, floor mats, high-visibility spots)",
          "UV Protectant Dressing/Conditioner applied to plastics and leather",
          "3-Month Tire Shine"
        ]}
      />
      <ServiceCard 
        title="RED'S INTERIOR REVIVAL"
        price="$160-$210"
        description="Red’s Interior Revival is the ultimate reboot for your vehicle’s interior, restoring it to a like-new condition. We deep clean every surface, from carpets and upholstery to your dashboard and door panels, using premium products that lift stains and odors. Whether it’s regular maintenance or a much-needed overhaul, this package ensures your car’s interior feels fresh, clean, and comfortable."
        background="Reds-Interior-Revival.jpg"
        additionalFees="*Additional Fees for: Pet Hair, Sand, Heavy Staining"
        additionalInfo="*Must Book one of the 3 Scheduled Packages to receive this Discounted Maintenance Price"
        features = {[
          "Maintaining any Polish/Wax Protectants",
          "Exterior Spray Foamed",
          "Exterior Hand Wash and Rinse",
          "Tire and Wheel Cleaning",
          "Wheel Sealants Re-Applied",
          "Touchless Blow Dry (if applicable)",
          "All Glass Cleaned/Sealed",
          "Interior Compressed Air Blowout",
          "Interior Vacuum (seats, floor mats, high-visibility spots)",
          "UV Protectant Dressing/Conditioner applied to plastics and leather",
          "3-Month Tire Shine"
        ]}
      />
      <AddOns
      background="/Add-Ons.jpg"
      />

  
      <h1 className="pb-20 pt-30 text-5xl md:text-7xl font-bold text-center text-[#EEEEF0] bg-black rounded-t-4xl">Our Clients</h1>
      <ClientReviews></ClientReviews>
      <Example></Example>
      <Contact/>

    </div>
  );
}
