export const Footer = () => {
    return (
    <footer className="p-4 sm:p-6 bg-black border-t-1">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <img src="Red's-Auto-Spa.png" className="mr-3 h-30" alt="Red's Auto Spa Logo" />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 py-7">

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="https://www.instagram.com/redsautospa/" className="hover:underline ">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a className="hover:underline">sales@redsautospa.com</a>
                            </li>
                            <li>
                                <a className="hover:underline">+1 (805) 367-6565</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a>Red's Auto Spa</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
    )
}