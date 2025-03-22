import Image from "next/image";

export const ServiceCard = () => {
  return (
    <div className="relative rounded-t-4xl w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/720s.jpg"
        alt="Car"
        layout="fill"
        className="z-0 inset-0 w-full h-full object-cover object-center"
        quality={100}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/60 p-10 z-10">
        <p className="font-bold text-7xl">Our Services</p>
        <div className="grid grid-cols-2 gap-10 text-2xl ">
          <div className="space-y-4">
            <div className="font-black text-5xl">$90-$140</div>
            <div className="font-black text-4xl">RED'S REFRESH DETAIL</div>
            <div className="font-semibold text-xl">
              Red’s Refresh Detail is the perfect solution for a quick, yet high-quality clean. We’ll wash, dry, and shine your vehicle inside and out, leaving it looking fresh in no time. Ideal for busy schedules, our refresh service ensures your car gets the care it deserves without the wait.
              <br />
              *Additional Fees for: Pet Hair, Sand, Heavy Staining
            </div>
          </div>

          <ul className="text-xl space-y-3 font-semibold">
            <li>- Exterior Spray Foamed</li>
            <li>- Exterior Hand Wash and Rinse</li>
            <li>- Tire and Wheel Cleaning</li>
            <li>- Touchless Blow Dry (If Applicable) / Towel Dry</li>
            <li>- All Glass Cleaned</li>
            <li>- Interior Compressed Air Blowout</li>
            <li>- Interior Vacuum (Seats, Floor Mats, High Visibility Spots)</li>
            <li>- UV Protectant Dressing/Conditioner Applied to Plastics and Leather</li>
            <li>- Tire Shined</li>
            <li>- Spray Sealant on Paint for 1-3 Months of Protection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
