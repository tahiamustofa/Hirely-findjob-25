
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@material-tailwind/react";
import icon from '../../assets/img/vacancy (1).png'
import { FaClock } from "react-icons/fa";

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
          <Button className="bg-white border-2 border-[#0079C1] normal-case text-[#0079C1] px-3 py-2  xl:text-base md:text-sm text-xs rounded-lg">
          Explore All
          </Button>
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
                <FaClock  className="bg-[#E9F5FF] text-[#1976D2] p-2 text-4xl"/>
                <p className="text-sm text-black py-4">Deadline: {job.deadline}</p>
                </div>
                <div>
                    <button className="bg-[#1976D2] text-white text-xs p-4">View Details</button>
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