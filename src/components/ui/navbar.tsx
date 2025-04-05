import { scrollToSection } from "../../../lib/utils";


export const Navbar = () => {
    return (
      <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/">
          <img src="Red's-Auto-Spa.png" className="h-25" alt="Flowbite Logo"/>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={()=>scrollToSection("contact-section")} className="text-black bg-white border-1 border-white shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-transparent hover:text-white font-small text-lg px-5 py-2 text-center">Get a Quote</button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 p-3 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-black dark:border-gray-700">
            <li>
            <button onClick={() => scrollToSection("home-section")} className="group text-[#FF0000D2] transition-all duration-500 ease-in-out">
              <span className="font-Rugen bg-left-bottom bg-gradient-to-r from-[#FF0000D2] to-[#FF0000D2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home
              </span>
            </button>
            </li>
            <li>
            <button onClick={() => scrollToSection("about-section")} className="group text-white transition-all duration-500 ease-in-out">
              <span className="font-Rugen bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </span>
            </button>            
            </li>
            <li>
            <button onClick={() => scrollToSection("service-section")} className="group text-white transition-all duration-500 ease-in-out">
              <span className="font-Rugen bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Services
              </span>
            </button> 
            </li>
            <li>
            <button onClick={() => scrollToSection("contact-section")} className="group text-white transition-all duration-500 ease-in-out">
              <span className="font-Rugen bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact
              </span>
            </button>             
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}
