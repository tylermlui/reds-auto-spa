
'use client'
import { scrollToSection } from '../../../lib/utils'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [


  { name: 'Home', href: 'home-section' },
  { name: 'About', href: 'about-section' },
  { name: 'Services', href: 'service-section' },
  { name: 'Contact', href: 'contact-section' },
]
export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <header className="sticky absolute inset-x-0 top-0 z-50 bg-black">
        <nav aria-label="Global" className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto ">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="Red's-Auto-Spa.png"
                className="h-25 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="mr-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
            <button key={item.name} onClick={() => scrollToSection(`${item.href}`)} className="group text-white transition-all duration-500 ease-in-out">
              <span className="font-Rugen bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {item.name}
              </span>
            </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button type="button" onClick={()=>scrollToSection("contact-section")} className="text-black bg-white border-1 border-white shadow-[0_4px_14px_0_rgb(255,255,255,39%)] hover:shadow-[0_6px_20px_rgba(255,255,255,23%)] hover:bg-transparent hover:text-white font-small text-lg px-5 py-2 mr-4 text-center">Get a Quote</button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="p-0">
                <span className="sr-only">Red's Auto Spa</span>
                <img
                  alt=""
                  src="Red's-Auto-Spa.png"
                  className="h-25 "
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6 mr-4" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/60">
                <div className="space-y-2 py-6 px-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => {
                        scrollToSection(`${item.href}`);
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
}
