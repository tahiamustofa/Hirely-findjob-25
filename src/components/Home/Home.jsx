import Banner from "../Banner/Banner";
import Expire from "../Expire/Expire";
import GridSlide from "../GridSlide/GridSlide";
import HeroSection16 from "../HeroSection16/HeroSection16";
import HirelyBanner from "../HirelyBanner/HirelyBanner";
import JobCategories from "../JobCategories/JobCategories";
import JobSlider from "../JobSlider/JobSlider";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <HeroSection16></HeroSection16>

            <div className='2xl:max-w-[1400px] max-w-full px-3 md:px-8 xl:max-w-[1200px] container mx-auto'>
                <JobSlider></JobSlider>
                <Slider></Slider>
                <GridSlide></GridSlide>
                <JobCategories></JobCategories>
                <Expire></Expire>
                </div>    
           <div>
           <Banner></Banner>
           </div>

           <div>
           <HirelyBanner></HirelyBanner>
          
           </div>
          
        </div>
    );
};

export default Home;