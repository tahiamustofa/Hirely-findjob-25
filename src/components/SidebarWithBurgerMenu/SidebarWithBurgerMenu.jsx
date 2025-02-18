import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import star from '../../assets/img/star.svg'
import {
    Input,
} from "@material-tailwind/react";
import {
  IconButton,
  
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
 
} from "@heroicons/react/24/solid";
import {
  
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
 
export function SidebarWithBurgerMenu() {
   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const [filters, setFilters] = useState({
         skills: "",
         jobTitle: "",
         country: "",
         industry: "",
         experience: "",
         salary: "",
         currency: "",
         negotiable: false,
         expireSoon: false,
     });
 
     const handleChange = (e) => {
         const { name, value, type, checked } = e.target;
         setFilters({
             ...filters,
             [name]: type === "checkbox" ? checked : value,
         });
     };
  return (
    <>
    <div className="lg:hidden flex">
    <div className="">
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="black"
          shadow={false}
          className=" p-4"
        >
         <div className="p-4 bg-white shadow-lg rounded-lg">
                             <div className="flex gap-2 justify-between">
                             <h2 className="text-lg font-semibold mb-2">Quick Search</h2>
                             <button className="text-blue-500 text-sm mb-2">Clear Filter</button>
                             </div>
                           
         
                             <select name="skills" value={filters.skills} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                                 <option value="">Select Skills</option>
                                 <option value="javascript">JavaScript</option>
                                 <option value="python">Python</option>
                             </select>
         
                             <input
                                 type="text"
                                 name="jobTitle"
                                 value={filters.jobTitle}
                                 onChange={handleChange}
                                 placeholder="Job Title"
                                 className="w-full p-2 border rounded mb-2"
                             />
         
                             <select name="country" value={filters.country} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                                 <option value="">Select Country</option>
                                 <option value="usa">USA</option>
                                 <option value="turkey">Turkey</option>
                             </select>
         
                             <select name="industry" value={filters.industry} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                                 <option value="">Industry</option>
                                 <option value="it">IT</option>
                                 <option value="finance">Finance</option>
                             </select>
         
                             <select name="experience" value={filters.experience} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                                 <option value="">Experience</option>
                                 <option value="junior">Junior</option>
                                 <option value="senior">Senior</option>
                             </select>
         
                             <div className="flex space-x-2 mb-2">
                                 <input
                                     type="text"
                                     name="salary"
                                     value={filters.salary}
                                     onChange={handleChange}
                                     placeholder="Salary"
                                     className="w-1/2 p-2 border rounded"
                                 />
                                 <select name="currency" value={filters.currency} onChange={handleChange} className="w-1/2 p-2 border rounded">
                                     <option value="">Currency</option>
                                     <option value="usd">USD</option>
                                     <option value="eur">EUR</option>
                                 </select>
                             </div>
         
                             <div className="flex items-center mb-2">
                                 <input type="checkbox" name="negotiable" checked={filters.negotiable} onChange={handleChange} className="mr-2" />
                                 <label>Negotiable</label>
                             </div>
         
                             <div className="flex items-center mb-4">
                                 <input type="checkbox" name="expireSoon" checked={filters.expireSoon} onChange={handleChange} className="mr-2" />
                                 <label>Expire Soon</label>
                             </div>
         
         
         
                             <button className="w-full bg-blue-200 text-black p-2 rounded flex items-center justify-center mx-auto">
                                   
                                 <Input  type="text"
                                 name="Search"   label="Search"
                             
                                     icon={<FaSearch className="mr-2" />}
                                      className="w-full p-2 border rounded mb-2 "   /> 
                                    
                             </button>
         
         
                             <button className="w-full  bg-blue-100 text-blue-600 p-2 mt-2 rounded flex items-center justify-center  mx-auto shadow">
         
                                 <img src={star} className="mr-2"></img> Search By Benefits
                             </button>
                         </div>
         
         
         
        </Card>
      </Drawer>
      </div>
      </div>
    </>
  );
}