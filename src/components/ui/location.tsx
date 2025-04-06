'use client'
export const Location = () => {
      const apiKey =  process.env.NEXT_PUBLIC_GOOGLE_API_KEY
      const mapMode = "roadmap"; // Change this to "satellite", "terrain", etc.
      const zoom = 8; // Adjust the zoom level
return (
    <div className="md:bg-[url('/serjan-midili-zF3fWCA5OLo-unsplash.jpg')] md:mt-15">
        <div className="bg-black/70">
            <div className=" mx-auto max-w-7xl py-0 sm:px-6 lg:px-8 pt-20 md:pb-30">
                <div className="relative isolate overflow-hidden bg-black px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="my-auto max-w-md text-center mx-auto lg:flex-auto lg:py-48 lg:text-left">
                    <h2 className="text-4xl font-black tracking-tight text-balance text-white sm:text-5xl">AREAS WE SERVE.</h2>
                    <div className="mt-6 grid grid-cols-2 lg:grid-cols-2 gap-x-8 text-lg/8 text-pretty text-gray-400">
                        <ul className="space-y-1">
                            <li>Agoura Hills</li>
                            <li>Camarillo</li>
                            <li>Fillmore</li>
                            <li>Port Hueneme</li>
                            <li>Moorpark</li>
                            <li>Oxnard</li>
                        </ul>
                        <ul className="space-y-1">
                            <li>Santa Paula</li>
                            <li>Simi Valley</li>
                            <li>Thousand Oaks</li>
                            <li>Ventura</li>
                        </ul>
                    </div>
                    </div>
                    <div className="relative mt-16 h-180 lg:mt-8">
                        <div className=" mx-auto w-90 h-120 sm:w-150 sm:h-170">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Ventura+County&zoom=${zoom}&maptype=${mapMode}`}
                                allowFullScreen
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}