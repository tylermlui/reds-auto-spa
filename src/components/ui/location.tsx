export const Location = () => {
      const apiKey = "AIzaSyAD_Rqqj57mXsWoH6Qscd-fxuyg5eI36K0"; // Ensure you have your API key in .env.local
      const mapMode = "roadmap"; // Change this to "satellite", "terrain", etc.
      const zoom = 8; // Adjust the zoom level
    
      const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Ventura+County&zoom=${zoom}&maptype=${mapMode}`;
    return (
    <div className="bg-black">
        <div className=" mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-neutral-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <div className="my-auto max-w-md text-center mx-auto lg:flex-auto lg:py-48 lg:text-left">
                <h2 className="text-3xl font-black tracking-tight text-balance text-white sm:text-4xl">AREAS WE SERVE.</h2>
                <div className="mt-6 grid grid-cols-2 gap-x-8 text-lg/8 text-pretty text-gray-400">
                    <div className="space-y-1">
                        <li>Agoura Hills</li>
                        <li>Camarillo</li>
                        <li>Fillmore</li>
                        <li>Port Hueneme</li>
                        <li>Moorpark</li>
                        <li>Oxnard</li>
                    </div>
                    <div className="space-y-1">
                        <li>Ventura</li>
                        <li>Santa Paula</li>
                        <li>Simi Valley</li>
                        <li>Thousand Oaks</li>
                    </div>
                </div>
                </div>
                <div className="relative mt-16 h-180 lg:mt-8">
                    <div className=" mx-auto w-100 h-150 sm:w-150 sm:h-170">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            referrerPolicy="no-referrer-when-downgrade"
                            src={src}
                            allowFullScreen
                            />
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
}