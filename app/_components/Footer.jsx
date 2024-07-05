'use client'

const Footer = () => {
  return (
    

<footer className="bg-white dark:bg-neutral-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-between flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/4 mb-6 md:mb-0 mr-5">
                <a href="https://www.facebook.com/ReneGraceEatery" className="flex items-center mb-4">
                    <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/G%20%26%20R%20Logo.png" className="h-20 me-3" alt="G & R Eatery Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">G & R Eatery</span>
                </a>
                <p className="text-gray-500 dark:text-gray-400">G & R Eatery, based in Makati City, has been serving high-quality local cuisine to Filipinos for over seven years. We are committed to delivering delicious, authentic dishes that satisfy our customers.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h6 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Quick Links</h6>
                <ul className="text-gray-500 dark:text-gray-400">
                    <li className="mb-2">
                        <a href="https://www.facebook.com/ReneGraceEatery" className="flex items-center hover:underline">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                            <span>&nbsp;&nbsp;Facebook</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.facebook.com/ReneGraceEatery" className="flex items-center hover:underline">
                            <svg className="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.2c3.1 0 3.4 0 4.6.1 1.1.1 1.6.2 2 .3.5.2.9.5 1.2.8.4.4.6.7.8 1.2.1.4.3.9.3 2s.1 1.5.1 4.6-.1 3.4-.1 4.6c0 1.1-.2 1.6-.3 2-.2.5-.5.9-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-2 .3-1.2.1-1.5.1-4.6.1s-3.4 0-4.6-.1c-1.1-.1-1.6-.2-2-.3-.5-.2-.9-.5-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.4-.3-.9-.3-2s-.1-1.5-.1-4.6.1-3.4.1-4.6c0-1.1.2-1.6.3-2 .2-.5.5-.9.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 2-.3 1.2-.1 1.5-.1 4.6-.1zm0-2.2C8.8 0 8.4 0 7.2.1c-1.2.1-2 .3-2.7.5-.7.3-1.4.7-2 1.3-.6.6-1 .1-1.3 2-.2.7-.4 1.5-.5 2.7-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.2.3 2 .5 2.7.3.7.7 1.4 1.3 2 .6.6 1.3 1 2 1.3.7.2 1.5.4 2.7.5 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1.2-.1 2-.3 2.7-.5.7-.3 1.4-.7 2-1.3.6-.6 1-.1 1.3-2 .2-.7.4-1.5.5-2.7.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1.2-.3-2-.5-2.7-.3-.7-.7-1.4-1.3-2-.6-.6-1.3-1-2-1.3-.7-.2-1.5-.4-2.7-.5C15.6 0 15.2 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm6.4-11.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
                            </svg>
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
                <h6 className="mt-6 mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Location</h6>
                <p className="text-gray-500 dark:text-gray-400">515 Hizon St. Bangkal, Makati City, PH</p>
            </div>
            <div className="w-full md:w-1/3">
                <h6 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Opening Hours</h6>
                <p className="text-gray-500 dark:text-gray-400">Monday - Friday: 7:00 AM - 3:00 PM</p>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2024 <a href="https://www.facebook.com/ReneGraceEatery" className="hover:underline">G & R Eatery</a></span>
        </div>
    </div>
</footer>



  )
}

export default Footer