import pathao from '../../assets/img/download (14)_1702800484.svg'
import { FaUserTie } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiPlus } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './Grid.css'
import { Grid, Pagination } from 'swiper/modules';
import grid1 from '../../assets/img/image-260x150 (12)_1738568783.png'
import grid2 from '../../assets/img/image-260x150 (8)_1738567211.png'
import grid3 from '../../assets/img/list-image.jpg.thumb_1732183381.png'
import { MdAddLocation } from "react-icons/md";
import { Button } from '@material-tailwind/react';

const GridSlide = () => {
    return (
        <div className='md:my-10'>   
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between w-full p-6 bg-white">
                <div className="flex gap-2 items-start">
                 
                  <div><h2 className="lg:text-2xl md:text-xl text-base text-black">Featured Companies</h2></div>
                  
                </div>
        
                <div className="flex md:ml-auto items-center">
                  <Button className="bg-white border-2 border-[#0079C1] normal-case text-[#0079C1] px-3 py-2  xl:text-base md:text-sm text-xs rounded-lg">
                  Explore All
                  </Button>
                </div>
        
               
              </div>  
            
              <div className='relative h-[1050px] 2xl:max-w-[1400px] max-w-full px-2 md:px-8 xl:max-w-[1200px] container mx-auto '>

<Swiper
    slidesPerView={1} // Default for mobile
    grid={{
        rows: 2, // Always 2 rows
        fill: 'row', // Ensure slides fill rows properly
    }}
    spaceBetween={5}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        // When window width is >= 768px (md)
        768: {
            slidesPerView: 2, // 2 slides per view for md
            grid: {
                rows: 2, // Ensure 2 rows for md
            },
            spaceBetween:10,
        },
        // When window width is >= 1024px (lg)
        1024: {
            slidesPerView: 2, // 2 slides per view for lg
            grid: {
                rows: 2, // Ensure 2 rows for lg
            },
        },
        // When window width is >= 1500px
        1400: {
            slidesPerView: 3, // 3 slides per view for 1500px
            grid: {
                rows: 2, // Ensure 2 rows for 1500px
            },
            spaceBetween:10,
        },
    }}
    modules={[Grid, Pagination]}
    className="mySwiper"
