import './../../index.css'
import './Banner.css'

import banner from '../../assets/img/banner.png'

const Banner = () => {
    return (
        <div className='h-[650px] md:h-[850px] lg:h-[650px] w-full'>

            <div className="area container max-w-full h-[650px] md:h-[850px] lg:h-[650px]">
           
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <section>
                    <div className="bg-[#00457C] text-white  flex items-center justify-center mx-auto  h-[650px] md:h-[850px] lg:h-[650px]">
                        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center  lg:justify-between lg:px-5 h-[650px] ">
                            <div className="flex flex-col w-full lg:w-1/2  justify-center  lg:items-start items-center p-8">
                                <p className="text-xs text-white mb-4">
                                    The REAL candidates you seek, are REALLY looking for YOU!
                                </p>
                                <h2 className="text-xl md:text-5xl  mb-4 text-white"> Post your vacancy today.
                                </h2>
                                <p className="text-sm md:text-base text-white mb-4">
                                    Quick Results. Real People. Completely Free.
                                </p>

                                <div className="relative inline-flex  group my-4">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                    </div>
                                    <a href="#" title="Get quote now"
                                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#0079C1] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                        role="button"> Post Job For Free
                                    </a>
                                </div>

                            </div>
                            <div>
                                <img className="lg:px-1 px-5 mx-auto" src={banner} />
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>

        </div>
    );
};

export default Banner;