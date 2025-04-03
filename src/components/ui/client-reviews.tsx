import Marquee from "react-fast-marquee";
import { IconStarFilled } from "@tabler/icons-react";

export const ClientReviews = () => {
    return (
      
        <Marquee pauseOnHover gradient gradientColor="black" autoFill>
          <div className="flex justify-center items-center bg-[black] py-20">
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
    )
}

