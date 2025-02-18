import { BiLocationPlus } from "react-icons/bi";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#131525] font-sans ">
                <div className=" py-12  2xl:max-w-[1400px] max-w-full px-3 md:px-8 xl:max-w-[1200px] container mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div>
                            <p className="font-semibold  text-[#0275D8] dark:text-white">For Job Seekers</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Register as Candidate </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Home</p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold  text-[#0275D8] dark:text-white">For Employers</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold  text-[#0275D8] dark:text-white">Quick Link</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">

                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    About Hirely </p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Home</p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                                <p className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold  text-[#0275D8] dark:text-white">Contact Information</p>

                            <div>
                                <div className="flex flex-col items-start mt-5 space-y-2 text-white">

                                    <p className="mb-4 flex items-center justify-center md:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="mr-3 h-5 w-5">
                                            <path
                                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                            <path
                                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                        </svg>
                                        info@example.com
                                    </p>
                                    <p className="mb-4 flex items-center justify-center md:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="mr-3 h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                        + 01 234 567 88
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="mr-3 h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                                clipRule="evenodd" />
                                        </svg>
                                        + 01 234 567 89
                                    </p>

                                    <p className="mb-4 flex items-center justify-center md:justify-start gap-3">
                                        <BiLocationPlus className="text-xl" />
                                        <span className="max-w-40">
                                            11th Floor, MMK-Aakash Avenue, Plot No. 12, Kamal Ataturk Avenue, Gulshan-2, Dhaka-1212, Bangladesh
                                        </span>

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                  

                    <div className="mt-5">
                        <div className="grid grid-cols-2 lg:gap-24 md:gap-6 gap-2 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 hover:cursor-pointer sm:items-center sm:justify-between">
                            
                            <button className="rounded-md flex items-center border border-slate-300 py-3 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                <img
                                    src="https://docs.material-tailwind.com/icons/google.svg"
                                    alt="metamask"
                                    className="h-5 w-5 mr-2"
                                /> 
                                <div className="flex flex-col justify-start items-start">
                                <p className="text-[8px]">get it on</p>
                                Google Play
                                </div>
                               
                            </button>
                            <button className="rounded-md flex items-center border border-slate-300 py-3 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                <img
                                    src="https://docs.material-tailwind.com/icons/google.svg"
                                    alt="metamask"
                                    className="h-5 w-5 mr-2"
                                /> 
                                <div className="flex flex-col justify-start items-start">
                                <p className="text-[8px]"> Download on the </p>
                                App Store
                                </div>
                               
                            </button>
                            <button className="rounded-md flex items-center border border-slate-300 py-3 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                <img
                                    src="https://docs.material-tailwind.com/icons/google.svg"
                                    alt="metamask"
                                    className="h-5 w-5 mr-2"
                                /> 
                                <div className="flex flex-col justify-start items-start">
                                <p className="text-[8px]"> Explore it on  </p>
                                AppGallery
                                </div>
                               
                            </button>
                            <button className="rounded-md flex items-center border border-slate-300 py-3 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                <img
                                    src="https://docs.material-tailwind.com/icons/google.svg"
                                    alt="metamask"
                                    className="h-5 w-5 mr-2"
                                /> 
                                <div className="flex flex-col justify-start items-start">
                                <p className="text-[8px]"> Available on   </p>
                                Amazon Appstore
                                </div>
                               
                            </button>
                        </div>


                    </div>

                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
                    <div className="flex lg:flex-row flex-col lg:justify-between text-white">
                        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2023 You Company Inc. All rights reserved.</p>
                        <div className="flex gap-2 hover:cursor-pointer justify-center">
                            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                            <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                            <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                            <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                            <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;



