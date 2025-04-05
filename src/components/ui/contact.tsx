'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export const Contact = () => {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8" id='contact-section'>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-black tracking-tight text-balance text-white sm:text-6xl">GET A QUOTE.</h2>
        <p className="mt-5 text-lg/8 text-gray-500">If our packages aren’t the perfect fit, contact us for a personalized quote.</p>
      </div>
      <form action="https://formsubmit.co/3f8dad42ccdc97a4feb8bb8b7f7bed97" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-15">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-500">
              First name
            </label>
            <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#AA0606]">
                    <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        placeholder="John"
                        className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                        />
                </div>
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-500">
              Last name
            </label>
            <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#AA0606]">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            placeholder="Smith"
                            className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                            />
                </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-500">
              Email
            </label>
            <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#AA0606]">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="example@email.com"
                            className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                            />
                </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-500">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#AA0606]">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+1 (123)-456-7890"
                  className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                  />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="car-make" className="block text-sm/6 font-semibold text-gray-500">
              Make
            </label>
            <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#AA0606]">
                        <input
                            id="car-make"
                            name="car-make"
                            type="text"
                            placeholder="Honda"
                            className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                        />
                </div>
            </div>
          </div>
          <div>
            <label htmlFor="car-model" className="block text-sm/6 font-semibold text-gray-500">
              Model
            </label>
            <div className="mt-2.5">
            <div className="flex rounded-md bg-white border border-gray-300 focus-within:border-[#AA0606] focus-within:ring-2 focus-within:ring-[#AA0606]">
                <input
                    id="car-model"
                    name="car-model"
                    type="text"
                    placeholder="Civic"
                    className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                    />
                </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="car-year" className="block text-sm/6 font-semibold text-gray-500">
              Year
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white border border-gray-300 focus-within:border-[#AA0606] focus-within:ring-2 focus-within:ring-[#AA0606]">
                  <input
                      id="car-year"
                      name="car-year"
                      type="text"
                      placeholder="2000"
                      className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                      />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-500">
              Message
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white border border-gray-300 focus-within:border-[#AA0606] focus-within:ring-2 focus-within:ring-[#AA0606]">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-white border-none outline-none focus:ring-0"
                      defaultValue={''}
                  />
              </div>
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
            <Switch
                checked={agreed}
                onChange={setAgreed}
                className={`group flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AA0606] 
                    ${agreed ? 'bg-[#AA0606]' : 'bg-gray-200'}`}
                >
                <span className="sr-only">Agree to policies</span>
                <span
                    aria-hidden="true"
                    className={`size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out 
                    ${agreed ? 'translate-x-3.5' : ''}`}
                />
            </Switch>

            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-[#AA0606]">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#AA0606] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#FF000080] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
