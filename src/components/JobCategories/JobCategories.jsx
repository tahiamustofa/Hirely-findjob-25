import sales from '../../assets/img/sales 1.svg'
import teacher from '../../assets/img/teacher 1.svg'
import operation from '../../assets/img/operation.svg'
import { Button } from '@material-tailwind/react';

const categories = [
  { name: "Sales", count: 332, icon: sales },
  { name: "Education & Training", count: 244, icon: teacher },
  { name: "Operations Management", count: 196, icon: operation },
  { name: "Legal Services", count: 121, icon: teacher },
  { name: "Medical Services", count: 107, icon: operation },
  { name: "Accounting & Finance", count: 87, icon: sales },
  { name: "IT & Software Development", count: 72, icon: teacher },
  { name: "Engineering", count: 71, icon: operation },
  { name: "Office Management", count: 69, icon: teacher },
  { name: "Transportation & Logistics", count: 62, icon: sales },
  { name: "Security & Protection", count: 61, icon: operation },
  { name: "Administrative & Office Support", count: 53, icon: teacher },
];

const JobCategories = () => {
  return (
    <div className="mx-auto md:my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between w-full p-6 bg-white">
                        <div className="flex gap-2 items-start">
                         
                          <div><h2 className="lg:text-2xl md:text-xl text-base text-black"> Explore By Skills </h2></div>
                          
                        </div>
                
                        <div className="flex md:ml-auto items-center">
                          <Button className="bg-white border-2 border-[#0079C1] normal-case text-[#0079C1] px-3 py-2  xl:text-base md:text-sm text-xs rounded-lg">
                          Explore All
                          </Button>
                        </div>
                
                       
                      </div>  

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-3 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="bg-blue-100 p-1 rounded-lg mr-4">
                <img src={category.icon} alt="" />
            
            </div>
            <div>
              <h3 className="lg:text-lg text-sm font-semibold text-black">
                {category.name}
              </h3>
              <p className="text-blue-500 font-bold">[{category.count}]</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
