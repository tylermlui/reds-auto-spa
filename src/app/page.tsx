'use client'
import { AddOns } from "../components/ui/addons";
import { Contact } from "../components/ui/contact";
import { Hero } from "../components/ui/hero";
import { Navbar } from "../components/ui/navbar";
import { Reviews } from "../components/ui/reviews";
import { ServiceCard } from "../components/ui/services";
import { Stats } from "../components/ui/stats";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black">
      <Navbar/>
      <Hero/>
      <ServiceCard 
        header="OUR SERVICES."
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
        sectionid="service-section"
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
      <Reviews/>
      <Stats/>
      <Contact/>

    </div>
  );
}
