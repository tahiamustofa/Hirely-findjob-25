import Find from "../Find/Find";
import HirelyBanner from "../HirelyBanner/HirelyBanner";
import JobHeader from "../JobHeader/JobHeader";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarWithBurgerMenu } from "../SidebarWithBurgerMenu/SidebarWithBurgerMenu";


const FindJob = () => {
    return (
        <div>
            <div className="lg:hidden flex 2xl:max-w-[1400px] max-w-full px-3 md:px-8 xl:max-w-[1200px] container mx-auto">
                <SidebarWithBurgerMenu></SidebarWithBurgerMenu>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-2 px-3 lg:px-8">
                <div className="hidden lg:flex lg:col-span-1">
                    <Sidebar></Sidebar>
                </div>


                <div className="lg:col-span-3">
                    <JobHeader></JobHeader>
                    <Find></Find>
                </div>


            </div>
            <HirelyBanner></HirelyBanner>
        </div>
    );
};

export default FindJob;