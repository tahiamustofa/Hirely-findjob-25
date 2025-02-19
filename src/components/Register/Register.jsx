import HirelyBanner from "../HirelyBanner/HirelyBanner";
import RegisterForm from "../RegisterForm/RegisterForm";
import './../LoginPage/LoginPage.css'

const Register = () => {
    return (
        <div>
            <div>

            <div  className='loginbody 2xl:max-w-full max-w-full px-3 md:px-8 xl:max-w-[1550px] container mx-auto flex justify-center items-center h-svh'>
       
       <main className='flex justify-center items-center mx-auto'>
       
         <section className='flex justify-center items-center mx-auto' >
         <RegisterForm></RegisterForm>
           
         </section>
       </main>
       <div id="background" className='2xl:max-w-full max-w-full px-3 md:px-8 xl:max-w-[1550px] container mx-auto h-svh'>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
       </div>
               </div>
       
            </div>
            
            <HirelyBanner></HirelyBanner>
        </div>
    );
};

export default Register;