>
    {/* SwiperSlides go here */}
    <SwiperSlide>
        <div className="flex justify-center items-center h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid2} className='relative h-52 w-82' alt="grid2" />
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao} alt="pathao" />
                            <h2 className="text-xl font-semibold">Pathao</h2>
                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-900">Dhaka North City Corporation, Dhaka</p>
                        </div>
                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
   
    <SwiperSlide>
        <div className="flex justify-center items-center h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid2} className='relative h-52 w-82' alt="grid2" />
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao} alt="pathao" />
                            <h2 className="text-xl font-semibold">Pathao</h2>
                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                        </div>
                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="flex justify-center items-center  h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div
                    className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid2} className='relative h-52 w-82'></img>
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao}></img>
                            <h2 className="text-xl font-semibold">Pathao</h2>

                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                        </div>

                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </SwiperSlide>
    <SwiperSlide>

        <div className="flex justify-center items-center  h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div
                    className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid1} className='relative  h-52 w-82'></img>
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao}></img>
                            <h2 className="text-xl font-semibold">Pathao</h2>

                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                        </div>

                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="flex justify-center items-center  h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div
                    className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid1} className='relative  h-52 w-82'></img>
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao}></img>
                            <h2 className="text-xl font-semibold">Pathao</h2>

                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                        </div>

                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </SwiperSlide>
    <SwiperSlide>  <div className="flex justify-center items-center  h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div
                    className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid2} className='relative h-52 w-60'></img>
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao}></img>
                            <h2 className="text-xl font-semibold">Pathao</h2>

                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                        </div>

                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div></SwiperSlide>
    <SwiperSlide>
    <div className="flex justify-center items-center  h-[400px] w-full">
            <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div
                    className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <img src={grid3} className='relative  h-52 w-82'></img>
                    <div className="flex flex-col gap-2">
                        <div className="text-right text-sm ">
                            <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                                <FiPlus />
                                Follow</span>
                        </div>
                        <div className="mt-2 flex gap-2 justify-start items-center">
                            <img src={pathao}></img>
                            <h2 className="text-xl font-semibold">Pathao</h2>

                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <MdAddLocation />
                            <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                        </div>

                        <div className="text-base text-black flex gap-2 justify-start items-center">
                            <FaUserTie />
                            <span>Job Opening (1)</span>
                        </div>
                        <div className="text-center md:text-base text-xs">
                            <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                                View Profile
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="flex justify-center items-center  h-[400px] w-full">
        <div className="relative cursor-pointer dark:text-white">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
            <div
                className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                <img src={grid1} className='relative  h-52 w-82'></img>
                <div className="flex flex-col gap-2">
                    <div className="text-right text-sm ">
                        <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                            <FiPlus />
                            Follow</span>
                    </div>
                    <div className="mt-2 flex gap-2 justify-start items-center">
                        <img src={pathao}></img>
                        <h2 className="text-xl font-semibold">Pathao</h2>

                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <MdAddLocation />
                        <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                    </div>

                    <div className="text-base text-black flex gap-2 justify-start items-center">
                        <FaUserTie />
                        <span>Job Opening (1)</span>
                    </div>
                    <div className="text-center md:text-base text-xs">
                        <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                            View Profile
                        </a>
                    </div>

                </div>

            </div>
        </div>

    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="flex justify-center items-center  h-[400px] w-full">
        <div className="relative cursor-pointer dark:text-white">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
            <div
                className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                <img src={grid1} className='relative  h-52 w-82'></img>
                <div className="flex flex-col gap-2">
                    <div className="text-right text-sm ">
                        <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                            <FiPlus />
                            Follow</span>
                    </div>
                    <div className="mt-2 flex gap-2 justify-start items-center">
                        <img src={pathao}></img>
                        <h2 className="text-xl font-semibold">Pathao</h2>

                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <MdAddLocation />
                        <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                    </div>

                    <div className="text-base text-black flex gap-2 justify-start items-center">
                        <FaUserTie />
                        <span>Job Opening (1)</span>
                    </div>
                    <div className="text-center md:text-base text-xs">
                        <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                            View Profile
                        </a>
                    </div>

                </div>

            </div>
        </div>

    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="flex justify-center items-center  h-[400px] w-full">
        <div className="relative cursor-pointer dark:text-white">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
            <div
                className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                <img src={grid3} className='relative  h-52 w-82'></img>
                <div className="flex flex-col gap-2">
                    <div className="text-right text-sm ">
                        <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                            <FiPlus />
                            Follow</span>
                    </div>
                    <div className="mt-2 flex gap-2 justify-start items-center">
                        <img src={pathao}></img>
                        <h2 className="text-xl font-semibold">Pathao</h2>

                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <MdAddLocation />
                        <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                    </div>

                    <div className="text-base text-black flex gap-2 justify-start items-center">
                        <FaUserTie />
                        <span>Job Opening (1)</span>
                    </div>
                    <div className="text-center md:text-base text-xs">
                        <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                            View Profile
                        </a>
                    </div>

                </div>

            </div>
        </div>

    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="flex justify-center items-center  h-[400px] w-full">
        <div className="relative cursor-pointer dark:text-white">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
            <div
                className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                <img src={grid1} className='relative  h-52 w-82'></img>
                <div className="flex flex-col gap-2">
                    <div className="text-right text-sm ">
                        <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                            <FiPlus />
                            Follow</span>
                    </div>
                    <div className="mt-2 flex gap-2 justify-start items-center">
                        <img src={pathao}></img>
                        <h2 className="text-xl font-semibold">Pathao</h2>

                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <MdAddLocation />
                        <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                    </div>

                    <div className="text-base text-black flex gap-2 justify-start items-center">
                        <FaUserTie />
                        <span>Job Opening (1)</span>
                    </div>
                    <div className="text-center md:text-base text-xs">
                        <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                            View Profile
                        </a>
                    </div>

                </div>

            </div>
        </div>

    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="flex justify-center items-center  h-[400px] w-full">
        <div className="relative cursor-pointer dark:text-white">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
            <div
                className="relative p-6 bg-white dark:text-black border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                <img src={grid3} className='relative  h-52 w-82'></img>
                <div className="flex flex-col gap-2">
                    <div className="text-right text-sm ">
                        <span className='absolute right-5 top-42 p-2 z-20 bg-[#0079C1] text-white text-xs rounded-full flex gap-1 items-center'>
                            <FiPlus />
                            Follow</span>
                    </div>
                    <div className="mt-2 flex gap-2 justify-start items-center">
                        <img src={pathao}></img>
                        <h2 className="text-xl font-semibold">Pathao</h2>

                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <MdAddLocation />
                        <p className="text-sm text-gray-700">Dhaka North City Corporation, Dhaka</p>
                    </div>

                    <div className="text-base text-black flex gap-2 justify-start items-center">
                        <FaUserTie />
                        <span>Job Opening (1)</span>
                    </div>
                    <div className="text-center md:text-base text-xs">
                        <a href="/profile" className="inline-block w-1/2 bg-[#0079C1] text-white p-2 rounded hover:bg-[#009B5D] transition duration-200">
                            View Profile
                        </a>
                    </div>

                </div>

            </div>
        </div>

    </div>
    </SwiperSlide>


</Swiper>
</div>
            
            
                </div>
       
    );
};

export default GridSlide;





        
