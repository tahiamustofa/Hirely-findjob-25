import HirelyBanner from '../HirelyBanner/HirelyBanner';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css'
const LoginPage = () => {
    return (<div>
        
        <div  className=' loginbody 2xl:max-w-full max-w-full px-3 md:px-8 xl:max-w-[1550px] container mx-auto flex justify-center items-center h-svh'>
       
<main className='flex justify-center items-center mx-auto'>

  <section className='flex justify-center items-center mx-auto' >
   <LoginForm></LoginForm>
    
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

         <HirelyBanner></HirelyBanner>
         </div>
    );
};

export default LoginPage;