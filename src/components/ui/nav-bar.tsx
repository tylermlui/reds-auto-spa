import Image from "next/image";
export const NavBar = () => {
    return (
      
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
    )
}
