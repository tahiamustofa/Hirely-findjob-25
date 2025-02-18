import Find from "../Find/Find";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarWithBurgerMenu } from "../SidebarWithBurgerMenu/SidebarWithBurgerMenu";


const FindJob = () => {
    return (
        <div>
            <div className="lg:hidden flex 2xl:max-w-[1400px] max-w-full px-3 md:px-8 xl:max-w-[1200px] container mx-auto">
            <SidebarWithBurgerMenu></SidebarWithBurgerMenu>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-2">
                <div className="hidden lg:flex lg:col-span-1">
               <Sidebar></Sidebar>
                </div>

              
                <div className="lg:col-span-3">
                  <Find></Find>
                </div>


            </div>
        </div>
    );
};

export default FindJob;