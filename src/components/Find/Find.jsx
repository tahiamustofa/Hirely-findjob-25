import { NavLink } from 'react-router-dom';
import icon from '../../assets/img/vacancy (1).png'
import { FaClock } from "react-icons/fa";
const jobs = [
  {
    id: 1,
    title: "Graduate Trainee Program",
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
  {
    id: 5,
    title: "Graduate Trainee Program",
    company: "Vice Estate",
    vacancies: 5,
    salary: "25000 - 35000 Taka/Monthly",
    deadline: "Mar 1st, 25",
  },
  {
    id: 6,
    title: "Senior Executive- Brand",
    company: "Vice Estate",
    vacancies: 5,
    salary: "25000 - 35000 Taka/Monthly",
    deadline: "Mar 1st, 25",
  },
  {
    id: 7,
    title: "Senior IOS Engineer",
    company: "Vice Estate",
    vacancies: 5,
    salary: "Negotiable",
    deadline: "Mar 20th, 25",
  },
  {
    id: 8,
    title: "অডিটর ও মনিটরিং",
    company: "Vice Estate",
    vacancies: 5,
    salary: "25000 - 35000 Taka/Monthly",
    deadline: "Mar 1st, 25",
  },

];
const Find = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
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
                  <button className="bg-[#1976D2] text-white text-xs p-4">
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
    </div>
  );
};

export default Find;