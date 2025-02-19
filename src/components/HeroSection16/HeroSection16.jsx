import  { useEffect, useState } from 'react';
import bg from '../../assets/img/bghero.png';
import notify from '../../assets/img/Frame.svg';
import stat from '../../assets/img/job_vacancies_home_icon 1.svg';

const HeroSection16 = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Find Your Dream Job Abroad ", " – Verified Recruiters,", "Trusted & Hassle-Free Process!"];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`
        }}>
        <div className=""></div>
        <div className="hero-content  !text-black dark:!text-black text-center 2xl:max-w-[1400px] max-w-full px-2 md:px-8 py-10 xl:max-w-[1200px] container mx-auto">
          <div className="mx-auto py-10">
            <div className='lg:max-w-xl max-w-sm mx-auto flex flex-col justify-center items-center'>
             

              <div className="w-full h-5 flex justify-center items-center my-4">
                <h1 id="typewriter" className="lg:text-4xl md:text-xl text-lg font-normal !text-black mb-4">{text}</h1>
              </div>

              <div className='mb-5 flex gap-1 lg:text-2xl text-sm text-[#0079C1]'>
                <p className="text-[#0079C1] ">
                  11,000+
                </p>
                <p> Active Vacancies, Available Right Now!  </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center shadow-2xl rounded-lg  mx-auto  gap-4 bg-white p-4  text-xs md:text-base ">
              <select className="py-2 px-4  2xl:w-96  md:w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Skills</option>
                {/* Add more skill options here */}
              </select>
              <select className="py-2 px-4 2xl:w-96  md:w-60  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Country</option>
                {/* Add more country options here */}
              </select>
              <div className=''>
              <button className="bg-blue-500  2xl:w-96  md:w-60  w-28 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-xs md:text-base">
                SEARCH JOB
              </button>
              </div>
             
            </div>
            <div className='flex md:flex-row flex-col items-center gap-1 justify-center lg:my-4 my-2 text-sm md:text-base'>
              <div className='flex  items-center justify-center gap-1'>
                <img className='md:w-9 md:h-8 w-5 h-4' src={notify} alt="" />
                <p>2 Minute</p>
              </div>
              <div className='flex md:items-start items-center md:justify-start justify-center gap-1'>
                <p className='text-[#0079C1]'>Registration</p>
                <p>For a Lifetime of Opportunities!</p>
              </div>
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-2 justify-center items-center md:place-items-center lg:gap-8 gap-5 pt-4  lg:pt-6 mx-auto">

              <div className="flex gap-2 items-center ">
                <div className='bg-white shadow-lg rounded-full p-1 border border-gray-200'>
                  <div className="bg-blue-100 p-4 rounded-full ">
                    <img src={stat} alt='stat.label' className="w-10 h-10" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mt-2">Vacancies</p>
                  <p className="text-blue-600 text-sm font-bold">6,999+</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <div className='bg-white shadow-lg rounded-full p-1 border border-gray-200'>
                  <div className="bg-blue-100 p-4 rounded-full ">
                    <img src={stat} alt='stat.label' className="w-10 h-10" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mt-2">Vacancies</p>
                  <p className="text-blue-600 text-sm font-bold">6,999+</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <div className='bg-white shadow-lg rounded-full p-1 border border-gray-200'>
                  <div className="bg-blue-100 p-4 rounded-full ">
                    <img src={stat} alt='stat.label' className="w-10 h-10" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mt-2">Vacancies</p>
                  <p className="text-blue-600 text-sm font-bold">6,999+</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection16;