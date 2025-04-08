import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { ScrollFadeIn } from './scrollfade';

type ServiceCardProps = {
  header?: string;
  title: string;
  price: string;
  description: string;
  additionalFees: string;
  additionalInfo?: string;
  features: string[];
  background?: string;
  sectionid?: string;
};

export const ServiceCard = ({ header, title, price, description, additionalFees, additionalInfo, features, background, sectionid }: ServiceCardProps) => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: background ? `url(${background})` : 'none' }}id={sectionid}>
        <div className='bg-black/70 py-24 sm:py-32'>
            <div className="mx-auto max-w-7xl bg-black/ px-6 lg:px-8 p-6 rounded-lg ">
                {/* Centered Title */}
                {header && (
                <div className="text-center">
                    <ScrollFadeIn direction='up'>
                    <h1 className="mt-2 text-6xl font-black tracking-tight text-white-900 sm:text-7xl" >
                    {header}
                    </h1>
                    </ScrollFadeIn>
                </div>
                )}

                <div className={`mx-auto grid max-w-2xl grid-cols-1 ${header ? 'pt-24' : 'pt-0'} gap-x-8 gap-y-2 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2`}>
                    <div className="lg:pr-8">
                        <ScrollFadeIn direction='left'>
                        <div className="lg:max-w-lg space-y-8">
                            <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                                {price}
                            </p>
                            <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-4xl ">
                                {title}
                            </p>
                            <p className="mt-6 text-lg text-gray-200 pl-3 border-l-2 border-slate-300">
                                {description}
                            </p>
                            <p className="mt-6 text-lg font-semibold text-white">
                                {additionalFees}
                            </p>
                            <p className="mt-6 text-lg font-semibold text-white ">
                                {additionalInfo}
                            </p>
                            <button className="hidden lg:block text-xl border-1 border-white shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-transparent px-8 py-3 bg-[#ffffff] hover:text-white hover:border-1  text-black transition duration-200 ease-linear"> 
                                Book Now
                            </button>
                        </div>
                        </ScrollFadeIn>
                    </div>

                    <div className="lg:pr-8 flex items-center">
                        <ScrollFadeIn direction='right'>
                        <div className="lg:max-w-lg">
                            <ul className="max-w-xl space-y-4 text-base text-gray-300 lg:max-w-none list-none">
                                {features.map((text) => (
                                <li key={text} className="relative flex items-center gap-3">
                                    <CheckCircleIcon aria-hidden="true" className="w-6 h-6 text-white shrink-0" />
                                    {text}
                                </li>
                                ))}
                            </ul>
                            <div className="pt-10 flex justify-center">
                                <button className="lg:hidden text-xl border border-gray-900 shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-transparent px-8 py-2 bg-[#ffffff] hover:text-white text-gray-900 transition duration-200 ease-linear"> 
                                Book Now
                                </button>
                            </div>
                        </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </div>    
        </div>
        
    </div>
  )
}

// Example usage:
// <ExampleCard 
//   header="OUR SERVICES"
//   title="RED'S REFRESH DETAIL"
//   price="$90-$140"
//   description="Red’s Refresh Detail is the perfect solution for a quick, yet high-quality clean. We’ll wash, dry, and shine your vehicle inside and out, leaving it looking fresh in no time. Ideal for busy schedules, our refresh service ensures your car gets the care it deserves without the wait."
//   additionalFees="*Additional Fees for: Pet Hair, Sand, Heavy Staining"
//   background="/path-to-image.jpg"
//   features=[
//     "Exterior Spray Foamed",
//     "Exterior Hand Wash and Rinse",
//     "Tire and Wheel Cleaning",
//     "Touchless Blow Dry If Applicable / Towel Dry",
//     "All Glass Cleaned",
//     "Interior Compressed Air Blowout",
//     "Interior Vacuum (Seats, Floor-mats, High visibility spots)",
//     "UV Protectant Dressing / Conditioner applied to plastics and leather",
//     "Tire Shined",
//     "Spray Sealant on Paint for 1-3 months of Protection",
//   ]
// />
