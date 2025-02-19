
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@material-tailwind/react";
import icon from '../../assets/img/vacancy (1).png'
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior Executive- Brand",
    company: "Vice Estate",
    vacancies: 5,
    salary: "Negotiable",
    deadline: "Mar 3rd, 25",
  },
  {
    id: 2,
    title: "Senior IOS Engineer",
    company: "Vice Estate",
    vacancies: 5,
    salary: "Negotiable",
    deadline: "Mar 20th, 25",
  },
  {
    id: 3,
    title: "অডিটর ও মনিটরিং",
    company: "Vice Estate",
    vacancies: 5,
    salary: "25000 - 35000 Taka/Monthly",
    deadline: "Mar 1st, 25",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Vice Estate",
    vacancies: 5,
    salary: "25000 - 35000 Taka/Monthly",
    deadline: "Mar 1st, 25",
  },

];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="z-50">
      <div
        className={className}
        style={{
          ...style,

          background: "#0079C1",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50
        }}
        onClick={onClick}
      >
        ←
      </div>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="z-50">
      <div
        className={className}
        style={{
          ...style,

          background: "#0079C1",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50
        }}
        onClick={onClick}
      >
        →
      </div>
    </div>
  );
};

const JobSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="md:my-10 2xl:mx-1 mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between w-full p-6 bg-white">
        <div className="flex gap-2 items-start">

          <div><h2 className="lg:text-2xl md:text-xl text-base text-black">Live Jobs</h2></div>
          <div className="flex items-center justify-center">

            <span className="text-[#DB1616] font-medium lg:text-2xl md:text-xl text-base">(1,169)</span>
          </div>
        </div>

        <div className="flex md:ml-auto items-center">
  <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold xl:text-base md:text-sm text-xs text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Explore All</span>
  </a>
</div>



      </div>

      <Slider {...settings} className="">
        {jobs.map((job) => (
          <div key={job.id} className="p-4">
            <div className="rounded-lg p-4 shadow-xl relative">
              <h3 className="text-sm font-semibold text-[#0079C1]">{job.title}</h3>
              <div className="flex gap-2 mt-1">
                <img src={icon} alt="" />
                <p className="md:text-base text-sm text-[#1D1E1B] ">{job.company}</p>
              </div>
              <div className="mt-2">
                <p className="text-sm text-black my-2">Vacancies: {job.vacancies}</p>
                <p className="text-sm text-black my-4">Salary: {job.salary}</p>
                <hr className="text-[#0000001F]" />
                <div className="flex md:flex-row flex-col justify-between items-center">
                  <div className="md:py-4 py-2 flex gap-3 items-center ">
                    <FaClock className="bg-[#E9F5FF] text-[#1976D2] p-2 text-4xl" />
                    <p className="text-sm text-black py-4">Deadline: {job.deadline}</p>
                  </div>
                  <div>
                    <button className="bg-[#1976D2] text-white text-xs p-4 rounded-2xl">
                    <NavLink to={'/jobdetailspage'}>
                      View Details
                    </NavLink>
                    </button>
                  </div>
                </div>


              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobSlider;