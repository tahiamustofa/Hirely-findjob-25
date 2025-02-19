import { useState, useEffect } from 'react';
import pic1 from '../../assets/img/p1.png';
import pic2 from '../../assets/img/p2.png';
import './Slider.css'


const categories = [
  {
    name: "Courses",
    courses: [
      { title: "Diploma ", duration: "6-10 hrs", learners: "773,369 learners", action: "Take This Course", image: pic1 },
      { title: "Caregiving Skills ", duration: "2-3 hrs", learners: "305,850 learners", action: "Take This Course", image: pic2 },
      { title: "- Dementia Care", duration: "3-4 hrs", learners: "100,000 learners", action: "Take This Course", image: pic1 },
      { title: "in Caregiving", duration: "4-5 hrs", learners: "200,000 learners", action: "Take This Course", image: pic2 },
      { title: "Course 5", duration: "5-6 hrs", learners: "300,000 learners", action: "Take This Course", image: pic1 },
      { title: "Course 6", duration: "6-7 hrs", learners: "400,000 learners", action: "Take This Course", image: pic1 },
      { title: "Course 7", duration: "7-8 hrs", learners: "500,000 learners", action: "Take This Course", image: pic1 },
      { title: "Course 8", duration: "8-9 hrs", learners: "600,000 learners", action: "Take This Course", image: pic1 },
    ]
  },
  {
    name: "Popular Courses",
    courses: [
      { title: "Popular Course 1", duration: "6-10 hrs", learners: "773,369 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 2", duration: "2-3 hrs", learners: "305,850 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 3", duration: "3-4 hrs", learners: "100,000 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 4", duration: "4-5 hrs", learners: "200,000 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 5", duration: "5-6 hrs", learners: "300,000 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 6", duration: "6-7 hrs", learners: "400,000 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 7", duration: "7-8 hrs", learners: "500,000 learners", action: "Take This Course", image: pic1 },
      { title: "Popular Course 8", duration: "8-9 hrs", learners: "600,000 learners", action: "Take This Course", image: pic1 },
    ]
  },
  {
    name: "Top Diplomas",
    courses: [
      { title: "Top Diploma 1", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 2", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 3", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 4", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 5", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 6", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 7", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
      { title: "Top Diploma 8", duration: "3-4 hrs", learners: "96,978 learners", action: "Take This Course", image: pic1 },
    ]
  },
  {
    name: "Top Certificates",
    courses: [
      { title: "Top Certificate 1", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 2", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 3", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 4", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 5", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 6", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 7", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "Top Certificate 8", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
    ]
  },
  {
    name: "New Courses",
    courses: [
      { title: "New Course 1", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 2", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 3", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 4", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 5", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 6", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 7", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
      { title: "New Course 8", duration: "3-4 hrs", learners: "31,756 learners", action: "Take This Course", image: pic1 },
    ]
  },
];

const Slider = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // Default to 4 slides for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setSlidesToShow(1); // 1 slide for mobile
      } else if (window.innerWidth < 1224) {
        setSlidesToShow(2); // 2 slides for tablet
      } else if (window.innerWidth < 1624) {
        setSlidesToShow(3); // 2 slides for tablet
      } else {
        setSlidesToShow(4); // 4 slides for desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : Math.ceil(activeCategory.courses.length / slidesToShow) - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < Math.ceil(activeCategory.courses.length / slidesToShow) - 1 ? prevSlide + 1 : 0));
  };

  const visibleCourses = activeCategory.courses.slice(currentSlide * slidesToShow, (currentSlide + 1) * slidesToShow);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-4 py-8">

      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-1 md:gap-2 mb-4 mx-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => { setActiveCategory(category); setCurrentSlide(0); }}
            className={`lg:px-4 hover:bg-blue-200 rounded-2xl px-1 py-2 ${activeCategory.name === category.name ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="overflow-hidden relative w-full">
          <div className="flex justify-center items-center transition-transform duration-300 ease-in-out">
            {visibleCourses.map((course, index) => (
              <div key={index} className={`flex-none w-${100 / slidesToShow}% p-4  mx-auto`}>
                <div className="bg-white p-6 rounded-lg shadow-md md:h-[450px] h-96">
                  <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                    <img src={course.image} alt={course.title} className="w-full md:h-48 h-32 object-cover mb-4" />
                    <div className="content bg-[#D9D9D9] text-black p-2 lg:absolute top-24 right-1">
                      <div className="flex justify-between font-bold text-sm">
                        <p>Certificate</p>
                      </div>
                    </div>
                  </section>

                  <p className='text-[#1B232E] text-xs my-2'>health </p>
                  <h3 className="lg:text-xl text-sm font-bold my-2 ">{course.title}</h3>
                  <div className="text-black flex justify-between md:text-base text-sm my-2">
                    <p>{course.duration}  </p>
                    <p>{course.learners}</p>
                  </div>
                  <div className='flex  justify-between '>
                    <a href="#_" className="relative flex items-center px-3 py-2  text-white group">
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

                      <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                      <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                      <span className="relative "> More info </span>
                    </a>
                   

                    <button className="mt-4 bg-[#0079C1] text-white px-4 py-2 rounded shadow-2xl ease-in-out transform duration-500 infinite hover:shadow-2xl cursor-pointer animate-float">
                      {course.action}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToPreviousSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>


      <button className="
 group mx-auto my-2 p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent text-[#009B5D] h-auto w-[170px] overflow-hidden transition-all duration-100">
        <span className="
 group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-[#009B5D] transition-all duration-500">
        </span><p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
 duration-200">Explore More Courses</p>

        <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Courses... </span>
        <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-[#009B5D] transition-all duration-500"></span>
      </button>

    </div>
  );
};

export default Slider;




