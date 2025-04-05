import { CheckCircleIcon } from '@heroicons/react/20/solid'

type AddOnsProps = {
  background?: string;
};

export const AddOns = ({background }: AddOnsProps) => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: background ? `url(${background})` : 'none' }}>
        <div className='bg-black/70 py-24 sm:py-32'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 p-6 rounded-lg ">
                <div className="text-center">
                    <h1 className="mt-2 text-6xl font-black tracking-tight text-white-900 sm:text-6xl">
                    ADD-ONS
                    </h1>
                </div>
                <div className={`mx-auto grid max-w-2xl grid-cols-1 pt-24 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2`}>
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg space-y-8">
                            <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                                $140
                            </p>
                            <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-4xl">
                                HEADLIGHT RESTORATION
                            </p>
                            <p className="mt-6 text-lg text-gray-200">
                                Restore clarity and brightness to your headlights with our headlight restoration service. Over time, headlights can become foggy or yellowed, reducing visibility and safety. Our professional restoration process removes oxidation and discoloration, leaving your headlights looking like new and improving nighttime driving safety.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg space-y-8">
                            <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                                $180
                            </p>
                            <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-4xl">
                                UNDERCARRIAGE CLEANING
                            </p>
                            <p className="mt-6 text-lg text-gray-200">
                                Undercarriage cleaning to remove dirt, road salt, and debris that can cause rust and damage to your vehicle’s critical components. Using high-pressure washing and eco-friendly solutions, we help protect your suspension, brake lines, and exhaust system, extending your vehicle’s lifespan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}
